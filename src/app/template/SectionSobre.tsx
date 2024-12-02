import BorderSolid from "../components/BorderSolid";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import Image from "next/image";
import ImageMulher from "@/public/img/img-sobre.png"

export default function SectionSobre() {
    return (
        <div className="grid grid-cols-12 container mx-auto">
            <div className="col-span-12 lg:col-span-6 w-full py-24">
                <h3 className="text-4xl lg:text-5xl font-semibold text-center lg:text-start text-primary-500">SOBRE</h3>
                <BorderSolid styleMargin="mx-auto lg:mx-0" />
                <p className="py-14 text-center lg:text-start text-muted-foreground text-lg font-medium leading-normal">O Projeto Político Pedagógico é um processo democrático iniciado em 1999, revisado em 2000/2005/2006 e finalizado em junho de 2008 após grupos de estudo. Ele representa uma constante evolução, visando à construção de um trabalho pedagógico mais eficaz e de melhor qualidade, orientado pela comunidade escolar.</p>
                <div>
                    <Link href="/about" rel="noopener noreferrer" className="flex justify-center lg:justify-start">
                        <Button variant="defaulCedup">Saiba mais</Button>
                    </Link>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-8 flex items-center 2xl:items-start relative">
                <Image
                    src={ImageMulher}
                    alt="Mulher section sobre"
                    className="w-full object-contain object-center lg:absolute 2xl:static bottom-0"
                />
            </div>
        </div>
    )
}      
