import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { toast } from "sonner";
// import { toast } from "react-hot-toast";

function useSignin() {
  const router = useRouter();

  const signin = async (values) => {
    // const toastSignin = toast.loading("Loading...");

    try {
      const response = await signIn("credentials", {
        ...values,
        redirect: false,
      });

      if (response?.ok) {
        console.log(response);
        // toast.success("Signin Successful", {
        //   id: toastSignin,
        // });
        // toast.success("Welcome Admin");
        router.push("/");
      } else if (response?.error) {
        console.log("error response", response.error);
        // toast.error(`${response?.error}`, {
        //   id: toastSignin,
        // });
        toast.error(response.error);
      }
    } catch (error) {
      console.log("error auth", error);
      // toast.error("An error occurred during signin", {
      //   id: toastSignin,
      // });
    }
  };

  return { signin };
}

export default useSignin;
