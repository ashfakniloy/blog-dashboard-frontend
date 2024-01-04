import { useState } from "react";
import { Form, Formik } from "formik";
import { InputField2 } from "../Fields/InputField";
import Button from "@/components/ui/Button";

function PasswordChange() {
  const [isSelected, setIsSelected] = useState(false);

  const initialValues = {
    password: "",
  };

  const handleSubmit = (values) => {
    console.log("values", values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        // validationSchema={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, resetForm }) => (
          <Form className="">
            <label htmlFor="">Password</label>
            <div className="flex w-full items-center gap-5">
              {isSelected ? (
                <InputField2
                  name="password"
                  type="password"
                  required
                  autoFocus={isSelected}
                  autoComplete="off"
                />
              ) : (
                <p className="pl-0.5 pt-1 font-bold text-gray-400 text-2xl w-full">
                  {`********`}
                </p>
              )}
              {!isSelected ? (
                <Button
                  type="button"
                  className="w-[250px]"
                  onClick={() => setIsSelected(true)}
                >
                  Change Password
                </Button>
              ) : (
                <div className="flex items-center gap-5">
                  <Button
                    type="button"
                    className="w-[100px]"
                    variant="outline"
                    onClick={() => {
                      setIsSelected(false);
                      resetForm();
                    }}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" className="w-[100px]">
                    Save
                  </Button>
                </div>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default PasswordChange;

// import { InputField } from "../Fields/InputField";
// import { Form, Formik } from "formik";
// import Button from "@/components/ui/Button";

// function PasswordChange() {
//   const initialValues = {
//     password: "",
//   };

//   const handleSubmit = (values) => {
//     console.log("values", values);
//   };

//   return (
//     <div>
//       <Formik
//         initialValues={initialValues}
//         // validationSchema={validate}
//         onSubmit={handleSubmit}
//       >
//         {({ isSubmitting }) => (
//           <Form className="">
//             <label htmlFor="">Password</label>
//             <div className="flex w-full items-center gap-5">
//               <InputField
//                 name="password"
//                 placeholder="********"
//                 className="w-full bg-transparent text-2xl pl-0.5 py-0 border-0 font-bold text-gray-600"
//                 type="password"
//                 required
//                 // autoFocus
//               />
//               <Button type="submit" className="w-[250px]">
//                 Change Password
//               </Button>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// }

// export default PasswordChange;
