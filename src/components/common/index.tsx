/* eslint-disable @typescript-eslint/no-explicit-any */
import { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

/**
 * ========================================================
 * Text Component
 * ========================================================
 * This component is used to render customizable text elements.
 * It leverages `cva` (class-variance-authority) for styling variations such as size, color, and weight.
 * The component supports custom class names and any additional HTML attributes through the `rest` object.
 */

// Define variants for the Text component using cva.
const textVariants = cva("", {
  variants: {
    font: {
        sans: "font-schibsted",
        serif:"font-instrument",
    },
    scale: {
        h1: "font-semibold tracking-[-0.04em] leading-[1.1] text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
        h2: "font-semibold tracking-[-0.04em] leading-[1.1] text-4xl md:text-5xl lg:text-6xl xl:text-7xl ",
        h3: "font-semibold tracking-[-0.04em] leading-[1.1] text-3xl md:text-4xl lg:text-5xl xl:text-6xl ",
        h4: "font-semibold tracking-[-0.04em] leading-[1.1] text-2xl md:text-3xl lg:text-4xl xl:text-5xl ",
        h5: "font-semibold tracking-[-0.04em] leading-[1.1] text-xl md:text-2xl lg:text-3xl xl:text-4xl ",
        h6: "font-semibold tracking-[-0.04em] leading-[1.1] text-lg md:text-xl lg:text-2xl xl:text-3xl ",
        p1: "font-semibold tracking-[-0.04em] text-base leading-[1.2]",
        p2: "font-semibold tracking-[-0.04em] text-sm leading-[1.2]",
        p3: "font-semibold tracking-[-0.04em] text-xs leading-[1.2]",
    },
    size: {
      sm: "text-sm",
      medium: "text-base",
      large: "text-lg",
    },
    color: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      error: "text-red-600",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    font: "sans",
  },
});

export type TextVariants = VariantProps<typeof textVariants>;

// Define the type for the props of the component.
// interface TextProps
//   extends TextVariants,
//     React.HTMLAttributes<HTMLSpanElement> {
//   as?: React.ElementType; // Allows customization of which HTML tag is rendered (e.g., span, p, div).
//   children?: React.ReactNode;
//   className?: string;
// }

export const Text: React.FC<any> = ({
  as: Component = "span",
  size,
  color,
  weight,
  font,
  scale,
  className,
  children,
  ...rest
}) => {
  return (
    <Component
      className={twMerge(textVariants({ font, scale, size, color, weight, className }))}
      {...rest}
    >
      {children}
    </Component>
  );
};
