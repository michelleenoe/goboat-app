//CHAT GPT PROMPT:  "Jeg arbejder i React og ønsker at implementere en timer-funktion, hvor brugeren kan vælge en varighed (i timer), og timeren skal kunne huske både den valgte varighed og den resterende tid, selv efter en opdatering af siden.""

// CHAT GPT LØSNING
import { createContext, useContext, useState, useEffect } from "react";

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [duration, setDuration] = useState("1");
  const [remainingTime, setRemainingTime] = useState(3600);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedDuration = localStorage.getItem("selectedDuration");
      const savedRemainingTime = localStorage.getItem("remainingTime");

      if (savedDuration) {
        setDuration(savedDuration);
      }

      if (savedRemainingTime) {
        setRemainingTime(parseInt(savedRemainingTime, 10));
      }
    }
  }, []);

  const resetTimer = (newDuration) => {
    const totalTime = newDuration * 60 * 60;
    setDuration(newDuration);
    setRemainingTime(totalTime);

    if (typeof window !== "undefined") {
      localStorage.setItem("selectedDuration", newDuration);
      localStorage.setItem("remainingTime", totalTime);
    }
  };

  return (
    <TimerContext.Provider
      value={{ duration, remainingTime, setRemainingTime, resetTimer }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => useContext(TimerContext);
