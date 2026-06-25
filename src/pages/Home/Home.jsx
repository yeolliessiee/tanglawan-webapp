import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Shared Header Component */}
      <Header />

      {/* Hero Section */}
      <header className="text-center py-20 px-4">
        <h1 className="text-5xl font-extrabold text-blue-400 mb-6 tracking-tight">
          TANGLAWAN
        </h1>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
          An early screening tool that classifies diabetic retinopathy severity based on pupillary response patterns. 
          Utilizing high-speed waveform inference for timely neuro-retinal assessment.
        </p>
        <div className="mt-10 space-x-4">
          <button className="bg-blue-600 px-8 py-3 rounded-md font-bold hover:bg-blue-500 transition-colors text-white">
            View Your Results
          </button>
          <button className="bg-gray-800 border border-gray-600 px-8 py-3 rounded-md font-bold hover:border-blue-400 transition-colors text-white">
            Learn More
          </button>
        </div>
      </header>

      {/* Video Section */}
      <section className="max-w-5xl mx-auto px-4 py-16 w-full">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-300">
          See Our System in Action
        </h2>
        <div className="aspect-video bg-gray-900 rounded-3xl overflow-hidden border-4 border-gray-800 shadow-2xl">
          <video className="w-full h-full object-cover" controls>
            <source src="/avp.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Device Information */}
      <section className="max-w-6xl mx-auto px-4 py-16 w-full">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-300">
          Device Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card-glow p-6 rounded-xl text-center">
            <div className="text-blue-400 text-4xl mb-4">👁️</div>
            <h3 className="font-bold mb-2">PIPR Technology</h3>
            <p className="text-sm text-gray-400">
              Post-Illumination Pupil Response tracking for neuro-retinal assessment.
            </p>
          </div>
          <div className="card-glow p-6 rounded-xl text-center">
            <div className="text-blue-400 text-4xl mb-4">⚡</div>
            <h3 className="font-bold mb-2">Real-Time Analysis</h3>
            <p className="text-sm text-gray-400">
              High-speed waveform inference for immediate results.
            </p>
          </div>
          <div className="card-glow p-6 rounded-xl text-center">
            <div className="text-blue-400 text-4xl mb-4">🛡️</div>
            <h3 className="font-bold mb-2">Non-Invasive</h3>
            <p className="text-sm text-gray-400">
              Safe and painless screening process without physical contact.
            </p>
          </div>
          <div className="card-glow p-6 rounded-xl text-center">
            <div className="text-blue-400 text-4xl mb-4">👥</div>
            <h3 className="font-bold mb-2">Patient-Friendly</h3>
            <p className="text-sm text-gray-400">
              Easy-to-use touch interface with detailed report generation.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-gray-800" />

      {/* Key Features */}
      <section className="max-w-6xl mx-auto px-4 py-16 w-full">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-300">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start space-x-4 card-glow p-6 rounded-lg">
            <div className="text-blue-500 mt-1">✔</div>
            <div>
              <h4 className="font-bold text-blue-400">5-Level Severity Classification</h4>
              <p className="text-gray-400 text-sm">
                Precise diagnosis from No DR to Proliferative Diabetic Retinopathy.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4 card-glow p-6 rounded-lg">
            <div className="text-blue-500 mt-1">✔</div>
            <div>
              <h4 className="font-bold text-blue-400">Comprehensive Waveform Analysis</h4>
              <p className="text-gray-400 text-sm">
                Detailed pupil response waveforms using high-speed inference.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4 card-glow p-6 rounded-lg">
            <div className="text-blue-500 mt-1">✔</div>
            <div>
              <h4 className="font-bold text-blue-400">Patient Health Integration</h4>
              <p className="text-gray-400 text-sm">
                Correlate results with blood sugar levels and diabetes history.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4 card-glow p-6 rounded-lg">
            <div className="text-blue-500 mt-1">✔</div>
            <div>
              <h4 className="font-bold text-blue-400">Downloadable Reports</h4>
              <p className="text-gray-400 text-sm">
                Generate PDF reports with diagnosis and eye video recordings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Footer Component */}
      <Footer />
    </div>
  );
}