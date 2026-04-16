import { motion } from "framer-motion";
import { personal } from "../data/portfolio";
import { useState, useEffect, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

const roles = ["Frontend Developer", "Full Stack Developer", "AI Developer"];

const navigate = (section) => {
  window.dispatchEvent(new CustomEvent("navigate", { detail: section }));
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function Typewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!deleting && displayed.length < current.length)
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    else if (!deleting && displayed.length === current.length)
      timeout = setTimeout(() => setDeleting(true), 1800);
    else if (deleting && displayed.length > 0)
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    else { setDeleting(false); setRoleIndex((i) => (i + 1) % roles.length); }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);
  return <span className="gradient-text font-bold">{displayed}<span className="animate-pulse">|</span></span>;
}

// Mouse-tracking tilt for hero content
function TiltCard({ children }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    setTilt({ x, y });
  };
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      animate={{ rotateX: tilt.y, rotateY: tilt.x }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="blob1 absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.75, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="blob2 absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
        />
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-purple-400/30"
            style={{ left: `${15 + i * 14}%`, top: `${20 + (i % 3) * 25}%` }}
            animate={{ y: [-10, 10, -10], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
        <TiltCard>
          {/* Waving hand */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 mb-3"
          >
            <motion.span
              animate={{ rotate: [0, 20, -10, 20, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2 }}
              className="text-2xl inline-block origin-bottom-right"
            >👋</motion.span>
            <span className="text-lg t-muted">Hi There!</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4 leading-tight t-heading"
            style={{ transform: "translateZ(30px)" }}
          >
            I'M <span className="gradient-text">{personal.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-xl md:text-2xl font-semibold mb-5 t-sub min-h-[2rem]"
            style={{ transform: "translateZ(20px)" }}
          >
            <Typewriter />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base t-muted max-w-xl italic mb-8"
          >
            "Be more in love with your future than your past."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            style={{ transform: "translateZ(10px)" }}
          >
            <motion.button
              onClick={() => navigate("projects")}
              whileHover={{ scale: 1.06, boxShadow: "0 0 30px rgba(108,99,255,0.5)" }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold text-sm flex items-center gap-2 shadow-lg"
            >
              View Projects <FiArrowRight size={15} />
            </motion.button>
          </motion.div>
        </TiltCard>
      </div>
    </section>
  );
}
