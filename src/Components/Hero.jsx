import React from 'react'

const Hero = () => {
    return (
        <section className=" flex flex-col items-center text-center px-5 pt-16 pb-12">



            <div className="bg-blue-50 text-[#5044E5] px-5 py-2 rounded-full text-sm mb-6" >
                New: AI feature integrated *
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-grey-900 mb-5"> 
                 Your own <span className="text-blue-600"> blogging </span>
                 <br/>
                
                 platform.
                 </h1>
                 <p className=" poppins-font text-grey-500 text-sm md:text-base max-w-xl leading-7 mb-8">
                    this is your space to think out loud,to share what matters,and to write without filters .Whether it's one word or a thousand,your story starts right here.

                 </p>

                 
                 <div className="flex items-centre w-full max-w-lg  border-2 border-gray-400 rounded-lg p-1 bg-white">

                    <input 
                    type="text"
                    placeholder="search blogs"
                    className="flex-1 min-w-0 px-4 py-3 outline-none text-sm"
                    />
                    <button className='bg-blue-600 text-white px-7 py-3 rounded-md hover:bg-blue-700'>

                        search
                    </button>

                 </div>




        </section>
    )
}

export default Hero
