import React from 'react';
import { Award, Users, BookOpen } from 'lucide-react';

const SpeakerBioSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Meet Your Speaker
          </h2>
          <p className="text-lg text-white/70 font-light">
            Learn from industry experts with proven track records
          </p>
        </div>

        <div className="bg-card rounded-2xl border border-white/10 p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Speaker Photo */}
            <div className="lg:col-span-1">
              <div className="relative max-w-sm mx-auto lg:max-w-none">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 to-purple-400 p-1">
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex items-center justify-center">
                    {/* Placeholder - Replace with actual speaker image */}
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="w-12 h-12 text-white" />
                      </div>
                      <p className="text-white/80 text-sm font-light">Speaker Photo</p>
                    </div>
                    {/* 
                    Uncomment and replace with actual image:
                    <img 
                      src="/speaker-photo.jpg" 
                      alt="Speaker Name"
                      className="w-full h-full object-cover rounded-xl"
                    />
                    */}
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker Bio */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Yadali Rishitha 
              </h3>
              <p className="text-blue-300 font-medium mb-6">
                Senior Career Coach & AI Technology Expert
              </p>
              
              <div className="space-y-4 mb-8">
                <p className="text-white/80 font-light leading-relaxed">
                  In career coaching and AI technology, Yadali Rishitha has helped 2,000+ professionals land their dream jobs at top companies including Google, Microsoft, and Amazon
                </p>
                <p className="text-white/80 font-light leading-relaxed">
                  As a former recruiter and current AI specialist, brings unique insights into what employers really want and how to leverage technology for job search success.
                </p>
              </div>

              {/* Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-background rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-3 justify-center sm:justify-start">
                    <Users className="w-5 h-5 text-blue-300" />
                    <div>
                      <p className="text-white font-medium text-sm">2000+</p>
                      <p className="text-white/60 text-xs">Clients Coached</p>
                    </div>
                  </div>
                </div>
               
                <div className="bg-background rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-3 justify-center sm:justify-start">
                    <BookOpen className="w-5 h-5 text-green-300" />
                    <div>
                      <p className="text-white font-medium text-sm">95%</p>
                      <p className="text-white/60 text-xs">Success Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerBioSection;
