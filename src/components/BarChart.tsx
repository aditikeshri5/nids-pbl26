const BarChart = () => {
  const data = [
    { label: "Accuracy", existing: 65, ours: 77, color: "bg-primary" },
    { label: "Precision", existing: 60, ours: 74, color: "bg-slide-green" },
    { label: "Recall", existing: 58, ours: 72, color: "bg-slide-gold" },
  ];

  return (
    <div className="max-w-xl mx-auto mt-8">
      <div className="flex items-center gap-6 mb-6 text-xs">
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 rounded bg-muted-foreground/40 inline-block" /> Existing System
        </span>
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 rounded bg-primary inline-block" /> Our Solution
        </span>
      </div>

      <div className="space-y-6">
        {data.map((item) => (
          <div key={item.label}>
            <div className="text-xs text-muted-foreground mb-2 font-medium">{item.label}</div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <div className="h-6 rounded bg-muted-foreground/20 transition-all duration-1000" style={{ width: `${item.existing}%` }}>
                  <div className="h-full rounded bg-muted-foreground/40 flex items-center justify-end pr-2 text-xs font-mono text-foreground/60">
                    {item.existing}%
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className={`h-6 rounded transition-all duration-1000 ${item.color}`} style={{ width: `${item.ours}%` }}>
                  <div className="h-full rounded flex items-center justify-end pr-2 text-xs font-mono text-primary-foreground font-semibold">
                    {item.ours}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
