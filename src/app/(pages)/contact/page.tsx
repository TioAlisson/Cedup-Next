import SingleBanner from "../components/SingleBanner";
import SectionAddress from "./components/FooterAddress";
import SectionContact from "./components/FooterContact";

export default function Contact() {
    return (
        <>
            <SingleBanner
                title="CONTATO"
                backgroundImage="https://tioalisson.github.io/Projeto-Cedup.github.io/assets/img/bg-sobre.jpg"

            />
            <SectionAddress />
            <SectionContact />
        </>
    );
}
