import { Form, Formik } from "formik";
import Button from "@/components/ui/Button";
import ColorPickerField from "../../FormFields/ColorPickerField";
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
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
  );
}

export default ColorChange;
