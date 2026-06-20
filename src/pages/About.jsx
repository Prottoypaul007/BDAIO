import { Link } from 'react-router-dom';
import g8 from '../image/g8.jpeg';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* 1. Page Header */}
      <section className="bg-[#0f2862] text-white py-20 px-4 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="1" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">About BDAIO</h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            The Bangladesh Artificial Intelligence Olympiad (BDAIO) is the premier national platform dedicated to discovering, training, and inspiring the next generation of computational thinkers and AI researchers.
          </p>
        </div>
      </section>

      {/* 2. Our Mission & Vision */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div>
              <h2 className="text-3xl font-bold text-[#0f2862] mb-4">Our Mission</h2>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Artificial Intelligence is shaping the future of humanity, but true innovation requires strong foundational logic, mathematics, and programming. Our mission is to take this knowledge out of the universities and bring it directly to high school and college students. 
                <br /><br />
                We travel to the grassroots levels of Bangladesh, visiting schools to hunt for hidden talents. Once identified, we don't just test them—we train them, guide them properly, and equip them to compete on the global stage.
              </p>

              <h2 className="text-3xl font-bold text-[#0f2862] mb-4">Our Vision</h2>
              <div className="w-16 h-1 bg-green-500 mb-6"></div>
              <p className="text-gray-600 leading-relaxed">
                To transform Bangladesh from an IT-consumer nation into a powerhouse of core Artificial Intelligence research and development by nurturing young minds at their most creative age.
              </p>
            </div>

            {/* Image / Graphic Container */}
            <div className="relative">
              <div className="absolute inset-0 bg-green-500 transform translate-x-4 translate-y-4 rounded-xl opacity-20"></div>
              <img 
                src={g8}
                alt="Students collaborating" 
                className="relative rounded-xl shadow-lg w-full object-cover aspect-square md:aspect-auto md:h-[500px]"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 3. What We Do (Core Activities) */}
      <section className="py-20 bg-gray-50 border-t border-gray-100 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0f2862] mb-4">What We Do</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                title: "Grassroots Talent Hunt",
                desc: "We physically visit schools and colleges across various divisions in Bangladesh. Through seminars and basic logical reasoning tests, we identify brilliant students who have a natural aptitude for problem-solving."
              },
              {
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                title: "The National Olympiad",
                desc: "We organize rigorous, multi-stage competitions starting from regional rounds to a grand National Olympiad, testing students on mathematics, algorithms, and machine learning fundamentals."
              },
              {
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                title: "Training & Guidance",
                desc: "The Olympiad is just the beginning. National winners are brought into our intensive residential camps where they are mentored by industry experts and academic scholars in advanced Deep Learning."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
                <div className="w-14 h-14 bg-blue-50 text-[#0f2862] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Call to Action */}
      <section className="py-16 bg-[#0f2862] text-center px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-6">Want to be a part of the AI revolution?</h2>
          <p className="text-gray-300 mb-8 text-lg">Whether you are a student ready to compete, a school wanting to host a talent hunt, or an organization looking to sponsor the future—we want to hear from you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/learning-path" className="bg-green-500 text-[#0f2862] font-bold py-3 px-8 rounded hover:bg-green-400 transition shadow-md">
              Start Learning Now
            </Link>
            <a href="https://www.facebook.com/bdaio.org" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white font-bold py-3 px-8 rounded hover:bg-white hover:text-[#0f2862] transition shadow-md">
              Follow Us on Facebook
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}