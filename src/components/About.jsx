import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { certifications } from "../data/portfolio";
import { FiCheckCircle, FiAward, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import imgPortrait1 from "../assets/Sandhya.jpeg";
import imgPortrait2 from "../assets/sandhya1.jpeg?url";
import imgLecture from "../assets/Sandhya2.jpeg";

const images = [imgPortrait1, imgPortrait2, imgLecture];

function Carousel() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((p) => (p - 1 + images.length) % images.length);
  const next = () => setCurrent((p) => (p + 1) % images.length);

  const isLandscape = current === 2; // imgLecture is landscape

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden shadow-xl transition-all duration-500"
      style={{ aspectRatio: isLandscape ? "16/9" : "3/4", background: "#0f0f1a" }}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`Sandhya ${current + 1}`}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "contain" }}
        />
      </AnimatePresence>

      {/* Arrows */}
      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition z-10">
        <FiChevronLeft size={18} />
      </button>
      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition z-10">
        <FiChevronRight size={18} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-white scale-125" : "bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
}

const bullets = [
  "Full-Stack Developer with 3+ years of experience in React.js and JavaScript",
  "Strong in API integration, backend development, and end-to-end feature delivery",
  "Experienced with AI tools like Cursor, Claude, and Lovable",
  "Delivered a guest lecture at an engineering university, sharing industry insights and real-world experience",
  "Mentored juniors for placements and guided them with real-world work experience",
  "Enjoy playing games and writing book reviews on blogs outside of coding",
];


export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-pad pt-24">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-purple-500 text-sm font-semibold uppercase tracking-widest mb-2">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold t-heading">Who I Am</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-start">

          {/* LEFT — bullets + certifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 flex flex-col gap-5"
          >
            {/* Bullet points */}
            <div className="glass rounded-2xl p-6">
              <ul className="space-y-3">
                {bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <FiCheckCircle size={16} className="text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="t-sub text-sm leading-relaxed">{b}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div className="glass rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <FiAward size={16} className="text-amber-400" />
                <p className="text-xs font-semibold uppercase tracking-wider t-muted">Certifications</p>
              </div>
              {certifications.map((c) => (
                <div key={c} className="flex items-center gap-2 t-sub text-sm mb-2">
                  <span className="cert-dot w-1.5 h-1.5 rounded-full flex-shrink-0" />
                  {c}
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Carousel />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
