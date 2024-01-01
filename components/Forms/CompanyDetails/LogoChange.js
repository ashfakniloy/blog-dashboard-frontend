import { IconEdit } from "@/components/Icons";
import Image from "next/image";

function LogoChange({ logo }) {
  const initialValues = {
    image: logo || "",
  };

  return (
    <div className="relative size-[100px] rounded-full overflow-hidden bg-white">
      {logo && (
        <Image src={logo} alt="static logo" fill className="object-cover" />
      )}
      <div className="absolute flex inset-x-0 bottom-2 justify-center items-center text-black">
        <IconEdit />
      </div>
    </div>
  );
}

export default LogoChange;
