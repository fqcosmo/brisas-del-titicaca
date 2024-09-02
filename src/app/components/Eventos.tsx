import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import Image from "next/image";

interface Event {
  id: number,
  nombre: string,
  fechaPublicacion: string,
  image: string,
  description: string,
}

const eventos: Event[] = [
  { id: 1, nombre: 'Pandora & Flans Inesperado Tour', fechaPublicacion: 'Sabado 02 de Noviembre - 08:30pm', image: 'https://cdn.getcrowder.com/images/009acf1d-3c09-4e8b-afee-d5e1e8a68df6-banner-desktop-1.png?w=640&format=webp',description : 'Considerada una de las agrupaciones musicales de habla hispana más populares de los últimos tiempos, “Pandora” se prepara para regresar a Lima con sus mejores éxitos musicales, en un espectacular concierto denominado “Inesperado tour”, que se realizará el 02 de noviembre”' },
  { id: 2, nombre: 'Pandora & Flans Inesperado Tour', fechaPublicacion: 'Sabado 02 de Noviembre - 08:30pm', image: 'https://cdn.getcrowder.com/images/009acf1d-3c09-4e8b-afee-d5e1e8a68df6-banner-desktop-1.png?w=640&format=webp',description : 'Considerada una de las agrupaciones musicales de habla hispana más populares de los últimos tiempos, “Pandora” se prepara para regresar a Lima con sus mejores éxitos musicales, en un espectacular concierto denominado “Inesperado tour”, que se realizará el 02 de noviembre”' },
  { id: 3, nombre: 'Pandora & Flans Inesperado Tour', fechaPublicacion: 'Sabado 02 de Noviembre - 08:30pm', image: 'https://cdn.getcrowder.com/images/009acf1d-3c09-4e8b-afee-d5e1e8a68df6-banner-desktop-1.png?w=640&format=webp',description : 'Considerada una de las agrupaciones musicales de habla hispana más populares de los últimos tiempos, “Pandora” se prepara para regresar a Lima con sus mejores éxitos musicales, en un espectacular concierto denominado “Inesperado tour”, que se realizará el 02 de noviembre”' },
  { id: 4, nombre: 'Pandora & Flans Inesperado Tour', fechaPublicacion: 'Sabado 02 de Noviembre - 08:30pm', image: 'https://cdn.getcrowder.com/images/009acf1d-3c09-4e8b-afee-d5e1e8a68df6-banner-desktop-1.png?w=640&format=webp' ,description : 'Considerada una de las agrupaciones musicales de habla hispana más populares de los últimos tiempos, “Pandora” se prepara para regresar a Lima con sus mejores éxitos musicales, en un espectacular concierto denominado “Inesperado tour”, que se realizará el 02 de noviembre”'},
  { id: 5, nombre: 'Pandora & Flans Inesperado Tour', fechaPublicacion: 'Sabado 02 de Noviembre - 08:30pm', image: 'https://cdn.getcrowder.com/images/009acf1d-3c09-4e8b-afee-d5e1e8a68df6-banner-desktop-1.png?w=640&format=webp' ,description : 'Considerada una de las agrupaciones musicales de habla hispana más populares de los últimos tiempos, “Pandora” se prepara para regresar a Lima con sus mejores éxitos musicales, en un espectacular concierto denominado “Inesperado tour”, que se realizará el 02 de noviembre”'},
  { id: 6, nombre: 'Pandora & Flans Inesperado Tour', fechaPublicacion: 'Sabado 02 de Noviembre - 08:30pm', image: 'https://cdn.getcrowder.com/images/009acf1d-3c09-4e8b-afee-d5e1e8a68df6-banner-desktop-1.png?w=640&format=webp' ,description : 'Considerada una de las agrupaciones musicales de habla hispana más populares de los últimos tiempos, “Pandora” se prepara para regresar a Lima con sus mejores éxitos musicales, en un espectacular concierto denominado “Inesperado tour”, que se realizará el 02 de noviembre”'},

]

function Eventos() {
  return (
    <>
      <section className="eventos w-full flex flex-col gap-2 p-4">
        <h2 className="font-serif text-2xl text-slate-700">Eventos Destacados</h2>
        <article className="grid grid-cols-3 gap-4">
          {
            eventos.map((item) => {
              return (
                <Card key={item.id}>
                  <CardHeader>
                    <CardTitle>{item.nombre}</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                    <Image src={item.image} alt="demo" width={250} height={150}/>
                  </CardHeader>
                  <CardContent>
                    <p>{item.description}</p>
                  </CardContent>
                  <CardFooter>
                    <p>{item.fechaPublicacion}</p>
                  </CardFooter>
                </Card>
              )
            })
          }
        </article>
      </section>
    </>
  );
}

export default Eventos;