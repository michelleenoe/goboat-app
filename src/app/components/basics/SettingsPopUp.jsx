"use client";
import { useLocation } from "@/app/lib/context/LocationContext";
import { Switch } from "@headlessui/react";
import Image from "next/image";
import { LanguageOptions } from "./LanguageOptions";
import { ThemeOptions } from "./ThemeOptions";
import { useEffect, useState } from "react";

export default function SettingsPopup({ isOpen, onClose }) {
  const { locationEnabled, setLocationEnabled } = useLocation();
  const [isFetchingLocation, setIsFetchingLocation] = useState(false);
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    let locationWatchId = null;

    if (locationEnabled) {
      setIsFetchingLocation(true);

      if (navigator.geolocation) {
        locationWatchId = navigator.geolocation.watchPosition(
          (position) => {
            console.log("User's location:", position.coords.latitude, position.coords.longitude);
            setLocationData({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
            setIsFetchingLocation(false);
          },
          (error) => {
            console.error("Error getting location:", error);
            setIsFetchingLocation(false);
          }
        );
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
        <h2 className="text-xl font-semibold text-center mb-6">Settings</h2>

        <div className="flex justify-between items-center mb-6">
          <span className="text-typoPrimary">Location</span>
          <Switch
            checked={locationEnabled}
            onChange={setLocationEnabled}
            className={`${
              locationEnabled ? "bg-goboatYellow" : "bg-settingsBg"
            } relative inline-flex h-11 w-20 items-center rounded-full transition border-2 solid border-typoSecondary`}
          >
            <span className="sr-only">{locationEnabled ? "Location Enabled" : "Location Disabled"}</span>
            <span
              className={`${
                locationEnabled ? "translate-x-9" : "translate-x-1"
              } inline-block h-9 w-9 transform rounded-full bg-typoSecondary transition`}
            />
          </Switch>
        </div>

        <LanguageOptions />
        <ThemeOptions />

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400 transition"
          >
            <span className="sr-only">Close</span>
            <Image src="/Icons/x.svg" alt="Previous" width={30} height={30} />
          </button>
        </div>
      </div>
    </div>
  );
}
