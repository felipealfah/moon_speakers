'use client';

import React from 'react';
import Image from 'next/image';

const Hero = () => {
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
              <button className="flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-4 font-semibold text-white transition hover:bg-violet-700">
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
              <button className="flex items-center gap-2 rounded-xl border-2 border-violet-400 px-6 py-4 font-semibold text-violet-400 transition hover:border-violet-500 hover:text-violet-500">
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
            <div className="absolute right-[176px] top-5 h-[430px] w-[250px] overflow-hidden rounded-2xl border-[3px] border-violet-500">
              <Image
                src="/images/hero/speaker-1.jpg"
                alt="Featured Speaker 1"
                width={303}
                height={475}
                className="object-cover"
              />
            </div>
            <div className="absolute left-0 top-[60px] h-[181px] w-[181px] overflow-hidden rounded-2xl border-[3px] border-emerald-400">
              <Image
                src="/images/hero/speaker-2.jpg"
                alt="Featured Speaker 2"
                width={198}
                height={200}
                className="object-cover"
              />
            </div>
            <div className="absolute right-[0px] top-[100px] h-[176px] w-[176px] overflow-hidden rounded-2xl border-[3px] border-pink-400">
              <Image
                src="/images/hero/speaker-3.jpg"
                alt="Featured Speaker 3"
                width={181}
                height={181}
                className="object-cover"
              />
            </div>
            <div className="absolute left-[38px] top-[296px] h-[147px] w-[147px] overflow-hidden rounded-2xl border-[3px] border-blue-400">
              <Image
                src="/images/hero/speaker-4.jpg"
                alt="Featured Speaker 4"
                width={139}
                height={139}
                className="object-cover"
              />
            </div>
            <div className="absolute right-[98px] top-[330px] h-[150px] w-[150px] overflow-hidden rounded-2xl border-[3px] border-amber-400">
              <Image
                src="/images/hero/speaker-5.jpg"
                alt="Featured Speaker 5"
                width={157}
                height={150}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 