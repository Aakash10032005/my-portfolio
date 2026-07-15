import React from "react";

const data = {
  name: "Aakash Gurumurthi",
  role: "B.Tech Information Technology Student | Full-Stack & ML Developer",
  contact: {
    address: "A-1803, Ace Aspire, Greater Noida West, UP 201306",
    phone: "+91 7982391458",
    email: "imaakash.gurumurthi@gmail.com",
  },
  summary:
    "Final-year Information Technology student with hands-on development experience across machine learning, cybersecurity, distributed systems, and full-stack engineering.",
  gpa: "8.54",
  skillCategories: [
    { label: "Languages", items: ["Python", "C++", "C", "Java", "SQL", "PHP"] },
    { label: "Web & Mobile", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Node.js", "Flutter", "FastAPI", "Flask"] },
    { label: "ML & AI", items: ["HuBERT", "Random Forest", "LSTM", "Autoencoders", "Vision/Swin Transformers", "Computer Vision", "Librosa"] },
    { label: "Cybersecurity", items: ["Snort 3", "Intrusion Detection Systems", "UDP/TCP Protocols", "VirusTotal API"] },
    { label: "Databases & Tools", items: ["MySQL", "MongoDB", "SQLite", "Firebase", "Git/GitHub", "Android Studio"] },
  ],
  education: [
    {
      when: "Aug 2023 – Present",
      school: "Vellore Institute of Technology, Vellore, Tamil Nadu",
      degree: "B.Tech in Information Technology | CGPA: 8.54",
      bullets: [
        "Relevant Coursework: Database Systems, Operating Systems, Data Structures & Algorithms, AI & ML",
        "RoboVITics — Advisory (2026–2027), Head of Events (2025–2026), App Developer (2024–2025)",
      ],
    },
    {
      when: "March 2022 – March 2023",
      school: "Seth Anandram Jaipuria School, Vasundhara, Ghaziabad",
      degree: "Class 12, Science (PCM) | CBSE Board | Score: 92%",
      bullets: [],
    },
    {
      when: "March 2020 – March 2021",
      school: "Seth Anandram Jaipuria School, Vasundhara, Ghaziabad",
      degree: "Class 10 | CBSE Board | Score: 97.5%",
      bullets: [],
    },
  ],
  internships: [
    {
      title: "App Development Intern — Centre for Railway Information Systems (CRIS)",
      when: "June 2025 – July 2025",
      bullets: [
        "Developed native UI pages for the IRCTC mobile application using Flutter and Android Studio.",
        "Built a cross-platform Events Planner application integrated with secure Firebase Authentication workflows.",
      ],
    },
    {
      title: "Web Development and Database Intern — DLF Ltd.",
      when: "May 2025 – June 2025",
      bullets: [
        "Queried complex commercial datasets in a case study about a mobile phone distributor using relational joins and aggregate functions on MySQL.",
        "Built an interactive data dashboard using HTML, CSS, JavaScript, PHP, and SQL to track leasing metrics.",
      ],
    },
  ],
  projects: [
    {
      title: "Drift-Aware Hybrid Intrusion Detection System (DAHIDS)",
      bullets: [
        "Engineered a production-ready hybrid IDS merging Snort 3 signature matching with an Adaptive Random Forest, LSTM, and Autoencoder triad to detect zero-day threats.",
        "Designed 7 custom self-healing workflows including Time-Machine Rollback and Confidence Gating, reducing false-positive rates to under 3%.",
        "Structured a FastAPI backend processing 100+ network flows per second with sub-50ms latency.",
        "Delivered a real-time React/MUI dashboard via WebSockets for live traffic visualization, model health monitoring, and custom Snort rule recommendations.",
      ],
    },
    {
      title: "Decentralized P2P Messaging System — Patented (App No. 202641066395, India, Filed May 2026)",
      bullets: [
        "Designed a zero-configuration, fault-tolerant decentralized messaging network in Python using UDP multicast for node discovery.",
        "Implemented gossip protocol and anti-entropy mechanisms over TCP for eventual consistency, with Lamport logical clocks for absolute event ordering.",
        "Managed local message stores using SQLite and built a real-time Flask web dashboard visualizing message streams, network topology, and peer status.",
      ],
    },
    {
      title: "Multi-Lingual Sign Language Translation System",
      bullets: [
        "Built a computer vision pipeline using Swin/Vision Transformer architecture to translate sign language gestures into text across multiple languages.",
        "Managed real-time camera frame streams using OpenCV to achieve low-latency gesture recognition.",
      ],
    },
    {
      title: "Speech Emotion Recognition for Opera Performances",
      bullets: [
        "Extracted audio waveforms processed at 16kHz via Librosa using the HuBERT Base framework for feature extraction.",
        "Trained a Random Forest classifier that reliably identifies operatic vocal sentiments from uploaded audio files.",
      ],
    },
    {
      title: "PhishBreaker: Machine Learning URL Analyzer",
      bullets: [
        "Developed an endpoint security utility classifying malicious URLs based on 30 structural and network features.",
        "Integrated the VirusTotal API to supply live domain reputation intelligence to a Flask web application interface.",
      ],
    },
    {
      title: "AI-Based Medical Report Analyzer",
      bullets: [
        "Built a tool enabling users to upload X-rays and pathology reports to receive anomaly inference, severity scoring, and precautions in multiple regional languages via a React-based dashboard.",
      ],
    },
  ],
  honors: [
    "SSB Recommended Candidate: AIR 462 (NDA-151 Course), 2023.",
    "Best Electronics Team: Awarded first place at the Yantra Central Hackathon for an AI-based automated fruit sorting system, controllable via a mobile application.",
    "Head of Events, RoboVITics Robotics Club (2025–2026): Managed operations, budgets, and technical logistics for university-wide events. Also serving in Advisory role (2026–2027) and as App Developer (2024–2025).",
  ],
};

// Utility components
function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-blue-700/40 bg-blue-900/30 px-3 py-1 text-sm text-blue-200 shadow-sm hover:bg-blue-900/50 transition-colors duration-200">
      {children}
    </span>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4 rounded-2xl bg-slate-900/60 p-6 ring-1 ring-blue-900/40 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold tracking-tight text-blue-200">{title}</h2>
      <div className="text-slate-200/90">{children}</div>
    </section>
  );
}

function Card({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-slate-900/60 p-5 ring-1 ring-blue-900/40 shadow-md hover:shadow-lg transition-shadow duration-300">
      {title && <h3 className="mb-2 text-lg font-medium text-blue-100">{title}</h3>}
      <div className="text-slate-200/90">{children}</div>
    </div>
  );
}

export default function PortfolioDashboard() {
  return (
    <main className="min-h-screen w-full bg-[#0b1220] text-slate-100">
      {/* Top gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(56,189,248,0.25)_0%,rgba(0,0,0,0)_70%)]" />

      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        {/* Header */}
        <header className="mb-8 rounded-2xl border border-blue-900/40 bg-slate-950/70 p-6 shadow-2xl backdrop-blur">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-blue-100 md:text-4xl">
                {data.name}
              </h1>
              <p className="mt-1 text-base text-blue-300/90">{data.role}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Pill>{data.contact.phone}</Pill>
              <Pill>{data.contact.email}</Pill>
            </div>
          </div>
          <p className="mt-4 max-w-3xl text-slate-200/90 whitespace-normal text-sm">{data.summary}</p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="text-sm text-slate-300/80">GPA</span>
            <span className="rounded-lg bg-blue-900/50 px-2 py-1 text-sm font-semibold text-blue-100 ring-1 ring-blue-800/50">
              {data.gpa}
            </span>
          </div>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
          {/* Left column */}
          <div className="md:col-span-3 space-y-6">

            {/* Internships */}
            <Section title="Professional Experience">
              <div className="space-y-5">
                {data.internships.map((job, idx) => (
                  <div key={idx}>
                    <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="font-medium text-blue-100 text-sm">{job.title}</h3>
                      <span className="rounded-lg bg-blue-900/40 px-2 py-1 text-xs font-medium text-blue-200 ring-1 ring-blue-900/50 shrink-0">
                        {job.when}
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {job.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-2 shrink-0 inline-block h-2 w-2 rounded-full bg-blue-400/90" />
                          <span className="leading-relaxed text-sm">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>

            {/* Projects */}
            <Section title="Key Projects">
              <div className="space-y-5">
                {data.projects.map((proj, idx) => (
                  <div key={idx}>
                    <h3 className="font-medium text-blue-100 text-sm mb-2">{proj.title}</h3>
                    <ul className="space-y-1">
                      {proj.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-2 shrink-0 inline-block h-2 w-2 rounded-full bg-blue-400/90" />
                          <span className="leading-relaxed text-sm">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>

            {/* Education */}
            <Section title="Education">
              <div className="space-y-4">
                {data.education.map((ed, idx) => (
                  <Card key={idx}>
                    <div className="flex flex-col items-start justify-between gap-1 md:flex-row md:items-center">
                      <div>
                        <h4 className="text-base font-semibold text-blue-100">{ed.school}</h4>
                        <p className="text-sm text-blue-200/80">{ed.degree}</p>
                      </div>
                      <span className="rounded-lg bg-blue-900/40 px-2 py-1 text-xs font-medium text-blue-200 ring-1 ring-blue-900/50 shrink-0">
                        {ed.when}
                      </span>
                    </div>
                    {ed.bullets.length > 0 && (
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                        {ed.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </Card>
                ))}
              </div>
            </Section>

            {/* Honors */}
            <Section title="Honors & Leadership">
              <ul className="space-y-3">
                {data.honors.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-2 shrink-0 inline-block h-2 w-2 rounded-full bg-blue-400/90" />
                    <span className="leading-relaxed text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </Section>
          </div>

          {/* Right column */}
          <div className="md:col-span-2 space-y-6">
            <Section title="Contact">
              <div className="space-y-2 text-sm">
                <p className="text-blue-100">Address</p>
                <p className="text-slate-200/90">{data.contact.address}</p>
                <div className="mt-3 grid grid-cols-1 gap-2">
                  <a
                    href={`mailto:${data.contact.email}`}
                    className="rounded-lg border border-blue-900/40 bg-blue-900/30 px-3 py-2 text-center text-sm text-blue-100 hover:bg-blue-900/50 transition-colors duration-200"
                  >
                    Email Me
                  </a>
                  <a
                    href={`tel:${data.contact.phone.replace(/\s/g, "")}`}
                    className="rounded-lg border border-blue-900/40 bg-blue-900/30 px-3 py-2 text-center text-sm text-blue-100 hover:bg-blue-900/50 transition-colors duration-200"
                  >
                    Call
                  </a>
                </div>
              </div>
            </Section>

            <Section title="Skills">
              <div className="space-y-3">
                {data.skillCategories.map((cat, i) => (
                  <div key={i}>
                    <p className="text-xs font-semibold text-blue-300/80 uppercase tracking-wider mb-1">{cat.label}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.items.map((s, j) => (
                        <Pill key={j}>{s}</Pill>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Quick Links">
              <div className="grid grid-cols-2 gap-3">
                <a
                  className="rounded-xl border border-blue-900/40 bg-slate-950/50 p-4 text-center text-sm text-blue-100 hover:bg-blue-900/30 transition-colors duration-200"
                  href="/Aakash-Resume.pdf"
                  download
                >
                  Resume (PDF)
                </a>
                <a
                  className="rounded-xl border border-blue-900/40 bg-slate-950/50 p-4 text-center text-sm text-blue-100 hover:bg-blue-900/30 transition-colors duration-200"
                  href="https://github.com/Aakash10032005"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="col-span-2 rounded-xl border border-blue-900/40 bg-slate-950/50 p-4 text-center text-sm text-blue-100 hover:bg-blue-900/30 transition-colors duration-200"
                  href="https://iprsearch.ipindia.gov.in/publicsearch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Patent: App No. 202641066395 (India)
                </a>
              </div>
            </Section>

            <Section title="Connect">
              <div className="grid grid-cols-1 gap-3">
                <a
                  className="rounded-xl border border-blue-900/40 bg-slate-950/50 p-4 text-center text-sm text-blue-100 hover:bg-blue-900/30 transition-colors duration-200"
                  href="https://www.linkedin.com/in/aakash-gurumurthi-231587291/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </Section>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-10 text-center text-sm text-slate-400/80">
          © {new Date().getFullYear()} {data.name}. Built with Next.js & Tailwind.
        </footer>
      </div>
    </main>
  );
}
