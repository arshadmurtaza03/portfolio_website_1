import { portfolioData } from '@/data/portfolioData'

export default function Experience() {
  return (
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
  )
}
