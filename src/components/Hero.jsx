import { motion } from "framer-motion";
import { personal } from "../data/portfolio";
import { useState, useEffect, useRef } from "react";
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Clouds from "./Clouds";
import heroImg from "../assets/Gemini_Generated_Image_bynp7ybynp7ybynp.png";

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

  return (
    <span className="gradient-text font-bold">
      {displayed}<span className="animate-pulse">|</span>
    </span>
  );
}

function TiltCard({ children }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Mouse tracking (desktop)
  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    setTilt({ x, y });
  };

  // Touch tracking (mobile)
  const handleTouch = (e) => {
    const touch = e.touches[0];
    const rect = ref.current?.getBoundingClientRect();
    if (!rect || !touch) return;
    const x = ((touch.clientX - rect.left) / rect.width - 0.5) * 6;
    const y = ((touch.clientY - rect.top) / rect.height - 0.5) * -6;
    setTilt({ x, y });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      onTouchMove={handleTouch}
      onTouchEnd={() => setTilt({ x: 0, y: 0 })}
      animate={{ rotateX: tilt.y, rotateY: tilt.x }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero({ dark }) {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden w-full"
      style={{ paddingBottom: "80px" }}
    >
      {/* Cloud background — desktop only */}
      <div className="hidden md:block">
        <Clouds dark={dark} />
      </div>

      {/* Mobile bubbles — light mode only */}
      {!dark && (
      <div className="md:hidden absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { size: 100, left: "5%",  top: "10%", delay: 0 },
          { size: 60,  left: "80%", top: "8%",  delay: 0.5 },
          { size: 130, left: "65%", top: "40%", delay: 1 },
          { size: 50,  left: "10%", top: "45%", delay: 0.3 },
          { size: 90,  left: "40%", top: "65%", delay: 0.8 },
          { size: 70,  left: "75%", top: "70%", delay: 1.3 },
          { size: 45,  left: "25%", top: "80%", delay: 0.6 },
          { size: 110, left: "5%",  top: "72%", delay: 1.6 },
        ].map((b, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: b.size,
              height: b.size,
              left: b.left,
              top: b.top,
              borderRadius: "50%",
              background: "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.95), rgba(180,220,255,0.4))",
              border: "1.5px solid rgba(41,121,255,0.25)",
              zIndex: 1,
            }}
            animate={{ y: [0, -18, 0], x: [0, i % 2 === 0 ? 10 : -10, 0] }}
            transition={{ duration: 4 + i * 0.6, repeat: Infinity, ease: "easeInOut", delay: b.delay }}
          />
        ))}
      </div>
      )}

      {/* Desktop bubbles — light mode only */}
      {!dark && (
      <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        {[
          { size: 90,  left: "5%",   top: "15%", delay: 0 },
          { size: 55,  left: "20%",  top: "60%", delay: 0.6 },
          { size: 70,  left: "35%",  top: "25%", delay: 1.1 },
          { size: 40,  left: "50%",  top: "70%", delay: 0.3 },
          { size: 100, left: "88%",  top: "20%", delay: 0.8 },
          { size: 50,  left: "92%",  top: "55%", delay: 1.4 },
          { size: 65,  left: "75%",  top: "75%", delay: 0.5 },
          { size: 35,  left: "60%",  top: "12%", delay: 1.7 },
        ].map((b, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: b.size,
              height: b.size,
              left: b.left,
              top: b.top,
              borderRadius: "50%",
              background: dark
                ? "radial-gradient(circle at 35% 35%, rgba(120,170,255,0.28), rgba(41,121,255,0.07))"
                : "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.88), rgba(180,220,255,0.3))",
              border: dark
                ? "1.5px solid rgba(41,121,255,0.28)"
                : "1.5px solid rgba(41,121,255,0.18)",
            }}
            animate={{ y: [0, -18, 0], x: [0, i % 2 === 0 ? 10 : -10, 0] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: b.delay }}
          />
        ))}
      </div>
      )}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background: dark
            ? "linear-gradient(to bottom, rgba(26,26,46,0.65) 0%, rgba(26,26,46,0.2) 50%, transparent 80%)"
            : "linear-gradient(to bottom, rgba(200,230,248,0.55) 0%, rgba(200,230,248,0.15) 50%, transparent 80%)",
        }}
      />

      {/* Content */}
      <div className="relative w-full max-w-6xl mx-auto px-6 pt-24 grid md:grid-cols-2 gap-10 items-center" style={{ zIndex: 2 }}>

        {/* LEFT — text */}
        <TiltCard>
          <div>
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
              className="text-4xl md:text-6xl font-bold mb-3 leading-tight t-heading"
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
              className="text-base t-muted max-w-md mb-8 italic"
            >
              "Be more in love with your future than your past."
            </motion.p>

            {/* Social icons — above button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex items-center gap-3 mb-5"
            >
              {[
                { icon: <FiLinkedin size={18} />, href: "https://www.linkedin.com/in/sandhya-dhanapal", label: "LinkedIn", color: "#0077b5" },
                { icon: <FiGithub size={18} />,   href: "https://github.com/sandhya0430",              label: "GitHub",   color: "#333" },
                { icon: <FiMail size={18} />,     href: "mailto:dhanpalsandhya7@gmail.com",            label: "Email",    color: "#ea4335" },
              ].map(({ icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.2, boxShadow: `0 0 14px ${color}80`, color }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 glass rounded-full t-muted transition-all"
                >
                  {icon}
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              style={{ transform: "translateZ(10px)" }}
              className="flex items-center gap-4"
            >
              <motion.button
                onClick={() => navigate("projects")}
                whileHover={{ scale: 1.06, boxShadow: "0 0 30px rgba(41,121,255,0.5)" }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3 rounded-full bg-gradient-to-r from-blue-600 to-sky-400 text-white font-semibold text-sm flex items-center gap-2 shadow-lg"
              >
                View Projects <FiArrowRight size={15} />
              </motion.button>
            </motion.div>
          </div>
        </TiltCard>

        {/* RIGHT — photo with moving bubbles */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
          className="flex justify-center md:justify-end"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
            style={{ width: "360px", height: "440px" }}
          >
            {/* Photo */}
            <img
              src={heroImg}
              alt="Sandhya D"
              className="absolute inset-0 w-full h-full"
              style={{
                objectFit: "cover",
                objectPosition: "top",
                zIndex: 2,
                filter: "drop-shadow(0 10px 30px rgba(41,121,255,0.2))",
              }}
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
