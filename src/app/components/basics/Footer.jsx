export default function Footer() {
  return (
    <footer className="w-full bg-[var(--mediumBlue)] py-4 fixed bottom-0 left-0">
      <div className="flex justify-around items-center">
        <button className="flex items-center justify-center w-12 h-12 bg-white rounded-full hover:bg-blue-300">
          <img src="/icons/home.svg" alt="Home" className="w-6 h-6" />
        </button>
        <button className="flex items-center justify-center w-12 h-12 bg-white rounded-full hover:bg-blue-300">
          <img src="/icons/tool.svg" alt="Tools" className="w-6 h-6" />
        </button>
        <button className="flex items-center justify-center w-12 h-12 bg-white rounded-full hover:bg-blue-300">
          <img src="/icons/map.svg" alt="Map" className="w-6 h-6" />
        </button>
        <button className="flex items-center justify-center w-12 h-12 bg-white rounded-full hover:bg-blue-300">
          <img src="/icons/settings.svg" alt="Settings" className="w-6 h-6" />
        </button>
      </div>
    </footer>
  );
}
