import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CardCursoProps {
    image: string | StaticImageData
    alt: string
    imageIcon: string
    course: string
    title: string
    urlCourses: string
    typeCourse?: string
}

export default function CardCurso({ image, alt, imageIcon, course, title, urlCourses, typeCourse }: CardCursoProps) {
    return (
        <div className="2xl:px-8 py-5">
            <div className=" rounded-md shadow-2xl relative">
                <div>
                    <Image
                        src={image}
                        alt={alt}
                        width={0}
                        height={0}
                        className="w-full h-56 lg:h-60 object-cover rounded-t-md"
                    />
                </div>
                <div className="py-6 px-8">
                    <div className="flex items-center justify-center lg:justify-start gap-2 pb-6">
                        <span className="text-xl">{imageIcon}</span>
                        <span className="flex font-semibold text-xl">{course}</span>
                    </div>
                    <p className="md:text-xl text-center lg:text-start line-clamp-2 text-primary-500 font-medium">{title}</p>
                    <div className="text-center lg:text-start">
                        <Link href={urlCourses} rel="noopener noreferrer">
                            <Button variant="btnCursos" className="mt-4">Ler mais</Button>
                        </Link>
                    </div>
                </div>
                {typeCourse && (
                    <div className="absolute top-0 right-0 -mt-2 -mr-2 rounded-md bg-primary-400 px-6 py-2">
                        <span className="text-white text-2xl font-bold">{typeCourse}</span>
                    </div>
                )}
            </div>
        </div>
    );
}