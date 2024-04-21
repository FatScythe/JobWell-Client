type testimonial = {
  id: number;
  name: string;
  text: string;
  role: string;
};

const testimonials: testimonial[] = [
  {
    id: 1,
    name: "abdullahi fahm",
    text: "I found my dream job within weeks of joining! The tailored matches were spot-on, and the support throughout the process was exceptional. Highly recommend!",
    role: "software developer",
  },
  {
    id: 2,
    name: "habiru tanimomo",
    text: "This platform exceeded my expectations. The insights on market trends were invaluable, and the seamless collaboration with the hiring team made the entire experience enjoyable. Thrilled with my new role!",
    role: "marketing specialist",
  },
  {
    id: 3,
    name: "aje omolewa",
    text: "As a seasoned professional, I appreciate the data-driven insights. It gave me a clear understanding of market demands and salary expectations, making negotiations more informed and successful.",
    role: "sales executive",
  },
  {
    id: 4,
    name: "olamilekan furqan",
    text: "The platform's efficiency and the personalized matches helped me land a role that perfectly fits my skills and aspirations. Couldn't be happier.",
    role: "graphics designer",
  },
  {
    id: 5,
    name: "anikulapo oludare",
    text: "Our recruitment process transformed with this platform. The automated workflows saved us time, and the post-hire support ensured a smooth integration for our new hires. A game-changer for any HR team.",
    role: "hr manager",
  },
];

export const Carousel = () => {
  return (
    <div className='flex justify-start sm:justify-center items-center gap-20 sm:gap-32 overflow-x-hidden group'>
      <div className='flex justify-between items-center gap-4 sm:gap-8 animate-infinite-scroll group-hover:animate-pause-scroll'>
        {testimonials.map((testimonial) => {
          return (
            <div
              key={testimonial.id}
              className='flex flex-col justify-between items-start w-80 sm:w-96 h-56 sm:h-48 bg-gray-100 p-5 border border-gray-300 rounded-lg'
            >
              <p className='text-black/70 text-sm'>{testimonial.text}</p>
              <div className='text-black/70 text-sm capitalize'>
                <h2>{testimonial.name}</h2>
                <h1 className='font-semibold text-black/80'>
                  {testimonial.role}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className='flex justify-between items-center gap-4 sm:gap-8 animate-infinite-scroll group-hover:animate-pause-scroll'>
        {testimonials.map((testimonial) => {
          return (
            <div
              key={testimonial.id}
              className='flex flex-col justify-between items-start w-80 sm:w-96 h-56 sm:h-48 bg-gray-100 p-5 border border-gray-300 rounded-lg'
            >
              <p className='text-black/70 text-sm'>{testimonial.text}</p>
              <div className='text-black/70 text-sm capitalize'>
                <h2>{testimonial.name}</h2>
                <h1 className='font-semibold text-black/80'>
                  {testimonial.role}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
