"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    summary: "High-performance online store with real-time inventory",
    image: "/api/placeholder/600/400",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    metrics: "40% faster load times, 2M+ monthly visitors",
    challenge: "Legacy platform couldn't handle peak traffic during sales events, causing downtime and lost revenue.",
    solution: "Built a modern Next.js application with server-side rendering, optimized database queries, and CDN integration for global performance.",
    impact: "Reduced page load time by 40%, increased conversion rate by 25%, and eliminated downtime during peak traffic periods.",
  },
  {
    id: 2,
    title: "SaaS Analytics Dashboard",
    summary: "Real-time data visualization for business intelligence",
    image: "/api/placeholder/600/400",
    tech: ["React", "Node.js", "MongoDB"],
    metrics: "10K+ active users, 99.9% uptime",
    challenge: "Existing analytics tools were too generic and didn't provide the specific insights needed for decision-making.",
    solution: "Created a custom dashboard with real-time data processing, interactive charts, and automated reporting features.",
    impact: "Enabled data-driven decisions with 10K+ active users, achieving 99.9% uptime and reducing reporting time by 80%.",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    summary: "Secure mobile-first banking experience",
    image: "/api/placeholder/600/400",
    tech: ["React Native", "GraphQL", "AWS"],
    metrics: "50K+ downloads, 4.8★ rating",
    challenge: "Users needed a secure, fast, and intuitive mobile banking experience that worked offline.",
    solution: "Developed a React Native app with biometric authentication, offline-first architecture, and real-time transaction sync.",
    impact: "Achieved 50K+ downloads, 4.8★ rating, and reduced transaction processing time by 60%.",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[24px] font-bold mb-4">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real solutions with measurable impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <GlassCard className="h-full cursor-pointer hover:shadow-2xl transition-all group">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-t-2xl mb-4 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-lg bg-primary/30" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {project.summary}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm font-medium">{project.metrics}</p>
                    </div>
                  </GlassCard>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                    <DialogDescription>{project.summary}</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6 mt-4">
                    <div>
                      <h4 className="font-semibold mb-2">Challenge</h4>
                      <p className="text-sm text-muted-foreground">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Solution</h4>
                      <p className="text-sm text-muted-foreground">{project.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Impact</h4>
                      <p className="text-sm text-muted-foreground">{project.impact}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Results</h4>
                      <p className="text-sm font-medium">{project.metrics}</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

