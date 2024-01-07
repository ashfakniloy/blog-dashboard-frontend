import { Form, Formik } from "formik";
import Button from "@/components/ui/Button";
import { InputField } from "../../FormFields/InputField";
import Link from "next/link";

function SearchConsoleForm() {
  const initialValues = {
    search_console: "",
  };

  const handleSubmit = (values) => {
    console.log("values", values);
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="">
            <div className="p-5 rounded-md bg-gray-200 flex items-center gap-16">
              <p className="font-bold">Google Verification Code</p>
              <div className="flex-1 ">
                <InputField
                  name="search_console"
                  type="text"
                  // className="bg-transparent border-2 border-blue-500 focus:border-blue-600"
                  className="bg-transparent  border-gray-400"
                  required
                />
                <p className="mt-3 text-sm font-medium">
                  Get your Google verification code in{" "}
                  <Link
                    href="https://console.cloud.google.com/"
                    target="_blank"
                    className="underline text-blue-600"
                  >
                    Google Search Console
                  </Link>
                </p>
              </div>
            </div>

            <div className="mt-5">
              <Button type="submit" className="px-5">
                Connect Api
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SearchConsoleForm;
