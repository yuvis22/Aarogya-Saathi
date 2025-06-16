"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/Logo.png"
              alt="Aarogya Saathi Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-teal-700">
              Aarogya Saathi
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
            >
              How It Works
            </a>
            <a
              href="#features"
              className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
            >
              Features
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
            >
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="border-teal-500 text-teal-600 hover:bg-teal-50 hover:text-teal-700"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold shadow-md"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white/90 backdrop-blur-md">
            <nav className="flex flex-col space-y-2">
              <a
                href="#home"
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium py-2 px-4"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium py-2 px-4"
              >
                Services
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium py-2 px-4"
              >
                How It Works
              </a>
              <a
                href="#features"
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium py-2 px-4"
              >
                Features
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium py-2 px-4"
              >
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4 px-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-teal-500 text-teal-600 hover:bg-teal-50 hover:text-teal-700"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold shadow-md"
                >
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
