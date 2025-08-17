"use client"

export function CircularPattern() {
  return (
    <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
      <div className="relative w-96 h-96">
        <svg width="400" height="400" viewBox="0 0 400 400" className="animate-rotate-slow">
          {Array.from({ length: 15 }, (_, i) => {
            const radius = 30 + i * 12
            const circumference = 2 * Math.PI * radius
            const strokeDasharray = `${circumference * 0.6} ${circumference * 0.4}`

            return (
              <circle
                key={i}
                cx="200"
                cy="200"
                r={radius}
                fill="none"
                stroke="rgba(255, 255, 255, 0.8)"
                strokeWidth="1.5"
                strokeDasharray={strokeDasharray}
                transform={`rotate(${i * 12} 200 200)`}
              />
            )
          })}
          <circle cx="200" cy="200" r="3" fill="rgba(255, 255, 255, 1)" />
        </svg>
      </div>
    </div>
  )
}
