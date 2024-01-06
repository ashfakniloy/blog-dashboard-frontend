import { useState } from "react";
import { toast } from "sonner";
import { IconDelete } from "@/components/Icons";
import useDeleteData from "@/hooks/useDeleteData";
import DeleteModal from "@/components/Modal/DeleteModal";

function DeleteCategory({ categoryInfo }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const { mutate, isPending, isSuccess, isError, reset } = useDeleteData({
    path: `/category/delete/${categoryInfo._id}`,
    revalidate: "/category",
  });

  // console.log("ispending", isPending);

  const handleDelete = () => {
    mutate(
      {},
      {
        onSuccess: () => {
          console.log("onsuccess");
          toast.success(`Category ${categoryInfo.name} deleted`);
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
      key={categoryInfo.id}
      showDeleteModal={showDeleteModal}
      setShowDeleteModal={setShowDeleteModal}
      title={`Do you want to delete category ${categoryInfo.name}?`}
      handleDelete={handleDelete}
      isPending={isPending}
    >
      <button type="button" className="text-custom-red2">
        <IconDelete />
      </button>
    </DeleteModal>
  );
}

export default DeleteCategory;

// import { useState } from "react";
// import { IconDelete } from "@/components/Icons";
// import {
//   AlertDialog,
//   AlertDialogContent,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import Button from "@/components/ui/Button";
// import Lottie from "lottie-react";
// import useDeleteData from "@/hooks/useDeleteData";
// import deleteLottie from "@/public/lottie/delete-lottie.json";
// import LoadingAnimation from "./LoadingAnimation";
// import { toast } from "sonner";

// function DeleteCategory({ categoryInfo }) {
//   const [showDeleteModal, setShowDeleteModal] = useState(false);

//   const { mutate, isPending, isSuccess, isError, reset } = useDeleteData({
//     path: `/category/delete/${categoryInfo._id}`,
//     revalidate: "/category",
//   });

//   // console.log("ispending", isPending);

//   const handleDelete = () => {
//     mutate(
//       {},
//       {
//         onSuccess: () => {
//           console.log("onsuccess");
//           toast.success(`Category ${categoryInfo.name} deleted`);
//         },
//       }
//     );
//   };

//   return (
//     <AlertDialog
//       open={showDeleteModal}
//       onOpenChange={setShowDeleteModal}
//       key={categoryInfo.id}
//     >
//       <AlertDialogTrigger asChild>
//         <button type="button" className="text-custom-red2">
//           <IconDelete />
//         </button>
//       </AlertDialogTrigger>

//       <AlertDialogContent className="bg-white w-[626px] h-[275px] p-9 flex flex-col items-center">
//         {!isPending && !isSuccess && !isError && (
//           <div className=" flex flex-col items-center">
//             <p className="text-lg font-medium">
//               {`Do you want to delete category ${categoryInfo.name}?`}
//             </p>

//             <div className="size-[116px]">
//               <Lottie animationData={deleteLottie} />
//             </div>

//             <div className="mt-6 flex justify-center gap-5">
//               <Button
//                 type="button"
//                 variant="outline"
//                 className="w-[124px]"
//                 onClick={handleDelete}
//                 disabled={isPending}
//               >
//                 Yes
//               </Button>
//               <Button
//                 type="button"
//                 className="w-[124px]"
//                 onClick={() => setShowDeleteModal(false)}
//                 disabled={isPending}
//               >
//                 No
//               </Button>
//             </div>
//           </div>
//         )}

//         <LoadingAnimation
//           // key={categoryInfo._id}
//           isPending={isPending}
//           isSuccess={isSuccess}
//           isError={isError}
//           handleOnComplete={() => {
//             setShowDeleteModal(false);
//             reset();
//           }}
//         />
//       </AlertDialogContent>
//     </AlertDialog>
//   );
// }

// export default DeleteCategory;
