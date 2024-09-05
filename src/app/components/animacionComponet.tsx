'use client'

import React, { useState } from 'react'

export default function AnimacionComponet() {

    const [style2, setStyle2] = useState(0)

    return (
        <div className="w-full min-h-screen h-full bg-gradient-to-br from-[#021E73] to-[#007B59] grid grid-cols-[23%_50%_23%] justify-between items-center ">
            <div className="h-full w-full flex items-center justify-center " onMouseEnter={() => setStyle2(1)} onMouseLeave={() => setStyle2(0)} >
                <img src="https://sayacaporal.com/wp-content/uploads/2021/05/vestimenta-saya-caporal-hombre.png" alt="" className={` h-[80%] w-auto object-cover ${style2 == 1 && 'animate-shake animate-infinite animate-duration-1000'}`} />
            </div>
            <div className="h-full w-full flex flex-col items-center justify-center gap-16">
                <img src='https://www.brisasdeltiticaca.com/wp-content/uploads/2023/04/Logo-Negativo-Blanco.svg' className='h-[100px] w-auto object-cover' />
                <h1 className='text-white text-4xl'>¡Nos estamos renovando!</h1>
                <div className='w-full grid grid-cols-2  justify-between items-center'>
                    <div className='flex flex-col gap-3 items-center justify-center' onMouseEnter={() => setStyle2(1)} onMouseLeave={() => setStyle2(0)}>
                        <img src='https://www.brisasdeltiticaca.com/wp-content/uploads/2023/04/AASS-1.svg' className='w-[60%] h-auto object-cover' />
                        <div className='text-2xl px-14 py-4 rounded-full text-[#FFEC00] border-2 border-[#FFEC00] cursor-pointer'>Reserva</div>
                    </div>

                    <div className='flex flex-col gap-3 items-center justify-center' onMouseEnter={() => setStyle2(2)} onMouseLeave={() => setStyle2(0)}>
                        <img src='https://www.brisasdeltiticaca.com/wp-content/uploads/2023/04/NNFF.svg' className='w-[60%] h-auto object-cover' />
                        <div className='text-2xl px-14 py-4 rounded-full text-[#c36] border-2 border-[#c36] cursor-pointer'>Reserva</div>
                    </div>
                </div>
                <div className='text-xl text-white px-10 py-2 border-2 rounded-full cursor-pointer'>Agenda semanal</div>

            </div>
            <div className="h-full w-full flex items-center justify-center " onMouseEnter={() => setStyle2(2)} onMouseLeave={() => setStyle2(0)} >
                <img src="https://sayacaporal.com/wp-content/uploads/2021/05/vestimenta-saya-mujer.png" alt="" className={` h-[80%] w-auto object-cover ${style2 == 2 && 'animate-shake animate-infinite  animate-duration-1000'}`} />
            </div>
        </div>
    )
}
