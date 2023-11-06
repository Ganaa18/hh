// pages/index.js
'use client'
import React from 'react';
import {useState, useEffect} from 'react';

import Link from 'next/link';

const NewsFeed = () => {
  const [text, setText] = useState('');
  const fullText = 'What are you looking for?';

  useEffect(() => {
    let currentIndex = 0;
    const textInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(textInterval);
      }
    }, 100); // Adjust the interval for your desired typing speed
    return () => clearInterval(textInterval);
  }, []);
  return (
    <div>
       <div className="h-screen flex flex-col items-center justify-center bg-gray-900">
      <div className="text-white text-5xl font-bold text-center">
        <p>Welcome to our page</p>
        <div className="text-xl mt-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 animate-pulse">
            Writing Animation
          </span>
        </div>
      </div>
      <div className="text-white text-xl mt-6 text-center">
        <p>{text}</p>
      </div>
    </div>
      <header className="bg-blue-900 text-white py-5">
        <div className="container flex flex-col justify-center pl-[10vw]  mx-auto block h-[90vh]">
          <h1 className="text-3xl font-bold">Welcome E-Commerce site</h1>
          <p className="text-lg">A sample home page</p>
          <Link href='/products'>
          <button className='bg-blue-500 py-6 px-1 w-[20vw] rounded-xl text-center hover:bg-blue-400'>Get started</button>
          </Link>
        </div>
      </header>

      <main className="container h-inherit  flex flex-col justify-center bg-gray-600 text-white py-5">
        <section>
          <div className='h-[100vh] w-[100vw] flex flex-col justify-center' >
          <h2 className="text-2xl font-semibold">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            Sed nisi.
          </p>
          </div>
        </section>
        <section >
          <div className='h-[100vh] flex flex-col justify-center ' >
          <h2 className="text-2xl font-semibold">Trending</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae porro natus aliquid modi maiores aliquam, eligendi illum fugiat impedit veritatis, pariatur quae officia atque possimus nulla dolorum deleniti, omnis harum!
          </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NewsFeed;
