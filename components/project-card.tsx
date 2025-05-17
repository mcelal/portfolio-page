import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export interface ProjectProps {
  id: number
  title: string
  description: string
  technologies: string[]
  image?: string
  github?: string
  demo?: string
  features?: string[]
  category: string
}

export function ProjectCard({ project }: { project: ProjectProps }) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4 hover:border-emerald-500 dark:hover:border-green-500 transition-colors bg-gray-50 dark:bg-gray-800 group">
      {project.image && (
        <div className="mb-4 overflow-hidden rounded-md border border-gray-200 dark:border-gray-700 aspect-video relative">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-600 dark:group-hover:text-green-400 transition-colors">
        {project.title}
      </h3>

      <p className="text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{project.description}</p>

      <div className="flex gap-2 flex-wrap mb-4">
        {project.technologies.map((tech) => (
          <span key={tech} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">
            {tech}
          </span>
        ))}
      </div>

      {project.features && project.features.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-1 text-gray-700 dark:text-gray-300">Features:</h4>
          <ul className="text-xs text-gray-600 dark:text-gray-400 pl-4 list-disc">
            {project.features.slice(0, 3).map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
            {project.features.length > 3 && (
              <li className="text-emerald-600 dark:text-green-400">+ {project.features.length - 3} more...</li>
            )}
          </ul>
        </div>
      )}

      <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-200 dark:border-gray-700">
        <div className="flex gap-2">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label={`${project.title} GitHub repository`}
            >
              <Github className="h-5 w-5" />
            </Link>
          )}
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink className="h-5 w-5" />
            </Link>
          )}
        </div>
        <Link
          href={project.demo || project.github || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 dark:text-green-400 hover:underline text-sm inline-flex items-center"
        >
          Details <ArrowUpRight className="ml-1 h-3 w-3" />
        </Link>
      </div>
    </div>
  )
}
