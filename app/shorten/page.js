"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Shorten = () => {
    const [url, seturl] = useState("");
    const [shorturl, setshorturl] = useState("");
    const [generated, setGenerated] = useState("");

    const generate = async () => {
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
            console.log(result);

            if (result.success && result.shorturl) {
                // ✅ Only if backend gives us the short URL
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${result.shorturl}`);
                seturl("");
                setshorturl("");
            } else {
                alert(result.message || "Something went wrong");
            }
        } catch (error) {
            console.error(error);
            alert("Server error. Please try again.");
        }
    };

    return (
        <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
            <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
            <div className='flex flex-col gap-2'>
                <input
                    type="text"
                    value={url}
                    className='px-4 py-2 focus:outline-purple-600 rounded-md'
                    placeholder='Enter your URL'
                    onChange={e => seturl(e.target.value)}
                />
                <input
                    type="text"
                    value={shorturl}
                    className='px-4 py-2 focus:outline-purple-600 rounded-md'
                    placeholder='Enter your preferred short URL text'
                    onChange={e => setshorturl(e.target.value)}
                />
                <button
                    onClick={generate}
                    className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 my-3 font-bold text-white'
                >
                    Generate
                </button>
            </div>

            {generated && (
                <div>
                    <span className='font-bold text-lg'>Your Link: </span>
                    <code>
                        <Link target="_blank" href={generated}>{generated}</Link>
                    </code>
                </div>
            )}
        </div>
    );
};

export default Shorten;
