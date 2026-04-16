import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import { personal } from "../data/portfolio";

const socials = [
  { icon: <FiGithub size={18} />,   href: personal.github,            label: "GitHub",   color: "#a78bfa" },
  { icon: <FiLinkedin size={18} />, href: personal.linkedin,          label: "LinkedIn", color: "#38bdf8" },
  { icon: <FiMail size={18} />,     href: `mailto:${personal.email}`, label: "Email",    color: "#f472b6" },
];

export default function Footer({ setActive }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const go = (section) => {
    setActive(section);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-wrap border-t relative overflow-hidden" ref={ref}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-16 rounded-full blur-3xl"
          style={{ background: "rgba(108,99,255,0.2)" }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-8">
        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="h-px mb-6 origin-left"
          style={{ background: "linear-gradient(90deg, transparent, rgba(108,99,255,0.5), transparent)" }}
        />

        {/* 3-column row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Left — Built with love */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="footer-text text-sm flex items-center gap-1.5"
          >
            Built with{" "}
            <motion.span
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              <FiHeart size={13} className="text-pink-500" />
            </motion.span>
            {" "}by{" "}
            <motion.button
              onClick={() => go("hero")}
              whileHover={{ scale: 1.05 }}
              className="gradient-text font-semibold ml-1"
            >
              Sandhya D
            </motion.button>
          </motion.p>

          {/* Center — Socials */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center gap-3"
          >
            {socials.map(({ icon, href, label, color }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.25, color, boxShadow: `0 0 16px ${color}60` }}
                whileTap={{ scale: 0.9 }}
                className="footer-text p-2.5 glass rounded-full transition-all"
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Right — Tagline */}
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="footer-text text-xs tracking-wide text-right"
          >
            Frontend Developer · Full Stack · AI Enthusiast
          </motion.p>

        </div>
      </div>
    </footer>
  );
}
