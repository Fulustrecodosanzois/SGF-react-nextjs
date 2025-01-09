import Image from "next/image";



export default async function Header() {
    return (

        <div >

            <Image
                className="align-middle"
                src="/logo_index.png"
                width={100}
                height={50}
                alt="logo"
            />

        </div>
    )
};

