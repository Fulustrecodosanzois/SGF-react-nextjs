import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react";
import Link from "next/link";

const Redes = () => {
    return (
        <div className="flex justify-center items-center space-x-6 py-4">
            {/* Ícones de Redes Sociais e Contatos */}
            <div className="flex justify-center items-center space-x-6">
                {/* Facebook */}
                <Link href="https://www.facebook.com" target="_blank">
                    <Facebook
                        className="cursor-pointer text-white"
                        width={40}
                        height={40}
                    />
                </Link>
                {/* Instagram */}
                <Link href="https://www.instagram.com" target="_blank">
                    <Instagram
                        className="cursor-pointer text-white"
                        width={40}
                        height={40}
                    />
                </Link>
                {/* Twitter */}
                <Link href="https://www.twitter.com" target="_blank">
                    <Twitter
                        className="cursor-pointer text-white"
                        width={40}
                        height={40}
                    />
                </Link>
                {/* Telefone */}
                <Link href="tel:+1234567890">
                    <Phone
                        className="cursor-pointer text-white"
                        width={40}
                        height={40}
                    />
                </Link>
                {/* E-mail */}
                <Link href="mailto:example@email.com">
                    <Mail
                        className="cursor-pointer text-white"
                        width={40}
                        height={40}
                    />
                </Link>
              
            </div>
        </div>
    );
}

export default Redes;
