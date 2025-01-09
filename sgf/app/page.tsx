import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";

export default function Home() {
  return (

    <div>

      <div>

        <div>
          <h1>Thaisa Braveres</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus hic inventore itaque, voluptatibus exercitationem id quos. At doloribus veritatis repellendus doloremque, omnis deleniti consequatur quaerat eum inventore, eos ad nisi.</p>

        </div>

        <div>
          <Button className="bg-blue-500 text-white px-4 py-2 rounded">
            <Link href={'/sgf/app/page/form/page.tsx'}>
              Agende Aqui!
            </Link>
          </Button>

          
        </div>

      </div>

    </div>

  );
}
