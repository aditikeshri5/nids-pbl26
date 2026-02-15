const SectionLabel = ({ number, title }: { number: string; title: string }) => (
  <div className="mb-10">
    <span className="text-xs font-mono text-primary tracking-widest uppercase">
      {number}
    </span>
    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
      {title}
    </h2>
    <div className="w-16 h-1 bg-primary rounded-full mt-4" />
  </div>
);

export default SectionLabel;
