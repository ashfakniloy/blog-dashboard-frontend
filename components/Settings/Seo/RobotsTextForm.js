import { Form, Formik } from "formik";
import Button from "@/components/ui/Button";
import { TextareaField } from "../../FormFields/TextareaField";
import { CheckboxField } from "../../FormFields/CheckboxField";
import usePostData from "@/hooks/usePostData";
import { toast } from "sonner";

function RobotsTextForm({ values }) {
  const initialValues = {
    // robotstext: values.robot_text || "",
    robotTxt: values.robot_text || "",
    // discourage: values.discourage || false,
  };

  const { mutate, isPending } = usePostData({
    path: "/user/robots",
  });

  const handleSubmit = (values, formik) => {
    // console.log("values", values);
    const singleValue = {
      robotTxt: values.robotTxt,
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
                name="robotTxt"
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
                <Button type="submit" className="px-9" disabled={isPending}>
                  Save
                </Button>
                <Button type="button" className="px-9" disabled={isPending}>
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
