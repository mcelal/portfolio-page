"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { aboutData } from "@/lib/about-data"

type CommandResult = {
  command: string
  output: React.ReactNode
}

export function Terminal() {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<CommandResult[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  const commands = {
    help: () => (
      <div className="space-y-1">
        <p>Available commands:</p>
        <ul className="pl-4">
          <li>
            <span className="text-yellow-600 dark:text-yellow-400">help</span> - Show this help message
          </li>
          <li>
            <span className="text-yellow-600 dark:text-yellow-400">about</span> - Display information about me
          </li>
          <li>
            <span className="text-yellow-600 dark:text-yellow-400">skills</span> - List my technical skills
          </li>
          <li>
            <span className="text-yellow-600 dark:text-yellow-400">projects</span> - View my projects
          </li>
          <li>
            <span className="text-yellow-600 dark:text-yellow-400">contact</span> - Get my contact information
          </li>
          <li>
            <span className="text-yellow-600 dark:text-yellow-400">clear</span> - Clear the terminal
          </li>
        </ul>
      </div>
    ),
    about: () => (
      <div className="space-y-2">
        <p className="text-emerald-600 dark:text-green-300 font-bold">{aboutData.name}</p>
        <p>
          {aboutData.title} from {aboutData.location}.
        </p>
        {aboutData.bio.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <p>
          Type <span className="text-yellow-600 dark:text-yellow-400">skills</span> to see my technical expertise.
        </p>
      </div>
    ),
    skills: () => (
      <div className="space-y-2">
        <p className="text-emerald-600 dark:text-green-300 font-bold">Technical Skills:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {aboutData.skillCategories.map((category, index) => (
            <div key={index}>
              <p className="text-yellow-600 dark:text-yellow-400">{category.name}:</p>
              <ul className="pl-4">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    ),
    projects: () => (
      <div className="space-y-2">
        <p className="text-emerald-600 dark:text-green-300 font-bold">Projects:</p>
        <p>Check out my projects tab for more details or visit my GitHub:</p>
        <p>
          <a
            href={aboutData.socialLinks.find((link) => link.platform === "GitHub")?.url || "https://github.com/mcelal"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 dark:text-blue-400 hover:underline"
          >
            github.com/mcelal
          </a>
        </p>
      </div>
    ),
    contact: () => (
      <div className="space-y-2">
        <p className="text-emerald-600 dark:text-green-300 font-bold">Contact Information:</p>
        <ul className="space-y-1">
          <li>
            Email:{" "}
            <a href={`mailto:${aboutData.email}`} className="text-emerald-600 dark:text-blue-400 hover:underline">
              {aboutData.email}
            </a>
          </li>
          {aboutData.socialLinks.map((link, index) => (
            <li key={index}>
              {link.platform}:{" "}
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 dark:text-blue-400 hover:underline"
              >
                {new URL(link.url).hostname}
              </a>
            </li>
          ))}
          <li>
            Website:{" "}
            <a
              href={aboutData.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 dark:text-blue-400 hover:underline"
            >
              {new URL(aboutData.website).hostname}
            </a>
          </li>
        </ul>
      </div>
    ),
    clear: () => {
      setHistory([])
      return null
    },
    default: (cmd: string) => (
      <div>
        <p className="text-red-600 dark:text-red-400">{`Command not found: ${cmd}`}</p>
        <p>
          Type <span className="text-yellow-600 dark:text-yellow-400">help</span> to see available commands.
        </p>
      </div>
    ),
  }

  useEffect(() => {
    // Add welcome message
    setHistory([
      {
        command: "",
        output: (
          <div className="space-y-2">
            <div className="text-emerald-600 dark:text-green-400 font-bold text-xl mb-2">
              Welcome to {aboutData.name}&apos;s Portfolio
            </div>
            <p>
              Type <span className="text-yellow-600 dark:text-yellow-400">help</span> to see available commands.
            </p>
          </div>
        ),
      },
    ])

    // Focus input on load
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  useEffect(() => {
    // Scroll to bottom when history changes
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    const cmd = input.trim().toLowerCase()

    let result
    if (cmd in commands) {
      result = commands[cmd as keyof typeof commands]()
    } else {
      result = commands.default(cmd)
    }

    if (result !== null) {
      setHistory([...history, { command: input, output: result }])
    }

    setInput("")
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault()

      // Navigate up through command history
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(history[history.length - 1 - newIndex].command)
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()

      // Navigate down through command history
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(history[history.length - 1 - newIndex].command)
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput("")
      }
    }
  }

  return (
    <div
      ref={terminalRef}
      className="h-[60vh] overflow-y-auto font-mono text-sm md:text-base terminal-container"
      onClick={() => inputRef.current?.focus()}
      tabIndex={0}
    >
      {history.map((item, i) => (
        <div key={i} className="mb-2">
          {item.command && (
            <div className="flex items-center">
              <span className="text-emerald-600 dark:text-green-400 mr-2">mcelal@dev:~$</span>
              <span>{item.command}</span>
            </div>
          )}
          <div className="ml-0 mt-1">{item.output}</div>
        </div>
      ))}

      <form onSubmit={handleSubmit} className="flex items-center">
        <span className="text-emerald-600 dark:text-green-400 mr-2">mcelal@dev:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent border-none outline-none text-gray-800 dark:text-white"
          autoComplete="off"
          spellCheck="false"
        />
      </form>
    </div>
  )
}
