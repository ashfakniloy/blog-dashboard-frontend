import { cn } from "@/lib/utils";

function Button({
  children,
  type,
  onClick,
  disabled,
  variant,
  className,
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-full border border-custom-orange bg-custom-orange text-white disabled:pointer-events-none disabled:opacity-50",
        variant === "outline" && "bg-transparent text-custom-orange",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
