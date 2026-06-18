export default function Blog() {
  const posts = [
    {
      title: "Regional Talent Hunt 2026 Concludes",
      date: "May 12, 2026",
      category: "News",
      excerpt: "Our team visited over 50 schools across the division, identifying remarkable students ready to tackle complex AI challenges.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Understanding Neural Networks: A Guide for Beginners",
      date: "April 28, 2026",
      category: "Tutorial",
      excerpt: "A breakdown of how artificial neurons mimic the human brain, written specifically for our Class 11 and 12 participants.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Preparation Strategies for the National AI Olympiad",
      date: "April 15, 2026",
      category: "Announcement",
      excerpt: "Get ready for the main event! Here are the recommended resources, syllabus adjustments, and practice environments you need.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="py-16 container mx-auto px-6 max-w-6xl">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-10 border-l-4 border-olympiad-blue pl-4">Latest Updates & Articles</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition flex flex-col">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold uppercase text-olympiad-blue bg-blue-50 px-2 py-1 rounded">{post.category}</span>
                <span className="text-sm text-gray-400">{post.date}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-olympiad-blue cursor-pointer">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-4 flex-grow">{post.excerpt}</p>
              <button className="text-olympiad-blue font-semibold text-sm hover:underline self-start">Read More &rarr;</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}