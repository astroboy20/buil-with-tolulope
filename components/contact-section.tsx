"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const socialLinks = [
    { icon: Github, href: "https://github.com/astroboy20", label: "GitHub" },
    // { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/BuildWithTolu?t=FegVsRg-Ueha7kgR0TbeYQ&s=09", label: "Twitter" },
    { icon: Mail, href: "mailto:your.tolulopeakinkunmi7@gmail.com", label: "Email" },
  ]

  return (
    <section id="contact" className="py-20 px-4" ref={ref}>
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground font-serif max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <Card>
              <CardContent className="p-8 text-center">
                <div className="mb-8">
                  <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-sans font-semibold mb-2">Get In Touch</h3>
                  <p className="text-muted-foreground font-serif leading-relaxed mb-6">
                    I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                    technology and innovation.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a
                      href="mailto:your.email@example.com"
                      className="font-serif text-lg hover:text-primary transition-colors"
                    >
                      tolulopeakinkunmi7@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-primary font-serif">📍</span>
                    <span className="font-serif text-muted-foreground">Available for remote work worldwide</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-sans font-semibold mb-6">Connect With Me</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        className="flex flex-col items-center gap-3 p-4 rounded-lg border hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
                      >
                        <social.icon className="h-6 w-6" />
                        <span className="font-serif text-sm">{social.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
