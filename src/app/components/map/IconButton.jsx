"use client";
import React from "react";

export default function IconButton({ onClick, icon, label, children }) {
  return (
    <button
      onClick={onClick}
      className="bg-grey2 hover:bg-lightBlue p-3 rounded-full shadow-md flex items-center space-x-2 text-typoPrimary"
      aria-label={label}
    >
      {icon}
      {children && <span>{children}</span>}
    </button>
  );
}
