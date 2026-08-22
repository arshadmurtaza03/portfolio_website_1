import { portfolioData } from '@/data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {portfolioData.skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg text-center hover:bg-gray-600 transition">
              <div className="text-3xl mb-2">{category.icon}</div>
              <div className="font-semibold mb-2">{category.name}</div>
              <div className="text-sm text-gray-400">{category.skills.join(', ')}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
