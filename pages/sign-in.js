import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Form, Formik } from "formik";
import OtpForm from "@/components/Forms/OtpForm";
import SigninForm from "@/components/Forms/SigninForm";
import PageWrapper from "@/components/Layout/PageWrapper";

function SigninPage() {
  const [step, setStep] = useState(1);

  const router = useRouter();

  const initialvalues = {
    email: "",
    password: "",
    otp: "",
    rememberMe: "",
  };

  const handleSubmit = async (values, formik) => {
    if (step === 1) {
      const values1 = {
        email: values.email,
        password: values.password,
      };

      setStep(2);

      console.log("step 1 values", values1);
    } else if (step === 2) {
      const values2 = {
        email: values.email,
        otp: values.otp,
      };

      console.log(values2);
      formik.resetForm();
      router.push("/");
    }
  };

  return (
    <PageWrapper title="Sign in" description="sign in">
      <div className="min-h-screen flex bg-custom-gray3">
        <div className="flex-1 flex relative">
          <div className="flex items-center w-[70%] justify-center z-10 text-5xl font-bold bg-white text-black">
            {/* <div className="relative w-[461px] h-[286px]"> */}
            <div className="ml-[20%] relative w-[340px] h-[210px]">
              <Image
                src="/images/static-logo.png"
                alt="static logo"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute inset-y-0 right-[15%] w-[30%] bg-white -skew-x-[16deg]"></div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <Formik
            initialValues={initialvalues}
            // validationSchema={validate}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="">
                {step === 1 && <SigninForm />}
                {step === 2 && <OtpForm />}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </PageWrapper>
  );
}

export default SigninPage;
