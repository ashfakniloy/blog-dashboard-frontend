import { ErrorMessage, Field } from "formik";

export const CheckboxField = ({ label, className, ...props }) => {
  return (
    <label
      htmlFor={label}
      className="inline-flex items-center gap-3 cursor-pointer"
    >
      <Field id={label} type="checkbox" className="cursor-pointer" {...props} />
      <span className="font-light">{label}</span>
      {/* <p className="absolute text-xs text-red-600 -bottom-4">
            <ErrorMessage {...props} />
          </p> */}
    </label>
  );
};
