"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, Code2, Rocket, Users } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const milestones = [
    {
      year: "2020",
      title: "Started Learning",
      description: "Began my journey with web development fundamentals",
      icon: Code2,
    },
    {
      year: "2021",
      title: "First Internship",
      description: "Joined DOMTECH Cleaning Agency as a developer intern",
      icon: Users,
    },
    {
      year: "2022-2023",
      title: "Freelance Work",
      description: "Worked with Mastercard and other clients on various projects",
      icon: Rocket,
    },
    {
      year: "2024",
      title: "Building Zent",
      description: "Currently developing a customizable e-commerce platform",
      icon: Calendar,
    },
  ]

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "WebSockets",
    "Firebase",
    "Real-time Communication",
    "Backend Integration",
    "Scalable App Development",
  ]

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">My Tech Journey</h2>
          <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto">
            From learning web basics in 2020 to building scalable applications today
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <milestone.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-sans font-bold text-primary mb-2">{milestone.year}</div>
                    <h3 className="text-lg font-sans font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-sm text-muted-foreground font-serif">{milestone.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div> */}

          {/* Journey Story */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-2xl font-sans font-semibold mb-4">The Beginning</h3>
                <p className="text-muted-foreground font-serif leading-relaxed mb-4">
                  My journey started in 2020 when I began learning web development fundamentals. What started as
                  curiosity quickly became a passion for creating digital solutions that make a real difference in
                  people's lives.
                </p>
                <p className="text-muted-foreground font-serif leading-relaxed">
                  From my internship at DOMTECH Cleaning Agency to freelance work with Mastercard, I've consistently
                  focused on building human-centered applications that solve real problems.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-2xl font-sans font-semibold mb-4">Current Focus</h3>
                <p className="text-muted-foreground font-serif leading-relaxed mb-4">
                  Today, I'm building Zent, a customizable e-commerce platform, while continuing to work on innovative
                  projects like FitKeep's digital health monitoring system. My expertise spans from real-time
                  communication systems to scalable backend integrations.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {skills.slice(0, 6).map((skill, index) => (
                    <Badge key={skill} variant="secondary" className="text-sm py-1 px-3 font-serif">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
