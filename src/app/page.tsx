"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const EXPERIENCE = {
  company: "Neolytix",
  role: "Full Stack Developer Intern",
  period: "August 2024 – Present",
  type: "Hybrid",
  points: [
    "Architected NeoScribe, a live audio transcription platform for healthcare providers with Python and Next.js/TypeScript for real-time medical documentation.",
    "Building Incredibly, a credentialing platform using Next.js, TypeScript, Node.js, Express.js, PostgreSQL and Sequelize ORM.",
    "Database administration and query optimization with pgAdmin 4 and DBeaver.",
    "Code quality with SonarQube and end-to-end testing with Cypress.",
    "Collaborated with cross-functional teams on scalable healthcare solutions.",
  ],
};

const EDUCATION = {
  institution: "Institute of Management Education",
  degree: "Bachelor of Computer Application",
  period: "September 2023 – June 2026",
  location: "India",
};

const PROJECTS = [
  {
    name: "CareerFlow",
    stack: "React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Redux Toolkit",
    description:
      "MERN stack job portal for jobseekers and recruiters with job search and application management.",
    highlights: [
      "JWT auth (access & refresh tokens), OAuth 2.0 (Google & GitHub).",
      "Resume upload and parsing with ATS scoring.",
      "Mobile-first responsive UI with Tailwind and ShadCN UI, Redux Toolkit, Cloudinary.",
    ],
    liveUrl: "https://chakri-portal-72eg.onrender.com",
    image: "/careerflow-screenshot.png",
  },
  {
    name: "RareKraft",
    stack: "React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Redux Toolkit",
    description: "Production-ready e-commerce web app with payments and secure auth.",
    highlights: [
      "JWT + Google OAuth, OTP-based forgot-password flow.",
      "Razorpay integration for payments.",
      "Redis for email verification and rate-limiting.",
    ],
    liveUrl: "https://rarekraft-in-1.onrender.com",
    image: "/rarekraft-screenshot.png",
  },
  {
    name: "NeoScribe",
    stack: "Python, Next.js, TypeScript",
    description: "Live audio transcription platform for healthcare providers.",
    highlights: ["Real-time medical documentation for doctors.", "Built at Neolytix."],
  },
  {
    name: "Incredibly",
    stack: "Next.js, TypeScript, Node.js, Express.js, PostgreSQL, Sequelize",
    description: "Comprehensive credentialing platform (in progress).",
    highlights: ["Robust database design and API.", "Built at Neolytix."],
  },
];

const SKILL_GROUPS = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Java", "C", "C++"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS", "Redux Toolkit", "ShadCN UI"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT", "OAuth 2.0"],
  },
  {
    title: "Databases & ORM",
    items: ["MongoDB", "Mongoose", "PostgreSQL", "Redis", "Sequelize ORM"],
  },
  {
    title: "Tools & Cloud",
    items: ["VSCode", "Docker", "GitHub", "Postman", "SonarQube", "Cypress", "AWS", "Vercel", "Render", "Cloudinary"],
  },
];

function SectionHeading({ children, id }: Readonly<{ children: React.ReactNode; id?: string }>) {
  return (
    <motion.h2
      id={id}
      className="font-heading text-4xl sm:text-5xl font-bold text-white mb-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.h2>
  );
}

function SectionSubline() {
  return (
    <motion.div
      className="h-1 w-16 bg-accent rounded-full mb-10"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    />
  );
}

function FadeInSection({
  children,
  className = "",
  delay = 0,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}>) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-mesh">
      {/* Nav */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-surface/80 backdrop-blur-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#hero" className="font-heading flex items-baseline gap-1.5 text-white">
            <span className="text-2xl font-bold tracking-tight">PM</span>
            <span className="text-lg font-semibold text-text-muted">Prashant Mishra</span>
          </a>
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-base text-text-muted hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* Hero */}
      <section
        id="hero"
        className="min-h-screen flex flex-col md:flex-row md:items-center justify-center px-6 pt-20 pb-16 max-w-5xl mx-auto gap-12 md:gap-16"
      >
        <div className="flex flex-col justify-center max-w-xl">
          <motion.p
            className="text-accent font-medium text-sm uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Full Stack Developer
          </motion.p>
          <motion.h1
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Prashant Mishra
          </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl text-text-muted max-w-xl mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I build scalable web applications with modern stacks—React, Next.js, Node.js—and ship
          features that improve workflows and user experience.
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-accent text-surface text-base font-medium hover:opacity-90 transition-opacity"
          >
            Get in touch
          </a>
          <a
            href="https://www.linkedin.com/in/prashant-mishra-10232"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-border text-base text-text-muted hover:text-accent hover:border-accent/50 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/prashantmishra10232"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-border text-base text-text-muted hover:text-accent hover:border-accent/50 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://leetcode.com/u/prashantmishra10232"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-border text-base text-text-muted hover:text-accent hover:border-accent/50 transition-colors"
          >
            LeetCode
          </a>
        </motion.div>
        </div>
        <motion.div
          className="flex justify-center md:justify-end shrink-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="/hero-illustration.png"
            alt="Prashant Mishra - Full Stack Developer with React, AI, and modern tech stack"
            width={420}
            height={420}
            className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] h-auto rounded-2xl object-contain"
            priority
          />
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
        <SectionHeading>About</SectionHeading>
        <SectionSubline />
        <FadeInSection>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
            <div className="shrink-0 w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-border bg-surface-card ring-2 ring-accent/20">
              <Image
                src="/headshot.png"
                alt="Prashant Mishra - Professional headshot"
                width={224}
                height={224}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-text-muted text-xl leading-relaxed max-w-2xl">
              I&apos;m a Full Stack Developer intern at Neolytix, focused on healthcare and
              credentialing products. I enjoy building full-cycle features—from API design and
              database modeling to responsive UIs—and care about code quality, testing, and
              maintainability.
            </p>
          </div>
        </FadeInSection>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-6 max-w-4xl mx-auto">
        <SectionHeading>Experience</SectionHeading>
        <SectionSubline />
        <FadeInSection>
          <div className="rounded-xl bg-surface-card border border-border p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-5">
              <div>
                <h3 className="font-heading text-2xl font-semibold text-white">
                  {EXPERIENCE.role}
                </h3>
                <p className="text-accent font-medium text-lg">{EXPERIENCE.company}</p>
              </div>
              <div className="text-base text-text-muted">
                <span>{EXPERIENCE.period}</span>
                <span className="mx-2">·</span>
                <span>{EXPERIENCE.type}</span>
              </div>
            </div>
            <ul className="space-y-3 text-base text-text-muted">
              {EXPERIENCE.points.map((point, i) => (
                <motion.li
                  key={point.slice(0, 40)}
                  className="flex gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <span className="text-accent mt-1.5">·</span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.15} className="mt-8">
          <div className="rounded-xl bg-surface-card border border-border p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h3 className="font-heading text-2xl font-semibold text-white">
                {EDUCATION.degree}
              </h3>
              <span className="text-base text-text-muted">{EDUCATION.period}</span>
            </div>
            <p className="text-accent font-medium text-lg">{EDUCATION.institution}</p>
            <p className="text-base text-text-muted mt-1">{EDUCATION.location}</p>
          </div>
        </FadeInSection>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 max-w-4xl mx-auto">
        <SectionHeading>Projects</SectionHeading>
        <SectionSubline />
        <div className="space-y-6">
          {PROJECTS.map((project, idx) => (
            <FadeInSection key={project.name} delay={idx * 0.1}>
              <div className="rounded-xl bg-surface-card border border-border overflow-hidden hover:border-accent/30 transition-colors">
                {"image" in project && project.image && (
                  "liveUrl" in project && project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ring-offset-2 ring-offset-surface-card rounded-t-xl"
                    >
                      <div className="relative w-full aspect-video bg-surface-elevated overflow-hidden">
                        <Image
                          src={project.image}
                          alt={`${project.name} application screenshot`}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 768px) 100vw, 896px"
                        />
                        <span className="absolute bottom-3 right-3 px-4 py-2 rounded-lg bg-accent/90 text-surface text-base font-medium backdrop-blur-sm">
                          View live demo →
                        </span>
                      </div>
                    </a>
                  ) : (
                    <div className="relative w-full aspect-video bg-surface-elevated overflow-hidden rounded-t-xl">
                      <Image
                        src={project.image}
                        alt={`${project.name} application screenshot`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 896px"
                      />
                    </div>
                  )
                )}
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-heading text-2xl font-semibold text-white">
                      {project.name}
                    </h3>
                    {"liveUrl" in project && project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base text-accent hover:underline"
                      >
                        Live demo
                      </a>
                    )}
                  </div>
                  <p className="text-base text-accent mb-3">{project.stack}</p>
                  <p className="text-lg text-text-muted mb-4">{project.description}</p>
                  <ul className="space-y-2 text-base text-text-muted">
                    {project.highlights.map((h) => (
                      <li key={`${project.name}-${h.slice(0, 24)}`} className="flex gap-2">
                        <span className="text-accent">→</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 max-w-4xl mx-auto">
        <SectionHeading>Skills</SectionHeading>
        <SectionSubline />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, gIdx) => (
            <FadeInSection key={group.title} delay={gIdx * 0.08}>
              <div className="rounded-xl bg-surface-card border border-border p-6">
                <h4 className="font-heading text-lg font-semibold text-white mb-3">{group.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-md bg-surface-elevated text-text-muted text-base border border-border"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
        <FadeInSection delay={0.3} className="mt-8">
          <div className="rounded-xl bg-surface-card border border-border p-6">
            <h4 className="font-heading text-lg font-semibold text-white mb-2">Certification</h4>
            <p className="text-text-muted text-base">
              100xdevs – Certified Full Stack Web Development
            </p>
          </div>
        </FadeInSection>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
        <SectionHeading>Contact</SectionHeading>
        <SectionSubline />
        <FadeInSection>
          <p className="text-text-muted text-xl mb-8 leading-relaxed">
            I&apos;m open to collaboration and new opportunities. Reach out via email or connect on
            LinkedIn.
          </p>
          <div className="flex flex-wrap gap-6 text-lg">
            <a
              href="mailto:prashantmishra10232@gmail.com"
              className="text-accent hover:underline font-medium"
            >
              prashantmishra10232@gmail.com
            </a>
            <a href="tel:+919958304996" className="text-accent hover:underline font-medium">
              +91 9958304996
            </a>
          </div>
          <div className="flex gap-6 mt-6 text-lg">
            <a
              href="https://www.linkedin.com/in/prashant-mishra-10232"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/prashantmishra10232"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://leetcode.com/u/prashantmishra10232"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors"
              aria-label="LeetCode"
            >
              LeetCode
            </a>
          </div>
        </FadeInSection>
      </section>

      <footer className="py-8 px-6 border-t border-border text-center text-text-muted text-base">
        © {new Date().getFullYear()} Prashant Mishra. Built with Next.js & Tailwind.
      </footer>
    </main>
  );
}
