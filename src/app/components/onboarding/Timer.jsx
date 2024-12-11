"use client";
import React, { useState, useEffect } from "react";

export default function Timer({ onTimeUpdate, onTimeUp }) {
  const [timeLeft, setTimeLeft] = useState(null);
  const [hasCalledTimeUp, setHasCalledTimeUp] = useState(false);

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
    if (timeLeft === 0 && !hasCalledTimeUp) {
      setHasCalledTimeUp(true); // Forhinder gentagne kald
      if (onTimeUp) {
        onTimeUp(); // Udløs pop-up
      }
    }

    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => Math.max(prev - 1, 0));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft, hasCalledTimeUp, onTimeUp]);

  useEffect(() => {
    if (onTimeUpdate) {
      onTimeUpdate(timeLeft); // Opdater parent-komponenten
    }
  }, [timeLeft, onTimeUpdate]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="text-lg font-mono font-medium text-center min-w-[100px]">
      {formatTime(timeLeft)}
    </div>
  );
}
