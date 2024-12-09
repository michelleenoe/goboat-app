import React from "react";
import RouteHeader from "./Routeheader";
import RouteItem from "./RouteItem";

export default function RouteSelection({
  availableRoutes,
  selectedRouteId,
  handleRouteSelect,
  getRouteName,
}) {
  return (
    <div className="absolute right-0 mt-0.5 w-64 bg-white rounded-lg shadow-lg p-4 z-40">
      <RouteHeader />
      {availableRoutes.length === 0 && <div className="p-2">No routes available</div>}
      {availableRoutes.map((route) => (
        <RouteItem
          key={route.id}
          route={route}
          isSelected={selectedRouteId === route.id}
          onSelect={handleRouteSelect}
          getRouteName={getRouteName}
        />
      ))}
    </div>
  );
}
