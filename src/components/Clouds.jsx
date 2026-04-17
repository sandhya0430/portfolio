import { motion } from "framer-motion";

function CloudShape({ fill, opacity }) {
  return (
    <g fill={fill} opacity={opacity}>
      <ellipse cx="100" cy="80" rx="100" ry="55" />
      <ellipse cx="60"  cy="65" rx="65"  ry="48" />
      <ellipse cx="155" cy="68" rx="72"  ry="44" />
      <ellipse cx="210" cy="78" rx="60"  ry="40" />
    </g>
  );
}

export default function Clouds({ dark }) {
  const c1 = dark ? "#252540" : "#ffffff";
  const c2 = dark ? "#1e1e38" : "#ddeeff";
  const c3 = dark ? "#181830" : "#c8e6f8";

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">

      {/* Layer 3 — back */}
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: "50%" }}
        animate={{ x: [0, 40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 1000 200" preserveAspectRatio="none"
          className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <g fill={c3} opacity="0.6">
            <ellipse cx="80"  cy="190" rx="130" ry="65" />
            <ellipse cx="50"  cy="170" rx="90"  ry="55" />
            <ellipse cx="160" cy="180" rx="110" ry="58" />
            <ellipse cx="300" cy="192" rx="140" ry="68" />
            <ellipse cx="270" cy="172" rx="95"  ry="56" />
            <ellipse cx="400" cy="182" rx="115" ry="60" />
            <ellipse cx="520" cy="190" rx="135" ry="66" />
            <ellipse cx="490" cy="170" rx="92"  ry="54" />
            <ellipse cx="620" cy="180" rx="112" ry="59" />
            <ellipse cx="740" cy="192" rx="138" ry="67" />
            <ellipse cx="710" cy="172" rx="94"  ry="55" />
            <ellipse cx="840" cy="182" rx="114" ry="60" />
            <ellipse cx="960" cy="190" rx="132" ry="65" />
            <ellipse cx="930" cy="170" rx="90"  ry="53" />
            <ellipse cx="1060" cy="180" rx="110" ry="58" />
          </g>
        </svg>
      </motion.div>

      {/* Layer 2 — mid */}
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: "45%" }}
        animate={{ x: [0, -35, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 1000 180" preserveAspectRatio="none"
          className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <g fill={c2} opacity="0.8">
            <ellipse cx="0"   cy="175" rx="120" ry="70" />
            <ellipse cx="80"  cy="150" rx="85"  ry="58" />
            <ellipse cx="180" cy="168" rx="105" ry="64" />
            <ellipse cx="240" cy="178" rx="130" ry="72" />
            <ellipse cx="200" cy="155" rx="88"  ry="60" />
            <ellipse cx="340" cy="165" rx="108" ry="65" />
            <ellipse cx="460" cy="176" rx="128" ry="71" />
            <ellipse cx="430" cy="153" rx="86"  ry="59" />
            <ellipse cx="560" cy="163" rx="106" ry="64" />
            <ellipse cx="680" cy="175" rx="132" ry="72" />
            <ellipse cx="650" cy="152" rx="89"  ry="60" />
            <ellipse cx="780" cy="162" rx="109" ry="65" />
            <ellipse cx="900" cy="174" rx="130" ry="71" />
            <ellipse cx="870" cy="151" rx="87"  ry="59" />
            <ellipse cx="1000" cy="161" rx="107" ry="64" />
          </g>
        </svg>
      </motion.div>

      {/* Layer 1 — front */}
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: "40%" }}
        animate={{ x: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 1000 160" preserveAspectRatio="none"
          className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <g fill={c1}>
            <ellipse cx="0"   cy="155" rx="130" ry="75" />
            <ellipse cx="90"  cy="128" rx="92"  ry="64" />
            <ellipse cx="200" cy="148" rx="115" ry="70" />
            <ellipse cx="150" cy="112" rx="78"  ry="56" />
            <ellipse cx="310" cy="156" rx="128" ry="74" />
            <ellipse cx="270" cy="130" rx="90"  ry="63" />
            <ellipse cx="400" cy="146" rx="113" ry="69" />
            <ellipse cx="500" cy="154" rx="126" ry="73" />
            <ellipse cx="460" cy="128" rx="88"  ry="62" />
            <ellipse cx="590" cy="144" rx="111" ry="68" />
            <ellipse cx="690" cy="155" rx="129" ry="74" />
            <ellipse cx="650" cy="129" rx="91"  ry="63" />
            <ellipse cx="780" cy="145" rx="114" ry="69" />
            <ellipse cx="880" cy="153" rx="127" ry="73" />
            <ellipse cx="840" cy="127" rx="89"  ry="62" />
            <ellipse cx="970" cy="143" rx="112" ry="68" />
          </g>
        </svg>
      </motion.div>

    </div>
  );
}
