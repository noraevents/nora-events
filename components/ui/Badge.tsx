import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "terracotta" | "sauge" | "beige";
  className?: string;
}

export function Badge({ children, variant = "terracotta", className }: BadgeProps) {
  const variants = {
    terracotta: "bg-terracotta text-ivoire",
    sauge: "bg-sauge text-ivoire",
    beige: "bg-beige text-anthracite border border-terracotta/30",
  };

  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-xs font-body font-medium uppercase tracking-wider rounded-full",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
