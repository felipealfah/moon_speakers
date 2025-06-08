'use client';

import React from 'react';
import Image from 'next/image';

interface HeadlinerCardProps {
  name: string;
  description: string;
  image: string;
}

const HeadlinerCard: React.FC<HeadlinerCardProps> = ({ name, description, image }) => {
  return (
    <div className="flex w-full flex-col">
      {/* Image Container */}
      <div className="relative aspect-[285/290] w-full overflow-hidden">
        <Image
          src={`/images/headliners/${image}`}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      {/* Content */}
      <div className="relative bg-[#979797] px-5 py-5">
        <h3 className="mb-4 font-poppins text-2xl font-medium leading-[0.83em] text-white">
          {name}
        </h3>
        <p className="font-poppins text-base leading-[1.25em] text-white">
          {description}
        </p>
      </div>
    </div>
  );
};

const Headliners = () => {
  const headliners = [
    {
      name: 'Travor Noah',
      description: 'Comedian And Host of Comedy Central\'s "The Daily Show"',
      image: 'trevor-noah.jpg',
    },
    {
      name: 'Ron Howard',
      description: 'Academy Award-winning filmmaker, producer and actor',
      image: 'ron-howard.jpg',
    },
    {
      name: 'Nikole Kidman',
      description: 'Academy Award-winning actress, producer and humanitarian',
      image: 'nicole-kidman.jpg',
    },
    {
      name: 'Kerry Washington',
      description: 'Award-winning actress, producer and activist',
      image: 'kerry-washington.jpg',
    },
  ];

  return (
    <section className="bg-black py-14">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-[120px]">
        <div className="mt-[17px] flex flex-col items-center">
          {/* Title Section */}
          <div className="flex flex-col items-center pb-[85px] text-center">
            <div className="mb-4 h-[3px] w-[50px] bg-white" />
            <h2 className="mb-2 font-montserrat text-[30px] font-bold leading-none text-white">
              Popular Headliners
            </h2>
            <p className="font-montserrat text-base text-gray-400">
              Popular among our clients
            </p>
          </div>

          {/* Headliners Grid */}
          <div className="grid w-full grid-cols-1 gap-[21px] md:grid-cols-2 lg:grid-cols-4">
            {headliners.map((headliner, index) => (
              <HeadlinerCard key={index} {...headliner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headliners; 