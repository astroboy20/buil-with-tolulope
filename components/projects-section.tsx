"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      id: "futamart",
      name: "FUTAMART",
      description:
        "Multi-vendor e-commerce platform with real-time inventory management and seamless payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["React", "Next.js", "TypeScript", "Stripe", "Firebase"],
      status: "Live",
      liveUrl: "https://futamart.com",
      githubUrl: "https://github.com/yourusername/futamart",
    },
    {
      id: "cliqpod",
      name: "Cliqpod",
      description:
        "Real-time event memory sharing platform enabling instant photo and video collaboration during events.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
      tech: ["React", "WebSockets", "Node.js", "MongoDB", "AWS S3"],
      status: "Live",
      liveUrl: "https://cliqpod.com",
      githubUrl: "https://github.com/yourusername/cliqpod",
    },
    {
      id: "tagbox",
      name: "Tagbox",
      description:
        "Event booking platform with QR code invitations and integrated gifting system for seamless event management.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "QR API"],
      status: "Live",
      liveUrl: "https://tagbox.app",
      githubUrl: "https://github.com/yourusername/tagbox",
    },
    {
      id: "fitkeep",
      name: "FitKeep",
      description: "Digital health monitoring system with real-time data tracking and personalized wellness insights.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      tech: ["React Native", "Firebase", "HealthKit", "Charts.js", "ML"],
      status: "Beta",
      liveUrl: "https://fitkeep.app",
      githubUrl: "https://github.com/yourusername/fitkeep",
    },
    {
      id: "zent",
      name: "Zent",
      description:
        "Customizable e-commerce platform with advanced analytics and multi-channel integration capabilities.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tech: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Stripe"],
      status: "In Development",
      liveUrl: "https://zent.dev",
      githubUrl: "https://github.com/yourusername/zent",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30" ref={ref}>
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto">
            A showcase of applications that solve real problems and create meaningful impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={
                        project.status === "Live" ? "default" : project.status === "Beta" ? "secondary" : "outline"
                      }
                      className="font-serif"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="font-sans text-xl">{project.name}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground font-serif leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs font-serif">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Link href={`/projects/${project.id}`} className="flex-1">
                      <Button size="sm" className="w-full font-serif group">
                        <span>View Details</span>
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
