export const resetTimer = (newDuration) => {
    if (typeof window !== "undefined") {
      const totalTime = parseInt(newDuration, 10) * 60 * 60; 
      localStorage.setItem("selectedDuration", newDuration);
      localStorage.setItem("remainingTime", totalTime);
    }
  };
  