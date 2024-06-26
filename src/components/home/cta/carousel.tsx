import {
  Company1,
  Company2,
  Company3,
  Company4,
  Company5,
  Company6,
} from "@/components/icons";

const Carousel = () => {
  return (
    <div className='max-w-7xl [mask-image:linear-gradient(to_right,transparent,white_40%,white_60%,transparent)]'>
      <div className='flex justify-start sm:justify-center items-center gap-20 sm:gap-32 overflow-x-hidden'>
        <div className='flex justify-between items-center gap-14 sm:gap-24 animate-infinite-scroll'>
          <Company1 />
          <Company2 />
          <Company3 />
          <Company4 />
          <Company5 />
          <Company6 />
        </div>
        <div className='flex justify-between items-center gap-14 sm:gap-24 animate-infinite-scroll'>
          <Company1 />
          <Company2 />
          <Company3 />
          <Company4 />
          <Company5 />
          <Company6 />
        </div>
      </div>
    </div>
  );
};
export default Carousel;
