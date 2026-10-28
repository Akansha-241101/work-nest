import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const RAISED =
  "bg-linear-to-b from-white/30 to-white/0 hover:-translate-y-px active:translate-y-0 dark:from-white/10";

const buttonStyles = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold transition-[transform,box-shadow,background-color,color,filter] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: cn(
          "bg-primary text-primary-foreground shadow-clay-primary hover:brightness-105",
          RAISED,
        ),
        destructive: cn(
          "bg-destructive text-destructive-foreground shadow-clay-sm hover:brightness-105",
          RAISED,
        ),
        outline: cn(
          "bg-card text-foreground/80 shadow-clay-sm hover:text-foreground",
          RAISED,
        ),
        secondary: cn(
          "bg-secondary text-secondary-foreground shadow-clay-sm",
          RAISED,
        ),
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5",
        sm: "h-9 px-4 text-[0.8125rem]",
        lg: "h-11 px-7",
        icon: "size-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonStyles({ variant, size }), className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";
