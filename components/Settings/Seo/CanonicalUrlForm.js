import { Form, Formik } from "formik";
import Button from "@/components/ui/Button";
import { InputField } from "../../FormFields/InputField";

function CanonicalUrlForm() {
  const initialValues = {
    canonical_url: "",
  };

  const handleSubmit = (values) => {
    console.log("values", values);
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="">
            <InputField
              name="canonical_url"
              type="text"
              className=""
              required
            />

            <div className="mt-5">
              <Button type="submit" className="px-5">
                Canonical Url
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CanonicalUrlForm;
