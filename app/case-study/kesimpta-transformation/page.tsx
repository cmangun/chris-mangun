import Image from "next/image"

export default function KesimptaTransformation() {
  return (
    <div className="bg-white text-gray-800 w-full">
      <div className="max-w-4xl mx-auto p-4 md:p-12 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-[#5B9EA6] mb-6">Novartis Kesimpta Market Transformation</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Revolutionizing Multiple Sclerosis Treatment</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">Situation</h3>
            <p className="mb-6">
              Novartis aimed to transform the Multiple Sclerosis (MS) treatment landscape with Kesimpta, the first and
              only self-administered, targeted B-cell therapy. The challenge was to differentiate Kesimpta in a crowded
              market and drive adoption among both healthcare providers and patients.
            </p>

            <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">Task</h3>
            <p className="mb-6">
              Develop and implement a comprehensive market transformation strategy to position Kesimpta as the preferred
              first-line therapy for relapsing MS, emphasizing its unique benefits of efficacy, safety, and convenience.
            </p>
          </div>

          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kesimpta-6SBpvrUEp2yDS8ltcY7MpCSeNe7fOy.png"
              alt="DELCI AI Guide interface for Kesimpta showing a digital assistant and communication options for healthcare professionals"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">Action</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Launched DELCI, an AI-powered Digital Education Lab for Kesimpta</li>
            <li>Developed a multi-channel HCP engagement strategy</li>
            <li>Created an innovative patient support program with digital onboarding</li>
            <li>Implemented a real-world evidence collection platform</li>
            <li>Designed interactive tools for visualizing Kesimpta's mechanism of action</li>
            <li>Established a network of MS Centers of Excellence</li>
          </ul>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">Result</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Achieved 95% awareness among targeted neurologists within 6 months</li>
            <li>Secured formulary access in 85% of key accounts</li>
            <li>Facilitated 10,000+ patient starts in the first year</li>
            <li>Reduced treatment burden by 50% compared to infusion therapies</li>
            <li>Generated $500M+ in sales, exceeding first-year projections by 25%</li>
            <li>Established Kesimpta as a leading first-line therapy for relapsing MS</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">Key Innovation</h3>
          <p className="mb-4">The market transformation strategy for Kesimpta pioneered several innovations:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>AI-driven personalized patient education (DELCI)</li>
            <li>Virtual reality experiences for mechanism of action visualization</li>
            <li>Blockchain-enabled real-world evidence collection</li>
            <li>Digital twin modeling for treatment response prediction</li>
            <li>Integrated telemedicine platform for remote patient monitoring</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

