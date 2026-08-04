"use client";

import { motion } from "motion/react";
import { Briefcase, Building2, Star, Users } from "lucide-react";

const stats = [
  { title: "Active Jobs", value: "50K+", icon: Briefcase, color: "text-purple-400" },
  { title: "Companies", value: "12K+", icon: Building2, color: "text-pink-400" },
  { title: "Job Seekers", value: "2M+", icon: Users, color: "text-indigo-400" },
  { title: "Satisfaction Rate", value: "97%", icon: Star, color: "text-amber-400" },
];

const Banner2 = () => {
  return (
    <section className="relative z-10 py-12 px-4 lg:mt-8 pb-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-400 mb-14 leading-snug"
        >
          Assisting over{" "}
          <span className="text-gradient font-bold">15,000 job seekers</span>
          <br />
          find their dream positions.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="gradient-border p-8 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className={`p-3 rounded-xl bg-white/5 mb-5 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <h3 className="text-4xl font-bold mb-2 text-gradient">{stat.value}</h3>
              <p className="text-gray-400 text-sm">{stat.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner2;
