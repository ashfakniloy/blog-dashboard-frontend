import { cn } from "@/lib/utils";

function Button({ children, type, onClick, disabled, className, ...props }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-full  bg-custom-orange text-white disabled:pointer-events-none disabled:opacity-50",
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
