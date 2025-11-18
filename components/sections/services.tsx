"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Code, Rocket, Wrench, Zap } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

const services = [
  {
    icon: Code,
    title: "Product Engineering",
    benefit: "Full-stack development from concept to deployment",
    outcomes: [
      "Scalable architecture patterns",
      "Modern tech stack integration",
      "Performance optimization",
    ],
  },
  {
    icon: Rocket,
    title: "MVPs",
    benefit: "Fast-track your idea to market with validated features",
    outcomes: [
      "4-8 week delivery cycles",
      "User feedback integration",
      "Iterative refinement",
    ],
  },
  {
    icon: Wrench,
    title: "Custom Business Tools",
    benefit: "Tailored solutions that fit your workflow",
    outcomes: [
      "Process automation",
      "Data integration",
      "Workflow optimization",
    ],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    benefit: "Speed and efficiency improvements that scale",
    outcomes: [
      "Load time reduction",
      "Database optimization",
      "Infrastructure scaling",
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[24px] font-bold mb-4">
            What we do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized services for building and scaling digital products
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard className="h-full p-6 hover:shadow-2xl transition-shadow">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {service.benefit}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {service.outcomes.map((outcome, i) => (
                      <li key={i} className="text-sm flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

