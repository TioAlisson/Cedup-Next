import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SlideHome() {
  return (
    <div className="bg-[url('https://tioalisson.github.io/Projeto-Cedup.github.io/assets/img/bg.jpg')] bg-[#E74040] bg-blend-multiply h-screen w-full bg-no-repeat bg-cover flex justify-center items-center">
      <div className="text-center mx-8 mt-32">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-wide text-white max-w-[900px]">Explore nossa variedade de cursos</h1>
        <h2 className="font-bold text-white/80 text-2xl mt-12 mb-8">para impulsionar sua jornada de aprendizado.</h2>
        <Link href="/" rel="noopener noreferrer" className="relative z-50">
          <Button variant="defaulCedup" className="bg-primary-500 z-50" >
              Saiba mais
          </Button>
        </Link>
      </div>
    </div>
  );
}