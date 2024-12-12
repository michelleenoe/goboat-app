import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ErrorLoading() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-6">
        <Skeleton width={200} />
      </h1>
      <div className="mb-4">
        <Skeleton height={40} />
      </div>
      <div className="my-6">
        <h2 className="font-semibold mb-2">
          <Skeleton width={150} />
        </h2>
        <p className="font-bold text-darkBlue dark:text-lightBlue">
          <Skeleton width={300} />
        </p>
      </div>
      <div>
        <Skeleton count={3} height={20} />
      </div>
    </div>
  );
}
