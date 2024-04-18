import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const HomePage = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between mt-4 lg:mt-8'>
      <input 
        type="text" 
        placeholder='Search blog...' 
        className='mb-4 lg:mb-0 lg:ml-8 px-4 py-2 rounded-lg border'
      />
      <div className='flex flex-wrap space-x-4 lg:space-x-8 mr-20'>
        {/* Use Link components with appropriate 'to' prop */}
        <Link to="/" className='text-black-500 hover:text-blue-700'>Home</Link>
        <Link to="/about" className='text-black-500 hover:text-blue-700'>About</Link>
        <Link to="/blogs" className='text-black-500 hover:text-blue-700'>Blogs</Link>
        <Link to="/developers" className='text-black-500 hover:text-blue-700'>Developers</Link>
      </div>
    </div>
  );
}

export default HomePage;





