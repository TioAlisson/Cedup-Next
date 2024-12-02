import SectionCursos from "./template/SectionCursos";
import SectionEquipeGestora from "./template/SectionEquipeGestora";
import SectionFotos from "./template/SectionFotos";
import SectionMVV from "./template/SectionMVV";
import SectionSlide from "./template/SectionSlide";
import SectionSobre from "./template/SectionSobre";

export default function Home() {
  return (
    <>
      <SectionSlide />
      <SectionMVV showButton={true} />
      <SectionCursos />
      <SectionSobre />
      <SectionFotos />
      <SectionEquipeGestora />
    </>
  );
}
