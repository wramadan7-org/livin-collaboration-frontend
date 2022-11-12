import React from 'react';
import '@fontsource/poppins';
import { Button, Image } from 'react-bootstrap';
import OfficeImage from '../assets/images/AtOffice.png';

export default function LandingPage() {
  return (
    <div id="containerLandingPage" className="pl-11 pr-11 pt-14">
      <div className="flex lg:flex-row xl:flex-row md:flex-col md:justify-center md:items-center sm:flex-col sm:justify-center sm:items-center xsm:flex-col xsm:justify-center xsm:items-center">
        <div
          className="flex flex-1"
          style={{
            width: 518,
          }}
        >
          <div className="flex flex-col xl:text-start lg:text-start md:text-center sm:text-center">
            <div style={{
              fontWeight: 700,
              fontSize: '39px',
              lineHeight: '60px',
            }}
            >
              Find, Collab and Success Perfectly
            </div>

            <div style={{
              fontSize: '17px',
              lineHeight: '29px',
              marginTop: '40px',
            }}
            >
              <p>Find the new journey of collaboration work in the world.</p>
            </div>

            <div className="pt-9 flex mt-auto xl:items-start lg:items-start md:items-center xl:justify-start lg:justify-start md:justify-center sm:justify-center sm:items-center">
              <Button
                type="submit"
                style={{
                  width: 175,
                  height: 53,
                  background: '#02897A',
                  border: 'none',
                  marginBottom: '150px',
                }}
                variant="flat"
              >
                Get started

              </Button>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="flex justify-start">
            <Image
              src={OfficeImage}
              style={{
                width: '617px',
                height: '617px',
              }}
              alt="OfficeImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
