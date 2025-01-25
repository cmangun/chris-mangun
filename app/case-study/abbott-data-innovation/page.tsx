import Image from "next/image"

export default function AbbottDataInnovationHub() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="max-w-4xl mx-auto p-6 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#5B9EA6] mb-6">Abbott Data Innovation Hub</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Pioneering Advanced Analytics Enterprise Data Architecture
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">Situation</h3>
            <p className="mb-6">
              Abbott Laboratories required transformation of its global data ecosystem to unify diagnostic data from
              27,000 Alinity machines, serving 1,500+ stakeholders while managing complex compliance requirements.
            </p>

            <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">Task</h3>
            <p className="mb-6">
              Establish a modern data infrastructure and lead agile transformation through a new Chicago-based center of
              excellence, with focus on real-time analytics, compliance, and cost optimization.
            </p>
          </div>

          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Alinity%20Abbott-as9FOAtolYiwqMrsbtajpG6tXJ0lEz.png"
              alt="Abbott Alinity diagnostic systems product line including molecular, core laboratory, and transfusion machines"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">Action</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Established The Oil Rig innovation center in Chicago Loop</li>
            <li>Led 12 cross-functional engineering teams as Scrum Master</li>
            <li>Orchestrated cloud-native architecture on AWS/Azure platforms</li>
            <li>Implemented real-time data integration across 6 mission-critical systems</li>
            <li>Developed ML pipelines processing 2M+ daily diagnostic records</li>
            <li>Created enterprise-wide data governance framework</li>
          </ul>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">Result</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Achieved 65% acceleration in data retrieval</li>
            <li>Delivered 40% improvement in compliance efficiency</li>
            <li>Generated $3.2M annual cost optimization</li>
            <li>Reduced time-to-insight by 70% through predictive analytics</li>
            <li>Improved cross-functional team velocity by 85%</li>
            <li>Established model adopted across Abbott's global divisions</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

