// // Importando os dados dos cursos do arquivo JSON local (dataCourses.json)
// import data from '@/data/dataCourses.json';

// // Função `getStaticProps` é executada pelo Next.js durante o processo de build (construção do site).
// // Ela é usada para buscar os dados necessários para a página antes de ser servida para o usuário.
// export async function getStaticProps({ params }) {
  
//   // O parâmetro `params` vem da URL gerada no `getStaticPaths`. Aqui, estamos pegando o `id` da URL
//   // A URL pode ser algo como `/curso/1`, e `params.id` será o valor '1'.
//   // `params` é um objeto que contém os parâmetros da URL para essa página estática.
  
//   // Buscando o curso que tem o `id` igual ao `params.id` vindo da URL. A função `.find()` retorna
//   // o primeiro curso que corresponde ao id, ou `undefined` se não encontrar nenhum.
//   const curso = data.find(c => c.id === params.id);

//   // O Next.js espera que `getStaticProps` retorne um objeto com a chave `props`,
//   // onde você passa as props que o componente de página usará.
//   return {
//     props: { curso },  // Retorna o curso como uma prop chamada `curso`
//   };
// }

// // A função `getStaticPaths` é responsável por gerar todos os caminhos (URLs) possíveis que o Next.js
// // deve gerar na build, baseada nos dados disponíveis. Ela retorna os parâmetros necessários para
// // `getStaticProps` rodar corretamente.
// export async function getStaticPaths() {
  
//   // Aqui, estamos gerando os caminhos dinâmicos para todos os cursos disponíveis no arquivo JSON.
//   // O método `.map()` percorre todos os cursos no array `data` e cria um objeto para cada curso,
//   // onde a chave `params` é um objeto que inclui o `id` do curso. Esse `id` será utilizado na URL.
//   // Exemplo de estrutura do retorno:
//   // [
//   //   { params: { id: '1' } },
//   //   { params: { id: '2' } },
//   //   { params: { id: '3' } },
//   // ]
//   const paths = data.map(curso => ({
//     params: { id: curso.id.toString() }, // `id` precisa ser uma string, então convertemos com `toString()`
//   }));

//   // O Next.js precisa de dois valores aqui:
//   // - `paths`: um array com todos os caminhos possíveis (como `id: '1'`, `id: '2'` etc.)
//   // - `fallback`: se é permitido ou não gerar páginas para caminhos que não estão no array de `paths`.
//   // No seu caso, você está usando `false`, o que significa que só os caminhos especificados são válidos.
//   return {
//     paths,
//     fallback: false, // Não permite gerar páginas dinamicamente para caminhos não especificados.
//   };
// }
