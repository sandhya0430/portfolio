import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { certifications } from "../data/portfolio";
import { FiCheckCircle, FiAward } from "react-icons/fi";

const bullets = [
  "Full-Stack Developer with 3+ years of experience in React.js and JavaScript",
  "Strong in API integration, backend development, and end-to-end feature delivery",
  "Experienced with AI tools like Cursor, Claude, and Lovable",
  "Focused on improving productivity and building smarter solutions",
  "Delivered a guest lecture at University, sharing industry insights",
  "Mentored juniors for placements and guided them with real-world work experience",
  "Enjoy playing games and writing book reviews on blogs outside of coding",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-pad pt-24">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-blue-500 text-sm font-semibold uppercase tracking-widest mb-2">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold t-heading">Who I Am</h2>
        </motion.div>

        <div className="flex flex-col gap-5">
          {/* Bullet points */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-6"
          >
            <ul className="space-y-3">
              {bullets.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <FiCheckCircle size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="t-sub text-sm leading-relaxed">{b}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass rounded-2xl p-5"
          >
            <div className="flex items-center gap-2 mb-3">
              <FiAward size={16} className="text-amber-400" />
              <p className="text-xs font-semibold uppercase tracking-wider t-muted">Certifications</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {certifications.map((c) => (
                <div key={c} className="flex items-center gap-2 t-sub text-sm">
                  <span className="cert-dot w-1.5 h-1.5 rounded-full flex-shrink-0" />
                  {c}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
