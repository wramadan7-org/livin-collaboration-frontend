import React from 'react';
import { Image } from 'react-bootstrap';
import { MdDone } from 'react-icons/md';
import LaptopImage from '../assets/images/Amico.png';

export default function FeatureComponent() {
  return (

    <div id="containerFeatureComponent" className="pl-11 pr-11 pt-24">
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
          Features
        </div>

        <div className="flex flex-1 pt-24 xl:flex-row lg:flex-row md:flex-col md:justify-center sm:flex-col xsm:flex-col">
          <div
            className="flex justify-center"
          >
            <Image
              src={LaptopImage}
              style={{
                width: '534px',
                height: '500px',
              }}
              alt="LaptopImage"
            />
          </div>

          <div className="flex flex-col xl:justify-center lg:justify-center md:items-center sm:items-center xsm:flex-center flex-1">
            <div
              className="flex flex-col items-start justify-evenly ml-16"
              style={{
                height: '327px',
              }}
            >
              <div className="flex flex-row items-center justify-center">
                <div
                  className="flex items-center justify-center mr-6"
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '100%',
                    backgroundColor: '#233C96',
                  }}
                >
                  <MdDone
                    color="#FFFFFF"
                    style={{
                      width: '20px',
                      height: '20px',
                    }}
                  />
                </div>

                <div>Find and Join</div>
              </div>

              <div className="flex flex-row items-center justify-center">
                <div
                  className="flex items-center justify-center mr-6"
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '100%',
                    backgroundColor: '#0CA1A6',
                  }}
                >
                  <MdDone
                    color="#FFFFFF"
                    style={{
                      width: '20px',
                      height: '20px',
                    }}
                  />
                </div>

                <div>Project Management</div>
              </div>

              <div className="flex flex-row items-center justify-center">
                <div
                  className="flex items-center justify-center mr-6"
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '100%',
                    backgroundColor: '#FFFF00',
                  }}
                >
                  <MdDone
                    color="#FFFFFF"
                    style={{
                      width: '20px',
                      height: '20px',
                    }}
                  />
                </div>

                <div>Connections and Interactions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
