import React from 'react';
import { Settings, CheckCircle, Layers, UserPlus } from 'lucide-react';

const features = [
  {
    icon: Settings,
    title: "JD Resume Optimizer",
    description: "AI-powered tool that tailors your resume to specific job descriptions.",
  },
  {
    icon: CheckCircle,
    title: "ATS Checker",
    description: "Comprehensive analysis to ensure your resume passes applicant tracking systems.",
  },
  {
    icon: Layers,
    title: "Guided Builder",
    description: "Step-by-step resume creation with professional templates and suggestions.",
  },
  {
    icon: UserPlus,
    title: "LinkedIn Generator",
    description: "Automated profile optimization to enhance your professional online presence.",
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            PrimoBoost AI Features
          </h2>
          <p className="text-lg text-white/70 font-light max-w-2xl mx-auto">
            Powerful AI-driven tools to accelerate your job search and career growth
          </p>
        </div>

        <div className="flex justify-center items-center flex-wrap py-10 -m-4">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={idx}
                className="group relative w-full max-w-[320px] sm:w-[320px] h-[400px] m-4 transition-all duration-500"
              >
                {/* Skewed panels - ENHANCED */}
                <span
                  className="absolute top-0 left-[50px] w-1/2 h-full rounded-lg transform skew-x-[15deg] transition-all duration-500 
                             bg-card/10 group-hover:bg-gradient-to-br group-hover:from-blue-500/20 group-hover:to-purple-500/20
                             group-hover:skew-x-0 group-hover:left-[10px] group-hover:w-[calc(100%-20px)]"
                />
                <span
                  className="absolute top-0 left-[50px] w-1/2 h-full rounded-lg transform skew-x-[15deg] blur-[40px] transition-all duration-500 
                             bg-card/20 group-hover:bg-gradient-to-br group-hover:from-blue-500/20 group-hover:to-purple-500/20
                             group-hover:skew-x-0 group-hover:left-[10px] group-hover:w-[calc(100%-20px)]"
                />

                {/* Animated blobs - ENHANCED */}
                <span className="pointer-events-none absolute inset-0 z-10">
                  <span className="absolute top-0 left-0 w-0 h-0 rounded-lg opacity-0 
                                   bg-gradient-to-br from-white/20 to-transparent backdrop-blur-[15px] shadow-[0_5px_25px_rgba(0,0,0,0.1)] 
                                   transition-all duration-300 animate-blob 
                                   group-hover:top-[-60px] group-hover:left-[40px] group-hover:w-[150px] group-hover:h-[150px] group-hover:opacity-100" />
                  <span className="absolute bottom-0 right-0 w-0 h-0 rounded-lg opacity-0 
                                   bg-gradient-to-tl from-white/20 to-transparent backdrop-blur-[15px] shadow-[0_5px_25px_rgba(0,0,0,0.1)] 
                                   transition-all duration-500 animate-blob animation-delay-1000 
                                   group-hover:bottom-[-60px] group-hover:right-[40px] group-hover:w-[150px] group-hover:h-[150px] group-hover:opacity-100" />
                </span>

                {/* Content - ENHANCED */}
                <div className="relative z-20 left-0 p-[20px_30px] h-full bg-card/80 backdrop-blur-[10px] shadow-lg rounded-lg text-white border border-white/20
                               transition-all duration-500 
                               group-hover:left-0 group-hover:p-[40px] group-hover:scale-105 group-hover:bg-black/30">
                  <div className="transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-white/10 backdrop-blur-sm border border-white/20 
                                   group-hover:bg-white/15 group-hover:border-white/30 transition-all duration-300 shrink-0">
                      <IconComponent className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <h3 className="text-xl font-medium mb-3 text-white">
                        {feature.title}
                      </h3>
                      <p className="text-sm font-light leading-relaxed text-white/80 flex-grow">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
