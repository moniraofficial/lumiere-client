"use client";

import Link from "next/link";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="w-full bg-[#FAF5F0] overflow-hidden py-12 md:py-16 lg:py-20 border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-6 z-10">
            {/* Tagline */}
            <span className="text-xs font-semibold tracking-[0.25em] text-stone-600 uppercase">
              NEW COLLECTION 2026
            </span>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-stone-900 leading-[1.1] tracking-tight">
              YOUR BEAUTY. <br />
              YOUR STATEMENT.
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-stone-600 font-light max-w-md leading-relaxed">
              Curated fashion and beauty essentials designed for your everyday expression.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary Button */}
              <Link
                href="/shop"
                className="bg-[#5B132B] hover:bg-[#430D1F] text-white text-xs font-medium tracking-widest uppercase px-6 py-3.5 rounded-sm transition-all duration-300 shadow-sm flex items-center gap-2"
              >
                <span>Shop New Arrivals</span>
                <span>→</span>
              </Link>

              {/* Secondary Button */}
              <Link
                href="/categories"
                className="border border-stone-800 hover:bg-stone-900 hover:text-white text-stone-900 text-xs font-medium tracking-widest uppercase px-6 py-3.5 rounded-sm transition-all duration-300"
              >
                Explore Beauty
              </Link>
            </div>
          </div>

          {/* Right Image Showcase Column */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/9] rounded-lg overflow-hidden">
         
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop"
                alt="Lumière Beauty Collection"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}