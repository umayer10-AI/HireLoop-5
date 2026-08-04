"use client";

import { motion } from "motion/react";
import { Briefcase, MapPin, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const trendingTags = ["Product Designer", "AI Engineering", "DevOps Engineer"];

const Banner1 = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query) params.set("search", query);
    if (location) params.set("location", location);
    router.push(`/jobs?${params.toString()}`);
  };

  return (
    <section className="relative z-10 text-white pt-16 pb-24 lg:pb-32 px-4">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm text-gray-300 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500" />
          </span>
          <Briefcase className="w-4 h-4 text-purple-400" />
          50,000+ new jobs this month
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.1]"
        >
          Find Your{" "}
          <span className="text-gradient">Dream Job</span>
          <br />
          Today
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed"
        >
          HireLoop connects top talent with world-class companies. Browse thousands
          of curated opportunities and land your next role — faster.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSearch}
          className="w-full search-bar glass-card p-2 rounded-2xl flex flex-col md:flex-row items-stretch md:items-center gap-2 shadow-2xl"
        >
          <div className="flex items-center flex-1 px-3 gap-2">
            <Search className="w-5 h-5 text-gray-500 shrink-0 hidden md:block" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Job title, skill or company"
              className="w-full bg-transparent py-3 outline-none text-white placeholder-gray-500"
            />
          </div>
          <div className="w-full md:w-px h-px md:h-8 bg-gray-700/60" />
          <div className="flex items-center flex-1 px-3 gap-2">
            <MapPin className="w-5 h-5 text-gray-500 shrink-0 hidden md:block" />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location or Remote"
              className="w-full bg-transparent py-3 outline-none text-white placeholder-gray-500"
            />
          </div>
          <button
            type="submit"
            className="btn-primary flex items-center justify-center gap-2 px-8 py-3.5 md:py-3 rounded-xl"
          >
            <Search className="w-5 h-5" />
            <span className="md:hidden">Search Jobs</span>
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-wrap justify-center items-center gap-3 text-sm text-gray-400"
        >
          <span>Trending:</span>
          {trendingTags.map((tag) => (
            <Link
              key={tag}
              href={`/jobs?search=${encodeURIComponent(tag)}`}
              className="glass-card px-4 py-1.5 rounded-full hover:text-white hover:border-purple-500/40 transition"
            >
              {tag}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Banner1;
