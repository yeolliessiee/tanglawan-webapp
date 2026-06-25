import React from "react";
import Header from "../../components/Header/Header";

export default function PrivacyPolicy() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Shared Header Layout */}
      <Header />

      {/* Header Banner */}
      <header className="text-center py-12 px-4">
        <div className="flex justify-center mb-4 text-blue-400 text-4xl">🛡️</div>
        <h1 className="text-4xl font-extrabold mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm">Last Updated: April 2, 2026</p>
        <p className="max-w-2xl mx-auto mt-6 text-gray-400">
          Your privacy and data security are our top priorities. This policy explains how we collect, use, and protect your health information.
        </p>
      </header>

      {/* Main Privacy Layout Content */}
      <main className="max-w-4xl mx-auto px-6 space-y-12 mb-20 w-full">
        
        {/* Intro Scope Statement */}
        <div className="card-glow p-6 rounded-xl text-sm text-gray-400 leading-relaxed italic">
          The DR Screening System ("we", "our", or "us") is committed to protecting the privacy and security of your personal health information. This Privacy Policy describes how we handle data collected through our diabetic retinopathy screening device and web platform.
        </div>

        {/* Information We Collect Categories */}
        <section className="space-y-6">
          <h2 className="section-title text-xl font-bold">Information We Collect</h2>
          
          <div className="grid grid-cols-1 gap-4">
            {/* Personal Demographics Card */}
            <div className="card-glow p-6 rounded-xl">
              <h3 className="text-blue-400 font-bold mb-3">Personal Information</h3>
              <ul className="text-sm text-gray-400 space-y-2 list-disc pl-5">
                <li>Full name, age, and contact information</li>
                <li>Patient ID and medical record number</li>
                <li>Address and location data</li>
                <li>Contact number for follow-up appointments</li>
              </ul>
            </div>

            {/* Ocular Assessment Data Card */}
            <div className="card-glow p-6 rounded-xl">
              <h3 className="text-blue-400 font-bold mb-3">Health Information</h3>
              <ul className="text-sm text-gray-400 space-y-2 list-disc pl-5">
                <li>Blood sugar levels and diabetes duration</li>
                <li>Heart rate and blood pressure measurements</li>
                <li>Pupil tracking data and PIPR waveforms</li>
                <li>Diabetic retinopathy diagnosis and severity classification</li>
                <li>Eye video recordings during testing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data Protection Infrastructure */}
        <section className="space-y-6">
          <h2 className="section-title text-xl font-bold">Data Security & Protection</h2>
          <div className="bg-blue-900/10 border border-blue-500/20 p-8 rounded-xl">
            <p className="text-sm mb-6 text-gray-300">We implement industry-standard security measures to protect your health information:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-blue-400">•</span> End-to-end encryption for all data transmissions
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">•</span> Secure cloud storage with HIPAA compliance
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">•</span> Multi-factor authentication for healthcare providers
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">•</span> Regular security audits and penetration testing
              </div>
            </div>
          </div>
        </section>

        {/* Direct Technical / DPO Contact */}
        <section className="card-glow p-10 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-6">Questions or Concerns?</h2>
          <p className="text-gray-400 text-sm mb-8">If you have questions about this Privacy Policy or wish to exercise your rights, please contact our Data Protection Officer.</p>
          <div className="space-y-2 text-sm">
            <p><span className="text-blue-400 font-bold">Email:</span> tanglawan@gmail.com</p>
            <p><span className="text-blue-400 font-bold">Phone:</span> +63 (2) 8123-4567</p>
            <p><span className="text-blue-400 font-bold">Address:</span> 123 Metro Manila</p>
          </div>
        </section>

      </main>

      {/* Explicit Isolation Footer */}
      <footer className="text-center py-10 border-t border-gray-800 text-[10px] text-gray-600 mt-auto">
        <p>© 2026 TANGLAWAN. All rights reserved.</p>
      </footer>
    </div>
  );
}