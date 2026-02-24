import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "default" | "lg";
  className?: string;
  target?: string;
  onClick?: () => void;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className,
  target,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold tracking-[-0.01em] transition-all duration-200 rounded-full";

  const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover",
    outline:
      "border border-border text-foreground hover:border-accent hover:text-accent",
    ghost: "text-foreground hover:text-accent",
  };

  const sizes = {
    default: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} target={target}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
