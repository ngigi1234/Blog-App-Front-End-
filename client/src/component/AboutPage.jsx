import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 lg:px-8">
      <h5 className="text-center font-bold text-dark mt-8 lg:mt-12">About us</h5>
      <p className="text-dark font-semibold text-center mt-4 lg:mt-6">Blog is the easiest way to share your writing on the web.</p>
      <p className=" text-dark mt-4 lg:mt-6">Create a space for your thoughts. Reach people with your ideas, and form new connections. Keep loved ones in the loop, free from social media. Bloogo is a simple, modern, and ad-free web publishing platform.</p>
      
      <div className="flex justify-center items-center mt-8 lg:mt-12">
        <img className="max-w-full h-auto" src="https://cdn.pixabay.com/photo/2015/11/06/13/25/blog-1027861_640.jpg" alt="Blog" />
      </div>
      
      <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-4 mt-8 lg:mt-12">
        <div className="w-full lg:w-1/3">
          <h1 className="text-center font-bold text-dark">No distractions</h1>
          <p className="text-dark mt-2">The editor only gives you 
          what you need to write, and automatically saves while you type.</p>
        </div>
        <div className="w-full lg:w-1/3">
          <h1 className="text-center font-bold text-dark">Start a minimal blog</h1>
          <p className="text-dark mt-2">No comments, spam, likes, 
          or distractions 
          — just your words in your own digital space.</p>
        </div>
        <div className="w-full lg:w-1/3">
          <h1 className="text-center font-bold text-dark">A Permanent Writing Space</h1>
          <p className="text-dark mt-2">Give your writing the digital home it deserves, 
          on your own domain, on a service that will
            still be with you tomorrow.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
