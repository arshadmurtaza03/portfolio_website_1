'use client'

export default function GithubStats() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">GitHub Stats</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <img
              src="https://github-readme-streak-stats.herokuapp.com?user=arshadmurtaza03&theme=dark"
              alt="GitHub Streak Stats"
              className="w-full"
            />
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <img
              src="https://github-readme-stats.vercel.app/api?username=arshadmurtaza03&show_icons=true&theme=dark"
              alt="GitHub Stats"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
