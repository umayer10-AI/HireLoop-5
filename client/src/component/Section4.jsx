"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Section4 = () => {
  return (
    <div className="cta-bg relative text-white py-32 md:py-40 px-6">
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Your next role is
          <br />
          <span className="text-gradient">already looking for you</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed"
        >
          Build a profile in three minutes. The matches start arriving tomorrow morning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            href="/signup"
            className="inline-flex items-center justify-center gap-2 bg-white text-black font-semibold px-8 py-3.5 rounded-xl hover:bg-gray-100 hover:shadow-lg hover:shadow-white/10 transition-all"
          >
            Create a free account
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/plans"
            className="inline-flex items-center justify-center gap-2 glass-card text-white font-semibold px-8 py-3.5 rounded-xl hover:border-purple-500/40 transition"
          >
            View pricing
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Section4;
