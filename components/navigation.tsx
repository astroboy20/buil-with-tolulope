"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed w-auto top-5 left-0 right-0 mx-5 flex justify-center items-center lg:mx-10 z-50 transition-all duration-300`}
    >
      <div className="container max-w-6xl mx-auto   flex items-center justify-center">
        <div
          className={`flex items-center justify-between mx-auto rounded-full border border-gray-200 p-3  ${
            isScrolled
              ? "bg-background/80 backdrop-blur-md border-b"
              : "bg-transparent"
          }`}
        >
          <div className="flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className="font-serif"
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <ThemeToggle />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
