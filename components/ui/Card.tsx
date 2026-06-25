import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
};

export function Card({ children, className, hoverable = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200/80 bg-card p-6 shadow-sm",
        hoverable && "transition-shadow duration-200 hover:shadow-lg",
        className,
      )}
    >
      {children}
    </div>
  );
}
