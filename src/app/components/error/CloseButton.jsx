// const CloseButton = ({ onClick }) => {
//   return (
//     <button
//       onClick={onClick}
//       className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full"
//     >
//       Close
//     </button>
//   );
// };

// export default CloseButton;

import Image from "next/image";

const CloseButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="absolute top-2 right-2">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-grey2 hover:bg-lightBlue">
        <Image
          src="/Icons/x.svg"
          alt="close"
          width={24} // Angiv billedets bredde
          height={24} // Angiv billedets højde
          className="w-8 h-8"
        />
      </div>
    </button>
  );
};

export default CloseButton;
