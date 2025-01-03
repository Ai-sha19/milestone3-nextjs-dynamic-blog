import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#4CAF50] text-white shadow hover:bg-[#43A047]", // Green default button
        destructive: "bg-red-500 text-white shadow-sm hover:bg-red-600", // Destructive button remains red
        outline: "border border-[#4CAF50] bg-white text-[#4CAF50] shadow-sm hover:bg-[#E8F5E9]", // Green outline button
        secondary: "bg-[#66BB6A] text-white shadow-sm hover:bg-[#4CAF50]", // Secondary light green button
        ghost: "hover:bg-[#F1F8E9] hover:text-[#4CAF50]", // Ghost button with green hover
        link: "text-[#4CAF50] underline-offset-4 hover:underline", // Link button in green
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
