interface SectionMVVProps {
    showButton?: boolean; // Defina como opcional
}

import { Button } from "@/components/ui/button";

import BorderSolid from "../components/BorderSolid";
import CardMVV from "../components/CardMVV";

import Link from "next/link";
import data from "@/data/dataMVV.json"

export default function SectionMVV({ showButton = true }: SectionMVVProps) {
    return (
        <div className="py-24 container mx-auto">
            <h2 className="text-4xl lg:text-5xl font-semibold text-center text-primary-500">MISSÃO VISÃO E VALORES</h2>
            <BorderSolid styleMargin="mx-auto" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-10 2xl:gap-32 py-16">
                {data.cardsMVV.map((card, index) => (
                    <CardMVV
                        key={index}
                        image={card.image}
                        alt={card.alt}
                        paragraph={card.paragraph}
                        title={card.title}
                    />
                ))}
            </div>
            {showButton && (
                <div className="text-center essa div">
                    <Link href="/about" rel="noopener noreferrer" className="text-center">
                        <Button variant="defaulCedup">Saiba mais</Button>
                    </Link>
                </div>
            )}
        </div>
    )
}
