import { InputField2 } from "../Fields/InputField";
import { Form, Formik } from "formik";
import Button from "@/components/ui/Button";
import { useState } from "react";

function EmailChange({ currentEmail }) {
  const [isSelected, setIsSelected] = useState(false);

  const initialValues = {
    email: currentEmail || "",
  };

  const handleSubmit = (values) => {
    console.log("values", values);
    // setIsSelected(false);
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
            <label htmlFor="">Email</label>
            <div className="flex w-full items-center gap-5">
              {isSelected ? (
                <InputField2
                  name="email"
                  type="email"
                  required
                  autoFocus={isSelected}
                />
              ) : (
                <p className="pl-0.5 pt-1 font-bold text-gray-400 text-2xl w-full">
                  {currentEmail}
                </p>
              )}
              {!isSelected ? (
                <Button
                  type="button"
                  className="w-[200px]"
                  onClick={() => setIsSelected(true)}
                >
                  Change Email
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

export default EmailChange;

// import { InputField } from "../Fields/InputField";
// import { Form, Formik } from "formik";
// import Button from "@/components/ui/Button";

// function EmailChange({ currentEmail }) {
//   const initialValues = {
//     email: currentEmail || "",
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
//             <label htmlFor="">Email</label>
//             <div className="flex w-full items-center gap-5">
//               <InputField
//                 name="email"
//                 type="email"
//                 className="w-full bg-transparent text-2xl pl-0.5 py-0 border-0 font-bold text-gray-600"
//                 required
//                 // autoFocus
//               />
//               <Button type="submit" className="w-[200px]">
//                 Change Email
//               </Button>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// }

// export default EmailChange;
