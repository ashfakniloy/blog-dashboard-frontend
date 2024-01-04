import { useRef, useState } from "react";
import MediaForm from "../Forms/SeoSettings/MediaForm";
import { getFormattedDate } from "@/utils/getFormattedDate";
import { ScrollArea } from "../ui/scroll-area";

function ImageDetails({ selectedImage }) {
  const imageRef = useRef();
  const [imageSize, setImageSize] = useState(null);

  const handleImageLoad = () => {
    const { naturalWidth, naturalHeight } = imageRef.current;
    setImageSize({ width: naturalWidth, height: naturalHeight });
  };

  return (
    <ScrollArea className="h-screen w-[400px] 2xl:w-[625px]">
      <div className="pt-4 p-5 2xl:p-7 border-b border-gray-300">
        <p className="text-[20px] font-medium text-gray-600">Image Details</p>
        <div className="mt-3 flex items-center gap-5">
          <div className="max-w-[200px] 2xl:max-w-[320px] max-h-[380px] overflow-hidden">
            <img
              key={selectedImage.id}
              ref={imageRef}
              src={selectedImage.src}
              alt={selectedImage.alt}
              onLoad={handleImageLoad}
            />
          </div>

          <div className="text-sm text-gray-500 leading-6">
            <p className="font-semibold">{selectedImage.title}</p>
            <p className="">{getFormattedDate(selectedImage.time)}</p>
            <p className="">
              {imageSize?.width} x {imageSize?.height}
            </p>
            {/* <p className="">{selectedImage.size}</p> */}
          </div>
        </div>
      </div>

      <div className="p-5 2xl:p-7 pb-[140px] w-[80%]">
        <MediaForm
          key={selectedImage.id}
          image_title={selectedImage.title}
          alt_text={selectedImage.alt}
        />
      </div>
    </ScrollArea>
  );
}

export default ImageDetails;
