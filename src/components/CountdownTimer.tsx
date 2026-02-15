import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(6 * 60 + 30); // 06:30

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-glass rounded-xl px-5 py-3 glow-border animate-pulse-glow">
      <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
        Time Remaining
      </div>
      <div className="text-2xl font-bold font-mono text-gradient tabular-nums">
        {mins}:{secs}
      </div>
    </div>
  );
};

export default CountdownTimer;
