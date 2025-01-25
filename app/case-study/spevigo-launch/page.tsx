import Image from "next/image"

export default function SpevigoLaunch() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="max-w-4xl mx-auto p-6 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#5B9EA6] mb-6">Spevigo Launch</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Digital-First Rare Disease Strategy</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">Situation</h3>
            <p className="mb-6">
              Launching a first-in-class therapy for Generalized Pustular Psoriasis (GPP), a rare and severe skin
              condition, required innovative approaches to reach and educate a dispersed specialist audience with
              limited awareness of treatment options.
            </p>

            <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">Task</h3>
            <p className="mb-6">
              Create comprehensive digital launch strategy to build disease awareness, demonstrate therapeutic value,
              and establish efficient diagnostic pathways for a rare disease with complex presentation.
            </p>
          </div>

          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Spevigo-LCHpfNWtaGx1FbcEr5dc9JicfBPyZ9.png"
              alt="The Unwearable Collection campaign for Spevigo featuring artistic representations of being trapped by uncertainty"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">Action</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Developed award-winning immersive education platform</li>
            <li>Created interactive 3D disease visualization tools</li>
            <li>Implemented digital-first specialist engagement strategy</li>
            <li>Established virtual centers of excellence network</li>
            <li>Architected real-time treatment response tracking</li>
            <li>Designed novel patient identification protocols</li>
          </ul>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">Result</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Achieved 90% specialist awareness within 6 months</li>
            <li>Reached 2,000+ targeted specialists</li>
            <li>Won PM360 Trailblazer recognition</li>
            <li>Secured Best Orphan/Rare Diseases Solution of 2023</li>
            <li>Established category leadership in GPP treatment</li>
            <li>Created new standard for rare disease launches</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">Technical Innovation</h3>
          <p className="mb-4">The platform revolutionized rare disease launches through:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Immersive disease state education</li>
            <li>AI-powered physician targeting</li>
            <li>Real-time engagement analytics</li>
            <li>Interactive 3D visualization</li>
            <li>Digital diagnostic support tools</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

