import { portfolioData } from '@/data/portfolioData'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          {portfolioData.personalDetails.name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          {portfolioData.personalDetails.title}
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
  )
}
