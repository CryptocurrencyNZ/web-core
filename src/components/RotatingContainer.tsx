import React, { useState, useEffect, ReactNode } from 'react'

interface RotatingContainerProps {
    children: ReactNode
    interval?: number
}

const RotatingContainer: React.FC<RotatingContainerProps> = ({ children, interval = 10000 }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const childrenArray = React.Children.toArray(children)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === childrenArray.length - 1 ? 0 : prevIndex + 1))
        }, interval)

        return () => clearInterval(timer)
    }, [childrenArray.length, interval])

    return (
        <section className="w-full">
            <div className="transition-opacity duration-500">{childrenArray[currentIndex]}</div>
        </section>
    )
}

export default RotatingContainer
