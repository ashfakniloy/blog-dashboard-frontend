import { Form, Formik } from "formik";
import Button from "@/components/ui/Button";
import ColorPickerField from "../Fields/ColorPickerField";
import { useSiteInfo } from "@/lib/store";

function ColorChange({ color }) {
  const { setTheme } = useSiteInfo();

  if (!color) return;

  const initialValues = {
    color: color,
  };

  const handleSubmit = (values, formik) => {
    console.log("values", values);
    // setIsSubmitted(true);
    // formik.resetForm();
    setTheme(values.color);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        // validationSchema={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values, resetForm }) => (
          <Form className="">
            <div className="">
              <label htmlFor="">Brand Color</label>
              <div className="mt-4">
                <div className="flex items-center w-full justify-between">
                  <ColorPickerField name="color" />
                  {color !== values.color && (
                    <div className="flex items-center gap-5">
                      <Button
                        type="button"
                        className="w-[100px]"
                        variant="outline"
                        onClick={() => {
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
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ColorChange;

// import { InputField } from "../Fields/InputField";
// import { Form, Formik } from "formik";
// import Button from "@/components/ui/Button";

// function ColorChange({ color }) {
//   const initialValues = {
//     color: color || "",
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
//             <label htmlFor="">Brand Color</label>
//             <div className="flex w-full items-center gap-5">
//               <InputField
//                 name="color"
//                 className="w-full bg-transparent text-2xl pl-0.5 py-0 border-0 font-bold text-gray-600"
//                 required
//               />
//               <Button type="submit" className="w-[200px]">
//                 Change Color
//               </Button>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// }

// export default ColorChange;
