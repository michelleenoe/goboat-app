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
        <div className="w-full bg-mediumBlue py-4 fixed bottom-0 left-0">
          <div className="flex justify-around items-center ">
            <NavButton href="/" icon="/icons/home.svg" altText="Home" />
            <NavButton href="/tools" icon="/icons/tool.svg" altText="Tools" />
            <NavButton href="/map" icon="/icons/map.svg" altText="Map" />
            <SettingsButton
              onClick={openSettings}
              icon="/icons/settings.svg"
              altText="Settings"
            />
          </div>
        </div>
      </footer>

      <SettingsPopup isOpen={isSettingsOpen} onClose={closeSettings} />
    </>
  );
}
