import * as React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function GlassCard({ className, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card glass-card-dark",
        "bg-white/60 dark:bg-white/5",
        "backdrop-blur-xl",
        "border border-white/20 dark:border-white/10",
        "shadow-xl shadow-black/5 dark:shadow-black/20",
        "rounded-2xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

