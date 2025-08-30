import React from "react";

// Dark blue themed portfolio dashboard for Vercel/Next.js
// Drop this component into a Next.js app (e.g., app/page.tsx or pages/index.tsx)
// TailwindCSS recommended. See chat for quick setup notes.

const data = {
  name: "Aakash Gurumurthi",
  role: "Student • App/Frontend Developer",
  contact: {
    address: "A-1803, Ace Aspire, Greater Noida West, UP 201306",
    phone: "+91 7982391458",
    email: "imaakash.gurumurthi@gmail.com",
  },
  summary:
    "Highly-motivated student eager to take on new challenges. Strong work ethic, adaptability and interpersonal skills. Adept at working effectively and quickly mastering new skills.",
  gpa: "8.58",
  skills: [
    "Python (Intermediate)",
    "C/C++ (Intermediate)",
    "Java (Basic)",
    "DSA in C/C++/Python (Basic)",
    "Flutter (Intermediate)",
    "Node.js (Basic)",
    "HTML/CSS/JS (Intermediate)",
    "SQL (Intermediate)",
    "React.js (Basic)",
  ],
  education: [
    {
      when: "Aug 2023 – Present",
      school: "Vellore Institute of Technology, Vellore",
      degree: "B.Tech, Information Technology",
      bullets: [
        "Coursework in Python, C/C++, Java and DSA",
        "RoboVITics (Head of Events) and App Development Senior",
      ],
    },
    {
      when: "March 2022 – March 2023",
      school: "Seth Anandram Jaipuria School, Vasundhara, Ghaziabad",
      degree: "Class 12 (Science)",
      bullets: [
        "Physics, Chemistry, Mathematics",
        "92% in CBSE Class 12 Board Examinations",
      ],
    },
  ],
  experiences: [
    "Built small-scale mobile applications: Xylophone, BMI Calculator, Quiz App (Flutter)",
    "4-week Industrial Internship @ CRIS (Centre for Railway Information Systems): IRCTC app pages (Flutter, Android Studio) and an Events Planner app with Firebase Auth",
    "Front-end framework for personal project ‘GreenyBee’ — a seller app for local plant sellers and nurseries",
    "Best Electronics Team — Yantra Central Hackathon: AI Fruit Quality Sorting System controllable via mobile app",
    "4-week Industrial Internship @ DLF Pvt Ltd: solved case study with SQL on MySQL; built data dashboard (HTML/CSS/JS + PHP + SQL)",
    "Blood Donation Management System: donor registration & admin matching by blood type (HTML/CSS/JS + Node.js + MongoDB)",
  ],
};

// Utility components
function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-blue-700/40 bg-blue-900/30 px-3 py-1 text-sm text-blue-200 shadow-sm">
      {children}
    </span>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4 rounded-2xl bg-slate-900/60 p-6 ring-1 ring-blue-900/40 shadow-lg">
      <h2 className="text-xl font-semibold tracking-tight text-blue-200">{title}</h2>
      <div className="text-slate-200/90">{children}</div>
    </section>
  );
}

function Card({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-slate-900/60 p-5 ring-1 ring-blue-900/40 shadow-md">
      {title && <h3 className="mb-2 text-lg font-medium text-blue-100">{title}</h3>}
      <div className="text-slate-200/90">{children}</div>
    </div>
  );
}

export default function PortfolioDashboard() {
  return (
    <main className="min-h-screen w-full bg-[#0b1220] text-slate-100">
      {/* Top gradient/texture */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(56,189,248,0.25)_0%,rgba(0,0,0,0)_70%)]" />

      {/* Container */}
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
          <p className="mt-4 max-w-3xl text-slate-200/90">{data.summary}</p>
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
            <Section title="Experience & Projects">
              <ul className="space-y-3">
                {data.experiences.map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-400/90" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Education">
              <div className="space-y-4">
                {data.education.map((ed, idx) => (
                  <Card key={idx}>
                    <div className="flex flex-col items-start justify-between gap-1 md:flex-row md:items-center">
                      <div>
                        <h4 className="text-lg font-semibold text-blue-100">{ed.school}</h4>
                        <p className="text-sm text-blue-200/80">{ed.degree}</p>
                      </div>
                      <span className="rounded-lg bg-blue-900/40 px-2 py-1 text-xs font-medium text-blue-200 ring-1 ring-blue-900/50">
                        {ed.when}
                      </span>
                    </div>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                      {ed.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
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
                    className="rounded-lg border border-blue-900/40 bg-blue-900/30 px-3 py-2 text-center text-sm text-blue-100 hover:bg-blue-900/50"
                  >
                    Email Me
                  </a>
                  <a
                    href={`tel:${data.contact.phone.replace(/\s/g, "")}`}
                    className="rounded-lg border border-blue-900/40 bg-blue-900/30 px-3 py-2 text-center text-sm text-blue-100 hover:bg-blue-900/50"
                  >
                    Call
                  </a>
                </div>
              </div>
            </Section>

            <Section title="Skills">
              <div className="flex flex-wrap gap-2">
                {data.skills.map((s, i) => (
                  <Pill key={i}>{s}</Pill>
                ))}
              </div>
            </Section>

            <Section title="Quick Links">
  <div className="grid grid-cols-2 gap-3">
    <a
      className="rounded-xl border border-blue-900/40 bg-slate-950/50 p-4 text-center text-sm text-blue-100 hover:bg-blue-900/30"
      href="/Aakash-Resume.pdf"
      download
    >
      Resume (PDF)
    </a>
    <a
      className="rounded-xl border border-blue-900/40 bg-slate-950/50 p-4 text-center text-sm text-blue-100 hover:bg-blue-900/30"
      href="https://github.com/Aakash10032005"  
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
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
