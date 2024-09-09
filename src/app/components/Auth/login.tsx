'use client'

import { useForm, SubmitHandler } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { setCookie } from "cookies-next";
import { toast } from "react-toastify";
import Image from "next/image";

export default function LoginComponent() {

    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = async (data: any) => {
        console.log(data)

        if (data == null) return null;

        const responseLogin = await fetch('https://mgscpz76-3000.brs.devtunnels.ms/login', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify({
                'email': data.email, 'password': data.password
            })
        })

        const res = await responseLogin.json()

        if (!responseLogin.ok) {
            toast.warning('Datos incorrectos',)
        }
        setCookie('auth_token', res.access_token, { maxAge: 3600 })
        toast.success('Inicio de sesion correctamente.')
    }

    return (
        <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-[60%_40%] lg:grid-cols-[70%_30%] bg-[#1f1f1f]">
            <div className="w-full h-full">
                <Image unoptimized src="https://cdn.joinnus.com/user/3068910/sDoZbNGm20Nvvzx.png" className="h-full w-full object-cover" alt="login" width={0} height={0} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[400px] md:relative md:max-w-none md:transform-none md:top-0 md:left-0 md:h-full p-4 rounded-lg flex flex-col gap-5 bg-black/60 md:bg-black/10 items-center justify-center">
                <input type="text" {...register('email')} className="w-full h-[40px] border-b-2 bg-transparent outline-none text-white placeholder:text-gray-400" placeholder="admin@gmail.com" />
                <input type="password" {...register('password')} className="w-full h-[40px] border-b-2 bg-transparent outline-none text-white placeholder:text-gray-400" placeholder="*********" />
                <Button variant="outline" className="w-full">Iniciar</Button>
            </form>
        </div>

    )
}
