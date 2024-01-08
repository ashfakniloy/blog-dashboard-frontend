import { useState } from "react";
import { ImageIcon } from "./Icons/ImageIcon";
import ImageUploadModal from "../Modal/ImageUploadModal";

function ImageUpload({ editor }) {
  const [showImageModal, setShowImageModal] = useState(false);

  const handleImageSubmit = (imageValues) => {
    console.log("imageValues", imageValues);
    editor
      ?.chain()
      ?.focus()
      .setImage({
        src: imageValues.image.url,
        alt: imageValues.altText,
        title: imageValues.imageTitle,
      })
      .run();

    setShowImageModal(false);
  };

  return (
    <ImageUploadModal
      withLibrary
      showImageModal={showImageModal}
      setShowImageModal={setShowImageModal}
      handleImageSubmit={handleImageSubmit}
    >
      <button
        type="button"
        className={showImageModal ? "is-active" : ""}
        title="Image"
      >
        <span className="fill-gray-700">
          <ImageIcon />
        </span>
      </button>
    </ImageUploadModal>
  );
}

export default ImageUpload;
