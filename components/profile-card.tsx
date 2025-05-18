import Image from "next/image"
import { aboutData } from "@/lib/about-data"

export function ProfileCard() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 w-full">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex-shrink-0 flex justify-center">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-emerald-500 dark:border-green-500">
            <Image
              src={aboutData.photo || "/placeholder.svg?height=128&width=128"}
              alt={aboutData.name}
              width={128}
              height={128}
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex-grow space-y-4 text-center md:text-left">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">{aboutData.name}</h2>
            <p className="text-emerald-600 dark:text-green-400">{aboutData.title}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="text-gray-500 dark:text-gray-400">Location:</span>
              <span className="text-gray-900 dark:text-white">{aboutData.location}</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="text-gray-500 dark:text-gray-400">Email:</span>
              <a
                href={`mailto:${aboutData.email}`}
                className="text-emerald-600 dark:text-blue-400 hover:underline truncate"
              >
                {aboutData.email}
              </a>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <span className="text-gray-500 dark:text-gray-400">Website:</span>
              <a
                href={aboutData.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 dark:text-blue-400 hover:underline"
              >
                {new URL(aboutData.website).hostname}
              </a>
            </div>
          </div>

          <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-gray-900 dark:text-white font-bold mb-2">Top Skills</h3>
            <div className="flex flex-wrap gap-2">
              {aboutData.skillCategories
                .flatMap((category) => category.skills)
                .sort((a, b) => b.level - a.level)
                .slice(0, 6)
                .map((skill, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-200 dark:bg-gray-900 rounded text-xs">
                    {skill.name}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
