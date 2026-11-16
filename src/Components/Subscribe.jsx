import React from 'react'

const Subscribe =()=>{
  return (
    <section className="flex flex-col items-center text-center px-5 py-16">

      <h2 className="text-3xl md:text-4xl font-bold text-[#373737] mb-4">
        Never Miss a Blog!
      </h2>

      <p className="text-gray-500 text-sm md:text-base mb-8 max-w-lg">
        Subscribe to get the latest blog, new tech, and exclusive news.
      </p>

      <div className="flex items-center w-full max-w-lg  border  border-gray-300 rounded-lg p-1 bg-white">

        <input
          type="email"
          placeholder="Enter your email id"
          className="flex-1 min-w-0 px-4 py-3 outline-none text-sm"
        />

        <button className= "  bg-[#6257E8] text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          Subscribe
        </button>

      </div>

    </section>
  )
}

export default Subscribe