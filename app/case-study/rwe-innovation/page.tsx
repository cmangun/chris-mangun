import Image from "next/image"

export default function RWEInnovation() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="max-w-4xl mx-auto p-6 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#5B9EA6] mb-6">RWE Innovation</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Sanofi Vaccines Market Leadership</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">Situation</h3>
            <p className="mb-6">
              Sanofi needed to demonstrate real-world effectiveness of its vaccine portfolio, particularly for high-dose
              flu vaccines in elderly populations, while addressing vaccine hesitancy and supporting evidence-based
              policy decisions.
            </p>

            <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">Task</h3>
            <p className="mb-6">
              Develop innovative platform to communicate complex Real-World Evidence (RWE) data to multiple stakeholders
              including healthcare providers, patients, and policymakers.
            </p>
          </div>

          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fluzone%20Sanofi-B4axFhLvMUcFidPBkCqbO9Nhdn4Dfd.png"
              alt="Fluzone High-Dose vaccine real-world evidence infographic showing statistical improvements across multiple health outcomes including 27.8% reduction in pneumonia hospitalizations"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">Action</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Created first-in-industry RWE communication platform</li>
            <li>Architected interactive data visualization strategy</li>
            <li>Launched Real Results, Real Lives campaign</li>
            <li>Implemented multi-channel stakeholder engagement</li>
            <li>Developed evidence-based policy advocacy framework</li>
            <li>Established comparative effectiveness visualization tools</li>
          </ul>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">Result</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Achieved 85% increase in HCP confidence</li>
            <li>Generated 20% growth in public trust</li>
            <li>Demonstrated 24% efficacy improvement</li>
            <li>Reached 10M+ stakeholders</li>
            <li>Influenced vaccine policy in 12 major markets</li>
            <li>Accelerated vaccination rates in key populations</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">Technical Innovation</h3>
          <p className="mb-4">The platform transformed complex clinical data into accessible insights through:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Interactive data visualizations</li>
            <li>Real-time outcome tracking</li>
            <li>Comparative effectiveness tools</li>
            <li>Population health analytics</li>
            <li>Policy impact modeling</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

