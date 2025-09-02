import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface StickyBottomBarProps {
  onReserveClick: () => void;
}

const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onReserveClick }) => {
  const webinarDate = new Date("2025-09-07T18:00:00+05:30"); // 6:00 PM IST

  const calculateTimeLeft = () => {
    const difference = +webinarDate - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Scroll listener to show the bar
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [timeLeft]);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom-full duration-500">
      <div className="bg-black/50 backdrop-blur-lg border-t border-white/10 shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.3)] rounded-t-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Left Side: Countdown Timer */}
            <div className="flex items-center gap-4 text-white">
              <div className="hidden sm:flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-300" />
                <span className="font-light text-sm text-white/80">Webinar starts in:</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono tracking-wider">
                <div className="flex flex-col items-center">
                  <span className="text-lg font-semibold">{formatTime(timeLeft.days)}</span>
                  <span className="text-[10px] font-light text-white/60">DD</span>
                </div>
                <span className="text-lg font-semibold -translate-y-1.5">:</span>
                <div className="flex flex-col items-center">
                  <span className="text-lg font-semibold">{formatTime(timeLeft.hours)}</span>
                  <span className="text-[10px] font-light text-white/60">HH</span>
                </div>
                <span className="text-lg font-semibold -translate-y-1.5">:</span>
                <div className="flex flex-col items-center">
                  <span className="text-lg font-semibold">{formatTime(timeLeft.minutes)}</span>
                  <span className="text-[10px] font-light text-white/60">MM</span>
                </div>
                <span className="text-lg font-semibold -translate-y-1.5">:</span>
                <div className="flex flex-col items-center">
                  <span className="text-lg font-semibold">{formatTime(timeLeft.seconds)}</span>
                  <span className="text-[10px] font-light text-white/60">SS</span>
                </div>
              </div>
            </div>

            {/* Right Side: CTA Button */}
            <div>
              <button
                onClick={onReserveClick}
                className="bg-gradient-to-r from-pink-500 to-orange-500 text-white font-medium py-2.5 px-5 sm:py-3 sm:px-6 rounded-full text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 hover:from-pink-600 hover:to-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-500/50"
              >
                Reserve Free Seat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBottomBar;
