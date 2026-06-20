export default function Footer() {
  return (
    <footer className="bg-[#0a1b42] text-gray-300 py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-green-500">AI</span> BDAIO
          </h3>
          <p className="text-sm leading-relaxed mb-4">Empowering the next generation of innovators in Bangladesh through computational logic and artificial intelligence.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-green-400 transition">About Us</a></li>
            <li><a href="/learning-path" className="hover:text-green-400 transition">Learning Path</a></li>
            <li><a href="/syllabus" className="hover:text-green-400 transition">Syllabus</a></li>
            <li><a href="/contact" className="hover:text-green-400 transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact Us</h4>
          <p className="text-sm mb-2">Dhaka, Bangladesh</p>
          <p className="text-sm mb-2">Office: Green City Center, Level 12, 758 Satmasjid Road, Dhaka 1209, Bangladesh</p>
          <p className="text-sm mb-2">Email:  bdaio@bdosn.org</p>
          <p className="text-sm text-gray-500 mt-6">&copy; {new Date().getFullYear()} BDAIO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}