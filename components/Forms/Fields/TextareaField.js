import useTheme from "@/hooks/useTheme";
import { cn } from "@/lib/utils";
import { ErrorMessage, Field } from "formik";

export const TextareaField = ({ label, rows = 4, className, ...props }) => {
  const theme = useTheme();

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
          rows={rows}
          id={props.name}
          className={cn(
            "p-3 w-full outline-none bg-white rounded-md border border-custom-gray2",
            className
          )}
          // id={name}
          // name={name}
          {...props}
          // required
          onFocus={(e) => {
            e.target.style.border = `1px solid ${theme}`;
          }}
          onBlur={(e) => {
            e.target.style = "border-custom-gray2";
          }}
        />

        {/* <p className="absolute text-xs text-red-600 -bottom-4">
            <ErrorMessage {...props} />
          </p> */}
      </div>
    </div>
  );
};

// import { cn } from "@/lib/utils";
// import { ErrorMessage, Field } from "formik";

// export const TextareaField = ({ label, rows = 4, className, ...props }) => {
//   return (
//     <div className="w-full">
//       {label && (
//         <label htmlFor={props.name} className="font-medium">
//           {label}
//         </label>
//       )}
//       <div className="relative mt-1">
//         <Field
//           as="textarea"
//           rows={rows}
//           id={props.name}
//           className={cn(
//             "p-3 w-full outline-none bg-white rounded-md border border-custom-gray2 focus:border-custom-orange",
//             className
//           )}
//           // id={name}
//           // name={name}
//           {...props}
//           // required
//         />

//         {/* <p className="absolute text-xs text-red-600 -bottom-4">
//             <ErrorMessage {...props} />
//           </p> */}
//       </div>
//     </div>
//   );
// };
