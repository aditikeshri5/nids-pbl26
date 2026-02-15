import Navbar from "@/components/Navbar";
import CountUpTimer from "@/components/CountdownTimer";
import SectionLabel from "@/components/SectionLabel";
import Flowchart from "@/components/Flowchart";
import LiveDemo from "@/components/LiveDemo";
import BarChart from "@/components/BarChart";

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <CountUpTimer />

      {/* HERO */}
      <section id="hero" className="section-slide items-center text-center" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-4xl mx-auto animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-xs font-semibold tracking-wider uppercase mb-6 glow-border">
            Academic Demonstration Prototype
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
            <p>Registration No: <span className="text-foreground font-mono">2427030217</span></p>
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
                title: "Growth of Cyber Threats",
                text: "Network-based cyber threats are increasing exponentially, targeting both enterprise and personal systems through sophisticated attack vectors that traditional security measures struggle to address.",
              },
              {
                title: "Encrypted Traffic Challenge",
                text: "Modern network protocols increasingly mandate encryption, making traditional deep packet inspection and signature-based intrusion detection systems ineffective at identifying malicious activity.",
              },
              {
                title: "Need for Behavioral Detection",
                text: "Behavior-based intrusion detection analyzes metadata patterns — connection counts, timing, flow characteristics — to identify suspicious activity without inspecting encrypted payloads.",
              },
              {
                title: "Data Integrity & Authentication",
                text: "Ensuring the integrity and authenticity of network traffic metadata is critical. Cryptographic hashing provides tamper-proof verification of collected data before ML-based analysis.",
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

      {/* LITERATURE REVIEW */}
      <section id="literature" className="section-slide">
        <div className="max-w-4xl mx-auto">
          <SectionLabel number="02" title="Literature Review" />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Traditional IDS Approaches",
                summary: "Signature-based and rule-based intrusion detection systems match known attack patterns but fail against zero-day attacks and cannot inspect encrypted payloads.",
              },
              {
                title: "ML-Based Intrusion Detection",
                summary: "Machine learning classifiers (Random Forest, SVM, deep learning) trained on datasets like NSL-KDD show improved detection accuracy, especially for anomaly-based classification.",
              },
              {
                title: "Cryptography-Assisted Security",
                summary: "SHA-256 and other cryptographic techniques ensure data integrity in monitoring pipelines, providing tamper-proof logging and authentication of traffic metadata.",
              },
              {
                title: "Limitations of Existing Systems",
                summary: "Current IDS solutions lack integration between cryptographic verification and ML-based behavioral analysis, and most fail when traffic is encrypted end-to-end.",
              },
            ].map((paper, i) => (
              <div key={i} className="bg-card-gradient glow-border rounded-xl p-6">
                <h3 className="text-sm font-semibold text-foreground mb-2">{paper.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{paper.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH GAP / INNOVATION */}
      <section id="research-gap" className="section-slide">
        <div className="max-w-4xl mx-auto">
          <SectionLabel number="03" title="Research Gap & Innovation" />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-slide-red mb-4 uppercase tracking-wider">Research Gap</h3>
              <ul className="space-y-3">
                {[
                  "Existing systems rely heavily on payload inspection, which fails with encrypted traffic",
                  "Encrypted protocols (TLS/SSL) reduce effectiveness of traditional signature-based IDS",
                  "Lack of integration between cryptographic authentication and ML-based behavioral detection",
                  "Limited research on combining data integrity verification with real-time classification",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-slide-red mt-0.5">✗</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slide-green mb-4 uppercase tracking-wider">Our Innovation</h3>
              <ul className="space-y-3">
                {[
                  "Cryptographic hashing (SHA-256) ensures data integrity of collected metadata",
                  "ML-based behavioral analysis instead of payload inspection",
                  "Both offline dataset-based and live browser activity detection demonstrated",
                  "Privacy-preserving approach with full ethical compliance",
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

      {/* METHODOLOGY */}
      <section id="methodology" className="section-slide">
        <div className="max-w-5xl mx-auto">
          <SectionLabel number="04" title="System Methodology" />
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                step: "01",
                title: "Dataset / Input",
                items: [
                  "Offline Dataset: NSL-KDD",
                  "Live Dataset: Browser network activity (Firefox simulation)",
                  "Metadata-based feature extraction",
                  "No packet payload inspection",
                ],
              },
              {
                step: "02",
                title: "Model / Architecture",
                items: [
                  "ML: Random Forest Classifier",
                  "Crypto: SHA-256 hashing",
                  "Binary classification (Normal vs Attack)",
                  "Behavioral analysis approach",
                ],
              },
              {
                step: "03",
                title: "Live Execution",
                items: [
                  "Firefox-based live browsing simulation",
                  "Secure and ethical monitoring",
                  "No encrypted payload access",
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
          <SectionLabel number="05" title="Dataset Details" />
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

            <h4 className="text-sm font-semibold text-primary mb-3">Preprocessing & Feature Summary</h4>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Features are extracted from connection-level metadata. Categorical attributes are label-encoded, and numerical features are normalized before being passed to the classifier.
            </p>
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

      {/* LIVE EXECUTION */}
      <section id="demo" className="section-slide">
        <div className="max-w-4xl mx-auto">
          <SectionLabel number="06" title="Live Execution" />
          <div className="bg-card-gradient glow-border rounded-xl p-6 mb-6">
            <h3 className="text-base font-semibold text-foreground mb-3">Browser Activity Simulation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground mb-4">
              <li className="flex items-start gap-2"><span className="text-primary">›</span> Firefox browsing used to generate live network activity</li>
              <li className="flex items-start gap-2"><span className="text-primary">›</span> Network metadata collection only — no payload access</li>
              <li className="flex items-start gap-2"><span className="text-primary">›</span> Session-level behavior analysis with SHA-256 hash generation</li>
              <li className="flex items-start gap-2"><span className="text-primary">›</span> Detection output: Normal Activity or Suspicious Activity Detected</li>
            </ul>
          </div>
          <LiveDemo />
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="section-slide">
        <div className="max-w-4xl mx-auto">
          <SectionLabel number="07" title="Results & Analysis" />
          <p className="text-sm text-muted-foreground mb-2">
            Quantifiable outcomes and evaluation metrics compared to baselines.
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

      {/* TEAM */}
      <section id="team" className="section-slide items-center text-center">
        <div className="max-w-2xl mx-auto">
          <SectionLabel number="08" title="Team & Academic Credits" />
          <div className="bg-card-gradient glow-border rounded-xl p-8 mx-auto">
            <div className="space-y-6">
              <div>
                <p className="text-xs text-primary uppercase tracking-widest mb-1">Project Guide</p>
                <p className="text-lg font-semibold text-foreground">Dr. Surbhi Sharma</p>
              </div>
              <div className="w-16 h-px bg-border mx-auto" />
              <div>
                <p className="text-xs text-primary uppercase tracking-widest mb-1">Team Member</p>
                <p className="text-lg font-semibold text-foreground">Aditi Keshri</p>
                <p className="text-sm font-mono text-muted-foreground mt-1">Reg. No: 2427030217</p>
              </div>
              <div className="w-16 h-px bg-border mx-auto" />
              <div>
                <p className="text-sm text-muted-foreground">Department of Computer Science & Engineering</p>
                <p className="text-sm font-medium text-foreground">Manipal University Jaipur</p>
                <p className="text-xs text-muted-foreground mt-1">PBL 2026</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-8 italic">PBL 2026 — Academic Demonstration Prototype</p>
        </div>
      </section>

      {/* Footer spacer for timer */}
      <div className="h-20" />
    </div>
  );
};

export default Index;
