"use client";
export default function ToggleMapStyleButton({ toggleMapStyle }) {
  return (
    <button
      onClick={toggleMapStyle}
      className="bg-white p-3 rounded-full shadow-md"
      aria-label="Toggle map icon"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 7h-2V6h-2v3H9v2h4v3h2v-3h2V9z"></path>
      </svg>
    </button>
  );
}
