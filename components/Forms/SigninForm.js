import { EmailField } from "./Fields/EmailField";
import { PasswordField } from "./Fields/PasswordField";
import { CheckboxField } from "./Fields/CheckboxField";
import Button from "../ui/Button";

function SigninForm() {
  return (
    <div className="w-[400px] h-[536px] 2xl:w-[473px] 2xl:h-[616px] px-10 bg-white rounded-2xl shadow-lg">
      <div className="pt-[68px] flex flex-col items-center font-manrope">
        <h1 className="text-2xl font-bold">Welcome Back !</h1>
        <p className="text-custom-red">Sign in to continue</p>
      </div>

      <div className="mt-[54px] w-full">
        <div className="space-y-9">
          <EmailField placeholder="Email" name="email" required />
          <PasswordField placeholder="Password" name="password" required />
        </div>

        <div className="mt-9">
          <div className="mb-3.5">
            <CheckboxField label="Remember me" name="rememberMe" />
          </div>
          <Button type="submit" className="w-full py-3 rounded-md">
            Log in
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SigninForm;
