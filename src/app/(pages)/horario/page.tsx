import Link from 'next/link';
import SingleBanner from '../components/SingleBanner'
import { Button } from '@/components/ui/button';
import Card from '../components/Card';

import data from "@/data/dataDocuments.json"


export default function Estagio() {


    return (
        <div>
            <SingleBanner
                title="Horários"
                backgroundImage="https://tioalisson.github.io/Projeto-Cedup.github.io/assets/img/bg-doc.svg"
            />
            <div className='py-10 lg:container mx-auto'>
                <section className="py-12 lg:py-20 lg:w-auto">
                    <div className="lg:container lg:mx-4">
                        <table className="hidden lg:inline-table lg:min-w-full lg:table-auto">
                            <tbody>
                                {data.documents.horario.map((item, index) => (
                                    <tr
                                        key={index}
                                        className='odd:bg-transparent even:bg-gray'
                                    >
                                        <td className="w-auto lg:w-[30%] px-4 text-center">
                                            <p className="text-xl lg:text-2xl text-primary-500 font-semibold">{item.title}</p>
                                        </td>
                                        <td className="w-auto lg:w-[50%] text-center px-4 py-8 text-lg">
                                            <p>{item.paragraph}</p>
                                        </td>
                                        <td className='w-auto lg:w-[20%] text-center'>
                                            <Link href={item.url} target='_blank' rel='noopener noreferrer'>
                                                <Button variant="defaulCedup" className='!py-5 !px-4 mr-4 !text-sm !font-medium'>
                                                    Download
                                                </Button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* <div className='flex flex-col lg:hidden'>
                            <Card
                                title='Calendário escolar'
                                paragraph='Realize o download do calendário escolar, referente ao ano de 2024.'
                                url='https://storage.googleapis.com/production-hostgator-brasil-v1-0-3/853/1862853/t6kJ6lV6/4a5f43d6f7cc4ed8a496fe984f5a6be8?fileName=Calendario-%202024.pdf'
                                btnParagraph='Calendário escolar'
                            />
                            <Card
                                title='Calendário escolar'
                                paragraph='Realize o download do calendário escolar, referente ao ano de 2024.'
                                url='https://storage.googleapis.com/production-hostgator-brasil-v1-0-3/853/1862853/t6kJ6lV6/4a5f43d6f7cc4ed8a496fe984f5a6be8?fileName=Calendario-%202024.pdf'
                                btnParagraph='Calendário escolar'
                            />
                            <Card
                                title='Calendário escolar'
                                paragraph='Realize o download do calendário escolar, referente ao ano de 2024.'
                                url='https://storage.googleapis.com/production-hostgator-brasil-v1-0-3/853/1862853/t6kJ6lV6/4a5f43d6f7cc4ed8a496fe984f5a6be8?fileName=Calendario-%202024.pdf'
                                btnParagraph='Calendário escolar'
                            />
                            <Card
                                title='Calendário escolar'
                                paragraph='Realize o download do calendário escolar, referente ao ano de 2024.'
                                url='https://storage.googleapis.com/production-hostgator-brasil-v1-0-3/853/1862853/t6kJ6lV6/4a5f43d6f7cc4ed8a496fe984f5a6be8?fileName=Calendario-%202024.pdf'
                                btnParagraph='Calendário escolar'
                            />
                        </div> */}
                    </div>
                </section>
            </div >
        </div >
    )
}
