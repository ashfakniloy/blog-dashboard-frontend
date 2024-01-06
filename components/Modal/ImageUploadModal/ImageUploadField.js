import { useEffect, useState } from "react";
import Image from "next/image";
import useTheme from "@/hooks/useTheme";
import { IconCloudArrow } from "@/components/Icons";
import { toast } from "sonner";
import { Spinner } from "@/components/LoadingSpinner/Spinner";
import ImageSubmitForm from "./ImageSubmitForm";
import Button from "@/components/ui/Button";
import LogoSubmit from "./LogoSubmit";

function ImageUploadField({
  imageUploading,
  setImageUploading,
  setImageUploaded,
  setShowImageModal,
  isLogo,
  setFieldValue,
}) {
  const theme = useTheme();

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [dragging, setDragging] = useState(false);

  const [imageUrl, setImageUrl] = useState(null);
  const [imageId, setImageId] = useState(null);

  const imageMaxSize = 500;

  const handleImageUpload = async () => {
    if (!image) return;

    if (image.size > imageMaxSize * 1024) {
      console.log("Image size exceeds the limit");
      toast.error("Image size exceeds the limit");
      return;
    }

    setImagePreview(URL.createObjectURL(image));

    // console.log("images", image);
    // return;

    const cloud_name = "db56mzvzc";
    const preset = "blog-dashboard";
    const folder = "blog-dashboard";

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", preset);
    formData.append("cloud_name", cloud_name);
    formData.append("folder", folder);
    // formData.append("folder", "nextjs13-fullstack-blog");

    setImageUploading(true);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (response.ok) {
        // set form value;
        setImageUrl(data.secure_url);
        setImageId(data.public_id);
        setImage(null);
        setImageUploaded(true);
      } else {
        console.log("error", data);
        setImage(null);
        setShowImageModal(false);
        toast.error("Image upload failed, try again");
      }
    } catch (error) {
      console.log("error", error);
      setImage(null);
      setShowImageModal(false);
      toast.error("Image upload failed, try again");
    }

    setImageUploading(false);
  };

  useEffect(() => {
    image && handleImageUpload();
  }, [image]);

  const handleImageChange = async (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    e.preventDefault();

    const image = e.target.files[0];
    // handleImageUpload();
    setImage(image);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    if (e.dataTransfer.files.length > 1) {
      console.log("single image only");
      toast.error("Single image only");
      return;
    }

    const droppedImage = e.dataTransfer.files[0];

    if (droppedImage.size > imageMaxSize * 1024) {
      console.log("Image size exceeds the limit");
      toast.error("Image size exceeds the limit");
      return;
    }

    setImage(droppedImage);

    // handleImageUpload(image);
  };

  return (
    <>
      {!imagePreview ? (
        <div
          className={`h-full flex flex-col justify-center items-center rounded-xl border-2 border-dashed
            text-gray-300 ${dragging ? "border-blue-500" : "border-gray-300"}`}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <span className="">
            <IconCloudArrow />
          </span>
          <p className="mt-5 text-xl font-medium">Drag and drop asset here</p>
          <p className="mt-1 text-sm ">{`Image size ( Max ${imageMaxSize}kb)`}</p>

          <p className="mt-3 font-medium text-black text-lg">Or</p>

          <input
            type="file"
            accept="image/*"
            // id={name}
            // {...register(name)}
            onChange={handleImageChange}
            className="hidden"
            // {...props}
            id="image"
          />

          <label
            htmlFor="image"
            className="mt-3 px-4 py-2 rounded-full w-[250px] flex justify-center border text-white disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
            style={{
              borderColor: theme,
              backgroundColor: theme,
            }}
          >
            Browse
          </label>
        </div>
      ) : (
        <div className="w-full h-full border-2 border-transparent bg-black rounded-lg">
          {imageUploading ? (
            <>
              <Image
                src={imagePreview}
                alt="image uploaded preview"
                fill
                className="object-cover blur-md opacity-50 rounded-lg"
              />
              <div className="absolute inset-0 flex justify-center items-center">
                <Spinner className="size-20 border-[6px]" />
              </div>
            </>
          ) : (
            imageUrl && (
              <>
                <Image
                  src={imageUrl}
                  alt="image uploaded result"
                  fill
                  className="object-cover rounded-lg"
                />

                {/* <div className="absolute inset-y-0 right-[-1px] border-2 border-white w-[240px] pl-5 h-full bg-white"> */}
                {!isLogo ? (
                  <div className="absolute inset-0 flex justify-center items-center h-full">
                    <div className=" w-[330px] px-7 py-5 bg-white rounded-lg">
                      <ImageSubmitForm
                        imageId={imageId}
                        imageUrl={imageUrl}
                        setShowImageModal={setShowImageModal}
                        setFieldValue={setFieldValue}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="mt-8 absolute right-3 bottom-3">
                    <LogoSubmit
                      logo={imageUrl}
                      setShowImageModal={setShowImageModal}
                    />
                    {/* <Button
                    type="button"
                    className="w-[150px] font-medium"
                    onClick={() => setShowImageModal(false)}
                  >
                    Submit
                  </Button> */}
                  </div>
                )}
              </>
            )
          )}
        </div>
      )}
    </>
  );
}

export default ImageUploadField;
