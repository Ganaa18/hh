// pages/index.js

import React from 'react';
const NewsFeed = () => {
  return (
    <div>
      <header className="bg-blue-900 text-white py-5">
        <div className="container flex flex-col justify-center pl-[10vw]  mx-auto block h-[90vh]">
          <h1 className="text-3xl font-bold">Welcome E-Commerce site</h1>
          <p className="text-lg">A sample home page</p>
          <button className='bg-blue-500 py-6 px-1 w-[20vw] rounded-xl text-center hover:bg-blue-400'>Get started</button>
        </div>
      </header>

      <main className="container mx-auto mt-10">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold">About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            Sed nisi.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">Services</h2>
          <p>
            We offer a wide range of services to meet your needs.
            Contact us to learn more.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p>
            Feel free to get in touch with us at contact@example.com.
          </p>
        </section>
      </main>
    </div>
  );
};

export default NewsFeed;
