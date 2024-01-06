import React from "react";

export const RadioField = ({ label, name, ...props }) => {
  return (
    // <div className="flex items-center gap-2">
    <label htmlFor={label} className="flex items-center gap-3 cursor-pointer">
      <input
        type="radio"
        id={label}
        // name={name}
        // checked={rel === null}
        // onChange={() => setRel(null)}
        {...props}
      />
      <span className="">{label}</span>
    </label>
  );
};
