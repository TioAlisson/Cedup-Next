import { useState } from 'react'
import data from "@/data/dataMembers.json"

import Faq from "./Faq";
import BorderSolid from "@/app/components/BorderSolid";

export default function SectionMembers() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Função para alternar a abertura e fechamento da FAQ
    const handleToggle = (index: number | null) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='max-w-[700px] mx-auto py-20 px-8 lg:px-0'>
           <h2 className="text-4xl lg:text-5xl font-semibold text-center text-primary-500">DEMAIS MEMBROS</h2>
           <BorderSolid styleMargin="mx-auto mb-14" />
            {data.faq.map((faq, index) => (
                <Faq
                    key={index}
                    title={faq.title}
                    alt={faq.alt}
                    index={index}
                    openIndex={openIndex}
                    setOpenIndex={handleToggle}
                    assistentes={faq.assistentes}
                />
            ))}
        </div>
    );
}