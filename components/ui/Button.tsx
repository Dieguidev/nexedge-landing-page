import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "teal"
  | "hero-outline";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  showArrow?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-[#0a0e27] hover:bg-accent-hover font-bold shadow-sm",
  secondary: "bg-primary text-white hover:bg-secondary font-semibold",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold",
  ghost: "text-primary hover:text-accent font-medium",
  teal:
    "bg-[#0eabb8] text-white hover:bg-[#0c96a1] font-semibold shadow-md shadow-[#0eabb8]/30",
  "hero-outline":
    "border-2 border-white bg-transparent text-white hover:bg-white/10 font-semibold backdrop-blur-[2px]",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
  showArrow = false,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-200 sm:text-[15px]",
    variants[variant],
    className,
  );

  const content = (
    <>
      {children}
      {showArrow && (
        <Image
          src="/icons/ui/flecha-derecha.png"
          alt=""
          width={16}
          height={16}
          className="h-4 w-4"
          aria-hidden
        />
      )}
    </>
  );

  if (href) {
    const isExternal =
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");
    const isHash = href.startsWith("#");

    if (isExternal || isHash) {
      return (
        <a href={href} className={classes}>
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
