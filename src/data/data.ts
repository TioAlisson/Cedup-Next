import data from "@/data/dataCourses.json";

// Definindo as interfaces para os dados do curso
import { Curso } from "@/app/types/typesCursos"

interface Path {
  course: string;
  path: string;
  curso: Curso;
}

export function getLinks(): Path[] {
  const cursos: Curso[] = data.cardsCurso; 

  const removeAccents = (str: string): string => {
    return str.normalize("NFD").replace(/[\u0300-\u036f|`]/g, "");
  };

  const paths: Path[] = cursos.map((curso) => {
    // Criar o path com base no nome do curso e typeCourse
    const courseName = removeAccents(curso.nome.replace(/\s/g, "-")).toLowerCase();
    const typeCourse = removeAccents(curso.typeCouse.replace(/\s/g, "-")).toLowerCase();

    return {
      course: curso.nome,
      path: `${courseName}-${typeCourse}`,
      curso
    };
  });

  return paths;
}


