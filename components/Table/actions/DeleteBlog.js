import { useState } from "react";
import { IconDelete } from "@/components/Icons";

function DeleteBlog({ blogInfo }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setShowDeleteModal(true)}
        className="text-custom-red2"
      >
        <IconDelete />
      </button>
    </div>
  );
}

export default DeleteBlog;
