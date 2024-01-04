import { useState } from "react";
// import ImageItem from "@/components/Media/ImageItem";
import Image from "next/image";
import { IconTick } from "@/components/Icons";
import Button from "@/components/ui/Button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { mediaData } from "@/mockData/mediaData";

function ImageLibrary({ setShowImageModal }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (media) => {
    if (selectedImage?.id === media.id) {
      setSelectedImage(null);
    } else {
      setSelectedImage(media);
    }
  };

  return (
    <div className="">
      {/* <div className="flex flex-wrap gap-5"> */}
      <ScrollArea className="h-[350px] 2xl:h-[430px]">
        <div className="p-3 grid grid-cols-4 2xl:grid-cols-5 justify-items-center gap-7 overflow-x-hidden overflow-y-auto">
          {mediaData.map((media) => (
            <div
              key={media.id}
              className={`relative size-[150px] rounded-md overflow-hidden cursor-pointer`}
              onClick={() => handleImageClick(media)}
            >
              <Image
                src={media.src}
                alt={media.alt}
                fill
                className="object-cover"
              />

              {selectedImage?.id === media.id && (
                <div className="absolute inset-0 border-[6px] border-cyan-400 rounded-md">
                  <div className="absolute top-0 right-0 size-6 flex justify-center items-center bg-cyan-400 border border-white text-white">
                    <IconTick />
                  </div>
                </div>
              )}
            </div>
            // <ImageItem
            //   key={media.id}
            //   media={media}
            //   selectedTitle={selectedImage?.title}
            //   handleImageClick={handleImageClick}
            // />
          ))}
        </div>
      </ScrollArea>

      <Button type="button" className="ml-3 mt-5 w-[150px]">
        Save
      </Button>
    </div>
  );
}

export default ImageLibrary;
