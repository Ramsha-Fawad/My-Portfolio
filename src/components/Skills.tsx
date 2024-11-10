import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-2'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div>
                <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
                <p className='text-gray-500 pt-2'>
                    I am a dedicated IT student with a growing skill set in web development and programming. I have acquired a solid foundation in front-end technologies, including HTML, CSS, and JavaScript, along with more advanced tools like TypeScript. My skills extend to popular frameworks and libraries such as React and Next.js, which enable me to create dynamic, responsive web applications. Additionally, I have experience with server-side development using Node.js, showcasing my versatility and commitment to mastering  front-end technology in the IT field.</p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                        <h2>Typescript</h2>
                        <h2>React.js</h2>
                        <h2>Next.js</h2>
                    </div>
                    <div className='space-y-2'>
                        <h2>Tailwind</h2>
                        <h2>CSS</h2>
                        <h2>Node.js</h2>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
