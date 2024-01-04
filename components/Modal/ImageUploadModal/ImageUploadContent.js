import { useState } from "react";
import ImageUploadField from "./ImageUploadField";
import { IconX } from "@/components/Icons";
import ImageLibrary from "./ImageLibrary";

function ImageUploadContent({ setShowImageModal, withLibrary }) {
  const [imageUploaded, setImageUploaded] = useState(false);
  const [imageUploading, setImageUploading] = useState(false);

  const imageOptions = ["Upload Your Image", "Choose From Library"];

  const [selectedOption, setSelectedOption] = useState(imageOptions[0]);

  return (
    <div className="fixed inset-0 z-30 bg-black/30 flex justify-center items-center">
      <div className="min-w-[765px] 2xl:min-w-[950px] p-7 rounded-xl bg-white relative">
        <button
          type="button"
          className="absolute right-1.5 top-1.5 rounded-full size-7 flex justify-center items-center border-2 border-gray-500 text-gray-500 disabled:pointer-events-none disabled:opacity-50"
          onClick={() => setShowImageModal(false)}
          disabled={imageUploading}
        >
          <IconX />
        </button>

        <div className="text-2xl font-bold text-center">
          <div className="">
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
            {imageUploaded && <p>Image Uploaded</p>}
          </div>
        </div>

        <div className="mt-4 h-[412px] 2xl:h-[500px] relative">
          {selectedOption === "Upload Your Image" && (
            <ImageUploadField
              imageUploading={imageUploading}
              setImageUploading={setImageUploading}
              setImageUploaded={setImageUploaded}
              setShowImageModal={setShowImageModal}
            />
          )}

          {selectedOption === "Choose From Library" && withLibrary && (
            <ImageLibrary setShowImageModal={setShowImageModal} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageUploadContent;

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Button from "../../ui/Button";
// import useTheme from "@/hooks/useTheme";
// import { IconCloudArrow, IconX } from "../../Icons";

// function ImageUploadModal({ setShowImageModal }) {
//   const theme = useTheme();

//   const [imageLoaded, setImageLoaded] = useState(false);
//   const [imageUploading, setImageUploading] = useState(false);

//   const [image, setImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [dragging, setDragging] = useState(false);

//   const [imageUrl, setImageUrl] = useState(null);
//   const [imageId, setImageId] = useState(null);

//   const imageMaxSize = 500;

//   const handleImageUpload = async () => {
//     if (!image) return;

//     if (image.size > imageMaxSize * 1024) {
//       console.log("Image size exceeds the limit");
//       return;
//     }

//     setImagePreview(URL.createObjectURL(image));

//     // console.log("images", image);
//     // return;

//     const cloud_name = "niloy56";
//     const preset = "techpost";
//     const folder = "techpost";

//     const formData = new FormData();
//     formData.append("file", image);
//     formData.append("upload_preset", preset);
//     formData.append("cloud_name", cloud_name);
//     formData.append("folder", folder);
//     // formData.append("folder", "nextjs13-fullstack-blog");

//     setImageUploading(true);

//     try {
//       const response = await fetch(
//         `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         // set form value;
//         setImageUrl(data.secure_url);
//         setImageId(data.public_id);
//         setImage(null);
//       } else {
//         console.log("error", data);
//         setImage(null);
//       }
//     } catch (error) {
//       console.log("error", error);
//     }

//     setImageUploading(false);
//   };

//   useEffect(() => {
//     image && handleImageUpload();
//   }, [image]);

//   const handleImageChange = async (e) => {
//     if (!e.target.files || e.target.files.length === 0) {
//       return;
//     }

//     e.preventDefault();

//     const image = e.target.files[0];
//     // handleImageUpload();
//     setImage(image);
//   };

//   const handleDragEnter = (e) => {
//     e.preventDefault();
//     setDragging(true);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     setDragging(true);
//   };

//   const handleDragLeave = () => {
//     setDragging(false);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setDragging(false);

//     if (e.dataTransfer.files.length > 1) {
//       console.log("single image only");
//       return;
//     }

//     const droppedImage = e.dataTransfer.files[0];

//     if (droppedImage.size > imageMaxSize * 1024) {
//       console.log("Image size exceeds the limit");
//       return;
//     }

//     setImage(droppedImage);

//     // handleImageUpload(image);
//   };

//   return (
//     <div className="fixed inset-0 z-30 bg-black/30 flex justify-center items-center">
//       <div className="w-[800px] p-7 rounded-xl bg-white relative">
//         <button
//           type="button"
//           className="absolute right-1.5 top-1.5 rounded-full size-7 flex justify-center items-center border-2 border-gray-500 text-gray-500 disabled:pointer-events-none disabled:opacity-50"
//           onClick={() => setShowImageModal(false)}
//           disabled={imageUploading}
//         >
//           <IconX />
//         </button>
//         <p className="text-center text-2xl font-bold">
//           {!imageUploading
//             ? !imageUrl
//               ? "Upload Your Image"
//               : "Image Uploaded"
//             : "Uploading..."}
//         </p>

//         <div className="mt-4 h-[400px] relative">
//           {!imagePreview ? (
//             <div
//               className={`h-full flex flex-col justify-center items-center rounded-xl border-2 border-dashed
//             text-gray-300 ${dragging ? "border-blue-500" : "border-gray-300"}`}
//               onDragEnter={handleDragEnter}
//               onDragOver={handleDragOver}
//               onDragLeave={handleDragLeave}
//               onDrop={handleDrop}
//             >
//               <span className="">
//                 <IconCloudArrow />
//               </span>
//               <p className="mt-5 text-xl font-medium">
//                 Drag and drop asset here
//               </p>
//               <p className="mt-1 text-sm ">{`Image size ( Max ${imageMaxSize}kb)`}</p>

//               <p className="mt-3 font-medium text-black text-lg">Or</p>

//               <input
//                 type="file"
//                 accept="image/*"
//                 // id={name}
//                 // {...register(name)}
//                 onChange={handleImageChange}
//                 className="hidden"
//                 // {...props}
//                 id="image"
//               />

//               <label
//                 htmlFor="image"
//                 className="mt-3 px-4 py-2 rounded-full w-[250px] flex justify-center border text-white disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
//                 style={{
//                   borderColor: theme,
//                   backgroundColor: theme,
//                 }}
//               >
//                 Browse
//               </label>
//             </div>
//           ) : (
//             <div className="w-full h-full border-2 border-transparent bg-black">
//               {imageUploading ? (
//                 <Image
//                   src={imagePreview}
//                   alt="image uploaded preview"
//                   fill
//                   className="object-cover blur-sm opacity-50 "
//                 />
//               ) : (
//                 imageUrl && (
//                   <>
//                     <Image
//                       src={imageUrl}
//                       alt="image uploaded result"
//                       fill
//                       className="object-cover"
//                     />

//                     <div className="mt-8 absolute right-3 bottom-3">
//                       <Button
//                         type="button"
//                         className="w-[150px] font-medium"
//                         onClick={() => setShowImageModal(false)}
//                       >
//                         Done
//                       </Button>
//                     </div>
//                   </>
//                 )
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ImageUploadModal;
