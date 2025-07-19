'use client'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen bg-purple-50 py-12'>
      <div className='max-w-4xl mx-auto px-4'>
        <h1 className='text-4xl font-bold text-purple-800 mb-8 text-center'>About ShorTify</h1>
        
        <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
          <h2 className='text-2xl font-semibold text-purple-700 mb-4'>What is ShorTify?</h2>
          <p className='text-gray-700 mb-6'>
            ShorTify is a modern, efficient URL shortening service designed to make your long URLs more manageable and shareable.
            Our platform transforms lengthy web addresses into concise, memorable links that are perfect for social media,
            email campaigns, or any situation where you need a clean, professional link.
          </p>

          <h2 className='text-2xl font-semibold text-purple-700 mb-4'>Why Choose ShorTify?</h2>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='bg-purple-50 p-6 rounded-lg'>
              <h3 className='text-xl font-semibold text-purple-600 mb-3'>Lightning Fast</h3>
              <p className='text-gray-600'>Generate shortened URLs instantly with our optimized infrastructure.</p>
            </div>
            <div className='bg-purple-50 p-6 rounded-lg'>
              <h3 className='text-xl font-semibold text-purple-600 mb-3'>User-Friendly</h3>
              <p className='text-gray-600'>Simple, intuitive interface that anyone can use without any learning curve.</p>
            </div>
            <div className='bg-purple-50 p-6 rounded-lg'>
              <h3 className='text-xl font-semibold text-purple-600 mb-3'>Reliable</h3>
              <p className='text-gray-600'>Built on robust infrastructure ensuring your links are always accessible.</p>
            </div>
            <div className='bg-purple-50 p-6 rounded-lg'>
              <h3 className='text-xl font-semibold text-purple-600 mb-3'>Secure</h3>
              <p className='text-gray-600'>Your data security is our priority, with encrypted connections and regular monitoring.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About