const AnimatedGridPattern = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Background gradient base */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-green-500/5 to-black" />

            <div className="absolute h-full w-full">
                {/* Horizontal lines */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={`h-${i}`}
                        className="absolute w-full"
                        style={{
                            top: `${(i + 1) * 5}%`,
                            animation: `slideLeft ${2 + (i % 2)}s linear infinite`,
                            opacity: 0.15 - i * 0.004,
                            height: '3px',
                            background: 'linear-gradient(to right, rgba(34,197,94,0.3), rgb(27,97,0))'
                        }}
                    />
                ))}

                {/* Vertical lines */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={`v-${i}`}
                        className="absolute h-full"
                        style={{
                            left: `${(i + 1) * 5}%`,
                            animation: `slideUp ${2 + (i % 2)}s linear infinite`,
                            opacity: 0.15 - i * 0.004,
                            width: '3px',
                            background: 'linear-gradient(to bottom, rgba(34, 197, 94, 0.53), rgb(27,97,0))'
                        }}
                    />
                ))}
            </div>

            {/* Glowing points at intersections */}
            <div className="absolute h-full w-full">
                {[...Array(10)].map((_, i) => (
                    <div
                        key={`glow-${i}`}
                        className="absolute w-1 h-1 rounded-full bg-green-400"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: 0.3,
                            animation: `pulse 3s infinite ${Math.random() * 2}s`,
                            filter: 'blur(1px)',
                            boxShadow: '0 0 8px rgba(34,197,94,0.6)'
                        }}
                    />
                ))}
            </div>

            {/* Multiple gradient overlays for depth */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.22) 0%, rgba(41, 41, 41, 0.45) 100%)'
                }}
            />
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(45deg, rgba(139, 139, 139, 0.2) 0%, transparent 100%)'
                }}
            />

            <style>{`
          @keyframes slideLeft {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          
          @keyframes slideUp {
            0% {
              transform: translateY(100%);
            }
            100% {
              transform: translateY(0%);
            }
          }
  
          @keyframes pulse {
            0%, 100% {
              opacity: 0.2;
              transform: scale(1);
            }
            50% {
              opacity: 0.4;
              transform: scale(1.5);
            }
          }
        `}</style>
        </div>
    )
}

export default AnimatedGridPattern
