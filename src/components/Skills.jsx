import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillset = [
  { label: "JavaScript", color: "#f7df1e", bg: "#1a1a00", text: "JS" },
  { label: "React.js",   color: "#61dafb", bg: "#001a1f", text: "⚛" },
  { label: "Node.js",    color: "#68a063", bg: "#001a00", text: "N" },
  { label: "Python",     color: "#3776ab", bg: "#00001a", text: "Py" },
  { label: "HTML5",      color: "#e34f26", bg: "#1a0500", text: "H5" },
  { label: "CSS3",       color: "#1572b6", bg: "#00051a", text: "CSS" },
  { label: "Tailwind",   color: "#38bdf8", bg: "#001219", text: "TW" },
  { label: "Bootstrap",  color: "#7952b3", bg: "#0d0019", text: "BS" },
  { label: "PostgreSQL", color: "#336791", bg: "#000d1a", text: "PG" },
  { label: "MongoDB",    color: "#47a248", bg: "#001a00", text: "MDB" },
  { label: "SQL",        color: "#f59e0b", bg: "#1a0f00", text: "SQL" },
  { label: "Elasticsearch", color: "#f04e98", bg: "#1a0010", text: "ES" },
  { label: "Material UI",color: "#007fff", bg: "#00101a", text: "MUI" },
];

const tools = [
  { label: "GitHub Actions", color: "#2088ff", bg: "#00051a", text: "GH" },
  { label: "GitLab",         color: "#fc6d26", bg: "#1a0800", text: "GL" },
  { label: "VS Code",        color: "#007acc", bg: "#00101a", text: "VS" },
  { label: "Postman",        color: "#ff6c37", bg: "#1a0800", text: "PM" },
  { label: "Google ADK",     color: "#4285f4", bg: "#00051a", text: "ADK" },
  { label: "Claude AI",      color: "#a78bfa", bg: "#0d0019", text: "AI" },
  { label: "Cursor IDE",     color: "#00d4ff", bg: "#001a1f", text: "CUR" },
  { label: "Lovable",        color: "#f472b6", bg: "#1a0010", text: "♥" },
  { label: "RAG",            color: "#34d399", bg: "#001a0d", text: "RAG" },
  { label: "Kiro",           color: "#a78bfa", bg: "#0d0019", text: "K" },
];

function IconGrid({ items, delay = 0 }) {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-5 gap-3" style={{ perspective: "800px" }}>
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, rotateY: -60, scale: 0.7 }}
          whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + i * 0.06, type: "spring", stiffness: 120 }}
          whileHover={{
            scale: 1.15,
            rotateY: 12,
            rotateX: -8,
            z: 40,
            boxShadow: `0 12px 32px ${item.color}40`,
          }}
          style={{ transformStyle: "preserve-3d" }}
          className="glass rounded-xl p-4 flex flex-col items-center justify-center gap-2 cursor-default"
        >
          <motion.div
            className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-sm"
            style={{ background: item.bg, color: item.color, border: `1px solid ${item.color}40`, transform: "translateZ(8px)" }}
            whileHover={{ scale: 1.1 }}
          >
            {item.text}
          </motion.div>
          <span className="t-muted text-xs text-center leading-tight">{item.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-pad pt-24">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-purple-500 text-sm font-semibold uppercase tracking-widest mb-2">What I Know</p>
          <h2 className="text-3xl md:text-4xl font-bold t-heading">
            Professional <span className="gradient-text">Skillset</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <IconGrid items={skillset} delay={0.1} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold t-heading text-center mb-6">
            <span className="gradient-text">Tools</span> I Use
          </h3>
          <IconGrid items={tools} delay={0.3} />
        </motion.div>
      </div>
    </section>
  );
}
