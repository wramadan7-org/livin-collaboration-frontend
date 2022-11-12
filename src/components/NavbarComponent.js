import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { CgProfile } from 'react-icons/cg';
import Scroll from 'react-scroll';
import { Link } from 'react-router-dom';
// import Dropdown from 'react-bootstrap/Dropdown';

const ScrollLink = Scroll.Link;

export default function NavbarDefault({ prevScrollPos, isShow }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin(!isLogin);
  };

  useEffect(() => {

  }, [isLogin, prevScrollPos]);

  return (
    <div>
      <nav hidden={isShow}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center justify-between flex-1">
              <div className="flex-shrink-0">
                <span>Livin&apos; Collaboration</span>
              </div>

              <div className="sm:hidden xsm:hidden md:hidden:block">
                <div className="ml-10 flex items-center space-x-4">
                  <a
                    href="#"
                  >
                    <ScrollLink
                      to="aboutelement"
                      spy
                      smooth
                      duration={500}
                      className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                      activeClass="active"
                    >
                      About
                    </ScrollLink>
                  </a>

                  <a
                    href="#"
                  >
                    <ScrollLink
                      to="featureelement"
                      spy
                      smooth
                      duration={500}
                      className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                      activeClass="active"
                    >
                      Feature
                    </ScrollLink>
                  </a>

                  <a
                    href="#"
                  >
                    <ScrollLink
                      to="contactelement"
                      spy
                      smooth
                      duration={500}
                      className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                      activeClass="active"
                    >
                      Contact
                    </ScrollLink>
                  </a>

                  {
                    !isLogin
                      ? (
                        <div className="flex flex-row w-56 justify-between items-center">
                          <Link to="/login">
                            <button className="border border-white w-24 h-9 rounded hover:bg-[#126158] hover:text-[#979797] text-white" type="submit">Login</button>
                          </Link>

                          <button className="w-24 h-9 rounded bg-[#02897A] hover:bg-[#126158] hover:text-[#979797] text-white" type="submit">
                            Register
                          </button>
                        </div>
                      )
                      : (
                        <div className="flex flex-row items-center">
                          <div className="h-10 flex flex-row items-center">
                            <CgProfile size={35} />

                            <span className="ml-2 font-medium text-white">Wahyu Ramadan</span>
                          </div>

                          <div className="w-20 h-8 flex justify-center items-center rounded-sm ml-5">
                            <button
                              className="w-20 h-8 rounded-sm text-center bg-[#02897A] hover:bg-[#126158] hover:text-[#979797] text-white font-medium text-md"
                              type="submit"
                              onClick={handleLogin}
                            >
                              Logout
                            </button>
                          </div>
                        </div>
                      )
                  }
                </div>
              </div>
            </div>
            <div className="-mr-2 flex xl:hidden lg:hidden md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="xl:hidden lg:hidden md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                >
                  <ScrollLink
                    to="aboutelement"
                    spy
                    smooth
                    duration={500}
                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium text-center"
                  >
                    About
                  </ScrollLink>
                </a>

                <a
                  href="#"
                >
                  <ScrollLink
                    to="featureelement"
                    spy
                    smooth
                    duration={500}
                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium text-center"
                  >
                    Feature
                  </ScrollLink>
                </a>

                <a
                  href="#"
                >
                  <ScrollLink
                    to="contactelement"
                    spy
                    smooth
                    duration={500}
                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium text-center"
                  >
                    Contact
                  </ScrollLink>
                </a>

                {
                    !isLogin ? (

                      <div className="flex flex-1 flex-col mt-2">
                        <Link to="/login" className="border no-underline border-white flex px-3 py-2 rounded-md text-base font-medium text-center items-center justify-center hover:bg-[#126158] hover:text-[#979797] text-white">
                          <button className="flex flex-1 rounded-md text-base font-medium text-center items-center justify-center hover:bg-[#126158] hover:text-[#979797] text-white" type="submit">Login</button>
                        </Link>

                        <button className="flex px-3 py-2 rounded-md text-base font-medium text-center items-center justify-center mt-2 bg-[#02897A] hover:bg-[#126158] hover:text-[#979797] text-white" type="submit">
                          Register
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-1 flex-col mt-2">
                        <button className="flex px-3 py-2 rounded-md text-base font-medium text-center items-center justify-center mt-2 bg-[#02897A] hover:bg-[#126158] hover:text-[#979797] text-white" type="submit" onClick={handleLogin}>
                          Logout
                        </button>
                      </div>
                    )
                  }

              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}
