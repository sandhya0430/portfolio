import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { FiGithub, FiExternalLink, FiBriefcase } from "react-icons/fi";
import { useRef } from "react";

const typeStyles = {
  work:     { label: "Work",     cls: "bg-cyan-600 text-white" },
  personal: { label: "Personal", cls: "bg-blue-600 text-white" },
};

function Card3D({ children }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleTouch = (e) => {
    const touch = e.touches[0];
    const rect = ref.current?.getBoundingClientRect();
    if (!rect || !touch) return;
    x.set((touch.clientX - rect.left) / rect.width - 0.5);
    y.set((touch.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      onTouchMove={handleTouch}
      onTouchEnd={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 900 }}
      whileHover={{ scale: 1.03, boxShadow: "0 24px 48px rgba(41,121,255,0.25)" }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

export default function ProjectCard({ project }) {
  const tag = typeStyles[project.type];

  return (
    <Card3D>
      <div className="glass rounded-2xl overflow-hidden flex flex-col h-full group">
        {/* Image */}
        <div className="relative overflow-hidden h-44 flex-shrink-0">
          {project.image ? (
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5 }}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, rgba(41,121,255,0.25), rgba(0,212,255,0.15))" }}>
              <motion.div
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <FiBriefcase size={40} className="text-blue-400 opacity-60" />
              </motion.div>
            </div>
          )}
          <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full shadow ${tag.cls}`}>
            {tag.label}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1" style={{ transform: "translateZ(10px)" }}>
          <h3 className="text-base font-bold t-heading mb-1.5">{project.title}</h3>
          <p className="t-sub text-xs leading-relaxed mb-3 flex-1">{project.description}</p>

          <ul className="space-y-1 mb-4">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-xs t-sub">
                <span className="cert-dot w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.map((t) => (
              <motion.span
                key={t}
                whileHover={{ scale: 1.1, y: -2 }}
                className="tag-pill px-2 py-0.5 rounded text-xs font-medium cursor-default"
              >
                {t}
              </motion.span>
            ))}
          </div>

          {(project.live || project.github) && (
            <div className="flex gap-3 mt-auto">
              {project.live && (
                <motion.a
                  href={project.live} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, boxShadow: "0 8px 20px rgba(41,121,255,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-sky-400 text-white text-xs font-semibold"
                >
                  <FiExternalLink size={13} /> Live Demo
                </motion.a>
              )}
              {project.github && (
                <motion.a
                  href={project.github} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="github-btn flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold transition-all"
                >
                  <FiGithub size={13} /> GitHub
                </motion.a>
              )}
            </div>
          )}
        </div>
      </div>
    </Card3D>
  );
}
