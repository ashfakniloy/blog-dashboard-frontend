import { useEffect, useState } from "react";
import { useFormikContext } from "formik";
import OTPInput from "react-otp-input";
import Button from "../ui/Button";

function OtpForm({ isLoading }) {
  const otpTimeLimit = 2 * 60;
  const maxOtpLength = 6;

  const { values, setFieldValue } = useFormikContext();

  // console.log("values", values.otp.length);

  const otpValueLength = values.otp.length;

  const [seconds, setSeconds] = useState(otpTimeLimit);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const timeLeft = formatTime(seconds);

  const handleOtpChange = (otp) => {
    // Update Formik values when OTP changes
    setFieldValue("otp", otp);
  };

  return (
    <div className="w-[473px] px-[70px] pt-[33px] pb-[52px] bg-white rounded-2xl shadow-lg">
      <div className=" flex flex-col items-center font-manrope">
        <h1 className="text-4xl font-medium">OTP Verification</h1>
        <p className="mt-[10px] text-custom-gray4">
          We have send an OTP to your email
        </p>
      </div>

      <div className="mt-[48px] w-full">
        <OTPInput
          value={values.otp}
          onChange={(otp) => handleOtpChange(otp)}
          numInputs={maxOtpLength}
          // renderSeparator={<span className="text-lg font-bold"> - </span>}
          inputStyle="!w-10 h-10 selection:bg-gray-200 border-b-2 border-gray-600 focus:border-black outline-none"
          containerStyle="flex justify-between mt-2"
          shouldAutoFocus
          renderInput={(props) => <input {...props} />}
        />

        <div className="mt-9 flex justify-center">
          <Button
            type="submit"
            className="w-[90%] py-3 rounded-md"
            disabled={otpValueLength < maxOtpLength || isLoading}
          >
            Log in
          </Button>
        </div>
      </div>
    </div>
  );
}

export default OtpForm;
