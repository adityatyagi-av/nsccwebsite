"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Counter = ({ targetCount, isVisible }) => {
  const [count, setCount] = useState(0);
  const speed = 200;

  useEffect(() => {
    let animation;

    if (isVisible) {
      const increment = Math.ceil(targetCount / speed);

      const updateCount = () => {
        setCount(prevCount => {
          const newCount = prevCount + increment;
          return newCount < targetCount ? newCount : targetCount;
        });
      };

      animation = setInterval(updateCount, 1);
    }

    return () => clearInterval(animation);
  }, [targetCount, isVisible]);

  return (
    <div className="counter">
        <h5 className="text-5xl font-bold text-white">
                <span className="inline text-white">
                    <span className="inline text-white">
                        {count}
                    </span>
                    <span className="text-indigo-200">
                        +
                    </span>
                </span>
            </h5>
    </div>

  );
};

const CTA = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-indigo-800 mx-auto max-w-screen-xl my-8 md:my-20">
        <div className="container grid grid-cols-2 gap-8 py-8 mx-auto text-center md:grid-cols-4">
            <div>
                <Counter 
                targetCount={100} 
                isVisible={isVisible} />
                <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
                  Members
                </p>
            </div>
            <div>
                <Counter 
                targetCount={15} 
                isVisible={isVisible} />
                <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
                  Ongoing Projects
                </p>
            </div>
            <div>
                <Counter 
                targetCount={30} 
                isVisible={isVisible} />
                <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
                  Finished Projects
                </p>
            </div>
            <div>
                <Counter 
                targetCount={8} 
                isVisible={isVisible} />
                <p className="text-xs font-medium tracking-wide text-indigo-100 uppercase">
                  Collaborators
                </p>
            </div>
        </div>
        <div className="flex p-4 mx-auto mt-4 w-52">
            <Link
            href="/register"
            className="py-2 px-4 bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                Register Now
            </Link>
        </div>
    </section>
  );
};

export default CTA;