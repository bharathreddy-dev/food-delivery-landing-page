"use client";

import React from 'react';
import type { FC } from 'react';
import { Zap, Store, MapPin, BadgePercent } from 'lucide-react';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Zap,
    title: 'Lightning-Fast Delivery',
    description: 'Get your favorite meals delivered in minutes. Our optimized logistics network ensures your food arrives hot and fresh, right when you crave it.',
  },
  {
    icon: Store,
    title: 'Vast Restaurant Selection',
    description: 'Explore thousands of local and national restaurants. From fine dining to street food, we have an option for every taste and budget.',
  },
  {
    icon: MapPin,
    title: 'Real-Time Order Tracking',
    description: 'Watch your order\'s journey from the kitchen to your doorstep with our live map tracking. No more guessing when your food will arrive.',
  },
  {
    icon: BadgePercent,
    title: 'Exclusive Deals & Offers',
    description: 'Save big with daily discounts, special promotions, and loyalty rewards from your favorite eateries, available only on our app.',
  },
];

const Features: FC = () => {
  return (
    <section id="features" className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-orange-600">
            Everything You Need
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Our Service?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We're not just another food app. We're your partner in satisfying cravings, instantly. Experience the difference with features designed for you.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Features;