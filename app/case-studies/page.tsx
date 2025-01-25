import Link from "next/link"
import { ArrowRight } from "lucide-react"

const caseStudies = [
  { title: "Publicis Health AI-powered knowledge management", slug: "ai-knowledge-management" },
  { title: "Pfizer content supply chain innovation", slug: "content-supply-chain" },
  { title: "Abbott data innovation hub", slug: "abbott-data-innovation" },
  { title: "Medtronic methylene blue MMX + GI Genius", slug: "methylene-blue-gi-genius" },
  { title: "Sanofi RWE innovation", slug: "rwe-innovation" },
  { title: "BI Spevigo launch", slug: "spevigo-launch" },
  { title: "Novartis Fabhalta launch", slug: "fabhalta-launch" },
  { title: "Novartis Kesimpta market transformation", slug: "kesimpta-transformation" },
]

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#5B9EA6] to-[#3A6973] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Case Studies</h1>
        <p className="text-xl text-white mb-12 text-center">
          Explore our innovative healthcare transformation projects
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-study/${study.slug}`}
              className="block bg-white border-2 border-[#5B9EA6] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <h2 className="text-xl font-semibold text-[#3A6973] mb-2">
                {study.title
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                  .join(" ")}
              </h2>
              <div className="flex items-center text-[#5B9EA6]">
                <span>Read more</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

