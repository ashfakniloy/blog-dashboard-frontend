import { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import ImageUploadContent from "./ImageUploadContent";

function ImageUploadModal({ children, withLibrary, isLogo, setFieldValue }) {
  const [showImageModal, setShowImageModal] = useState(false);

  return (
    <AlertDialog open={showImageModal} onOpenChange={setShowImageModal}>
      <AlertDialogTrigger asChild className="outline-gray-300">
        {children}
      </AlertDialogTrigger>

      <AlertDialogContent className="min-w-[765px] 2xl:min-w-[950px] rounded-xl bg-white">
        <ImageUploadContent
          setShowImageModal={setShowImageModal}
          withLibrary={withLibrary}
          isLogo={isLogo}
          setFieldValue={setFieldValue}
        />
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ImageUploadModal;
