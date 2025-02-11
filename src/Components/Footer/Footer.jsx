import React from 'react'
import ELeague from "../../assets/ELeague.png";
import Regalweb from "../../assets/Regalweb.png";
import SIH from "../../assets/SIH.png";
export const Footer = () => {
  return (

    <footer className="bg-white shadow dark:bg-gray-950 ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div>

          <blockquote className="relative text-center max-w-lg mx-auto">
            <div className="relative z-10">
              <p className="text-xl text-gray-800">
                <em className="relative">
                  <svg className="absolute top-0 left-0 transform -translate-x-8 -translate-y-8 h-16 w-16 text-gray-100 sm:h-24 sm:w-24 dark:text-gray-700" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor" />
                  </svg>
                  <span className="relative z-10 dark:text-white">"Your adventure begins with a single click. Register for the ultimate gaming experience."</span>
                </em>
                <br />
                <span className="relative z-10 text-sm text-gray-400">- E-League</span>
              </p>
            </div>
          </blockquote>


        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-950 lg:my-8" />
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between">
          <a href="https://regalweb.tech/" className="flex items-center mb-4 sm:mb-0 mt-5 md:mt-0">
            <img src={Regalweb} className="h-24 mr-3" alt="Regalweb Logo" />

          </a>
          <a href="https://www.sih.gov.in/" className="flex items-center mb-4 sm:mb-0 mt-5 md:mt-0">
            <img src={SIH} className="h-24 mr-3" alt="SIH Logo" />

          </a>
          <a href="google.com" className="flex items-center mb-4 sm:mb-0">
            <img src={ELeague} className="h-40 mr-2" alt="ELeague Logo" />

          </a>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://regalweb.tech/" className="hover:underline">Regalweb</a>. All Rights Reserved.</span>
      </div>
    </footer>


  )
}
