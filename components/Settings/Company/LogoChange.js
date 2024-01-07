import Image from "next/image";
import { IconEdit } from "@/components/Icons";
import ImageUploadModal from "@/components/Modal/ImageUploadModal";

function LogoChange({ logo }) {
  return (
    <div className="relative size-[100px] rounded-full overflow-hidden bg-white">
      {logo && (
        <Image src={logo} alt="static logo" fill className="object-cover" />
      )}
      <div className="absolute inset-x-0 bottom-0 top-1/2 bg-white/70"></div>
      <div className="absolute flex inset-x-0 bottom-2 justify-center items-center text-black">
        <ImageUploadModal isLogo>
          <button type="button">
            <IconEdit />
          </button>
        </ImageUploadModal>
      </div>
    </div>
  );
}

export default LogoChange;
