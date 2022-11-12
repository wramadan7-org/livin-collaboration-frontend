import React, { useEffect, useState } from 'react';
import '@fontsource/poppins';
import { Element } from 'react-scroll';
import NavbarDefault from '../components/NavbarComponent';
import LandingPage from '../components/LandingPage';
import AboutPage from '../components/AboutPage';
import FeatureComponent from '../components/FeatureComponent';
import ContactComponent from '../components/ContactComponent';

export default function LivinWebsite() {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controllNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 90) {
        setShow(true);
      } else {
        setShow(false);
      }

      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    console.log('parent scroll', window.scrollY);
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controllNavbar);

      return () => { window.removeEventListener('scroll', controllNavbar); };
    }
  }, [lastScrollY]);

  return (
    <div className="flex flex-1 flex-col w-max" style={{ background: '#1F2E35', width: '100%', paddingBottom: '150px' }}>
      <div className="fixed flex flex-col top-0 left-0 right-0 bg-[#1F2E35]">
        <div
          className="flex flex-col px-2 sm:px-6 lg:px-8"
          style={{
            color: '#FFFFFF',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
          }}
        >
          <NavbarDefault prevScrollPos={lastScrollY} isShow={show} />
        </div>
      </div>

      <div
        id="landingpage"
        className="flex flex-col px-2 sm:px-6 lg:px-8"
        style={{
          color: '#FFFFFF',
          fontFamily: 'Poppins',
          fontStyle: 'normal',
        }}
      >
        <LandingPage />
      </div>

      <div className="border h-0 flex mt-24 mb-24" />

      <Element name="aboutelement" className="aboutelement">
        <div
          id="aboutpage"
          className="flex flex-col px-2 sm:px-6 lg:px-8"
          style={{
            color: '#FFFFFF',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
          }}
        >
          <AboutPage />
        </div>
      </Element>

      <div
        className="h-10 mt-36"
        style={{
          backgroundColor: '#30AA9F',
        }}
      />

      <Element name="featureelement" className="featureelement">
        <div
          id="featurepage"
          className="flex flex-col px-2 sm:px-6 lg:px-8"
          style={{
            color: '#FFFFFF',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
          }}
        >
          <FeatureComponent />
        </div>
      </Element>

      <div className="border h-0 flex mt-24" />

      <Element name="contactelement" className="contactelement">
        <div
          id="contacpage"
          className="flex flex-col px-2 sm:px-6 lg:px-8"
          style={{
            color: '#FFFFFF',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
          }}
        >
          <ContactComponent />
        </div>
      </Element>
    </div>
  );
}
