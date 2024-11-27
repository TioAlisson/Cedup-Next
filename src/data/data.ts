import data from "@/data/dataCourses.json";

// Definindo as interfaces para os dados do curso
interface Curso {
  image: string;
  alt: string;
  imageIcon: string;
  course: string;
  title: string;
  typeCouse: string;
  id: number;
  nome: string;
  rota: string;
  imagePage: string;
  imagePageAlt: string;
  turno: string;
  professionalProfile: string;
  fieldOfActivity: string;
  matrizEmiep: string;
  btnDowload: string;
  nameAdvisor: string;
  emailAdvisor: string;
  testimonials1: string;
  student1: string;
}

// Tipo para os caminhos gerados
interface Path {
  course: string;
  path: string;
}

export async function getLinks(): Promise<Path[]> {
  const cursos: Curso[] = data;

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
    };
  });

  return paths;
}
