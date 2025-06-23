'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';

// Array com dados dos palestrantes
const speakers = [
  {
    id: 1,
    name: "Michelle Obama",
    country: "🇺🇸",
    image: "/images/search/1.webp",
    description: "Symbol of leadership with empathy. The most hired speaker in the world.",
    themes: "Equity, empowerment, purpose, youth"
  },
  {
    id: 2,
    name: "Tony Robbins",
    country: "🇺🇸",
    image: "/images/search/2.webp",
    description: "Absolute reference in high performance and personal transformation.",
    themes: "Overcoming, leadership, mindset, achievement"
  },
  {
    id: 3,
    name: "Serena Williams",
    country: "🇺🇸",
    image: "/images/search/3.webp",
    description: "Icon of excellence and feminine strength.",
    themes: "Resilience, discipline, diversity, performance"
  },
  {
    id: 4,
    name: "Oprah Winfrey",
    country: "🇺🇸",
    image: "/images/search/4.webp",
    description: "One of the most influential women in history. Pure inspiration.",
    themes: "Purpose, empowerment, overcoming, communication"
  },
  {
    id: 5,
    name: "Richard Branson",
    country: "🇬🇧",
    image: "/images/search/5.webp",
    description: "Disruptive and charismatic entrepreneur.",
    themes: "Innovation, business, bold culture, leadership"
  },
  {
    id: 6,
    name: "Nick Vujicic",
    country: "🇦🇺",
    image: "/images/search/6.webp",
    description: "Born without arms and legs, he is a global symbol of overcoming.",
    themes: "Faith, attitude, purpose, resilience"
  },
  {
    id: 7,
    name: "Simon Sinek",
    country: "🇺🇸",
    image: "/images/search/7.webp",
    description: "Author of 'Start With Why', beloved by leaders worldwide.",
    themes: "Purpose, organizational culture, inspiring leadership"
  },
  {
    id: 8,
    name: "Daymond John",
    country: "🇺🇸",
    image: "/images/search/8.webp",
    description: "Shark Tank + FUBU: from bottom to top with strategy and charisma.",
    themes: "Entrepreneurship, personal branding, sales"
  },
  {
    id: 9,
    name: "Brené Brown",
    country: "🇺🇸",
    image: "/images/search/9.webp",
    description: "Reference in vulnerability and courage as strength.",
    themes: "Culture, human connection, innovation"
  },
  {
    id: 10,
    name: "Gary Vaynerchuk",
    country: "🇺🇸",
    image: "/images/search/10.webp",
    description: "Media, energy and truth. One of the most followed on the planet.",
    themes: "Branding, business, marketing, attitude"
  },
  {
    id: 11,
    name: "Lewis Hamilton",
    country: "🇬🇧",
    image: "/images/search/11.webp",
    description: "Seven-time F1 champion and activist for equality and sustainability.",
    themes: "Performance, ethics, diversity, legacy"
  },
  {
    id: 12,
    name: "Malala Yousafzai",
    country: "🇵🇰",
    image: "/images/search/12.webp",
    description: "Nobel Peace Prize. Courage, youth and education with purpose.",
    themes: "Education, empowerment, human rights"
  },
  {
    id: 13,
    name: "Chris Gardner",
    country: "🇺🇸",
    image: "/images/search/13.webp",
    description: "Inspiration for The Pursuit of Happyness.",
    themes: "Persistence, success, life purpose"
  },
  {
    id: 14,
    name: "Jordan Peterson",
    country: "🇨🇦",
    image: "/images/search/14.webp",
    description: "Controversial, profound and sought after.",
    themes: "Responsibility, values, freedom, behavior"
  },
  {
    id: 15,
    name: "Ram Charan",
    country: "🇮🇳",
    image: "/images/search/15.webp",
    description: "The brain behind the biggest transformations of global companies.",
    themes: "Execution, strategy, growth"
  },
  {
    id: 16,
    name: "Amy Cuddy",
    country: "🇺🇸",
    image: "/images/search/16.webp",
    description: "Viral TED. Connection between presence and personal confidence.",
    themes: "Self-esteem, body language, personal leadership"
  },
  {
    id: 17,
    name: "José Mourinho",
    country: "🇵🇹",
    image: "/images/search/17.webp",
    description: "Tactical genius. Leadership under pressure with a winning mentality.",
    themes: "Management, discipline, teamwork, results"
  },
  {
    id: 18,
    name: "Esther Perel",
    country: "🇧🇪",
    image: "/images/search/18.webp",
    description: "Most sought-after psychologist in the corporate world.",
    themes: "Human relations, organizational culture, connection"
  },
  {
    id: 19,
    name: "Simone Biles",
    country: "🇺🇸",
    image: "/images/search/19.webp",
    description: "The greatest gymnast in history. Success with self-care.",
    themes: "High performance, mental health, courage"
  },
  {
    id: 20,
    name: "Robert Cialdini",
    country: "🇺🇸",
    image: "/images/search/20.webp",
    description: "Master of persuasion and decision-making behavior.",
    themes: "Influence, consumption, sales, applied psychology"
  }
];

const Search = () => {
  const [selectedTheme, setSelectedTheme] = useState('');

  // Extrair todos os temas únicos
  const allThemes = useMemo(() => {
    const themes = new Set<string>();
    speakers.forEach(speaker => {
      speaker.themes.split(', ').forEach(theme => {
        themes.add(theme.trim());
      });
    });
    return Array.from(themes).sort();
  }, []);

  // Função para filtrar palestrantes por tema
  const filteredSpeakers = useMemo(() => {
    if (!selectedTheme) {
      return speakers;
    }
    return speakers.filter(speaker => 
      speaker.themes.toLowerCase().includes(selectedTheme.toLowerCase())
    );
  }, [selectedTheme]);

  // Determina quais palestrantes mostrar
  const speakersToShow = useMemo(() => {
    // Se há filtro ativo, mostra todos os resultados filtrados
    if (selectedTheme) {
      return filteredSpeakers;
    }
    // Se não há filtro, mostra apenas os primeiros 10
    return filteredSpeakers.slice(0, 10);
  }, [filteredSpeakers, selectedTheme]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="search" className="relative bg-gray-50 py-16">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-[120px]">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex justify-center">
            <div className="h-[3px] w-[50px] bg-violet-600" />
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Our Speakers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover world-class speakers who can transform your event into an unforgettable experience
          </p>
        </div>

        {/* Theme Filter */}
        <div className="mb-12 max-w-md mx-auto">
          <div className="relative">
            <select
              value={selectedTheme}
              onChange={(e) => setSelectedTheme(e.target.value)}
              className="w-full appearance-none bg-white border border-gray-200 rounded-xl py-4 px-6 pr-12 text-gray-900 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none shadow-sm"
            >
              <option value="">All Themes</option>
              {allThemes.map((theme) => (
                <option key={theme} value={theme}>
                  {theme}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-8 text-center">
          <p className="text-gray-600">
            {selectedTheme 
              ? `${filteredSpeakers.length} speaker${filteredSpeakers.length !== 1 ? 's' : ''} with "${selectedTheme}" theme`
              : `Showing ${speakersToShow.length} of 500+ speakers`
            }
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {speakersToShow.map((speaker) => (
            <div key={speaker.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex h-full">
                {/* Speaker Image - Left Side */}
                <div className="relative w-48 h-64 flex-shrink-0 overflow-hidden">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="200px"
                  />
                </div>

                {/* Speaker Content - Right Side */}
                <div className="flex-1 p-6 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {speaker.name} {speaker.country}
                    </h3>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {speaker.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Themes:</h4>
                      <div className="flex flex-wrap gap-2">
                        {speaker.themes.split(', ').map((theme, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-violet-100 text-violet-700 text-sm rounded-full font-medium"
                          >
                            {theme}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={scrollToContact}
                    className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 mt-auto"
                  >
                    <span>Book This Speaker</span>
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
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredSpeakers.length === 0 && (
          <div className="text-center py-12">
            <div className="mb-4">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No speakers found</h3>
            <p className="text-gray-600 mb-4">Try selecting a different theme or browse all speakers</p>
            <button
              onClick={() => setSelectedTheme('')}
              className="text-violet-600 hover:text-violet-700 font-medium"
            >
              Clear filter
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Can't find the perfect speaker?
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Our team can help you find the ideal speaker for your specific event and audience needs.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors duration-300 inline-flex items-center gap-2"
          >
            <span>Get Personalized Recommendations</span>
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
        </div>
      </div>
    </section>
  );
};

export default Search; 