import React from 'react'

function Hero() {
    return (
        <div className='flex flex-col-reverse items-center justify-center w-screen h-auto gap-3 px-20 md:flex-row xl:gap-20'>
            <div className='flex flex-col items-start xl:w-[550px]'>
                <h1 className='text-6xl xl:text-8xl font-bold text-primary animate-entrance-1'>
                    Play&Learn
                </h1>
                <h2 className='text-xl xl:text-2xl opacity-70 font-medium animate-entrance-2'>
                    App para la enseñanza del inglés
                </h2>
                <a className='bg-terciary text-white text-xl xl:text-4xl mt-5 cursor-default animate-entrance-3 button' href='/PlayAndLearn.apk' download={'PlayAndLearn.apk'}>
                    Descargar
                </a>
            </div>
            <div className='w-[400px] xl:w-auto'>
                <img src="./EyeLandHero.svg" alt="" className='w-[400px] relative -right-10 xl:block xl:w-auto' />
            </div>
        </div>
    )
}

export default Hero