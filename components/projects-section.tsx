"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"
import { ProjectFilter } from "@/components/project-filter"
import { projects, projectCategories } from "@/lib/projects-data"

export function ProjectsSection() {
  const [filteredProjects, setFilteredProjects] = useState(projects)

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-emerald-600 dark:text-green-400">$ ls -la ~/projects</h2>

      <ProjectFilter projects={projects} onFilter={setFilteredProjects} categories={projectCategories} />

      {filteredProjects.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500 dark:text-gray-400">No projects found matching your search criteria.</p>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Please try a different search term or clear the filters.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}
