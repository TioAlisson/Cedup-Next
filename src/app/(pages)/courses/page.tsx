'use client'

import { useState } from 'react'
import SingleBanner from '../components/SingleBanner'

import data from "@/data/dataCourses.json"
import CardCurso from '@/app/components/CardCurso'
import { getLinks } from '@/data/data'


export default function Courses() {

    const [selectedOption, setSelectedOption] = useState('pos-medio')

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value)
    }

    // Filtrar cursos com base no tipo selecionado
    const filteredCourses = data.cardsCurso.filter((card) => card.typeCouse === (selectedOption === 'pos-medio' ? 'POS' : 'EMIEP'));

    // Gerar os links para os cursos usando getLinks()
    const courseLinks = getLinks(); // Aqui você chama a função getLinks que retorna o array com os paths

    return (
        <div>
            <SingleBanner
                title="CURSOS"
                backgroundImage="https://tioalisson.github.io/Projeto-Cedup.github.io/assets/img/bg-sobre.jpg"
            />
            <div className="py-24 px-4 container mx-auto">
                <div className='flex justify-end'>
                    <select
                        onChange={handleChange}
                        value={selectedOption}
                        className="bg-white border border-gray-300 rounded-lg p-2 text-lg w-96 focus:outline-none uppercase"
                    >
                        <option value="pos-medio">Pós-médio</option>
                        <option value="emiep">EMIEP</option>
                    </select>
                </div>

                <div className="mt-8 py-10">
                    <h2 className="text-4xl font-bold text-center uppercase text-primary-500 leading-normal">
                        {selectedOption === 'pos-medio' ? 'CURSOS PÓS MÉDIO' : 'CURSOS EMIEP'}
                    </h2>
                    <div className="mt-4">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-10 2xl:gap-2 py-16">
                            {filteredCourses.map((card, index) => {
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
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
