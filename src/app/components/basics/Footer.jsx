"use client";
import { useState } from "react";
import NavButton from "../basics/NavButton";
import SettingsPopup from "../basics/SettingsPopUp";
import SettingsButton from "../basics/SettingsButton";

export default function Footer() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const openSettings = () => setIsSettingsOpen(true);
  const closeSettings = () => setIsSettingsOpen(false);

  return (
    <>
      <footer className="mt-10">
        <div className="w-full bg-mediumBlue dark:bg-darkBlue py-4 fixed bottom-0 left-0">
          <div className="flex justify-around items-center ">
            <NavButton href="/" icon="/Icons/home.svg" altText="Home" />
            <NavButton href="/error" icon="/Icons/tool.svg" altText="Tools" />
            <NavButton href="/map" icon="/Icons/map.svg" altText="Map" />
            <SettingsButton
              onClick={openSettings}
              icon="/Icons/settings.svg"
              altText="Settings"
              isActive={isSettingsOpen}
            />
          </div>
        </div>
      </footer>

      <SettingsPopup isOpen={isSettingsOpen} onClose={closeSettings} />
    </>
  );
}
