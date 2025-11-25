import React, { useState, useEffect, Suspense } from 'react';
import { Menu, X, MapPin, Phone, Mail, ChevronRight, Eye, Globe, Building, Users, Cpu, Zap, Send, Upload, Sun, Moon, LogIn, LogOut, User } from 'lucide-react';
import { useAuth } from './AuthContext';
import Login from './Login';
import Register from './Register';
import logo from './IdaTech-logo.png';
import cityTech from './City-tech.jpg';
import dataCenter from './Data-Center.jpg';
import eagleeyeLogo from './Eagleeye-logo.png';
import maviramLogo from './Maviram-logo.png';
import towmanLogo from './TowMan-logo.png';


const logoBlack = logo; // Use the same logo for both light and dark modes

const App = () => {
  return <IdaDavWebsite />;
};

// Loading spinner used by Suspense
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-24 w-24 border-b-4 border-blue-600"></div>
  </div>
);

const navigation = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Contact', id: 'contact' },
  { name: 'Careers', id: 'careers' }
];

const Navbar = ({ activeSection, setActiveSection, scrolled, mobileOpen, setMobileOpen, darkMode, toggleDarkMode }) => {
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setActiveSection('home');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white dark:bg-gray-900 shadow-md py-3 border-b border-gray-200 dark:border-gray-700' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveSection('home')}>
            <img src="/IdaTech-logo.png" alt="IdaTech Logo" className="w-12 h-12 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              IdaTech solutions
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 px-6 py-2 rounded-lg">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`relative px-4 py-2 font-medium text-gray-800 dark:text-gray-200 text-sm lg:text-base transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-500 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-gray-900 dark:text-white">
                  <User size={20} />
                  <span className="font-medium">{user?.name}</span>
                  {user?.role === 'admin' && <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full">Admin</span>}
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-300"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveSection('login')}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                >
                  Login
                </button>
                <button
                  onClick={() => setActiveSection('register')}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300"
                >
                  Register
                </button>
              </div>
            )}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun size={20} className="text-gray-900 dark:text-white" /> : <Moon size={20} className="text-gray-900 dark:text-white" />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {mobileOpen ? <X size={24} className="text-gray-900 dark:text-white" /> : <Menu size={24} className="text-gray-900 dark:text-white" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="md:hidden mt-4 space-y-2 pb-4 bg-white dark:bg-gray-800 rounded-lg">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileOpen(false);
                }}
                className={`block w-full text-left px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-blue-600 dark:bg-blue-700 text-white shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {item.name}
              </button>
            ))}
            {!isAuthenticated && (
              <div className="flex flex-col gap-2 px-6 py-2">
                <button
                  onClick={() => {
                    setActiveSection('login');
                    setMobileOpen(false);
                  }}
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all duration-300"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    setActiveSection('register');
                    setMobileOpen(false);
                  }}
                  className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-all duration-300"
                >
                  Register
                </button>
              </div>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

// Sections - full content
const HomeSection = ({ setActiveSection, darkMode }) => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden">
        {/* Visual bg (SVG simplified) */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center z-10">
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-3 bg-blue-100 dark:bg-blue-900/20 px-6 py-3 rounded-full border border-blue-200 dark:border-blue-800">
              <div className="w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-blue-900 dark:text-blue-200 font-medium text-lg">Technology Solutions for Nigeria</span>
            </div>
          </div>

          {/* Removed image as per user request */}

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-gray-900 dark:text-white">
            Innovative Technology Solutions
            <span className="block text-blue-600 dark:text-blue-400 mt-2">
              for Nigeria's Future
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4 max-w-2xl mx-auto">
            Committed to excellence, innovation, and delivering impactful solutions.
          </p>
          <button
            onClick={() => setActiveSection('eagleeye')}
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Discover EagleEye
            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 dark:from-blue-900/10 to-blue-100 dark:to-blue-800/10 rounded-xl p-8 border border-blue-200 dark:border-blue-800 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer">
              <Building className="w-12 h-12 text-blue-700 dark:text-blue-300 mx-auto mb-4" />
              <div className="text-3xl font-extrabold text-blue-900 dark:text-blue-100 mb-2">Land Intelligence</div>
              <div className="text-blue-700 dark:text-blue-300 text-base">Smart mapping solutions</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 dark:from-blue-900/10 to-blue-100 dark:to-blue-800/10 rounded-xl p-8 border border-blue-200 dark:border-blue-800 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer">
              <Globe className="w-12 h-12 text-blue-700 dark:text-blue-300 mx-auto mb-4" />
              <div className="text-3xl font-extrabold text-blue-900 dark:text-blue-100 mb-2">Nationwide</div>
              <div className="text-blue-700 dark:text-blue-300 text-base">Serving all of Nigeria</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 dark:from-blue-900/10 to-blue-100 dark:to-blue-800/10 rounded-xl p-8 border border-blue-200 dark:border-blue-800 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer">
              <Users className="w-12 h-12 text-blue-700 dark:text-blue-300 mx-auto mb-4" />
              <div className="text-3xl font-extrabold text-blue-900 dark:text-blue-100 mb-2">For Everyone</div>
              <div className="text-blue-700 dark:text-blue-300 text-base">Accessible technology</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-50 dark:from-gray-800 to-transparent z-0"></div>
      </div>

      {/* Features Grid */}
      <div className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Building Tomorrow's Nigeria</h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Innovative solutions designed for Nigerian communities, built with integrity and purpose</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: eagleeyeLogo, title: 'EagleEye', desc: 'Revolutionary land intelligence system that helps you understand and navigate Nigerian land with clarity and confidence', color: 'from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800', onClick: () => setActiveSection('eagleeye') },
              { img: maviramLogo, title: 'Maviram', desc: 'An E-commerce solution that provides you with the possibility of ordering your fruits and food items from and get it delivered to you fast', color: 'from-purple-500 to-purple-700 dark:from-purple-600 dark:to-purple-800', onClick: () => { setActiveSection('home'); setTimeout(() => document.getElementById('smart-solutions').scrollIntoView({behavior: 'smooth'}), 100); } },
              { img: towmanLogo, title: 'TowMan', desc: 'COMING SOON', color: 'from-green-500 to-green-700 dark:from-green-600 dark:to-green-800', onClick: () => { setActiveSection('home'); setTimeout(() => document.getElementById('infrastructure-insights').scrollIntoView({behavior: 'smooth'}), 100); } }
            ].map((feature, idx) => (
              <div key={idx} className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2 border border-gray-100 dark:border-gray-700" onClick={feature.onClick}>
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <img src={feature.img} alt={feature.title} className="w-16 h-16 object-contain" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">{feature.desc}</p>
                <button className="group inline-flex items-center gap-2 mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold transition-colors duration-300">
                  Learn more
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Smart Solutions Section */}
      <div id="smart-solutions" className="py-24 relative" style={{backgroundImage: `url(${cityTech})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-white opacity-70 dark:bg-gray-800 dark:opacity-85"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-purple-100 dark:bg-purple-900/20 px-6 py-3 rounded-full border border-purple-200 dark:border-purple-800 mb-6">
              <Cpu className="w-6 h-6 text-purple-700 dark:text-purple-300" />
              <span className="text-purple-900 dark:text-purple-200 font-medium">Smart Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Empowering Communities with Smart Technology</h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Our smart solutions bridge the gap between complex technology and everyday users, making powerful tools accessible to all Nigerians.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { title: 'Intuitive Interfaces', desc: 'User-friendly designs that eliminate technical barriers and make technology approachable for everyone.' },
              { title: 'Community Empowerment', desc: 'Tools that enable local communities to take control of their data and make informed decisions.' },
              { title: 'Simplified Access', desc: 'Complex information transformed into clear, actionable insights that anyone can understand.' },
              { title: 'Inclusive Design', desc: 'Solutions built with diverse user needs in mind, ensuring accessibility across all demographics.' },
              { title: 'Real-time Updates', desc: 'Live data and instant notifications to keep users informed and engaged.' },
              { title: 'Offline Capability', desc: 'Core functionality available even without internet connectivity, crucial for rural areas.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-50 dark:from-purple-900/10 to-purple-100 dark:to-purple-800/10 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-purple-200 dark:border-purple-800">
                <h3 className="text-xl font-bold mb-3 text-purple-900 dark:text-purple-100">{item.title}</h3>
                <p className="text-purple-700 dark:text-purple-300">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-purple-900 to-purple-800 dark:from-purple-800 dark:to-purple-700 rounded-3xl shadow-xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6 text-purple-200">Join thousands of Nigerians already benefiting from our smart solutions.</p>
            <button onClick={() => setActiveSection('contact')} className="bg-white dark:bg-gray-200 text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-300 transition-colors duration-300">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>

      {/* Infrastructure Insights Section */}
      <div id="infrastructure-insights" className="py-24 relative" style={{backgroundImage: `url(${dataCenter})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-white opacity-70 dark:bg-gray-800 dark:opacity-85"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-green-100 dark:bg-green-900/20 px-6 py-3 rounded-full border border-green-200 dark:border-green-800 mb-6">
              <Building className="w-6 h-6 text-green-700 dark:text-green-300" />
              <span className="text-green-900 dark:text-green-200 font-medium">Infrastructure Insights</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Data-Driven Infrastructure Development</h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Comprehensive analysis and reliable data to guide smart infrastructure decisions and sustainable development across Nigeria.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Data Collection & Analysis</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-400">Advanced geospatial data gathering techniques for accurate infrastructure mapping</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-400">Real-time monitoring of infrastructure conditions and usage patterns</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-400">Predictive analytics for maintenance and capacity planning</p>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Strategic Decision Support</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-400">Evidence-based recommendations for infrastructure investments</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-400">Risk assessment and mitigation strategies for development projects</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-400">Sustainability impact analysis for long-term planning</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-900 to-green-800 dark:from-green-800 dark:to-green-700 rounded-3xl shadow-xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Build a Better Nigeria</h3>
            <p className="text-lg mb-6 text-green-200">Leverage our infrastructure insights to create sustainable, impactful development solutions.</p>
            <button onClick={() => setActiveSection('contact')} className="bg-white dark:bg-gray-200 text-green-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-300 transition-colors duration-300">
              Learn More About Our Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// The rest of the components remain unchanged (AboutSection, EagleEyeSection, ContactSection, CareersSection, Footer, and main App component)

const AboutSection = () => {
  const values = [
    { icon: Zap, title: 'Innovation', description: 'Pioneering solutions for tomorrow' },
    { icon: Globe, title: 'Faith', description: 'Building with purpose and conviction' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 dark:from-gray-800 to-blue-50 dark:to-blue-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-12 mb-12 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Mission</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">To build a better tomorrow for Nigerian citizens by placing powerful technology in the hands of everyday people.</p>
        </div>

        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-12 text-gray-900 dark:text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 dark:bg-orange-600 rounded-full opacity-10 -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Message from the Founder</h2>
            <blockquote className="text-xl italic leading-relaxed border-l-4 border-orange-500 dark:border-orange-400 pl-6">
              "I build with my heart, my mind, and my strength — not to take from people, but to give them tools that uplift."
            </blockquote>
            <p className="mt-6 text-blue-600 dark:text-blue-400 text-lg">— Idahosa, Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const EagleEyeSection = () => {
  const eagleEyeFeatures = [
    { title: '3D Modeling', description: 'Visualize land and infrastructure in stunning detail' },
    { title: 'Offline Navigation', description: 'Navigate without internet connectivity' },
    { title: 'Infrastructure Analysis', description: 'Comprehensive land and property insights' },
    { title: 'Civic Intelligence', description: 'Empowering informed decision-making' }
  ];

  const servesAudience = [
    'Landowners', 'Buyers', 'Developers', 'Surveyors',
    'Government', 'Committees', 'Explorers', 'Tourists',
    'Farmers', 'Geographers'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 dark:from-blue-900 to-gray-50 dark:to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 rounded-3xl mb-6 shadow-xl">
            <Eye className="text-white" size={40} />
          </div>
          <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">EagleEye</h1>
          <p className="text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A land intelligence platform providing 3D modeling, offline navigation, infrastructure analysis, and civic insight
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {eagleEyeFeatures.map((feature, idx) => (
            <div key={idx} className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-12 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">Who It Serves</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {servesAudience.map((audience, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-xl p-4 text-center font-semibold text-blue-900 dark:text-blue-100 hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-800 dark:hover:to-blue-700 hover:scale-105 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md">
                {audience}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 rounded-3xl shadow-2xl p-12 text-white dark:text-gray-100 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '30px 30px'
            }}></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Why It Matters</h2>
            <p className="text-2xl leading-relaxed max-w-4xl mx-auto">Because no one should be lost in their own land. EagleEye brings clarity, access, and empowerment to every Nigerian citizen.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactSection = () => {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    alert('Thank you for your message! We will get back to you soon.');
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 dark:from-gray-800 to-blue-50 dark:to-blue-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white">Get In Touch</h1>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 mb-12">
          <div className="space-y-6">
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Name</label>
              <input
                type="text"
                value={contactForm.name}
                onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900 transition-all duration-300 outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Your full name"
              />
            </div>

            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <input
                type="email"
                value={contactForm.email}
                onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900 transition-all duration-300 outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <textarea
                rows={6}
                value={contactForm.message}
                onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900 transition-all duration-300 outline-none resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Tell us how we can help..."
              ></textarea>
            </div>

            <button
              onClick={handleContactSubmit}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 hover:from-blue-700 hover:to-blue-800 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send Message
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: MapPin, text: 'Plot 180 Cadastral Zone Lugbe, Abuja', color: 'from-red-500 to-red-600 dark:from-red-600 dark:to-red-700' },
            { icon: Phone, text: '07033343488 / 07086394609', color: 'from-green-500 to-green-600 dark:from-green-600 dark:to-green-700' },
            { icon: Mail, text: 'info@idatech.com', color: 'from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
              <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="text-white" size={24} />
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CareersSection = () => {
  const [careerForm, setCareerForm] = useState({ email: '', resume: null });

  const handleCareerSubmit = (e) => {
    e.preventDefault();
    console.log('Career form submitted:', careerForm);
    alert('Thank you for your application! We will review it shortly.');
    setCareerForm({ email: '', resume: null });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 dark:from-blue-900 to-gray-50 dark:to-gray-800 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-6 text-center text-gray-900 dark:text-white">Join Our Team</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">If you believe in service, innovation, and the betterment of mankind — we want to hear from you</p>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12">
          <div className="space-y-6">
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                value={careerForm.email}
                onChange={(e) => setCareerForm({...careerForm, email: e.target.value})}
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900 transition-all duration-300 outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Upload Resume</label>
              <div className="relative border-2 border-dashed border-gray-300 dark:border-gray-500 rounded-xl p-8 text-center hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300 cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900">
                <Upload className="mx-auto mb-4 text-gray-400 dark:text-gray-500" size={40} />
                <p className="text-gray-600 dark:text-gray-400 mb-2">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">PDF, DOC, DOCX (Max 5MB)</p>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setCareerForm({...careerForm, resume: e.target.files[0]})}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
              {careerForm.resume && (
                <p className="text-sm text-green-600 dark:text-green-400 mt-2">✓ {careerForm.resume.name}</p>
              )}
            </div>

            <button
              onClick={handleCareerSubmit}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 hover:from-orange-600 hover:to-orange-700 dark:hover:from-orange-700 dark:hover:to-orange-800 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Submit Application
            </button>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {[
            { title: 'Innovation', desc: 'Work on cutting-edge technology' },
            { title: 'Impact', desc: 'Make a real difference in Nigeria' },
            { title: 'Growth', desc: 'Continuous learning opportunities' },
            { title: 'Culture', desc: 'Collaborative and supportive team' }
          ].map((benefit, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Footer (detailed)
const Footer = ({ darkMode }) => (
  <footer className="bg-gradient-to-br from-gray-100 dark:from-blue-900 to-gray-200 dark:to-blue-950 text-gray-900 dark:text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center space-x-3 mb-4">
<img src="/IdaTech-logo.png" alt="IdaTech Tech Logo" className="w-10 h-10 rounded-xl shadow-md" />
            <span className="text-xl font-bold">IdaTech Tech Solutions</span>
          </div>
          <p className="text-blue-600 dark:text-blue-200">Empowering Nigeria through technology and innovation</p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <div className="space-y-2">
            {navigation.map((item) => (
              <button key={item.id} className="block text-blue-600 dark:text-blue-200 hover:text-gray-900 dark:hover:text-white transition-colors">{item.name}</button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Contact</h3>
          <div className="space-y-2 text-blue-600 dark:text-blue-200">
            <p>Plot 180 Cadastral Zone Lugbe</p>
            <p>Abuja, Nigeria</p>
            <p>07033343488 / 07086394609</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 dark:border-blue-800 pt-8 text-center text-blue-600 dark:text-blue-200">
        <p>&copy; 2025 IdaTech Tech Solutions Ltd. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const IdaTechWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDarkMode = savedTheme === 'true' || (!savedTheme && prefersDark);
    setDarkMode(initialDarkMode);
    if (initialDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return <HomeSection setActiveSection={setActiveSection} darkMode={darkMode} />;
      case 'about':
        return <AboutSection darkMode={darkMode} />;
      case 'eagleeye':
        return <EagleEyeSection darkMode={darkMode} />;
      case 'contact':
        return <ContactSection darkMode={darkMode} />;
      case 'careers':
        return <CareersSection darkMode={darkMode} />;
      case 'login':
        return <Login setActiveSection={setActiveSection} darkMode={darkMode} />;
      case 'register':
        return <Register setActiveSection={setActiveSection} darkMode={darkMode} />;
      default:
        return <HomeSection setActiveSection={setActiveSection} darkMode={darkMode} />;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        scrolled={scrolled}
        mobileOpen={mobileMenuOpen}
        setMobileOpen={setMobileMenuOpen}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <main className="pt-20">
        <Suspense fallback={<LoadingSpinner />}>
          {renderSection()}
        </Suspense>
      </main>

      {activeSection !== 'login' && activeSection !== 'register' && <Footer darkMode={darkMode} />}
    </div>
  );
};

export default IdaTechWebsite;
