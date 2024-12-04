import React from 'react';

export default function RouteSelection({
  availableRoutes,
  selectedRouteId,
  handleRouteSelect,
  getRouteName,
}) {
  return (
    <div className="absolute right-0 mt-0.5 w-64 bg-white rounded-lg shadow-lg p-4 z-40">
      <h2 className="text-lg font-regular mb-2">Routes</h2>
      {availableRoutes.length === 0 && (
        <div className="p-2">No routes available</div>
      )}
      {availableRoutes.map((route) => (
        <div
          key={route.id}
          onClick={() => handleRouteSelect(route.id)}
          className={`p-2 rounded-lg flex justify-between items-center ${
            selectedRouteId === route.id ? "bg-grey2 font-regular" : ""
          }`}
        >
          <div>{getRouteName(route.id)}</div>
          <span
            className={`rounded-full w-6 h-6 flex items-center justify-center ${
              selectedRouteId === route.id ? "bg-goboatYellow" : "bg-grey1"
            }`}
          >
            {selectedRouteId === route.id && (
              <span
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'><path d='M20 6 9 17l-5-5'/></svg>\")",
                  backgroundSize: "16px",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center",
                  width: "16px",
                  height: "16px",
                  display: "inline-block"
                }}
              />
            )}
          </span>
        </div>
      ))}
    </div>
  );
}
