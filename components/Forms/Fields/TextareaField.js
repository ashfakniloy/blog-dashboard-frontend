import { ErrorMessage, Field } from "formik";

export const TextareaField = ({ label, ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={props.name} className="font-medium">
          {label}
        </label>
      )}
      <div className="relative mt-1">
        <Field
          as="textarea"
          rows="4"
          id={props.name}
          className={
            "p-3 w-full outline-none bg-white rounded-md border border-custom-gray2 focus:border-custom-orange"
          }
          // id={name}
          // name={name}
          {...props}
          // required
        />

        {/* <p className="absolute text-xs text-red-600 -bottom-4">
            <ErrorMessage {...props} />
          </p> */}
      </div>
    </div>
  );
};
