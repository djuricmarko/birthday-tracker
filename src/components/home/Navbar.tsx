'use client';

import { useState } from 'react';
import { Calendar, Menu, X } from 'lucide-react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-gray-950/60 backdrop-blur-xl border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-75"></div>
              <div className="relative p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Calendar className="h-5 w-5 text-white" />
              </div>
            </div>
            <span className="text-xl font-semibold text-white">
              BirthdayTracker
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">
              Features
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">
              Pricing
            </a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">
              FAQ
            </a>
            <div className="flex items-center space-x-3">
              <a href="/birthdays" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">
                Sign in
              </a>
              <button className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-200"></div>
                <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200">
                  Get Started
                </div>
              </button>
            </div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-950/95 backdrop-blur-xl border-t border-gray-800/50">
            <div className="px-6 py-4 space-y-4">
              <a href="#features" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">
                Features
              </a>
              <a href="#pricing" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">
                Pricing
              </a>
              <a href="#faq" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">
                FAQ
              </a>
              <div className="pt-4 border-t border-gray-800 space-y-3">
                <button className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">
                  Sign in
                </button>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg text-sm font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export { Navbar };
