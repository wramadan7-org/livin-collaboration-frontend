import React from 'react';
import { Image } from 'react-bootstrap';
import LogoImage from '../assets/images/Logo.png';

export default function AboutPage() {
  return (
    <div id="containerAboutPage" className="pl-11 pr-11 pt-14">
      <div className="flex flex-1 flex-col">
        <div
          className="flex flex-1 justify-center justify-items-center"
          style={{
            fontStyle: 'normal',
            lineHeight: '28px',
            fontWeight: 700,
            fontSize: '45px',
          }}
        >
          About
        </div>

        <div className="flex flex-1 pt-24 xl:flex-row lg:flex-row md:flex-row sm:flex-col sm:justify-center sm:items-center xsm:flex-col xsm:justify-center xsm:items-center">
          <div
            className="flex xl:mr-20 xl:justify-start lg:mr-20 lg:justify-start md:justify-start md:mr-20 sm:mr-0 sm:justify-center xsm:mr-0 xsm:justify-center"
            style={{
              width: '294px',
              height: '274px',
              // marginRight: '70px',
            }}
          >
            <Image
              src={LogoImage}
              style={{
                width: '204px',
                height: '274px',
              }}
              alt="LogoImage"
            />
          </div>
          {/* `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;` */}
          <div
            className="flex flex-1 flex-col"
            style={{
              // width: '842px',
              lineHeight: '30px',
              fontSize: '23px',
            }}
          >
            <div className="flex flex-1 sm:pt-10 xsm:pt-10" />
            <div className="flex xl:justify-end lg:justify-end md:justify-end sm:justify-center sm:items-center xsm:justify-center xsm:items-center">
              <p>
                Livin&apos; collaboration is a platform that unites
                industry people to collaborate with
                each other and form a joint project to accelerate the pace of economic
                growth by racing on one of the pillars of a smart city,
                namely the smart economy.

              </p>
            </div>
            <div className="flex flex-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
