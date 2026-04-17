import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { education } from "../data/portfolio";
import { FiBriefcase, FiBook, FiMapPin, FiCalendar, FiStar } from "react-icons/fi";

const jobs = [
  {
    company: "SquareShift",
    role: "Software Developer",
    period: "Mar 2024 – Present",
    location: "Chennai, IN",
    color: "from-blue-500 to-pink-500",
    points: [
      "Built React.js dashboards for LLM cost & usage monitoring",
      "Real-time data viz with REST APIs & Elasticsearch",
      "Python-based cost aggregation across AI tools",
      "Kibana dashboards for frontend data consistency",
      "Responsive landing page for Eureka AI (Google ADK)",
      "Reduced report turnaround from 2 days to on-demand",
    ],
  },
  {
    company: "Concentrix Catalyst",
    role: "Software Developer",
    period: "Mar 2022 – May 2023",
    location: "Chennai, IN",
    color: "from-pink-500 to-blue-500",
    points: [
      "Built production frontend for enterprise banking platform",
      "Responsive UI with HTML, CSS & Bootstrap",
      "Collaborated with backend & QA via SQL & JIRA",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-pad pt-24">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-500 text-sm font-semibold uppercase tracking-widest mb-2">Career</p>
          <h2 className="text-3xl md:text-4xl font-bold t-heading">
            My Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-sky-400 -translate-x-1/2 hidden md:block" />

          <div className="space-y-16">
            {jobs.map((job, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-6"
                >
                  {/* LEFT slot — hidden on mobile */}
                  <div className="hidden md:flex justify-end">
                    {isLeft ? (
                      <Card job={job} />
                    ) : (
                      <Meta job={job} align="right" />
                    )}
                  </div>

                  {/* Center dot — hidden on mobile */}
                  <div className="hidden md:flex justify-center z-10">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${job.color} flex items-center justify-center shadow-lg`}>
                      <FiBriefcase size={16} className="text-white" />
                    </div>
                  </div>

                  {/* RIGHT slot — hidden on mobile */}
                  <div className="hidden md:flex justify-start">
                    {isLeft ? (
                      <Meta job={job} align="left" />
                    ) : (
                      <Card job={job} />
                    )}
                  </div>

                  {/* Mobile — always show card + meta stacked */}
                  <div className="md:hidden flex flex-col gap-3">
                    <Card job={job} />
                    <Meta job={job} align="left" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Education + Rotaract */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold t-heading text-center mb-8">
            <span className="gradient-text">Education</span> & Activities
          </h3>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Education */}
            {education.map((edu) => (
              <div key={edu.institution} className="glass rounded-2xl p-6 flex items-start gap-4">
                <div className="p-3 rounded-xl icon-bg-cyan flex-shrink-0">
                  <FiBook size={20} className="text-cyan-500" />
                </div>
                <div>
                  <h4 className="t-heading font-bold text-sm">{edu.degree}</h4>
                  <p className="text-cyan-500 text-sm">{edu.institution}</p>
                  <div className="flex flex-wrap gap-3 mt-1.5">
                    <span className="flex items-center gap-1 t-muted text-xs"><FiCalendar size={11} />{edu.period}</span>
                    <span className="flex items-center gap-1 t-muted text-xs"><FiMapPin size={11} />{edu.location}</span>
                    <span className="text-amber-500 text-xs font-semibold">CGPA: {edu.cgpa}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Rotaract */}
            <div className="glass rounded-2xl p-6 flex items-start gap-4">
              <div className="p-3 rounded-xl flex-shrink-0" style={{ background: "rgba(251,191,36,0.15)" }}>
                <FiStar size={20} className="text-amber-400" />
              </div>
              <div>
                <h4 className="t-heading font-bold text-sm">Club President</h4>
                <p className="text-amber-400 text-sm">Rotaract Club</p>
                <p className="t-muted text-xs mt-1.5">Led community service initiatives, organized events, and managed a team of volunteers to drive social impact.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Card({ job }) {
  return (
    <div className="glass rounded-2xl p-5 shadow-lg w-full max-w-sm border" style={{ borderColor: "rgba(41,121,255,0.2)" }}>
      <p className="text-xs font-medium t-muted mb-0.5">{job.role}</p>
      <h3 className="text-xl font-bold mb-3 t-heading">{job.company}</h3>
      <ul className="space-y-1.5">
        {job.points.map((pt, j) => (
          <li key={j} className="flex items-start gap-2 text-xs t-sub">
            <span className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
            {pt}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Meta({ job, align }) {
  return (
    <div className={`flex flex-col gap-1 ${align === "right" ? "items-end text-right" : "items-start text-left"}`}>
      <span className="flex items-center gap-1 t-muted text-sm"><FiCalendar size={13} />{job.period}</span>
      <span className="flex items-center gap-1 t-muted text-sm"><FiMapPin size={13} />{job.location}</span>
    </div>
  );
}
