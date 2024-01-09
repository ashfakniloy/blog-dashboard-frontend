import { CheckboxField } from "@/components/FormFields/CheckboxField";
import { InputField } from "@/components/FormFields/InputField";
import { IconDraft, IconPaperPlus, IconSend, IconX } from "@/components/Icons";
import { Spinner } from "@/components/Loading/Spinner";
import ImageUploadModal from "@/components/Modal/ImageUploadModal";
import TextEditor from "@/components/TextEditor";
import Button from "@/components/ui/Button";
import { Form, Formik } from "formik";
import Image from "next/image";
import { useState } from "react";
import slugify from "slugify";

function BlogForm({ initialValues, handleSubmit, isPending, categoriesData }) {
  const [showImageModal, setShowImageModal] = useState(false);

  return (
    <div className="w-full">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        // enableReinitialize
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form className="flex gap-5 min-h-screen">
            <div className="w-full h-full max-w-[622px] 2xl:max-w-[1170px] border-r border-gray-300 pr-5">
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
                  <TextEditor
                    value={values.body}
                    setValue={(html) => setFieldValue("body", html)}
                  />
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
                  <span className="size-5">
                    {isPending ? (
                      values.published === false ? (
                        <Spinner className="size-5 border-gray-500 border-r-gray-500/30 border-b-gray-500/30" />
                      ) : (
                        <IconDraft />
                      )
                    ) : (
                      <IconDraft />
                    )}
                  </span>
                  Save as Draft
                </Button>
                <Button
                  type="submit"
                  onClick={() => setFieldValue("published", true)}
                  disabled={isPending}
                  className="w-[178px] flex justify-center items-center gap-2.5"
                >
                  <span className="size-5">
                    {isPending ? (
                      values.published === true ? (
                        <Spinner className="size-5" />
                      ) : (
                        <IconSend />
                      )
                    ) : (
                      <IconSend />
                    )}
                  </span>
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

                <div className="">
                  <p className="mb-2 font-medium">Featured Image:</p>
                  <div className="relative h-[160px] w-full rounded-md overflow-hidden border-gray-400 bg-gray-100 flex justify-center items-center">
                    {!values?.featuredImage?.image?.url ? (
                      <ImageUploadModal
                        withLibrary
                        // setFieldValue={setFieldValue}
                        showImageModal={showImageModal}
                        setShowImageModal={setShowImageModal}
                        handleImageSubmit={(values) =>
                          setFieldValue("featuredImage", values)
                        }
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
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default BlogForm;

// import { CheckboxField } from "@/components/FormFields/CheckboxField";
// import { InputField } from "@/components/FormFields/InputField";
// import { IconDraft, IconPaperPlus, IconSend, IconX } from "@/components/Icons";
// import { Spinner } from "@/components/Loading/Spinner";
// import ImageUploadModal from "@/components/Modal/ImageUploadModal";
// import TextEditor from "@/components/TextEditor";
// import Button from "@/components/ui/Button";
// import { Form, Formik } from "formik";
// import Image from "next/image";
// import slugify from "slugify";

// function BlogForm({ initialValues, handleSubmit, isPending, categoriesData }) {
//   return (
//     <div className="w-full">
//       <Formik
//         initialValues={initialValues}
//         onSubmit={handleSubmit}
//         // enableReinitialize
//       >
//         {({ isSubmitting, values, setFieldValue }) => (
//           <Form className="flex gap-5 min-h-screen">
//             <div className="w-full h-full max-w-[672px] 2xl:max-w-[1200px] border-r border-gray-300 pr-5">
//               <div className="mt-5 space-y-9 ">
//                 <InputField
//                   label="Title:"
//                   placeholder="Enter blog title"
//                   name="title"
//                   type="text"
//                   required
//                   onChange={(e) => {
//                     setFieldValue("title", e.target.value);
//                     const slug = slugify(e.target.value, { lower: true });
//                     setFieldValue("slug", slug);
//                   }}
//                 />

//                 <div className="mt-5">
//                   <div className="mb-2 font-medium">Body:</div>
//                   <TextEditor />
//                 </div>
//               </div>
//             </div>
//             <div className="mt-5 w-[545px]">
//               <div className="flex justify-end items-center gap-3">
//                 <Button
//                   type="submit"
//                   variant="outline"
//                   onClick={() => setFieldValue("published", false)}
//                   disabled={isPending}
//                   className="w-[178px] flex justify-center items-center gap-2"
//                 >
//                   <span className="size-5">
//                     {isPending ? (
//                       values.published === false ? (
//                         <Spinner className="size-5 border-gray-500 border-r-gray-500/30 border-b-gray-500/30" />
//                       ) : (
//                         <IconDraft />
//                       )
//                     ) : (
//                       <IconDraft />
//                     )}
//                   </span>
//                   {/* {isPending ? <Spinner /> : <IconDraft />} */}
//                   Save as Draft
//                 </Button>
//                 <Button
//                   type="submit"
//                   onClick={() => setFieldValue("published", true)}
//                   disabled={isPending}
//                   className="w-[178px] flex justify-center items-center gap-2.5"
//                 >
//                   <span className="size-5">
//                     {isPending ? (
//                       values.published === true ? (
//                         <Spinner className="size-5" />
//                       ) : (
//                         <IconSend />
//                       )
//                     ) : (
//                       <IconSend />
//                     )}
//                   </span>
//                   {/* {isPending ? <Spinner /> : <IconSend />} */}
//                   Publish
//                 </Button>
//               </div>

//               <div className="mt-5 space-y-5">
//                 <InputField
//                   label="Author:"
//                   placeholder="Type author name"
//                   name="author"
//                   type="text"
//                   required
//                 />
//                 <div className="">
//                   <p className="font-medium mb-2">Category:</p>
//                   <div className="flex flex-wrap gap-x-5 gap-y-2">
//                     {categoriesData?.data?.length ? (
//                       categoriesData.data.map((category) => (
//                         <CheckboxField
//                           key={category._id}
//                           label={category.name}
//                           value={category.name}
//                           name="category"
//                         />
//                       ))
//                     ) : (
//                       <p className="">No categories found</p>
//                     )}
//                   </div>
//                 </div>

//                 <div className="">
//                   <p className="mb-2 font-medium">Featured Image:</p>
//                   <div className="relative h-[160px] w-full rounded-md overflow-hidden border-gray-400 bg-gray-100 flex justify-center items-center">
//                     {!values?.featuredImage?.image?.url ? (
//                       <ImageUploadModal
//                         withLibrary
//                         setFieldValue={setFieldValue}
//                       >
//                         <button
//                           type="button"
//                           className="w-full h-full flex justify-center items-center"
//                           // className="h-[160px] w-full rounded-md border-gray-400 bg-gray-100 flex justify-center items-center"
//                         >
//                           <div className="flex items-center gap-1.5 text-sm text-gray-600">
//                             <span>
//                               <IconPaperPlus />
//                             </span>
//                             <p>Add featured image</p>
//                           </div>
//                         </button>
//                       </ImageUploadModal>
//                     ) : (
//                       <>
//                         <Image
//                           src={values.featuredImage.image.url}
//                           alt={values.featuredImage.altText}
//                           fill
//                           className="object-cover"
//                         />
//                         <button
//                           type="button"
//                           className="absolute right-1 top-1 text-black p-0.5 rounded-full bg-white border border-black"
//                           onClick={() => setFieldValue("featuredImage", {})}
//                         >
//                           <IconX />
//                         </button>
//                       </>
//                     )}
//                   </div>
//                 </div>

//                 <InputField
//                   label="SEO:"
//                   placeholder="Meta Description (70-160 char. including white space)"
//                   name="metaDescription"
//                   type="text"
//                   required
//                   className="placeholder:text-[13px]"
//                 />
//                 <InputField
//                   label="Slug:"
//                   placeholder="Enter the name to get slug"
//                   name="slug"
//                   type="text"
//                   required
//                 />

//               </div>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// }

// export default BlogForm;
