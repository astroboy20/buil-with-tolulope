"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Database, Wrench, Palette, Globe, Zap, Layers, Cloud, Shield, Smartphone } from "lucide-react"

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", icon: Layers },
        { name: "Next.js", icon: Globe },
        { name: "TypeScript", icon: Code },
        { name: "Tailwind CSS", icon: Palette },
        { name: "Framer Motion", icon: Zap },
      ],
    },
    {
      title: "Backend & Database",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", icon: Database },
        { name: "Firebase", icon: Cloud },
        { name: "Supabase", icon: Shield },
        { name: "WebSockets", icon: Zap },
        { name: "API Design", icon: Globe },
      ],
    },
    {
      title: "Tools & Deployment",
      icon: Wrench,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Git", icon: Code },
        { name: "Vercel", icon: Cloud },
        { name: "AWS", icon: Shield },
        { name: "Docker", icon: Layers },
        { name: "Mobile Dev", icon: Smartphone },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30" ref={ref}>
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">My Tech Stack</h2>
          <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto">
            Technologies and tools I use to craft exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-500 hover:scale-105 group border-2 hover:border-primary/20">
                <CardHeader className="text-center pb-4">
                  <div
                    className={`mx-auto w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                  >
                    <category.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="font-sans text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className="flex items-center gap-3 p-3 bg-background rounded-lg hover:bg-primary/5 transition-all duration-300 group/skill"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-muted to-muted-foreground/20 rounded-lg flex items-center justify-center group-hover/skill:scale-110 transition-transform duration-300">
                          <skill.icon className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <span className="font-serif text-sm font-medium group-hover/skill:text-primary transition-colors duration-300">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {["JavaScript", "Python", "React Native", "GraphQL", "MongoDB", "Redis", "Kubernetes"].map(
              (tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-sm font-serif hover:scale-105 transition-transform duration-300 cursor-default"
                >
                  {tech}
                </motion.div>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
