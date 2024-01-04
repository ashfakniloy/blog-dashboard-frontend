import Image from "next/image";
import { IconTick } from "../Icons";

function ImageItem({ media, selectedId, handleImageClick }) {
  return (
    <div
      className={`relative size-[180px] 2xl:size-[282px] rounded-md overflow-hidden cursor-pointer`}
      onClick={() => handleImageClick(media)}
    >
      <Image src={media.src} alt={media.alt} fill className="object-cover" />

      {selectedId === media.id && (
        <div className="absolute inset-0 border-[6px] border-cyan-400 rounded-md">
          <div className="absolute top-0 right-0 size-6 flex justify-center items-center bg-cyan-400 border border-white text-white">
            <IconTick />
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageItem;
