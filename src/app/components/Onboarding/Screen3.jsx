import { useRouter } from "next/navigation";

export default function Screen3({ onBack }) {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-white p-4">
      <main className="flex-grow flex flex-col items-center justify-center bg-white text-black rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">3 Quick reminders:</h2>
        <ul className="space-y-4 text-left">
          <li className="flex items-center">
            <img src="/icons/harbor.svg" alt="Harbor" className="w-8 h-8 mr-4" />
            Keep to the right in the main harbor
          </li>
          <li className="flex items-center">
            <img src="/icons/canal.svg" alt="Canal" className="w-8 h-8 mr-4" />
            Sail in the middle of the canals
          </li>
          <li className="flex items-center">
            <img src="/icons/bus.svg" alt="Bus" className="w-8 h-8 mr-4" />
            Stay aware and watch out for the harbor bus
          </li>
        </ul>
        <div className="flex items-center mt-6">
          <input type="checkbox" id="agree" className="mr-2" />
          <label htmlFor="agree" className="text-sm">
            I have read and understood the conditions
          </label>
        </div>
        <p className="mt-8 font-bold text-center">
          GoBoat wishes you a great trip on the water!
        </p>
        <div className="flex justify-between mt-8">
          <button onClick={onBack} className="w-10 h-10 bg-yellow-400 rounded-full"></button>
          <button
            onClick={() => router.push("/")}
            className="w-10 h-10 bg-yellow-400 rounded-full"
          >
            →
          </button>
        </div>
      </main>
    </div>
  );
}
