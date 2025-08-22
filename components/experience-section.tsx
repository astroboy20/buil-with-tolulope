"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      year: "2024-2025",
      title: "Building Zent",
      company: "Independent Project",
      location: "Remote",
      description:
        "Developing a customizable e-commerce platform with advanced analytics and multi-channel integration capabilities.",
      highlights: ["Next.js Architecture", "TypeScript Implementation", "Supabase Integration", "Stripe Payments"],
    },
    {
      year: "2023-2024",
      title: "Multiple Startup Projects",
      company: "Freelance & Hackathons",
      location: "Remote",
      description:
        "Built and launched multiple applications including Futamart, Cliqpod, Tagbox, and FitKeep, focusing on real-time features and user experience.",
      highlights: ["Real-time Systems", "WebSocket Implementation", "Firebase Integration", "Mobile Development"],
    },
    {
      year: "2022-2023",
      title: "Freelance Developer",
      company: "Mastercard",
      location: "Remote",
      description:
        "Worked on various projects and gigs, developing scalable web applications and improving existing systems.",
      highlights: ["React Development", "API Integration", "Performance Optimization", "Code Review"],
    },
    {
      year: "2021",
      title: "Software Development Intern",
      company: "DOMTECH Cleaning Agency",
      location: "On-site",
      description: "First professional experience developing web applications and learning industry best practices.",
      highlights: ["Web Development", "Database Design", "Team Collaboration", "Agile Methodology"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4" ref={ref}>
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">Experience Timeline</h2>
          <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto">
            My professional journey from intern to independent builder
          </p>
        </motion.div>

        {/* <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block" />

                <Card className="md:ml-16 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-sans font-semibold">{exp.title}</h3>
                        <p className="text-primary font-serif font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end gap-2 mt-2 md:mt-0">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {exp.year}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground font-serif leading-relaxed mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <Badge key={highlight} variant="secondary" className="font-serif">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
