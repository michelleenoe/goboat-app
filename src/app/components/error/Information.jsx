"use client";

import { useLanguage } from "@/app/lib/context/LanguageContext";
import informationData from "@/app/lib/content/information";
import InfoItem from "./InfoItem";

const Information = () => {
  const { language } = useLanguage();
  const data = informationData[language] || informationData.en;

  return (
    <div className="px-4 py-6">
      <h3 className="text-xl font-bold">Information</h3>
      <div className="space-y-4 p-3">
        <InfoItem
          iconLight="/Icons/map-pin.svg"
          iconDark="/Icons/dark-map-pin.svg"
          title={data.adress}
          description="Islands Brygge 10, 2300 København S"
        />
        <InfoItem
          iconLight="/Icons/phone.svg"
          iconDark="/Icons/dark-phone.svg"
          title={data.phone}
          description="+45 40 26 10 25"
        />
        <InfoItem
          iconLight="/Icons/mail.svg"
          iconDark="/Icons/dark-mail.svg"
          title={data.email}
          description="Info@goboat.dk"
        />
      </div>
    </div>
  );
};

export default Information;
