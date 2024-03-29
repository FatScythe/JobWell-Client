import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// Image
import logo from "../../../asset/image/jobwell-logo.png";
// Icons
import { BarIcon, CancelIcon, SearchIcon } from "../icons";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [openNav, setOpenNav] = useState(false);

  return (
    <section className='relative'>
      <div className='sm:hidden flex justify-between items-center px-2 py-4 bg-white/90 backdrop-blur fixed left-0 right-0 -top-4'>
        <button
          className='bg-gray-50 p-2 border border-gray-300 rounded-md'
          onClick={() => setOpenNav(true)}
        >
          <BarIcon />
        </button>

        <div>
          <Image src={logo} alt='logo' width={50} height={50} />
        </div>

        <button className='bg-gray-50 p-2 border border-gray-300 rounded-md'>
          <SearchIcon />
        </button>
      </div>
      <nav
        id='topnav'
        className={`bg-white backdrop-blur sm:bg-white/90 p-2 sm:p-0 fixed -top-4 sm:left-0 sm:right-0 sm:-top-4 ${
          openNav ? "-top-4 -left-0" : "-left-full"
        } w-full flex flex-col sm:flex-row justify-between items-center py-6 sm:py-2 sm:px-6 -bottom-6 sm:h-fit transition-all duration-500`}
      >
        <div className='w-full sm:w-fit'>
          <button
            className='sm:hidden flex justify-end items-center w-full'
            onClick={() => setOpenNav(false)}
          >
            <CancelIcon className='w-14 h-14 pr-3' />
          </button>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src={logo} alt='logo' width={100} height={100} />
            <h3 className='sm:hidden font-bold text-3xl'>JobWell</h3>
          </div>
        </div>

        <ul className='flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-10 font-bold text-xl sm:font-semibold sm:text-lg text-gray-700'>
          <Link className={`link ${pathname === "/" ? "active" : ""}`} href='/'>
            <li>Home</li>
          </Link>
          <Link
            className={`link ${pathname === "/jobs" ? "active" : ""}`}
            href='/jobs'
          >
            <li>Find Job</li>
          </Link>
          <Link
            className={`link ${pathname === "/hire" ? "active" : ""}`}
            href='/talents'
          >
            <li>Hire Talent</li>
          </Link>
          <Link
            className={`link ${pathname === "/about" ? "active" : ""}`}
            href='/about'
          >
            <li>About</li>
          </Link>
        </ul>

        <div className='flex flex-col sm:flex-row justify-evenly items-center w-full sm:w-fit text-lg sm:text-base font-bold sm:font-semibold gap-4'>
          <button className='w-full sm:w-fit border border-gray-500 px-3 py-2 text-gray-600 rounded-md'>
            Sign Up
          </button>
          <button className='w-full sm:w-fit bg-blue-700 border border-transparent px-3 py-2 text-white rounded-md'>
            Log In
          </button>
        </div>
      </nav>
    </section>
  );
};
export default Navbar;
