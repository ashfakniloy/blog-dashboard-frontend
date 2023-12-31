import Link from "next/link";
import { cn } from "@/lib/utils";
import { IconPlus } from "../Icons";

function LinkButton({ children, href, disabled, className, Icon, ...props }) {
  return (
    <Link
      href={href}
      className={cn(
        "px-4 py-2 w-[178px] flex justify-center items-center gap-[14px] font-medium rounded-full bg-custom-orange text-white disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      disabled={disabled}
      {...props}
    >
      <IconPlus /> {children}
    </Link>
  );
}

export default LinkButton;
