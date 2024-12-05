export default function Screen2({ onBack, onNext }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-white p-4">
      <main className="flex-grow flex flex-col items-center justify-center bg-white text-black rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">How long will you be sailing?</h2>
        <button className="bg-yellow-400 px-6 py-2 rounded-full mb-4">1 Hour</button>
        <button className="bg-yellow-400 px-6 py-2 rounded-full mb-4">2 Hours</button>
        <button className="bg-yellow-400 px-6 py-2 rounded-full">3 Hours</button>
      <div className="flex justify-between mt-8">
        <button onClick={onBack} className="w-10 h-10 bg-yellow-400 rounded-full"></button>
        <button onClick={onNext} className="w-10 h-10 bg-yellow-400 rounded-full"></button>
      </div>
      </main>
    </div>
  );
}
