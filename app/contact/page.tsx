'use client';

import AnimatedContent from "@/components/animated-content";
import SectionTitle from "@/components/section-title";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";

export default function page() {
    return (
        <section id="contact" className="px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="max-w-7xl mx-auto py-32">
                {/* Section Title */}
                <SectionTitle
                    icon={MailIcon}
                    title="Get in Touch"
                    subtitle="I’m always open to discussing new projects, creative ideas, or opportunities to be part of your visions."
                />

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <AnimatedContent className="flex flex-col  justify-center space-y-6">
                        <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-6 shadow-sm">
                            <MailIcon className="w-6 h-6 text-orange-500" />
                            <a href="mailto:jishanhoshenjibon@gmail.com" className="text-zinc-700">jishanhoshenjibon@gmail.com</a>
                        </div>

                        <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-6 shadow-sm">
                            <PhoneIcon className="w-6 h-6 text-orange-500" />
                            <a href="tel:+8801967569642" className="text-zinc-700">+880 1967569642</a>
                        </div>

                        <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-6 shadow-sm">
                            <MapPinIcon className="w-6 h-6 text-orange-500" />
                            <a className="text-zinc-700">Jessore, Bangladesh</a>
                        </div>
                    </AnimatedContent>


                    {/* Contact Form */}
                    <AnimatedContent>
                        <form className="space-y-6 bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-zinc-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your name"
                                    className="mt-2 w-full border border-gray-300 rounded-md p-3 text-zinc-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Your email"
                                    className="mt-2 w-full border border-gray-300 rounded-md p-3 text-zinc-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-zinc-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="Your message"
                                    rows={5}
                                    className="mt-2 w-full border border-gray-300 rounded-md p-3 text-zinc-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 px-6 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </AnimatedContent>
                </div>
            </div>
        </section>
    );
}
