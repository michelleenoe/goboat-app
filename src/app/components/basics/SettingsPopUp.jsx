"use client";
import { useLocation } from "@/app/lib/context/LocationContext";
import { Switch } from "@headlessui/react";
import { LanguageOptions } from "./LanguageOptions";
import { ThemeOptions } from "./ThemeOptions";
import { useEffect, useState } from "react";
import { useLanguage } from "@/app/lib/context/LanguageContext";
import { settingsData } from "../../lib/content/settingsData";
import { CloseButton } from "./CloseButton";

export default function SettingsPopup({ isOpen, onClose }) {
  const { locationEnabled, setLocationEnabled } = useLocation();
  const [isFetchingLocation, setIsFetchingLocation] = useState(false);
  const [locationData, setLocationData] = useState(null);
  const { language } = useLanguage();
  const t = settingsData[language];

  useEffect(() => {
    let locationWatchId = null;

    if (locationEnabled) {
      setIsFetchingLocation(true);

      if (navigator.geolocation) {
        locationWatchId = navigator.geolocation.watchPosition((position) => {
          console.log(
            "User's location:",
            position.coords.latitude,
            position.coords.longitude
          );
          setLocationData({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setIsFetchingLocation(false);
        });
      } else {
        console.error("Geolocation is not supported by this browser.");
        setIsFetchingLocation(false);
      }
    } else {
      if (locationWatchId !== null) {
        navigator.geolocation.clearWatch(locationWatchId);
      }
      setLocationData(null);
      setIsFetchingLocation(false);
    }

    return () => {
      if (locationWatchId !== null) {
        navigator.geolocation.clearWatch(locationWatchId);
      }
    };
  }, [locationEnabled]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-typoPrimary bg-opacity-50 z-50">
      <div className="bg-grey1 rounded-3xl shadow-lg w-80 p-6 relative">
        <p className=" text-typoPrimary text-xl font-semibold text-center mb-6">
          {t.title}
        </p>
        <div className="flex justify-between items-center mb-6">
          <span className="text-typoPrimary">{t.location}</span>
          <Switch
            checked={locationEnabled}
            onChange={setLocationEnabled}
            className={`${
              locationEnabled ? "bg-goboatYellow" : "bg-settingsBg"
            } relative inline-flex h-11 w-20 items-center rounded-full transition border solid border-typoSecondary`}
          >
            <span className="sr-only">
              {locationEnabled ? "Location Enabled" : "Location Disabled"}
            </span>
            <span
              className={`${
                locationEnabled ? "translate-x-9" : "translate-x-1"
              } inline-block h-9 w-9 transform rounded-full bg-typoSecondary transition`}
            />
          </Switch>
        </div>
        <LanguageOptions />
        <ThemeOptions />

        <CloseButton onClose={onClose} />
      </div>
    </div>
  );
}
