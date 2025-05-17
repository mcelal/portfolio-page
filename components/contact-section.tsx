import { aboutData } from "@/lib/about-data"

export function ContactSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-emerald-600 dark:text-green-400">$ contact --send</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded p-2 focus:border-emerald-500 dark:focus:border-green-500 focus:outline-none text-gray-800 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded p-2 focus:border-emerald-500 dark:focus:border-green-500 focus:outline-none text-gray-800 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm mb-1">
            Message:
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded p-2 focus:border-emerald-500 dark:focus:border-green-500 focus:outline-none text-gray-800 dark:text-white"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-emerald-600 dark:bg-green-600 hover:bg-emerald-700 dark:hover:bg-green-700 text-white px-4 py-2 rounded transition-colors"
        >
          Send Message
        </button>
      </form>
      <div className="mt-6">
        <h3 className="text-lg font-bold mb-2">Other ways to reach me:</h3>
        <ul className="space-y-2">
          <li>
            <a
              href={`mailto:${aboutData.email}`}
              className="text-emerald-600 dark:text-green-400 hover:underline flex items-center gap-2"
            >
              <span>Email: {aboutData.email}</span>
            </a>
          </li>
          {aboutData.socialLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 dark:text-green-400 hover:underline flex items-center gap-2"
              >
                <span>
                  {link.platform}: {new URL(link.url).hostname}
                </span>
              </a>
            </li>
          ))}
          <li>
            <a
              href={aboutData.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 dark:text-green-400 hover:underline flex items-center gap-2"
            >
              <span>Website: {new URL(aboutData.website).hostname}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
