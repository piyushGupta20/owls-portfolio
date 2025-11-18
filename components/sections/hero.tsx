"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 dark:from-gray-950 dark:via-blue-950/20 dark:to-purple-950/10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-[72px] font-bold leading-tight tracking-tight">
              We build practical, high-performance digital products.
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Web apps, mobile apps, and custom tools that actually solve problems — engineered for speed, scale, and clarity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-base px-8 py-6 h-auto"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Work with us
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-base px-8 py-6 h-auto"
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                See projects
              </Button>
            </div>
          </motion.div>

          {/* Right: Glass cards composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            {/* Floating glass cards */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 right-0 w-64 h-64"
            >
              <GlassCard className="h-full p-6">
                <div className="h-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl" />
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-0 left-0 w-56 h-56"
            >
              <GlassCard className="h-full p-6">
                <div className="h-full flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl" />
                </div>
              </GlassCard>
            </motion.div>

            {/* Center abstract SVG */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4000f9" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#4000f9" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <circle cx="200" cy="200" r="150" fill="url(#grad1)" />
                <circle cx="200" cy="200" r="100" fill="none" stroke="#4000f9" strokeWidth="2" strokeOpacity="0.2" />
                <circle cx="200" cy="200" r="50" fill="#4000f9" fillOpacity="0.1" />
                <path
                  d="M 200 50 Q 250 200 200 350 Q 150 200 200 50"
                  fill="none"
                  stroke="#4000f9"
                  strokeWidth="3"
                  strokeOpacity="0.3"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

