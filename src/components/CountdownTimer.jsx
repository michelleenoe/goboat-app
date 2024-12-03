import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(0); // Tid i sekunder
  const [isRunning, setIsRunning] = useState(false);

  // Konverter sekunder til timer, minutter og sekunder
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  // Start nedtællingen
  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(timer); // Ryd op efter intervallet
  }, [isRunning, timeLeft]);

  // Håndter valg af timer
  const handleStart = (hours) => {
    setTimeLeft(hours * 3600); // Konverter timer til sekunder
    setIsRunning(true);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Nedtællingstimer</h1>
      <div>
        <button onClick={() => handleStart(1)}>1 time</button>
        <button onClick={() => handleStart(2)}>2 timer</button>
        <button onClick={() => handleStart(3)}>3 timer</button>
      </div>
      <h2 style={{ marginTop: "20px" }}>Tid tilbage: {formatTime(timeLeft)}</h2>
      {timeLeft === 0 && isRunning === false && <p>Tiden er udløbet!</p>}
    </div>
  );
}
