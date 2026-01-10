import clsx from "clsx";

type paragraphPropsTypes = {
  size?: "md" | "sm" | "xs";
  children: React.ReactNode;
  className?: string;
};

export default function Paragraph({
  className,
  children,
  size = "sm",
}: paragraphPropsTypes) {
  return (
    <p
      className={clsx(
        "max-w-[65ch]",
        size === "md" && "text-base sm:text-md",
        size === "sm" && "text-sm sm:text-base",
        size === "xs" && "text-xs sm:text-sm md:text-base",
        className,
      )}
    >
      {children}
    </p>
  );
}