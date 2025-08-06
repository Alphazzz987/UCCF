import React, { useEffect, useState, useRef } from 'react';
import { ImpactStat } from '../types';

interface ImpactStatsProps {
  stats: ImpactStat[];
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
}

const ImpactStats: React.FC<ImpactStatsProps> = ({ 
  stats, 
  title, 
  subtitle,
  backgroundColor = 'bg-orange-500'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={`py-16 ${backgroundColor} text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
            {subtitle && <p className="text-xl max-w-3xl mx-auto">{subtitle}</p>}
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="p-6 rounded-lg bg-white bg-opacity-10 backdrop-blur-sm">
              <div className="flex items-center justify-center">
                <span className="text-4xl md:text-5xl font-bold">
                  {isVisible ? (
                    <CountUp end={stat.value} duration={2} />
                  ) : (
                    0
                  )}
                </span>
                <span className="text-4xl md:text-5xl font-bold ml-1">{stat.suffix}</span>
              </div>
              <p className="text-lg mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Simple CountUp component
interface CountUpProps {
  end: number;
  duration: number;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressRatio = Math.min(progress / (duration * 1000), 1);
      
      setCount(Math.floor(progressRatio * end));
      
      if (progressRatio < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };
    
    animationFrame = requestAnimationFrame(updateCount);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [end, duration]);
  
  return <>{count}</>;
};

export default ImpactStats;