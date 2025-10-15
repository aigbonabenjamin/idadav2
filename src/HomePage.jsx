import React, { useState, useEffect, Suspense } from 'react';
import { Menu, X, MapPin, Phone, Mail, ChevronRight, Eye, Globe, Building, Users, Cpu, Zap, Send, Upload, Sun, Moon, LogIn, LogOut, User } from 'lucide-react';
import logo from './ID tech.png';
import logoBlack from './ID tech-black.png';
import cityTech from './City-tech.jpg';
import dataCenter from './Data-Center.jpg';

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
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white dark:bg-gray-900 shadow-md py-3 border-b border-gray-200 dark:border-gray-700' : 'bg-transparent py-6'}`}>

