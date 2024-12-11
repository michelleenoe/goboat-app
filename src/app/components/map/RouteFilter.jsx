import React from "react";

const RouteFilter = ({ routes, selectedRoute, translations, language, onSelect }) => (
  <div className="absolute top-3 left-4 bg-white rounded-lg shadow-lg p-4 z-20 w-64 space-y-4">
    {routes.map((route) => (
      <div
        key={route.id}
        role="button"
        tabIndex={0}
        onClick={() => onSelect(route.id)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onSelect(route.id);
          }
        }}
        className={`p-2 rounded-lg flex justify-between items-center ${
          selectedRoute === route.id ? "bg-grey2 font-bold" : ""
        }`}
      >
        <span>{translations[language][route.id]}</span>
        <span
          className={`rounded-full w-6 h-6 flex items-center justify-center ${
            selectedRoute === route.id ? "bg-goboatYellow" : "bg-grey1"
          }`}
        >
          {selectedRoute === route.id && (
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </span>
      </div>
    ))}
  </div>
);

export default RouteFilter;
