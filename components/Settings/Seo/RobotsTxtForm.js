import { Form, Formik } from "formik";
import Button from "@/components/ui/Button";
import { toast } from "sonner";
import { TextareaField } from "../../FormFields/TextareaField";
import usePostData from "@/hooks/usePostData";

function RobotsTxtForm({ values }) {
  const initialValues = {
    robotsTxt: values.robots_txt || "",
  };

  const { mutate, isPending } = usePostData({
    path: "/user/robots",
  });

  const handleSubmit = (values, formik) => {
    // console.log("values", values);
    const singleValue = {
      robotsTxt: values.robotsTxt,
    };

    mutate(singleValue, {
      onSuccess: () => {
        console.log("onsuccess");
        toast.success(`Robots text added`);
        formik.resetForm();
      },
    });
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="">
            <div className="">
              <TextareaField
                name="robotsTxt"
                className="w-full"
                required
                rows={6}
                // autoFocus
              />

              <div className="mt-5 flex items-center gap-5">
                <Button type="submit" className="px-9" disabled={isPending}>
                  Save
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RobotsTxtForm;
