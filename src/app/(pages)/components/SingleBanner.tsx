import { StaticImageData } from "next/image";

interface SingleBannerProps {
    title: string;
    backgroundImage?: string | StaticImageData;
    subtitle?: string;
    colorBg?: string; 

    paddingBottom?: string;
}

export default function SingleBanner({
    title,
    backgroundImage,
    subtitle,
    colorBg = "bg-zinc-900/80",
    paddingBottom = "pb-24"
}: SingleBannerProps) {
    return (
        <div
            className="bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined }}
        >
            <div className={`${colorBg} ${paddingBottom} pt-44 lg:pt-[270px]`}>
                <h1 className="text-center text-white text-4xl lg:text-5xl font-bold uppercase">{title}</h1>
                {subtitle && (
                    <p className="text-center text-sencodary-500 font-bold my-12 text-lg">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
}
