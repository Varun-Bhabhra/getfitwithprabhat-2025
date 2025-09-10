"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

import { Star } from "lucide-react";

export default function Home() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const scaleOnHover = {
    whileHover: { scale: 1.05, transition: { duration: 0.2 } },
    whileTap: { scale: 0.95 },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Redesigned */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/test.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center text-center text-white px-6 max-w-4xl mx-auto"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight"
            variants={fadeInUp}
          >
            Get Fit With <span className="text-[#F5F570]">Prabhat</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl mb-10 font-light max-w-2xl"
            variants={fadeInUp}
          >
            Build strength. Build confidence. Build the best version of you.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={fadeInUp}
          >
            <motion.button
              className="bg-[#F5F570] hover:bg-[#e8e865] text-gray-900 px-8 py-3 rounded-full text-lg font-bold shadow-lg transition-colors duration-300"
              {...scaleOnHover}
            >
              Start Training
            </motion.button>
            <motion.button
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full text-lg font-bold transition-colors duration-300"
              {...scaleOnHover}
            >
              Book a Call
            </motion.button>
          </motion.div>

          {/* Social Proof / Credibility Section */}
          <motion.div
            className="flex flex-col items-center gap-4"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-2">
              <Star className="text-yellow-400 fill-current" size={20} />
              <Star className="text-yellow-400 fill-current" size={20} />
              <Star className="text-yellow-400 fill-current" size={20} />
              <Star className="text-yellow-400 fill-current" size={20} />
              <Star className="text-yellow-400 fill-current" size={20} />
              <span className="ml-2 text-sm font-medium text-gray-200">
                5.0 Rating from 50+ Clients
              </span>
            </div>
            <div className="flex items-center">
              <div className="flex -space-x-4">
                {/* Replace with actual client images */}
                <Image
                  src="/hero.jpeg"
                  alt="Client 1"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="/hero.jpeg"
                  alt="Client 2"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="/hero.jpeg"
                  alt="Client 3"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
              </div>
              <p className="ml-4 text-sm text-gray-300">
                Join a community of champions.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
      {/* About Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#F5F570] rounded-full"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#241F20] rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#F5F570] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-[#241F20] mb-6">
              Meet <span className="text-[#F5F570]">Prabhat</span>
            </h2>
            <div className="w-24 h-1 bg-[#F5F570] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From competitor to coach, transforming lives one rep at a time
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12 items-start mb-20">
            {/* Story Column */}
            <motion.div
              className="lg:col-span-1"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="sticky top-20">
                <h3 className="text-2xl font-bold text-[#241F20] mb-6">
                  The Journey
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Prabhat isn't just a coach—he lives and breathes fitness. From
                  competing at
                  <strong className="text-[#F5F570] bg-[#241F20] px-2 py-1 rounded ml-1">
                    {" "}
                    Muscle Mania 2024
                  </strong>{" "}
                  to standing strong at
                  <strong className="text-[#F5F570] bg-[#241F20] px-2 py-1 rounded ml-1">
                    {" "}
                    ICN 2025
                  </strong>
                  , his journey is built on discipline, passion, and results.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Whether it's lifting heavier, staying consistent, or pushing
                  past limits—Prabhat brings that same energy to every client he
                  trains.
                </p>

                {/* Stats */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#F5F570] rounded-full flex items-center justify-center">
                      <span className="text-[#241F20] font-bold text-lg">
                        5+
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#241F20]">
                        Years Experience
                      </p>
                      <p className="text-sm text-gray-600">
                        Training & Competing
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#F5F570] rounded-full flex items-center justify-center">
                      <span className="text-[#241F20] font-bold text-lg">
                        100+
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#241F20]">
                        Clients Transformed
                      </p>
                      <p className="text-sm text-gray-600">Lives Changed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#F5F570] rounded-full flex items-center justify-center">
                      <span className="text-[#241F20] font-bold text-lg">
                        24/7
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#241F20]">
                        Support System
                      </p>
                      <p className="text-sm text-gray-600">Always Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Photos Grid */}
            <motion.div
              className="lg:col-span-2"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <div className="grid grid-cols-4 grid-rows-4 gap-4 h-[600px]">
                {/* Large feature photo */}
                <motion.div
                  className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group"
                  variants={fadeInUp}
                >
                  <Image
                    src="/hero.jpeg"
                    alt="Prabhat Training"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#241F20]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>

                {/* Competition photo */}
                <motion.div
                  className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden group"
                  variants={fadeInUp}
                >
                  <Image
                    src="/hero.jpeg"
                    alt="Competition Pose"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#F5F570] text-[#241F20] px-2 py-1 rounded text-xs font-bold">
                    COMPETITOR
                  </div>
                </motion.div>

                {/* Gym workout */}
                <motion.div
                  className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden group"
                  variants={fadeInUp}
                >
                  <Image
                    src="/hero.jpeg"
                    alt="Gym Workout"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>

                {/* Coaching session */}
                <motion.div
                  className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden group"
                  variants={fadeInUp}
                >
                  <Image
                    src="/hero.jpeg"
                    alt="Coaching Session"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#241F20] text-[#F5F570] px-2 py-1 rounded text-xs font-bold">
                    COACH
                  </div>
                </motion.div>

                {/* Lifestyle shot */}
                <motion.div
                  className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden group"
                  variants={fadeInUp}
                >
                  <Image
                    src="/hero.jpeg"
                    alt="Lifestyle"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>

                {/* Progress transformation */}
                <motion.div
                  className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden group"
                  variants={fadeInUp}
                >
                  <Image
                    src="/hero.jpeg"
                    alt="Progress Shot"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 right-2 bg-[#F5F570] text-[#241F20] px-2 py-1 rounded text-xs font-bold">
                    RESULTS
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-32 bg-[#241F20] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#241F20] via-[#2a2425] to-[#241F20]"></div>
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#F5F570] rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-[#F5F570] rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Why Choose <span className="text-[#F5F570]">Prabhat?</span>
            </h2>
            <div className="w-24 h-1 bg-[#F5F570] mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              It's not just about the workout—it's about the transformation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Proven Results */}
            <motion.div
              className="text-center group"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="w-20 h-20 bg-[#F5F570] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl text-[#241F20]">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Proven Results
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Track record of transforming lives with measurable, sustainable
                results that last.
              </p>
            </motion.div>

            {/* Personal Experience */}
            <motion.div
              className="text-center group"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="w-20 h-20 bg-[#F5F570] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl text-[#241F20]">💪</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Personal Experience
              </h3>
              <p className="text-gray-300 leading-relaxed">
                As a competitor, I understand the discipline and dedication
                required for real transformation.
              </p>
            </motion.div>

            {/* Customized Approach */}
            <motion.div
              className="text-center group"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="w-20 h-20 bg-[#F5F570] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl text-[#241F20]">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Customized Approach
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Every program is tailored to your unique goals, lifestyle, and
                fitness level.
              </p>
            </motion.div>

            {/* Ongoing Support */}
            <motion.div
              className="text-center group"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="w-20 h-20 bg-[#F5F570] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl text-[#241F20]">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Ongoing Support
              </h3>
              <p className="text-gray-300 leading-relaxed">
                24/7 support system to keep you motivated, accountable, and on
                track.
              </p>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <p className="text-2xl text-[#F5F570] font-bold mb-8">
              Ready to transform your life?
            </p>
            <motion.button
              className="bg-[#F5F570] text-[#241F20] px-10 py-4 rounded-full text-lg font-bold hover:bg-white transition-colors duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey Today
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center text-[#241F20] mb-16"
              variants={fadeInUp}
            >
              Coaching Options
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Personal Training Card */}
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeInUp}
                {...scaleOnHover}
              >
                <div className="w-16 h-16 bg-[#F5F570] rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">🏋️</span>
                </div>
                <h3 className="text-2xl font-bold text-[#241F20] mb-4">
                  Personal Training (In-Gym)
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  One-on-one coaching with Prabhat at the gym. Tailored
                  workouts, proper form, and accountability to push you to the
                  next level.
                </p>
                <p className="text-[#F5F570] font-semibold text-lg mb-6">
                  Starting at ₹[Price] / month
                </p>
                <button className="w-full bg-[#241F20] hover:bg-[#1a1516] text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                  Book via Cal.com
                </button>
              </motion.div>

              {/* Virtual Coaching Card */}
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeInUp}
                {...scaleOnHover}
              >
                <div className="w-16 h-16 bg-[#F5F570] rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-2xl font-bold text-[#241F20] mb-4">
                  Virtual Coaching (Online)
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Train with Prabhat from anywhere. Customized workout &
                  nutrition plan, weekly check-ins, and guidance to keep you
                  consistent.
                </p>
                <p className="text-[#F5F570] font-semibold text-lg mb-6">
                  Starting at ₹[Price] / month
                </p>
                <button className="w-full bg-[#241F20] hover:bg-[#1a1516] text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                  Book via Cal.com
                </button>
              </motion.div>

              {/* Consultation Card */}
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeInUp}
                {...scaleOnHover}
              >
                <div className="w-16 h-16 bg-[#F5F570] rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="text-2xl font-bold text-[#241F20] mb-4">
                  15-Minute Consultation Call
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Not sure where to begin? Jump on a quick call with Prabhat to
                  discuss your fitness goals and the best path for you.
                </p>
                <p className="text-[#F5F570] font-semibold text-lg mb-6">
                  ₹[Price] one-time
                </p>
                <button className="w-full bg-[#241F20] hover:bg-[#1a1516] text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                  Book via Cal.com
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center text-[#241F20] mb-16"
              variants={fadeInUp}
            >
              What Clients Say
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="bg-gray-50 rounded-2xl p-8 text-center"
                variants={fadeInUp}
              >
                <div className="w-20 h-20 bg-[#F5F570] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                  "Prabhat made me believe in myself. In 3 months, I feel
                  stronger and more confident than ever."
                </blockquote>
                <cite className="text-[#241F20] font-semibold">– Rohan S.</cite>
              </motion.div>

              <motion.div
                className="bg-gray-50 rounded-2xl p-8 text-center"
                variants={fadeInUp}
              >
                <div className="w-20 h-20 bg-[#F5F570] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                  "I always struggled with consistency. With Prabhat's guidance,
                  I finally see results."
                </blockquote>
                <cite className="text-[#241F20] font-semibold">
                  – Ananya K.
                </cite>
              </motion.div>

              <motion.div
                className="bg-gray-50 rounded-2xl p-8 text-center"
                variants={fadeInUp}
              >
                <div className="w-20 h-20 bg-[#F5F570] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                  "Training with him is motivating—he pushes you, but also
                  supports you every step."
                </blockquote>
                <cite className="text-[#241F20] font-semibold">– Vivek T.</cite>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#241F20] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold mb-4">
              Follow my journey. Stay consistent. Get fit.
            </h3>

            <div className="flex justify-center space-x-8 mb-8">
              <a
                href="#"
                className="text-2xl hover:text-[#F5F570] transition-colors duration-300"
              >
                📸
              </a>
              <a
                href="#"
                className="text-2xl hover:text-[#F5F570] transition-colors duration-300"
              >
                ▶️
              </a>
              <a
                href="#"
                className="text-2xl hover:text-[#F5F570] transition-colors duration-300"
              >
                💬
              </a>
              <a
                href="#"
                className="text-2xl hover:text-[#F5F570] transition-colors duration-300"
              >
                📧
              </a>
            </div>

            <div className="flex justify-center space-x-8 text-sm mb-8">
              <a
                href="#"
                className="hover:text-[#F5F570] transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="#"
                className="hover:text-[#F5F570] transition-colors duration-300"
              >
                YouTube
              </a>
              <a
                href="#"
                className="hover:text-[#F5F570] transition-colors duration-300"
              >
                WhatsApp
              </a>
              <a
                href="#"
                className="hover:text-[#F5F570] transition-colors duration-300"
              >
                Email
              </a>
            </div>

            <p className="text-gray-400 text-sm">Get Fit With Prabhat © 2025</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
