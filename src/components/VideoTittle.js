import React from 'react'

const VideoTittle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className=''>
      <button className='bg-gray-600 text-white p-2 px-8 text-xl hover:bg-opacity-50 rounded-lg' > ▶️Play</button>
      <button className='bg-gray-600 text-white p-2 px-6 text-xl mx-3 hover:bg-opacity-50 rounded-lg'>More Info</button>
      </div>
      
    </div>
  )
}

export default VideoTittle
