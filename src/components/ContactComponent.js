import React from 'react';
import { Image } from 'react-bootstrap';
import { MdCopyright, MdEmail } from 'react-icons/md';
import { ImWhatsapp } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import LogoImage from '../assets/images/Logo.png';

export default function ContactComponent() {
  return (
    <div id="containerContactComponent" className="pl-11 pr-11 pt-24">
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
          Our Contact
        </div>

        <div
          className="
          mt-24
          flex
          flex-1
          xl:flex-row
          xl:justify-between
          xl:items-start
          lg:flex-row
          sm:flex-col
          xsm:flex-col
          md:flex-col
          lg:justify-between
          lg:items-start
          md:justify-between
          md:items-center
          sm:justify-between
          xsm:justify-center
          "
        >
          <div className="flex flex-1 flex-col xl:mt-0 lg:mt-0 md:mt-28 md:justify-center md:items-center sm:items-center sm:justify-center sm:mt-28 xsm:items-center xsm:justify-center xsm:mt-28">
            <div
              style={{ width: '376px' }}
            >
              <div
                className="flex flex-row md:justify-center md:items-center sm:items-center sm:justify-center xsm:items-center xsm:justify-center"
                style={{
                  weidth: '376px',
                  height: '36px',
                }}
              >
                <Image
                  src={LogoImage}
                  alt="LogoImage"
                  style={{
                    width: '27px',
                    height: '36px',
                  }}
                />

                <div
                  className="ml-6"
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                  }}
                >
                  Livin&apos; Collaboration
                </div>
              </div>

              <div
                className="mt-8 ml-2 flex md:justify-center md:items-center sm:items-center sm:justify-center xsm:items-center xsm:justify-center"
                style={{
                  fontWeight: 400,
                  fontSize: '18px',
                }}
              >
                Find, Collab and Success Perfectly
              </div>

              <div className="flex flex-1 flex-row justify-center items-center mt-8">
                <div>
                  <MdCopyright
                    color="#FFFFFF"
                    style={{
                      width: '18px',
                      height: '18px',
                    }}
                  />

                </div>

                <div className="ml-3">
                  Copyright Fynteam 2021
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col xl:mt-0 lg:mt-0 md:mt-28 md:justify-center md:items-center sm:items-center sm:justify-center sm:mt-28 xsm:items-center xsm:justify-center xsm:mt-28">
            <div
              className="md:flex md:flex-col md:justify-center md:items-center sm:flex sm:flex-col sm:items-center sm:justify-center xsm:flex xsm:flex-col xsm:items-center xsm:justify-center"
              style={{ width: '376px' }}
            >
              <div
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                }}
              >
                Contact
              </div>

              <div className="mt-8 md:text-center sm:text-center xsm:text-center">
                <label>Surabaya,</label>
                <br />
                <label>Jawa Timur, Indonesia</label>
                <br />
                <label>081 615 669 178</label>
                <br />
              </div>
            </div>

          </div>

          <div className="flex flex-1 flex-col xl:mt-0 lg:mt-0 md:mt-28 md:justify-center md:items-center sm:items-center sm:justify-center sm:mt-28 xsm:items-center xsm:justify-center xsm:mt-28">
            <div
              style={{ width: '376px' }}
              className="flex flex-col md:justify-center md:items-center sm:items-center sm:justify-center xsm:items-center xsm:justify-center"
            >
              <div
                className="flex flex-1 flex-row items-center mt-3"
                style={{
                  height: '50px',
                  width: '213px',
                }}
              >
                <ImWhatsapp style={{ width: '48px', height: '48px', color: '#02897A' }} />

                <div className="ml-4" style={{ fontWeight: 400, fontSize: '25px' }}>
                  WhatsApp
                </div>
              </div>

              <div
                className="flex flex-1 flex-row items-center mt-3"
                style={{
                  height: '50px',
                  width: '213px',
                }}
              >
                <BsInstagram style={{ width: '48px', height: '48px', color: '#02897A' }} />

                <div className="ml-4" style={{ fontWeight: 400, fontSize: '25px' }}>
                  Instagram
                </div>
              </div>

              <div
                className="flex flex-1 flex-row items-center mt-3"
                style={{
                  height: '50px',
                  width: '213px',
                }}
              >
                <MdEmail style={{ width: '48px', height: '48px', color: '#02897A' }} />

                <div className="ml-4" style={{ fontWeight: 400, fontSize: '25px' }}>
                  E-mail
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
