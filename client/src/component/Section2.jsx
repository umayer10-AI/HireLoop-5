"use client";

import { motion } from "motion/react";
import {
  Bookmark,
  Building2,
  MousePointerClick,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import Marquee from "react-fast-marquee";

const features = [
  { icon: Search, title: "Smart Search", desc: "Find your ideal job with advanced filters.", color: "text-purple-400" },
  { icon: TrendingUp, title: "Salary Insights", desc: "Get real salary data to negotiate confidently.", color: "text-pink-400" },
  { icon: Building2, title: "Top Companies", desc: "Apply to vetted companies that are hiring.", color: "text-indigo-400" },
  { icon: Bookmark, title: "Saved Jobs", desc: "Manage apps & favorites on your dashboard.", color: "text-amber-400" },
  { icon: MousePointerClick, title: "One-Click Apply", desc: "Simplify your job applications instantly.", color: "text-emerald-400" },
  { icon: Sparkles, title: "Resume Builder", desc: "Create professional resumes with modern templates.", color: "text-cyan-400" },
  { icon: Target, title: "Skill Matching", desc: "Discover jobs that match your skills.", color: "text-rose-400" },
  { icon: Zap, title: "Career Growth", desc: "Boost your career with interview tips.", color: "text-violet-400" },
];

const Section2 = () => {
  return (
    <div className="bg-[#0a0a0a] text-white py-28 px-6 border-t border-white/5">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-label mb-5"
        >
          Features
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          Everything you need
          <br />
          to succeed
        </motion.h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        <Marquee speed={40} gradient={false}>
          <div className="flex items-center py-2">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex items-center gap-4 mr-6 glass-card p-5 rounded-2xl min-w-[280px] floating-card"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className={`p-3.5 bg-white/5 border border-white/5 rounded-xl ${feature.color}`}>
                  <feature.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-0.5">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Section2;
