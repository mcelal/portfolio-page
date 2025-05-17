import { ProfileCard } from "@/components/profile-card"
import { aboutData } from "@/lib/about-data"

export function AboutSection() {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-emerald-600 dark:text-green-400">$ cat about.md</h2>

        <ProfileCard />

        <div className="prose prose-emerald dark:prose-invert max-w-none text-gray-800 dark:text-gray-200">
          {aboutData.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <h3 className="text-gray-900 dark:text-white mt-6">Education</h3>
          <ul className="text-gray-700 dark:text-gray-300">
            {aboutData.education.map((edu, index) => (
              <li key={index}>
                {edu.institution} - {edu.degree} ({edu.period})
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Experience Section */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-emerald-600 dark:text-green-400 mb-4">$ cat experience.md</h2>
        <div className="space-y-6">
          {aboutData.experience.map((exp, index) => (
            <div key={index} className="border-l-2 border-emerald-500 dark:border-green-500 pl-4 py-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.position}</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-emerald-600 dark:text-green-400 font-medium">{exp.company}</span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">{exp.period}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-3">{exp.description}</p>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-emerald-600 dark:text-green-400 mb-4">$ cat skills.md</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutData.skillCategories.map((category, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{category.name}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <span
                              key={i}
                              className={`inline-block w-2 h-2 rounded-full mx-0.5 ${
                                i < skill.level ? "bg-emerald-500 dark:bg-green-500" : "bg-gray-300 dark:bg-gray-700"
                              }`}
                            ></span>
                          ))}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                      <div
                        className="bg-emerald-500 dark:bg-green-500 h-1.5 rounded-full"
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interests Section */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-emerald-600 dark:text-green-400 mb-4">$ cat interests.md</h2>
        <div className="flex flex-wrap gap-2">
          {aboutData.interests.map((interest, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-emerald-600 dark:text-green-400 mb-4">$ cat social.md</h2>
        <div className="flex flex-wrap gap-4">
          {aboutData.socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md hover:bg-emerald-100 dark:hover:bg-green-900/30 transition-colors"
            >
              {link.platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
