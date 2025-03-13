import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react'
import * as d3 from 'd3'
import '../../css/map.css'

// Import from local config file instead of fetching
import { cities } from '../../config/cityMapData'
import { newZealandGeoJson } from '../../config/nzGeoData'

type Coordinate = [number, number]
type MultiPolygon = Coordinate[][][]

const camoColors: string[] = [
    'rgb(34, 89, 41)', // Dark green
    'rgb(85, 107, 47)', // Dark olive green
    'rgb(107, 142, 35)', // Olive drab
    'rgb(76, 111, 75)', // Forest green
    'rgb(56, 124, 68)', // Sage green
    'rgb(69, 97, 75)' // Military green
]

const InteractiveMap: React.FC = () => {
    const mapRef = useRef<HTMLDivElement>(null)
    const svgRef = useRef<SVGSVGElement | null>(null)
    const markersRef = useRef<HTMLDivElement[]>([])
    const popupCardsRef = useRef<HTMLDivElement[]>([])
    const activePopupRef = useRef<string | null>(null)
    const laserIntervalRef = useRef<ReturnType<typeof setInterval>>()
    const [dimensions, setDimensions] = useState({ width: 800, height: 1000 })
    const pixelSize = window.innerWidth <= 768 ? 8 : 6 // Larger pixels with no spacing

    // Memoize the projection to prevent recalculation
    const projection = useMemo(() => {
        return d3
            .geoMercator()
            .center([174, -41.5])
            .scale(window.innerWidth <= 768 ? dimensions.width * 2.875 : dimensions.width * 3.5)
            .translate([dimensions.width / 2, window.innerWidth <= 768 ? dimensions.height / 2.1 : dimensions.height / 1.8])
    }, [dimensions])

    // Memoize the path generator
    const path = useMemo(() => d3.geoPath().projection(projection), [projection])

    // Debounced resize handler
    const handleResize = useCallback(() => {
        const debounce = <T extends (...args: unknown[]) => void>(fn: T, ms = 250) => {
            let timeoutId: ReturnType<typeof setTimeout>
            return function (this: unknown, ...args: Parameters<T>) {
                clearTimeout(timeoutId)
                timeoutId = setTimeout(() => fn.apply(this, args), ms)
            }
        }

        const resizeMap = debounce(() => {
            if (mapRef.current) {
                const container = mapRef.current.getBoundingClientRect()
                const aspectRatio = 1.25 // 1000/800
                let newWidth, newHeight

                if (window.innerWidth <= 768) {
                    newWidth = container.width
                    newHeight = newWidth * aspectRatio
                } else {
                    newWidth = 1000
                    newHeight = 1250
                }

                setDimensions({ width: newWidth, height: newHeight })
            }
        }, 250)

        window.addEventListener('resize', resizeMap)
        resizeMap() // Call once to set initial dimensions

        return () => window.removeEventListener('resize', resizeMap)
    }, [])

    // Laser beam logic
    const distance = useCallback((p1: Coordinate, p2: Coordinate) => {
        const dx = p1[0] - p2[0]
        const dy = p1[1] - p2[1]
        return Math.sqrt(dx * dx + dy * dy)
    }, [])

    const getHeatValue = useCallback(
        (point: Coordinate) => {
            let maxHeat = 0
            cities.forEach((city) => {
                const cityPoint = projection(city.coords) as Coordinate
                const dist = distance([point[0], point[1]], cityPoint)
                const heat = Math.max(0, 1 - dist / (30 * city.importance))
                maxHeat = Math.max(maxHeat, heat)
            })
            return maxHeat
        },
        [projection, distance]
    )

    const getRandomCityPair = useCallback(() => {
        const cityIndexes = Array.from({ length: cities.length }, (_, i) => i)
        const fromIndex = Math.floor(Math.random() * cityIndexes.length)
        cityIndexes.splice(fromIndex, 1)
        const toIndex = Math.floor(Math.random() * cityIndexes.length)
        return {
            from: cities[fromIndex],
            to: cities[cityIndexes[toIndex]]
        }
    }, [])

    const createLaserElement = useCallback((x1: number, y1: number, x2: number, y2: number) => {
        const laser = document.createElement('div')
        laser.className = 'absolute w-0 h-[2px] laser-beam z-50'

        const dx = x2 - x1
        const dy = y2 - y1
        const length = Math.sqrt(dx * dx + dy * dy)
        const angle = Math.atan2(dy, dx) * (180 / Math.PI)

        laser.style.width = `${length}px`
        laser.style.left = `${x1}px`
        laser.style.top = `${y1}px`
        laser.style.transform = `rotate(${angle}deg)`
        laser.style.transformOrigin = 'left center'

        return laser
    }, [])

    const shootRandomLaser = useCallback(() => {
        if (!mapRef.current || !svgRef.current) return

        const { from, to } = getRandomCityPair()
        const [fromX, fromY] = projection(from.coords) as Coordinate
        const [toX, toY] = projection(to.coords) as Coordinate

        const containerRect = mapRef.current.getBoundingClientRect()
        const svgRect = svgRef.current.getBoundingClientRect()

        const offsetX = svgRect.left - containerRect.left
        const offsetY = svgRect.top - containerRect.top

        const fromXPx = (fromX / dimensions.width) * svgRect.width + offsetX
        const fromYPx = (fromY / dimensions.height) * svgRect.height + offsetY
        const toXPx = (toX / dimensions.width) * svgRect.width + offsetX
        const toYPx = (toY / dimensions.height) * svgRect.height + offsetY

        const laser = createLaserElement(fromXPx, fromYPx, toXPx, toYPx)
        mapRef.current.appendChild(laser)

        requestAnimationFrame(() => {
            laser.classList.add('active')
        })

        setTimeout(() => {
            laser.remove()
        }, 400)
    }, [projection, getRandomCityPair, createLaserElement, dimensions])

    // Remove existing popups from document body
    const cleanupPopups = useCallback(() => {
        popupCardsRef.current.forEach((card) => {
            if (document.body.contains(card)) {
                document.body.removeChild(card)
            }
        })
        popupCardsRef.current = []
        activePopupRef.current = null
    }, [])

    useEffect(() => {
        const mapRefCurrent = mapRef.current

        const handleScroll = () => {
            if (activePopupRef.current) {
                cleanupPopups()
            }
        }

        // Add scroll event listener to both the window and map container
        window.addEventListener('scroll', handleScroll, { passive: true })
        mapRefCurrent?.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
            mapRefCurrent?.removeEventListener('scroll', handleScroll)
        }
    }, [cleanupPopups])

    // Handle showing a popup card
    const showPopupCard = useCallback(
        (cityName: string, pinRect: DOMRect) => {
            // Clean up any existing popup
            cleanupPopups()

            // Find the city data
            const city = cities.find((c) => c.name === cityName)
            if (!city || !mapRef.current) return

            // Create card for city details
            const card = document.createElement('div')
            card.className = `
            fixed bg-black/80 backdrop-blur-md rounded-xl p-3 md:p-5 
            w-[220px] md:w-[300px] opacity-0 pointer-events-none 
            transition-all duration-300 z-30 border border-green-500/30 
            shadow-lg shadow-green-900/30 transform scale-95 
            popup-card
        `

            card.innerHTML = `
            <div class="flex justify-between items-start">
                <h3 class="text-green-500 font-bold text-sm md:text-base mb-1 md:mb-2">${city.name}</h3>
                <button class="close-popup text-green-500 hover:text-white p-1 -mt-1 -mr-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 6L6 18M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <p class="text-gray-200 text-xs md:text-sm leading-relaxed mb-2">${city.description}</p>
            <div class="border-t border-green-500/30 pt-2 mt-2 space-y-1.5">
            <p class="text-green-400 text-xs md:text-sm">
                <span class="font-semibold">Host:</span> <span class="text-white">${city.host}</span>
            </p>
            <p class="text-green-400 text-xs md:text-sm">
                <span class="font-semibold">Usual Attendees:</span> <span class="text-white">${city.usualAttendees}</span>
            </p>
            <p class="text-green-400 text-xs md:text-sm">
                <span class="font-semibold">Venue:</span> <span class="text-white">${city.venue}</span>
            </p>

            <!-- Group Date and Time -->
            <div class="flex justify-between text-green-400 text-xs md:text-sm">
                <p>
                    <span class="font-semibold">Next Meetup: </span> <span class="text-white">${city.time} - </span>
                    <span class="text-white">${city.date}</span>
                </p>   
            </div>

            <div class="flex justify-end">
                <a href="${city.link}" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="inline-block mt-3 text-xs md:text-sm bg-green-500/20 hover:bg-green-500/30 text-green-400 px-3 py-1 rounded-md transition-colors">
                    View Meetup Details
                </a>
            </div>
            </div>
        `

            const mapRect = mapRef.current?.getBoundingClientRect() || { top: 0, left: 0, bottom: window.innerHeight, right: window.innerWidth }

            // Determine if card should appear above or below the pin
            const spaceAbove = pinRect.top - mapRect.top
            const spaceBelow = mapRect.bottom - pinRect.bottom
            const cardHeight = 220 // Approximate height of card

            // Position vertically based on available space
            if (spaceBelow >= cardHeight || spaceAbove < cardHeight) {
                // Position below pin if there's enough space below or not enough space above
                card.style.top = `${pinRect.bottom + 8}px`
                card.style.bottom = 'auto'
                card.style.transformOrigin = 'top center'
            } else {
                // Position above pin
                card.style.bottom = `${window.innerHeight - pinRect.top + 8}px`
                card.style.top = 'auto'
                card.style.transformOrigin = 'bottom center'
            }

            // Determine horizontal positioning
            const isNearLeftEdge = pinRect.left - mapRect.left < 150
            const isNearRightEdge = mapRect.right - pinRect.right < 150

            if (isNearLeftEdge) {
                card.style.left = `${pinRect.left}px`
                card.style.right = 'auto'
            } else if (isNearRightEdge) {
                card.style.right = `${window.innerWidth - pinRect.right}px`
                card.style.left = 'auto'
            } else {
                // Center the card horizontally under the pin
                card.style.left = `${pinRect.left + pinRect.width / 2 - 110}px` // Half of 220px card width
                card.style.right = 'auto'
            }

            // Add the card to document body and track it for cleanup
            document.body.appendChild(card)
            popupCardsRef.current.push(card)
            activePopupRef.current = cityName

            // Add click event to close button
            const closeButton = card.querySelector('.close-popup')
            if (closeButton) {
                closeButton.addEventListener('click', (e) => {
                    e.stopPropagation()
                    cleanupPopups()
                })
            }

            // Show the card
            requestAnimationFrame(() => {
                card.style.opacity = '1'
                card.style.pointerEvents = 'auto'
                card.style.transform = 'scale(1)'
            })
        },
        [cleanupPopups]
    )

    // Handle popup closing - global click handler
    useEffect(() => {
        const handleDocumentClick = (e: MouseEvent) => {
            // Only close popup if click is outside any marker and not on the popup itself
            const target = e.target as HTMLElement

            // Don't close if clicked on a marker or inside a popup
            const isMarkerClick = markersRef.current.some((marker) => marker.contains(target))
            const isPopupClick = popupCardsRef.current.some((popup) => popup.contains(target))

            if (!isMarkerClick && !isPopupClick) {
                cleanupPopups()
            }
        }

        document.addEventListener('click', handleDocumentClick)
        return () => {
            document.removeEventListener('click', handleDocumentClick)
        }
    }, [cleanupPopups])

    // Create city markers with support for both mouse and touch events
    const createCityMarkers = useCallback(() => {
        if (!mapRef.current) return

        // Clean up existing markers and popups
        markersRef.current.forEach((marker) => marker.remove())
        markersRef.current = []
        cleanupPopups()

        cities.forEach((city) => {
            const [x, y] = projection(city.coords) as Coordinate
            const pinContainer = document.createElement('div')
            pinContainer.className = `
                absolute -translate-x-1/2 -translate-y-full
                cursor-pointer group z-10
            `
            pinContainer.setAttribute('data-city', city.name)

            const xPos = (x / dimensions.width) * 100
            const yPos = (y / dimensions.height) * 100

            pinContainer.style.left = `${xPos}%`
            pinContainer.style.top = `${yPos}%`

            // Create pin shape
            const pin = document.createElement('div')
            pin.className = `
                w-4 h-6 md:w-8 md:h-12 relative
                transition-transform duration-300 ease-bounce
                hover:scale-125 hover:-translate-y-1 origin-bottom
                active:scale-125 active:-translate-y-1
            `
            pin.innerHTML = `
                <svg viewBox="0 0 24 36" class="w-full h-full">
                    <path d="M12 0C5.4 0 0 5.4 0 12c0 7.2 12 24 12 24s12-16.8 12-24c0-6.6-5.4-12-12-12z" 
                          fill="#4ade80" class="transition-colors duration-300 group-hover:fill-green-400 group-active:fill-green-400"/>
                    <circle cx="12" cy="12" r="6" fill="#134e2c" class="group-hover:animate-pulse group-active:animate-pulse"/>
                </svg>
                <div class="absolute top-[18%] left-1/2 -translate-x-1/2 w-1.5 h-1.5 md:w-3 md:h-3 
                           bg-green-600 rounded-full opacity-0 group-hover:opacity-100 group-active:opacity-100
                           transition-opacity duration-300 animate-pulse"></div>
            `

            // Handle click for mobile (and desktop) - show/hide popup
            pinContainer.addEventListener('click', (e) => {
                e.stopPropagation()

                const clickedCity = pinContainer.getAttribute('data-city')

                // If this pin's popup is already active, close it
                if (activePopupRef.current === clickedCity) {
                    cleanupPopups()
                } else {
                    // Otherwise, show this pin's popup
                    showPopupCard(city.name, pinContainer.getBoundingClientRect())
                }
            })

            // For desktop: Mouse hover events
            if (window.matchMedia('(min-width: 768px)').matches) {
                pinContainer.addEventListener('mouseenter', () => {
                    if (!activePopupRef.current) {
                        showPopupCard(city.name, pinContainer.getBoundingClientRect())
                    }
                })

                pinContainer.addEventListener('mouseleave', () => {
                    // Only close on mouseleave if we're not in "clicked" mode
                    const clicked = activePopupRef.current === city.name
                    if (!clicked) {
                        cleanupPopups()
                    }
                })
            }

            pinContainer.appendChild(pin)
            mapRef.current?.appendChild(pinContainer)
            markersRef.current.push(pinContainer)
        })
    }, [projection, dimensions, cleanupPopups, showPopupCard])

    // Render the map
    const renderMap = useCallback(() => {
        if (!mapRef.current) return

        // Clean up
        d3.select(mapRef.current).select('svg').remove()
        const lasers = mapRef.current.querySelectorAll('.laser-beam')
        lasers.forEach((laser) => laser.remove())
        cleanupPopups()

        // Create new SVG
        const newSvg = d3.select(mapRef.current).append('svg').attr('viewBox', `0 0 ${dimensions.width} ${dimensions.height}`).attr('width', '100%').attr('height', '100%').attr('class', 'absolute w-full h-full left-0 top-0')

        svgRef.current = newSvg.node() as SVGSVGElement

        const multiPolygon = newZealandGeoJson.geometry.coordinates as MultiPolygon

        // Use requestAnimationFrame for smoother rendering
        requestAnimationFrame(() => {
            // Render NZ outline
            multiPolygon.forEach((polygonCoords) => {
                const feature = {
                    type: 'Feature',
                    properties: newZealandGeoJson.properties,
                    geometry: {
                        type: 'Polygon',
                        coordinates: polygonCoords
                    }
                }

                newSvg
                    .append('path')
                    .datum(feature)
                    .attr('d', path as d3.ValueFn<SVGPathElement, unknown, string>)
                    .attr('class', 'fill-none stroke-neutral-700 stroke-[0.5]')
            })

            // Render pixels in chunks for better performance
            const cols = Math.ceil(dimensions.width / pixelSize)
            const rows = Math.ceil(dimensions.height / pixelSize)
            const chunkSize = 500 // Process this many pixels at once

            const isInside = (point: Coordinate) => {
                return multiPolygon.some((polygonCoords) => {
                    const feature = {
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            type: 'Polygon',
                            coordinates: polygonCoords
                        }
                    }
                    return d3.geoContains(feature as d3.GeoPermissibleObjects, point)
                })
            }

            // Pre-compute which pixels are inside NZ
            const pixelsToRender: { x: number; y: number; heat: number }[] = []

            for (let i = 0; i < rows; i++) {
                // Don't skip rows to eliminate gaps
                for (let j = 0; j < cols; j++) {
                    // Don't skip columns to eliminate gaps
                    const x = j * pixelSize
                    const y = i * pixelSize

                    if (projection.invert) {
                        const point = projection.invert([x + pixelSize / 2, y + pixelSize / 2]) as Coordinate

                        if (isInside(point)) {
                            const heat = getHeatValue([x, y])
                            pixelsToRender.push({ x, y, heat })
                        }
                    }
                }
            }

            // Render pixels in chunks
            let currentIndex = 0

            function renderChunk() {
                const endIndex = Math.min(currentIndex + chunkSize, pixelsToRender.length)

                for (let i = currentIndex; i < endIndex; i++) {
                    const { x, y, heat } = pixelsToRender[i]
                    const rect = newSvg.append('rect').attr('x', x).attr('y', y).attr('width', pixelSize).attr('height', pixelSize).attr('stroke', 'none') // Ensure no stroke to avoid gaps

                    if (heat > 0.1) {
                        rect.attr('class', 'pixel heat').style('animation-delay', `${Math.random() * 2}s`)
                    } else {
                        const randomCamoColor = camoColors[Math.floor(Math.random() * camoColors.length)]
                        rect.attr('class', 'pixel')
                            .style('fill', randomCamoColor)
                            .style('opacity', 0.8 + Math.random() * 0.2)
                    }
                }

                currentIndex = endIndex

                if (currentIndex < pixelsToRender.length) {
                    requestAnimationFrame(renderChunk)
                } else {
                    // All pixels rendered, create city markers
                    createCityMarkers()

                    // Start laser animations
                    if (laserIntervalRef.current) {
                        clearInterval(laserIntervalRef.current)
                    }

                    laserIntervalRef.current = setInterval(() => {
                        shootRandomLaser()
                    }, 300) // Reduced frequency for better performance
                }
            }

            // Start rendering chunks
            renderChunk()
        })
    }, [dimensions, path, projection, getHeatValue, createCityMarkers, shootRandomLaser, pixelSize, cleanupPopups])

    // Initialize resize handler
    useEffect(() => {
        return handleResize()
    }, [handleResize])

    // Render map when dimensions change
    useEffect(() => {
        renderMap()

        return () => {
            cleanupPopups()
            if (laserIntervalRef.current) {
                clearInterval(laserIntervalRef.current)
            }
        }
    }, [dimensions, renderMap, cleanupPopups])

    return <div ref={mapRef} className="w-full h-[60vh] md:h-[80vh] lg:h-screen m-0 p-0 bg-transparent relative overflow-hidden" />
}

export default InteractiveMap
