import SlideABout from "./SlideAbout";


export default function Timeline() {
  return (
    <div className='py-20 ps-12 border-b-4'>
      <div className='lg:grid lg:grid-cols-12 text-primary-400'>
        <p className='col-span-12 col-start-3 tracking-[.35em]'>Nossa história</p>
        <h2 className='col-span-12 col-start-3 font-bold text-3xl'>LINHA DO TEMPO</h2>
        <span className='flex col-start-3 rounded-full mt-4 mb-12 bg-sencodary-500 h-[6px] w-52'></span>
      </div>
      <SlideABout />
    </div>
  );
}