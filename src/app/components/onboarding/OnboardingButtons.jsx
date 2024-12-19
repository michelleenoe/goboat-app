import Image from "next/image";
import { useRouter } from "next/navigation";

const OnboardingButtons = ({
  onBack,
  onNext,
  nextRoute = "/",
  isAgreed = true,
  disableBack = false,
}) => {
  const router = useRouter();

  return (
    <div className="flex justify-end mt-8">
      <div className="flex gap-2">
        <button
          onClick={onBack}
          className={`flex items-center justify-center w-11 h-11 bg-goboatYellow  rounded-full transition ${
            disableBack
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-yellow-500"
          }`}
          disabled={disableBack}
          aria-label="Go to previous step"
        >
          <Image src="/Icons/chevron-left.svg" alt="" width={30} height={30} />
        </button>
        <button
          onClick={() =>
            isAgreed && (onNext ? onNext() : router.push(nextRoute))
          }
          className={`flex items-center justify-center w-11 h-11 rounded-full transition ${
            isAgreed
              ? "bg-goboatYellow hover:bg-yellow-500"
              : "bg-goboatYellow opacity-40 cursor-not-allowed"
          }`}
          disabled={!isAgreed}
          aria-label="Go to next step"
        >
          <Image src="/Icons/chevron-right.svg" alt="" width={30} height={30} />
        </button>
      </div>
    </div>
  );
};

export default OnboardingButtons;
