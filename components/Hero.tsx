import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='w-full min-h-screen px-12 py-16 flex flex-col text-center justify-center items-center'>
        <h3 className='text-xl font-semibold font-cabin text-secondary'>Hi!, I&apos;m <span className='text-gray-300'>Zakaria BOULAHJAR</span></h3>
        <div className='flex flex-col '>
          <h1 className='text-6xl sm:text-9xl capitalize font-semibold font-sora'>Capturing </h1>
          <div className='flex justify-center gap-2'>
            <h1 className='text-6xl sm:text-9xl capitalize font-semibold font-sora'>life&apos;s</h1>
            <Image src="/hero.JPG" alt="hero" width={210} height={55} className='rounded-xl hidden sm:block'/>
            <h1 className='text-6xl sm:text-9xl capitalize font-semibold font-sora'>essence</h1>
          </div>
                <Image src="/hero.JPG" alt="hero" width={350} height={55} className='my-4 rounded-xl block mx-auto sm:hidden'/>

          <h1 className='text-6xl sm:text-9xl capitalize font-semibold font-sora'>through the lens</h1>
        </div>

    </section>
  )
}

export default Hero