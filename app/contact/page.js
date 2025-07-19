'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className='min-h-screen bg-purple-50 py-12'>
      <div className='max-w-4xl mx-auto px-4'>
        <h1 className='text-4xl font-bold text-purple-800 mb-8 text-center'>Get in Touch</h1>
        
        <div className='bg-white rounded-lg shadow-lg p-8'>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='space-y-6'>
              <h2 className='text-2xl font-semibold text-purple-700 mb-4'>Contact Information</h2>
              <div className='space-y-4'>
                <div className='flex items-center space-x-3'>
                  <svg className='w-6 h-6 text-purple-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                  </svg>
                  <a href='mailto:shriyans696@gmail.com' className='text-purple-600 hover:text-purple-800'>shriyans696@gmail.com</a>
                </div>
              </div>
              
              <div className='space-y-4 mt-8'>
                <h3 className='text-xl font-semibold text-purple-700'>Connect With Me</h3>
                <div className='flex space-x-4'>
                  <a href='https://www.linkedin.com/in/shriyansmukherjee/' target='_blank' rel='noopener noreferrer' 
                    className='bg-purple-100 p-3 rounded-full hover:bg-purple-200 transition-colors'>
                    <svg className='w-6 h-6 text-purple-600' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'/>
                    </svg>
                  </a>
                  
                  <a href='https://github.com/shriyansX' target='_blank' rel='noopener noreferrer'
                    className='bg-purple-100 p-3 rounded-full hover:bg-purple-200 transition-colors'>
                    <svg className='w-6 h-6 text-purple-600' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/>
                    </svg>
                  </a>
                  
                  <a href='https://portfolio-six-mocha-83.vercel.app/' target='_blank' rel='noopener noreferrer'
                    className='bg-purple-100 p-3 rounded-full hover:bg-purple-200 transition-colors'>
                    <svg className='w-6 h-6 text-purple-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className='bg-purple-100 rounded-lg p-6'>
              <h3 className='text-xl font-semibold text-purple-700 mb-4'>Let&apos;s Connect!</h3>
              <p className='text-gray-700 mb-4'>
                Whether you have questions about ShorTify, want to collaborate on a project, or just want to say hello,
                I&apos;d love to hear from you. Feel free to reach out through any of the channels listed here.
              </p>
              <p className='text-gray-700'>
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>
          </div>
        </div>
        
        <div className='text-center text-gray-600 mt-8'>
          © 2025 Shriyans Mukherjee. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default Contact