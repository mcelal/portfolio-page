"use client"

import { useState, useEffect, useRef } from "react"
import { Terminal } from "@/components/terminal"
import { Tabs } from "@/components/tabs"
import { ThemeToggle } from "@/components/theme-toggle"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  const [activeTab, setActiveTab] = useState("terminal")
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Focus terminal on load - removing auto-focus
    // if (terminalRef.current) {
    //   terminalRef.current.focus()
    // }
  }, [])

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-green-500 font-mono relative overflow-hidden">
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            <span className="text-emerald-600 dark:text-green-400">mCelal</span>
            <span className="text-gray-800 dark:text-white">@</span>
            <span className="text-emerald-600 dark:text-green-400">dev</span>
            <span className="text-gray-800 dark:text-white">:~$</span>
          </h1>
          <ThemeToggle />
        </div>

        <div className="bg-white dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg backdrop-blur-sm overflow-hidden">
          <Tabs
            tabs={[
              { id: "terminal", label: "Terminal" },
              { id: "about", label: "About" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" },
            ]}
            activeTab={activeTab}
            onChange={setActiveTab}
          />

          <div className="p-4 md:p-6">
            {activeTab === "terminal" && (
              <div ref={terminalRef} className="terminal-container" tabIndex={0}>
                <Terminal />
              </div>
            )}

            {activeTab === "about" && <AboutSection />}

            {activeTab === "projects" && <ProjectsSection />}

            {activeTab === "contact" && <ContactSection />}
          </div>
        </div>
      </div>
    </main>
  )
}
