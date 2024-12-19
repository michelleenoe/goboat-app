import { createContext, useContext, useState, useEffect } from "react";

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [duration, setDuration] = useState("1"); // Default 1 hour
  const [remainingTime, setRemainingTime] = useState(3600); // Default 1 hour in seconds

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Load initial values from localStorage
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
