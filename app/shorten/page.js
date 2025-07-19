'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Shorten = () => {
    const [url, seturl] = useState("");
    const [shorturl, setshorturl] = useState("");
    const [generated, setGenerated] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [copied, setCopied] = useState(false);

    const generate = async () => {
        if (!url) {
            setError("Please enter a URL");
            return;
        }
        setLoading(true);
        setError("");

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            url,
            shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        try {
            const response = await fetch("/api/generate", requestOptions);
            const result = await response.json();
            if (result.success) {
                setGenerated(result.shorturl);
            } else {
                setError(result.message || "Something went wrong");
            }
        } catch (error) {
            setError("Failed to generate short URL");
        } finally {
            setLoading(false);
        }
    };

    const handleCopy = async () => {
        const fullUrl = `${window.location.origin}/${generated}`;
        await navigator.clipboard.writeText(fullUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className='min-h-screen bg-gradient-to-b from-purple-50 to-white py-12 px-4'>
            <div className='max-w-2xl mx-auto'>
                <div className='bg-white rounded-2xl shadow-xl p-8'>
                    <h1 className='text-3xl font-bold text-purple-800 mb-6 text-center'>Create Short URL</h1>
                    
                    <div className='space-y-6'>
                        <div>
                            <label htmlFor='longUrl' className='block text-sm font-medium text-gray-700 mb-2'>
                                Enter your long URL
                            </label>
                            <input
                                type='url'
                                id='longUrl'
                                className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all'
                                placeholder='https://example.com/very-long-url'
                                value={url}
                                onChange={(e) => seturl(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor='customUrl' className='block text-sm font-medium text-gray-700 mb-2'>
                                Custom short URL (optional)
                            </label>
                            <div className='flex items-center'>
                                <span className='text-gray-500 bg-gray-50 px-4 py-3 rounded-l-lg border border-r-0 border-gray-300'>
                                    shortify.com/
                                </span>
                                <input
                                    type='text'
                                    id='customUrl'
                                    className='flex-1 px-4 py-3 rounded-r-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all'
                                    placeholder='custom-name'
                                    value={shorturl}
                                    onChange={(e) => setshorturl(e.target.value)}
                                />
                            </div>
                        </div>

                        <button
                            onClick={generate}
                            disabled={loading}
                            className='w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                        >
                            {loading ? 'Generating...' : 'Generate Short URL'}
                        </button>

                        {error && (
                            <div className='bg-red-50 text-red-700 p-4 rounded-lg'>
                                {error}
                            </div>
                        )}

                        {generated && (
                            <div className='bg-green-50 p-6 rounded-lg'>
                                <h3 className='text-lg font-semibold text-green-700 mb-2'>Your shortened URL is ready!</h3>
                                <div className='flex items-center gap-2 bg-white p-3 rounded-lg border border-green-200'>
                                    <Link 
                                        href={`/${generated}`}
                                        target='_blank'
                                        className='flex-1 text-purple-600 hover:text-purple-800 transition-colors overflow-hidden overflow-ellipsis'
                                    >
                                        {`${window.location.origin}/${generated}`}
                                    </Link>
                                    <button
                                        onClick={handleCopy}
                                        className='bg-green-100 hover:bg-green-200 text-green-700 px-4 py-2 rounded-lg transition-colors flex items-center gap-2'
                                    >
                                        {copied ? (
                                            <>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Copied!
                                            </>
                                        ) : (
                                            <>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                                </svg>
                                                Copy
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className='mt-8 text-center text-gray-600'>
                    © 2025 Shriyans Mukherjee. All rights reserved.
                </div>
            </div>
        </div>
    )
}

export default Shorten
