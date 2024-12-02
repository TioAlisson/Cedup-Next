interface TestimonialsProps {
    testimonials1: string;
    student1: string;
}

import Image from "next/image";
import IconMark from "@/public/icon/icon-marks.png";

export default function Testimonials({testimonials1, student1}: TestimonialsProps) {
    return (
        <div>
            <div className='py-16 max-w-[1280px] mx-auto px-6'>
                <h2 className='text-center text-sencodary-500 font-medium text-4xl'>
                    Depoimentos de ex-alunos
                </h2>

                <div className='grid grid-cols-12 mt-10'>
                    <div className='col-span-1 flex gap-5 items-start'>
                        <Image src={IconMark} alt='Icon Mark' className='w-10 h-auto' />
                        <div className='bg-primary-500 w-1 h-10'></div>
                    </div>

                    <div className='col-span-12 mt-6 lg:mt-0 lg:col-span-11'>
                        <p>{testimonials1}</p>
                    </div>
                </div>

                <p className='text-center mt-10 tracking-wide font-medium'>
                    {student1}
                </p>
            </div>
        </div>
    );
}