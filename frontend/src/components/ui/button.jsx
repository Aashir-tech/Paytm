import React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-indigo-500 via-purple-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline:
          "border border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 hover:border-white/30 hover:shadow-lg hover:shadow-white/5",
        secondary: "bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:shadow-lg hover:shadow-white/5",
        ghost: "hover:bg-white/10 text-white hover:text-white",
        link: "text-indigo-300 underline-offset-4 hover:underline hover:text-indigo-200",
        glow: "bg-gradient-to-r from-indigo-500 via-purple-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-r after:from-indigo-500 after:via-purple-600 after:to-cyan-500 after:opacity-0 after:blur-xl after:transition-all after:duration-300 hover:after:opacity-70",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? React.Fragment : "button"
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

export { buttonVariants }
