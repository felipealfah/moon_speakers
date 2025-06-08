'use client';

import React from 'react';
import Image from 'next/image';

const Clients = () => {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-[120px]">
        <div className="mt-11 flex flex-col items-center">
          {/* Title Section */}
          <div className="flex flex-col items-center pb-12 text-center">
            <div className="h-[3px] w-[50px] bg-gray-900 mb-4" />
            <h2 className="mb-2 font-montserrat text-[30px] font-bold leading-none text-gray-900">
              Ours Clients
            </h2>
            <p className="font-montserrat text-base text-gray-600">
              Companies that trust our work
            </p>
          </div>

          {/* Logos Grid */}
          <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-6">
            {/* First Row */}
            <div className="h-[184px] w-[184px] overflow-hidden rounded-[3px]">
              <Image
                src="/images/clients/client-1.png"
                alt="Client Logo"
                width={184}
                height={184}
                className="h-full w-full object-contain p-4"
              />
            </div>
            <div className="h-[184px] w-[184px] overflow-hidden rounded-[3px]">
              <Image
                src="/images/clients/client-2.png"
                alt="Client Logo"
                width={184}
                height={184}
                className="h-full w-full object-contain p-4"
              />
            </div>
            <div className="h-[184px] w-[184px] overflow-hidden rounded-[3px]">
              <Image
                src="/images/clients/client-3.png"
                alt="Client Logo"
                width={184}
                height={184}
                className="h-full w-full object-contain p-4"
              />
            </div>
            <div className="h-[184px] w-[184px] overflow-hidden rounded-[3px]">
              <Image
                src="/images/clients/client-4.png"
                alt="Client Logo"
                width={184}
                height={184}
                className="h-full w-full object-contain p-4"
              />
            </div>
            <div className="h-[184px] w-[184px] overflow-hidden rounded-[3px]">
              <Image
                src="/images/clients/client-5.png"
                alt="Client Logo"
                width={184}
                height={184}
                className="h-full w-full object-contain p-4"
              />
            </div>
            <div className="h-[184px] w-[184px] overflow-hidden rounded-[3px]">
              <Image
                src="/images/clients/client-6.png"
                alt="Client Logo"
                width={184}
                height={184}
                className="h-full w-full object-contain p-4"
              />
            </div>

            {/* Second Row */}
            <div className="h-[184px] w-[184px] overflow-hidden rounded-[3px]">
              <Image
                src="/images/clients/client-7.png"
                alt="Client Logo"
                width={184}
                height={184}
                className="h-full w-full object-contain p-4"
              />
            </div>
            <div className="h-[184px] w-[184px] overflow-hidden rounded-[3px]">
              <Image
                src="/images/clients/client-8.png"
                alt="Client Logo"
                width={184}
                height={184}
                className="h-full w-full object-contain p-4"
              />
            </div>
            <div className="h-[184px] w-[184px] overflow-hidden rounded-[3px]">
              <Image
                src="/images/clients/client-9.png"
                alt="Client Logo"
                width={184}
                height={184}
                className="h-full w-full object-contain p-4"
              />
            </div>
            <div className="h-[184px] w-[184px] overflow-hidden rounded-[3px]">
              <Image
                src="/images/clients/client-10.png"
                alt="Client Logo"
                width={184}
                height={184}
                className="h-full w-full object-contain p-4"
              />
            </div>
            <div className="h-[184px] w-[184px] overflow-hidden rounded-[3px]">
              <Image
                src="/images/clients/client-11.png"
                alt="Client Logo"
                width={184}
                height={184}
                className="h-full w-full object-contain p-4"
              />
            </div>
            <div className="h-[184px] w-[184px] overflow-hidden rounded-[3px]">
              <Image
                src="/images/clients/client-12.png"
                alt="Client Logo"
                width={184}
                height={184}
                className="h-full w-full object-contain p-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients; 