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
  const heroImages = [
    hero1,
  ];

  // Gallery Images Array (Replace with your own later)
  const galleryImages = [
    g1, g2, g3, g4, g5, g6, g7, g8
  ];

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

      {/* 3. Categories / Eligibility Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0f2862] mb-4">Olympiad Categories</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Students from all over the country can participate based on their current academic standing.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* High School Category */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition transform hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 bg-[#0f2862] text-white rounded-lg flex items-center justify-center text-2xl font-bold mb-6 shadow-md">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">High School</h3>
              <p className="text-gray-600 mb-4">For students currently enrolled in Classes 9 and 10, or O-Level equivalents.</p>
              <ul className="space-y-2 text-sm text-gray-700 font-medium">
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Logical Reasoning</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Basic Python Programming</li>
              </ul>
            </div>

            {/* College Category */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition transform hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 bg-[#0f2862] text-white rounded-lg flex items-center justify-center text-2xl font-bold mb-6 shadow-md">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">College</h3>
              <p className="text-gray-600 mb-4">For students currently enrolled in Classes 11 and 12, or A-Level equivalents.</p>
              <ul className="space-y-2 text-sm text-gray-700 font-medium">
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Linear Algebra & Matrices</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Machine Learning Foundations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Olympiad Timeline */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0f2862] mb-4">Event Timeline</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto relative border-l-4 border-[#0f2862] ml-4 md:mx-auto">
            {[
              { date: "August 2026", title: "Regional Talent Hunt", desc: "School visits and primary screening across 8 divisions." },
              { date: "September 2026", title: "National Olympiad", desc: "Top regional performers compete in Dhaka for the national medals." },
              { date: "October 2026", title: "AI Training Camp", desc: "Intensive 5-day residential camp for national winners to learn advanced Deep Learning." },
              { date: "December 2026", title: "Global Representation", desc: "The top 6 students are selected to represent Bangladesh internationally." }
            ].map((item, idx) => (
              <div key={idx} className="mb-10 ml-8 relative group">
                <div className="absolute -left-[42px] top-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow group-hover:scale-125 transition-transform duration-300"></div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <span className="text-sm font-bold text-green-600 bg-green-100 px-2 py-1 rounded inline-block mb-2">{item.date}</span>
                  <h3 className="text-xl font-bold text-[#0f2862] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
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

      {/* 6. Organizers & Sponsors (Cleared out for now) */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-lg font-semibold text-gray-400 uppercase tracking-widest mb-8">Organized & Supported By</h3>
          <div className="flex justify-center items-center">
            {/* Blank placeholder text */}
            <p className="text-gray-400 italic font-medium">To be announced soon...</p>
          </div>
        </div>
      </section>
    </div>
  );
}