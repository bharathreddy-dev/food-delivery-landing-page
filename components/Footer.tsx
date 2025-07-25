"use client";

import React, { useState, FormEvent, FC } from "react";
import Link from "next/link";
import { X, Phone, Mail, MapPin } from "lucide-react";

// --- CONTACT MODAL COMPONENT ---
interface ContactModalProps {
  onClose: () => void;
}

const ContactModal: FC<ContactModalProps> = ({ onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    // Hide success message and close modal after 3 seconds
    setTimeout(() => {
        setIsSubmitted(false);
        onClose();
    }, 3000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-lg p-6 mx-4 bg-white rounded-2xl shadow-xl transform transition-all duration-300 ease-in-out sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {isSubmitted ? (
          <div className="text-center py-10">
            <h3 className="text-2xl font-bold text-green-600">Thank You!</h3>
            <p className="mt-2 text-gray-600">Your request has been sent. We'll be in touch shortly.</p>
          </div>
        ) : (
          <>
            <h2 id="modal-title" className="text-3xl font-bold text-gray-900">
              Get Started
            </h2>
            <p className="mt-2 text-gray-500">
              Let's get you set up. Fill out the form and we'll contact you.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="name" name="name" required className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" name="email" required className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500" placeholder="you@example.com" />
              </div>
              <div>
                 <label htmlFor="service" className="block text-sm font-medium text-gray-700">Interested In</label>
                 <select id="service" name="service" required className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500">
                    <option>Instant Food Delivery</option>
                    <option>Weekly Meal Plans</option>
                    <option>Corporate Catering</option>
                 </select>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 text-base font-semibold text-white bg-orange-600 rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:bg-orange-300 disabled:cursor-not-allowed transition-all duration-300 ease-in-out"
              >
                {isSubmitting ? 'Submitting...' : 'Request a Demo'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};


// --- FOOTER COMPONENT ---
const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "#hero" },
        { name: "Features", href: "#features" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Testimonials", href: "#testimonials" },
    ];
    
    const currentYear = new Date().getFullYear();

    const handleOpenModal = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsModalOpen(true);
    }
    
    return (
        <>
            <footer className="bg-slate-900 text-slate-300">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        
                        <div className="space-y-4">
                            <Link href="/" className="inline-flex items-center gap-2">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.89 15.54C16.71 15.72 16.45 15.81 16.19 15.81C15.93 15.81 15.67 15.72 15.48 15.54L12 12.06L8.52 15.54C8.13 15.93 7.5 15.93 7.11 15.54C6.72 15.15 6.72 14.52 7.11 14.13L10.59 10.65L7.11 7.17C6.72 6.78 6.72 6.15 7.11 5.76C7.5 5.37 8.13 5.37 8.52 5.76L12 9.24L15.48 5.76C15.87 5.37 16.5 5.37 16.89 5.76C17.28 6.15 17.28 6.78 16.89 7.17L13.41 10.65L16.89 14.13C17.28 14.52 17.28 15.15 16.89 15.54Z" fill="#F97316"/>
                                </svg>
                                <span className="text-2xl font-bold text-white">InstaFood</span>
                            </Link>
                            <p className="max-w-xs text-slate-400">
                                Your favorite meals, delivered lightning-fast. Experience the future of food delivery.
                            </p>
                            <div className="flex space-x-4 mt-4">
                               <SocialIcon href="#" brand="twitter" />
                               <SocialIcon href="#" brand="facebook" />
                               <SocialIcon href="#" brand="instagram" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2">
                           <div className="space-y-4">
                                <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Navigation</h3>
                                <ul className="space-y-3">
                                    {navItems.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="hover:text-orange-500 transition-colors duration-300">{item.name}</Link>
                                        </li>
                                    ))}
                                    <li>
                                        <button onClick={handleOpenModal} className="hover:text-orange-500 transition-colors duration-300 text-left w-full">Get Started</button>
                                    </li>
                                </ul>
                           </div>
                           <div className="space-y-4">
                                <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Legal</h3>
                                <ul className="space-y-3">
                                    <li><Link href="#" className="hover:text-orange-500 transition-colors duration-300">Privacy Policy</Link></li>
                                    <li><Link href="#" className="hover:text-orange-500 transition-colors duration-300">Terms of Service</Link></li>
                                    <li><Link href="#" className="hover:text-orange-500 transition-colors duration-300">Cookie Policy</Link></li>
                                </ul>
                           </div>
                            <div className="space-y-4">
                                <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Contact Us</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <Mail size={18} className="mt-1 text-orange-500 flex-shrink-0" />
                                        <a href="mailto:support@instafood.com" className="hover:text-orange-500 transition-colors duration-300">support@instafood.com</a>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Phone size={18} className="mt-1 text-orange-500 flex-shrink-0" />
                                        <a href="tel:+1234567890" className="hover:text-orange-500 transition-colors duration-300">+1 (234) 567-890</a>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <MapPin size={18} className="mt-1 text-orange-500 flex-shrink-0" />
                                        <span>123 Foodie Lane,<br/> Flavor Town, USA</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
                        <p>&copy; {currentYear} InstaFood Inc. All rights reserved.</p>
                    </div>
                </div>
            </footer>
            {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
        </>
    );
};

// --- SOCIAL ICON HELPER COMPONENT ---
interface SocialIconProps {
  href: string;
  brand: 'facebook' | 'twitter' | 'instagram';
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, brand }) => {
  const icons = {
    facebook: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
    ),
    twitter: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.49-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.55v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21c7.35 0 11.37-6.1 11.37-11.37 0-.17 0-.34-.01-.51.78-.57 1.45-1.28 1.98-2.08z"></path></svg>
    ),
    instagram: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.802C9.042 3.965 8.71 3.977 7.437 4.042c-2.71.123-3.975 1.4-4.099 4.099-.065 1.273-.077 1.6-.077 4.85s.012 3.578.077 4.85c.124 2.699 1.387 3.975 4.099 4.099 1.273.065 1.6.077 4.85.077s3.578-.012 4.85-.077c2.712-.124 3.975-1.39 4.099-4.099.065-1.273.077-1.6.077-4.85s-.012-3.578-.077-4.85c-.124-2.699-1.387-3.975-4.099-4.099-1.273-.065-1.6-.077-4.85-.077zM12 8.163a3.837 3.837 0 100 7.674 3.837 3.837 0 000-7.674zm0 6.163a2.326 2.326 0 110-4.652 2.326 2.326 0 010 4.652zm4.908-6.42a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"></path></svg>
    ),
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-400 hover:text-orange-500 transition-colors duration-300"
      aria-label={`Follow us on ${brand}`}
    >
      {icons[brand]}
    </a>
  );
};

export default Footer;