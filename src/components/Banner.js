import React from 'react'

const Banner = () => {
  return (
    <main className='flex justify-center relative text-center after:bg-rose-100 after:absolute after:inset-0 after:z-1 after:bottom-52'>
      <p className='z-20 absolute block text-6xl py-10 font-serif text-zinc-800 h-auto text-center md:text-7xl'>Cuide Bem de <br/> Suas Mãos</p>
      <div className="relative mx-auto max-w-4xl pt-40 pb-8 sm:px-6 lg:px-8">
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