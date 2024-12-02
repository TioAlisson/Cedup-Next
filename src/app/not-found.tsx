'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import Image404 from "@/public/img/img-404.jpg"

export default function NotFound() {

  // useState é utilizado para criar um estado interno na componente.
  // A variável 'counter' mantém o valor do contador, e a função 'setCounter' é usada para atualizar esse valor.
  const [counter, setCounter] = useState(5); // O contador inicia com 5 segundos.
  
  // useRouter é um hook do Next.js usado para navegar entre as páginas.
  const router = useRouter();

  useEffect(() => {
      // setInterval é utilizado para diminuir o contador a cada 1 segundo (1000ms).
      // O contador é atualizado chamando setCounter, que decrementa o valor anterior.
      const timer = setInterval(() => {
          // Var name = var name --
          setCounter((prevCounter) => prevCounter - 1);
      }, 1000); // O intervalo de 1000ms significa que a cada segundo o contador será decrementado.

      // setTimeout é utilizado para redirecionar o usuário após 5 segundos (5000ms).
      const timeout = setTimeout(() => {
          router.push('/'); // Depois de 5 segundos, redireciona para a página inicial.
      }, 5000);

      // Limpeza dos efeitos:
      // Quando o componente for desmontado ou o efeito for re-executado, limpar os intervalos e timeouts.
      // Isso evita que o intervalo e o timeout continuem rodando, mesmo depois que o componente foi desmontado.
      return () => {
          clearInterval(timer); // Limpa o intervalo para que ele não continue decrementando o contador.
          clearTimeout(timeout); // Limpa o timeout para evitar que a navegação aconteça inesperadamente.
      };
  }, [router]); // O efeito depende do 'router', ou seja, ele será re-executado caso 'router' mude. No caso, isso não muda muito, mas é uma dependência importante no hook.

  return (
    <div className='container mx-auto'>
      <div className='py-20 flex flex-col items-center justify-center'>
        <h1 className="text-2xl font-medium text-primary-400 pt-20 lg:pt-40 text-center lg:text-start">
          Redirecionado para a página inicial em {counter} segundos.
        </h1>
        <Image
          src={Image404}
          alt='Image Not Found'
          className='w-[60%] lg:w-[30%] h-auto my-12 lg:my-6'
        />
        <p className="text-primary-400 text-lg">
          <span className="uppercase mr-2 text-3xl font-bold">Erro</span> A página não existe
        </p>
      </div>
    </div>
  );
}
