'use client'

import SingleBanner from '../components/SingleBanner'
import SectionEquipeGestora from '@/app/template/SectionEquipeGestora'
import SlideABout from './components/SlideAbout'
import SectionMVV from '@/app/template/SectionMVV'
import Faq from './components/Faq'

import data from "@/data/dataFaq.json"

import { useState } from 'react'


export default function Courses() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Função para alternar a abertura e fechamento da FAQ
    const handleToggle = (index: number | null) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div>
            <SingleBanner
                title="Sobre o cedup"
                backgroundImage="https://tioalisson.github.io/Projeto-Cedup.github.io/assets/img/bg-doc.svg"
            />
            <div id='timeline' className='py-20 ps-12 border-b-4'>
                <div className='lg:grid lg:grid-cols-12 text-primary-400'>
                    <p className='col-start-3 col-span-12 tracking-[.35em]'>Nossa história</p>
                    <h2 className='col-start-3 col-span-12 font-bold text-3xl'>LINHA DO TEMPO</h2>
                    <span className='flex col-start-3 rounded-full mt-4 mb-12 bg-sencodary-500 h-[6px] w-52'></span>
                </div>
                <SlideABout />
            </div>
            <div>
                <SectionMVV />
                <SectionEquipeGestora />
                <div className='max-w-[700px] mx-auto py-20 px-8 lg:px-0'>
                    {data.faq.map((faq, index) => (
                        <Faq
                            key={index}
                            title={faq.title}
                            alt={faq.alt}
                            index={index}
                            openIndex={openIndex}
                            setOpenIndex={handleToggle}
                            iconOpen={faq.iconOpen}
                            assistentes={faq.assistentes}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
