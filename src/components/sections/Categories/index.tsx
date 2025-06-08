'use client';

import React from 'react';
import Image from 'next/image';

interface CategoryCardProps {
  title: string;
  image: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image }) => {
  return (
    <div className="group relative h-[359px] w-[285px]">
      {/* Image */}
      <div className="h-[285px] w-[285px] overflow-hidden">
        <Image
          src={`/images/categories/${image}`}
          alt={title}
          width={285}
          height={285}
          className="h-full w-full object-cover"
        />
      </div>
      {/* Title */}
      <div className="absolute bottom-0 h-[74px] w-full bg-[#7F5AF0]">
        <p className="flex h-full items-center justify-center px-[22px] font-poppins text-[23px] font-medium leading-[0.87em] text-white">
          {title}
        </p>
      </div>
    </div>
  );
};

const Categories = () => {
  const topCategories = [
    { title: 'Business Leaders', image: 'business-leaders.jpg' },
    { title: 'Travel & Adventure', image: 'travel-adventure.jpg' },
    { title: 'Celebrity Speakers', image: 'celebrity-speakers.jpg' },
    { title: 'Artificial Intelligence', image: 'artificial-intelligence.jpg' },
  ];

  const bottomCategories = [
    { title: 'Diversity & Inclusion', image: 'diversity-inclusion.jpg' },
    { title: 'Collegy & University', image: 'college-university.jpg' },
    { title: 'Inspiring Women', image: 'inspiring-women.jpg' },
    { title: 'All Categories', image: 'all-categories.jpg' },
  ];

  return (
    <section className="bg-black py-14">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-[120px]">
        <div className="mt-[53px] flex flex-col items-center">
          {/* Title Section */}
          <div className="flex flex-col items-center pb-[85px] text-center">
            <div className="h-[3px] w-[50px] bg-white mb-4" />
            <h2 className="mb-2 font-montserrat text-[30px] font-bold leading-none text-white">
              Popular Categories
            </h2>
            <p className="font-montserrat text-base text-gray-400">
              Popular among our community
            </p>
          </div>

          {/* Top Row Categories */}
          <div className="mb-[21px] grid grid-cols-1 gap-[21px] md:grid-cols-2 lg:grid-cols-4">
            {topCategories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>

          {/* Bottom Row Categories */}
          <div className="grid grid-cols-1 gap-[21px] md:grid-cols-2 lg:grid-cols-4">
            {bottomCategories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories; 