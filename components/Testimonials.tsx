'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  avatarUrl: string;
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    name: 'Sarah L.',
    title: 'Busy Professional',
    quote: "As a busy professional, this app is a lifesaver. I can get healthy, delicious meals delivered to my office in under 30 minutes. The variety is amazing and the quality is always top-notch. It's my go-to for lunch!",
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
    rating: 5,
  },
  {
    name: 'Michael B.',
    title: 'University Student',
    quote: "Late-night study sessions just got a whole lot better. The 24/7 service is incredible. I ordered a pizza at 2 AM and it arrived hot and fresh. The app is super easy to use and the prices are student-friendly. Highly recommend!",
    avatarUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=300&auto=format&fit=crop',
    rating: 5,
  },
  {
    name: 'Jessica & Tom H.',
    title: 'Young Family',
    quote: "With two young kids, cooking every night is a challenge. This app has given us our evenings back. We can order different cuisines to please everyone, and the food arrives faster than I could cook it myself. A real game-changer for our family.",
    avatarUrl: 'https://images.unsplash.com/photo-1614283995738-92f7672729a8?q=80&w=300&auto=format&fit=crop',
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center">
    {Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300 dark:text-slate-600'}`}
      />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full py-16 sm:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-orange-600 tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl tracking-tight">
            What Our Customers Are Saying
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-500 dark:text-slate-400">
            Real stories from satisfied food lovers who rely on us for their daily cravings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800/50 rounded-xl shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 border border-slate-200 dark:border-slate-700"
            >
              <div className="p-8 flex-grow">
                <Quote className="w-8 h-8 text-orange-500" />
                <blockquote className="mt-6 text-slate-600 dark:text-slate-300 italic">
                  <p>"{testimonial.quote}"</p>
                </blockquote>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 p-6 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Image
                      className="h-12 w-12 rounded-full object-cover"
                      src={testimonial.avatarUrl}
                      alt={`Avatar of ${testimonial.name}`}
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-semibold text-slate-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
                <div className="ml-4">
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;