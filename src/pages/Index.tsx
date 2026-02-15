import Navbar from "@/components/Navbar";
import CountdownTimer from "@/components/CountdownTimer";
import SectionLabel from "@/components/SectionLabel";
import Flowchart from "@/components/Flowchart";
import LiveDemo from "@/components/LiveDemo";
import BarChart from "@/components/BarChart";

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <CountdownTimer />

      {/* HERO */}
      <section id="hero" className="section-slide items-center text-center" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-4xl mx-auto animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-xs font-semibold tracking-wider uppercase mb-6 glow-border">
            Academic Prototype
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-foreground">
            Hybrid Network Intrusion Detection System using{" "}
            <span className="text-gradient">Cryptography</span> &{" "}
            <span className="text-gradient">Machine Learning</span>
          </h1>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            PBL 2026 — Department of Computer Science & Engineering
          </p>
          <div className="mt-8 space-y-1 text-sm text-muted-foreground">
            <p>Registration No: <span className="text-foreground font-mono">[ Student ID ]</span></p>
            <p className="font-medium text-foreground/80">Manipal University Jaipur</p>
          </div>
        </div>
      </section>

      {/* PROBLEM STATEMENT */}
      <section id="problem" className="section-slide">
        <div className="max-w-4xl mx-auto">
          <SectionLabel number="01" title="Problem Statement" />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "What is Network Intrusion Detection?",
                text: "A Network Intrusion Detection System (NIDS) monitors network traffic to identify suspicious patterns that may indicate unauthorized access or malicious activity.",
              },
              {
                title: "Limitations of Traditional IDS",
                text: "Traditional IDS rely on signature-based detection or deep packet inspection — both of which fail when traffic is encrypted, as modern protocols increasingly mandate.",
              },
              {
                title: "Why Behavioral Detection Matters",
                text: "Detecting abnormal behavior through metadata analysis (connection counts, timing, flow patterns) circumvents the need for payload inspection while maintaining detection efficacy.",
              },
              {
                title: "Our Focus",
                text: "We focus on detecting suspicious network activity through metadata-based behavioral analysis rather than payload inspection, ensuring both privacy compliance and detection accuracy.",
              },
            ].map((card, i) => (
              <div key={i} className="bg-card-gradient glow-border rounded-xl p-6 hover:glow-cyan transition-shadow duration-300">
                <h3 className="text-sm font-semibold text-primary mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section id="methodology" className="section-slide">
        <div className="max-w-5xl mx-auto">
          <SectionLabel number="02" title="System Methodology" />
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                step: "01",
                title: "Dataset / Input",
                items: [
                  "Offline Dataset: NSL-KDD",
                  "Live Dataset: Browser network activity (Firefox simulation)",
                  "Metadata-based analysis only",
                ],
              },
              {
                step: "02",
                title: "Model / Architecture",
                items: [
                  "ML: Random Forest Classifier",
                  "Crypto: SHA-256 hashing for data integrity",
                  "Behavioral analysis approach",
                ],
              },
              {
                step: "03",
                title: "Live Execution",
                items: [
                  "Simulated live browser activity analysis",
                  "No packet payload inspection",
                  "Ethical and secure approach",
                ],
              },
            ].map((card) => (
              <div key={card.step} className="bg-card-gradient glow-border rounded-xl p-6 relative overflow-hidden">
                <span className="absolute top-4 right-4 text-4xl font-bold text-primary/10 font-mono">{card.step}</span>
                <h3 className="text-base font-semibold text-foreground mb-4">{card.title}</h3>
                <ul className="space-y-2">
                  {card.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-display font-semibold text-foreground text-center mb-2">System Flowchart</h3>
          <Flowchart />
        </div>
      </section>

      {/* DATASET */}
      <section id="dataset" className="section-slide">
        <div className="max-w-4xl mx-auto">
          <SectionLabel number="03" title="Dataset Details" />
          <div className="bg-card-gradient glow-border rounded-xl p-6 mb-8">
            <h3 className="text-base font-semibold text-foreground mb-3">NSL-KDD Dataset</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              NSL-KDD is an improved version of the KDD Cup'99 dataset, widely used for benchmarking intrusion detection systems. It eliminates redundant records and provides a balanced distribution of attack categories for more reliable evaluation.
            </p>
            <h4 className="text-sm font-semibold text-primary mb-3">Attack Categories</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {[
                { name: "DoS", desc: "Denial of Service" },
                { name: "Probe", desc: "Surveillance/Scanning" },
                { name: "R2L", desc: "Remote to Local" },
                { name: "U2R", desc: "User to Root" },
              ].map((cat) => (
                <div key={cat.name} className="bg-secondary rounded-lg p-3 text-center">
                  <div className="text-sm font-bold text-primary">{cat.name}</div>
                  <div className="text-xs text-muted-foreground">{cat.desc}</div>
                </div>
              ))}
            </div>

            <h4 className="text-sm font-semibold text-primary mb-3">Dataset Feature Summary</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 text-muted-foreground font-medium">Feature</th>
                    <th className="text-left py-2 text-muted-foreground font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="text-foreground/80">
                  <tr className="border-b border-border/50"><td className="py-2 font-mono text-xs">duration</td><td className="py-2">Length of connection (seconds)</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 font-mono text-xs">protocol_type</td><td className="py-2">TCP, UDP, ICMP</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 font-mono text-xs">src_bytes</td><td className="py-2">Bytes sent from source</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2 font-mono text-xs">dst_bytes</td><td className="py-2">Bytes sent to destination</td></tr>
                  <tr><td className="py-2 font-mono text-xs">flag</td><td className="py-2">Connection status flag (SF, REJ, etc.)</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">Classification: <span className="text-foreground font-medium">Binary (Normal vs Attack)</span></p>
        </div>
      </section>

      {/* LIVE DEMO */}
      <section id="demo" className="section-slide">
        <div className="max-w-4xl mx-auto">
          <SectionLabel number="04" title="Live Demonstration" />
          <div className="bg-card-gradient glow-border rounded-xl p-6 mb-6">
            <h3 className="text-base font-semibold text-foreground mb-3">Browser Activity Simulation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
              <li className="flex items-start gap-2"><span className="text-primary">›</span> Live browser activity captured through system network metadata</li>
              <li className="flex items-start gap-2"><span className="text-primary">›</span> Firefox browsing simulation for demonstration</li>
              <li className="flex items-start gap-2"><span className="text-primary">›</span> No encrypted payload access — metadata only</li>
              <li className="flex items-start gap-2"><span className="text-primary">›</span> Full ethical compliance maintained</li>
            </ul>
          </div>
          <LiveDemo />
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="section-slide">
        <div className="max-w-4xl mx-auto">
          <SectionLabel number="05" title="Results & Analysis" />
          <p className="text-sm text-muted-foreground mb-2">
            Comparison of our hybrid cryptography + ML approach against existing traditional IDS solutions.
          </p>
          <BarChart />
          <div className="mt-8 bg-card-gradient glow-border rounded-xl p-6 max-w-md mx-auto text-center">
            <div className="text-3xl font-bold text-gradient font-mono">~77%</div>
            <div className="text-sm text-muted-foreground mt-1">Overall Accuracy (Random Forest on NSL-KDD)</div>
            <p className="text-xs text-muted-foreground mt-3">
              Precision and recall are prioritized alongside accuracy to minimize false positives in real-world deployment scenarios.
            </p>
          </div>
        </div>
      </section>

      {/* LITERATURE REVIEW */}
      <section id="literature" className="section-slide">
        <div className="max-w-4xl mx-auto">
          <SectionLabel number="06" title="Literature Review" />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Traditional IDS Approaches",
                authors: "Kumar & Clark, 2019",
                summary: "Survey of signature-based and anomaly-based IDS architectures, highlighting detection limitations with encrypted network traffic.",
              },
              {
                title: "ML-Based Intrusion Detection",
                authors: "Zhang et al., 2021",
                summary: "Evaluated Random Forest, SVM, and deep learning classifiers on NSL-KDD, showing ensemble methods achieve superior accuracy on multi-class detection.",
              },
              {
                title: "Cryptographic Security Models",
                authors: "Patel & Singh, 2020",
                summary: "Proposed SHA-256 based data integrity verification in network monitoring systems to ensure tamper-proof logging of traffic metadata.",
              },
              {
                title: "Hybrid Detection Frameworks",
                authors: "Li & Wang, 2022",
                summary: "Identified gaps in combining cryptographic integrity with ML classification, proposing metadata-driven approaches for privacy-preserving IDS.",
              },
            ].map((paper, i) => (
              <div key={i} className="bg-card-gradient glow-border rounded-xl p-6">
                <h3 className="text-sm font-semibold text-foreground mb-1">{paper.title}</h3>
                <p className="text-xs text-primary mb-2 font-mono">{paper.authors}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{paper.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIMITATIONS & FUTURE SCOPE */}
      <section className="section-slide">
        <div className="max-w-4xl mx-auto">
          <SectionLabel number="07" title="Limitations & Future Scope" />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-slide-red mb-4 uppercase tracking-wider">Limitations</h3>
              <ul className="space-y-3">
                {[
                  "Prototype-level system — not production-ready",
                  "Threshold-based live detection may yield false positives",
                  "No real-time packet inspection capability",
                  "Limited to NSL-KDD for offline evaluation",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-slide-red mt-0.5">✗</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slide-green mb-4 uppercase tracking-wider">Future Scope</h3>
              <ul className="space-y-3">
                {[
                  "ML-based anomaly detection with deep learning",
                  "Real-time deployment on enterprise networks",
                  "Enterprise IDS integration with SIEM tools",
                  "Advanced monitoring dashboards and alerting",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-slide-green mt-0.5">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="section-slide items-center text-center">
        <div className="max-w-2xl mx-auto">
          <SectionLabel number="08" title="Team & Credits" />
          <div className="bg-card-gradient glow-border rounded-xl p-8 mx-auto">
            <div className="space-y-6">
              <div>
                <p className="text-xs text-primary uppercase tracking-widest mb-1">Project Guide</p>
                <p className="text-lg font-semibold text-foreground">[ Guide Name ]</p>
              </div>
              <div className="w-16 h-px bg-border mx-auto" />
              <div>
                <p className="text-xs text-primary uppercase tracking-widest mb-1">Student</p>
                <p className="text-lg font-semibold text-foreground">[ Student Name ]</p>
                <p className="text-sm font-mono text-muted-foreground mt-1">Reg. No: [ Registration Number ]</p>
              </div>
              <div className="w-16 h-px bg-border mx-auto" />
              <div>
                <p className="text-sm text-muted-foreground">Department of Computer Science & Engineering</p>
                <p className="text-sm font-medium text-foreground">Manipal University Jaipur</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-8 italic">PBL 2026 — Academic Prototype</p>
        </div>
      </section>

      {/* Footer spacer for timer */}
      <div className="h-20" />
    </div>
  );
};

export default Index;
