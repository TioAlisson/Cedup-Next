import Image from "next/image";

interface InfoFaqProps {
    title: string;
    alt: string;
    assistentes?: { [key: string]: string | undefined }; 
    index: number;
    openIndex: number | null;
    setOpenIndex: (index: number | null) => void;
}

import Teste from "@/public/icon/icon-arrow-up.png"

export default function Faq({ title, alt, assistentes = {}, index, openIndex, setOpenIndex }: InfoFaqProps) {

    // Função para alternar a abertura e fechamento da FAQ
    const toggleFaq = () => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-sencodary-300 mb-6 rounded-t-md">
            <div className="flex items-center justify-between cursor-pointer px-4" onClick={toggleFaq}>
                <p className="text-xl font-bold py-6 flex items-center text-white min-h-[104px]">{title}</p>
                <Image
                    src={Teste}
                    className={`duration-700 ease-in-out ${openIndex === index ? '' : 'rotate-180'}`}
                    alt={alt}
                    width={25}
                    height={25}  // A altura não pode ser 0, pois precisa de uma altura válida para animar corretamente.
                />
            </div>

            {/* Div que contém o texto explicativo da FAQ, controlada pelo estado */}
            <div className={`overflow-hidden transition-all duration-500 lg:duration-700 ease-in-out bg-white px-4 border border-sencodary-500 ${openIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className={`transition-all duration-700 ease-in-out ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}>
                    {/* Mapeando os assistentes */}
                    {Object.entries(assistentes).map(([key, assistente]) => (
                        <p key={key} className="py-2 last:pb-8">- {assistente}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}
