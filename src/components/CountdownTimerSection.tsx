import React from 'react';
import AnimatedNumberCountdown from '@/components/ui/countdown-number';

const CountdownTimerSection: React.FC = () => {
  // Corrected the time to 6:00 PM IST to match the rest of the application
  const webinarDate = new Date("2025-09-07T18:00:00+05:30"); // September 7, 2025, 6:00 PM IST

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card rounded-2xl border border-white/10 p-8 sm:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Limited Seats – Register Before It’s Too Late!
            </h2>
            <p className="text-lg text-white/70 font-light max-w-2xl mx-auto">
              The webinar is filling up fast. Secure your spot now!
            </p>
          </div>
          <AnimatedNumberCountdown
            endDate={webinarDate}
            className="my-4"
          />
        </div>
      </div>
    </section>
  );
};

export default CountdownTimerSection;
