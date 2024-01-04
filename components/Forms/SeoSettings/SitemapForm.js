import { Form, Formik } from "formik";
import Button from "@/components/ui/Button";
import { TextareaField } from "../Fields/TextareaField";

function SitemapForm({ values }) {
  const initialValues = {
    sitemap: values.sitemap || "",
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
                name="sitemap"
                className="w-full"
                required
                rows={8}
                // autoFocus
              />
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

export default SitemapForm;
