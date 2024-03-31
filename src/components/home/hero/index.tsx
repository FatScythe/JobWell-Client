import { WorldIcon } from "../../icons";

export const Hero = () => {
  return (
    <section id='hero' className='py-14 my-20'>
      <main className='flex flex-col justify-center items-center gap-6 sm:gap-10'>
        <div className='flex justify-start items-center gap-2 cursor-pointer rounded-3xl bg-slate-100 border shadow-lg px-2 py-2 sm:py-1 text-xs sm:text-sm sm:hover:scale-110 sm:hover:-rotate-6 transition-all duration-200'>
          <div className='p-1 bg-blue-700 rounded-full'>
            <WorldIcon />
          </div>
          <span className='text-gray-600 sm:font-semibold'>
            Discover your dream job
          </span>
        </div>

        <div className='w-11/12 sm:w-3/5 text-3xl sm:text-6xl font-bold text-center text-transparent'>
          <h2 className='bg-clip-text bg-gradient-to-b from-gray-300 to-gray-700'>
            <span>Bridging the gap between </span>
            <span className='bg-clip-text bg-gradient-to-b from-blue-200 to-blue-500'>
              talent{" "}
            </span>
            <span className='bg-clip-text bg-gradient-to-b from-gray-400 to-gray-500'>
              and{" "}
            </span>
            <span className='bg-clip-text bg-gradient-to-b from-blue-200 to-blue-500'>
              employers
            </span>
          </h2>
        </div>

        <div className='w-10/12 sm:w-5/12 text-center'>
          <p className='text-gray-400 text-lg sm:text-xl font-semibold'>
            Explore endless oppurtunities for professional growth. Join today
            and unlock your true potential
          </p>
        </div>

        <div className='flex flex-col xs:flex-row justify-center items-center gap-4 font-semibold'>
          <button className='text-sm bg-blue-700 border border-transparent px-8 py-3 text-white rounded-md hover:bg-blue-600 duration-300'>
            Find Job
          </button>
          <button className='text-sm bg-gray-200 border border-transparent px-8 py-3 rounded-md hover:bg-gray-100 duration-300'>
            Hire Talent
          </button>
        </div>
      </main>
    </section>
  );
};
