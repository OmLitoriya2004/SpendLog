import React, { useRef, useState } from "react";
import { LuUser, LuTrash, LuUpload } from "react-icons/lu";

const ProfilePhotoSelector = ({ image, setImage }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  return (
    <div className="flex justify-center mb-6">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {!image ? (
        <div className="w-24 h-24 flex justify-center items-center bg-sky-100 rounded-full relative shadow-md shadow-blue-200/40">
          <LuUser className="text-5xl text-blue-600" />
          <button
            type="button"
            onClick={onChooseFile}
            className="w-9 h-9 flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white rounded-full absolute -bottom-1 -right-1 shadow-md transition"
          >
            <LuUpload className="text-lg" />
          </button>
        </div>
      ) : (
        <div className="relative shadow-md shadow-blue-200/30 rounded-full">
          <img
            src={previewUrl}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border border-blue-200"
          />
          <button
            type="button"
            onClick={handleRemoveImage}
            className="w-9 h-9 flex justify-center items-center bg-red-500 hover:bg-red-600 text-white rounded-full absolute -bottom-1 -right-1 shadow-md transition"
          >
            <LuTrash className="text-lg" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoSelector;
