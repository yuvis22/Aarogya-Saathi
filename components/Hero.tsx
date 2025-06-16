"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Shield,
  Clock,
  Pill,
  Star,
  Play,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { number: "50,000+", label: "Happy Customers", icon: Star },
    { number: "99.9%", label: "On-Time Delivery", icon: Clock },
    { number: "24/7", label: "Support Available", icon: Shield },
    { number: "100%", label: "Medication Safety", icon: Pill },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <section
      id="home"
      className="pt-24 min-h-screen bg-gradient-to-br from-white to-teal-50 relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(0,0,0,0.05) 2px, transparent 0),
                           radial-gradient(circle at 75px 75px, rgba(0,0,0,0.05) 2px, transparent 0)`,
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-900 space-y-10"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-teal-100/70 rounded-full px-5 py-2 border border-teal-200 text-teal-800 font-semibold"
            >
              <CheckCircle className="w-4 h-4 text-teal-600 fill-current" />
              <span className="text-sm">Trusted by 50,000+ families</span>
            </motion.div>

            <div className="space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl md:text-7xl font-extrabold leading-tight"
              >
                Your Health, Our Priority:
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 block mt-2">
                  Medicine Delivered Simply.
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl text-gray-700 leading-relaxed"
              >
                Revolutionary pack-by-dose medicine delivery with intelligent
                reminders. Your health companion for perfect medication
                adherence.
              </motion.p>
            </div>

            {/* Rotating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg"
            >
              <div className="flex items-center justify-center space-x-4">
                {stats[currentStat].icon && (
                  <div className="text-teal-600">
                    {React.createElement(stats[currentStat].icon, {
                      className: "w-8 h-8",
                    })}
                  </div>
                )}
                <div>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-2 transition-all duration-500">
                    {stats[currentStat].number}
                  </div>
                  <div className="text-gray-700 font-medium transition-all duration-500">
                    {stats[currentStat].label}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {[
                {
                  icon: Shield,
                  title: "Safe & Secure",
                  subtitle: "FDA Approved",
                },
                {
                  icon: Clock,
                  title: "Timely Delivery",
                  subtitle: "99.9% On-Time",
                },
                {
                  icon: Pill,
                  title: "Dose Perfect",
                  subtitle: "Smart Packing",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all"
                >
                  <benefit.icon className="w-6 h-6 text-teal-600" />
                  <div>
                    <div className="font-medium text-gray-800">
                      {benefit.title}
                    </div>
                    <div className="text-sm text-gray-600">
                      {benefit.subtitle}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold rounded-xl px-8 py-6 shadow-lg"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-teal-500 text-teal-600 hover:bg-teal-50 hover:text-teal-700 rounded-xl px-8 py-6 shadow-md"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="flex items-center space-x-8"
            >
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-3">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-md"
                    >
                      <Image
                        src={`/avatar-${i + 1}.jpg`}
                        alt={`User ${i + 1}`}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-md">
                    +50K
                  </div>
                </div>
                <span className="text-sm text-gray-700">Happy customers</span>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-500 fill-current"
                  />
                ))}
                <span className="text-sm text-gray-700 ml-2">4.9/5 rating</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              className="relative z-10"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/ChatGPT Image Jun 4, 2025, 04_52_53 PM.png"
                alt="Aarogya Saathi Medicine Pack"
                width={600}
                height={600}
                className="w-full max-w-md mx-auto rounded-2xl"
                style={{
                  boxShadow:
                    "0 20px 25px -5px rgba(20, 184, 166, 0.6), 0 8px 10px -6px rgba(20, 184, 166, 0.4)",
                }}
              />
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-teal-200/50 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-cyan-200/50 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-gray-100">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}
