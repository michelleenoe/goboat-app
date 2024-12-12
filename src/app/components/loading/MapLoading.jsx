import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MapLoading = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
      {/* Skeleton for Map Container */}
      <div className="w-full h-full">
        <Skeleton height="100%" />
      </div>

      {/* Skeleton for Filter Button */}
      <div className="absolute top-4 left-4 z-10">
        <Skeleton circle={true} width={48} height={48} />
      </div>

      {/* Skeleton for Route Filter Dropdown */}
      <div className="absolute top-16 left-4 z-10 flex flex-col gap-4">
        {[...Array(3)].map((_, index) => (
          <Skeleton key={index} height={40} width={200} />
        ))}
      </div>
    </div>
  );
};

export default MapLoading;
