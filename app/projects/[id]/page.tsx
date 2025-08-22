"use client"

import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Zap } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function ProjectPage() {
  const params = useParams()
  const router = useRouter()
  const projectId = params.id as string

  const projectsData: Record<string, any> = {
    futamart: {
      name: "FUTAMART",
      tagline: "Multi-Vendor E-commerce Revolution",
      description:
        "A comprehensive e-commerce platform that connects multiple vendors with customers through an intuitive interface. Features real-time inventory management, secure payment processing, and advanced analytics.",
      longDescription:
        "FUTAMART represents a complete reimagining of the multi-vendor marketplace experience. Built with scalability in mind, it handles thousands of concurrent users while maintaining lightning-fast performance. The platform includes sophisticated vendor management tools, real-time inventory synchronization, and a powerful analytics dashboard that provides actionable insights for business growth.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
      tech: ["React", "Next.js", "TypeScript", "Stripe", "Firebase", "Tailwind CSS", "Framer Motion"],
      status: "Live",
      liveUrl: "https://futamart.com",
      githubUrl: "https://github.com/yourusername/futamart",
      timeline: "6 months",
      team: "Solo Developer",
      features: [
        "Multi-vendor marketplace with vendor dashboard",
        "Real-time inventory management system",
        "Secure payment processing with Stripe",
        "Advanced search and filtering capabilities",
        "Mobile-responsive design",
        "Admin analytics and reporting tools",
      ],
      challenges: [
        "Implementing real-time inventory synchronization across multiple vendors",
        "Designing a scalable database architecture for high-volume transactions",
        "Creating an intuitive vendor onboarding and management system",
      ],
      learnings: [
        "Advanced state management patterns for complex e-commerce flows",
        "Payment gateway integration and security best practices",
        "Performance optimization techniques for large-scale applications",
      ],
    },
    cliqpod: {
      name: "Cliqpod",
      tagline: "Real-time Event Memory Sharing",
      description:
        "A revolutionary platform that enables instant photo and video sharing during events, creating collaborative memory albums in real-time.",
      longDescription:
        "Cliqpod transforms how people capture and share memories at events. Using WebSocket technology, attendees can instantly upload and view photos/videos as they happen, creating a live, collaborative experience that brings everyone together.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=600&fit=crop",
      tech: ["React", "WebSockets", "Node.js", "MongoDB", "AWS S3", "Socket.io", "Express"],
      status: "Live",
      liveUrl: "https://cliqpod.com",
      githubUrl: "https://github.com/yourusername/cliqpod",
      timeline: "4 months",
      team: "2 Developers",
      features: [
        "Real-time photo and video sharing",
        "Event-based memory albums",
        "Live collaboration features",
        "Cloud storage integration",
        "Mobile-optimized interface",
        "Social sharing capabilities",
      ],
      challenges: [
        "Implementing real-time synchronization across multiple devices",
        "Optimizing media upload and streaming performance",
        "Managing concurrent user sessions effectively",
      ],
      learnings: [
        "WebSocket implementation and real-time data synchronization",
        "Media handling and cloud storage optimization",
        "Collaborative application architecture patterns",
      ],
    },
    tagbox: {
      name: "Tagbox",
      tagline: "Smart Event Management Platform",
      description:
        "An innovative event booking platform featuring QR code invitations and integrated gifting systems for seamless event experiences.",
      longDescription:
        "Tagbox revolutionizes event management by combining modern technology with user-friendly design. From QR code invitations to integrated gift registries, every aspect is designed to make event planning and attendance effortless.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=600&fit=crop",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "QR API", "Tailwind CSS", "Vercel"],
      status: "Live",
      liveUrl: "https://tagbox.app",
      githubUrl: "https://github.com/yourusername/tagbox",
      timeline: "5 months",
      team: "Solo Developer",
      features: [
        "QR code invitation system",
        "Event booking and management",
        "Integrated gifting platform",
        "Guest list management",
        "Payment processing",
        "Event analytics dashboard",
      ],
      challenges: [
        "Integrating QR code generation and scanning functionality",
        "Building a flexible event management system",
        "Creating seamless payment and gifting workflows",
      ],
      learnings: [
        "QR code implementation and mobile scanning optimization",
        "Complex form handling and validation patterns",
        "Payment system integration and security considerations",
      ],
    },
    fitkeep: {
      name: "FitKeep",
      tagline: "Digital Health Monitoring System",
      description:
        "A comprehensive health tracking application with real-time data monitoring and personalized wellness insights powered by machine learning.",
      longDescription:
        "FitKeep empowers users to take control of their health through intelligent monitoring and personalized recommendations. The app integrates with various health devices and uses machine learning to provide actionable insights for better wellness outcomes.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=600&fit=crop",
      tech: ["React Native", "Firebase", "HealthKit", "Charts.js", "ML", "Python", "TensorFlow"],
      status: "Beta",
      liveUrl: "https://fitkeep.app",
      githubUrl: "https://github.com/yourusername/fitkeep",
      timeline: "8 months",
      team: "3 Developers",
      features: [
        "Real-time health data tracking",
        "HealthKit and Google Fit integration",
        "Personalized wellness insights",
        "Machine learning recommendations",
        "Progress visualization",
        "Goal setting and tracking",
      ],
      challenges: [
        "Integrating with multiple health data sources",
        "Implementing machine learning for health insights",
        "Ensuring data privacy and security compliance",
      ],
      learnings: [
        "Health data integration and privacy considerations",
        "Machine learning model implementation in mobile apps",
        "Cross-platform development best practices",
      ],
    },
    zent: {
      name: "Zent",
      tagline: "Next-Gen E-commerce Platform",
      description:
        "A highly customizable e-commerce platform with advanced analytics and multi-channel integration capabilities for modern businesses.",
      longDescription:
        "Zent is designed for the future of e-commerce, offering unprecedented customization options and powerful analytics. Built with modern technologies, it provides businesses with the tools they need to succeed in today's competitive market.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
      tech: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Stripe", "Vercel", "Prisma"],
      status: "In Development",
      liveUrl: "https://zent.dev",
      githubUrl: "https://github.com/yourusername/zent",
      timeline: "Ongoing",
      team: "Solo Developer",
      features: [
        "Highly customizable storefront",
        "Advanced analytics dashboard",
        "Multi-channel integration",
        "Inventory management system",
        "Customer relationship management",
        "Marketing automation tools",
      ],
      challenges: [
        "Building a flexible and scalable architecture",
        "Implementing advanced analytics and reporting",
        "Creating intuitive customization interfaces",
      ],
      learnings: [
        "Advanced Next.js patterns and optimization techniques",
        "Database design for complex e-commerce systems",
        "Modern deployment and scaling strategies",
      ],
    },
  }

  const project = projectsData[projectId]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Source Code
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4">{project.status}</Badge>
            <h1 className="text-4xl md:text-6xl font-sans font-bold mb-4">{project.name}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-serif mb-8 max-w-3xl mx-auto">
              {project.tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl mb-16"
          >
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.name}
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-sans font-bold mb-6">Project Overview</h2>
                <p className="text-lg text-muted-foreground font-serif leading-relaxed mb-6">{project.description}</p>
                <p className="text-muted-foreground font-serif leading-relaxed">{project.longDescription}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-2xl font-sans font-bold mb-6">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="font-serif">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-sans font-bold mb-6">Challenges & Solutions</h3>
                <div className="space-y-4">
                  {project.challenges.map((challenge: string, index: number) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <p className="font-serif">{challenge}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-2xl font-sans font-bold mb-6">Key Learnings</h3>
                <div className="space-y-3">
                  {project.learnings.map((learning: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="font-serif">{learning}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="font-sans">Project Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Timeline</p>
                        <p className="font-serif">{project.timeline}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Team</p>
                        <p className="font-serif">{project.team}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="font-sans">Tech Stack</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech: string) => (
                        <Badge key={tech} variant="outline" className="font-serif">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="font-sans">Links</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Live Project
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
