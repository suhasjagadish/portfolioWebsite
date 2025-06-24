import * as React from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  pauseOnHover?: boolean
  direction?: "left" | "right"
  speed?: number
}

export function Marquee({
  children,
  pauseOnHover = false,
  direction = "left",
  speed = 40,
  className,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={cn("group flex w-full overflow-hidden", className)}
      {...props}
    >
      <div
        className={cn(
          "flex flex-shrink-0 animate-marquee items-center",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ "--duration": `${speed}s` } as React.CSSProperties}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex flex-shrink-0 animate-marquee items-center",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{ "--duration": `${speed}s` } as React.CSSProperties}
      >
        {children}
      </div>
    </div>
  )
}
