import { CheckboxField } from "@/components/Forms/Fields/CheckboxField";
import { InputField } from "@/components/Forms/Fields/InputField";
import { IconDraft, IconPaperPlus, IconSend, IconX } from "@/components/Icons";
import PageWrapper from "@/components/Layout/PageWrapper";
import { Spinner } from "@/components/LoadingSpinner/Spinner";
import ImageUploadModal from "@/components/Modal/ImageUploadModal";
import TextEditor from "@/components/TextEditor";
import Button from "@/components/ui/Button";
import useGetData from "@/hooks/useGetData";
import usePostData from "@/hooks/usePostData";
import { Form, Formik } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import slugify from "slugify";
import { toast } from "sonner";

function AddBlogPage() {
  const initialValues = {
    title: "",
    body: "",
    author: "",
    category: [],
    featuredImage: {},
    metaDescription: "",
    slug: "",
    published: false,
  };

  const router = useRouter();

  const {
    data: categoriesData,
    // isLoading,
    isPending: categoriesPending,
    isError,
  } = useGetData({ path: "/category" });

  console.log("categoriesData", categoriesData);

  const { mutate, isPending } = usePostData({
    path: "/blog",
    revalidate: "/blog",
  });

  const handleSubmit = (values, formik) => {
    // console.log("values", values);
    mutate(values, {
      onSuccess: () => {
        router.push("/blog");
        toast.success("Blog added successfully");
      },
    });
  };

  return (
    <PageWrapper
      title="Add New Blog"
      description="add new blog"
      heading="Add New Blog"
      isLoading={categoriesPending}
    >
      <div className="">
        <div className="w-full">
          <Formik
            initialValues={initialValues}
            // validationSchema={validate}
            onSubmit={handleSubmit}
            // enableReinitialize
          >
            {({ isSubmitting, values, setFieldValue }) => (
              <Form className="flex gap-5 min-h-screen">
                <div className="w-full h-full border-r border-gray-300 pr-5">
                  <div className="mt-5 space-y-9 ">
                    <InputField
                      label="Title:"
                      placeholder="Enter blog title"
                      name="title"
                      type="text"
                      required
                      onChange={(e) => {
                        setFieldValue("title", e.target.value);
                        const slug = slugify(e.target.value, { lower: true });
                        setFieldValue("slug", slug);
                      }}
                    />

                    <div className="mt-5">
                      <div className="mb-2 font-medium">Body:</div>
                      <TextEditor />
                    </div>
                  </div>
                </div>
                <div className="mt-5 w-[545px]">
                  <div className="flex justify-end items-center gap-3">
                    <Button
                      type="submit"
                      variant="outline"
                      onClick={() => setFieldValue("published", false)}
                      disabled={isPending}
                      className="w-[178px] flex justify-center items-center gap-2"
                    >
                      {isPending ? (
                        values.published === false ? (
                          <Spinner />
                        ) : (
                          <IconDraft />
                        )
                      ) : (
                        <IconDraft />
                      )}
                      {/* {isPending ? <Spinner /> : <IconDraft />} */}
                      Save as Draft
                    </Button>
                    <Button
                      type="submit"
                      onClick={() => setFieldValue("published", true)}
                      disabled={isPending}
                      className="w-[178px] flex justify-center items-center gap-2"
                    >
                      {isPending ? (
                        values.published === true ? (
                          <Spinner />
                        ) : (
                          <IconSend />
                        )
                      ) : (
                        <IconSend />
                      )}
                      {/* {isPending ? <Spinner /> : <IconSend />} */}
                      Publish
                    </Button>
                  </div>

                  <div className="mt-5 space-y-5">
                    <InputField
                      label="Author:"
                      placeholder="Type author name"
                      name="author"
                      type="text"
                      required
                    />
                    <div className="">
                      <p className="font-medium mb-2">Category:</p>
                      <div className="flex flex-wrap gap-x-5 gap-y-2">
                        {categoriesData?.data?.length ? (
                          categoriesData.data.map((category) => (
                            <CheckboxField
                              key={category._id}
                              label={category.name}
                              value={category.name}
                              name="category"
                            />
                          ))
                        ) : (
                          <p className="">No categories found</p>
                        )}
                      </div>
                    </div>
                    {/* <InputField
                      //will change
                      label="Category:"
                      placeholder="Type category"
                      name="category"
                      type="text"
                      required
                    /> */}
                    <div className="">
                      <p className="mb-2 font-medium">Featured Image:</p>
                      <div className="relative h-[160px] w-full rounded-md overflow-hidden border-gray-400 bg-gray-100 flex justify-center items-center">
                        {!values?.featuredImage?.image?.url ? (
                          <ImageUploadModal
                            withLibrary
                            setFieldValue={setFieldValue}
                          >
                            <button
                              type="button"
                              className="w-full h-full flex justify-center items-center"
                              // className="h-[160px] w-full rounded-md border-gray-400 bg-gray-100 flex justify-center items-center"
                            >
                              <div className="flex items-center gap-1.5 text-sm text-gray-600">
                                <span>
                                  <IconPaperPlus />
                                </span>
                                <p>Add featured image</p>
                              </div>
                            </button>
                          </ImageUploadModal>
                        ) : (
                          <>
                            <Image
                              src={values.featuredImage.image.url}
                              alt={values.featuredImage.altText}
                              fill
                              className="object-cover"
                            />
                            <button
                              type="button"
                              className="absolute right-1 top-1 text-black p-0.5 rounded-full bg-white border border-black"
                              onClick={() => setFieldValue("featuredImage", {})}
                            >
                              <IconX />
                            </button>
                          </>
                        )}
                      </div>
                    </div>

                    <InputField
                      label="SEO:"
                      placeholder="Meta Description (70-160 char. including white space)"
                      name="metaDescription"
                      type="text"
                      required
                      className="placeholder:text-[13px]"
                    />
                    <InputField
                      label="Slug:"
                      placeholder="Enter the name to get slug"
                      name="slug"
                      type="text"
                      required
                    />

                    {/* <div className="">
                      <p className="mb-2 font-medium">SEO:</p>
                      <div className="space-y-5">
                        <InputField
                          placeholder="Meta Description (70-160 char. including white space)"
                          name="metaDescription"
                          type="text"
                          required
                          className="placeholder:text-[13px]"
                        />
                        <InputField
                          label="Slug:"
                          placeholder="Enter the name to get slug"
                          name="slug"
                          type="text"
                          required
                        />
                      </div>
                    </div> */}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </PageWrapper>
  );
}

export default AddBlogPage;
