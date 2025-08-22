"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: "futamart",
      name: "FUTAMART",
      description:
        "Multi-vendor e-commerce platform with real-time inventory management and seamless payment integration.",
      image: "/images/futamart.png",
      tech: ["Next.js", "TypeScript", "Stripe", "Firebase"],
      status: "Live",
      liveUrl: "https://futamart.vercel.app/",
      githubUrl: "https://github.com/astroboy20/futamart_new",
    },
    {
      id: "cliqpod",
      name: "Cliqpod",
      description:
        "Real-time event memory sharing platform enabling instant photo and video collaboration during events.",
      image: "/images/cliqpod.png",
      tech: ["Next.js", "WebSockets", "Node.js", "MongoDB", "AWS S3"],
      status: "Live",
      liveUrl: "https://camera-app-flame.vercel.app/",
      githubUrl: "https://github.com/astroboy20/pov",
    },
    {
      id: "tagbox",
      name: "Tagbox",
      description:
        "Event booking platform with QR code invitations and integrated gifting system for seamless event management.",
      image: "/images/tagbox.png",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "QR API"],
      status: "Live",
      liveUrl: "https://tagbox-gray.vercel.app/",
      githubUrl: "https://github.com/astroboy20/tagbox",
    },
    {
      id: "gma-pay",
      name: "GMA-HostelPay",
      description:
        "A streamlined hostel payment platform that allows students to easily select and pay for their accommodation online, eliminating queues and paperwork.",
      image: "/images/gma-pay.png",
      tech: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Stripe"],
      status: "In Development",
      liveUrl: "https://gma-hostelpay.vercel.app/",
      githubUrl: "https://github.com/astroboy20/gma-hostelpay",
    },
    {
      id: "finsight",
      name: "FinSight",
      description:
        "A financial analysis tool that provides instant insights by securely uploading and processing bank statements, helping users better understand their spending and income patterns.",
      image: "/images/finsight.png",
      tech: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Stripe"],
      status: "Live",
      liveUrl: "https://finsight-gamma.vercel.app/",
      githubUrl: "https://github.com/astroboy20/finsight",
    },
    {
      id: "fitkeep",
      name: "FitKeep",
      description:
        "Digital health monitoring system with real-time data tracking and personalized wellness insights.",
      image:
        "https://plus.unsplash.com/premium_vector-1732301373435-f45af51dd8c9?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8&ixlib=rb-4.0.3&q=60&w=3000",
      tech: ["Next.js", "Firebase", "HealthKit", "Charts.js", "ML"],
      status: "Live",
      // liveUrl: "https://fitkeep.app",
      githubUrl: "https://github.com/astroboy20/fitkeep",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30" ref={ref}>
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto">
            A showcase of applications that solve real problems and create
            meaningful impact
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
                        project.status === "Live"
                          ? "default"
                          : project.status === "Beta"
                          ? "secondary"
                          : "outline"
                      }
                      className="font-serif"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="font-sans text-xl">
                    {project.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground font-serif leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs font-serif"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-4">
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        className="flex-1 font-serif flex items-center gap-2"
                        asChild
                      >
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                    )}

                    {/* GitHub Button */}
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.githubUrl} target="_blank">
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
