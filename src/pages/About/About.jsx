import React from "react";
import Header from "../../components/Header/Header";

export default function About() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Shared Header Layout Component */}
      <Header />

      {/* Header Section */}
      <header className="text-center py-12 px-4">
        <h1 className="text-4xl font-extrabold text-blue-400 mb-4 tracking-tight">
          About Our Technology
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Revolutionizing diabetic retinopathy screening through advanced pupil tracking technology and deep learning.
        </p>
      </header>

      {/* Our Mission */}
      <section className="max-w-4xl mx-auto px-6 mb-16 w-full">
        <div className="card-glow p-8 rounded-2xl flex items-start space-x-6">
          <div className="text-blue-400 text-3xl mt-1"></div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              We are dedicated to making diabetic retinopathy screening accessible, affordable, and accurate. 
              Our mission is to prevent vision loss through early detection using innovative, non-invasive technology. 
              By leveraging <strong>Post-Illumination Pupil Response (PIPR)</strong>, we provide a powerful tool for rapid screening and diagnosis.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-6 mb-20 w-full">
        <h2 className="text-2xl font-bold text-center mb-10 text-blue-300">How It Works</h2>
        <div className="space-y-4">
          {/* Step 1 */}
          <div className="card-glow p-6 rounded-xl flex items-center space-x-6">
            <div className="step-circle bg-red-600">1</div>
            <div>
              <h3 className="font-bold text-red-500">Red Light Stimulus</h3>
              <p className="text-gray-400 text-xs mt-1">
                Initial exposure establishes baseline measurements and pupillary contraction patterns.
              </p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="card-glow p-6 rounded-xl flex items-center space-x-6">
            <div className="step-circle bg-blue-600">2</div>
            <div>
              <h3 className="font-bold text-blue-500">Blue Light Stimulus</h3>
              <p className="text-gray-400 text-xs mt-1">
                Specifically activates intrinsically photosensitive retinal ganglion cells (ipRGCs) often affected in diabetic patients.
              </p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="card-glow p-6 rounded-xl flex items-center space-x-6">
            <div className="step-circle bg-purple-600">3</div>
            <div>
              <h3 className="font-bold text-purple-500">PIPR Analysis</h3>
              <p className="text-gray-400 text-xs mt-1">
                Our system measures sustained pupil constriction after the light ends, capturing critical retinal health data.
              </p>
            </div>
          </div>
          {/* Step 4 */}
          <div className="card-glow p-6 rounded-xl flex items-center space-x-6">
            <div className="step-circle bg-green-600">4</div>
            <div>
              <h3 className="font-bold text-green-500">AI-Powered Diagnosis</h3>
              <p className="text-gray-400 text-xs mt-1">
                Deep learning algorithms compare waveforms against validated cases to classify severity levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Device Specifications */}
      <section className="max-w-5xl mx-auto px-6 mb-20 w-full">
        <h2 className="text-2xl font-bold text-center mb-10 text-blue-300">
          Device Specifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-glow p-6 rounded-xl">
            <div className="text-blue-400 mb-2"></div>
            <h4 className="font-bold text-sm">Test Duration</h4>
            <p className="text-gray-500 text-xs mt-1">60 seconds per complete test cycle</p>
          </div>
          <div className="card-glow p-6 rounded-xl">
            <div className="text-blue-400 mb-2"></div>
            <h4 className="font-bold text-sm">Light Sources</h4>
            <p className="text-gray-500 text-xs mt-1">Red (630nm) and Blue (470nm) LED stimuli</p>
          </div>
          <div className="card-glow p-6 rounded-xl">
            <div className="text-blue-400 mb-2"></div>
            <h4 className="font-bold text-sm">Camera System</h4>
            <p className="text-gray-500 text-xs mt-1">High-speed infrared eye tracking at 60fps</p>
          </div>
          <div className="card-glow p-6 rounded-xl">
            <div className="text-blue-400 mb-2"></div>
            <h4 className="font-bold text-sm">Target Sensitivity</h4>
            <p className="text-gray-500 text-xs mt-1">Designed for 95%+ detection accuracy</p>
          </div>
          <div className="card-glow p-6 rounded-xl">
            <div className="text-blue-400 mb-2"></div>
            <h4 className="font-bold text-sm">Safety</h4>
            <p className="text-gray-500 text-xs mt-1">Light intensity within safe clinical standards</p>
          </div>
          <div className="card-glow p-6 rounded-xl">
            <div className="text-blue-400 mb-2"></div>
            <h4 className="font-bold text-sm">Demographics</h4>
            <p className="text-gray-500 text-xs mt-1">Optimized for diabetic patients aged 18-80</p>
          </div>
        </div>
      </section>

      {/* Why Choose Our System */}
      <section className="max-w-4xl mx-auto px-6 mb-20 w-full">
        <div className="bg-blue-900/10 border border-blue-500/20 p-10 rounded-2xl">
          <h2 className="text-2xl font-bold text-center mb-8">Why Choose Our System?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-sm">
            <div className="flex items-center space-x-3">
              <span className="text-blue-400">●</span>
              <p><strong>Non-Invasive:</strong> Painless, contact-free screening</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-green-400">●</span>
              <p><strong>Affordable:</strong> Cost-effective alternative to fundus imaging</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-cyan-400">●</span>
              <p><strong>Fast:</strong> Results generated in real-time</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-orange-400">●</span>
              <p><strong>Smart:</strong> Fully integrates with patient histories</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-purple-400">●</span>
              <p><strong>Precise:</strong> Uses high-speed waveform inference</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-red-400">●</span>
              <p><strong>Portable:</strong> Lightweight binocular design</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Impact Footer */}
      <footer className="text-center py-20 px-6 bg-black/20 border-t border-gray-800 mt-auto">
        <h2 className="text-2xl font-bold mb-6 text-blue-300">Clinical Impact</h2>
        <p className="max-w-3xl mx-auto text-gray-500 text-sm leading-relaxed mb-12">
          Early detection can reduce vision loss by 95%. 
          Our technology, <strong>TANGLAWAN</strong>, enables portable assessment, reaching underserved populations and catching disease in its most treatable stages.
        </p>
        <p className="text-gray-700 text-[10px]">© 2026 TANGLAWAN. All rights reserved.</p>
      </footer>
    </div>
  );
}