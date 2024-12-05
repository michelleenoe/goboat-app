"use client"
export default function ScreenOne({ onNext }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-white p-4">
      <main className="flex-grow flex flex-col items-center justify-center bg-white text-black rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Welcome to GoBoat!</h2>
        <p className="text-center mb-8">
          Select your language to get ready for your trip on the water.
        </p>
        <button className="bg-yellow-400 px-6 py-2 rounded-full mb-4">Dansk</button>
        <button className="bg-yellow-400 px-6 py-2 rounded-full">English</button>

      <div className="flex justify-between mt-8">
        <button disabled className="w-10 h-10 bg-gray-500 rounded-full"></button>
        <button onClick={onNext} className="w-10 h-10 bg-yellow-400 rounded-full"></button>
   </div>
   </main>
    </div>
  );
}
