import { useRef, useState } from "react";
import Image from "next/image";
import { IconPaperPlus } from "@/components/Icons";
import { mediaData } from "@/mockData/mediaData";
import PageWrapper from "@/components/Layout/PageWrapper";
import { getFormattedDate } from "@/utils/getFormattedDate";
import MediaForm from "@/components/Forms/SeoSettings/MediaForm";

function MediaPage() {
  const [imageInfo, setImageInfo] = useState(null);

  const handleImageClick = (media) => {
    // If the clicked image is already selected, set imageInfo to null
    if (imageInfo?.title === media.title) {
      setImageInfo(null);
    } else {
      setImageInfo(media);
    }
  };

  const imageRef = useRef();
  const [imageSize, setImageSize] = useState(null);

  const handleImageLoad = () => {
    const { naturalWidth, naturalHeight } = imageRef.current;
    setImageSize({ width: naturalWidth, height: naturalHeight });
  };

  return (
    <PageWrapper title="Media" description="media" heading="All Media">
      <div className="mt-5 border border-gray-300 rounded-xl flex">
        {/* <div className="grid grid-cols-5 gap-5"> */}
        <div className="flex-1 ">
          <div className="flex flex-wrap gap-5 p-5">
            <div className="size-[180px] 2xl:size-[280px] rounded-md border-gray-400 bg-gray-100 flex justify-center items-center">
              <div className="flex items-center gap-1.5 text-sm text-gray-600">
                <span>
                  <IconPaperPlus />
                </span>
                <p>Upload Image</p>
              </div>
            </div>

            {mediaData.map((media) => (
              <div
                key={media.id}
                className={`relative size-[180px] 2xl:size-[280px] rounded-md overflow-hidden cursor-pointer`}
                onClick={() => handleImageClick(media)}
              >
                <Image
                  src={media.src}
                  alt={media.alt}
                  fill
                  className="object-cover"
                />
                {imageInfo?.title === media.title && (
                  <div className="absolute inset-0  border-[6px] border-cyan-400 rounded-md"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {imageInfo && (
          <div className="w-[400px] 2xl:w-[660px] border-l border-gray-300">
            <div className="p-5 pb-5 border-b border-gray-300">
              <p className="text-[20px] font-medium text-gray-600">
                Image Details
              </p>
              <div className="mt-3 flex items-center gap-6">
                {/* <div
                  key={imageInfo.title}
                  className="relative size-[180px] 2xl:size-[280px] rounded-md overflow-hidden"
                >
                  <Image
                    src={imageInfo.src}
                    alt={imageInfo.alt}
                    fill
                    className="object-cover"
                  />
                </div> */}
                <div className="max-w-[180px] max-h-[380px] overflow-hidden">
                  <img
                    key={imageInfo.id}
                    ref={imageRef}
                    src={imageInfo.src}
                    alt={imageInfo.alt}
                    onLoad={handleImageLoad}
                  />
                </div>

                <div className="text-sm text-gray-500 leading-6">
                  <p className="font-semibold">{imageInfo.title}</p>
                  <p className="">{getFormattedDate(imageInfo.time)}</p>
                  <p className="">
                    {imageSize?.width} x {imageSize?.height}
                  </p>
                  {/* <p className="">{imageInfo.size}</p> */}
                </div>
              </div>
            </div>

            <div className="p-5 w-[80%]">
              <MediaForm
                key={imageInfo.id}
                image_title={imageInfo.title}
                alt_text={imageInfo.alt}
              />
            </div>
          </div>
        )}
      </div>
    </PageWrapper>
  );
}

export default MediaPage;
