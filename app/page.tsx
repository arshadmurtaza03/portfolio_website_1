import About from '@/components/About'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Education from '@/components/Education'
import { portfolioData } from '@/data/portfolioData'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section - Inline */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            {portfolioData.hero.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            {portfolioData.hero.title}
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#about" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
              About Me
            </a>
            <a href="#contact" className="px-6 py-3 border border-blue-600 hover:bg-blue-600 rounded-lg transition">
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Skills Section - Inline */}
      <section id="skills" className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {portfolioData.skills.map((skill, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-lg text-center hover:bg-gray-600 transition">
                <div className="text-3xl mb-2">{skill.icon}</div>
                <div className="font-semibold">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Inline */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition">
                <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-sm">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section - Inline */}
      <section id="experience" className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                <p className="text-blue-400 mb-2">{exp.company}</p>
                <p className="text-gray-400 mb-4">{exp.period}</p>
                <ul className="list-disc list-inside text-gray-300">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <Education />

      {/* Certifications Section */}
      <Certifications />

      {/* Contact Section */}
      <Contact />

      {/* Footer - Inline */}
      <footer className="py-8 px-4 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {portfolioData.hero.name}. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              GitHub
            </a>
            <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              LinkedIn
            </a>
            <a href={portfolioData.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
