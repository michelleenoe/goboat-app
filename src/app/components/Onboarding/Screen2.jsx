export default function Screen2({ onNext }) {
  return (
    <div className="text-center">
      <h1 className="text-xl font-bold mb-4">How long will you be sailing?</h1>
      <button
        onClick={onNext}
        className="bg-yellow-400 px-6 py-2 rounded-full mb-4"
      >
        1 Hour
      </button>
      <button
        onClick={onNext}
        className="bg-yellow-400 px-6 py-2 rounded-full mb-4"
      >
        2 Hours
      </button>
      <button
        onClick={onNext}
        className="bg-yellow-400 px-6 py-2 rounded-full"
      >
        3 Hours
      </button>
    </div>
  );
}
