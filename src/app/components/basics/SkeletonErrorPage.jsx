import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonErrorPage = () => {
  return (
    <div>
      <Skeleton height="30px" width="50%" className="mb-6" />
      <Skeleton height="40px" width="100%" className="mb-6" />
      <Skeleton height="25px" width="60%" className="mb-2" />
      <Skeleton height="20px" width="70%" className="mb-6" />
      <Skeleton height="150px" width="100%" className="mb-4" />
    </div>
  );
};

export default SkeletonErrorPage;
