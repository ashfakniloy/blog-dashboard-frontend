import { Spinner } from "@/components/Loading/Spinner";
import Button from "@/components/ui/Button";

function LogoSubmit({ logo, handleImageSubmit, imageSubmitting }) {
  const handleLogoSubmit = () => {
    const values = { logo: logo };

    handleImageSubmit(values);
  };

  return (
    <div className="bg-gray-300 rounded-full">
      <Button
        type="button"
        className="w-[150px] font-medium relative"
        onClick={handleLogoSubmit}
        disabled={imageSubmitting}
      >
        {imageSubmitting && (
          <div className="absolute inset left-3.5">
            <span>
              <Spinner className="border-gray-200 border-r-gray-200/30 border-b-gray-200/30" />
            </span>
          </div>
        )}
        Submit
      </Button>
    </div>
  );
}

export default LogoSubmit;

// import { Spinner } from "@/components/Loading/Spinner";
// import Button from "@/components/ui/Button";
// import usePostData from "@/hooks/usePostData";
// import React from "react";
// import { toast } from "sonner";

// function LogoSubmit({ logo, setShowImageModal }) {
//   const { mutate, isPending } = usePostData({
//     path: "/user/change/logo",
//     revalidate: "/user/setting",
//   });

//   const handleLogoSubmit = () => {
//     const values = { logo: logo };
//     console.log("logo", values);
//     // setShowImageModal(false);
//     mutate(values, {
//       onSuccess: () => {
//         setShowImageModal(false);
//         toast.success("Logo changed successfully");
//       },
//     });
//   };
//   return (
//     <Button
//       type="button"
//       className="w-[150px] font-medium relative"
//       onClick={handleLogoSubmit}
//       disabled={isPending}
//     >
//       {isPending && (
//         <div className="absolute inset left-3.5">
//           <span>
//             <Spinner className="border-gray-200 border-r-gray-200/30 border-b-gray-200/30" />
//           </span>
//         </div>
//       )}
//       Submit
//     </Button>
//   );
// }

// export default LogoSubmit;
