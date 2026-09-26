"use client";

import Link from "next/link";
import { Search, Heart, ShoppingBag, User, UserPlus, ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full font-sans">
      {/* 1. Top Announcement Bar */}
      <div className="bg-[#3D1A1E] h-2.5 w-full"></div>

      {/* 2. Main Navigation Bar */}
      <div className="bg-[#FAF6F3] border-b border-stone-200/60 px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo Section */}
          <Link href="/" className="flex flex-col items-start group">
            <span className="text-2xl font-serif font-bold tracking-[0.2em] text-[#1E293B] leading-none">
              LUMIÈRE
            </span>
            <span className="text-[9px] font-medium tracking-[0.25em] text-stone-500 mt-1 uppercase">
              BEAUTY LIVES HERE
            </span>
          </Link>

          {/* Search Bar */}
          <div className="relative flex-1 max-w-sm hidden lg:block">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="Search for products, brands and more..."
              className="w-full bg-[#EDE8E3]/60 text-xs text-stone-700 placeholder-stone-400 pl-10 pr-4 py-2.5 rounded-full outline-none focus:ring-1 focus:ring-stone-400 transition-all"
            />
          </div>

          {/* Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-6 text-xs font-medium text-stone-700">
            <Link href="/new-arrivals" className="hover:text-[#7A1C32] transition-colors">
              New Arrivals
            </Link>
            
            <div className="relative group cursor-pointer flex items-center gap-1 hover:text-[#7A1C32] transition-colors">
              <span>Shop</span>
              <ChevronDown className="w-3 h-3" />
            </div>

            <div className="relative group cursor-pointer flex items-center gap-1 hover:text-[#7A1C32] transition-colors">
              <span>Makeup</span>
              <ChevronDown className="w-3 h-3" />
            </div>

            <div className="relative group cursor-pointer flex items-center gap-1 hover:text-[#7A1C32] transition-colors">
              <span>Skincare</span>
              <ChevronDown className="w-3 h-3" />
            </div>

            <div className="relative group cursor-pointer flex items-center gap-1 hover:text-[#7A1C32] transition-colors">
              <span>Fashion</span>
              <ChevronDown className="w-3 h-3" />
            </div>

            <Link href="/best-sellers" className="bg-[#EDE8E3]/60 px-3 py-1.5 rounded-full hover:text-[#7A1C32] transition-colors">
              Best Sellers
            </Link>
          </nav>

          {/* Icons & Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Wishlist */}
            <Link href="/wishlist" className="text-stone-700 hover:text-[#7A1C32] transition-colors p-1">
              <Heart className="w-5 h-5 stroke-[1.5]" />
            </Link>

            {/* Cart with Counter */}
            <Link href="/cart" className="text-stone-700 hover:text-[#7A1C32] transition-colors p-1 relative">
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
              <span className="absolute -top-1 -right-1 bg-[#7A1C32] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>

            <div className="h-4 w-[1px] bg-stone-300 mx-1 hidden sm:block"></div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-2">
              <Link
                href="/login"
                className="flex items-center gap-1.5 text-xs font-semibold text-[#7A1C32] border border-[#7A1C32] px-3.5 py-1.5 rounded-md hover:bg-[#7A1C32] hover:text-white transition-all"
              >
                <User className="w-3.5 h-3.5" />
                <span>Log In</span>
              </Link>

              <Link
                href="/register"
                className="flex items-center gap-1.5 text-xs font-semibold text-white bg-[#7A1C32] px-3.5 py-1.5 rounded-md hover:bg-[#5E1526] transition-all shadow-sm"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Register</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}