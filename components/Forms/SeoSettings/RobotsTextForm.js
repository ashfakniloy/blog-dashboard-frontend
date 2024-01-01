import { Form, Formik } from "formik";
import Button from "@/components/ui/Button";
import { TextareaField } from "../Fields/TextareaField";
import { CheckboxField } from "../Fields/CheckboxField";

function RobotsTextForm({ values }) {
  const initialValues = {
    robotstext: values.robot_text || "",
    discourage: values.discourage || false,
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
        {({ isSubmitting }) => (
          <Form className="">
            <div className="">
              <TextareaField
                name="robotstext"
                className="w-full"
                required
                rows={6}
                // autoFocus
              />
              <div className="mt-5">
                <CheckboxField
                  label="Discourage Search Engine"
                  name="discourage"
                />
              </div>
              <div className="mt-5 flex items-center gap-5">
                <Button type="submit" className="px-9">
                  Save
                </Button>
                <Button type="button" className="px-9">
                  Generate
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RobotsTextForm;
