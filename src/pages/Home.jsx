import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import hero1 from '../image/hero2.jpeg';
import g1 from '../image/g1.jpeg';
import g2 from '../image/g2.jpeg';
import g3 from '../image/g3.jpeg';
import g4 from '../image/g4.jpeg';
import g5 from '../image/g5.jpeg';
import g6 from '../image/g6.jpeg';
import g7 from '../image/g7.jpeg';
import g8 from '../image/g8.jpeg';

export default function Home() {
  // Hero Background Images Array
  const heroImages = [hero1];

  // Gallery Images Array
  const galleryImages = [g1, g2, g3, g4, g5, g6, g7, g8];

  // State to track current hero image
  const [currentBg, setCurrentBg] = useState(0);

  // Auto-slide Hero Background every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      {/* 1. Pure Hero Banner (16:9 Aspect Ratio) */}
      <section className="relative w-full aspect-video max-h-[80vh] bg-black overflow-hidden shadow-md">
        {heroImages.map((img, idx) => (
          <img 
            key={idx}
            src={img} 
            alt="BDAIO Hero Banner" 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === currentBg ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </section>

      {/* 2. Hero Text Section */}
      <section className="bg-gray-100 py-16 px-4 shadow-sm relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-green-100 text-green-700 text-sm font-bold tracking-wider mb-6 border border-green-200">
            REGISTRATION OPENS SOON
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-[#0f2862]">
            Bangladesh Artificial <br className="hidden md:block"/> Intelligence Olympiad
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
            Hunting talents at the grassroots. We aim to spread AI knowledge across high schools and colleges, providing rigorous training to build the next generation of global tech leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 text-[#0f2862] font-bold py-3 px-8 rounded hover:bg-green-400 transition shadow-md cursor-not-allowed opacity-90">
              Register Now (Coming Soon)
            </button>
            <Link to="/learning-path" className="border-2 border-[#0f2862] text-[#0f2862] font-bold py-3 px-8 rounded hover:bg-[#0f2862] hover:text-white transition shadow-md">
              View AI Learning Path
            </Link>
          </div>
        </div>
      </section>

      {/* 3. About BdAIO & Highlights Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Side: Text Content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-[#0f2862] mb-4">What is BdAIO?</h2>
              <div className="w-16 h-1 bg-green-500 mb-8"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 text-justify">
                The Bangladesh Artificial Intelligence Olympiad (BdAIO) is a national competition designed to inspire and engage students in Artificial Intelligence while serving as the official pathway for Bangladeshi participants to compete in international platforms such as the International Olympiad on Artificial Intelligence (IOAI), International Artificial Intelligence Olympiad (IAIO), and Asia Pacific Olympiad in Artificial Intelligence (APOAI).
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 text-justify">
                Open to students up to Grade 12 or equivalent, BdAIO provides a platform to showcase programming skills in Python and understanding of core AI concepts through Kaggle-based challenges. Through multiple competitive rounds, participants enhance their problem-solving abilities, deepen their AI knowledge, and compete for the opportunity to represent Bangladesh globally. Additionally, the Bangladesh University of Business and Technology (BUBT) serves as the Platinum Sponsor and host of the National Round for a three-year term beginning in 2025.
              </p>
              <Link to="/about" className="inline-flex items-center text-[#0f2862] font-bold hover:text-green-600 transition group">
                Learn More 
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
            </div>

            {/* Right Side: 4 Highlight Cards */}
            <div className="lg:w-1/2 grid sm:grid-cols-2 gap-6">
              
              {/* Mission */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-[#0f2862] mb-2">Mission</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Inspire young minds to explore Artificial Intelligence through competitive problem-solving and hands-on experience.</p>
              </div>

              {/* International Gateway */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-[#0f2862] mb-2">International Gateway</h3>
                <p className="text-gray-600 text-sm leading-relaxed">BdAIO is the official qualifying competition for Bangladeshi students to represent the country at the International AI Olympiad (IAIO).</p>
              </div>

              {/* Who Can Participate? */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-[#0f2862] mb-2">Who Can Participate?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Students under 20 studying up to Grade 12 (HSC/A-Level), Madrasa equivalent, or the 4th semester of a Polytechnic program in Bangladesh are eligible to compete.</p>
              </div>

              {/* Topics to Prepare */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-[#0f2862] mb-2">Topics to Prepare</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Machine Learning, Deep Learning, NLP, Reinforcement Learning, AI Search, and applying these tools to solve real-world problems.</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. Roadmap / Timeline Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0f2862] mb-2">Roadmap</h2>
            <p className="text-gray-600 text-lg mb-4">Your journey from registration to the international stage.</p>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto relative border-l-4 border-[#0f2862] ml-4 md:mx-auto">
            
            {/* Step 1: Register */}
            <div className="mb-10 ml-8 relative group">
              <div className="absolute -left-[42px] top-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow group-hover:scale-125 transition-transform duration-300"></div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-[#0f2862] mb-2">Register</h3>
                <p className="text-gray-600">Sign up for the competition.</p>
              </div>
            </div>

            {/* Step 2: Qualify */}
            <div className="mb-10 ml-8 relative group">
              <div className="absolute -left-[42px] top-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow group-hover:scale-125 transition-transform duration-300"></div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <span className="text-sm font-bold text-green-600 bg-green-100 px-2 py-1 rounded inline-block mb-2">2-10 May 2026</span>
                <h3 className="text-xl font-bold text-[#0f2862] mb-2">Qualify</h3>
                <p className="text-gray-600 mb-4">Pass the regional/online round.</p>
                <Link to="/rules" className="inline-block bg-[#0f2862] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-blue-800 transition">View Rules</Link>
              </div>
            </div>

            {/* Step 3: Compete */}
            <div className="mb-10 ml-8 relative group">
              <div className="absolute -left-[42px] top-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow group-hover:scale-125 transition-transform duration-300"></div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <span className="text-sm font-bold text-green-600 bg-green-100 px-2 py-1 rounded inline-block mb-2">16 May 2026</span>
                <h3 className="text-xl font-bold text-[#0f2862] mb-2">Compete</h3>
                <p className="text-gray-600 mb-4">National-level competition.</p>
                <Link to="/syllabus" className="inline-block bg-[#0f2862] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-blue-800 transition">View Syllabus</Link>
              </div>
            </div>

            {/* Step 4: Selection */}
            <div className="mb-10 ml-8 relative group">
              <div className="absolute -left-[42px] top-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow group-hover:scale-125 transition-transform duration-300"></div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <span className="text-sm font-bold text-green-600 bg-green-100 px-2 py-1 rounded inline-block mb-2">18 – 20 May 2026</span>
                <h3 className="text-xl font-bold text-[#0f2862] mb-2">Selection</h3>
                <p className="text-gray-600">Selection Camp and Grooming.</p>
              </div>
            </div>

            {/* Step 5: Represent */}
            <div className="mb-10 ml-8 relative group">
              <div className="absolute -left-[42px] top-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow group-hover:scale-125 transition-transform duration-300"></div>
              <div className="bg-[#0f2862] p-6 rounded-lg shadow-md border border-[#0f2862] hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <h3 className="text-xl font-bold text-white">Represent</h3>
                </div>
                <p className="text-gray-300">Represent Bangladesh on the International AI Olympiad.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Dynamic Moving Image Gallery */}
      <section className="py-16 bg-[#0f2862] overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-4">Glimpses of Past Camps</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>
        
        {/* The Marquee Track */}
        <div className="relative w-full overflow-hidden">
          {/* We duplicate the array to create a seamless infinite loop */}
          <div className="animate-marquee flex gap-6 px-3">
            {[...galleryImages, ...galleryImages].map((img, index) => (
              <div key={index} className="w-72 h-48 md:w-80 md:h-56 shrink-0 rounded-lg overflow-hidden shadow-xl border-2 border-[#1e4494]">
                <img 
                  src={img} 
                  alt={`Gallery Image ${index}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Organizers & Sponsors */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-lg font-semibold text-gray-400 uppercase tracking-widest mb-8">Platinum Sponsor & Host</h3>
          <div className="flex justify-center items-center">
            <div className="bg-gray-50 border border-gray-200 px-8 py-6 rounded-xl inline-block shadow-sm">
              <h4 className="text-2xl font-black text-[#0f2862] mb-1">xxxxx</h4>
              <p className="text-sm font-medium text-gray-600">xxxxxxxx</p>
              <p className="text-xs text-green-600 font-bold mt-2 uppercase tracking-wide">Official Host 2025-2027</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}