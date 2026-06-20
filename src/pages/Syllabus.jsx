import { Link } from 'react-router-dom';

export default function Syllabus() {
  // Data for Classical ML, Neural Network and Deep Learning
  const advancedSyllabus = [
    {
      title: "Programming Fundamentals",
      topics: [
        "Python Basics (Loops, Functions, etc.)",
        "NumPy and Pandas for Data Handling",
        "Matplotlib and Seaborn for Visualization",
        "Scikit-learn for ML",
        "PyTorch Basics",
        "Tensor (Multi-dimensional Array) Manipulation",
        "Training Models on CPU and GPU"
      ]
    },
    {
      title: "Supervised Learning",
      topics: [
        "Linear Regression",
        "Logistic Regression",
        "L1 & L2 Regularization",
        "K-Nearest Neighbors (K-NN)",
        "Decision Trees",
        "Model Ensembles (Gradient Boosting, Bagging, Random Forest)",
        "Support Vector Machines (SVM)"
      ]
    },
    {
      title: "Unsupervised Learning",
      topics: [
        "K-Means Clustering",
        "Principal Component Analysis (PCA)",
        "t-SNE, UMAP",
        "DBSCAN, Hierarchical & Spectral Clustering"
      ]
    },
    {
      title: "Data Science Fundamentals",
      topics: [
        "Model Evaluation Metrics (Accuracy, Precision, Recall, F1-Score, etc.)",
        "Underfitting, Overfitting",
        "Hyperparameter Tuning",
        "Cross-Validation",
        "Confusion Matrix and ROC Curves",
        "Feature Engineering",
        "Data Processing"
      ]
    },
    {
      title: "Natural Language Processing (NLP)",
      topics: [
        "Text Classification",
        "Pre-trained Text Encoders (e.g. BERT)",
        "Language Modeling",
        "Pre-trained Language Models (open-source and API-based ones)"
      ]
    },
    {
      title: "Neural Networks",
      topics: [
        "Perceptron Basics",
        "Gradient Descent",
        "Backpropagation",
        "Activation Functions (ReLU, Sigmoid, Tanh)",
        "Loss Functions (MSE, MAE, Cross Entropy, etc.)"
      ]
    },
    {
      title: "Deep Learning",
      topics: [
        "Loss Functions (MSE, MAE, Cross Entropy, etc.)",
        "Deep Learning Multi-Layer Perceptrons (MLP)",
        "Data Embeddings (text, image, audio)",
        "Pooling Techniques (Max, Average)",
        "Attention Mechanism",
        "Transformers (theory needed only for text and image)",
        "Autoencoders",
        "SGD, Mini-Batch Gradient Descent",
        "Momentum Methods (Adam, AdamW)",
        "Convergence and Learning Rates",
        "Regularization: Dropout, Early Stopping, Weight Decay",
        "Weight Initialization",
        "Batch Normalization",
        "Model Finetuning (full and parameter-efficient)"
      ]
    },
    {
      title: "Computer Vision",
      topics: [
        "Convolutional Layers",
        "Image Classification",
        "Image Segmentation (U-Net)",
        "Pre-trained Vision Encoders (e.g. ResNet)",
        "Image Augmentation",
        "Vision-text encoders (e.g. CLIP)"
      ]
    },
    {
      title: "Evaluation of ML Models",
      topics: [
        "Classification Metrics",
        "Bias-Variance Tradeoff"
      ]
    }
  ];

  // Data for Quiz Competition
  const quizSyllabus = [
    {
      title: "Basic AI Knowledge",
      topics: [
        "Basics of Artificial Intelligence",
        "History of AI",
        "Applications of AI",
        "Machine Learning Basics",
        "Logic and Algorithms",
        "Data & Bias in AI",
        "AI Ethics and Safety"
      ]
    },
    {
      title: "Python Programming",
      topics: [
        "Basics of Python",
        "Variables and Data Types",
        "Operators and Expressions",
        "Conditional Statements",
        "Loops (for, while)",
        "Functions"
      ]
    },
    {
      title: "Recommended Books",
      topics: [
        "NCTB ICT Books (Class 8 to Class 12)"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      
      {/* 1. Page Header */}
      <section className="bg-[#0f2862] text-white py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Syllabus & Info</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive curriculum guidelines, practice materials, and past question archives to help you prepare.
          </p>
        </div>
      </section>

      {/* 2. Quiz Competition Section */}
      <section className="py-16 px-4 bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h2 className="text-3xl font-bold text-[#0f2862]">Quiz Competition</h2>
            </div>
            <div className="w-24 h-1 bg-green-500"></div>
            <p className="mt-4 text-gray-600">The foundational stage assessing general knowledge and basic logic.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {quizSyllabus.map((section, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
                <h3 className="text-xl font-bold text-[#0f2862] mb-4 pb-2 border-b-2 border-green-200">{section.title}</h3>
                <ul className="space-y-3">
                  {section.topics.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      <span className="text-gray-700 text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Advanced ML & Deep Learning Section */}
      <section className="py-16 px-4 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#0f2862] text-white rounded-lg flex items-center justify-center shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </div>
              <h2 className="text-3xl font-bold text-[#0f2862]">Classical ML, Neural Network & Deep Learning</h2>
            </div>
            <div className="w-24 h-1 bg-[#0f2862]"></div>
            <p className="mt-4 text-gray-600">The core technical syllabus for programming and Kaggle-based challenges.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {advancedSyllabus.map((section, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-bold text-[#0f2862] mb-4 pb-2 border-b-2 border-gray-100">{section.title}</h3>
                <ul className="space-y-2">
                  {section.topics.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NEW: Past Question Papers Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[#0f2862] mb-4">Past Question Papers</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            Get a feel for the competition format. Review our archives from previous years to practice your problem-solving skills and gauge the difficulty level.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            
            {/* 2025 Archive Card */}
            <a 
              href="https://drive.google.com/drive/folders/1oQfYo4u8a1L93100D3vam0ahaYrx-vgL" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-50 border border-gray-200 p-6 rounded-xl hover:shadow-md hover:border-green-300 transition flex items-center justify-between group md:w-72"
            >
              <div className="text-left">
                <h3 className="text-3xl font-black text-[#0f2862] mb-1">2025</h3>
                <p className="text-sm font-medium text-gray-500">Question Archive</p>
              </div>
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </div>
            </a>

            {/* 2024 Archive Card (Make sure to update this link later!) */}
            <a 
              href="https://drive.google.com/drive/folders/1oQfYo4u8a1L93100D3vam0ahaYrx-vgL" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-50 border border-gray-200 p-6 rounded-xl hover:shadow-md hover:border-green-300 transition flex items-center justify-between group md:w-72"
            >
              <div className="text-left">
                <h3 className="text-3xl font-black text-[#0f2862] mb-1">2024</h3>
                <p className="text-sm font-medium text-gray-500">Question Archive</p>
              </div>
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* 5. IOAI Official Document Section */}
      <section className="py-16 px-4 bg-[#0f2862] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4">Official IOAI International Round Syllabus</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            BdAIO acts as the gateway to the International Olympiad on Artificial Intelligence (IOAI). Review the global standards and advanced syllabus directly from the official committee.
          </p>
          <a 
            href="https://ioai-official.org/wp-content/uploads/2025/10/Syllabus.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 text-[#0f2862] font-bold py-3 px-8 rounded hover:bg-green-400 transition shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            Download Official PDF
          </a>
        </div>
      </section>

    </div>
  );
}