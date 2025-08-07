'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web Development', 'Mobile Apps', 'Data Science', 'Design', 'DevOps', 'AI/ML'];

  const [projects] = useState([
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      category: 'Web Development',
      author: 'Sarah Chen',
      stars: 142,
      forks: 38,
      language: 'JavaScript',
      image: '/api/placeholder/300/200',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      id: 2,
      title: 'Mobile Task Manager',
      description: 'Cross-platform task management app built with React Native',
      category: 'Mobile Apps',
      author: 'Michael Rodriguez',
      stars: 89,
      forks: 24,
      language: 'TypeScript',
      image: '/api/placeholder/300/200',
      tags: ['React Native', 'Redux', 'SQLite']
    },
    {
      id: 3,
      title: 'Data Visualization Dashboard',
      description: 'Interactive analytics dashboard with real-time data processing',
      category: 'Data Science',
      author: 'Emily Johnson',
      stars: 203,
      forks: 67,
      language: 'Python',
      image: '/api/placeholder/300/200',
      tags: ['Python', 'D3.js', 'Flask', 'PostgreSQL']
    },
    {
      id: 4,
      title: 'Design System Library',
      description: 'Comprehensive design system with reusable components',
      category: 'Design',
      author: 'Alex Thompson',
      stars: 156,
      forks: 42,
      language: 'CSS',
      image: '/api/placeholder/300/200',
      tags: ['Figma', 'Storybook', 'CSS', 'Design Tokens']
    },
    {
      id: 5,
      title: 'CI/CD Pipeline Template',
      description: 'Automated deployment pipeline with Docker and Kubernetes',
      category: 'DevOps',
      author: 'David Kim',
      stars: 178,
      forks: 56,
      language: 'YAML',
      image: '/api/placeholder/300/200',
      tags: ['Docker', 'Kubernetes', 'GitHub Actions', 'AWS']
    },
    {
      id: 6,
      title: 'Machine Learning Model',
      description: 'Image classification model using TensorFlow and Keras',
      category: 'AI/ML',
      author: 'Lisa Wang',
      stars: 234,
      forks: 89,
      language: 'Python',
      image: '/api/placeholder/300/200',
      tags: ['TensorFlow', 'Keras', 'Computer Vision', 'Deep Learning']
    }
  ]);

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      'JavaScript': 'bg-yellow-100 text-yellow-800',
      'TypeScript': 'bg-gray-100 text-gray-800',
      'Python': 'bg-green-100 text-green-800',
      'CSS': 'bg-purple-100 text-purple-800',
      'YAML': 'bg-gray-100 text-gray-800'
    };
    return colors[language] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-800">
                PilotBase
              </Link>
              <div className="hidden md:ml-10 md:flex space-x-8">
                <Link href="/dashboard" className="text-gray-500 hover:text-gray-700 px-1 pt-1 pb-4 text-sm font-medium">
                  Dashboard
                </Link>
                <Link href="/explore" className="text-black border-b-2 border-black px-1 pt-1 pb-4 text-sm font-medium">
                  Explore
                </Link>
                <a href="#projects" className="text-gray-500 hover:text-gray-700 px-1 pt-1 pb-4 text-sm font-medium">
                  Projects
                </a>
                <a href="#team" className="text-gray-500 hover:text-gray-700 px-1 pt-1 pb-4 text-sm font-medium">
                  Team
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800">
                Create Project
              </button>
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-sm font-semibold">
                JD
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900">Explore Projects</h1>
          <p className="mt-2 text-gray-600">Discover amazing projects from the community and get inspired.</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-black focus:border-black"
              placeholder="Search projects, technologies, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition duration-300 ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-r from-gray-400 to-black"></div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{project.title}</h3>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm text-gray-600">{project.stars}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
                
                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    <span className="text-sm text-gray-600">{project.author}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLanguageColor(project.language)}`}>
                      {project.language}
                    </span>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                      <span className="text-sm">{project.forks}</span>
                    </div>
                  </div>
                </div>
                
                {/* Action Button */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button className="w-full bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition duration-300">
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No projects found</h3>
            <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}

        {/* Load More */}
        {filteredProjects.length > 0 && (
          <div className="mt-12 text-center">
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition duration-300">
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
