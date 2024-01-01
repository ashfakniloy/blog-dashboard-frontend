import { cn } from "@/lib/utils";
import { ErrorMessage, Field } from "formik";

export const InputField = ({ label, className, ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={props.name} className="font-medium">
          {label}
        </label>
      )}
      <div className="relative mt-1">
        <Field
          id={props.name}
          className={cn(
            "p-3 w-full outline-none bg-white rounded-md border border-custom-gray2 focus:border-custom-orange",
            className
          )}
          // id={name}
          // name={name}
          {...props}
        />

        {/* <p className="absolute text-xs text-red-600 -bottom-4">
            <ErrorMessage {...props} />
          </p> */}
      </div>
    </div>
  );
};
