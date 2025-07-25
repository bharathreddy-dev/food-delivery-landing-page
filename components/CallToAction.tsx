"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AppleLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" fill="currentColor" height="1em" width="1em" {...props}>
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C39.2 141.1 0 183.2 0 245.4c0 45.7 30.7 108.5 69.5 142.4-14.1 32.2-27.5 71.8-27.5 109.1 0 19.2 12.3 32.1 32.1 32.1h159.2c20.1 0 32.1-12.9 32.1-32.1 0-40.4-16.4-82.3-29.8-116.2 38.2-20.7 69.5-62.2 69.5-112.6zM282.5 102.1c-1.7-33.4 28.3-59.2 53-59.2 1.5 0 2.9.1 4.4.3-22.9 14.3-38.6 35.8-44.8 56.1-4.9 16.4-7.4 33.4-5.6 50.8-19.8-1.1-33.4-15.8-37.3-32.4-2.7-11.4-2.9-22.3-2.7-33.1z" />
  </svg>
);

const GooglePlayLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" fill="currentColor" height="1em" width="1em" {...props}>
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0L11 27.3l104.6 60.4 42.6-24.1zM465 248L281.2 416l73.9-64.4 110-103.6zM11 484.7L47 512l104.6-60.4-42.6-24.1z" />
  </svg>
);


const CallToAction = () => {
    const navItemPath = "download-app";

    return (
        <section id={navItemPath} className="w-full bg-gradient-to-br from-amber-50 via-orange-100 to-yellow-50 py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    <div className="relative flex justify-center lg:justify-start">
                        <div className="relative h-[450px] w-[250px] sm:h-[550px] sm:w-[300px] transform transition-transform duration-500 hover:scale-105">
                             <Image
                                src="https://images.pexels.com/photos/14731994/pexels-photo-14731994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="Food delivery app on a smartphone"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-3xl shadow-2xl shadow-orange-900/20"
                            />
                        </div>
                    </div>

                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                            Get Your Favorites,
                            <span className="block text-orange-500">Delivered in Minutes.</span>
                        </h2>
                        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 lg:mx-0">
                            Don't let hunger wait. With our app, your next delicious meal is just a few taps away. Quick, easy, and always satisfying. Download now and taste the convenience.
                        </p>
                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                            <Link
                                href="#"
                                className="flex w-full items-center justify-center gap-3 rounded-lg bg-slate-900 px-6 py-3 text-white transition-colors hover:bg-slate-800 sm:w-auto"
                            >
                                <AppleLogo className="h-7 w-7" />
                                <div className="text-left">
                                    <p className="text-xs">Download on the</p>
                                    <p className="text-lg font-semibold leading-tight">App Store</p>
                                </div>
                            </Link>
                            <Link
                                href="#"
                                className="flex w-full items-center justify-center gap-3 rounded-lg bg-slate-900 px-6 py-3 text-white transition-colors hover:bg-slate-800 sm:w-auto"
                            >
                                <GooglePlayLogo className="h-6 w-6" />
                                <div className="text-left">
                                    <p className="text-xs">GET IT ON</p>
                                    <p className="text-lg font-semibold leading-tight">Google Play</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;