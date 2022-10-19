import React from 'react'

const Banner = () => {
  return (
    <main className='relative after:bg-rose-100 after:absolute after:inset-0 after:z-1 after:bottom-52'>
      <div className="relative mx-auto max-w-4xl pt-52 pb-8 sm:px-6 lg:px-8">
        <img
          className="relative w-full object-cover sm:h-72 md:h-96 z-10"
          src="pure-julia.jpg"
          alt=""
        />
      </div>
    </main>
  )
}

export default Banner