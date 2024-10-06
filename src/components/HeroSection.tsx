import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-white via-light-beige to-dark-beige w-full min-h-[768px]">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left Side - Logo, Heading, Text, and Button */}
        <div className="flex items-center w-full md:w-1/2 p-8">
          <div className="w-1 h-full flex items-start">
            <Image
              src="/Group 50.png" // Path to logo image in the public folder
              alt="beauty.skin logo"
              width={60}
              height={700}
              className="object-contain h-[50vh] md:h-[60vh] lg:h-[70vh]"
            />
          </div>
          <div className="ml-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Careful to Choose{" "}
              <span className="text-customBrown">skincare</span> for your skin
            </h1>
            <p className="text-sm md:text-lg mb-8 md:mb-14">
              Lorem ipsum dolor sit amet consectetur. Vel nulla corporis, libero
              delectus at amet quam. Laudantium asperiores, sed cum, ipsum porro
              voluptatem.
            </p>
            <Link
              href="#"
              className="mr-8 border border-transparent px-4 md:px-6 py-2 md:py-3 text-sm md:text-lg bg-customBrown text-white w-40 md:w-60 h-10 md:h-14"
            >
              Discover now
            </Link>
          </div>
        </div>

        {/* Right Side - Main Image with Label */}
        <div className="relative w-full md:w-1/2 flex flex-col items-center mt-12 md:mt-24">
          <Image src="/image.png" alt="Main image" width={512} height={512} />
          <div className="absolute bottom-[-13px] left-[33px] z-10">
            <Image
              src="/Group 8.png" // Path to new label image in the public folder
              alt="New label"
              width={80}
              height={80}
              className="z-20 md:w-[100px] md:h-[100px]"
            />
          </div>
        </div>
      </div>

      {/* Partition Table with Logos */}
      <div className="flex flex-col items-center w-full mt-20 p-4">
        <div className="flex flex-col items-center">
          <Image src="/Line 2.png" alt="Upper Line" width={1300} height={2} className="w-[80%]" />
          <div className="flex flex-wrap justify-center p-4 relative">
            {/* Logos in a Row */}
            <div className="flex items-center mx-2 mb-4">
              <Image
                src="/logoipsum-227.png" // Path to Logo 1 in the public folder
                alt="Logo 1"
                width={128}
                height={128}
                className="mx-2 w-auto"
              />
              <Image src="/Line 4.png" alt="Partition Line" width={1300} height={2} className="w-1/2 hidden md:block h-20" />
            </div>
            <div className="flex items-center mx-2 mb-4">
              <Image
                src="/Group 4.png" // Path to Logo 2 in the public folder
                alt="Logo 2"
                width={128}
                height={128}
                className="mx-2 w-auto"
              />
              <Image src="/Line 5.png" alt="Partition Line" width={1300} height={2} className="w-1/2 hidden md:block h-20" />
            </div>
            <div className="flex items-center mx-2 mb-4">
              <Image
                src="/logoipsum-222.png" // Path to Logo 3 in the public folder
                alt="Logo 3"
                width={128}
                height={128}
                className="mx-2 w-auto"
              />
              <Image src="/Line 6.png" alt="Partition Line" width={1300} height={2} className="w-1/2 hidden md:block h-20" />
            </div>
            <div className="flex items-center mx-2 mb-4">
              <Image
                src="/Group 6.png" // Path to Logo 4 in the public folder
                alt="Logo 4"
                width={128}
                height={128}
                className="mx-2 w-auto"
              />
              <Image src="/Line 7.png" alt="Partition Line" width={1300} height={2} className="w-1/2 hidden md:block h-20" />
            </div>
            <div className="flex items-center mx-2 mb-4">
              <Image
                src="/Group 5.png" // Path to Logo 5 in the public folder
                alt="Logo 5"
                width={128}
                height={128}
                className="mx-2 w-auto"
              />
            </div>
          </div>
          <Image src="/Line 3.png" alt="Bottom Line" width={1300} height={2} className="w-[80%]" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
