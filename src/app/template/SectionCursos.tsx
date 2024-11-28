import { Button } from "@/components/ui/button";
import CardCurso from "../components/CardCurso";

import Link from "next/link";
import data from "@/data/dataCourses.json"

import { getLinks } from '@/data/data'

export default function SectionCursos() {

    const courseLinks = getLinks(); // Aqui você chama a função getLinks que retorna o array com os paths

    return (
        <div className="bg-gray">
            <div className="py-24 container mx-auto">
                <div className="text-4xl lg:text-5xl font-semibold text-center">
                    <h2 className="text-primary-500">CONFIRA ALGUNS DE NOSSOS</h2>
                    <p className="pt-6 text-sencodary-500 font-bold">CURSOS</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-10 2xl:gap-2 py-16">
                    {data.cardsCurso.slice(0, 3).map((card, index) => {
                        // Encontrar o path correspondente ao curso
                        /*
                            Procurando o link do curso:
                            A linha abaixo encontra o link do curso usando o nome e o tipo de curso.
                            Se o nome e o tipo do curso do card corresponderem aos valores no array 'courseLinks',
                            ele retorna o objeto completo, caso contrário, retorna 'undefined'.
                        */
                        const courseLink = courseLinks.find(link => link.course === card.nome && link.curso.typeCouse === card.typeCouse);
                        return (
                            <CardCurso
                                key={index}
                                image={card.image}
                                alt={card.alt}
                                imageIcon={card.imageIcon}
                                course={card.course}
                                title={card.title}
                                urlCourses={courseLink ? `/cursos/${courseLink.path}` : '/'}
                                typeCourse={card.typeCouse}
                            />
                        );
                    })}
                </div>
                <div className="text-center">
                    <Link href="/" rel="noopener noreferrer" className="text-center">
                        <Button variant="defaulCedup">Todos os cursos</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
