export const RouteFilter = ({ routes, selectedRoute, translations, language, onSelect }) => (
  <div className="absolute top-2 right-3 bg-white rounded-lg shadow-lg p-4 z-20 w-64 space-y-4 text-typoPrimary">
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
        className={`p-2 cursor-pointer rounded-lg flex justify-between items-center hover:bg-grey1 focus:outline-none focus-visible:ring-2 focus-visible:ring-focusOrange ${
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
              <path d="M16.707 5.293a1 1 0 00-1.414 0L7 13.586 4.707 11.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l9-9a1 1 0 000-1.414z" />
            </svg>
          )}
        </span>
      </div>
    ))}
  </div>
);
