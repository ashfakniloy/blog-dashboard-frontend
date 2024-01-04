import { useState } from "react";
import { ErrorMessage, Field } from "formik";
import useTheme from "@/hooks/useTheme";
import { IconEye, IconEyeSlash, IconLock } from "@/components/Icons";

export const PasswordField = ({ label, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const theme = useTheme();

  return (
    <label htmlFor={props.name} className="block">
      {label && <span>{label}</span>}

      <div className="relative mt-1">
        <Field
          id={props.name}
          className="pl-9 pr-3 py-3 w-full outline-none bg-custom-gray rounded-md border border-gray-300"
          {...props}
          type={showPassword ? "text" : "password"}
          autoComplete="on"
          // required
          onFocus={(e) => {
            e.target.style.border = `1px solid ${theme}`;
          }}
          onBlur={(e) => {
            e.target.style = "border-custom-gray2";
          }}
        />
        <div className="absolute inset-y-0 flex items-center left-3 text-gray-500">
          <IconLock />
        </div>
        {/* <p className="absolute text-xs text-red-600 -bottom-4">
            <ErrorMessage {...props} />
          </p> */}
        <div className="absolute inset-y-0 flex items-center right-3">
          <span
            className="p-[6px] text-lg cursor-pointer hover:bg-gray-200 active:bg-gray-300 rounded-full text-black/60"
            onClick={() => setShowPassword(!showPassword)}
          >
            <span>{showPassword ? <IconEyeSlash /> : <IconEye />}</span>
          </span>
        </div>
      </div>
    </label>
  );
};

// import { useState } from "react";
// import { ErrorMessage, Field } from "formik";
// import { IconEye, IconEyeSlash, IconLock } from "@/components/Icons";

// export const PasswordField = ({ label, ...props }) => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <label htmlFor={props.name} className="block">
//       {label && <span>{label}</span>}

//       <div className="relative mt-1">
//         <Field
//           id={props.name}
//           className="pl-9 pr-3 py-3 w-full outline-none bg-custom-gray rounded-md border border-gray-300 focus:border-custom-orange"
//           {...props}
//           type={showPassword ? "text" : "password"}
//           autoComplete="on"
//           // required
//         />
//         <div className="absolute inset-y-0 flex items-center left-3 text-gray-500">
//           <IconLock />
//         </div>
//         {/* <p className="absolute text-xs text-red-600 -bottom-4">
//             <ErrorMessage {...props} />
//           </p> */}
//         <div className="absolute inset-y-0 flex items-center right-3">
//           <span
//             className="p-[6px] text-lg cursor-pointer hover:bg-gray-200 active:bg-gray-300 rounded-full text-black/60"
//             onClick={() => setShowPassword(!showPassword)}
//           >
//             <span>{showPassword ? <IconEyeSlash /> : <IconEye />}</span>
//           </span>
//         </div>
//       </div>
//     </label>
//   );
// };
