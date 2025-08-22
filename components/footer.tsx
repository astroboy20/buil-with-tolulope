"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, Heart, Code, Coffee, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/astroboy20", label: "GitHub" },
    // { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/BuildWithTolu?t=FegVsRg-Ueha7kgR0TbeYQ&s=09", label: "Twitter" },
    { icon: Mail, href: "mailto:your.tolulopeakinkunmi7@gmail.com", label: "Email" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-20 px-4 bg-gradient-to-br from-muted/30 via-background to-muted/20 border-t">
      <div className="container max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-sans font-bold">BuildWithTolulope</h3>
                <p className="text-sm text-muted-foreground font-serif">Software Engineer</p>
              </div>
            </div>
            <p className="text-muted-foreground font-serif leading-relaxed max-w-md">
              Crafting digital experiences that bridge the gap between concept and reality. Passionate about building
              scalable, user-centered applications.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 hover:from-primary hover:to-accent hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 border border-primary/20 hover:border-transparent shadow-sm hover:shadow-lg"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-sans font-semibold">Navigation</h4>
            <div className="space-y-3">
              {["About", "Projects", "Skills", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-muted-foreground hover:text-primary transition-colors font-serif hover:translate-x-1 hover:transition-transform duration-300"
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-lg font-sans font-semibold">Built With</h4>
            <div className="space-y-2 text-sm text-muted-foreground font-serif">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Next.js 14
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                TypeScript
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Tailwind CSS
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Framer Motion
              </div>
            </div>
          </motion.div> */}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground font-serif">
              <span>© {currentYear} Built with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
              <span>and lots of</span>
              <Coffee className="h-4 w-4 text-amber-600" />
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="flex items-center gap-2 hover:bg-primary/10"
            >
              <ArrowUp className="h-4 w-4" />
              Back to top
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-0 w-24 h-24 bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-2xl" />
    </footer>
  )
}
