import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='flex justify-between items-center h-16'>
                    <div className='flex items-center'>
                        <Link href='/' className='text-2xl font-bold text-purple-700 hover:text-purple-800 transition-colors'>
                            ShorTify
                        </Link>
                    </div>

                    <ul className='flex items-center space-x-8'>
                        <li>
                            <Link 
                                href='/' 
                                className='text-gray-600 hover:text-purple-700 transition-colors font-medium'
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href='/about' 
                                className='text-gray-600 hover:text-purple-700 transition-colors font-medium'
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href='/shorten' 
                                className='text-gray-600 hover:text-purple-700 transition-colors font-medium'
                            >
                                Shorten
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href='/contact' 
                                className='text-gray-600 hover:text-purple-700 transition-colors font-medium'
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
