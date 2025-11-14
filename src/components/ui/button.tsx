




import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm md:text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        disabled: "bg-gray-500 text-white",
        status: "bg-[#7AB55F] text-[#FFFFFF] hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-black hover:text-primary hover:border hover:border-primary",
        outlines:
          "border border-input bg-background hover:bg-black hover:text-primary hover:border hover:border-primary",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "text-neutral-400 hover:bg-accent hover:text-accent-foreground",
        navbtn:
          "text-neutral-400 hover:text-secondary font-normal hover:font-semibold",
        auth: "bg-primary rounded-full hover:border-primary hover:border transition-transform transform  group-hover:translate-y-0 duration-300 hover:bg-black hover:text-primary",
        signin: "rounded-full border-primary border transition-transform transform bg-primary text-xs md:text-lg font-semibold  hover:bg-black hover:text-primary hover:border hover:border-primary",
        // book: "bg-primary text-xs md:text-lg font-semibold rounded-full hover:border-primary hover:border  transform translate-y-4 duration-300 hover:bg-black hover:text-primary",
        watch:
          "bg-none border border-[#FFFFFF] text-[#FFFFFF] text-xs md:text-lg font-semibold rounded-full hover:border-primary hover:border transition-transform transform   duration-300 hover:bg-black hover:text-primary",
        book:
          "bg-primary border border-primary text-xs md:text-lg font-semibold rounded-full hover:bg-black hover:text-primary hover:border hover:border-primary",
        cardwatch:
          "bg-none border border-[#FFFFFF] text-[#FFFFFF] text-xs md:text-sm font-semibold rounded-full hover:border-primary hover:border transition-transform transform   duration-300 hover:bg-black hover:text-primary",
        cardbook:
          "bg-primary border border-primary text-xs md:text-sm font-semibold rounded-full hover:bg-black hover:text-primary hover:border hover:border-primary",
        play:
          "text-primary text-sm md:text-lg font-medium bg-[#212529] rounded-lg",
        social: "bg-primary hover:border-primary hover:border transition-transform transform  group-hover:translate-y-0 duration-300 hover:bg-black hover:text-primary",
        navigation:
          "bg-none border rounded-full border-[#FFFFFF] text-[#FFFFFF] brightness-75",
        vote: "bg-none border border-[#FFFFFF] text-[#FFFFFF] rounded-lg",
        link: "text-primary underline-offset-4 hover:underline",
        profile: "text-[#FFFFFF] text-base ",
        underline: "text-[#FFFFFF] underline  ",
        normal: "text-black bg-primary text-lg font-medium hover:bg-black hover:text-primary hover:border hover:border-primary",
        smallnav: "text-[#FFFFFF] bg-none text-sm ",
      },
      size: {
        none:"h-0 px-3 md:px-24 py-6",
        default: "h-10 px-4 py-2",
        auth: "h-7 px-4",
        xs: "h-6 md:h-8 px-2 md:px-3 py-1 md:py-1",
        sm: "h-9 rounded-md px-3",
        lg: "h-7 md:h-11 rounded-full px-4 md:px-8",
        xl: "h-7 px-6 md:h-12 md:px-10",
        base:"px-5 md:px-10 py-2 md:py-3",
        icon: "h-10 w-10",
        medium: "h-9 w-9 p-3 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

