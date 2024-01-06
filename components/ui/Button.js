import useTheme from "@/hooks/useTheme";
// import { useSiteInfo } from "@/lib/store";
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
  // const { theme } = useSiteInfo();

  const theme = useTheme();

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-full border disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      style={{
        borderColor: theme,
        backgroundColor: variant === "outline" ? "transparent" : theme,
        color: variant === "outline" ? theme : "white",
      }}
      // className={cn(
      //   "px-4 py-2 rounded-full border border-custom-orange bg-custom-orange text-white disabled:pointer-events-none disabled:opacity-50",
      //   variant === "outline" && "bg-transparent text-custom-orange",
      //   className
      // )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
