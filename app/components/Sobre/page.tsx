import TextType from "@/components/ui/TextType";
import Link from "next/link";
import { MdEmail, MdKeyboardArrowDown } from "react-icons/md";
import { SiGithub, SiLinkedin } from "react-icons/si";

function Sobre() {

    return (

        <>
            <div className="w-full h-screen flex items-center justify-center flex-col text-white mt-10">
                <h1 className="text-7xl font-bold">Anderson Melo</h1>

                <TextType   
                    className="font-bold text-xl mt-4"
                    text={["Engenheiro de Software", "Arquiteto de Código", "Solucionador de Problemas"]}
                    typingSpeed={90}
                    pauseDuration={2500}
                    showCursor={true}
                    cursorCharacter="|"
                />

                <p className="mt-6 text-white/70">Transformando ideias em código desde 2023</p>


                <div
                    className="text-white mt-10 flex gap-6"
                >
                    <Link
                        href="https://www.linkedin.com/in/andersonrodriguesmelo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 flex items-center justify-center rounded-full border border-white/40 text-white hover:border-white hover:scale-110 transition-all"
                    >
                        <SiLinkedin size={22} />
                    </Link>

                    <Link
                        href="https://github.com/AndersonMeloo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 flex items-center justify-center rounded-full border border-white/40 text-white hover:border-white hover:scale-110 transition-all"
                    >
                        <SiGithub size={22} />
                    </Link>

                    <Link
                        href={'mailto:andersonrodriguesmelo@hotmail.com'}
                        target="_blank"
                        className="w-14 h-14 flex items-center justify-center rounded-full border border-white/40 text-white hover:border-white hover:scale-110 transition-all"
                    >
                        <MdEmail size={22} />
                    </Link>
                </div>

                <div className="flex justify-center mt-40">
                    <MdKeyboardArrowDown
                        size={30}
                        className="text-2xl animate-bounce [animation-duration:1.5s] opacity-70"
                    />
                </div>
            </div>
        </>
    );
}

export default Sobre;