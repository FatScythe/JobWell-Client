import { Carousel } from "./carousel";

export const Testimonials = () => {
  return (
    <section className='my-20'>
      <header className='w-11/12 mx-auto'>
        <h3 className='text-transparent bg-clip-text bg-gradient-to-b from-blue-300 to-blue-500 font-bold text-lg'>
          Quotes
        </h3>
        <h1 className='text-3xl font-bold'>From our users</h1>
        <p className='w-11/12 sm:w-1/2 sm:text-lg text-black/85 my-5 am:my-10'>
          Discover firsthand experiences and success stories. Hear from our past
          users and envision the possibilities that await you.
        </p>
      </header>
      <footer className='max-w-7xl [mask-image:linear-gradient(to_right,white,white_40%,white_60%,transparent)] sm:[mask-image:linear-gradient(to_right,transparent,white_40%,white_60%,transparent)] hover:cursor-grabbing'>
        <Carousel />
      </footer>
    </section>
  );
};
