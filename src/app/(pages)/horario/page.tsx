import Link from 'next/link';
import SingleBanner from '../components/SingleBanner'
import { Button } from '@/components/ui/button';

const data = [
    { edital: 'Calendário escolar', descricao: 'Realize o download do calendário escolar, referente ao ano de 2024.', urlPdf: "https://ctp.org.br/wp-content/uploads/2024/11/editalbolsistasctp_convocacao_de_bolsista_edital_7_28229_assinado-1.pdf" },
    { edital: 'Horário matutino', descricao: 'Realize o download do horário matutino, referente ao ano de 2024.', urlPdf: "https://storage.googleapis.com/production-hostgator-brasil-v1-0-3/853/1862853/t6kJ6lV6/838f7e536b7f49648455ed1da3c044c0?fileName=DISCIPLINAS%20B%C3%81SICAS%20NEM%20INFORM%C3%81TICA.pdf" },
    { edital: 'Horário vespertino', descricao: 'Realize o download do horário vespertino, referente ao ano de 2024.', urlPdf: "https://storage.googleapis.com/production-hostgator-brasil-v1-0-3/853/1862853/t6kJ6lV6/838f7e536b7f49648455ed1da3c044c0?fileName=DISCIPLINAS%20B%C3%81SICAS%20NEM%20INFORM%C3%81TICA.pdf" },
    { edital: 'Horário noturno', descricao: 'Realize o download do horário noturno, referente ao ano de 2024.', urlPdf: "https://storage.googleapis.com/production-hostgator-brasil-v1-0-3/853/1862853/t6kJ6lV6/838f7e536b7f49648455ed1da3c044c0?fileName=DISCIPLINAS%20B%C3%81SICAS%20NEM%20INFORM%C3%81TICA.pdf" }
];


export default function Estagio() {

    
    return (
        <div>
            <SingleBanner
                title="Horários"
                backgroundImage="https://tioalisson.github.io/Projeto-Cedup.github.io/assets/img/bg-doc.svg"
            />
            <div className='py-10 lg:container mx-auto'>
                <section id="estagio" className="py-12 lg:py-20 lg:w-auto">
                    <div className="container mx-auto px-4">
                        <div className="overflow-x-auto hidden lg:flex">
                            <table className="lg:min-w-full table-auto">
                                <tbody>
                                    {data.map((item, index) => (
                                        <tr
                                            key={index}
                                            className='odd:bg-transparent even:bg-gray'
                                        >
                                            <td className="w-auto lg:w-[30%] px-4 text-center">
                                                <p className="text-xl lg:text-2xl text-primary-500 font-semibold">{item.edital}</p>
                                            </td>
                                            <td className="w-auto lg:w-[50%] text-center px-4 py-8 text-lg">
                                                <p>{item.descricao}</p>
                                            </td>
                                            <td className='w-auto lg:w-[20%] text-center'>
                                                <Link href={item.urlPdf} target='_blank' rel='noopener noreferrer'>
                                                    <Button variant="defaulCedup" className='!py-5 !px-4 mr-4 !text-sm !font-medium'>
                                                        Download
                                                    </Button>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div>
                                here
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
