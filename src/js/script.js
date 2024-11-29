import React, { useEffect, useRef } from "react";

class Node {
    constructor(x, y, size, speed, angle) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.angle = angle;
        this.targetX = x;
        this.targetY = y;
        this.originalSpeed = speed;
        this.forceMagnitude = 0;
    }

    update(mouseX, mouseY) {
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distToCursor = Math.sqrt(dx * dx + dy * dy);
        const cursorInfluenceRadius = 200;

        if (distToCursor < cursorInfluenceRadius) {
            const repulsionForce = (1 - distToCursor / cursorInfluenceRadius) * 2;
            const angle = Math.atan2(dy, dx);
            
            this.x -= Math.cos(angle) * repulsionForce;
            this.y -= Math.sin(angle) * repulsionForce;
            
            this.forceMagnitude = repulsionForce * 0.5;
        } else {
            this.forceMagnitude = Math.max(0, this.forceMagnitude - 0.05);
        }

        this.x = (this.x + Math.cos(this.angle) * this.speed + window.innerWidth) % window.innerWidth;
        this.y = (this.y + Math.sin(this.angle) * this.speed + window.innerHeight) % window.innerHeight;
        
        this.angle += (Math.random() - 0.5) * 0.1;

        return this.forceMagnitude;
    }
}

import React from "react";

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Use the canvas ref and integrate the logic from `script.js`
    const canvas = canvasRef.current;

    if (!canvas) return;

    class Node {
      constructor(x, y, size, speed, angle) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.angle = angle;
        this.targetX = x;
        this.targetY = y;
        this.originalSpeed = speed;
        this.forceMagnitude = 0;
      }

      update(mouseX, mouseY) {
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distToCursor = Math.sqrt(dx * dx + dy * dy);
        const cursorInfluenceRadius = 200;

        if (distToCursor < cursorInfluenceRadius) {
          const repulsionForce = (1 - distToCursor / cursorInfluenceRadius) * 2;
          const angle = Math.atan2(dy, dx);

          this.x -= Math.cos(angle) * repulsionForce;
          this.y -= Math.sin(angle) * repulsionForce;

          this.forceMagnitude = repulsionForce * 0.5;
        } else {
          this.forceMagnitude = Math.max(0, this.forceMagnitude - 0.05);
        }

        this.x = (this.x + Math.cos(this.angle) * this.speed + window.innerWidth) % window.innerWidth;
        this.y = (this.y + Math.sin(this.angle) * this.speed + window.innerHeight) % window.innerHeight;

        this.angle += (Math.random() - 0.5) * 0.1;

        return this.forceMagnitude;
      }
    }

    class BackgroundCanvas {
      constructor(canvas) {
        this.canvas = canvas;
        this.nodes = [];
        this.mouseX = 0;
        this.mouseY = 0;
        this.maxDist = 150;
        this.ctx = this.canvas.getContext("2d");

        this.init();
        this.animate();
        this.setupEventListeners();
      }

      init() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        for (let i = 0; i < 15; i++) {
          this.nodes.push(
            new Node(
              Math.random() * window.innerWidth,
              Math.random() * window.innerHeight,
              Math.random() * 8 + 4,
              Math.random() * 0.5 + 0.2,
              Math.random() * Math.PI * 2
            )
          );
        }
      }

      setupEventListeners() {
        window.addEventListener("mousemove", (e) => {
          this.mouseX = e.clientX;
          this.mouseY = e.clientY;
        });

        window.addEventListener("resize", () => {
          this.canvas.width = window.innerWidth;
          this.canvas.height = window.innerHeight;
        });
      }

      drawConnections() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.strokeStyle = `rgba(255, 255, 255, 0.1)`;

        this.nodes.forEach((node1) => {
          this.nodes.forEach((node2) => {
            const dx = node1.x - node2.x;
            const dy = node1.y - node2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < this.maxDist) {
              this.ctx.beginPath();
              this.ctx.moveTo(node1.x, node1.y);
              this.ctx.lineTo(node2.x, node2.y);
              this.ctx.stroke();
            }
          });
        });
      }

      drawNodes() {
        this.nodes.forEach((node) => {
          const forceMagnitude = node.update(this.mouseX, this.mouseY);

          this.ctx.beginPath();
          this.ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
          this.ctx.fillStyle = `rgba(255, 255, 255, ${0.5 + forceMagnitude})`;
          this.ctx.fill();
        });
      }

      animate() {
        this.drawConnections();
        this.drawNodes();
        requestAnimationFrame(() => this.animate());
      }
    }

    new BackgroundCanvas(canvas);
  }, []);

  return <canvas ref={canvasRef} id="canvas" />;
};

export default Background;


 // Location data
 const locations = [
    {
        name: "Auckland",
        description: "New Zealand's Crypto Hub",
        details: "Home to the largest concentration of cryptocurrency exchanges and blockchain startups in the country.",
        x: 65,
        y: 20
    },
    {
        name: "Wellington",
        description: "Regulatory Center",
        details: "Where cryptocurrency policy and regulation take shape, hosting key financial institutions and government bodies.",
        x: 71,
        y: 38
    },
    {
        name: "Christchurch",
        description: "Mining Capital",
        details: "Leveraging renewable energy for sustainable cryptocurrency mining operations.",
        x: 51,
        y: 67
    },
    {
        name: "Queenstown",
        description: "Crypto Tourism Pioneer",
        details: "First city in NZ to widely accept cryptocurrency payments for tourism services.",
        x: 25,
        y: 70
    },
    {
        name: "Hamilton",
        description: "Agri-Tech Blockchain Hub",
        details: "Where blockchain technology intersects with agriculture, enabling traceability and transparency in food production.",
        x: 65,
        y: 25
    },
    {
        name: "Napier",
        description: "Crypto-Driven Tourism",
        details: "This coastal city is embracing cryptocurrency for its wine tourism sector, allowing travelers to book wine tours and purchases with digital currencies.",
        x: 78,
        y: 34
    },
    {
        name: "Dunedin",
        description: "South Island's Crypto Growth Spot",
        details: "A burgeoning hub for blockchain startups, with a focus on eco-friendly and carbon-neutral initiatives.",
        x: 33,
        y: 80
    },
    {
        name: "Tauranga",
        description: "Blockchain Port City",
        details: "The port city integrates blockchain for supply chain management and maritime trade, improving transparency and efficiency.",
        x: 80,
        y: 26
    },
    {
        name: "Rotorua",
        description: "Crypto & Wellness",
        details: "A leader in integrating cryptocurrency into wellness and spa industries, allowing for easy transactions with digital currency.",
        x: 72,
        y: 25
    },
    {
        name: "Whangarei",
        description: "Northern Blockchain Frontier",
        details: "A growing center for blockchain development, hosting several early-stage crypto startups and offering specialized services for decentralized finance (DeFi).",
        x: 60,
        y: 15
    },
    {
        name: "Nelson",
        description: "Green Tech Blockchain",
        details: "This city is pushing the boundaries of sustainable crypto mining and renewable energy-powered blockchain technologies.",
        x: 55,
        y: 47
    },
    {
        name: "Invercargill",
        description: "Blockchain & Agriculture Nexus",
        details: "Known for its collaboration between blockchain developers and agricultural businesses, enhancing local food production and export traceability.",
        x: 14,
        y: 85
    }
];

        // Initialize GSAP animations
        gsap.from(".hero-title", {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 0.5
        });

        gsap.from(".hero-description", {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: 0.8
        });

        gsap.from(".hero-btn", {
            opacity: 0,
            y: 20,
            duration: 1,
            delay: 1.1
        });

        // Create location pins and cards
        const mapContainer = document.querySelector('.map-container');

        locations.forEach(location => {
            // Create pin
            const pin = document.createElement('div');
            pin.className = 'pin';
            pin.style.left = `${location.x}%`;
            pin.style.top = `${location.y}%`;
            mapContainer.appendChild(pin);

            // Create location card
            const card = document.createElement('div');
            card.className = 'location-card';
            card.innerHTML = `
                <h3>${location.name}</h3>
                <h4 style="color: #888; margin-bottom: 10px;">${location.description}</h4>
                <p>${location.details}</p>
            `;
            card.style.left = `${location.x}%`;
            card.style.top = `${location.y + 5}%`;
            mapContainer.appendChild(card);

            // Add hover interactions
            pin.addEventListener('mouseenter', () => {
                document.querySelectorAll('.location-card').forEach(c => c.classList.remove('active'));
                card.classList.add('active');
            });

            mapContainer.addEventListener('mouseleave', () => {
                card.classList.remove('active');
            });
        });

        // Simple parallax effect
        document.addEventListener('mousemove', (e) => {
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
            
            gsap.to(".map-container", {
                x: moveX,
                y: moveY,
                duration: 1,
                ease: "power2.out"
            });
        });
        
    // New animations for Features section
    gsap.registerPlugin(ScrollTrigger);

    // Animate section title and description
    gsap.from(".section-title", {
        scrollTrigger: {
            trigger: ".features-section",
            start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1
    });

    gsap.from(".section-description", {
        scrollTrigger: {
            trigger: ".features-section",
            start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3
    });

    // Animate feature cards
    gsap.from(".feature-card", {
        scrollTrigger: {
            trigger: ".features-grid",
            start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2
    });








// Create laser elements
const createLaser = () => {
    const laser = document.createElement('div');
    laser.className = 'laser';
    mapContainer.appendChild(laser);
    return laser;
};

const createLaserDot = () => {
    const dot = document.createElement('div');
    dot.className = 'laser-dot';
    mapContainer.appendChild(dot);
    return dot;
};

// Animation function
function animateLaserBetweenCities() {
    const laser = createLaser();
    const laserDot = createLaserDot();
    let currentActivePin = null;
    
    const deactivateCurrentPin = () => {
        if (currentActivePin) {
            currentActivePin.classList.remove('active');
        }
    };
    
    const activatePin = (x, y) => {
        // Find the pin at these coordinates
        const pins = document.querySelectorAll('.pin');
        pins.forEach(pin => {
            const pinX = parseFloat(pin.style.left);
            const pinY = parseFloat(pin.style.top);
            
            // Allow for small margin of error in positioning
            if (Math.abs(pinX - x) < 1 && Math.abs(pinY - y) < 1) {
                deactivateCurrentPin();
                pin.classList.add('active');
                currentActivePin = pin;
            }
        });
    };
    
    const animateToNextCity = () => {
        const fromCity = locations[Math.floor(Math.random() * locations.length)];
        const toCity = locations[Math.floor(Math.random() * locations.length)];
        
        if (fromCity === toCity) return animateToNextCity();
        
        const fromX = fromCity.x;
        const fromY = fromCity.y;
        const toX = toCity.x;
        const toY = toCity.y;
        
        // Calculate laser length and angle
        const dx = toX - fromX;
        const dy = toY - fromY;
        const length = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * 180 / Math.PI;
        
        // Position and rotate laser
        laser.style.width = `${length}%`;
        laser.style.left = `${fromX}%`;
        laser.style.top = `${fromY}%`;
        laser.style.transform = `rotate(${angle}deg)`;
        
        // Activate starting pin
        activatePin(fromX, fromY);
        
        // Animate dot along the laser
        gsap.to(laserDot, {
            left: `${toX}%`,
            top: `${toY}%`,
            duration: 1,
            ease: "none",
            onStart: () => {
                gsap.to(laser, {
                    opacity: 0.6,
                    duration: 0.2
                });
            },
            onComplete: () => {
                // Activate ending pin
                activatePin(toX, toY);
                
                gsap.to(laser, {
                    opacity: 0,
                    duration: 0.2,
                    onComplete: () => {
                        // Small delay before deactivating the pin
                        setTimeout(() => {
                            deactivateCurrentPin();
                            setTimeout(animateToNextCity, Math.random() * 100);
                        }, 500);
                    }
                });
            }
        });
        
        gsap.fromTo(laserDot,
            { left: `${fromX}%`, top: `${fromY}%` },
            { 
                left: `${toX}%`,
                top: `${toY}%`,
                duration: 1,
                ease: "none"
            }
        );
    };
    
    animateToNextCity();
}

// Start the animation
animateLaserBetweenCities();



    document.addEventListener('DOMContentLoaded', () => {
        // Handle dropdown triggers
        const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
        
        dropdownTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const menu = trigger.nextElementSibling;
                menu.classList.toggle('active');
            });
        });
    
        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-item')) {
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.classList.remove('active');
                });
            }
        });
    });


    