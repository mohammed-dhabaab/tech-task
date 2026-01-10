import clsx from "clsx";

type HeadingPropsTypes = {
  as?: "h1" | "h2" | "h3";
  size?: "xl" | "lg" | "md";
  children: React.ReactNode;
  className?: string;
};

export default function Heading({
  as: Comp = "h1",
  className,
  children,
  size = "lg",
}: HeadingPropsTypes) {
  return (
    <Comp
      className={clsx(
        size === "xl" && "text-3xl sm:4xl md:5xl",
        size === "lg" && "text-xl sm:2xl md:3xl",
        size === "md" && "text-md sm:text-lg md:text-xl",
        className,
      )}
    >
      {children}
    </Comp>
  );
}