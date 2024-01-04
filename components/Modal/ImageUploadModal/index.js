import { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import ImageUploadContent from "./ImageUploadContent";

function ImageUploadModal({ children, withLibrary }) {
  const [showImageModal, setShowImageModal] = useState(false);

  return (
    <AlertDialog open={showImageModal} onOpenChange={setShowImageModal}>
      <AlertDialogTrigger asChild className="outline-gray-300">
        {children}
      </AlertDialogTrigger>

      <AlertDialogContent>
        <ImageUploadContent
          setShowImageModal={setShowImageModal}
          withLibrary={withLibrary}
        />
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ImageUploadModal;
