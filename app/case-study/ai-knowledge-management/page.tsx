import Image from "next/image"

export default function AIPoweredKnowledgeManagement() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="max-w-4xl mx-auto p-6 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#5B9EA6] mb-6">AI-Powered Knowledge Management</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Publicis Health + Pfizer Global Portfolio Transformation
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">SITUATION</h3>
            <p className="mb-6">
              Joined Publicis Health during massive Pfizer portfolio acquisition, facing critical staffing shortages and
              urgent label updates for key brands including Comirnaty and Abrysvo.
            </p>

            <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">TASK</h3>
            <p className="mb-6">
              Develop scalable solution for rapid onboarding, process documentation, and knowledge transfer across
              expanding Pfizer portfolio.
            </p>
          </div>

          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rag-Up0iKEthSU4Bz1JLcD996HYL3LR5Vf.png"
              alt="Pfizer Colab Knowledge Management Interface"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">ACTION</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Architected first-in-industry RAG (Retrieval-Augmented Generation) SharePoint platform, integrating with
              Marcel for enterprise-wide access.
            </li>
            <li>
              Led cross-functional implementation of AI-driven content strategy with standardized taxonomies across
              therapeutic areas.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">RESULT</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>40% acceleration in document retrieval speed</li>
            <li>60% improvement in search precision</li>
            <li>3-week reduction in onboarding time</li>
            <li>$500K cost avoidance vs. third-party solution</li>
            <li>Established new industry benchmark for AI-enabled knowledge management</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

