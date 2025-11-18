"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Search, Code, RefreshCw, Rocket } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description: "Understand your goals, users, and constraints through research and analysis.",
  },
  {
    number: "02",
    icon: Code,
    title: "Build",
    description: "Develop with modern tools, clean architecture, and best practices.",
  },
  {
    number: "03",
    icon: RefreshCw,
    title: "Iterate",
    description: "Test, gather feedback, and refine based on real-world usage.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Ship",
    description: "Deploy with confidence, monitor performance, and scale as needed.",
  },
]

export function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[24px] font-bold mb-4">
            How we work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven process that delivers results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <GlassCard className="h-full p-6 text-center">
                  <div className="mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-display font-bold text-primary/20 mb-2">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </GlassCard>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/20 transform -translate-y-1/2" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

