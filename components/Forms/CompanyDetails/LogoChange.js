import { IconEdit } from "@/components/Icons";
import ImageUploadModal from "@/components/Modal/ImageUploadModal";
import Image from "next/image";

function LogoChange({ logo }) {
  // const initialValues = {
  //   logo: logo || "",
  // };

  console.log("logo", logo);

  return (
    <div className="relative size-[100px] rounded-full overflow-hidden bg-white">
      {logo && (
        <Image src={logo} alt="static logo" fill className="object-cover" />
      )}
      <div className="absolute inset-x-0 bottom-0 top-1/2 bg-black/30"></div>
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
