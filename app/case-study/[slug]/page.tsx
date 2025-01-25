import { notFound } from "next/navigation"
import Image from "next/image"

// This is a placeholder for the actual case studies data
const caseStudies = [
  {
    title: "PUBLICIS HEALTH AI-POWERED KNOWLEDGE MANAGEMENT",
    slug: "ai-knowledge-management",
    content: "Content for Publicis Health AI-Powered Knowledge Management case study...",
  },
  // ... other case studies
]

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((s) => s.slug === params.slug)

  if (!study) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12">
      <h1 className="text-3xl font-bold mb-6 text-[#5B9EA6]">{study.title}</h1>
      <div className="bg-white/10 p-6 rounded-lg">
        <p className="text-gray-800">{study.content}</p>
      </div>
    </div>
  )
}

