"use client";

import { motion } from "motion/react";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const footerLinks = {
  Product: [
    { label: "Job discovery", href: "/jobs" },
    { label: "Companies", href: "/company" },
    { label: "Pricing", href: "/plans" },
  ],
  Navigation: [
    { label: "Help center", href: "#" },
    { label: "Career library", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Resources: [
    { label: "Brand Guideline", href: "#" },
    { label: "Newsroom", href: "#" },
  ],
};

const socials = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaXTwitter, href: "#", label: "Twitter" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 pt-20 pb-10 px-6 md:px-16 border-t border-white/5">
      <div className="max-w-[90%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2.5 mb-5">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
              className="w-9 h-9 font-bold rounded-xl bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-lg"
            >
              H
            </motion.div>
            <span className="text-white font-bold text-xl">HireLoop</span>
          </div>

          <p className="max-w-xs leading-relaxed text-sm">
            The AI-native career platform. Built for people who take their work seriously.
          </p>

          <div className="flex gap-3 mt-6">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 bg-white/5 border border-white/5 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/10 hover:border-purple-500/30 transition"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className="flex lg:justify-center">
            <div>
              <h3 className="text-gradient font-bold mb-4 text-sm">{title}</h3>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="text-sm hover:text-white transition">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-[90%] mx-auto mt-14 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-sm gap-4">
        <p>© {new Date().getFullYear()} HireLoop — All rights reserved</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition">Terms & Policy</a>
          <a href="#" className="hover:text-white transition">Privacy Guideline</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
