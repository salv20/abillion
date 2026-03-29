"use client";
import { motion } from "framer-motion";

const features = [
  {
    id: "01",
    title: "Ethical Sourcing",
    description:
      "Direct partnerships with Enugu’s finest local farmers. We skip the middlemen to ensure your food never touches a warehouse shelf.",
  },
  {
    id: "02",
    title: "Zero Processing",
    description:
      "Nature doesn't need a lab. Our food is delivered in its most biological state—unrefined, untouched, and purely organic.",
  },
  {
    id: "03",
    title: "Health First",
    description:
      "Guided by the 'Food as Medicine' philosophy. We curate every item based on nutrient density and seasonal vitality.",
  },
];

const LandingFeatures = () => {
  return (
    <section
      id="About"
      className="relative mt-20 py-32 bg-[#03081F] text-white overflow-hidden scroll-mt-24"
    >
      {/* Background Decorative Text - Large & Faded */}
      <div className="absolute top-10 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.03]">
        <h2 className="text-[20vw] font-black leading-none whitespace-nowrap">
          NATURES BEST • PURE QUALITY •
        </h2>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Animated Border Line */}
              <div className="w-12 h-[2px] bg-[#FC8A06] mb-8 group-hover:w-full transition-all duration-700 ease-out" />

              <div className="relative">
                {/* Large Background Number */}
                <motion.span
                  whileHover={{ scale: 1.1, x: 10 }}
                  className="absolute -top-12 -left-4 text-8xl font-black text-white/[0.05] group-hover:text-[#FC8A06]/[0.1] transition-colors duration-500 pointer-events-none"
                >
                  {feature.id}
                </motion.span>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-[#FC8A06] font-mono font-bold tracking-tighter">
                      [{feature.id}]
                    </span>
                    <h4 className="text-3xl font-poppins font-bold tracking-tight">
                      {feature.title}
                    </h4>
                  </div>

                  <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Subtle hover detail */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="mt-6 flex items-center gap-2 text-[#FC8A06] text-xs font-bold uppercase tracking-[0.2em] cursor-pointer"
              >
                Learn More <span>→</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle Glow Effect */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#FC8A06]/10 rounded-full blur-[120px]" />
    </section>
  );
};

export default LandingFeatures;
