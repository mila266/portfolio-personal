type CardProps = {
  children: React.ReactNode;
  className?: string;
  padding?: "sm" | "md" | "none";
  hover?: "lift" | "border" | "none";
  clickable?: boolean;
  fullHeight?: boolean;
  as?: "div" | "article" | "li";
};

const PADDING = { sm: "p-5", md: "p-6", none: "" };

const HOVER = {
  lift: "hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-400/10 hover:border-emerald-400/40",
  border: "hover:border-emerald-400/40",
  none: "",
};

export default function Card({
  children,
  className = "",
  padding = "sm",
  hover = "lift",
  clickable = false,
  fullHeight = false,
  as: Tag = "div",
}: CardProps) {
  return (
    <Tag
      className={[
        "rounded-xl border border-neutral-800 bg-neutral-900/40",
        PADDING[padding],
        "transition-all duration-300",
        HOVER[hover],
        clickable ? "cursor-pointer" : "",
        fullHeight ? "h-full flex flex-col" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}