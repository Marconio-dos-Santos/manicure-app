import React from 'react'

const Banner = () => {
  return (
    <main className='bg-gray-100'>
        <div className="mx-auto max-w-4xl py-6 sm:px-6 lg:px-8">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src="pure-julia.jpg"
          alt=""
        />
      
            {/* <div className="px-4 py-6 sm:px-0">
              <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
            </div> */}
            {/* /End replace */}
          </div>
    </main>
  )
}

export default Banner