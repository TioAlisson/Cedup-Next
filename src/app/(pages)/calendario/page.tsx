import Link from 'next/link';
import SingleBanner from '../components/SingleBanner'

const data = [
    { edital: 'Edital estagio', descricao: 'Edital estágio Cedup', urlPdf: "https://ctp.org.br/wp-content/uploads/2024/11/editalbolsistasctp_convocacao_de_bolsista_edital_7_28229_assinado-1.pdf" },
    { edital: 'Edital estagio', descricao: 'Edital estágio Cedup', urlPdf: "https://storage.googleapis.com/production-hostgator-brasil-v1-0-3/853/1862853/t6kJ6lV6/838f7e536b7f49648455ed1da3c044c0?fileName=DISCIPLINAS%20B%C3%81SICAS%20NEM%20INFORM%C3%81TICA.pdf" },
    { edital: 'Edital estagio', descricao: 'Edital estágio Cedup', urlPdf: "https://storage.googleapis.com/production-hostgator-brasil-v1-0-3/853/1862853/t6kJ6lV6/838f7e536b7f49648455ed1da3c044c0?fileName=DISCIPLINAS%20B%C3%81SICAS%20NEM%20INFORM%C3%81TICA.pdf" },
    { edital: 'Edital estagio', descricao: 'Edital estágio Cedup', urlPdf: "https://storage.googleapis.com/production-hostgator-brasil-v1-0-3/853/1862853/t6kJ6lV6/838f7e536b7f49648455ed1da3c044c0?fileName=DISCIPLINAS%20B%C3%81SICAS%20NEM%20INFORM%C3%81TICA.pdf" },
    { edital: 'Edital estagio', descricao: 'Edital estágio Cedup', urlPdf: "https://storage.googleapis.com/production-hostgator-brasil-v1-0-3/853/1862853/t6kJ6lV6/838f7e536b7f49648455ed1da3c044c0?fileName=DISCIPLINAS%20B%C3%81SICAS%20NEM%20INFORM%C3%81TICA.pdf" }
];


export default function Estagio() {
    return (
        <div>
            <SingleBanner
                title="Estagio"
                backgroundImage="https://tioalisson.github.io/Projeto-Cedup.github.io/assets/img/bg-doc.svg"
            />
            <div className='py-10 overflow-x-scroll lg:overflow-auto lg:container mx-auto'>
                <section id="estagio" className="py-12 w-[600px] lg:w-auto">
                    <div className="container mx-auto px-4">
                        <div className="overflow-x-auto">
                            <table className="min-w-full table-auto">
                                <tbody>
                                    {data.map((item, index) => (
                                        <tr
                                            key={index}
                                            className='rounded-lg odd:bg-transparent even:bg-gray'
                                        >
                                            <td className="w-2/5 px-4">
                                                <p className="font-semibold">{item.edital}</p>
                                            </td>
                                            <td className="w-2/5 px-4">
                                                <p>{item.descricao}</p>
                                            </td>
                                            <td className="w-1/5 px-4 text-right flex items-center py-5">
                                                <Link href={item.urlPdf} target='_blank' rel='noopener noreferrer'>
                                                    <svg
                                                        width="22"
                                                        height="16"
                                                        viewBox="0 0 22 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M11 5C10.2044 5 9.44129 5.31607 8.87868 5.87868C8.31607 6.44129 8 7.20435 8 8C8 8.79565 8.31607 9.55871 8.87868 10.1213C9.44129 10.6839 10.2044 11 11 11C11.7956 11 12.5587 10.6839 13.1213 10.1213C13.6839 9.55871 14 8.79565 14 8C14 7.20435 13.6839 6.44129 13.1213 5.87868C12.5587 5.31607 11.7956 5 11 5ZM11 13C9.67392 13 8.40215 12.4732 7.46447 11.5355C6.52678 10.5979 6 9.32608 6 8C6 6.67392 6.52678 5.40215 7.46447 4.46447C8.40215 3.52678 9.67392 3 11 3C12.3261 3 13.5979 3.52678 14.5355 4.46447C15.4732 5.40215 16 6.67392 16 8C16 9.32608 15.4732 10.5979 14.5355 11.5355C13.5979 12.4732 12.3261 13 11 13ZM11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5Z"
                                                            fill="#85B6FF"
                                                        />
                                                    </svg>
                                                </Link>

                                                {/* Aqui é pra funcionar o download se tirar o href funciona normamente */}
                                                <Link href={item.urlPdf} download rel='noopener noreferrer' className="ml-3">
                                                    <svg
                                                        width="24"
                                                        height="16"
                                                        viewBox="0 0 24 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M19.35 6.04C19.0141 4.33772 18.0976 2.80486 16.7571 1.70325C15.4165 0.601633 13.7351 -0.000392242 12 1.91737e-07C9.11 1.91737e-07 6.6 1.64 5.35 4.04C3.88023 4.19883 2.52101 4.89521 1.53349 5.99532C0.545971 7.09543 -0.000171702 8.52168 4.04925e-08 10C4.04925e-08 13.31 2.69 16 6 16H19C21.76 16 24 13.76 24 11C24 8.36 21.95 6.22 19.35 6.04ZM17 9L12 14L7 9H10V5H14V9H17Z"
                                                            fill="#85B6FF"
                                                        />
                                                    </svg>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
