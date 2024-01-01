import { Form, Formik } from "formik";
import Button from "@/components/ui/Button";
import { InputField } from "../Fields/InputField";

function MediaForm({ image_title, alt_text }) {
  const initialValues = {
    image_title: image_title || "",
    alt_text: alt_text || "",
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
          <Form className="space-y-5">
            <InputField
              label="Image Title:"
              placeholder="Your text here"
              name="image_title"
              type="text"
              className=""
              required
            />
            <InputField
              label="Alt Text"
              placeholder="Your text here"
              name="alt_text"
              type="text"
              className=""
              required
            />

            <div className="mt-5">
              <Button type="submit" className="px-5">
                Save
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default MediaForm;
