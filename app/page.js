import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "/fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 min-h-[70vh] px-4 max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 items-center justify-center py-12">
          <h1 className={`text-4xl md:text-5xl font-bold text-purple-800 text-center ${poppins.className}`}>
            Transform Long URLs into Short Links
          </h1>
          <p className="text-center text-lg text-gray-600 max-w-md">
            Make your links more manageable and shareable with ShorTify - 
            the most reliable URL shortener for your needs.
          </p>
          <div className='flex gap-4 justify-center'>
            <Link href='/shorten'>
              <button className='bg-purple-600 hover:bg-purple-700 transition-colors rounded-lg shadow-lg px-6 py-3 font-bold text-white'>
                Get Started
              </button>
            </Link>
            <Link href='/about'>
              <button className='bg-white hover:bg-purple-50 transition-colors border-2 border-purple-600 rounded-lg shadow-lg px-6 py-3 font-bold text-purple-600'>
                Learn More
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center relative p-8">
          <Image 
            className="object-contain" 
            alt="URL Shortener illustration" 
            src={"/vector.jpg"} 
            width={500}
            height={500}
            priority
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold text-center text-purple-800 mb-12 ${poppins.className}`}>
            Why Choose ShorTify?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-purple-200 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-purple-700 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Generate shortened URLs instantly with our optimized infrastructure.</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-purple-200 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-purple-700 mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">Your links are safe with us, available 24/7 with enterprise-grade security.</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-purple-200 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-purple-700 mb-2">User Friendly</h3>
              <p className="text-gray-600">Simple and intuitive interface that anyone can use without any learning curve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-50 py-6 text-center">
        <p className="text-gray-600">© 2025 Shriyans Mukherjee. All rights reserved.</p>
      </footer>
    </main>
  );
}
