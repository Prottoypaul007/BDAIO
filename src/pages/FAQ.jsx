import { useState } from 'react';

export default function FAQ() {
  // --- FAQ Data based on your exact Bengali content ---
  const faqCategories = [
    {
      categoryName: "প্রতিযোগিতা সম্পর্কিত",
      icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      faqs: [
        {
          question: "BdAIO বা \"বাংলাদেশ আর্টিফিশিয়াল ইন্টেলিজেন্স অলিম্পিয়াড\" কী?",
          answer: "“আর্টিফিশিয়াল ইন্টেলিজেন্স” বা “কৃত্রিম বুদ্ধিমত্তা” বর্তমান সময়ের সবথেকে অত্যাধুনিক প্রযুক্তিগুলোর একটি। ২০২৪ সাল থেকে আন্তর্জাতিক পর্যায়ের আর্টিফিশিয়াল ইন্টেলিজেন্স অলিম্পিয়াড আয়োজিত হচ্ছে। বাংলাদেশ থেকে আন্তর্জাতিক পর্যায়ের আর্টিফিশিয়াল ইন্টেলিজেন্স অলিম্পিয়াডের জন্য জাতীয় দল বাছাই করা এবং সার্বিকভাবে স্কুল-কলেজ পড়ুয়া তরুণ শিক্ষার্থীদেরকে কৃত্রিম বুদ্ধিমত্তা প্রযুক্তিতে আগ্রহী ও দক্ষ করে তোলার জন্যে বাংলাদেশ আর্টিফিশিয়াল ইন্টেলিজেন্স অলিম্পিয়াড আয়োজন করা হয়।"
        },
        {
          question: "বাংলাদেশ আর্টিফিশিয়াল ইন্টেলিজেন্স অলিম্পিয়াড প্রতিযোগিতা কয়টি ধাপে অনুষ্ঠিত হয়?",
          answer: "সাধারণত একটি আঞ্চলিক এবং একটি জাতীয় প্রতিযোগিতা অনুষ্ঠিত হয়। প্রতিযোগিতার আগে সোশাল মিডিয়া ও ওয়েবসাইটে বিস্তারিত জানানো হয়।"
        },
        {
          question: "আন্তর্জাতিক পর্যায়ে কি BdAIO-এর বিজয়ীরা অংশ নিতে পারে?",
          answer: "হ্যাঁ, BdAIO-এর সেরা শিক্ষার্থীরা আন্তর্জাতিক IOAI (International Olympiad in AI) ও International Artificial Intelligence Olympiad (IAIO) প্রতিযোগিতায় বাংলাদেশকে প্রতিনিধিত্বের সুযোগ পেয়।"
        },
        {
          question: "বিজয়ীরা কী ধরনের পুরস্কার পায়?",
          answer: "সার্টিফিকেট, মেডেল, ক্রেস্ট এবং আন্তর্জাতিক প্রতিযোগিতায় অংশ নেওয়ার সুযোগ।"
        },
        {
          question: "BdAIO বছরে কতবার আয়োজন করা হয়?",
          answer: "প্রতি বছরে অন্তত একবার আয়োজন করা হয়।"
        },
        {
          question: "প্রতিযোগীদের আন্তর্জাতিক পর্যায়ে অংশগ্রহণের খরচ কে বহন করে?",
          answer: "প্রতিযোগীদের আন্তর্জাতিক পর্যায়ে নিজ খরচে যেতে হবে। তবে স্পন্সর থেকে অনুদান পাওয়া গেলে আংশিক বা সম্পূর্ণ খরচ আয়োজক বহন করবে।"
        }
      ]
    },
    {
      categoryName: "অংশগ্রহণের যোগ্যতা",
      icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
      faqs: [
        {
          question: "কারা BdAIO-তে অংশ নিতে পারবে?",
          answer: "বাংলা মাধ্যম ও ইংরেজি ভার্শনের ক্ষেত্রে ৬ষ্ঠ শ্রেণি থেকে এইচএসসি ২০২৬ পরীক্ষার্থী পর্যন্ত।\nইংরেজি মাধ্যমের ক্ষেত্রে A2 পরীক্ষার্থী পর্যন্ত।\nমাদ্রাসা শিক্ষা বোর্ডের ক্ষেত্রে ৬ষ্ঠ শ্রেণি থেকে আলীম পরীক্ষার্থী পর্যন্ত।\nপলিটেকনিকের ৪র্থ সেমিস্টারের শিক্ষার্থী পর্যন্ত।"
        },
        {
          question: "ব্রিটিশ কারিকুলামের শিক্ষার্থীরা কি অংশ নিতে পারবে?",
          answer: "হ্যাঁ, ব্রিটিশ কারিকুলামের শিক্ষার্থীরা অংশ নিতে পারবে।"
        },
        {
          question: "বাংলা মাধ্যম ও ইংরেজি ভার্শনের শিক্ষার্থীরা কি অংশ নিতে পারবে?",
          answer: "হ্যাঁ, বাংলা মাধ্যম ও ইংরেজি ভার্শনের শিক্ষার্থীরা অংশ নিতে পারবে।"
        },
        {
          question: "পলিটেকনিকের শিক্ষার্থীরা কি অংশ নিতে পারবে?",
          answer: "হ্যাঁ, পলিটেকনিকের ৪র্থ সেমিস্টার পর্যন্ত শিক্ষার্থীরা অংশ নিতে পারবে।"
        },
        {
          question: "বিশ্ববিদ্যালয়ের শিক্ষার্থীরা কি অংশ নিতে পারবে?",
          answer: "না, BdAIO শুধুমাত্র স্কুল-কলেজ পর্যায়ের শিক্ষার্থীদের জন্য।"
        },
        {
          question: "কীভাবে রেজিস্ট্রেশন করতে হবে?",
          answer: "এই ওয়েবসাইটে দেওয়া লিংক থেকে রেজিস্ট্রেশন করা যাবে।"
        },
        {
          question: "অংশগ্রহণ করতে কি পাসপোর্ট থাকা প্রয়োজন?",
          answer: "না, জাতীয় পর্যায়ে অংশ নিতে পাসপোর্ট লাগবে না। তবে আন্তর্জাতিক প্রতিযোগিতায় দল পাঠনোর জন্য ভিসা প্রক্রিয়াকরণ করতে হয়। তখন পাসপোর্ট প্রয়োজন হয়। সেজন্য পাসপোর্ট আগে থেকে করে রাখা ভালো।"
        },
        {
          question: "রিজিওনাল ও ন্যাশনাল রাউন্ডে অংশ না নিয়েও কি এআই অলিম্পিয়াডের ক্যাম্পে আসা সম্ভব?",
          answer: "যারা ঠিক আগের ক্যাম্পে সেরা ৮-এ ছিল, তারা এইবারও সরাসরি ক্যাম্পে আসতে পারবে।"
        }
      ]
    },
    {
      categoryName: "প্রস্তুতি ও পরীক্ষা",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      faqs: [
        {
          question: "প্রতিযোগিতায় কোন কোন বিষয় আসবে?",
          answer: "মেশিন লার্নিং ও আর্টিফিশিয়াল ইন্টেলিজেন্সের ক্লাসিক সমস্যা, কম্পিউটার ভিশন, ন্যাচারাল ল্যাঙ্গুয়েজ প্রসেসিং, অডিও প্রসেসিং, ডিপ লার্নিং এবং সংশ্লিষ্ট বিষয়াবলি। বিস্তারিত জানতে সিলেবাস অংশ দেখুন।"
        },
        {
          question: "আগে থেকে AI জানা না থাকলে কি অংশ নিতে পারব?",
          answer: "হ্যাঁ, শুধুমাত্র বেসিক পাইথন জানা থাকলেই শুরু করা যায়। শেখা শুরু করা বেশ সহজ।"
        },
        {
          question: "প্রশ্নগুলো কোন ভাষায় থাকবে?",
          answer: "ইংরেজি ভাষায়।"
        },
        {
          question: "টিম হিসেবে না এককভাবে অংশ নিতে হবে?",
          answer: "এককভাবে অংশ নিতে হবে।"
        },
        {
          question: "প্রস্তুতির জন্য কোথায় উপকরণ পাওয়া যাবে?",
          answer: "https://ioai-official.org/ – এই ওয়েবসাইটে বিস্তারিত রিসোর্স পাওয়া যাবে। আমাদের ওয়েবসাইটের বইপত্র অংশেও কিছু রিসোর্স দেওয়া আছে। এর বাইরে ইউটিউব ও ব্লগ সাইটে প্রচুর শিক্ষা উপকরণ মিলবে। মৌলিক বিষয়গুলো শেখার জন্যে স্ট্যাটকোয়েস্ট (https://www.youtube.com/@statquest) একটি চমৎকার ইউটিউব চ্যানেল।"
        }
      ]
    }
  ];

  // Component for individual FAQ Accordion items
  const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Format answer to handle line breaks and links
    const formatAnswer = (text) => {
      // Split by newlines
      let parts = text.split('\n');
      
      return parts.map((part, i) => {
        // Very basic link detection
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        
        if (part.match(urlRegex)) {
          const splitByUrl = part.split(urlRegex);
          return (
            <span key={i} className="block mb-2">
              {splitByUrl.map((chunk, j) => 
                chunk.match(urlRegex) ? (
                  <a key={j} href={chunk} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium break-all">
                    {chunk}
                  </a>
                ) : chunk
              )}
            </span>
          );
        }
        
        return <span key={i} className="block mb-2">{part}</span>;
      });
    };

    return (
      <div className="border-b border-gray-200">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="w-full flex justify-between items-center py-5 text-left focus:outline-none group"
        >
          <h3 className={`text-lg font-bold pr-4 transition-colors ${isOpen ? 'text-green-600' : 'text-[#0f2862] group-hover:text-green-600'}`}>
            {question}
          </h3>
          <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? 'bg-green-100 border-green-200 text-green-600 transform rotate-180' : 'bg-gray-50 border-gray-200 text-gray-400 group-hover:border-green-300 group-hover:text-green-500'}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </span>
        </button>
        
        <div 
          className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
        >
          <div className="text-gray-600 leading-relaxed font-medium">
            {formatAnswer(answer)}
          </div>
        </div>
      </div>
    );
  };

  return (
<div className="flex flex-col min-h-screen bg-gray-50 font-bangla">      
      {/* 1. Page Header */}
      <section className="bg-[#0f2862] text-white py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী</h1>
          <p className="text-lg md:text-xl text-green-400 font-bold uppercase tracking-widest mb-4">FAQ</p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            বাংলাদেশ আর্টিফিশিয়াল ইন্টেলিজেন্স অলিম্পিয়াড (BdAIO) সম্পর্কে আপনার সকল প্রশ্নের উত্তর।
          </p>
        </div>
      </section>

      {/* 2. FAQ Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          
          {faqCategories.map((category, idx) => (
            <div key={idx} className="mb-16 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              
              {/* Category Header */}
              <div className="bg-gray-50 px-8 py-6 border-b border-gray-200 flex items-center gap-4">
                <div className="w-12 h-12 bg-[#0f2862] text-white rounded-xl flex items-center justify-center shadow-sm">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={category.icon}></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-extrabold text-[#0f2862]">{category.categoryName}</h2>
              </div>
              
              {/* FAQ Items */}
              <div className="px-8 pb-4">
                {category.faqs.map((faq, i) => (
                  <FAQItem key={i} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          ))}

          {/* Still Have Questions Box */}
          <div className="mt-12 bg-green-50 rounded-2xl p-8 border border-green-200 text-center">
            <h3 className="text-2xl font-bold text-[#0f2862] mb-3">আরও প্রশ্ন আছে?</h3>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">আপনার যদি আরও কোনো প্রশ্ন থাকে যা এখানে উত্তর দেওয়া হয়নি, তাহলে আমাদের সাথে যোগাযোগ করতে দ্বিধা করবেন না।</p>
            <a href="mailto:bdaio@bdosn.org" className="inline-flex items-center justify-center bg-[#0f2862] text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-800 transition shadow-md">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              Contact Us
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}