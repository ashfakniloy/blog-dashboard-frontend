import Image from "next/image";
import { IconPaperPlus } from "@/components/Icons";
import { mediaData } from "@/mockData/mediaData";
import PageWrapper from "@/components/Layout/PageWrapper";

function MediaPage() {
  return (
    <PageWrapper title="Media" description="media" heading="All Media">
      <div className="mt-5 border border-gray-300 rounded-xl p-5 grid grid-cols-5 gap-5">
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
            key={media.title}
            className="relative size-[180px] 2xl:size-[280px] rounded-md overflow-hidden"
          >
            <Image
              src={media.src}
              alt={media.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}

export default MediaPage;
