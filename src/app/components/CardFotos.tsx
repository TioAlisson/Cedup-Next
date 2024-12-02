import Image, { StaticImageData } from "next/image";

interface CardFotosProps {
    image: string | StaticImageData;
    alt: string;
    title: string;
}

export default function CardFotos({ image, alt, title }: CardFotosProps) {
    return (
        <div className="relative">
            <Image
                src={image}
                alt={alt}
                className="object-cover w-full h-52 2xl:h-64"
                width={0} 
                height={0} 
            />
            <span className="absolute bottom-0 w-full bg-red-500/70 py-2 text-center uppercase lg:text-xl text-white font-semibold">
                {title}
            </span>
        </div>
    );
}
