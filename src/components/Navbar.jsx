import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiMoon, FiSun, FiDownload } from "react-icons/fi";

const links = ["About", "Skills", "Services", "Projects", "Experience"];

export default function Navbar({ dark, setDark, active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setActive(id.toLowerCase());
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-bg shadow-lg" : "bg-transparent"}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo with 3D hover */}
        <motion.button
          onClick={() => go("hero")}
          whileHover={{ scale: 1.1, rotateY: 8, rotateX: -4 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{ transformStyle: "preserve-3d", perspective: 400 }}
          className="gradient-text text-2xl font-black tracking-tight"
        >
          S.D
        </motion.button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l, i) => {
            const id = l.toLowerCase();
            const isActive = active === id;
            return (
              <motion.button
                key={l}
                onClick={() => go(l)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, type: "spring", stiffness: 200 }}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive ? "text-white" : "nav-link"
                }`}
              >
                {/* Active background */}
                {isActive && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-sky-400"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {l}
                {/* Hover underline */}
                {!isActive && (
                  <motion.span
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-sky-400"
                    initial={{ width: 0 }}
                    whileHover={{ width: "60%" }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.button>
            );
          })}

          {/* Resume */}
          <motion.a
            href="/Sandhy_Resume.pdf"
            download="Sandhya_Resume.pdf"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            whileHover={{ y: -3, scale: 1.05, boxShadow: "0 8px 20px rgba(41,121,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="ml-2 flex items-center gap-1.5 px-4 py-2 rounded-full glass nav-link border text-sm font-semibold"
            style={{ borderColor: "rgba(41,121,255,0.3)" }}
          >
            <motion.span
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <FiDownload size={14} />
            </motion.span>
            Resume
          </motion.a>

          {/* Theme toggle */}
          <motion.button
            onClick={() => setDark(!dark)}
            whileHover={{ rotate: 180, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="toggle-btn ml-1 p-2 rounded-full"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={dark ? "sun" : "moon"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {dark ? <FiSun size={15} /> : <FiMoon size={15} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <motion.button
            onClick={() => setDark(!dark)}
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
            className="toggle-btn p-2 rounded-full"
            aria-label="Toggle theme"
          >
            {dark ? <FiSun size={16} /> : <FiMoon size={16} />}
          </motion.button>
          <motion.button
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.9 }}
            className="nav-link"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={open ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {open ? <FiX size={22} /> : <FiMenu size={22} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            className="md:hidden nav-bg exp-divider border-t overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-2">
              {links.map((l, i) => {
                const isActive = active === l.toLowerCase();
                return (
                  <motion.button
                    key={l}
                    onClick={() => go(l)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    whileHover={{ x: 6 }}
                    className={`text-left px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      isActive ? "bg-gradient-to-r from-blue-600 to-sky-400 text-white" : "nav-link"
                    }`}
                  >
                    {l}
                  </motion.button>
                );
              })}
              <motion.a
                href="/Sandhy_Resume.pdf"
                download="Sandhya_Resume.pdf"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl glass nav-link border text-sm font-semibold"
                style={{ borderColor: "rgba(41,121,255,0.3)" }}
              >
                <FiDownload size={14} /> Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
