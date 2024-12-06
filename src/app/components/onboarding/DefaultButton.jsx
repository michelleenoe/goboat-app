import React from "react";

const DefaultButton = ({ onClick, text }) => {
  return (
    <button
      className="bg-goboatYellow h-11 w-28 px-6 py-2 rounded-full mb-6"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default DefaultButton;
