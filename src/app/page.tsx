import Image from "next/image";
import Inicio from "./components/Inicio";
import Eventos from "./components/Eventos";
import Talleres from "./components/Talleres";
import Noticias from "./components/Noticias";
import Contacto from "./components/contacto";

export default function Home() {
  return (
    <main className="w-full flex flex-col gap-3">
      <Inicio />
      <Eventos />
      <Talleres />
      <Noticias />
      <Contacto />
    </main>
  );
}
