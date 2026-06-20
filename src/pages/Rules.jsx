import { Link } from 'react-router-dom';

export default function Rules() {
  const rulesList = [
    {
      title: "Core Principles",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      items: [
        { label: "Integrity", text: "Participants must engage in fair play, avoid all forms of deception, and maintain the spirit of an honest contest." },
        { label: "Respect & Inclusion", text: "All individuals are expected to foster a welcoming environment that celebrates diversity and mutual understanding." },
        { label: "Professionalism", text: "All interactions must reflect the serious academic nature of the Olympiad, maintaining decorum toward fellow competitors and officials." },
        { label: "Confidentiality", text: "Safeguarding sensitive information—specifically regarding problem sets and solutions—is mandatory to ensure contest integrity." }
      ]
    },
    {
      title: "Compliance & Enforcement",
      icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
      items: [
        { label: "Strict adherence", text: "to all rules, submission deadlines, and event guidelines is obligatory." },
        { label: "Reporting", text: "Any observed unethical behavior or rule violations must be reported immediately." },
        { label: "Sanctions", text: "Infractions may lead to sanctions, including immediate disqualification and a ban from future participation." }
      ]
    },
    {
      title: "Hardware and Software",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      items: [
        { label: "Workstations", text: "All contestants will have access to identical local machines. Minor technical variances may exist but will not impact performance." },
        { label: "Local Editors", text: "Standard environments including VSCode, Vim, and PyCharm will be pre-installed." },
        { label: "Platform", text: "The Kaggle platform will be the primary interface for accessing task statements, datasets, submitting solutions, and viewing scores." }
      ]
    },
    {
      title: "Connectivity and Tasks",
      icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.906 14.142 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0",
      items: [
        { label: "Internet Access", text: "Access to the internet will be strictly restricted." },
        { label: "Task Scope", text: "Tasks may involve writing code, fitting models on training data, and running inference on test data." },
        { label: "Submissions", text: "Contestants may be required to submit code, trained models, and/or predictions. Note: No additional time will be granted for model training after the contest clock expires." }
      ]
    },
    {
      title: "Scoring and Evaluation",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      items: [
        { label: "Task Structure", text: "Each task is worth a maximum of 100 points and may be divided into multiple subtasks." },
        { label: "Final Calculation", text: "The final score for any given task is the sum of the scores of its subtasks, rounded to two decimal places." }
      ]
    },
    {
      title: "Quarantine Rules",
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      items: [
        { label: "Strict Quarantine", text: "From the start of the translation session until the end of each contest, all contestants are under strict quarantine." },
        { label: "Communication", text: "All communication regarding contest tasks is strictly prohibited." },
        { label: "Supervision", text: "Volunteers will remain with contestants to ensure compliance. Violations will result in disqualification." }
      ]
    },
    {
      title: "Prohibited Items",
      icon: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636",
      items: [
        { label: "", text: "Electronic devices (laptops, cell phones, earphones, or any Bluetooth-enabled items)." },
        { label: "", text: "Data storage media or any item capable of transmitting data." },
        { label: "", text: "Books, manuals, or printed reference materials." }
      ]
    },
    {
      title: "Permitted Supplies",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      items: [
        { label: "Provided by Organizers", text: "Blank paper, writing tools, and snacks. (T-shirts and lunch are provided during the National Round only)." },
        { label: "Medical Items", text: "Necessary medical supplies (e.g., tablets, glucometers) are allowed." }
      ]
    },
    {
      title: "During the Contest",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      items: [
        { label: "Punctuality", text: "Contestants must be seated at least 5 minutes before the start. Do not touch the workstations or any provided tools until explicitly instructed by the organizers." },
        { label: "Clarification Requests", text: "Questions regarding task details or grading must be submitted via the official contest system. Organisers may decline ambiguous questions. All substantial or non-trivial answers will be broadcast to all contestants." },
        { label: "Technical Assistance", text: "If a hardware or network issue occurs, request assistance immediately. Staff will address technical failures but are strictly prohibited from answering questions related to the contest tasks." }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      
      {/* 1. Page Header */}
      <section className="bg-[#0f2862] text-white py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Rules & Regulations</h1>
          <p className="text-lg md:text-xl text-green-400 font-bold uppercase tracking-widest mb-4">BdAIO 2026</p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The third edition of the Bangladesh Artificial Intelligence Olympiad (BdAIO) is set to commence, extending an invitation to emerging innovators to demonstrate their proficiency in Artificial Intelligence and Python programming.
          </p>
        </div>
      </section>

      {/* 2. Intro / Gateway Section */}
      <section className="py-12 bg-white border-b border-gray-200 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="text-gray-700 text-lg leading-relaxed">
            This esteemed competition functions as the official qualification route for the <span className="font-bold text-[#0f2862]">International Olympiad in Artificial Intelligence (IOAI) 2026</span> and the <span className="font-bold text-[#0f2862]">Asia Pacific Olympiad in Artificial Intelligence (APOAI) 2026</span>, thereby providing the highest-achieving participants with the opportunity to represent Bangladesh internationally.
          </p>
        </div>
      </section>

      {/* 3. Eligibility Criteria */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0f2862] mb-4">Eligibility Criteria</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Quiz Eligibility */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 bg-blue-50 text-[#0f2862] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0f2862]">Quiz Category</h3>
              </div>
              <p className="text-gray-600 mb-4 font-medium">Open to students currently enrolled in:</p>
              <ul className="space-y-3">
                <li className="flex items-start"><div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div><span className="text-gray-700"><span className="font-bold">General Education Board:</span> Up to SSC 2026 candidates.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div><span className="text-gray-700"><span className="font-bold">Madrasah Education Board:</span> Up to Dakhil 2026 candidates.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div><span className="text-gray-700"><span className="font-bold">Technical Education Board:</span> Up to SSC (Vocational) students.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div><span className="text-gray-700"><span className="font-bold">British Curriculum:</span> Up to O Level 2026 candidates.</span></li>
              </ul>
            </div>

            {/* AI Problem Solving Eligibility */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0f2862]">AI Problem Solving</h3>
              </div>
              <p className="text-gray-600 mb-4 font-medium">Open to students currently enrolled in:</p>
              <ul className="space-y-3">
                <li className="flex items-start"><div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div><span className="text-gray-700"><span className="font-bold">General Education Board:</span> Up to HSC 2026 candidates.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div><span className="text-gray-700"><span className="font-bold">Madrasah Education Board:</span> Up to Alim 2026 candidates.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div><span className="text-gray-700"><span className="font-bold">Technical Education Board:</span> Up to Polytechnic 4th Semester students.</span></li>
                <li className="flex items-start"><div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div><span className="text-gray-700"><span className="font-bold">British Curriculum:</span> Up to A2 2026 candidates.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Registration Process */}
      <section className="py-16 px-4 bg-white border-t border-gray-200">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0f2862] mb-4">Registration Process</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Applicants must register through the official registration link provided on the website. During the registration process, candidates must select one of the following categories:
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <div className="bg-gray-50 border-l-4 border-[#0f2862] p-6 rounded-r-xl flex-1 shadow-sm">
              <h4 className="text-xl font-bold text-[#0f2862] mb-2">AI Quiz</h4>
              <p className="text-gray-600 text-sm mb-4">Focuses on theoretical knowledge of artificial intelligence and general AI awareness.</p>
              <span className="inline-block bg-green-100 text-green-700 font-bold px-3 py-1 rounded text-sm">No Registration Fee</span>
            </div>
            
            <div className="bg-gray-50 border-l-4 border-green-500 p-6 rounded-r-xl flex-1 shadow-sm">
              <h4 className="text-xl font-bold text-[#0f2862] mb-2">AI Problem-Solving</h4>
              <p className="text-gray-600 text-sm mb-4">Centers on problem-solving challenges hosted on Kaggle, specifically focusing on Computer Vision, NLP, and Machine Learning.</p>
              <span className="inline-block bg-blue-100 text-[#0f2862] font-bold px-3 py-1 rounded text-sm">Fee: 100 BDT</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Detailed Rules Grid */}
      <section className="py-16 px-4 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0f2862] mb-4">Detailed Rules & Regulations</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {rulesList.map((ruleBlock, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
                  <div className="text-[#0f2862]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={ruleBlock.icon}></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#0f2862]">{ruleBlock.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {ruleBlock.items.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                      <span>
                        {item.label && <span className="font-bold text-gray-900 mr-1">{item.label}:</span>}
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 bg-[#0f2862] text-white p-6 rounded-xl text-center max-w-4xl mx-auto shadow-md">
            <p className="text-sm italic opacity-90">
              * The rules may be updated to address omissions, inconsistencies, or new information before or during the event; however, the overall format and structure will not change substantially.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}