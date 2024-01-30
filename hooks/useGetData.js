import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { API_URL } from "@/config";
import useSignout from "./useSignout";

function useGetData({ path }) {
  const { data: session } = useSession();

  const token = session?.user?.token;

  const url = `${API_URL}${path}`;

  const { signout } = useSignout();

  const fetcher = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      // Check if the error is due to unauthorized or token expiration
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
      ) {
        // If unauthorized or token expired, sign out the user
        signout("token_expired=true"); // Assuming you have the signOut function available from next-auth
      }
    }
  };

  return useQuery({
    queryKey: [path],
    queryFn: fetcher,
    enabled: !!session,
    retry: false,
  });
}

export default useGetData;

// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";
// import { useSession } from "next-auth/react";
// import { API_URL } from "@/config";

// function useGetData({ path }) {
//   const { data: session } = useSession();

//   const token = session?.user?.token;

//   const url = `${API_URL}${path}`;

//   const fetcher = async () => {
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     };

//     return axios.get(url, config).then(({ data }) => data);
//   };

//   return useQuery({
//     queryKey: [path],
//     queryFn: fetcher,
//     enabled: !!session,
//     retry: false,
//   });
// }

// export default useGetData;
