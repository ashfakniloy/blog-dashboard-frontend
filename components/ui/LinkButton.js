import Link from "next/link";
import { cn } from "@/lib/utils";
import { IconPlus } from "../Icons";
import { useSiteInfo } from "@/lib/store";
import useTheme from "@/hooks/useTheme";

function LinkButton({ children, href, disabled, className, Icon, ...props }) {
  // const { theme } = useSiteInfo();

  const theme = useTheme();

  return (
    <Link
      href={href}
      className={cn(
        // "px-4 py-2 w-[178px] flex justify-center items-center gap-[14px] font-medium rounded-full bg-custom-orange text-white disabled:pointer-events-none disabled:opacity-50",
        "px-4 py-2 w-[178px] flex justify-center items-center gap-[14px] font-medium rounded-full  text-white disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      style={{ backgroundColor: theme }}
      disabled={disabled}
      {...props}
    >
      <IconPlus /> {children}
    </Link>
  );
}

export default LinkButton;
