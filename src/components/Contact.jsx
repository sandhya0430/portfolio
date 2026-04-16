import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personal } from "../data/portfolio";
import { FiMail, FiLinkedin, FiGithub, FiArrowUpRight } from "react-icons/fi";

const contacts = [
  { icon: <FiMail size={24} />,    label: "Email",    value: personal.email,              href: `mailto:${personal.email}`, iconBg: "bg-purple-100 text-purple-600", glow: "rgba(139,92,246,0.4)" },
  { icon: <FiLinkedin size={24} />,label: "LinkedIn", value: "linkedin.com/in/sandhya",   href: personal.linkedin,          iconBg: "bg-cyan-100 text-cyan-600",    glow: "rgba(6,182,212,0.4)" },
  { icon: <FiGithub size={24} />,  label: "GitHub",   value: "github.com/sandhya0430",    href: personal.github,            iconBg: "bg-pink-100 text-pink-600",    glow: "rgba(236,72,153,0.4)" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-pad pt-24">
      <div className="max-w-3xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-purple-500 text-sm font-semibold uppercase tracking-widest mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold t-heading mb-4">Let's Work Together</h2>
          <p className="t-sub text-base max-w-lg mx-auto">
            Open to full-time roles, freelance projects, and interesting collaborations.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5" style={{ perspective: "800px" }}>
          {contacts.map(({ icon, label, value, href, iconBg, glow }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12, type: "spring", stiffness: 120 }}
              whileHover={{
                y: -10,
                rotateX: 6,
                boxShadow: `0 20px 40px ${glow}`,
                scale: 1.04,
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="contact-card glass rounded-2xl p-6 flex flex-col items-center gap-3 group transition-all"
            >
              <motion.div
                className={`p-3 rounded-xl ${iconBg}`}
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                transition={{ duration: 0.4 }}
                style={{ transform: "translateZ(16px)" }}
              >
                {icon}
              </motion.div>
              <p className="t-muted text-xs uppercase tracking-wider">{label}</p>
              <p className="t-sub text-sm font-medium break-all">{value}</p>
              <FiArrowUpRight size={14} className="t-muted group-hover:text-purple-500 transition-colors" />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10"
        >
          <motion.a
            href={`mailto:${personal.email}`}
            whileHover={{ scale: 1.06, boxShadow: "0 0 30px rgba(108,99,255,0.5)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg"
          >
            <FiMail size={16} /> Say Hello
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
