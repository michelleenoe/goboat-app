export default function Pagination({ currentScreen, totalScreens }) {
  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      {Array.from({ length: totalScreens }).map((_, index) => (
        <div
          key={index}
          className={`w-4 h-4 rounded-full ${
            index === currentScreen ? "bg-goboatYellow" : "bg-grey1"
          }`}
        ></div>
      ))}
    </div>
  );
}
