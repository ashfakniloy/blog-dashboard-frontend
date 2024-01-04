import { InputField2 } from "../Fields/InputField";
import { Form, Formik } from "formik";
import Button from "@/components/ui/Button";
import { useState } from "react";

function NameChange({ name }) {
  const [isSelected, setIsSelected] = useState(false);

  const initialValues = {
    name: name || "",
  };

  const handleSubmit = (values) => {
    console.log("values", values);
    // setIsSelected(false);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        // validationSchema={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, resetForm }) => (
          <Form className="">
            <label htmlFor="">Name</label>
            <div className="flex w-full items-center gap-5">
              {isSelected ? (
                <InputField2
                  name="name"
                  type="text"
                  required
                  autoFocus={isSelected}
                />
              ) : (
                <p className="pl-0.5 pt-1 font-bold text-gray-400 text-2xl w-full">
                  {name}
                </p>
              )}
              {!isSelected ? (
                <Button
                  type="button"
                  className="w-[200px]"
                  onClick={() => setIsSelected(true)}
                >
                  Change Name
                </Button>
              ) : (
                <div className="flex items-center gap-5">
                  <Button
                    type="button"
                    className="w-[100px]"
                    variant="outline"
                    onClick={() => {
                      setIsSelected(false);
                      resetForm();
                    }}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" className="w-[100px]">
                    Save
                  </Button>
                </div>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default NameChange;
