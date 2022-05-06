import { InstagramLogo, FacebookLogo, YoutubeLogo } from "phosphor-react"

export function Navbar() {
    return (
        <nav className="bg-brand-500 my-20 pt-10 text-beige-50 font-bold center text-center h-screen">
            <ul className="flex flex-col gap-y-12 text-2xl">
                <li><a href="#inicio">Início</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#depoimentos">Depoimentos</a></li>
                <button className="bg-beige-50 text-brand-500 rounded-3xl px-5 py-3 uppercase font-bold text-lg w-4/5 m-auto ">Agende sua Consulta</button>
            </ul>

            <div className="flex text-beige-50 justify-center gap-5 my-10">
                <InstagramLogo size={32} />
                <FacebookLogo size={32} />
                <YoutubeLogo size={32} />
            </div>
        </nav>
    )
}