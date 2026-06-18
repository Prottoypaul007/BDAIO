import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LearningPath from './pages/LearningPath';
import Blog from './pages/Blog';
import About from './pages/About'; // <--- ADD THIS IMPORT
import PlaceholderPage from './pages/PlaceholderPage';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* UPDATE THIS LINE */}
            <Route path="/about" element={<About />} /> 
            
            <Route path="/syllabus" element={<PlaceholderPage title="Syllabus & Rules" />} />
            <Route path="/committee" element={<PlaceholderPage title="Executive Committee" />} />
            <Route path="/results" element={<PlaceholderPage title="Olympiad Results" />} />
            <Route path="/learning-path" element={<LearningPath />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}