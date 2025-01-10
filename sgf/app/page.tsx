import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">

      {/* Conteúdo Principal */}
      <div className="flex-1 flex flex-col justify-center items-center">

        {/* Avatar */}
        <div className="flex items-center justify-center mb-3">
          <Image
            className="rounded-full border-4 border-white shadow-md object-cover"
            src="/avatar.jpg"
            width={150}
            height={100}
            alt="Avatar com foto da profissional"
          />
        </div>

        {/* Informações da Dra. Thaisa */}
        <div className="text-center text-white font-bold">
          <h1 className="text-3xl">Thaisa Braveres</h1>
          <p className="my-6 px-6">
            A Dra. Tais é psicóloga clínica com especialização em doido. Com
            experiência no acompanhamento de questões emocionais e psicológicas, ela
            oferece um espaço acolhedor para promover o bem-estar e o autoconhecimento. 
            Seu objetivo é apoiar seus pacientes na superação de desafios e no
            desenvolvimento de estratégias para uma vida mais equilibrada e saudável.
          </p>
        </div>

        {/* Botão de agendamento */}
        <div className="">
          <Button className="bg-blue-500 text-white p-5 rounded-md shadow-lg">
            <Link href={"/page/form"}>
              Agende Aqui!
            </Link>
          </Button>
        </div>

      </div>
        <Footer />


      
    </div>
  );
}
