'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Array com todas as imagens disponíveis para as divs quadradas
const speakerImages = [
  '/images/hero/1.webp',
  '/images/hero/2.webp',
  '/images/hero/3.webp',
  '/images/hero/4.webp',
  '/images/hero/5.webp',
  '/images/hero/6.webp',
  '/images/hero/8.webp',
  '/images/hero/9.webp',
  '/images/hero/10.webp',
];

// Imagem principal fixa
const mainSpeakerImage = '/images/hero/main.webp';

// Posições base dos speakers
const speakerPositions = [
  {
    className: "absolute right-[176px] top-5 h-[430px] w-[250px]",
    width: 860,
    height: 860,
    borderColor: "border-violet-500",
    zIndex: 1,
    isMain: true
  },
  {
    className: "absolute left-0 top-[60px] h-[181px] w-[181px]",
    width: 860,
    height: 860,
    borderColor: "border-emerald-400",
    zIndex: 2,
    isMain: false
  },
  {
    className: "absolute right-[30px] top-[100px] h-[176px] w-[176px]",
    width: 860,
    height: 860,
    borderColor: "border-pink-400",
    zIndex: 2,
    isMain: false
  },
  {
    className: "absolute left-[38px] top-[296px] h-[147px] w-[147px]",
    width: 860,
    height: 860,
    borderColor: "border-blue-400",
    zIndex: 2,
    isMain: false
  },
  {
    className: "absolute right-[98px] top-[330px] h-[150px] w-[150px]",
    width: 860,
    height: 860,
    borderColor: "border-amber-400",
    zIndex: 2,
    isMain: false
  }
];

const Hero = () => {
  const [currentSpeakers, setCurrentSpeakers] = useState<Array<{ image: string; position: typeof speakerPositions[0] }>>([]);
  const [nextSpeakers, setNextSpeakers] = useState<Array<{ image: string; position: typeof speakerPositions[0] }>>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Função para embaralhar array
  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const updateSpeakers = () => {
    // Prepara as próximas imagens
    const shuffledImages = shuffleArray([...speakerImages]);
    const newSpeakers = speakerPositions.map((position, index) => ({
      image: position.isMain ? mainSpeakerImage : shuffledImages[index - 1],
      position
    }));

    // Inicia a transição
    setNextSpeakers(newSpeakers);
    setIsTransitioning(true);

    // Após a transição completa, atualiza as imagens atuais e reseta o estado
    setTimeout(() => {
      setCurrentSpeakers(newSpeakers);
      setIsTransitioning(false);
    }, 1200); // Mantém sincronizado com a duração da transição CSS
  };

  useEffect(() => {
    // Configuração inicial
    const shuffledImages = shuffleArray([...speakerImages]);
    const initialSpeakers = speakerPositions.map((position, index) => ({
      image: position.isMain ? mainSpeakerImage : shuffledImages[index - 1],
      position
    }));
    setCurrentSpeakers(initialSpeakers);
    setNextSpeakers(initialSpeakers);

    // Configura o intervalo para atualizações
    const interval = setInterval(updateSpeakers, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[700px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -top-[125px] h-[900px] w-full">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative mx-auto max-w-[1440px] px-4 pt-0 lg:px-[120px]">
        {/* Logo */}
        <div className="col-span-3">
          <Image
            src="/images/logo-moon.png"
            alt="Moon Speakers Logo"
            width={285}
            height={167}
            priority
          />
        </div>

        {/* Main Content Grid */}
        <div className="mt-8 grid grid-cols-12 gap-5">
          {/* Left Column - Text Content */}
          <div className="col-span-12 space-y-10 lg:col-span-6">
            <h1 className="text-5xl font-bold leading-[1.3] text-white">
              Elevate your Event with Global Speakers
            </h1>
            <p className="text-xl text-gray-300">
              Connect with world-class speakers who can transform your event into an unforgettable experience. From thought leaders to industry pioneers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-5">
              <button 
                onClick={scrollToContact}
                className="flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-4 font-semibold text-white transition hover:bg-violet-700"
              >
                <span>Find a Speaker</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button 
                onClick={scrollToContact}
                className="flex items-center gap-2 rounded-xl border-2 border-violet-400 px-6 py-4 font-semibold text-violet-400 transition hover:border-violet-500 hover:text-violet-500"
              >
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 5.5C4.5 3.567 6.067 2 8 2C9.933 2 11.5 3.567 11.5 5.5C11.5 7.433 9.933 9 8 9C6.067 9 4.5 7.433 4.5 5.5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M2 14C2 11.239 4.239 9 7 9H9C11.761 9 14 11.239 14 14V16H2V14Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                <span>Book a Call</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-4">
                <p className="text-3xl font-bold text-violet-400">2500+</p>
                <p className="text-sm text-gray-300">Global Speakers</p>
              </div>
              <div className="col-span-4">
                <p className="text-3xl font-bold text-violet-400">150+</p>
                <p className="text-sm text-gray-300">Countries</p>
              </div>
              <div className="col-span-4">
                <p className="text-3xl font-bold text-violet-400">10K+</p>
                <p className="text-sm text-gray-300">Events Completed</p>
              </div>
            </div>
          </div>

          {/* Right Column - Speakers Grid */}
          <div className="col-span-12 relative h-[559px] lg:col-span-6">
            {/* Speaker Images */}
            {currentSpeakers.map((speaker, index) => (
              <div
                key={`${index}-container`}
                className={`${speaker.position.className} overflow-hidden rounded-2xl border-[3px] ${speaker.position.borderColor}`}
                style={{ zIndex: speaker.position.zIndex }}
              >
                {/* Current Image Layer */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
                    !speaker.position.isMain && isTransitioning ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <Image
                    src={speaker.image}
                    alt={`Featured Speaker ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Next Image Layer */}
                {!speaker.position.isMain && (
                  <div 
                    className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
                      isTransitioning ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <Image
                      src={nextSpeakers[index]?.image || speaker.image}
                      alt={`Next Featured Speaker ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 