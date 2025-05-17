"use client"

import type React from "react"

import { useState } from "react"
import type { ProjectProps } from "./project-card"

interface ProjectFilterProps {
  projects: ProjectProps[]
  onFilter: (filtered: ProjectProps[]) => void
  categories: string[]
}

export function ProjectFilter({ projects, onFilter, categories }: ProjectFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    filterProjects(category, searchQuery)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    filterProjects(activeCategory, query)
  }

  const filterProjects = (category: string, query: string) => {
    let filtered = [...projects]

    // Filter by category
    if (category !== "all") {
      filtered = filtered.filter((project) => project.category === category)
    }

    // Filter by search query
    if (query.trim() !== "") {
      const lowercaseQuery = query.toLowerCase()
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(lowercaseQuery) ||
          project.description.toLowerCase().includes(lowercaseQuery) ||
          project.technologies.some((tech) => tech.toLowerCase().includes(lowercaseQuery)),
      )
    }

    onFilter(filtered)
  }

  return (
    <div className="mb-6 space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleCategoryChange("all")}
          className={`px-3 py-1 rounded-full text-sm ${
            activeCategory === "all"
              ? "bg-emerald-600 dark:bg-green-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-3 py-1 rounded-full text-sm ${
              activeCategory === category
                ? "bg-emerald-600 dark:bg-green-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-green-500"
        />
        <svg
          className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  )
}
