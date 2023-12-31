import { Form, Formik } from "formik";
import React from "react";
import { InputField } from "./Fields/InputField";
import Button from "../ui/Button";
import { TextareaField } from "./Fields/TextareaField";

function CategoryForm() {
  const initialvalues = {
    name: "",
    slug: "",
    description: "",
  };

  const handleSubmit = async (values, formik) => {
    console.log("values", values);
  };
  return (
    <div className="mt-8">
      <Formik
        initialValues={initialvalues}
        // validationSchema={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="">
            <div className="space-y-9 w-full">
              <div className="flex items-center w-full gap-14">
                <InputField
                  label="Category Name:"
                  placeholder="Enter category name"
                  name="name"
                  type="text"
                  required
                />
                <InputField
                  label="Slug:"
                  placeholder="Enter the name to get slug"
                  name="slug"
                  type="text"
                  required
                />
              </div>

              <TextareaField
                label="Category Description"
                placeholder="Enter category description"
                name="description"
                type="text"
                required
              />
            </div>
            <div className="mt-6">
              <Button type="submit" className="px-6">
                Create New Category
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CategoryForm;
