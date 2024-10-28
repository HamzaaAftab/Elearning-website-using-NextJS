'use client'
// components/ReviewSlider.tsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "https://picsum.photos/seed/1/600/400",
  "https://picsum.photos/seed/2/600/400",
  "https://picsum.photos/seed/3/600/400",
  "https://picsum.photos/seed/4/600/400",
  "https://picsum.photos/seed/5/600/400",
];

const reviews = [
  {
    name: "John Doe",
    text: "This platform has transformed my learning experience! The courses are well-structured and easy to follow.",
  },
  {
    name: "Jane Smith",
    text: "An amazing e-learning website! Highly recommend it for anyone looking to upskill.",
  },
  {
    name: "Samuel Green",
    text: "The instructors are fantastic, and the content is always up-to-date. Best platform out there!",
  },
];

const ReviewSlider: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center p-10 bg-gray-100">
      {/* Left Section - Reviews */}
      <div className="w-1/2 pr-8 space-y-6">
      <h1 className=' pb-8 text-4xl text-center md:text-5xl font-black bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 text-transparent bg-clip-text mt-2   ' >What our Student says</h1>
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 border rounded-xl shadow-lg bg-gray-200"
          >
            <p className="text-gray-700 italic">"{review.text}"</p>
            <p className="mt-3 text-right text-gray-500">- {review.name}</p>
          </motion.div>
        ))}
      </div>

      {/* Right Section - Image Slider */}
      <div className="w-1/2 overflow-hidden relative">
        <AnimatePresence>
          <motion.img
            key={images[currentImageIndex]}
            src={images[currentImageIndex]}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            alt="Slider Image"
            className="w-full h-full rounded-lg shadow-lg object-cover"
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ReviewSlider;
