"use client";
import React, { useState, useEffect } from "react";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const savedTime = localStorage.getItem("remainingTime");
    if (savedTime) {
      setTimeLeft(parseInt(savedTime, 10));
    } else {
      const duration = localStorage.getItem("selectedDuration");
      if (duration) {
        const totalTime = parseInt(duration, 10) * 60 * 60;
        setTimeLeft(totalTime);
      }
    }
  }, []);

  useEffect(() => {
    if (!timeLeft) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          localStorage.removeItem("remainingTime");
          return 0;
        }
        const newTime = prev - 1;
        localStorage.setItem("remainingTime", newTime);
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  if (!timeLeft) return null;

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return <div className="text-lg font-medium">{formatTime(timeLeft)}</div>;
}
