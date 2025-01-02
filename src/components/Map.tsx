import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import '../css/map.css';

interface City {
  name: string;
  coords: [number, number];
  importance: number;
  description: string;
}

type Coordinate = [number, number];
type MultiPolygon = Coordinate[][][];

const cities: City[] = [
  { 
    "name": "Whangarei",
    "coords": [174.3260, -36.7321],
    "importance": 1,
    "description": "Northland city known for its stunning beaches and the nearby Whangarei Heads."
  },
  { 
    "name": "Hibiscus Coast",
    "coords": [174.7633, -37.3485],
    "importance": 1,
    "description": "New Zealand's largest city and major economic center. Home to iconic Sky Tower and vibrant harbor."
  },
  { 
    "name": "Auckland",
    "coords": [174.7633, -38.1485],
    "importance": 1,
    "description": "New Zealand's largest city and major economic center. Home to iconic Sky Tower and vibrant harbor."
  },
  { 
    "name": "Rotorua",
    "coords": [175.9793, -39.2870],
    "importance": 1,
    "description": "Inland city famous for its gardens, education facilities, and research institutions."
  },
  { 
    "name": "Tauranga",
    "coords": [175.8793, -38.7870],
    "importance": 1,
    "description": "Coastal city known for its beautiful beaches, port activities, and Mount Maunganui."
  },
  { 
    "name": "New Plymouth",
    "coords": [174.0700, -40.5611],
    "importance": 1,
    "description": "A coastal city with strong arts and culture scenes, and views of Mount Taranaki."
  },
  { 
    "name": "Hawkes Bay",
    "coords": [176.5126, -40.9907],
    "importance": 1,
    "description": "Famous for its art deco architecture and vineyards, located on the North Island's east coast."
  },
  { 
    "name": "Palmerston North",
    "coords": [175.6082, -41.3508],
    "importance": 1,
    "description": "A key university city, with strong agricultural and research industries."
  },
  { 
    "name": "Wellington",
    "coords": [174.9762, -42.8866],
    "importance": 1,
    "description": "Capital city known for strong winds, cultural attractions, and being the center of government."
  },
  { 
    "name": "Nelson",
    "coords": [173.2922, -42.9925],
    "importance": 1,
    "description": "A small city known for its outdoor lifestyle, sunny climate, and arts community."
  },
  { 
    "name": "Blenheim",
    "coords": [173.9922, -42.9925],
    "importance": 1,
    "description": "A small city known for its outdoor lifestyle, sunny climate, and arts community."
  },
  { 
    "name": "Christchurch",
    "coords": [172.6362, -45.5320],
    "importance": 1,
    "description": "Largest city in South Island, known for its English heritage and post-earthquake innovation."
  },
  { 
    "name": "Dunedin",
    "coords": [170.5027, -47.8788],
    "importance": 1,
    "description": "Southern city with strong Scottish influence, known for its Victorian architecture and wildlife."
  },
  { 
    "name": "Invercargill",
    "coords": [168.8512, -48.8132],
    "importance": 1,
    "description": "Southernmost city on the mainland, known for its Scottish heritage and close proximity to natural reserves."
  },
];

const camoColors: string[] = [
  'rgb(34, 89, 41)',     // Dark green
  'rgb(85, 107, 47)',    // Dark olive green
  'rgb(107, 142, 35)',   // Olive drab
  'rgb(76, 111, 75)',    // Forest green
  'rgb(56, 124, 68)',    // Sage green
  'rgb(69, 97, 75)'      // Military green
];

const InteractiveMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const width = 800;
  const height = 1000;
  const pixelSize = 4;

  useEffect(() => {
    const svg = d3.select(mapRef.current)
      .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("class", "map");

    const projection = d3.geoMercator()
      .center([174, -41])
      .scale(2300)
      .translate([width / 2, height / 2.2]);

    const path = d3.geoPath().projection(projection);

    const distance = (p1: Coordinate, p2: Coordinate) => {
      const dx = p1[0] - p2[0];
      const dy = p1[1] - p2[1];
      return Math.sqrt(dx * dx + dy * dy);
    };

    const getHeatValue = (point: Coordinate) => {
      let maxHeat = 0;
      cities.forEach(city => {
        const cityPoint = projection(city.coords) as Coordinate;
        const dist = distance([point[0], point[1]], cityPoint);
        const heat = Math.max(0, 1 - (dist / (30 * city.importance)));
        maxHeat = Math.max(maxHeat, heat);
      });
      return maxHeat;
    };

    function getRandomCityPair() {
      const cityIndexes = Array.from({ length: cities.length }, (_, i) => i);
      const fromIndex = Math.floor(Math.random() * cityIndexes.length);
      cityIndexes.splice(fromIndex, 1);
      const toIndex = Math.floor(Math.random() * cityIndexes.length);
      return {
        from: cities[fromIndex],
        to: cities[cityIndexes[toIndex]]
      };
    }

    function createLaserElement(x1: number, y1: number, x2: number, y2: number) {
      const laser = document.createElement('div');
      laser.className = 'laser-beam';
      
      // Calculate length and angle of laser
      const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
      
      // Position and rotate the laser
      laser.style.width = `${length}px`;
      laser.style.left = `${x1}px`;
      laser.style.top = `${y1}px`;
      laser.style.transform = `rotate(${angle}deg)`;
      laser.style.transformOrigin = '0 50%';
      
      return laser;
    }

    function shootRandomLaser() {
      if (!mapRef.current) return;
      
      const { from, to } = getRandomCityPair();
      const [fromX, fromY] = projection(from.coords) as Coordinate;
      const [toX, toY] = projection(to.coords) as Coordinate;
      
      // Convert to percentage positions
      const fromXPercent = (fromX / width) * 100;
      const fromYPercent = (fromY / height) * 100;
      const toXPercent = (toX / width) * 100;
      const toYPercent = (toY / height) * 100;
      
      // Convert percentages back to pixels based on actual container size
      const containerRect = mapRef.current.getBoundingClientRect();
      const fromXPx = (fromXPercent * containerRect.width) / 100;
      const fromYPx = (fromYPercent * containerRect.height) / 100;
      const toXPx = (toXPercent * containerRect.width) / 100;
      const toYPx = (toYPercent * containerRect.height) / 100;
      
      const laser = createLaserElement(fromXPx, fromYPx, toXPx, toYPx);
      mapRef.current.appendChild(laser);

      // Add active class after a brief delay to trigger animation
      requestAnimationFrame(() => {
        laser.classList.add('active');
      });

      // Remove laser after animation completes
      setTimeout(() => {
        laser.remove();
      }, 400);
    }

    const laserInterval = setInterval(shootRandomLaser, 200);

    fetch('https://raw.githubusercontent.com/glynnbird/countriesgeojson/refs/heads/master/new%20zealand.geojson')
      .then(response => response.json())
      .then(data => {
        const multiPolygon: MultiPolygon = data.geometry.coordinates;
        multiPolygon.forEach(polygonCoords => {
          const feature = {
            type: "Feature",
            properties: data.properties,
            geometry: {
              type: "Polygon",
              coordinates: polygonCoords
            }
          };

          svg.append("path")
            .datum(feature)
            .attr("d", path as d3.ValueFn<SVGPathElement, any, string>); 
        });

        const cols = Math.ceil(width / pixelSize);
        const rows = Math.ceil(height / pixelSize);
        
        const isInside = (point: Coordinate) => {
          return multiPolygon.some(polygonCoords => {
            const feature = {
              type: "Feature",
              properties: {},
              geometry: {
                type: "Polygon",
                coordinates: polygonCoords
              }
            };
            return d3.geoContains(feature as d3.GeoPermissibleObjects, point);
          });
        };

        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            const x = j * pixelSize;
            const y = i * pixelSize;
            
            if (projection.invert) {
              const point = projection.invert([x + pixelSize/2, y + pixelSize/2]) as Coordinate;
              
              if (isInside(point)) {
                const heat = getHeatValue([x, y]);
                const rect = svg.append("rect")
                    .attr("x", x)
                    .attr("y", y)
                    .attr("width", pixelSize)
                    .attr("height", pixelSize);

                if (heat > 0.1) {
                    rect.attr("class", "pixel heat")
                        .style("animation-delay", `${Math.random() * 2}s`);
                } else {
                    // Random camo color selection
                    const randomCamoColor = camoColors[Math.floor(Math.random() * camoColors.length)];
                    rect.attr("class", "pixel")
                        .style("fill", randomCamoColor)
                        .style("opacity", 0.8 + (Math.random() * 0.2)); // Slight opacity variation
                }
              }
            }
          }
        }

        // Add city pins
        cities.forEach(city => {
          const [x, y] = projection(city.coords) as Coordinate;
          const pinContainer = document.createElement('div');
          pinContainer.className = 'city-pin';
          pinContainer.style.left = `${(x / width) * 100}%`;
          pinContainer.style.top = `${(y / height) * 100}%`;
          
          const dot = document.createElement('div');
          dot.className = 'city-dot';
          
          const card = document.createElement('div');
          card.className = 'city-card';
          card.innerHTML = `
            <h3>${city.name}</h3>
            <p>${city.description}</p>
          `;
          
          pinContainer.appendChild(dot);
          pinContainer.appendChild(card);
          if (mapRef.current) {
            mapRef.current.appendChild(pinContainer);
          }
        });
      });

    return () => {
      clearInterval(laserInterval);
    };
  }, []);

  return <div ref={mapRef} className="map-container" />;
};

export default InteractiveMap;