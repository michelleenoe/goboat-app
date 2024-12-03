export default function Screen3({ onComplete }) {
  return (
    <div className="text-center">
      <h1 className="text-xl font-bold mb-4">3 Quick reminders:</h1>
      <ul className="list-disc text-left pl-6 mb-6">
        <li>Keep to the right in the main harbor</li>
        <li>Sail in the middle of the canals</li>
        <li>Stay aware and watch out for the harbor bus</li>
      </ul>
      <div className="flex items-center justify-center mb-6">
        <input type="checkbox" id="agree" className="mr-2" />
        <label htmlFor="agree" className="text-sm">
          I have read and understood the conditions
        </label>
      </div>
      <button
        onClick={onComplete}
        className="bg-yellow-400 px-6 py-2 rounded-full"
      >
        Go to Dashboard
      </button>
    </div>
  );
}
