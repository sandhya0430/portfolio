import { motion } from "framer-motion";

// Auto-floating 3D card for mobile — no mouse needed
export function Float3D({ children, delay = 0, intensity = 1 }) {
  return (
    <motion.div
      animate={{
        rotateX: [0, 4 * intensity, 0, -4 * intensity, 0],
        rotateY: [0, -5 * intensity, 0, 5 * intensity, 0],
        y: [0, -6, 0, -3, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      style={{ transformStyle: "preserve-3d", perspective: 800 }}
    >
      {children}
    </motion.div>
  );
}

// Stagger float for grid items
export function FloatItem({ children, index }) {
  return (
    <motion.div
      animate={{
        y: [0, index % 2 === 0 ? -5 : -8, 0],
        rotateZ: [0, index % 3 === 0 ? 1 : -1, 0],
      }}
      transition={{
        duration: 3 + (index % 3) * 0.7,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.15,
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}
