import { cn } from "@/lib/utils";

export const Spinner = ({ className }) => {
  return (
    <>
      <span
        role="status"
        className={cn(
          "inline-block size-6 animate-spin rounded-full border-4 border-solid border-gray-100 border-r-gray-100/30 border-b-gray-100/30",
          className
        )}
      ></span>
      <span className="sr-only">Loading...</span>
    </>
  );
};

export const PageSpinner = ({ className }) => {
  return (
    <div className="absolute flex justify-center items-center h-[calc(100vh-40px)] inset-0">
      <span
        role="status"
        className={cn(
          "inline-block size-20 animate-spin rounded-full border-[6px] border-solid border-cyan-500 border-r-cyan-500/30 border-b-cyan-500/30",
          className
        )}
      ></span>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
