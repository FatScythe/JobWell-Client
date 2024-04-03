import Carousel from "./carousel";

const CTA = () => {
  return (
    <section className='flex flex-col justify-center items-center w-full overflow-x-hidden'>
      <header>
        <h3 className='text-center text-transparent font-bold sm:text-xl bg-clip-text bg-gradient-to-b from-blue-400 to-blue-500'>
          Trusted by 3,059+ companies
        </h3>
        <Carousel />
      </header>

      <footer className='w-11/12 sm:w-3/5 grid grid-cols-12 gap-4 sm:gap-10 my-6'>
        <div className='col-span-12 bg-dark/90 text-white py-4 px-8 rounded-xl'>
          <h1 className='text-2xl sm:text-4xl font-bold'>800k+</h1>
          <h2 className='text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-300 to-blue-500 mb-4'>
            Matches Made
          </h2>
          <p className='sm:text-lg text-gray-300'>
            JobWell has been relied upon by the world's top companies to
            discover and recruit the individuals crucial to their success. Since
            our inception, we've facilitated over 800 hundred thousand
            successful matches.
          </p>
        </div>
        <div className='col-span-6 bg-gradient-to-b from-gray-300 to-gray-100 p-8 rounded-xl flex flex-col justify-center items-start'>
          <h3 className='text-2xl sm:text-4xl font-bold'>40k+</h3>
          <p className='text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-blue-300 to-blue-500'>
            Jobs
          </p>
        </div>
        <div className='col-span-6 text-white bg-gradient-to-b from-blue-600 to-blue-400 p-8 rounded-xl flex flex-col justify-center items-start'>
          <h3 className='text-2xl sm:text-4xl font-bold'>170k+</h3>
          <p className='text-lg sm:text-xl font-semibold text-gray-200'>
            Candidates
          </p>
        </div>
      </footer>
    </section>
  );
};
export default CTA;
