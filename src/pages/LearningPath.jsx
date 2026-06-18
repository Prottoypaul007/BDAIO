export default function LearningPath() {
  const tracks = [
    {
      grade: "Class 10",
      title: "Foundations of Logic & Programming",
      desc: "Before AI, you need a strong grasp of algorithmic thinking.",
      topics: ["Introduction to Programming (Python)", "Control Structures & Loops", "Fundamental Algorithms", "Basic Probability"]
    },
    {
      grade: "Class 11",
      title: "Core Math & Classical ML",
      desc: "The mathematical engine behind AI algorithms.",
      topics: ["Linear Algebra Essentials", "Calculus for Optimization", "Intro to Scikit-Learn", "Regression & Classification"]
    },
    {
      grade: "Class 12",
      title: "Deep Learning & Architecture",
      desc: "Stepping into modern AI and neural networks.",
      topics: ["Neural Network Architecture", "PyTorch Framework", "Computer Vision (CNNs)", "Natural Language Processing"]
    }
  ];

  return (
    <div className="bg-gray-50 py-16 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#0f2862] mb-4">The Student AI Learning Path</h1>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">A structured, class-wise curriculum designed to take you from a beginner programmer to a deep learning practitioner.</p>
        </div>

        <div className="space-y-8">
          {tracks.map((track, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden md:flex">
              <div className="bg-[#0f2862] text-white p-8 md:w-1/3 flex flex-col justify-center border-b-4 md:border-b-0 md:border-r-4 border-green-500">
                <span className="text-green-400 font-bold uppercase tracking-widest text-sm mb-2">{track.grade}</span>
                <h2 className="text-2xl font-bold">{track.title}</h2>
              </div>
              <div className="p-8 md:w-2/3">
                <p className="text-gray-600 mb-6 font-medium italic">"{track.desc}"</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {track.topics.map((topic, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <span className="text-gray-800 font-medium">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}