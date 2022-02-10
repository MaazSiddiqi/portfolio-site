import React from "react";

export default function Input({ label, type, placeholder, className }) {
  return (
    <div className={`flex flex-col shrink ${className ? className : ""}`}>
      <label
        htmlFor={`${label}-input`}
        className="font-extralight text-xs py-[0.125rem] px-1 text-fuchsia-500"
      >
        {label}
      </label>
      <input
        name={`${label}-input`}
        type={type ? type : "text"}
        placeholder={placeholder ? placeholder : ""}
        className="py-2 px-3 rounded-md text-sm font-light text-gray-500"
      />
    </div>
  );
}
