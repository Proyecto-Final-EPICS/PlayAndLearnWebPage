import { useState } from 'react'
import Title from '../common/Title'
import AccesibilityButton from './AccesibilityButton'

function Accesibility() {

    const [classAccesibility, setClassAccesibility] = useState('bg-white text-black')
    const [classAccesibilityP, setClassAccesibilityP] = useState('leading-relaxed text-base md:text-2xl font-Poppins tracking-normal')

    return (
        <div className={'flex flex-col items-center justify-center pb-10 px-5 ' + classAccesibility}>
            <Title title="Para todos" textColor={
                classAccesibility.includes('text-black') ? 'text-black' : 'text-white'
            } />
            <div className='flex flex-col md:flex-row justify-center gap-20 xl:w-[1300px] mt-10 items-center'>
                <p className={'font-light md:w-96 relative -top-10 ' + classAccesibilityP} id='descripción'>
                    Es muy importante que todas las personas puedan disfrutar de nuestra aplicación, independientemente de sus habilidades o limitaciones físicas. Por eso, hemos implementado varias opciones de accesibilidad para que todos puedan usarla de manera cómoda y sin problemas.
                </p>
                <div className='relative flex'>
                    <img src="AccesibilityBanner.svg" alt="" className='w-[500px]' />
                    <div className='absolute w-20 h-20 -top-10 xl:-top-14 mx-auto left-0 right-0 translate-x-1/2 xl:w-28 xl:h-28 rounded-full bg-secondary  shadow-lg flex items-center justify-center hover:cursor-default group '>
                        <img src="Mouse.svg" alt="" className='group-hover:opacity-0 absolute w-14 h-14 xl:w-16 xl:h-16 transition-all' />
                        <p className='group-hover:opacity-100 absolute text-white text-center opacity-0  transition-all font-bold px-5 text-xs xl:text-base'>
                            Pruebalo tú mismo
                        </p>
                    </div>
                    <div>

                        {/* Leer página */}
                        <AccesibilityButton
                            className={'top-[6%] left-[5%]'}
                            onClick={
                                () => {
                                    // activate the function to read the page integrated in the browser
                                    window.speechSynthesis.speak(new SpeechSynthesisUtterance(document.getElementById('descripción').textContent))
                                }
                            }
                        />

                        {/* Contraste */}
                        <AccesibilityButton
                            className={'top-[6%] left-[33%]'}
                            onClick={
                                () => {
                                    if (classAccesibility.includes('bg-white')) {
                                        setClassAccesibility('bg-black text-white')
                                    } else {
                                        setClassAccesibility('bg-white text-black')
                                    }
                                }
                            }
                        />

                        {/* Aumentar tamaño */}
                        <AccesibilityButton
                            className={'top-[29%] left-[5%]'}
                            onClick={
                                () => {
                                    if (classAccesibilityP.includes('text-base md:text-2xl')) {
                                        setClassAccesibilityP(classAccesibilityP.replace('text-base md:text-2xl', 'text-lg md:text-3xl'))
                                    } else if (classAccesibilityP.includes('text-lg md:text-3xl')) {
                                        setClassAccesibilityP(classAccesibilityP.replace('text-lg md:text-3xl', 'text-xl md:text-4xl'))
                                    } else if (classAccesibilityP.includes('text-xl md:text-4xl')) {
                                        setClassAccesibilityP(classAccesibilityP.replace('text-xl md:text-4xl', 'text-base md:text-2xl'))
                                    }
                                }
                            }
                        />

                        {/* Cambiar fuente */}
                        <AccesibilityButton
                            className="top-[29%] left-[33%]"
                            onClick={
                                () => {
                                    if (classAccesibilityP.includes('font-Poppins')) {
                                        setClassAccesibilityP(classAccesibilityP.replace('font-Poppins', 'font-sans'))
                                    } else if (classAccesibilityP.includes('font-sans')) {
                                        setClassAccesibilityP(classAccesibilityP.replace('font-sans', 'font-serif'))
                                    } else if (classAccesibilityP.includes('font-serif')) {
                                        setClassAccesibilityP(classAccesibilityP.replace('font-serif', 'font-mono'))
                                    } else if (classAccesibilityP.includes('font-mono')) {
                                        setClassAccesibilityP(classAccesibilityP.replace('font-mono', 'font-Poppins'))
                                    }
                                }
                            }
                        />

                        {/* Cambiar espaciado */}
                        <AccesibilityButton
                            className="top-[52%] left-[5%]"
                            onClick={
                                () => {
                                    if (classAccesibilityP.includes('tracking-normal')) {
                                        setClassAccesibilityP(classAccesibilityP.replace('tracking-normal', 'tracking-widest'))
                                    } else if (classAccesibilityP.includes('tracking-widest')) {
                                        setClassAccesibilityP(classAccesibilityP.replace('tracking-widest', 'tracking-normal'))
                                    }
                                }
                            }
                        />

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Accesibility