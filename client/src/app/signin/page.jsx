"use client";

import { authClient } from "@/lib/auth-client";
import { motion } from "motion/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const SignInPage = () => {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (v) => {
    const { data, error } = await authClient.signIn.email({
      email: v.email,
      password: v.password,
      rememberMe: true,
    });

    if (data) {
      toast.success("Login Successfully", {
        style: { borderRadius: "10px", background: "#333", color: "#fff" },
      });
      router.push(redirectTo);
    }
    if (error) {
      toast(error.message, {
        style: { borderRadius: "10px", background: "#333", color: "#fff" },
      });
    }
  };

  const handleGoogle = async () => {
    await authClient.signIn.social({ provider: "google" });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.15),transparent_60%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md gradient-border rounded-3xl p-8 shadow-2xl shadow-purple-500/10"
      >
        <div className="text-center mb-8">
          <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-xl font-bold">
            H
          </div>
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
          <p className="text-gray-400 mt-2">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-300 mb-2">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10 transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">Password</label>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Enter your password"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10 transition"
            />
          </div>

          <button type="submit" className="w-full btn-primary py-3.5">
            Sign In
          </button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <button
          onClick={handleGoogle}
          className="w-full flex items-center justify-center gap-3 bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
        >
          <FcGoogle size={20} />
          Continue with Google
        </button>

        <p className="text-center text-gray-400 text-sm mt-6">
          Don&apos;t have an account?{" "}
          <Link
            href={`/signup?redirect=${redirectTo}`}
            className="text-purple-400 font-semibold hover:text-pink-400 transition"
          >
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignInPage;
