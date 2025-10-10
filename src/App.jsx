import React, { useState, useEffect, Suspense } from 'react';
import { Menu, X, MapPin, Phone, Mail, ChevronRight, Eye, Globe, Building, Users, Cpu, Zap, Send, Upload } from 'lucide-react';

// Loading spinner used by Suspense
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-24 w-24 border-b-4 border-blue-600"></div>
  </div>
);

const navigation = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'EagleEye', id: 'eagleeye' },
  { name: 'Contact', id: 'contact' },
  { name: 'Careers', id: 'careers' }
];

// Navbar with scroll-fade behavior
const Navbar = ({ activeSection, setActiveSection, scrolled, mobileOpen, setMobileOpen }) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3 border-b border-gray-200' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveSection('home')}>
            <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">ID</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">
              IdaDav Tech
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 px-6 py-2 rounded-lg">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`relative px-4 py-2 font-medium text-gray-800 text-sm lg:text-base transition-colors duration-300 ${
                  activeSection === item.id
                    ? ''
                    : 'hover:text-blue-600'
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-500 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </button>
            ))}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {mobileOpen ? <X size={24} className={scrolled ? 'text-gray-900' : 'text-white'} /> : <Menu size={24} className={scrolled ? 'text-gray-900' : 'text-white'} />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="md:hidden mt-4 space-y-2 pb-4">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileOpen(false);
                }}
                className={`block w-full text-left px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

// Sections - full content
const HomeSection = ({ setActiveSection }) => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-white text-gray-900 overflow-hidden">
        {/* Visual bg (SVG simplified) */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center z-10">
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-3 bg-blue-100 px-6 py-3 rounded-full border border-blue-200">
              <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
              <span className="text-blue-900 font-medium text-lg">Technology Solutions for Nigeria</span>
            </div>
          </div>

          {/* Removed image as per user request */}

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-gray-900">
            Innovative Technology Solutions
            <span className="block text-blue-600 mt-2">
              for Nigeria's Future
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
            Committed to excellence, innovation, and delivering impactful solutions.
          </p>
          <button
            onClick={() => setActiveSection('eagleeye')}
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Discover EagleEye
            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer">
              <Building className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <div className="text-3xl font-extrabold text-blue-900 mb-2">Land Intelligence</div>
              <div className="text-blue-700 text-base">Smart mapping solutions</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer">
              <Globe className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <div className="text-3xl font-extrabold text-blue-900 mb-2">Nationwide</div>
              <div className="text-blue-700 text-base">Serving all of Nigeria</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer">
              <Users className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <div className="text-3xl font-extrabold text-blue-900 mb-2">For Everyone</div>
              <div className="text-blue-700 text-base">Accessible technology</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-50 to-transparent z-0"></div>
      </div>

      {/* Features Grid */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">Building Tomorrow's Nigeria</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Innovative solutions designed for Nigerian communities, built with integrity and purpose</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Eye, title: 'EagleEye Platform', desc: 'Revolutionary land intelligence system that helps you understand and navigate Nigerian land with clarity and confidence', color: 'from-blue-500 to-blue-700', onClick: () => setActiveSection('eagleeye') },
              { icon: Cpu, title: 'Smart Solutions', desc: 'Easy-to-use technology that empowers communities and makes complex information simple and accessible', color: 'from-purple-500 to-purple-700', onClick: () => { setActiveSection('home'); setTimeout(() => document.getElementById('smart-solutions').scrollIntoView({behavior: 'smooth'}), 100); } },
              { icon: Building, title: 'Infrastructure Insights', desc: 'Reliable data and analysis to support smart development decisions for a better Nigeria', color: 'from-green-500 to-green-700', onClick: () => { setActiveSection('home'); setTimeout(() => document.getElementById('infrastructure-insights').scrollIntoView({behavior: 'smooth'}), 100); } }
            ].map((feature, idx) => (
              <div key={idx} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2 border border-gray-100" onClick={feature.onClick}>
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.desc}</p>
                <button className="group inline-flex items-center gap-2 mt-4 text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300">
                  Learn more
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Smart Solutions Section */}
      <div id="smart-solutions" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-purple-100 px-6 py-3 rounded-full border border-purple-200 mb-6">
              <Cpu className="w-6 h-6 text-purple-700" />
              <span className="text-purple-900 font-medium">Smart Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">Empowering Communities with Smart Technology</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Our smart solutions bridge the gap between complex technology and everyday users, making powerful tools accessible to all Nigerians.</p>
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
              <div key={idx} className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-purple-200">
                <h3 className="text-xl font-bold mb-3 text-purple-900">{item.title}</h3>
                <p className="text-purple-700">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-3xl shadow-xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6 text-purple-200">Join thousands of Nigerians already benefiting from our smart solutions.</p>
            <button onClick={() => setActiveSection('contact')} className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>

      {/* Infrastructure Insights Section */}
      <div id="infrastructure-insights" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-green-100 px-6 py-3 rounded-full border border-green-200 mb-6">
              <Building className="w-6 h-6 text-green-700" />
              <span className="text-green-900 font-medium">Infrastructure Insights</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">Data-Driven Infrastructure Development</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive analysis and reliable data to guide smart infrastructure decisions and sustainable development across Nigeria.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Data Collection & Analysis</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Advanced geospatial data gathering techniques for accurate infrastructure mapping</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Real-time monitoring of infrastructure conditions and usage patterns</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Predictive analytics for maintenance and capacity planning</p>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Strategic Decision Support</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Evidence-based recommendations for infrastructure investments</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Risk assessment and mitigation strategies for development projects</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Sustainability impact analysis for long-term planning</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-3xl shadow-xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Build a Better Nigeria</h3>
            <p className="text-lg mb-6 text-green-200">Leverage our infrastructure insights to create sustainable, impactful development solutions.</p>
            <button onClick={() => setActiveSection('contact')} className="bg-white text-green-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-12 mb-12 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed">To build a better tomorrow for Nigerian citizens by placing powerful technology in the hands of everyday people.</p>
        </div>

        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl shadow-xl p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full opacity-10 -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Message from the Founder</h2>
            <blockquote className="text-xl italic leading-relaxed border-l-4 border-orange-500 pl-6">
              "I build with my heart, my mind, and my strength — not to take from people, but to give them tools that uplift."
            </blockquote>
            <p className="mt-6 text-blue-200 text-lg">— Idahosa, Founder</p>
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl mb-6 shadow-xl">
            <Eye className="text-white" size={40} />
          </div>
          <h1 className="text-5xl font-bold mb-6 text-gray-900">EagleEye</h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            A land intelligence platform providing 3D modeling, offline navigation, infrastructure analysis, and civic insight
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {eagleEyeFeatures.map((feature, idx) => (
            <div key={idx} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-12 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Who It Serves</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {servesAudience.map((audience, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center font-semibold text-blue-900 hover:from-blue-100 hover:to-blue-200 hover:scale-105 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md">
                {audience}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl shadow-2xl p-12 text-white text-center relative overflow-hidden">
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-12 text-center text-gray-900">Get In Touch</h1>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
          <div className="space-y-6">
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
              <input 
                type="text" 
                value={contactForm.name}
                onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none"
                placeholder="Your full name"
              />
            </div>

            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                value={contactForm.email}
                onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea 
                rows={6}
                value={contactForm.message}
                onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none resize-none"
                placeholder="Tell us how we can help..."
              ></textarea>
            </div>

            <button 
              onClick={handleContactSubmit}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send Message
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: MapPin, text: 'Plot 180 Cadastral Zone Lugbe, Abuja', color: 'from-red-500 to-red-600' },
            { icon: Phone, text: '07033343488 / 07086394609', color: 'from-green-500 to-green-600' },
            { icon: Mail, text: 'info@idadavtech.com', color: 'from-blue-500 to-blue-600' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
              <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="text-white" size={24} />
              </div>
              <p className="text-gray-700 font-medium">{item.text}</p>
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold mb-6 text-center text-gray-900">Join Our Team</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">If you believe in service, innovation, and the betterment of mankind — we want to hear from you</p>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="space-y-6">
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                value={careerForm.email}
                onChange={(e) => setCareerForm({...careerForm, email: e.target.value})}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Resume</label>
              <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-500 transition-colors duration-300 cursor-pointer bg-gray-50 hover:bg-blue-50">
                <Upload className="mx-auto mb-4 text-gray-400" size={40} />
                <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-500">PDF, DOC, DOCX (Max 5MB)</p>
                <input 
                  type="file" 
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setCareerForm({...careerForm, resume: e.target.files[0]})}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
              {careerForm.resume && (
                <p className="text-sm text-green-600 mt-2">✓ {careerForm.resume.name}</p>
              )}
            </div>

            <button 
              onClick={handleCareerSubmit}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
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
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Footer (detailed)
const Footer = () => (
  <footer className="bg-gradient-to-br from-blue-900 to-blue-950 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">ID</span>
            </div>
            <span className="text-xl font-bold">IdaDav Tech Solutions</span>
          </div>
          <p className="text-blue-200">Empowering Nigeria through technology and innovation</p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <div className="space-y-2">
            {navigation.map((item) => (
              <button key={item.id} className="block text-blue-200 hover:text-white transition-colors">{item.name}</button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Contact</h3>
          <div className="space-y-2 text-blue-200">
            <p>Plot 180 Cadastral Zone Lugbe</p>
            <p>Abuja, Nigeria</p>
            <p>07033343488 / 07086394609</p>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-800 pt-8 text-center text-blue-200">
        <p>&copy; 2025 IdaDav Tech Solutions Ltd. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// Main App
export default function IdaDavWebsite() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return <HomeSection setActiveSection={setActiveSection} />;
      case 'about':
        return <AboutSection />;
      case 'eagleeye':
        return <EagleEyeSection />;
      case 'contact':
        return <ContactSection />;
      case 'careers':
        return <CareersSection />;
      default:
        return <HomeSection setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        scrolled={scrolled}
        mobileOpen={mobileMenuOpen}
        setMobileOpen={setMobileMenuOpen}
      />

      <main className="pt-20">
        <Suspense fallback={<LoadingSpinner />}>
          {renderSection()}
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
