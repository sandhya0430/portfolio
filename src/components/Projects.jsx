import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "../data/portfolio";
import ProjectCard from "./ProjectCard";

const filters = ["All", "Work", "Personal"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = projects.filter((p) => {
    if (active === "All") return true;
    return p.type === active.toLowerCase();
  });

  return (
    <section className="section-pad pt-24">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-purple-500 text-sm font-semibold uppercase tracking-widest mb-2"></p>
          <h2 className="text-3xl md:text-4xl font-bold t-heading">
            My Recent <span className="gradient-text">Works</span>
          </h2>
          <p className="t-muted mt-3 max-w-xl mx-auto text-sm">
            Here are a few projects I've worked on recently.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === f
                  ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-500/20"
                  : "glass nav-link hover:opacity-80"
              }`}
            >
              {f}
              <span className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full ${
                active === f ? "bg-white/20 text-white" : "bg-purple-500/20 text-purple-400"
              }`}>
                {f === "All" ? projects.length : projects.filter(p => p.type === f.toLowerCase()).length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
