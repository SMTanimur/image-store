import React from 'react';

function ImagesCard({ post }) {
  return (
    <div className='bg-white shadow-xl max-w-sm overflow-hidden flex justify-center items-center '>
      <div className='flex flex-col justify-center items-center w-full'>
        <div className='flex justify-center items-center w-32'>
          <img src={post.image} alt='' className='w-full  ' />
        </div>
        <div className='flex flex-col items-center justify-center mt-6 self-end gap-4 px-7 py-2'>
          <h1 className='font-mono font-bold text-2xl text-gray-800'>
            {post.title}
          </h1>
          <p className='text-sm text-gray-500 max-h-52 bg-local overflow-hidden'>
            {post.description}
          </p>
          <strong className='font-bold text-3xl'>${post.price}</strong>
        </div>
      <button className='w-full mt-4 bottom-0 bg-purple-600 text-gray-300 py-4 px-3 self-end border mb-0 border-purple-600 hover:bg-transparent hover:text-gray-700 transition rounded-md'>
          Buy Now
        </button>
      </div>
     
    </div>
  );
}

export default ImagesCard;
