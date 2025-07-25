"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Search, ArrowRight } from 'lucide-react';

// A simple SVG logo for placeholder brands
const BrandLogo = ({ pathData }: { pathData: string }) => (
  <svg
    className="h-8 w-auto text-slate-400/80"
    viewBox="0 0 256 256"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={pathData} />
  </svg>
);

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
          alt="A vibrant salad in a white bowl"
          fill
          quality={100}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <div className="bg-black/20 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-white/10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            Craving Something? <span className="block text-orange-400">Get It Instantly.</span>
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-lg sm:text-xl text-slate-200">
            Your favorite local restaurants and takeaways, delivered to your door in minutes.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-2xl mx-auto">
            <div className="relative flex-grow w-full">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Enter your delivery address"
                className="w-full h-14 pl-10 pr-4 py-2 bg-white/10 text-white rounded-md border border-slate-600 focus:ring-2 focus:ring-orange-400 focus:outline-none placeholder-slate-400 transition-all duration-300"
              />
            </div>
            <Link
              href="#"
              className="group flex items-center justify-center gap-2 w-full sm:w-auto h-14 px-8 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black/50 focus:ring-orange-400 transition-all duration-300 transform hover:scale-105"
            >
              <span>Find Food</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-4">
                <p className="text-sm text-slate-400">Trusted by top brands worldwide</p>
                <div className="flex items-center justify-center gap-8 md:gap-12 opacity-80">
                    <BrandLogo pathData="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a48,48,0,1,1-48-48A48.05,48.05,0,0,1,176,128Z" />
                    <BrandLogo pathData="M232,128a104.2,104.2,0,0,1-208,0c0-57.5,104-104,104-104S232,70.5,232,128Z" />
                    <BrandLogo pathData="M176,24H80A56,56,0,0,0,24,80v96a56,56,0,0,0,56,56h96a56,56,0,0,0,56-56V80A56,56,0,0,0,176,24Zm32,152a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V80A32,32,0,0,1,80,48h96a32,32,0,0,1,32,32Z" />
                    <BrandLogo pathData="M128,24,32,80v96l96,56,96-56V80ZM128,202.67,48,152V99.33l80,46.67Zm0-61.34L45.33,96,128,49.33,210.67,96Zm80-40-80-46.66v58.66l80,46.67Z" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}