import Image from "next/image"

export default function ContentSupplyChainInnovation() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="max-w-4xl mx-auto p-6 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#5B9EA6] mb-6">Content Supply Chain Innovation</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Comirnaty Global Speed-to-Market Strategy</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">SITUATION</h3>
            <p className="mb-6">
              Pfizer faced unprecedented challenge of rapidly deploying Comirnaty vaccine content across 50+ global
              markets while ensuring brand consistency, regulatory compliance, and efficient resource utilization during
              critical pandemic response.
            </p>

            <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">TASK</h3>
            <p className="mb-6">
              Develop and implement innovative content creation and distribution strategy to accelerate global market
              access, reduce production costs, and enable simultaneous market deployment at scale.
            </p>
          </div>

          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Comirnaty1-4gkjQhC1sPNrw4IlgfYmMR6GvvOoPP.png"
              alt="Comirnaty content supply chain framework and campaign featuring John Legend"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">ACTION</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Pioneered "super shoots" methodology featuring high-profile talent (John Legend, Travis Kelce)</li>
            <li>Created modular digital asset framework enabling multi-market deployment</li>
            <li>Implemented AI-powered Digital Asset Management system with advanced localization</li>
            <li>Developed automated regulatory compliance checkpoints</li>
            <li>Established global content governance model</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">RESULT</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Achieved 45% reduction in production costs</li>
            <li>Delivered 300% increase in asset utilization</li>
            <li>Accelerated time-to-market by 60%</li>
            <li>Enabled simultaneous deployment across 50+ markets</li>
            <li>Generated 300% ROI on digital asset investment</li>
            <li>Established new industry benchmark for global content deployment</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

