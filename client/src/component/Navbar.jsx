"use client";

import { motion } from "motion/react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Dropdown, Label } from "@heroui/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const pathname = usePathname();

  const navLinks = [
    { name: "Browse Jobs", path: "/jobs" },
    { name: "Company", path: "/company" },
    { name: "Pricing", path: "/plans" },
  ];

  if (user?.email) {
    const dashPath =
      user?.role === "seeker"
        ? "/dashboard/seeker"
        : user?.role === "admin"
          ? "/dashboard/admin"
          : "/dashboard/recruiter";
    navLinks.push({ name: "Dashboard", path: dashPath });
  }

  const handleLogout = async () => {
    await authClient.signOut();
    toast.error("User Logout", {
      style: { borderRadius: "10px", background: "#333", color: "#fff" },
    });
  };

  const linkClass = (path) =>
    pathname === path
      ? "bg-linear-to-r from-purple-500 to-pink-500 text-white px-4 py-1.5 rounded-xl font-semibold"
      : "text-gray-300 hover:text-white font-medium transition";

  return (
    <nav className="w-full px-4 py-4 lg:sticky lg:top-0 lg:z-50">
      <div className="lg:max-w-[85%] mx-auto">
        <div className="flex items-center justify-between glass-card rounded-2xl px-4 md:px-6 py-3">
          <Link href="/" className="flex items-center gap-2.5 group">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
              className="w-10 h-10 font-bold rounded-xl bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-xl shadow-lg shadow-purple-500/25"
            >
              H
            </motion.div>
            <h2 className="text-xl md:text-2xl text-gradient font-bold leading-none">
              HireLoop
            </h2>
          </Link>

          <div className="hidden md:flex items-center gap-7 text-gray-300">
            {navLinks.map((item) => (
              <Link key={item.path} href={item.path} className={linkClass(item.path)}>
                {item.name}
              </Link>
            ))}

            <div className="flex items-center gap-5 border-l border-white/10 pl-6">
              {user ? (
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-300">
                    Hi, <span className="text-white font-medium">{user?.name?.split(" ")[0]}</span>
                  </span>
                  <Dropdown triggerMode="hover">
                    <Dropdown.Trigger>
                      <Avatar size="sm" aria-label="Menu" className="cursor-pointer ring-2 ring-purple-500/30">
                        <Avatar.Image alt={user?.name} src={user?.image} />
                        <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
                      </Avatar>
                    </Dropdown.Trigger>
                    <Dropdown.Popover>
                      <Dropdown.Menu>
                        <Dropdown.Item id="profile">
                          <Label>Profile</Label>
                        </Dropdown.Item>
                        <Dropdown.Item id="logout" variant="danger" onClick={handleLogout}>
                          <Label>Log Out</Label>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown.Popover>
                  </Dropdown>
                </div>
              ) : (
                <Link href="/signin" className={linkClass("/signin")}>
                  Sign In
                </Link>
              )}

              <Link
                href="/signup"
                className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:bg-gray-100 hover:shadow-lg hover:shadow-white/10 transition-all text-sm"
              >
                Get Started
              </Link>
            </div>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-1">
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-3 glass-card rounded-2xl p-5 space-y-4 text-gray-300"
          >
            {navLinks.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setOpen(false)}
                className={`block ${linkClass(item.path)}`}
              >
                {item.name}
              </Link>
            ))}

            {!user && (
              <Link href="/signin" onClick={() => setOpen(false)} className={`block ${linkClass("/signin")}`}>
                Sign In
              </Link>
            )}

            <Link
              href="/signup"
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-white text-black py-2.5 rounded-xl font-semibold"
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
