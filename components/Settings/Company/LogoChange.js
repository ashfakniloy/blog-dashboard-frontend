import Image from "next/image";
import { IconEdit } from "@/components/Icons";
import ImageUploadModal from "@/components/Modal/ImageUploadModal";
import usePostData from "@/hooks/usePostData";
import { toast } from "sonner";
import { useState } from "react";

function LogoChange({ logo }) {
  const [showImageModal, setShowImageModal] = useState(false);

  const { mutate, isPending } = usePostData({
    path: "/user/change/logo",
    revalidate: "/user/setting",
  });

  const handleImageSubmit = (values) => {
    mutate(values, {
      onSuccess: () => {
        setShowImageModal(false);
        toast.success("Logo changed successfully");
      },
    });
  };

  return (
    <div className="relative size-[100px] rounded-full overflow-hidden bg-white">
      {logo && (
        <Image src={logo} alt="static logo" fill className="object-cover" />
      )}
      <div className="absolute inset-x-0 bottom-0 top-1/2 bg-white/70"></div>
      <div className="absolute flex inset-x-0 bottom-2 justify-center items-center text-black">
        <ImageUploadModal
          isLogo
          showImageModal={showImageModal}
          setShowImageModal={setShowImageModal}
          handleImageSubmit={handleImageSubmit}
          imageSubmitting={isPending}
        >
          <button type="button">
            <IconEdit />
          </button>
        </ImageUploadModal>
      </div>
    </div>
  );
}

export default LogoChange;
