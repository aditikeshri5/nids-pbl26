import { useState } from "react";

const LiveDemo = () => {
  const [result, setResult] = useState<null | {
    connections: number;
    hash: string;
    status: string;
  }>(null);
  const [loading, setLoading] = useState(false);

  const runDemo = () => {
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      const connections = Math.floor(Math.random() * 150) + 20;
      const chars = "abcdef0123456789";
      let hash = "";
      for (let i = 0; i < 64; i++) hash += chars[Math.floor(Math.random() * chars.length)];
      const status = connections > 100 ? "⚠️ Suspicious Activity Detected" : "✅ Normal Activity";
      setResult({ connections, hash, status });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="mt-8">
      <button
        onClick={runDemo}
        disabled={loading}
        className="px-8 py-3 rounded-xl font-semibold text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50 glow-cyan"
      >
        {loading ? "Analyzing..." : "▶ Run Live Demo (Simulated)"}
      </button>

      {result && (
        <div className="mt-6 bg-card-gradient glow-border rounded-xl p-6 max-w-lg animate-fade-up">
          <div className="grid gap-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Connection Count</span>
              <span className="font-mono font-semibold text-foreground">{result.connections}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground">SHA-256 Session Hash</span>
              <span className="font-mono text-xs text-primary break-all">{result.hash}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-border">
              <span className="text-muted-foreground">Detection Result</span>
              <span className="font-semibold">{result.status}</span>
            </div>
          </div>
        </div>
      )}

      <p className="text-xs text-muted-foreground mt-4 italic">
        ⓘ This is a demonstration prototype, not a production IDS.
      </p>
    </div>
  );
};

export default LiveDemo;
