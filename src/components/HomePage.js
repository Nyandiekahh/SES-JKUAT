import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Menu, X, ExternalLink } from 'lucide-react';

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-sky-50">
      {/* Navigation - Improved with scroll effect and mobile menu */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-md shadow-sm py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-800">SES</span>
            <span className="h-6 w-0.5 bg-amber-500 mx-3"></span>
            <span className="text-sm text-gray-600 hidden sm:inline-block">SOCIETY OF ENGINEERING STUDENTS</span>
            <span className="text-sm text-gray-600 sm:hidden">JKUAT</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              {name: 'Home', link: '#home'},
              {name: 'About', link: '#about'},
              {name: 'Projects', link: '#projects'},
              {name: 'Events', link: '#events'},
              {name: 'Members', link: '#members'},
              {name: 'Contact', link: '#contact'}
            ].map((item) => (
              <a 
                key={item.name} 
                href={item.link} 
                className="text-gray-700 hover:text-amber-500 font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#join-us" 
              className="px-4 py-2 bg-amber-500 text-white font-medium rounded-sm hover:bg-amber-600 transition-colors"
            >
              Join Us
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-amber-500 transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="container mx-auto px-6 py-4 bg-white border-t">
            <nav className="flex flex-col space-y-4">
              {[
                {name: 'Home', link: '#home'},
                {name: 'About', link: '#about'},
                {name: 'Projects', link: '#projects'},
                {name: 'Events', link: '#events'},
                {name: 'Members', link: '#members'},
                {name: 'Contact', link: '#contact'}
              ].map((item) => (
                <a 
                  key={item.name} 
                  href={item.link} 
                  className="text-gray-700 hover:text-amber-500 font-medium py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="#join-us" 
                className="inline-block px-4 py-2 bg-amber-500 text-white font-medium text-center rounded-sm hover:bg-amber-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Us
              </a>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Hero Section - Updated with more relevant content and improved UI */}
      <section id="home" className="relative overflow-hidden pt-8">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
        <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center">
          {/* Left content */}
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            {/* Subtle decorative line */}
            <div className="flex items-center mb-3">
              <div className="h-0.5 w-12 bg-amber-500 mr-4"></div>
              <p className="text-gray-600 text-sm">JOMO KENYATTA UNIVERSITY OF AGRICULTURE AND TECHNOLOGY</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Society of <br />
              <span className="text-amber-500">Engineering Students</span>
            </h1>
            
            <p className="text-gray-700 mb-8 max-w-md text-lg">
              Bridging the gap between academic learning and industry practice to prepare the next generation of innovative engineers.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#about" 
                className="px-6 py-3 bg-amber-500 text-white font-semibold rounded-sm hover:bg-amber-600 transition-colors flex items-center shadow-sm hover:shadow-md"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              
              <a 
                href="#join-us" 
                className="px-6 py-3 text-gray-700 hover:text-amber-500 transition-colors flex items-center border border-gray-300 rounded-sm hover:border-amber-500"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2"/>
                  <path d="M10 8L16 12L10 16V8Z" fill="currentColor"/>
                </svg>
                Join Us Now
              </a>
            </div>
          </div>
          
          {/* Right image - improved with overlay and shape */}
          <div className="md:w-1/2 relative">
            <div className="relative rounded-sm shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-sky-500/20 mix-blend-multiply"></div>
              <img 
                src="/engineer.jpg" 
                alt="JKUAT Engineering students" 
                className="rounded-sm object-cover w-full h-auto"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-sky-200 -z-10 rounded-sm"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-amber-500 -z-10 rounded-sm"></div>
          </div>
        </div>
        
        {/* Hero scroll indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <p className="text-amber-500 text-sm font-medium mb-2">Scroll to explore</p>
          <ChevronDown className="w-6 h-6 text-amber-500" />
        </div>
      </section>
      
      {/* Features Section - Updated with SES-specific offerings */}
      <section id="objectives" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-semibold">WHAT WE DO</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Objectives</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The Society of Engineering Students at JKUAT works to support engineering students through 
              a variety of programs and initiatives designed to enhance their academic experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Skills Development',
                description: 'Hands-on workshops and training sessions to build practical engineering competencies',
                icon: (
                  <svg className="w-12 h-12 text-amber-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 7L16.0001 5M18 9L16 7M12 19V13L18 7M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: 'Industry Connections',
                description: 'Creating networking opportunities with engineering companies and professional organizations',
                icon: (
                  <svg className="w-12 h-12 text-amber-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 21V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V21M3 21H21M9 7H15M9 11H15M9 15H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: 'Academic Excellence',
                description: 'Supporting students through peer mentorship, study groups, and academic resources',
                icon: (
                  <svg className="w-12 h-12 text-amber-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 3V5M15 3V5M9 19V21M15 19V21M5 9H3M5 15H3M21 9H19M21 15H19M7 19H17C18.1046 19 19 18.1046 19 17V7C19 5.89543 18.1046 5 17 5H7C5.89543 5 5 5.89543 5 7V17C5 18.1046 5.89543 19 7 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div key={index} className="bg-sky-50 p-8 rounded-sm border-b-2 border-amber-500 hover:shadow-lg transition-all group">
                <div className="mb-4 transform group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Statistics Section - Updated with more realistic stats */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-sm shadow-md p-8 bg-opacity-90 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: '500+', label: 'Student Members' },
                { number: '35+', label: 'Completed Projects' },
                { number: '12+', label: 'Industry Partners' },
                { number: '24+', label: 'Annual Events' }
              ].map((stat, index) => (
                <div key={index} className="text-center group hover:bg-sky-50 p-4 rounded-sm transition-all">
                  <div className="text-4xl font-bold text-amber-500 mb-2 group-hover:scale-110 transition-transform">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section - Updated with more detailed content */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src="/students.jpg" 
                  alt="JKUAT Engineering students collaborating" 
                  className="rounded-sm shadow-lg object-cover w-full h-auto"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-sky-200 -z-10 rounded-sm"></div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="flex items-center mb-3">
                <div className="h-0.5 w-12 bg-amber-500 mr-4"></div>
                <p className="text-amber-500 font-semibold text-sm">ABOUT OUR SOCIETY</p>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Empowering future engineers at JKUAT</h2>
              
              <p className="text-gray-700 mb-4">
                Founded in 1995, the Society of Engineering Students at Jomo Kenyatta University of Agriculture and Technology 
                is one of the largest and most active student organizations on campus. We represent students from all engineering disciplines, 
                including Mechanical, Electrical, Civil, and Computer Engineering.
              </p>
              
              <p className="text-gray-700 mb-6">
                Our mission is to bridge the gap between academic learning and industry practice by providing 
                hands-on experiences, networking opportunities, and resources that prepare our members for 
                successful careers in engineering fields. We work closely with faculty, industry partners, and alumni 
                to create valuable learning opportunities.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Professional Development',
                  'Leadership Training',
                  'Industry Connections',
                  'Research Opportunities',
                  'Community Outreach',
                  'Technical Competitions'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-amber-500 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Events Section - Updated with relevant academic events */}
      <section id="events" className="py-20 bg-sky-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-amber-500 font-semibold">STAY UPDATED</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join us for these exciting events and activities designed to enhance your engineering knowledge and build your professional network.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Engineering Design Expo',
                date: 'March 15, 2025',
                location: 'Main Engineering Building, JKUAT',
                description: 'Annual showcase of student engineering projects with awards and industry recruitment opportunities'
              },
              {
                title: 'Workshop: Renewable Energy Systems',
                date: 'April 2, 2025',
                location: 'Engineering Lab 3B',
                description: 'Hands-on workshop on solar and wind energy systems with practical demonstrations'
              },
              {
                title: 'Industry Tour: Thika Manufacturing Plants',
                date: 'April 18, 2025',
                location: 'Thika, Kenya',
                description: 'Site visit to leading manufacturing facilities to understand industrial engineering applications'
              }
            ].map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-md border-t-4 border-amber-500 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-sm">{event.date}</span>
                </div>
                
                <div className="flex items-center mb-4">
                  <svg className="w-5 h-5 text-amber-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 text-sm">{event.location}</span>
                </div>
                
                <p className="text-gray-700 mb-4">{event.description}</p>
                
                <a 
                  href="#register" 
                  className="inline-block px-4 py-2 bg-sky-100 text-amber-500 font-medium rounded-sm hover:bg-sky-200 transition-colors group"
                >
                  <span className="group-hover:mr-1 transition-all">Register Now</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="#all-events"
              className="inline-flex items-center text-amber-500 font-medium hover:text-amber-600 transition-colors"
            >
              View all upcoming events
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Projects Section - New section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-amber-500 font-semibold">OUR WORK</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Student Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore some of the innovative engineering projects completed by our members, showcasing 
              their technical skills and creativity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Solar-Powered Water Purification System',
                category: 'Environmental Engineering',
                image: '/project1.jpg',
                description: 'A sustainable solution for clean water access in rural areas'
              },
              {
                title: 'Smart Traffic Management System',
                category: 'Electrical Engineering',
                image: '/project2.jpg',
                description: 'AI-powered traffic optimization for urban congestion reduction'
              },
              {
                title: 'Earthquake-Resistant Building Design',
                category: 'Civil Engineering',
                image: '/project3.jpg',
                description: 'Innovative structural solutions for seismic stability'
              }
            ].map((project, index) => (
              <div key={index} className="bg-sky-50 rounded-sm overflow-hidden shadow-md hover:shadow-lg transition-all group">
                <div className="h-48 bg-gray-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/api/placeholder/400/300';
                    }}
                  />
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="px-2 py-1 bg-amber-500 text-white text-xs font-medium rounded-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a 
                    href={`#project-${index}`}
                    className="inline-flex items-center text-amber-500 font-medium hover:text-amber-600 transition-colors"
                  >
                    View Project
                    <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="#all-projects"
              className="inline-block px-6 py-3 border border-amber-500 text-amber-500 font-medium rounded-sm hover:bg-amber-500 hover:text-white transition-colors"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>
      
      {/* CTA Section - New section */}
      <section id="join-us" className="py-20 bg-amber-500">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Shape the Future of Engineering?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join the Society of Engineering Students at JKUAT and be part of a community dedicated to 
              innovation, learning, and professional development.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#membership-form"
                className="px-8 py-3 bg-white text-amber-500 font-semibold rounded-sm hover:bg-gray-100 transition-colors shadow-lg"
              >
                Apply for Membership
              </a>
              <a 
                href="#learn-more"
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-sm hover:bg-white/10 transition-colors"
              >
                Learn About Benefits
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section - Updated for student society */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <div className="flex items-center mb-3">
                <div className="h-0.5 w-12 bg-amber-500 mr-4"></div>
                <p className="text-amber-500 font-semibold text-sm">GET IN TOUCH</p>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
              
              <p className="text-gray-700 mb-8">
                Have questions about the Society of Engineering Students? We're here to help!
                Reach out to us using the form or contact information below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-amber-500 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Office Location</h3>
                    <p className="text-gray-600">
                      Engineering Students Center<br />
                      School of Engineering, JKUAT<br />
                      Juja, Kenya
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-amber-500 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">ses@students.jkuat.ac.ke</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                <svg className="w-6 h-6 text-amber-500 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+254 711 123 456</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-amber-500 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900">Office Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <form className="bg-sky-50 p-8 rounded-sm shadow-md">
                <div className="mb-5">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="mb-5">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div className="mb-5">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <select 
                    id="subject" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="events">Events Information</option>
                    <option value="projects">Project Collaboration</option>
                    <option value="sponsorship">Sponsorship Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-amber-500 text-white font-semibold rounded-sm hover:bg-amber-600 transition-colors shadow-sm hover:shadow-md flex justify-center items-center"
                >
                  <span>Send Message</span>
                  <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section - New section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-amber-500 font-semibold">STUDENT STORIES</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Members Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from students who have benefited from being part of the Society of Engineering Students at JKUAT.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Being part of SES has opened doors to internship opportunities and allowed me to apply classroom knowledge to real-world engineering challenges.",
                name: "Alex Kamau",
                role: "4th Year, Mechanical Engineering",
                image: "/student1.jpg"
              },
              {
                quote: "The mentorship program and technical workshops organized by SES significantly improved my practical skills and confidence in my engineering abilities.",
                name: "Mercy Wanjiru",
                role: "3rd Year, Electrical Engineering",
                image: "/student2.jpg"
              },
              {
                quote: "SES provided the platform I needed to showcase my innovation at the national engineering competition, which helped me secure a scholarship for my final year.",
                name: "Ibrahim Omar",
                role: "5th Year, Civil Engineering",
                image: "/student3.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-md relative">
                <div className="absolute top-0 right-0 w-12 h-12 bg-amber-500 rounded-bl-lg flex items-center justify-center -mt-4 -mr-4 shadow-md">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                </div>
                
                <blockquote className="text-gray-700 mb-6 italic">"{testimonial.quote}"</blockquote>
                
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-300 overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/api/placeholder/100/100';
                      }}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-1">
              <div className="flex items-center mb-5">
                <span className="text-3xl font-bold">SES</span>
                <span className="h-8 w-0.5 bg-amber-500 mx-3"></span>
                <span className="text-sm text-gray-400">JKUAT</span>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Empowering the next generation of engineers through innovation, 
                collaboration, and practical experience at Jomo Kenyatta University 
                of Agriculture and Technology.
              </p>
              
              <div className="flex space-x-4">
                {[
                  { name: 'facebook', icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /> },
                  { name: 'twitter', icon: <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /> },
                  { name: 'instagram', icon: <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 19.5h9a2 2 0 002-2v-9a2 2 0 00-2-2h-9a2 2 0 00-2 2v9a2 2 0 002 2z" /> },
                  { name: 'linkedin', icon: <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" /> }
                ].map((social) => (
                  <a 
                    key={social.name}
                    href={`#${social.name}`}
                    className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-500 transition-colors shadow-sm"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      {social.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { name: 'Home', link: '#home' },
                  { name: 'About Us', link: '#about' },
                  { name: 'Events', link: '#events' },
                  { name: 'Projects', link: '#projects' },
                  { name: 'Members', link: '#members' },
                  { name: 'Contact', link: '#contact' },
                ].map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.link} 
                      className="text-gray-400 hover:text-amber-500 transition-colors flex items-center"
                    >
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-5">Programs</h3>
              <ul className="space-y-3">
                {[
                  'Technical Workshops',
                  'Mentorship Program',
                  'Industry Visits',
                  'Engineering Competitions',
                  'Research Initiatives',
                  'Community Outreach'
                ].map((program, index) => (
                  <li key={index}>
                    <a 
                      href={`#${program.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-400 hover:text-amber-500 transition-colors flex items-center"
                    >
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      {program}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-5">Newsletter</h3>
              <p className="text-gray-400 mb-5">
                Stay updated with the latest news, events, and opportunities from SES JKUAT.
              </p>
              <form className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 bg-gray-800 text-white rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button 
                  type="submit" 
                  className="px-4 py-3 bg-amber-500 text-white rounded-sm hover:bg-amber-600 transition-colors flex items-center justify-center"
                >
                  Subscribe
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Society of Engineering Students - JKUAT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;