import { notFound } from "next/navigation";
import { getLinks } from "@/data/data";

import { Curso } from "@/app/types/typesCursos"
import CourseDetails from "../components/CoursesDetails";

interface Link {
  course: string;
  path: string;
  curso: Curso;
}

interface PathProps {
  params: Promise<{ path: string }>;
}

export default async function Unit({ params }: PathProps) {
  // O path vindo dos parâmetros dinâmicos da URL
  const { path } = await params;

  // Obter os links
  const links: Link[] = getLinks();
  const link = links.find((c) => c.path === path);

  if (!link) {
    notFound();
  }

  // Extraindo o curso completo
  const curso = link?.curso;

  return (
    <div>
     <CourseDetails curso={curso} />
    </div>
  );
}

export async function generateStaticParams() {

  // Obter todos os links e mapear para os parâmetros necessários
  const links: Link[] =  getLinks();

   // Gerar um array de objetos contendo o "path" para cada curso
  return links.map((link) => ({
    path: link.path,
  }));
}
