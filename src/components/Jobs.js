import React from 'react'

const Jobs = () => {
  return (
    <section id="jobs" className='container flex sm:flex-col mx-auto'>
        <div className="md:flex mx-auto w-3/4 justify-around gap-7">
            <div className=" flex flex-col py-10 items-center space-x-4 text-center">
                <img className='w-1/3 pb-4' src="../h2-icon.png" alt="" />
                <h3>Job 1</h3>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, commodi aut pariatur nobis velit distinctio repellendus corrupti 
                </p>
            </div>
            <div className="flex flex-col py-10 items-center space-x-4 text-center">
                <img className='w-1/3 pb-4' src="../h2-icon-1.png" alt="" />
                <h3>Job 1</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, commodi aut pariatur nobis velit distinctio repellendus corrupti 
                </p>
            </div>
            <div className="flex flex-col py-10 items-center space-x-4 text-center">
                <img className='w-1/3 pb-4' src="../h2-icon-2.png" alt="" />
                <h3>Job 1</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, commodi aut pariatur nobis velit distinctio repellendus corrupti 
                </p>
            </div>
        </div>
    </section>
  )
}

export default Jobs