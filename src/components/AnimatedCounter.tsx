import { FC, useEffect, useState, useRef } from 'react'

interface AnimatedCounterProps {
    end: number
    duration?: number
    suffix?: string
    className?: string
}

const AnimatedCounter: FC<AnimatedCounterProps> = ({ end, duration = 2000, suffix = '', className = 'text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-green-400 to-green-300 bg-clip-text' }) => {
    const [count, setCount] = useState(0)
    const countRef = useRef<number>(0)
    const [inView, setInView] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.1 }
        )

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => {
            if (containerRef.current) {
                observer.disconnect()
            }
        }
    }, [])

    useEffect(() => {
        if (!inView) return

        let startTime: number | null = null
        let animationFrame: number

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)

            // Use different easing for different number ranges
            let easedProgress

            if (end > 1000) {
                // Ease-out for large numbers to make them more readable
                easedProgress = 1 - Math.pow(1 - progress, 3)
            } else if (end > 100) {
                // Ease-in-out for medium numbers
                easedProgress = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2
            } else {
                // Ease-in for small numbers to build anticipation
                easedProgress = progress * progress
            }

            countRef.current = Math.floor(easedProgress * end)
            setCount(countRef.current)

            if (progress < 1) {
                animationFrame = requestAnimationFrame(step)
            }
        }

        animationFrame = requestAnimationFrame(step)

        return () => {
            cancelAnimationFrame(animationFrame)
        }
    }, [end, duration, inView])

    return (
        <div ref={containerRef} className={className}>
            {count}
            {suffix}
        </div>
    )
}

export default AnimatedCounter
