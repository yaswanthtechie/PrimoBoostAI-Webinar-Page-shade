import React from 'react';
import { Calendar, Clock, Users, Award } from 'lucide-react';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';

interface HeroSectionProps {
  scrollToRegistration: () => void;
}

export function HeroSection({ scrollToRegistration }: HeroSectionProps) {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-6 pt-24 sm:pt-32 lg:pt-40 text-center overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-sm mb-8">
              <span className="text-xs font-light uppercase tracking-[0.08em] text-white/70">Free</span>
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span className="text-sm font-light tracking-tight text-white/90">Live Webinar</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Crack Your Dream Job with
              <span className="block bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent font-bold"> PrimoBoost AI - Free Live Webinar</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-8 font-light">
               Join us on September 7 to learn resume building, job application strategies, and AI-driven tools to get hired faster.
            </p>
            
            {/* Event Details */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mb-12">
              <div className="flex items-center gap-2 text-white/90 bg-black/20 rounded-full px-4 py-2 backdrop-blur-sm border border-white/20">
                <Calendar className="w-5 h-5 text-blue-300" />
                <span className="font-light">September 7, 2025</span>
              </div>
              <div className="flex items-center gap-2 text-white/90 bg-black/20 rounded-full px-4 py-2 backdrop-blur-sm border border-white/20">
                <Clock className="w-5 h-5 text-blue-300" />
                <span className="font-light">6:00 PM - 8:00 PM IST</span>
              </div>
              <div className="flex items-center gap-2 text-white/90 bg-black/20 rounded-full px-4 py-2 backdrop-blur-sm border border-white/20">
                <Users className="w-5 h-5 text-blue-300" />
                <span className="font-light">Limited Seats</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mb-12">
              <InteractiveHoverButton
                onClick={scrollToRegistration}
                text="Reserve Free Seat"
                className="w-auto px-8 py-6 text-lg border-white/30 text-white bg-black/20 hover:border-primary"
              />
            </div>
          </div>
          
          {/* Key Points */}
          <div className="mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="font-light text-white mb-2">Resume Building</h3>
                <p className="text-sm text-white/70 font-light">Create ATS-optimized resumes that get you noticed by recruiters</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-purple-300" />
                </div>
                <h3 className="font-light text-white mb-2">Job Application Strategies</h3>
                <p className="text-sm text-white/70 font-light">Learn proven techniques to increase your interview callbacks</p>
              </div>
              <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-green-300" />
                </div>
                <h3 className="font-light text-white mb-2">AI-Driven Tools</h3>
                <p className="text-sm text-white/70 font-light">Leverage AI technology to fast-track your job search process</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
