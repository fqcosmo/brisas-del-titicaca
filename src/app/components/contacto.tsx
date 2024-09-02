'use client'

import { FaMapMarkedAlt } from "react-icons/fa";
import { IoPhonePortrait } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

function Contacto() {
    return (
        <div className="w-full bg-black text-white flex">
            <section className="w-full p-4 flex flex-col gap-5 items-center justify-center">
                <div className="w-full flex flex-col gap-1 items-center justify-center">
                    <h1 className="text-2xl">Contactanos</h1>
                    <span className="text-muted-foreground text-sm"></span>
                </div>
                <div className="flex flex-row gap-5 flex-wrap w-full items-center justify-center">
                    <div className="flex flex-col gap-2 items-center">
                        <FaMapMarkedAlt className="text-lg md:text-5xl" />
                        <p>Dirección</p>
                        <span className="text-muted-foreground text-sm">Lorem Ipsum is simply   </span>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <IoPhonePortrait className="text-lg md:text-5xl" />
                        <p>Phone</p>
                        <span className="text-muted-foreground text-sm">Lorem Ipsum is simply   </span>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <MdEmail className="text-lg md:text-5xl" />
                        <p>Email</p>
                        <span className="text-muted-foreground text-sm">Lorem Ipsum is simply   </span>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contacto;