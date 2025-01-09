import { House, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Header() {
    return (
        <div className="flex justify-between items-center w-full px-4 mt-2">
            {/* Ícone da House na lateral esquerda */}
            <div className="flex items-center">
                <Link href="/">
                    <House
                        className="cursor-pointer text-white"
                        width={40}
                        height={40}
                    />
                </Link>
            </div>

            {/* Logo centralizada */}
            <div className="flex-1 flex justify-center">
                <Link href="/">
                    <Image
                        src="/logo_index.png"
                        width={100}
                        height={50}
                        alt="logo e volta para pagina inicial"
                    />
                </Link>
            </div>

            {/* Ícone de Settings na lateral direita */}
            <div className="flex items-center">
                <Settings
                    className="cursor-pointer text-white"
                    width={40}
                    height={40}
                />
            </div>
        </div>
    );
}
