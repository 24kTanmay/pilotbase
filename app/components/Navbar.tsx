'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    {
      title: "Startup Solutions",
      description: "Organize and track your projects with powerful tools",
      icon: "📊",
      href: "/services/project-management"
    },
    {
      title: "Small Business Tools",
      description: "Work together seamlessly with your team",
      icon: "👥",
      href: "/services/collaboration"
    },
    {
      title: "Analytics & Reports",
      description: "Get insights with detailed analytics and reporting",
      icon: "📈",
      href: "/services/analytics"
    },
    {
      title: "Cloud Storage",
      description: "Secure cloud storage for all your files",
      icon: "☁️",
      href: "/services/storage"
    },
    {
      title: "API Integration",
      description: "Connect with your favorite tools and services",
      icon: "🔗",
      href: "/services/integrations"
    },
    {
      title: "Custom Solutions",
      description: "Tailored solutions for enterprise needs",
      icon: "⚙️",
      href: "/services/custom"
    }
  ];

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-800">PilotBase</h1>
            </div>
          </div>
          
          {/* Center: Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium flex items-center">
                Services
                <svg className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Services Overlay */}
              {isServicesOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-4xl z-50">
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden backdrop-blur-sm">
                    <div className="p-8">
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Our Services</h3>
                        <p className="text-gray-600">Powerful tools to streamline your workflow and boost productivity</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-6">
                        {services.map((service, index) => (
                          <Link
                            key={index}
                            href={service.href}
                            className="group p-4 rounded-xl hover:bg-gray-50 transition-all duration-200"
                          >
                            <div className="flex items-start space-x-4">
                              <div className="text-2xl">{service.icon}</div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-gray-900 group-hover:text-black transition-colors">
                                  {service.title}
                                </h4>
                                <p className="text-sm text-gray-600 mt-1">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      
                      <div className="mt-8 pt-6 border-t border-gray-100">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-semibold text-gray-900">Need something custom?</h4>
                            <p className="text-sm text-gray-600">Get in touch for enterprise solutions</p>
                          </div>
                          <Link href="/contact" className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
                            Contact Sales
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link href="/explore" className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium">
              Explore
            </Link>
            <Link href="/dashboard" className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium">
              Dashboard
            </Link>
            <a href="#contact" className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium">
              Contact
            </a>
          </div>

          {/* Right: Login/Signup Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="border border-gray-300 text-gray-700 hover:border-black hover:text-black px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Login
            </Link>
            <Link href="/register" className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-black"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="text-gray-700 hover:text-black block px-3 py-2 text-sm font-medium">
                Home
              </Link>
              
              {/* Mobile Services Menu */}
              <div className="px-3 py-2">
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-gray-700 hover:text-black text-sm font-medium w-full text-left flex items-center justify-between"
                >
                  Services
                  <svg className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {services.slice(0, 3).map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-black"
                      >
                        {service.icon} {service.title}
                      </Link>
                    ))}
                    <Link href="/services" className="block px-3 py-2 text-sm text-black font-medium">
                      View All Services →
                    </Link>
                  </div>
                )}
              </div>
              
              <Link href="/explore" className="text-gray-700 hover:text-black block px-3 py-2 text-sm font-medium">
                Explore
              </Link>
              <Link href="/dashboard" className="text-gray-700 hover:text-black block px-3 py-2 text-sm font-medium">
                Dashboard
              </Link>
              <a href="#contact" className="text-gray-700 hover:text-black block px-3 py-2 text-sm font-medium">
                Contact
              </a>
              <Link href="/login" className="border border-gray-300 text-gray-700 hover:border-black hover:text-black block px-3 py-2 text-sm font-medium rounded mx-3 text-center">
                Login
              </Link>
              <Link href="/register" className="w-full text-center bg-black hover:bg-gray-800 text-white px-3 py-2 text-sm font-medium rounded mx-3">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
