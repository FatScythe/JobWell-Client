import Image from "next/image";
import Link from "next/link";
// Image
import logo from "../../../asset/image/jobwell-logo.png";
import { MailIcon, PhoneIcon } from "../icons";
const Footer = () => {
  return (
    <footer className='flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-5 py-10 px-5 sm:py-20 sm:px-10 bg-gray-100 text-black/70'>
      <div className='sm:basis-2/6 lg:basis-3/12'>
        <div className='flex gap-3 justify-start items-center'>
          <div>
            <Image src={logo} alt='logo' width={50} height={50} />
          </div>
          <h2 className='text-2xl sm:text-3xl font-bold text-black/90'>
            JobWell<span className='text-5xl'>.</span>
          </h2>
        </div>
        <p className='font-semibold'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
          voluptates velit iure, molestiae temporibus dolor tempore ut
          architecto earum nobis.
        </p>
      </div>
      <div className='flex flex-col justify-start items-start gap-2 sm:basis-2/6 lg:basis-3/12 font-semibold'>
        <h2 className='text-lg text-black/70 font-bold'>Contact</h2>
        <h3>No.1 Address Street, City, State, Country.</h3>
        <h3 className='flex justify-start items-center gap-2'>
          <PhoneIcon /> <span>+234 700 000 00</span>
        </h3>
        <h3 className='flex justify-start items-center gap-2'>
          <MailIcon /> <span>mail@something.com</span>
        </h3>
      </div>
      <div className='flex flex-col justify-start items-start gap-2 sm:basis-2/6 lg:basis-3/12'>
        <h2 className='text-lg text-black/70 font-bold'>Links</h2>
        <ul className='flex flex-col justify-start items-start gap-3 font-semibold text-black/60'>
          <Link href='/'>
            <li>Home</li>
          </Link>
          <Link href='/jobs'>
            <li>Find Job</li>
          </Link>
          <Link href='/talents'>
            <li>Hire Talent</li>
          </Link>
          <Link href='/about'>
            <li>About</li>
          </Link>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
