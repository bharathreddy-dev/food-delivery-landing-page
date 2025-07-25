'use client';

import React from 'react';
import { Search, Smartphone, Rocket } from 'lucide-react';

// The path for this section, used for the section id.
// This should match the href of the corresponding NavLink without the '#'.
const navItemPath = "how-it-works";

// Data for the steps. Can be fetched from a CMS in a real-world scenario.
const steps = [
  {
    icon: Search,
    name: 'Discover Restaurants',
    description: 'Explore a vast selection of curated restaurants and cuisines. Our smart filters help you find the perfect meal for any craving or dietary need.',
  },
  {
    icon: Smartphone,
    name: 'Order With A Tap',
    description: 'Customize your meal to your liking, add it to your cart, and check out with a simple, secure payment process, all within the app.',
  },
  {
    icon: Rocket,
    name: 'Lightning-Fast Delivery',
    description: 'Track your order in real-time from the moment it’s prepared to when it arrives at your door. Enjoy your meal, hot and fresh.',
  },
];

/**
 * A section component that explains the process of using the app in simple, clear steps.
 * It's designed to be clean, modern, and easy for users to understand.
 */
const HowItWorks: React.FC = () => {
  return (
    <section id={navItemPath} className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">GET STARTED</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your meal is just a few clicks away
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We've designed a seamless ordering experience, so you can get back to what matters most. Here’s how you can get delicious food delivered in no time.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600">
                    <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {step.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{step.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;