import { signOut } from "next-auth/react";

function useSignout() {
  const signout = (param) => {
    signOut({
      callbackUrl: param
        ? `${window.location.origin}/sign-in?${param}`
        : `${window.location.origin}/sign-in`,
      // redirect: false,
    });
  };

  return { signout };
}

export default useSignout;
