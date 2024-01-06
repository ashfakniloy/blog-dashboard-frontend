import { useState } from "react";
import { toast } from "sonner";
import { IconDelete } from "@/components/Icons";
import useDeleteData from "@/hooks/useDeleteData";
import DeleteModal from "@/components/Modal/DeleteModal";

function DeleteBlog({ blogInfo }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const { mutate, isPending, isSuccess, isError, reset } = useDeleteData({
    path: `/blog/delete/${blogInfo._id}`,
    revalidate: "/blog",
  });

  // console.log("ispending", isPending);

  const handleDelete = () => {
    mutate(
      {},
      {
        onSuccess: () => {
          console.log("onsuccess");
          toast.success(`Blog deleted`);
          setShowDeleteModal(false);
        },
        onError: () => {
          console.log("onerror");
          setShowDeleteModal(false);
        },
      }
    );
  };

  return (
    <DeleteModal
      key={blogInfo._id}
      showDeleteModal={showDeleteModal}
      setShowDeleteModal={setShowDeleteModal}
      title={`Do you want to delete this blog?`}
      handleDelete={handleDelete}
      isPending={isPending}
    >
      <button type="button" className="text-custom-red2">
        <IconDelete />
      </button>
    </DeleteModal>
  );
}

export default DeleteBlog;

// import { useEffect, useState } from "react";
// import { IconDelete } from "@/components/Icons";
// import {
//   AlertDialog,
//   AlertDialogContent,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import Button from "@/components/ui/Button";
// import Lottie from "lottie-react";
// import deleteLottie from "@/public/lottie/delete-lottie.json";
// // import loadingLottie from "@/public/lottie/loading-lottie.json";
// // import checkLottie from "@/public/lottie/check-lottie.json";
// // import checkLottie3 from "@/public/lottie/check-lottie3.json";

// function DeleteBlog({ blogInfo }) {
//   const [showDeleteModal, setShowDeleteModal] = useState(false);

//   // const [isLoading, setIsLoading] = useState(false);

//   // useEffect(() => {
//   //   if (showDeleteModal) {
//   //     setIsLoading(true);
//   //     const timer = setTimeout(() => {
//   //       setIsLoading(false);
//   //       // setDone(true);
//   //     }, 3000);

//   //     return () => clearTimeout(timer);
//   //   }
//   // }, [showDeleteModal]);

//   // const loadingOptions = {
//   //   loop: true,
//   //   autoPlay: true,
//   //   animationData: loadingLottie,
//   // };

//   // const checkOptions = {
//   //   loop: false,
//   //   autoPlay: true,
//   //   animationData: checkLottie3,
//   // };

//   return (
//     <AlertDialog open={showDeleteModal} onOpenChange={setShowDeleteModal}>
//       <AlertDialogTrigger asChild>
//         <button type="button" className="text-custom-red2">
//           <IconDelete />
//         </button>
//       </AlertDialogTrigger>

//       <AlertDialogContent className="bg-white w-[626px]  p-9 flex flex-col items-center">
//         <div className="">
//           <p className="text-lg font-medium">
//             Do you want to delete your blog?
//           </p>
//         </div>

//         <div className="size-[116px]">
//           <Lottie animationData={deleteLottie} />
//         </div>

//         {/* <div className="size-[200px] bg-gray-300 flex justify-center items-center">
//           <div className="!size-[170px]">
//             {isLoading ? (
//               <Lottie {...loadingOptions} />
//             ) : (
//               <Lottie
//                 {...checkOptions}
//                 onComplete={() => {
//                   setShowDeleteModal(false);
//                 }}
//               />
//             )}
//           </div>
//         </div> */}

//         <div className="flex justify-center gap-5">
//           <Button type="button" variant="outline" className="w-[124px] ">
//             Yes
//           </Button>
//           <Button
//             type="button"
//             className="w-[124px]"
//             onClick={() => setShowDeleteModal(false)}
//           >
//             No
//           </Button>
//         </div>
//       </AlertDialogContent>
//     </AlertDialog>
//   );
// }

// export default DeleteBlog;
