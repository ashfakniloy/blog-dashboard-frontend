import { cn } from "@/lib/utils";

export const Spinner = ({ className }) => {
  return (
    <>
      <span
        role="status"
        className={cn(
          "inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-gray-100 border-r-gray-100/30 border-b-gray-100/30",
          className
        )}
      ></span>
      <span className="sr-only">Loading...</span>
    </>
  );
};
