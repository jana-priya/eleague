import React from 'react'
import Logo from '../../assets/Logo.png';
import Profile from '../../assets/Profile.png';
import { Link } from 'react-router-dom';
export const Navbar = () => {
  return (
    <div>
      <header className="text-gray-400 dark:bg-gray-950 body-font ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">

          <Link to='/'> <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0" >
            <img src={Logo} alt="Logo" width={50} />
            <span className="text-xl text-purple-500">E-LEAGUE</span>
          </div></Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">



            <Link to='/profile'> <img src={Profile} alt="profile" className='w-12 mr-5 rounded-full' /> </Link>

            <button className="inline-flex items-center border-0 focus:outline-none rounded text-base mt-4 md:mt-0 text-white w-24 mb-4 md:mb-0 "> Log out <pre> </pre>

              <svg xmlns="http://www.w3.org/2000/svg" className='text-white w-6 h-6 rotate-180' fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
              </svg>
            </button>

          </nav>

        </div>
      </header>
    </div>
  );
}
