import { motion, useInView, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { FiMonitor, FiServer, FiCpu, FiSmartphone } from "react-icons/fi";

const services = [
  {
    icon: <FiMonitor size={40} />,
    title: "Frontend Development",
    color: "#2979ff",
    bg: "from-blue-600 to-sky-400",
    description:
      "Building responsive, performant web applications using React.js, Tailwind CSS, and modern JavaScript. Focused on clean UI, smooth UX, and pixel-perfect implementation.",
    points: ["React.js & JavaScript", "Responsive & accessible UI", "Performance optimization", "Component-based architecture"],
  },
  {
    icon: <FiServer size={40} />,
    title: "Full Stack Development",
    color: "#00bcd4",
    bg: "from-cyan-500 to-teal-400",
    description:
      "End-to-end web application development covering both frontend and backend. API integration, database design, and deployment-ready solutions.",
    points: ["Node.js & REST APIs", "PostgreSQL & MongoDB", "API integration", "End-to-end feature delivery"],
  },
  {
    icon: <FiCpu size={40} />,
    title: "AI Developer",
    color: "#7c4dff",
    bg: "from-violet-600 to-purple-400",
    description:
      "Building intelligent applications using AI tools and frameworks. Multi-agent systems, LLM integrations, and conversational interfaces powered by Google ADK and modern AI stacks.",
    points: ["Google ADK & multi-agent systems", "LLM observability & monitoring", "Conversational BI & chatbots", "Prompt engineering & RAG"],
  },
  {
    icon: <FiSmartphone size={40} />,
    title: "Data Visualization",
    color: "#ff6d00",
    bg: "from-orange-500 to-amber-400",
    description:
      "Transforming complex data into clear, interactive dashboards. Real-time monitoring, reporting UIs, and BI tools that drive informed decision-making.",
    points: ["Kibana & Elasticsearch dashboards", "Looker & Tableau migration", "Real-time data monitoring", "SQL-powered report automation"],
  },
];

function Card3D({ children, color }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 });

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 900 }}
      whileHover={{ scale: 1.04, boxShadow: `0 24px 48px ${color}35` }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-pad pt-24">
      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <p className="text-blue-500 text-sm font-semibold uppercase tracking-widest mb-2">What I Offer</p>
          <h2 className="text-3xl md:text-4xl font-bold t-heading">Services</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-blue-500 font-semibold text-lg mb-10 text-left"
        >
          What I Provide
        </motion.p>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: "1000px" }}>
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 120 }}
              className="h-full"
            >
              <Card3D color={s.color}>
                <div className="glass rounded-2xl p-6 flex flex-col h-full text-center">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.bg} flex items-center justify-center text-white mx-auto mb-5 shadow-lg`}
                    whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    style={{ transform: "translateZ(20px)" }}
                  >
                    {s.icon}
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="text-base font-bold mb-3 t-heading"
                    style={{ transform: "translateZ(12px)" }}
                  >
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="t-sub text-xs leading-relaxed mb-4 flex-1">
                    {s.description}
                  </p>

                  {/* Points */}
                  <ul className="space-y-1.5 text-left">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-xs t-sub">
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0"
                          style={{ background: s.color }}
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
