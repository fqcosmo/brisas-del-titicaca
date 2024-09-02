'use client'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { MdEvent } from "react-icons/md";

function Inicio() {

    const carousel = [
        {
            color: "bg-red-800",
            nomre: "Banner 1",
            url: "https://cdn.joinnus.com/user/3068910/uiV7JPMHHg0u23D.png",
        },
        {
            color: "bg-blue-800",
            nomre: "Banner 2",
            url: "https://cdn.joinnus.com/user/3068910/sDoZbNGm20Nvvzx.png",
        },
        {
            color: "bg-green-800",
            nomre: "Banner 3",
            url: "https://cdn.joinnus.com/user/3068910/tQC8Fj53Xjm4jTG.png",
        },
        {
            color: "bg-yellow-800",
            nomre: "Banner 4",
            url: "https://cdn.joinnus.com/files/2024/08/nmtnTwbNUmfBbUn.png",
        },
        {
            color: "bg-purple-800",
            nomre: "Banner 5",
            url: "https://cdn.joinnus.com/files/2024/06/7CV8xqSSJ6vqVw1.png",
        },
    ];

    return (
        <div className="w-full relative">

            <div className="w-full relative grid grid-cols-2 gap-3 h-[70px] border-b border-black bg-black px-10">
                <div className="w-full flex flex-row gap-3 items-center justify-center">
                    <Image src={'https://www.brisasdeltiticaca.com/wp-content/uploads/2023/04/Logo-Negativo-Blanco.svg'} height={0} width={0} alt="logo" className="h-full w-[30%]" />
                    <div className="bg-white/20 w-full text-white h-[40px] rounded-md flex flex-row gap-1">
                        <div className="w-[40px] flex items-center justify-center">
                            <FaSearch />
                        </div>
                        <input type="text" className="w-full bg-transparent outline-none" />
                    </div>
                </div>
                <div className="flex flex-row items-center justify-end text-white">
                    <div className="flex flex-col items-center gap-px">
                        <MdEvent size={25} />
                        <span>Eventos</span>
                    </div>
                </div>
            </div>

            <Carousel className="max-w-full" opts={{ loop: true }}>
                <CarouselContent>
                    {carousel.map((banner, index) => (
                        <CarouselItem key={index} className={`h-[300px]`}>
                            <div className={``}>
                                <Image unoptimized src={banner.url} className="w-full h-full object-cover object-center" height={0} width={0} alt={banner.nomre} />
                                {/* <h1 className="absolute bottom-0 right-0 border-2">{banner.nomre}</h1> */}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

            </Carousel>
        </div>
    );
}

export default Inicio;