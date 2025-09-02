import React from 'react';

const WebinarVideoSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Watch the Teaser
          </h2>
          <p className="text-lg text-white/70 font-light max-w-2xl mx-auto">
            Get a quick preview of what you'll learn in the free live webinar.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl border border-white/10 p-4 sm:p-8">
            {/* Video Container - 16:9 Aspect Ratio */}
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black/40">
              {/* Actual video embed */}
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/stRv-JuuR-k" 
                title="Webinar Teaser"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-white/60 text-sm font-light">
                Duration: 51 seconds • Preview of full 2-hour masterclass
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebinarVideoSection;
