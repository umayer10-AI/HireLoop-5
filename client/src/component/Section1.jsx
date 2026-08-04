"use client";

import { motion } from "motion/react";
import { ArrowRight, MapPin, Wallet, Wifi } from "lucide-react";
import Link from "next/link";

const jobs = [
  {
    title: "Frontend Developer",
    desc: "Build beautiful, responsive interfaces with React and modern tooling.",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  },
  {
    title: "Backend Developer",
    desc: "Build scalable APIs and backend systems for modern applications.",
    location: "London, UK",
    type: "Remote",
    salary: "€30–€50/hour",
  },
  {
    title: "UI/UX Designer",
    desc: "Design clean and modern interfaces with better user experience.",
    location: "Berlin, Germany",
    type: "Onsite",
    salary: "€20–€35/hour",
  },
  {
    title: "Full Stack Developer",
    desc: "Work on both frontend and backend technologies seamlessly.",
    location: "Toronto, Canada",
    type: "Hybrid",
    salary: "€40–€60/hour",
  },
  {
    title: "DevOps Engineer",
    desc: "Manage CI/CD pipelines and cloud infrastructure efficiently.",
    location: "Sydney, Australia",
    type: "Remote",
    salary: "€45–€70/hour",
  },
  {
    title: "Mobile App Developer",
    desc: "Create high-performance Android and iOS applications.",
    location: "Dubai, UAE",
    type: "Hybrid",
    salary: "€35–€55/hour",
  },
];

const Section1 = () => {
  return (
    <div className="relative z-10 text-white pt-20 pb-28 px-6">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-label mb-5"
        >
          Smart Job Discovery
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold leading-tight"
        >
          The roles you&apos;d never
          <br />
          find by searching
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {jobs.map((job, index) => (
          <motion.div
            key={job.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07 }}
            className="group glass-card p-7 rounded-2xl hover:-translate-y-1.5 transition-all duration-300"
          >
            <div className="w-10 h-1 rounded-full bg-linear-to-r from-purple-500 to-pink-500 mb-5 group-hover:w-16 transition-all duration-300" />

            <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-all">
              {job.title}
            </h3>

            <p className="text-gray-400 mb-6 text-sm leading-relaxed">{job.desc}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-white/5 text-gray-300 px-3 py-1.5 rounded-full text-xs border border-white/5">
                <MapPin className="w-3 h-3 text-purple-400" />
                {job.location}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/5 text-gray-300 px-3 py-1.5 rounded-full text-xs border border-white/5">
                <Wifi className="w-3 h-3 text-pink-400" />
                {job.type}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/5 text-gray-300 px-3 py-1.5 rounded-full text-xs border border-white/5">
                <Wallet className="w-3 h-3 text-indigo-400" />
                {job.salary}
              </span>
            </div>

            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-pink-400 transition group/btn"
            >
              Apply Now
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-14">
        <Link
          href="/jobs"
          className="inline-flex items-center gap-2 bg-white text-black font-semibold px-8 py-3.5 rounded-full hover:bg-gray-100 hover:shadow-lg hover:shadow-white/10 transition-all"
        >
          View all openings
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default Section1;
