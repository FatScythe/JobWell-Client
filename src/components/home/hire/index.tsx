import Image from "next/image";
import { ChevronRightIcon } from "@/components/icons";
import office from "../../../../asset/image/office.webp";

export const Hire = () => {
  return (
    <section className='my-20'>
      <main className='w-11/12 mx-auto p-4 sm:p-8 flex flex-col lg:flex-row justify-start items-center gap-10 bg-dark-blue rounded-lg h-[35rem] sm:h-[28rem]'>
        <header className='rounded-lg overflow-hidden w-full h-full basis-3/5 lg:basis-2/5'>
          <Image
            src={office}
            alt='offce'
            className='w-full h-full object-cover'
          />
        </header>
        <footer className='basis-2/5 lg:basis-3/5 flex flex-col justify-center items-start gap-4'>
          <div>
            <h2 className='text-transparent bg-clip-text bg-gradient-to-b from-blue-300 to-blue-500 font-bold text-lg'>
              For companies
            </h2>
            <h1 className='text-white text-3xl font-bold'>Grow your team</h1>
          </div>
          <p className='text-gray-300/70 text-lg'>
            <span>
              Access a diverse talent pool effortlessly with our advanced
              matching algorithms, ensuring efficient and customized connections
              tailored to your specific hiring needs.
            </span>
            <span className='hidden lg:block'>
              Facilitate seamless communication and collaboration within your
              hiring team, ensuring a cohesive and efficient process from start
              to finish.
            </span>
          </p>

          <button className='flex justify-start items-center gap-1 text-blue-700 font-semibold group'>
            <span className='group-hover:underline underline-offset-4'>
              Start Hiring
            </span>
            <ChevronRightIcon className='w-4 h-4' />
          </button>
        </footer>
      </main>
    </section>
  );
};
