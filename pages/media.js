import { useState } from "react";
import PageWrapper from "@/components/Layout/PageWrapper";
import ImageDetails from "@/components/Media/ImageDetails";
import ImageItem from "@/components/Media/ImageItem";
// import { mediaData } from "@/mockData/mediaData";
import { IconPaperPlus } from "@/components/Icons";
import ImageUploadModal from "@/components/Modal/ImageUploadModal";
import useGetData from "@/hooks/useGetData";

function MediaPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const {
    data: mediaData,
    // isLoading,
    isPending,
  } = useGetData({ path: "/media" });

  // console.log("media", mediaData);

  const handleImageClick = (media) => {
    if (selectedImage?._id === media._id) {
      setSelectedImage(null);
    } else {
      setSelectedImage(media);
    }
  };

  return (
    <PageWrapper
      title="Media"
      description="media"
      heading="All Media"
      isLoading={isPending}
    >
      <div className="mt-5 border border-gray-300 rounded-xl flex min-h-[420px] 2xl:min-h-[700px]">
        <div className="">
          <div className="flex flex-wrap gap-5 2xl:gap-7 p-5 2xl:p-7">
            <ImageUploadModal>
              <button
                type="button"
                className="size-[180px] 2xl:size-[280px] rounded-md border-gray-400 bg-gray-100 flex justify-center items-center"
              >
                <div className="flex items-center gap-1.5 text-sm text-gray-600">
                  <span>
                    <IconPaperPlus />
                  </span>
                  <p>Upload Image</p>
                </div>
              </button>
            </ImageUploadModal>

            {mediaData?.data.map((media) => (
              <ImageItem
                key={media._id}
                media={media}
                selectedId={selectedImage?._id}
                handleImageClick={handleImageClick}
              />
            ))}
          </div>
        </div>
        <div className="relative">
          {selectedImage && (
            <div className="sticky top-0 border-l border-gray-300">
              <ImageDetails
                key={selectedImage._id}
                selectedImage={selectedImage}
              />
            </div>
          )}
        </div>
      </div>
    </PageWrapper>
  );
}

export default MediaPage;
