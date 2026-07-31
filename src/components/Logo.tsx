import Link from "next/link";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
  priority?: boolean;
};

export function Logo({ variant = "light", className = "" }: LogoProps) {
  const text = variant === "light" ? "text-white" : "text-navy";
  const sub = variant === "light" ? "text-white" : "text-navy";

  return (
    <Link
      href="/"
      className={`group inline-flex flex-col leading-none ${className}`}
      aria-label="Bert Suyker Autorama home"
    >
      <span
        className={`font-display text-[0.78rem] font-bold tracking-[0.18em] uppercase ${text} transition-opacity group-hover:opacity-90 sm:text-[0.85rem]`}
      >
        Bert Suyker
      </span>
      <span className="brand-rule my-1.5" aria-hidden="true" />
      <span
        className={`font-display text-[1.55rem] font-extrabold tracking-[0.22em] uppercase ${sub} sm:text-[1.75rem]`}
      >
        Autorama
      </span>
    </Link>
  );
}
