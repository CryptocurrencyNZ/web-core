import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import '../css/map.css'

interface City {
    name: string
    coords: [number, number]
    importance: number
    description: string
}

type Coordinate = [number, number]
type MultiPolygon = Coordinate[][][]

const cities: City[] = [
    {
        name: 'Whangarei',
        coords: [174.326, -36.7321],
        importance: 1,
        description: 'Northland city known for its stunning beaches and the nearby Whangarei Heads.'
    },
    {
        name: 'Hibiscus Coast',
        coords: [174.7633, -37.3485],
        importance: 1,
        description: "New Zealand's largest city and major economic center. Home to iconic Sky Tower and vibrant harbor."
    },
    {
        name: 'Auckland',
        coords: [174.7633, -38.1485],
        importance: 1,
        description: "New Zealand's largest city and major economic center. Home to iconic Sky Tower and vibrant harbor."
    },
    {
        name: 'Rotorua',
        coords: [175.9793, -39.287],
        importance: 1,
        description: 'Inland city famous for its gardens, education facilities, and research institutions.'
    },
    {
        name: 'Tauranga',
        coords: [175.8793, -38.787],
        importance: 1,
        description: 'Coastal city known for its beautiful beaches, port activities, and Mount Maunganui.'
    },
    {
        name: 'New Plymouth',
        coords: [174.07, -39.4011],
        importance: 1,
        description: 'A coastal city with strong arts and culture scenes, and views of Mount Taranaki.'
    },
    {
        name: 'Hawkes Bay',
        coords: [176.5126, -39.4907],
        importance: 1,
        description: "Famous for its art deco architecture and vineyards, located on the North Island's east coast."
    },
    {
        name: 'Palmerston North',
        coords: [175.6082, -40.1508],
        importance: 1,
        description: 'A key university city, with strong agricultural and research industries.'
    },
    {
        name: 'Wellington',
        coords: [174.9762, -41.2866],
        importance: 1,
        description: 'Capital city known for strong winds, cultural attractions, and being the center of government.'
    },
    {
        name: 'Nelson',
        coords: [173.2922, -41.2925],
        importance: 1,
        description: 'A small city known for its outdoor lifestyle, sunny climate, and arts community.'
    },
    {
        name: 'Blenheim',
        coords: [173.9922, -40.9925],
        importance: 1,
        description: 'A small city known for its outdoor lifestyle, sunny climate, and arts community.'
    },
    {
        name: 'Christchurch',
        coords: [172.6362, -43.532],
        importance: 1.5,
        description: 'Largest city in South Island, known for its English heritage and post-earthquake innovation.'
    },
    {
        name: 'Dunedin',
        coords: [170.5027, -45.8788],
        importance: 1.5,
        description: 'Southern city with strong Scottish influence, known for its Victorian architecture and wildlife.'
    },
    {
        name: 'Invercargill',
        coords: [168.1512, -46.1132],
        importance: 1.5,
        description: 'Southernmost city on the mainland, known for its Scottish heritage and close proximity to natural reserves.'
    }
]

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
    const [dimensions, setDimensions] = useState({ width: 800, height: 1000 })
    const pixelSize = 4

    // Add resize handler
    useEffect(() => {
        function handleResize() {
            if (mapRef.current) {
                const container = mapRef.current.getBoundingClientRect()
                const aspectRatio = 1.25 // 1000/800
                let newWidth, newHeight

                if (window.innerWidth <= 768) {
                    newWidth = container.width
                    newHeight = newWidth * aspectRatio
                } else {
                    // Increased base size for desktop
                    newWidth = 1000 // Increased from 800
                    newHeight = 1250 // Increased from 1000
                }

                setDimensions({ width: newWidth, height: newHeight })
            }
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (!mapRef.current) return
        while (mapRef.current.firstChild) {
            mapRef.current.removeChild(mapRef.current.firstChild)
        }

        const svg = d3.select(mapRef.current).append('svg').attr('viewBox', `0 0 ${dimensions.width} ${dimensions.height}`).attr('width', '100%').attr('height', '100%').attr('class', 'absolute w-full h-full left-0 top-0')

        const projection = d3
            .geoMercator()
            .center([174, -41.5])
            .scale(
                window.innerWidth <= 768
                    ? dimensions.width * 2.875 // Mobile scale
                    : dimensions.width * 3.5
            ) // Desktop scale
            .translate([
                dimensions.width / 2,
                window.innerWidth <= 768
                    ? dimensions.height / 2.1 // Mobile position
                    : dimensions.height / 1.8 // Lower position for desktop
            ])

        const path = d3.geoPath().projection(projection)

        const distance = (p1: Coordinate, p2: Coordinate) => {
            const dx = p1[0] - p2[0]
            const dy = p1[1] - p2[1]
            return Math.sqrt(dx * dx + dy * dy)
        }

        const getHeatValue = (point: Coordinate) => {
            let maxHeat = 0
            cities.forEach((city) => {
                const cityPoint = projection(city.coords) as Coordinate
                const dist = distance([point[0], point[1]], cityPoint)
                const heat = Math.max(0, 1 - dist / (30 * city.importance))
                maxHeat = Math.max(maxHeat, heat)
            })
            return maxHeat
        }

        function getRandomCityPair() {
            const cityIndexes = Array.from({ length: cities.length }, (_, i) => i)
            const fromIndex = Math.floor(Math.random() * cityIndexes.length)
            cityIndexes.splice(fromIndex, 1)
            const toIndex = Math.floor(Math.random() * cityIndexes.length)
            return {
                from: cities[fromIndex],
                to: cities[cityIndexes[toIndex]]
            }
        }

        function createLaserElement(x1: number, y1: number, x2: number, y2: number) {
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
        }

        function shootRandomLaser() {
            if (!mapRef.current) return

            const { from, to } = getRandomCityPair()
            const [fromX, fromY] = projection(from.coords) as Coordinate
            const [toX, toY] = projection(to.coords) as Coordinate

            const containerRect = mapRef.current.getBoundingClientRect()
            const svgRect = mapRef.current.querySelector('svg')?.getBoundingClientRect()

            if (!svgRect) return

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
        }

        const laserInterval = setInterval(shootRandomLaser, 200)

        fetch('https://raw.githubusercontent.com/glynnbird/countriesgeojson/refs/heads/master/new%20zealand.geojson')
            .then((response) => response.json())
            .then((data) => {
                const multiPolygon: MultiPolygon = data.geometry.coordinates
                multiPolygon.forEach((polygonCoords) => {
                    const feature = {
                        type: 'Feature',
                        properties: data.properties,
                        geometry: {
                            type: 'Polygon',
                            coordinates: polygonCoords
                        }
                    }

                    svg.append('path')
                        .datum(feature)
                        .attr('d', path as d3.ValueFn<SVGPathElement, unknown, string>)
                        .attr('class', 'fill-none stroke-neutral-700 stroke-[0.5]')
                })

                const cols = Math.ceil(dimensions.width / pixelSize)
                const rows = Math.ceil(dimensions.height / pixelSize)

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

                for (let i = 0; i < rows; i++) {
                    for (let j = 0; j < cols; j++) {
                        const x = j * pixelSize
                        const y = i * pixelSize

                        if (projection.invert) {
                            const point = projection.invert([x + pixelSize / 2, y + pixelSize / 2]) as Coordinate

                            if (isInside(point)) {
                                const heat = getHeatValue([x, y])
                                const rect = svg.append('rect').attr('x', x).attr('y', y).attr('width', pixelSize).attr('height', pixelSize)

                                if (heat > 0.1) {
                                    rect.attr('class', 'pixel heat').style('animation-delay', `${Math.random() * 2}s`)
                                } else {
                                    const randomCamoColor = camoColors[Math.floor(Math.random() * camoColors.length)]
                                    rect.attr('class', 'pixel')
                                        .style('fill', randomCamoColor)
                                        .style('opacity', 0.8 + Math.random() * 0.2)
                                }
                            }
                        }
                    }
                }

                cities.forEach((city) => {
                    const [x, y] = projection(city.coords) as Coordinate
                    const pinContainer = document.createElement('div')
                    pinContainer.className = `
                        absolute w-3 h-3 md:w-5 md:h-5 -translate-x-1/2 -translate-y-1/2 
                        cursor-pointer z-10 group
                    `
                    pinContainer.setAttribute('data-city', city.name)

                    // Adjusted positioning calculation
                    const xPos = (x / dimensions.width) * 100
                    const yPos = (y / dimensions.height) * 100

                    pinContainer.style.left = `${xPos}%`
                    pinContainer.style.top = `${yPos}%`

                    const dot = document.createElement('div')
                    dot.className = `
                        absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full 
                        left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 city-dot
                    `

                    const card = document.createElement('div')
                    card.className = `
                        absolute bg-black/80 backdrop-blur-md rounded-xl p-3 md:p-5 
                        w-[200px] md:w-[300px] -translate-x-1/2 opacity-0 pointer-events-none 
                        transition-all duration-300 group-hover:opacity-100 
                        group-hover:pointer-events-auto z-10 border border-green-500/30 
                        shadow-lg shadow-green-900/30
                        ${x > dimensions.width * 0.7 ? '-left-full' : x < dimensions.width * 0.3 ? 'left-full' : 'left-1/2'}
                        ${y > dimensions.height * 0.7 ? 'bottom-full' : 'top-full'}
                    `

                    card.innerHTML = `
                        <h3 class="text-green-500 font-bold text-sm md:text-base mb-1 md:mb-2">${city.name}</h3>
                        <p class="text-gray-200 text-xs md:text-sm leading-relaxed">${city.description}</p>
                    `

                    pinContainer.appendChild(dot)
                    pinContainer.appendChild(card)
                    mapRef.current?.appendChild(pinContainer)
                })
            })

        return () => {
            // Clear intervals
            clearInterval(laserInterval)
            // Clean up all content
            if (mapRef.current) {
                while (mapRef.current.firstChild) {
                    mapRef.current.removeChild(mapRef.current.firstChild)
                }
            }
        }
    }, [dimensions])

    return <div ref={mapRef} className="w-full h-[60vh] md:h-[80vh] lg:h-screen m-0 p-0 bg-transparent relative overflow-hidden" />
}

export default InteractiveMap
