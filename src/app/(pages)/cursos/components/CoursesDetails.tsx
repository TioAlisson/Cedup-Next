interface CourseDetailsProps {
    curso: Curso
}

import { Curso } from "@/app/types/typesCursos";

import SingleBanner from "../../components/SingleBanner";
import Section from "./Section";
import Testimonials from "./Testimonials";

export default function CourseDetails({curso}: CourseDetailsProps ) {
    
    return (
        <div>
            <SingleBanner
                title={curso?.nome}
                backgroundImage={curso.image}
            />
            <Section title="Perfil profissional">
                {curso.professionalProfile}
            </Section>

            <Section title="Campo de atuação">
                {curso.fieldOfActivity}
            </Section>

            <Section title={curso.matrizEmiep} downloadLink={curso.btnDowload} />

            <Section title="Orientador do curso">
                <div className='flex justify-center text-center'>
                    <div>
                        <p>Orientador (a): {curso.nameAdvisor}</p>
                        <p>E-mail: {curso.emailAdvisor}</p>
                    </div>
                </div>
            </Section>

            <Testimonials
                student1={curso.student1}
                testimonials1={curso.testimonials1}
            />
        </div>
    );
}