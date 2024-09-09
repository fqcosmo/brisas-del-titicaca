'use client'

import { useState } from 'react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'


export default function AnimacionComponet() {

    const [style2, setStyle2] = useState(0)

    const images = [
        "https://sayacaporal.com/wp-content/uploads/2021/05/vestimenta-saya-mujer.png",
        "https://sayacaporal.com/wp-content/uploads/2021/05/vestimenta-saya-caporal-hombre.png",
        "https://www.brisasdeltiticaca.com/wp-content/uploads/2023/04/Bailarina-09.webp"
    ]

    const images2 = [
        "https://www.brisasdeltiticaca.com/wp-content/uploads/2023/04/Bailarina-09.webp",
        "https://www.brisasdeltiticaca.com/wp-content/uploads/2023/04/Bailarin-08.webp",
        "https://www.brisasdeltiticaca.com/wp-content/uploads/2023/04/Bailarina-08.webp"
    ]

    return (
        <div className="w-full min-h-screen h-full bg-gradient-to-br from-[#021E73] to-[#007B59] grid grid-cols-1 md:grid-cols-[23%_50%_23%] gap-4 justify-between items-center p-4">
            <div className="h-full w-full flex items-center justify-center" onMouseEnter={() => setStyle2(1)} onMouseLeave={() => setStyle2(0)}>
                <Carousel className="h-full w-full flex items-center justify-center" opts={{ loop: true }} autoplay={true} autoplayInterval={3000}>
                    <CarouselContent className="h-full">
                        {images.map((link, index) => (
                            <CarouselItem key={index} className="h-full w-full flex items-center justify-center">
                                <img src={link} alt="" className={`h-[300px] md:h-[600px] w-auto object-cover ${style2 === 1 && 'animate-shake animate-infinite animate-duration-1000'}`} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
            <div className="h-full w-full flex flex-col items-center justify-center gap-8 md:gap-16">
                <img src="https://www.brisasdeltiticaca.com/wp-content/uploads/2023/04/Logo-Negativo-Blanco.svg" className="h-[60px] md:h-[100px] w-auto object-cover" />
                <h1 className="text-white text-2xl md:text-4xl text-center">¡Nos estamos renovando!</h1>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-4">
                    <div className="flex flex-col gap-3 items-center justify-center" onMouseEnter={() => setStyle2(1)} onMouseLeave={() => setStyle2(0)}>
                        <img src="https://www.brisasdeltiticaca.com/wp-content/uploads/2023/04/AASS-1.svg" className="w-[80%] md:w-[60%] h-auto object-cover" />
                        <div className="text-xl md:text-2xl px-8 md:px-14 py-3 md:py-4 rounded-full text-[#FFEC00] border-2 border-[#FFEC00] cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px_#f7e70f,inset_0_0_2px_#FFEC00,0_0_5px_#FFEC00,0_0_15px_#FFEC00,0_0_30px_#FFEC00] hover:bg-[#FFEC00] hover:text-white">Reserva</div>
                    </div>
                    <div className="flex flex-col gap-3 items-center justify-center" onMouseEnter={() => setStyle2(2)} onMouseLeave={() => setStyle2(0)}>
                        <img src="https://www.brisasdeltiticaca.com/wp-content/uploads/2023/04/NNFF.svg" className="w-[80%] md:w-[60%] h-auto object-cover" />
                        <div className="text-xl md:text-2xl px-8 md:px-14 py-3 md:py-4 rounded-full text-[#c36] border-2 border-[#c36] cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px_#e64077,inset_0_0_2px_#c36,0_0_5px_#c36,0_0_15px_#c36,0_0_30px_#c36] hover:bg-[#c36] hover:text-white">Reserva</div>
                    </div>
                </div>
                <div className="text-lg md:text-xl text-white px-6 md:px-10 py-2 border-2 rounded-full cursor-pointer transition-all duration-300 hover:shadow-[0_0_10px_#fff,inset_0_0_2px_#fff,0_0_5px_#fff,0_0_15px_#fff,0_0_30px_#fff] hover:text-white">Agenda semanal</div>
            </div>
            <div className="h-full w-full flex items-center justify-center" onMouseEnter={() => setStyle2(2)} onMouseLeave={() => setStyle2(0)}>
                <Carousel className="h-full w-full flex items-center justify-center" opts={{ loop: true }} autoplay={true} autoplayInterval={3000}>
                    <CarouselContent>
                        {images2.map((link, index) => (
                            <CarouselItem key={index} className="h-full w-full flex items-center justify-center">
                                <img src={link} alt="" className={`h-[300px] md:h-[600px] w-auto object-cover ${style2 === 2 && 'animate-shake animate-infinite animate-duration-1000'}`} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}
