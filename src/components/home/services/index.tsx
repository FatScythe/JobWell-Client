import {
  BriefCaseIcon,
  BulbIcon,
  DocumentIcon,
  UsersIcon,
} from "@/components/icons";

export const Services = () => {
  return (
    <section className='px-4 bg-slate-100/60 py-10 flex flex-col justify-start lg:justify-center lg:items-center'>
      <header className='flex flex-col justify-start items-start lg:w-3/5 lg:mx-auto lg:text-center'>
        <h3 className='w-full text-transparent font-bold lg:text-xl bg-clip-text bg-gradient-to-b from-blue-300 to-blue-500'>
          Swift employment
        </h3>
        <h2 className='w-full text-2xl lg:text-3xl text-black/80 font-bold'>
          Unlock limitless career possibilities
        </h2>
        <p className='lg:text-xl lg:font-semibold w-11/12 lg:mx-auto text-black/80 my-6'>
          Everything you need to land your dream job. Connect with
          opportunities, discover your potential, and embark on a fulfilling
          career path effortlessly.
        </p>
      </header>

      <main className='my-6 lg:w-2/3 lg:mx-auto grid grid-cols-6 gap-6 lg:gap-12'>
        <div className='flex justify-start items-start gap-6 col-span-6 lg:col-span-3'>
          <div className='bg-blue-600 p-2 rounded-md'>
            <BriefCaseIcon className='w-7 h-7 fill-transparent text-white' />
          </div>
          <div className='flex flex-col justify-between items-start gap-2'>
            <h3 className='font-semibold text-lg'>Tailored Matches</h3>
            <p className='text-sm lg:text-base text-black/80'>
              Find jobs that align perfectly with your skills and aspirations
              through our advanced matching algorithms, ensuring personalized
              career opportunities that match your unique profile.
            </p>
          </div>
        </div>
        <div className='flex justify-start items-start gap-6 col-span-6 lg:col-span-3'>
          <div className='bg-blue-600 p-2 rounded-md'>
            <UsersIcon className='w-7 h-7 fill-transparent text-white' />
          </div>
          <div className='flex flex-col justify-between items-start gap-2'>
            <h3 className='font-semibold text-lg'>Effortless Networking</h3>
            <p className='text-sm lg:text-base text-black/80'>
              Seamlessly connect with industry professionals, mentors, and
              potential employers, expanding your professional network
              effortlessly to enhance your career growth.
            </p>
          </div>
        </div>
        <div className='flex justify-start items-start gap-6 col-span-6 lg:col-span-3'>
          <div className='bg-blue-600 p-2 rounded-md'>
            <BulbIcon className='w-7 h-7 fill-transparent text-white' />
          </div>
          <div className='flex flex-col justify-between items-start gap-2'>
            <h3 className='font-semibold text-lg'>Resourceful Insights</h3>
            <p className='text-sm lg:text-base text-black/80'>
              Gain valuable insights into market trends, salary benchmarks, and
              industry demands, empowering you with the knowledge to make
              informed career decisions and negotiate effectively.
            </p>
          </div>
        </div>
        <div className='flex justify-start items-start gap-6 col-span-6 lg:col-span-3'>
          <div className='bg-blue-600 p-2 rounded-md'>
            <DocumentIcon className='w-7 h-7 fill-transparent text-white' />
          </div>
          <div className='flex flex-col justify-between items-start gap-2'>
            <h3 className='font-semibold text-lg'>Application Tracker</h3>
            <p className='text-sm lg:text-base text-black/80'>
              Keep tabs on your job applications with our intuitive tracker,
              streamlining the process and providing real-time updates on your
              application status for a stress-free job search experience.
            </p>
          </div>
        </div>
      </main>

      <footer className='flex justify-center items-center gap-4'>
        <button className='bg-transparent border border-transparent px-8 py-3 text-blue-500 rounded-md font-semibold sm:font-bold hover:bg-black/10 duration-300'>
          Learn More
        </button>
        <button className='bg-blue-700 border border-transparent px-8 py-3 text-white rounded-md font-semibold sm:font-bold hover:bg-blue-600 duration-300'>
          Get Started
        </button>
      </footer>
    </section>
  );
};
