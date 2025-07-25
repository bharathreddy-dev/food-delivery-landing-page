'use client';

import React, { useState, useEffect, FC, FormEvent } from 'react';
import Link from 'next/link';
import { Menu, X, Soup, Send } from 'lucide-react';

// --- Reusable Input Component for the Modal Form ---
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const FormInput: FC<InputProps> = ({ label, id, ...props }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-slate-700">
      {label}
    </label>
    <div className="mt-1">
      <input
        id={id}
        {...props}
        className="block w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
      />
    </div>
  </div>
);


// --- Contact Modal Component ---
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setTimeout(() => {
            onClose();
            setSubmitted(false);
        }, 2000);
    }, 1500);
  };


  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg p-8 m-4 bg-white rounded-2xl shadow-xl transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {submitted ? (
            <div className="text-center py-8">
                <Send className="mx-auto text-green-500" size={48} />
                <h3 className="mt-4 text-2xl font-bold text-slate-800">Message Sent!</h3>
                <p className="mt-2 text-slate-600">We'll get back to you shortly. Thanks for reaching out!</p>
            </div>
        ) : (
            <>
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-slate-900">Get Started</h2>
                  <p className="mt-2 text-slate-600">
                    Tell us a bit about your needs, and we'll be in touch!
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <FormInput label="Full Name" id="name" type="text" placeholder="John Doe" required />
                  <FormInput label="Email Address" id="email" type="email" placeholder="you@example.com" required />
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                      Your Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="block w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                        placeholder="What can we help you with?"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:bg-orange-300 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
            </>
        )}
      </div>
    </div>
  );
};


// --- Header Component ---
const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Home', path: 'hero' },
    { name: 'Features', path: 'features' },
    { name: 'How It Works', path: 'how-it-works' },
    { name: 'Testimonials', path: 'testimonials' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  const openModal = () => {
    setIsModalOpen(true);
    closeMenu();
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/#hero" className="flex items-center gap-2" onClick={closeMenu}>
                <Soup className="h-8 w-8 text-orange-600" />
                <span className="text-2xl font-bold text-slate-800">QuickBite</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={`/#${item.path}`}
                  className="text-slate-600 font-medium hover:text-orange-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Get Started Button */}
            <div className="hidden md:block">
              <button
                onClick={openModal}
                className="px-5 py-2.5 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-75 transition-all"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} aria-label="Toggle menu">
                {isMenuOpen ? <X size={28} className="text-slate-800" /> : <Menu size={28} className="text-slate-800" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <nav className="flex flex-col items-center space-y-6 px-4 py-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={`/#${item.path}`}
                  className="text-slate-700 text-lg font-medium hover:text-orange-600"
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/#cta"
                className="text-slate-700 text-lg font-medium hover:text-orange-600"
                onClick={closeMenu}
              >
                Get Started
              </Link>
              <button
                onClick={openModal}
                className="w-full mt-4 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-75 transition-all"
              >
                Contact Us
              </button>
            </nav>
          </div>
        )}
      </header>

      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Header;