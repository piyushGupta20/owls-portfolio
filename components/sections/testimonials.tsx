"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

const testimonials = [
  {
    quote: "Delivered exactly what we needed, on time and within budget. The team's technical expertise and attention to detail made all the difference.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechCorp",
    avatar: "SC",
  },
  {
    quote: "Transformed our legacy system into a modern, scalable platform. Performance improvements were immediate and measurable.",
    author: "Michael Rodriguez",
    role: "Product Director",
    company: "StartupXYZ",
    avatar: "MR",
  },
  {
    quote: "The MVP was ready in weeks, not months. Fast iteration and clear communication throughout the entire process.",
    author: "Emily Johnson",
    role: "Founder",
    company: "InnovateLab",
    avatar: "EJ",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[24px] font-bold mb-4">
            Trust
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What clients say about working with us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="h-full p-6">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-sm text-foreground mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

