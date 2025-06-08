'use client';

import React from 'react';
import Image from 'next/image';

const Search = () => {
  return (
    <section className="relative bg-white">
      {/* Title Section */}
      <div className="mx-auto max-w-[1440px] px-4 lg:px-[120px]">
        <div className="mt-[58px] flex flex-col items-center">
          <div className="flex flex-col items-center pb-8 text-center">
            <div className="mb-4 h-[3px] w-[50px] bg-gray-900" />
            <h2 className="mb-2 font-montserrat text-[30px] font-bold leading-none text-gray-900">
              Ours Speakers
            </h2>
            <p className="font-montserrat text-base text-gray-600">
              Voices trusted by our community
            </p>
          </div>
        </div>
      </div>

      {/* Search Image */}
      <div className="relative mx-auto mt-[31px] h-[1335px] max-w-[1440px] px-4 lg:px-[120px]">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src="/images/search/search-bg.jpg"
            alt="Search Background"
            fill
            className="object-cover"
            sizes="(max-width: 1440px) 100vw, 1440px"
          />
        </div>
      </div>
    </section>
  );
};

export default Search; 