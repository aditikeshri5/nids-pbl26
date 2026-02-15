const Flowchart = () => {
  const steps = [
    { label: "Offline Dataset / Live Browser Activity", icon: "🌐", desc: "NSL-KDD or Firefox simulation" },
    { label: "Feature Extraction", icon: "⚙️", desc: "Metadata & connection attributes" },
    { label: "SHA-256 Hash Generation", icon: "🔐", desc: "Data integrity verification" },
    { label: "ML / Behavioral Analysis", icon: "🤖", desc: "Random Forest classification" },
    { label: "Normal / Suspicious Activity", icon: "✅", desc: "Final detection output" },
  ];

  return (
    <div className="flex flex-col items-center gap-0 my-12">
      {steps.map((step, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="bg-card-gradient glow-border rounded-xl px-6 py-4 text-center max-w-xs w-full">
            <div className="text-2xl mb-1">{step.icon}</div>
            <div className="text-sm font-semibold text-foreground">{step.label}</div>
            <div className="text-xs text-muted-foreground mt-1">{step.desc}</div>
          </div>
          {i < steps.length - 1 && (
            <div className="flex flex-col items-center py-1">
              <div className="w-px h-6 bg-primary/40" />
              <svg width="12" height="8" viewBox="0 0 12 8" className="text-primary">
                <path d="M6 8L0 0h12z" fill="currentColor" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Flowchart;
