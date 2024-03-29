import { useState } from "react";
import ImageUploadField from "./ImageUploadField";
import { IconX } from "@/components/Icons";
import ImageLibrary from "./ImageLibrary";

function ImageUploadContent({
  setShowImageModal,
  withLibrary,
  isLogo,
  handleImageSubmit,
  imageSubmitting,
}) {
  const [imageUploaded, setImageUploaded] = useState(false);
  const [imageUploading, setImageUploading] = useState(false);

  const imageOptions = ["Upload Your Image", "Choose From Library"];

  const [selectedOption, setSelectedOption] = useState(imageOptions[0]);

  return (
    <div className="p-7 relative">
      <button
        type="button"
        className="absolute right-1.5 top-1.5 rounded-full size-7 flex justify-center items-center border-2 border-gray-500 text-gray-500 disabled:pointer-events-none disabled:opacity-50"
        onClick={() => setShowImageModal(false)}
        disabled={imageUploading}
      >
        <IconX />
      </button>

      <div className="text-2xl font-bold text-center">
        <div>
          {!imageUploading && !imageUploaded && (
            <div className="flex justify-center items-center divide-x divide-gray-300">
              {withLibrary ? (
                imageOptions.map((option) => (
                  <div key={option} className="px-4">
                    <button
                      type="button"
                      className={`outline-none ${
                        option === selectedOption
                          ? "text-black"
                          : "text-gray-300"
                      }`}
                      onClick={() => setSelectedOption(option)}
                    >
                      {option}
                    </button>
                  </div>
                ))
              ) : (
                <p>{selectedOption}</p>
              )}
            </div>
          )}

          {imageUploading && <p>Uploading...</p>}
          {imageUploaded && !isLogo && <p>Image Uploaded</p>}
          {isLogo && imageUploaded && <p>Submit logo</p>}
        </div>
      </div>

      <div className="mt-4 h-[412px] 2xl:h-[500px] relative">
        {selectedOption === "Upload Your Image" && (
          <ImageUploadField
            imageUploading={imageUploading}
            setImageUploading={setImageUploading}
            setImageUploaded={setImageUploaded}
            setShowImageModal={setShowImageModal}
            isLogo={isLogo}
            handleImageSubmit={handleImageSubmit}
            imageSubmitting={imageSubmitting}
          />
        )}

        {selectedOption === "Choose From Library" && withLibrary && (
          <ImageLibrary
            setShowImageModal={setShowImageModal}
            handleImageSubmit={handleImageSubmit}
          />
        )}
      </div>
    </div>
  );
}

export default ImageUploadContent;
