import Image from "next/image"

export default function MethyleneBlueGIGenius() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="max-w-4xl mx-auto p-6 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#5B9EA6] mb-6">Methylene Blue MMX + GI Genius</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">AI-Enabled Clinical Innovation Strategy</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">Situation</h3>
            <p className="mb-6">
              Healthcare providers needed more accurate detection of colorectal lesions, with existing technologies
              struggling to achieve consistent identification of polyps and adenomas across various morphologies.
            </p>

            <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">Task</h3>
            <p className="mb-6">
              Create integrated commercial strategy linking GI Genius AI system with Methylene Blue MMX® to establish a
              new standard in AI-assisted colonoscopy while securing regulatory approval and market adoption.
            </p>
          </div>

          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Genius%20Medtronic-gdPAmDBWIYl5VKq6nuUES8DBm8cnHB.png"
              alt="Medtronic GI Genius device with endoscopy screen showing real-time colonoscopy imaging"
              width={400}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">Action</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Developed first-to-market deep learning system for real-time lesion detection</li>
            <li>Created comprehensive physician engagement platform</li>
            <li>Engineered seamless integration with major endoscopic processors</li>
            <li>Implemented data-driven market approach linking AI system with contrast agent</li>
            <li>Established training and adoption protocols across medical centers</li>
          </ul>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">Result</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Achieved 50% reduction in missed polyps</li>
            <li>Secured FDA approval and international regulatory clearances</li>
            <li>Drove adoption across 8 international markets</li>
            <li>Established 70% market share in AI-assisted colonoscopy</li>
            <li>Created new standard of care in endoscopic procedures</li>
            <li>Demonstrated significant improvement in patient outcomes</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-[#5B9EA6]">Key Innovation</h3>
          <p className="mb-4">
            The integration of AI-assisted detection with Methylene Blue MMX® created a force multiplier in clinical
            practice, enabling:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Enhanced detection accuracy</li>
            <li>Reduced procedure time</li>
            <li>Improved risk management</li>
            <li>Better clinical outcomes</li>
            <li>Increased physician confidence</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

