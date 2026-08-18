"use client";

import { motion } from "motion/react";
import { Check, Crown, Rocket, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";


const plans = [
  {
    icon: Sparkles,
    title: "Starter",
    price: "$0",
    desc: "Perfect for getting started",
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
    popular: false,
  },
  {
    icon: Rocket,
    title: "Growth",
    price: "$17",
    desc: "Best for active job seekers",
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
    popular: true,
  },
  {
    icon: Crown,
    title: "Premium",
    price: "$99",
    desc: "For serious career builders",
    features: [
      "Everything in Pro",
      "Multi-profile career portfolios",
      "Shared talent rooms",
      "Recruiter view (read-only)",
    ],
    popular: false,
  },
];

const Section3 = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <div className="bg-[#0a0a0a] text-white py-28 px-6 border-t border-white/5">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-label mb-5"
        >
          Pricing
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
        >
          Pay for the leverage,
          <br />
          not the listings
        </motion.h2>

        <div className="inline-flex glass-card p-1 rounded-full">
          <button
            onClick={() => setYearly(false)}
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition ${
              !yearly ? "bg-white text-black" : "text-gray-400 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setYearly(true)}
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition flex items-center gap-2 ${
              yearly ? "bg-white text-black" : "text-gray-400 hover:text-white"
            }`}
          >
            Yearly
            <span className="bg-linear-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-0.5 rounded-full">
              -25%
            </span>
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => {
          const price = yearly
            ? `$${Math.round(parseInt(plan.price.replace("$", "")) * 0.75)}`
            : plan.price;

          return (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "gradient-border scale-[1.02] shadow-2xl shadow-purple-500/10"
                  : "glass-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-linear-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-white/5 text-purple-400">
                  <plan.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">{plan.title}</h3>
              </div>

              <p className="text-gray-500 text-sm mb-6">{plan.desc}</p>

              <div className="mb-8">
                <span className="text-5xl font-bold text-gradient">{price}</span>
                <span className="text-gray-400">/month</span>
              </div>

              <ul className="space-y-3.5 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-gray-300 text-sm">
                    <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/plans"
                className={`block w-full py-3.5 rounded-xl font-semibold text-center transition ${
                  plan.popular
                    ? "btn-primary"
                    : "bg-white/5 hover:bg-white/10 border border-white/10"
                }`}
              >
                Choose This Plan
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Section3;
