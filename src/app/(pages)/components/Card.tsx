import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CardProps {
    title: string
    paragraph: string
    url: string
    btnParagraph: string
}

export default function Card({ title, paragraph, url, btnParagraph }: CardProps) {
    return (
        <div className="odd:bg-transparent even:bg-gray py-10 flex justify-center items-center flex-col px-6 first:pt-20 last:pb-20">
            <h1 className="text-3xl font-bold text-sencodary-500">{title}</h1>
            <p className="py-10 text-lg font-medium text-center">{paragraph}</p>
            <Link href={url}>
                <Button variant="defaulCedup">{btnParagraph}</Button>
            </Link>
        </div>
    )
}
