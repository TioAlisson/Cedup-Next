import Link from 'next/link';
import SingleBanner from '../components/SingleBanner'
import { Button } from '@/components/ui/button';

import data from "@/data/dataDocuments.json"
import Card from '../components/Card';


export default function Estagio() {


    return (
        <div>
            <SingleBanner
                title="Horários"
                backgroundImage="https://tioalisson.github.io/Projeto-Cedup.github.io/assets/img/bg-doc.svg"
            />
            <div className='lg:container mx-auto'>
                <div className="lg:py-20 lg:w-auto">
                    <div className="lg:container lg:mx-4">
                        <div className='border border-primary-400/50 rounded-md overflow-hidden'>
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
                        </div>
                        <div className='block lg:hidden'>
                            {data.documents.horario.map((card, index) => (
                                <Card
                                    key={index}
                                    title={card.title}
                                    paragraph={card.paragraph}
                                    url={card.url}
                                    btnParagraph={card.btnParagraph}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
