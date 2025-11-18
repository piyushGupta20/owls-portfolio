"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { GlassCard } from "@/components/ui/glass-card"

const faqs = [
  {
    question: "What's the typical project timeline?",
    answer: "Timelines vary based on scope. MVPs typically take 4-8 weeks, while full product builds can range from 12-24 weeks. We'll provide a detailed timeline after understanding your requirements.",
  },
  {
    question: "Do you work with startups or only established companies?",
    answer: "We work with both. Whether you're a startup launching your first product or an established company modernizing your tech stack, we adapt our approach to fit your needs and constraints.",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We focus on modern, proven technologies: Next.js, React, TypeScript, Node.js, PostgreSQL, MongoDB, and cloud platforms like AWS and Vercel. We choose the right tool for each project.",
  },
  {
    question: "How do you handle ongoing maintenance?",
    answer: "We offer maintenance packages that include bug fixes, security updates, performance monitoring, and feature enhancements. We can also provide documentation and training for your team.",
  },
]

export function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
    budget: "",
    honeypot: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Honeypot check
    if (formData.honeypot) {
      return
    }
    // Form submission logic here
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[24px] font-bold mb-4">
            Hire us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your project and how we can help
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <select
                    id="budget"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                  >
                    <option value="">Select a range</option>
                    <option value="under-25k">Under $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-plus">$100,000+</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                {/* Honeypot */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) =>
                    setFormData({ ...formData, honeypot: e.target.value })
                  }
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t">
                <Button variant="outline" size="lg" className="w-full">
                  Schedule a Call
                </Button>
              </div>
            </GlassCard>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-8">
              <h3 className="text-2xl font-display font-semibold mb-6">
                Frequently Asked Questions
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

