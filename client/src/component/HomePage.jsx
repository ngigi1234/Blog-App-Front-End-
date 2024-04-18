import React from "react";
import 'tailwindcss/tailwind.css';

const HomePage = () => {
return (
<div className='flex flex-col lg:flex-row items-center justify-between mt-4 lg:mt-8'>
<input 
type="text" 
placeholder='Search blog...' 
className='mb-4 lg:mb-0 lg:ml-8 px-4 py-2 rounded-lg border'
/>
<div className='flex flex-wrap space-x-4 lg:space-x-8 mr-20'>
<a href="" className='text-black-500 hover:text-blue-700'>Home</a>
<a href="" className='text-black-500 hover:text-blue-700'>About</a>
<a href="" className='text-black-500 hover:text-blue-700'>Blogs</a>
<a href="" className='text-black-500 hover:text-blue-700'>Developers</a>
</div>
</div>
);
}

export default HomePage;




