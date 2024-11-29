type CopyType = {
    welcome: string;
    chooseLanguage: string;
    language: {
      danish: string;
      english: string;
    };
    timer: {
      title: string;
      oneHour: string;
      twoHours: string;
      threeHours: string;
    };
    reminders: {
      title: string;
      point1: string;
      point2: string;
      point3: string;
      finalMessage: string;
    };
    cards: {
      title: string;
    }

  };
  
  export const copy: Record<string, CopyType> = {
    en: {
      welcome: "Welcome!",
      chooseLanguage: "Choose Your Language",
      language: {
        danish: "Danish",
        english: "English",
      },
      timer: {
        title: "How long will you be sailing?",
        oneHour: "1 Hour",
        twoHours: "2 Hours",
        threeHours: "3 Hours",
      },
      reminders: {
        title: "3 Quick reminders:",
        point1: "Keep to the right in the main harbor",
        point2: "Sail in the middle of the canals",
        point3: "Stay aware and watch out for the harbor bus",
        finalMessage: "GoBoat wishes you a great trip on the water!",
      },
      cards: {
        title: "5 Quick Tips with GoBoat",
      }
    },
    da: {
      welcome: "Velkommen!",
      chooseLanguage: "Vælg dit sprog",
      language: {
        danish: "Dansk",
        english: "Engelsk",
      },
      timer: {
        title: "Hvor længe skal du sejle?",
        oneHour: "1 Time",
        twoHours: "2 Timer",
        threeHours: "3 Timer",
      },
      reminders: {
        title: "3 Hurtige påmindelser:",
        point1: "Hold til højre i det store havneløb",
        point2: "Sejl i midten af kanalerne",
        point3: "Vær opmærksom og se efter havnebussen",
        finalMessage: "GoBoat ønsker dig en fantastisk tur på vandet!",
      },
      cards: {
        title: "5 hurtige med GoBoat",
      }
    },
  };
  