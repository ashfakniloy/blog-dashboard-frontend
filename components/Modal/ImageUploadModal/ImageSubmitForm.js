import { Form, Formik } from "formik";
import Button from "@/components/ui/Button";
import { InputField } from "@/components/FormFields/InputField";
import { TextareaField } from "@/components/FormFields/TextareaField";
import usePostData from "@/hooks/usePostData";
import { Spinner } from "@/components/Loading/Spinner";

function ImageSubmitForm({
  imageId,
  imageUrl,
  setShowImageModal,
  setFieldValue,
}) {
  const initialValues = {
    imageTitle: "",
    altText: "",
    image: {
      public_id: imageId,
      url: imageUrl,
    },
  };

  const { mutate, isPending } = usePostData({
    path: "/media",
    revalidate: "/media",
  });

  const handleSubmit = (values, formik) => {
    console.log("values", values);

    if (setFieldValue) {
      setFieldValue("featuredImage", values);
      setShowImageModal(false);
    } else {
      mutate(values, {
        onSuccess: () => {
          console.log("onsuccess");
          toast.success(`Media added`);
          formik.resetForm();
        },
        onSettled: () => {
          setShowImageModal(false);
        },
      });
    }
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="space-y-5">
            <InputField
              label="Image Title:"
              placeholder="Your text here"
              name="imageTitle"
              type="text"
              className=""
              required
            />
            <TextareaField
              label="Alt Text"
              placeholder="Your text here"
              name="altText"
              className="resize-none"
              required
            />

            <div className="mt-5 flex items-center gap-3">
              <Button type="submit" className="px-8" disabled={isPending}>
                Save
              </Button>
              {isPending && (
                <Spinner className="border-gray-400 border-r-gray-400/30 border-b-gray-400/30" />
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ImageSubmitForm;
