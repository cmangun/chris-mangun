export default function Resume() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto p-6 md:p-12">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-4">CHRIS MANGUN</h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">AI/ML Healthcare Transformation Lead</h2>

          {/* Certifications Box */}
          <div className="border border-gray-300 p-4 mb-8 inline-block">
            <ul className="space-y-1 text-gray-700">
              <li>Stanford AI/ML Healthcare Specialized</li>
              <li>Lean Six Sigma Black Belt</li>
              <li>AI Project Management Certified</li>
              <li>Agile Scrum Master Certified</li>
            </ul>
          </div>
        </div>

        {/* Experience Sections */}
        <div className="space-y-8">
          {/* Pfizer Colab */}
          <section>
            <h3 className="text-2xl font-bold text-[#5B9EA6] mb-1">PFIZER COLAB - PUBLICIS HEALTH</h3>
            <p className="text-gray-600 mb-3">Production Delivery Lead & AI SME 2024 - Present</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Architected first-in-industry RAG-based knowledge management system for Colab</li>
              <li>Leading Pfizer's largest brand initiatives including Abrysvo RSV & Comirnaty vaccines</li>
              <li>Driving enterprise-wide AI implementation and digital transformation</li>
            </ul>
          </section>

          {/* IPG Prohealth */}
          <section>
            <h3 className="text-2xl font-bold text-[#5B9EA6] mb-1">IPG PROHEALTH & AREA 23</h3>
            <p className="text-gray-600 mb-3">PMO Lead & AI SME 2020 - 2024</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Launched DELCI, first-to-pharma AI Guide for Kesimpta, a Digital Education Lab</li>
              <li>Managed $51M portfolio across Novartis (6 brands) and Sanofi (7 brands)</li>
              <li>Led implementation of content strategies and RWE platforms for Sanofi</li>
              <li>Directed team of 60+ across project management and creative functions</li>
            </ul>
          </section>

          {/* Abbott Labs */}
          <section>
            <h3 className="text-2xl font-bold text-[#5B9EA6] mb-1">ABBOTT LABS DATA & MACHINE LEARNING</h3>
            <p className="text-gray-600 mb-3">Senior Scrum Master 2018 - 2020</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Led agile transformation of Abbott's global data ecosystem</li>
              <li>Orchestrated migration of 27,000-machine data pipeline to AWS</li>
              <li>Achieved 65% improvement in data retrieval efficiency</li>
            </ul>
          </section>

          {/* Boundless Life Science */}
          <section>
            <h3 className="text-2xl font-bold text-[#5B9EA6] mb-1">BOUNDLESS LIFE SCIENCE GROUP (HCB)</h3>
            <p className="text-gray-600 mb-3">Associate Director, Project Management 2017 - 2018</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Assisted Strategy for GI Genius™ AI system for adenoma detection</li>
              <li>Directed launch strategies for three pharmaceutical brands ($5M)</li>
              <li>Implemented agile methodologies for cross-functional healthcare teams</li>
            </ul>
          </section>

          {/* Syneos Health */}
          <section>
            <h3 className="text-2xl font-bold text-[#5B9EA6] mb-1">SYNEOS HEALTH GSW INNOVATION LAB</h3>
            <p className="text-gray-600 mb-3">Senior Digital Program Manager 2014 - 2017</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Created SOW & Staffing for ($12M) for Eli Lilly (Cyramza), BI (Atrovent & Pradaxa)</li>
              <li>Launched Amgen (Biosimilars & Repatha)</li>
              <li>Producer MM&M Best TV Advertising Campaign of 2016 "Pradaxa - Red Fish"</li>
            </ul>
          </section>

          {/* Concentric Health */}
          <section>
            <h3 className="text-2xl font-bold text-[#5B9EA6] mb-1">CONCENTRIC HEALTH EXPERIENCE</h3>
            <p className="text-gray-600 mb-3">Digital Designer & CRM Producer 2007 - 2011</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Lead producer for rebranding Enbrel HCP CRM</li>
              <li>Launched Xifaxan</li>
              <li>Producer MM&M Best TV Self Promotion Advertising Campaign of 2012</li>
            </ul>
          </section>
        </div>

        {/* Contact Information */}
        <div className="mt-8 text-right text-gray-600">
          <p>cmangun@gmail.com // 917.717.1894</p>
        </div>
      </div>
    </div>
  )
}

