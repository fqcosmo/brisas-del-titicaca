'use client'

import React, { useState } from 'react'

export default function AnimacionComponet() {

    const [style2, setStyle2] = useState(false)

    return (
        <div className="w-full min-h-screen h-full bg-red-900 grid grid-cols-[25%_auto_25%] justify-between items-center ">
            <div className="h-full flex w-full items-center justify-center">
                <img src="https://sayacaporal.com/wp-content/uploads/2021/05/vestimenta-saya-caporal-hombre.png" alt="" className="border-2 h-[80%] w-auto object-cover" />
            </div>
            <div className="h-full w-full flex items-center justify-center">

            </div>
            <div className="h-full w-full flex items-center justify-center border-2" onMouseEnter={() => setStyle2(true)} onMouseLeave={() => setStyle2(false)} >
                <img src="https://sayacaporal.com/wp-content/uploads/2021/05/vestimenta-saya-caporal-hombre.png" alt="" className={`border-2 h-[80%] w-auto object-cover ${style2 && 'animate-shake animate-infinite'}`} />
            </div>
        </div>
    )
}
