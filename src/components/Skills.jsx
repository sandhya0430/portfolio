import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FloatItem } from "./Mobile3D";

const skillset = [
  { label: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { label: "React.js",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { label: "Node.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { label: "Python",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { label: "HTML5",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { label: "CSS3",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { label: "Tailwind",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { label: "Bootstrap",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { label: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { label: "MongoDB",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { label: "SQL",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { label: "Elasticsearch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg" },
  { label: "Material UI",icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
];

const tools = [
  { label: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { label: "GitLab",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
  { label: "VS Code",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { label: "Postman",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { label: "Google ADK",     text: "ADK", color: "#4285f4", bg: "#00051a" },
  { label: "Claude",  icon: "https://cdn.simpleicons.org/anthropic/d4a27f", text: null, color: "#d4a27f", bg: "#1a0f00" },
  { label: "Cursor",  icon: "https://cdn.simpleicons.org/cursor/00d4ff",    text: null, color: "#00d4ff", bg: "#001a1f" },
  { label: "Lovable",        text: "♥",   color: "#f472b6", bg: "#1a0010" },
  { label: "RAG",            text: "RAG", color: "#34d399", bg: "#001a0d" },
  { label: "Kiro",           text: "K",   color: "#a78bfa", bg: "#0d0019" },
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
            boxShadow: `0 12px 32px rgba(41,121,255,0.3)`,
          }}
          style={{ transformStyle: "preserve-3d" }}
          className="glass rounded-xl p-4 flex flex-col items-center justify-center gap-2 cursor-default"
        >
          {item.icon ? (
            <motion.img
              src={item.icon}
              alt={item.label}
              className="w-12 h-12"
              style={{ transform: "translateZ(8px)" }}
              whileHover={{ scale: 1.1 }}
            />          ) : (
            <motion.div
              className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-sm"
              style={{ background: item.bg, color: item.color, border: `1px solid ${item.color}40`, transform: "translateZ(8px)" }}
              whileHover={{ scale: 1.1 }}
            >
              {item.text}
            </motion.div>
          )}
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
          <p className="text-blue-500 text-sm font-semibold uppercase tracking-widest mb-2">What I Know</p>
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
