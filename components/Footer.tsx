import { portfolioData } from '@/data/portfolioData'

export default function Footer() {
  return (
    <footer className="py-8 px-4 bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} {portfolioData.personalDetails.name}. All rights reserved.
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
  )
}
