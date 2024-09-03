'use client'

import Image from "next/image"

const Talleres = () => {

  const talleres = [
    {
      image: 'https://cdn.joinnus.com/user/3375384/act66b381d30da88.jpg',
      titulo: 'Taller ',
      fecha: 'Lunes 13 Oct. - 8:10 pm',
      precio: '20.00'
    },
    {
      image: 'https://cdn.joinnus.com/user/4747/act660ddbf82aab5.jpg',
      titulo: 'Taller ',
      fecha: 'Lunes 13 Oct. - 8:10 pm',
      precio: '20.00'
    },
    {
      image: 'https://cdn.joinnus.com/user/4104328/cMHZKGUtvHXNFc1.png',
      titulo: 'Taller ',
      fecha: 'Lunes 13 Oct. - 8:10 pm',
      precio: '20.00'
    },
    {
      image: 'https://cdn.joinnus.com/user/17300/NBCmjtTlYjJ4F4y.png',
      titulo: 'Taller ',
      fecha: 'Lunes 13 Oct. - 8:10 pm',
      precio: '20.00'
    },
    {
      image: 'https://cdn.joinnus.com/user/3990907/DME0RBaMjTtbQPa.jpg',
      titulo: 'Taller ',
      fecha: 'Lunes 13 Oct. - 8:10 pm',
      precio: '20.00'
    },
    {
      image: 'https://cdn.joinnus.com/user/4110270/act6686de7ab0ac9.jpg',
      titulo: 'Taller ',
      fecha: 'Lunes 13 Oct. - 8:10 pm',
      precio: '20.00'
    },
  ]

  return (
    <section className="eventos w-full max-w-[98%] mx-auto flex flex-col gap-2 p-4">
      <h2 className="font-serif text-2xl text-slate-700">Talleres</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {talleres.map((taller, index) => (
          <div key={index} className="rounded-md grid grid-rows-[200px_auto] sm:grid-rows-[150px_auto] gap-5 overflow-hidden border pb-5 shadow-lg hover:shadow-2xl">
            <Image src={taller.image} height={150} width={150} alt={taller.titulo} className="w-full h-full object-cover" />
            <div className="h-[25px] w-full px-3">
              <h1 className="text-sm font-bold">{taller.titulo}{index+1}</h1>
            </div>
            <p className="text-sm px-3 py-1 bg-black/10">{taller.fecha}</p>

            <div className="flex flex-row justify-between items-center px-3">
              <p className="text-sm">Desde <span className="font-bold">s/ {taller.precio}</span></p>
              <div className="text-sm cursor-pointer rounded-lg bg-black px-2 py-1 text-white">Comprar</div>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Talleres
