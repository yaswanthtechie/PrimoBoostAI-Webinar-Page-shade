import React, { useState } from 'react';
import { Calendar, Clock, Twitter, Linkedin } from 'lucide-react';
import RegistrationForm from './components/RegistrationForm';
import Toast from './components/Toast';
import WebinarVideoSection from './components/WebinarVideoSection';
import WhatYoullLearnSection from './components/WhatYoullLearnSection';
import FeaturesSection from './components/FeaturesSection';
import SpeakerBioSection from './components/SpeakerBioSection';
import SocialProofSection from './components/SocialProofSection';
import CountdownTimerSection from './components/CountdownTimerSection';
import { Footer } from './components/ui/footer';
import { FormData } from './types/form';
import StickyBottomBar from './components/StickyBottomBar';
import { submitToGoogleSheets } from './services/googleSheets';
import { HeroSection } from './components/HeroSection';
import { ShaderBackground } from './components/ui/hero-shader';

function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error';
    isVisible: boolean;
  }>({
    message: '',
    type: 'success',
    isVisible: false,
  });

  const handleFormSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    
    try {
      await submitToGoogleSheets(formData);
      setToast({
        message: 'Registration successful! Check your email for webinar details.',
        type: 'success',
        isVisible: true,
      });
       // ✅ WhatsApp Redirect Feature
    const whatsappUrl = import.meta.env.VITE_WHATSAPP_CHANNEL_URL;
    if (whatsappUrl && whatsappUrl !== 'YOUR_WHATSAPP_CHANNEL_URL') {
      setTimeout(() => {
        window.location.href = whatsappUrl;
      }, 2000); // delay for UX
    }

    } catch (error) {
      setToast({
        message: 'Registration failed. Please try again.',
        type: 'error',
        isVisible: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  // Smooth scroll to registration form
  const scrollToRegistration = () => {
    const registrationSection = document.getElementById('registration');
    if (registrationSection) {
      registrationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-background">
      <ShaderBackground />
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={closeToast}
      />
        
      {/* Main Content Wrapper */}
      <div className="relative z-10">
       {/* Header */}
        <header className="bg-transparent sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              {/* Logo + Text */}
              <div className="flex items-center gap-3">
                <img
                  src="https://res.cloudinary.com/dlkovvlud/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1751536902/a-modern-logo-design-featuring-primoboos_XhhkS8E_Q5iOwxbAXB4CqQ_HnpCsJn4S1yrhb826jmMDw_nmycqj.jpg"
                  alt="PrimoBoostAI Logo"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-xl font-bold text-white">PrimoBoostAI</span>
              </div>

              {/* Date & Time */}
              <div className="hidden sm:flex items-center gap-6 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>September 7, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>6:00 PM IST</span>
                </div>
              </div>
            </div>
          </div>
        </header>


        {/* Hero Section */}
        <HeroSection scrollToRegistration={scrollToRegistration} />

        {/* Webinar Video Section */}
        <WebinarVideoSection />

        {/* What You'll Learn Section */}
        <WhatYoullLearnSection />

        {/* PrimoBoost AI Features Section */}
        <FeaturesSection />

        {/* Speaker Bio Section */}
        <SpeakerBioSection />

        {/* Countdown Timer Section */}
        <CountdownTimerSection />

        {/* Registration Form Section */}
        <section id="registration" className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extralight text-white mb-4">
                Secure Your Spot Today
              </h2>
              <p className="text-lg text-white/80 font-light">
                Fill out the form below to register for this exclusive webinar
              </p>
            </div>

            <div className="bg-card rounded-2xl border border-white/10 p-8 sm:p-12">
              <RegistrationForm 
                onSubmit={handleFormSubmit}
                isSubmitting={isSubmitting}
              />
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <SocialProofSection />

        {/* Footer */}
        <Footer
          logo={
            <img
              src="https://res.cloudinary.com/dlkovvlud/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1751536902/a-modern-logo-design-featuring-primoboos_XhhkS8E_Q5iOwxbAXB4CqQ_HnpCsJn4S1yrhb826jmMDw_nmycqj.jpg"
              alt="PrimoBoostAI Logo"
              className="w-8 h-8 rounded-full object-cover"
            />
          }
          brandName="PrimoBoostAi"
          socialLinks={[
            {
              icon: <Twitter className="h-5 w-5" />,
              href: "#",
              label: "Twitter",
            },
            {
              icon: <Linkedin className="h-5 w-5" />,
              href: "#",
              label: "LinkedIn",
            },
          ]}
          mainLinks={[
            { href: "#", label: "About" },
            { href: "#", label: "Contact" },
          ]}
          legalLinks={[
            { href: "#", label: "Privacy Policy" },
            { href: "#", label: "Terms of Service" },
          ]}
          copyright={{
            text: "© 2025 PrimoBoostAi.",
            license: "All rights reserved.",
          }}
        />
      </div>
      {/* Sticky Bottom Bar */}
      <StickyBottomBar onReserveClick={scrollToRegistration} />
    </div>
  );
}

export default App;
