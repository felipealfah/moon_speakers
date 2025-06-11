'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';

// Array com todas as imagens disponíveis
const availableImages = [
  '/images/about/1.webp',
  '/images/about/2.webp',
  '/images/about/3.webp',
  '/images/about/4.webp',
  '/images/about/5.webp',
  '/images/about/6.webp',
  '/images/about/7.webp',
  '/images/about/8.webp',
  '/images/about/9.webp',
];

const About = () => {
  // Seleciona 3 imagens aleatórias no carregamento do componente
  const selectedImages = useMemo(() => {
    const shuffled = [...availableImages].sort(() => Math.random() - 0.5);
    return {
      main: shuffled[0],
      left: shuffled[1],
      right: shuffled[2]
    };
  }, []); // Array vazio significa que só será executado uma vez, no mount do componente

  return (
    <section className="bg-black py-14">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-[120px]">
        <div className="mt-20 grid grid-cols-12 gap-5">
          {/* Left Column - Speaker Images */}
          <div className="col-span-12 lg:col-span-6 flex items-center">
            <div className="grid grid-cols-6 gap-5 w-full">
              {/* Main large image */}
              <div className="col-span-6 h-[500px] overflow-hidden rounded-xl border-[3px] border-violet-400">
                <Image
                  src={selectedImages.main}
                  alt="Featured Speaker"
                  width={600}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Two smaller images below */}
              <div className="col-span-3 h-[240px] overflow-hidden rounded-xl border-[3px] border-emerald-400">
                <Image
                  src={selectedImages.left}
                  alt="Featured Speaker"
                  width={300}
                  height={240}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="col-span-3 h-[240px] overflow-hidden rounded-xl border-[3px] border-blue-500">
                <Image
                  src={selectedImages.right}
                  alt="Featured Speaker"
                  width={300}
                  height={240}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-span-12 mt-8 lg:col-span-6 lg:col-start-7 lg:mt-0">
            {/* Title */}
            <h2 className="text-4xl font-light leading-[1.125] text-white mb-12">
              Your <span className="font-semibold text-[#7F5AF0]">global connection</span> for elite <span className="font-semibold">international speakers</span>.
            </h2>

            {/* Checkpoints */}
            <div className="space-y-5">
              <div className="flex items-start gap-5">
                <div className="flex h-6 w-6 items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#7F5AF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-lg text-white">
                  Moon Speakers connects world-class thought leaders with global audiences through comprehensive international speaker management.
                </p>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-6 w-6 items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#2CB67D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-lg text-white">
                  Our dedicated team handles everything from strategic speaker selection to seamless travel logistics, ensuring flawless execution for your event.
                </p>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-6 w-6 items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#7F5AF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-lg text-white">
                  What distinguishes us is our unparalleled network of influential voices combined with our meticulous attention to detail.
                </p>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-6 w-6 items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#2CB67D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-lg text-white">
                  When you partner with Moon Speakers, you gain access to renowned experts who deliver powerful insights while we manage every aspect of the engagement with precision and cultural intelligence.
                </p>
              </div>
            </div>

            {/* Footer Items */}
            <div className="mt-12 grid grid-cols-12 gap-5">
              <div className="col-span-6 flex items-center gap-5">
                <div className="flex h-6 w-6 items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#004AAD" strokeWidth="2"/>
                    <path d="M3.6001 9H20.4001" stroke="#004AAD" strokeWidth="2"/>
                    <path d="M3.6001 15H20.4001" stroke="#004AAD" strokeWidth="2"/>
                    <path d="M12 20.4C14.6509 20.4 16.8 16.9706 16.8 12C16.8 7.02944 14.6509 3.6 12 3.6C9.34907 3.6 7.2001 7.02944 7.2001 12C7.2001 16.9706 9.34907 20.4 12 20.4Z" stroke="#004AAD" strokeWidth="2"/>
                  </svg>
                </div>
                <span className="text-base text-white">Global Network</span>
              </div>

              <div className="col-span-6 flex items-center gap-5">
                <div className="flex h-6 w-6 items-center justify-center">
                  <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.8 6.4C20.8 9.93756 17.9376 12.8 14.4 12.8C10.8624 12.8 8 9.93756 8 6.4C8 2.86244 10.8624 0 14.4 0C17.9376 0 20.8 2.86244 20.8 6.4Z" stroke="#004AAD" strokeWidth="2"/>
                    <path d="M28.8 24V20.8C28.8 16.7216 25.4784 13.4 21.4 13.4H7.4C3.32162 13.4 0 16.7216 0 20.8V24" stroke="#004AAD" strokeWidth="2"/>
                  </svg>
                </div>
                <span className="text-base text-white">Expert Management</span>
              </div>

              <div className="col-span-6 flex items-center gap-5">
                <div className="flex h-6 w-6 items-center justify-center">
                  <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11L13.5 1L26 11" stroke="#004AAD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 9V21C4 22.1046 4.89543 23 6 23H21C22.1046 23 23 22.1046 23 21V9" stroke="#004AAD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-base text-white">Travel Logistics</span>
              </div>

              <div className="col-span-6 flex items-center gap-5">
                <div className="flex h-6 w-6 items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="#004AAD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#004AAD" strokeWidth="2"/>
                  </svg>
                </div>
                <span className="text-base text-white">Quality Assurance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 