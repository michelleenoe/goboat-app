import NavButton from "./NavButton";

export default function Footer() {
  return (
    <footer className="w-full bg-mediumBlue py-4 fixed bottom-0 left-0">
      <div className="flex justify-around items-center">
        <NavButton href="/" icon="/icons/home.svg" altText="Home" />
        <NavButton href="/tools" icon="/icons/tool.svg" altText="Tools" />
        <NavButton href="/map" icon="/icons/map.svg" altText="Map" />
        <NavButton
          href="/settings"
          icon="/icons/settings.svg"
          altText="Settings"
        />
      </div>
    </footer>
  );
}
