import Image from "next/image"

export default function FabhaltaLaunch() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="max-w-4xl mx-auto p-6 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#5B9EA6] mb-6">Novartis Fabhalta Launch</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Transforming Paroxysmal Nocturnal Hemoglobinuria (PNH) Treatment
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">Situation</h3>
            <p className="mb-6">
              Novartis faced the challenge of launching Fabhalta, a groundbreaking oral therapy for PNH, in a market
              dominated by established intravenous treatments. The rare nature of PNH and the paradigm shift in
              treatment modality required an innovative approach to market entry.
            </p>

            <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">Task</h3>
            <p className="mb-6">
              Develop and execute a comprehensive launch strategy to establish Fabhalta as the new standard of care for
              PNH, educate healthcare providers on its unique mechanism of action, and support patients in transitioning
              to oral therapy.
            </p>
          </div>

          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fabhalta-lZhATzBbEOhu7iTJ4tbkrh2u81QKey.png"
              alt="Scientific diagram showing how Fabhalta works in PNH by inhibiting Factor B in the alternative pathway of the complement system"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">Action</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Created an omnichannel disease education campaign</li>
            <li>Developed interactive MOA visualization tools</li>
            <li>Implemented a patient support program with digital onboarding</li>
            <li>Established a network of PNH Centers of Excellence</li>
            <li>Launched a KOL engagement platform for real-world data sharing</li>
            <li>Designed a seamless patient transition protocol from IV to oral therapy</li>
          </ul>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">Result</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Achieved 80% awareness among targeted hematologists within 3 months</li>
            <li>Secured formulary access in 90% of top academic medical centers</li>
            <li>Facilitated successful transition for 500+ patients in the first year</li>
            <li>Reduced treatment burden by 70% compared to IV therapies</li>
            <li>Generated $100M+ in sales, exceeding first-year projections</li>
            <li>Established Fabhalta as the preferred first-line therapy for newly diagnosed PNH patients</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">Key Innovation</h3>
          <p className="mb-4">
            The launch strategy for Fabhalta revolutionized rare disease treatment introduction through:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>AI-driven patient identification algorithms</li>
            <li>Virtual reality MOA education experiences</li>
            <li>Blockchain-enabled real-world evidence collection</li>
            <li>Personalized digital patient support journeys</li>
            <li>Integrated telemedicine platforms for remote patient monitoring</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

