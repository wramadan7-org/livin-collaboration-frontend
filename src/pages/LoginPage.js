import React, { useState } from 'react';
import '@fontsource/poppins';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-bootstrap';
import LoginImage from '../assets/images/LoginImage.png';
import NavbarLoginRegister from '../components/NavbarLoginRegister';
import loginAction from '../reduxs/actions/authAction';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const detailState = useSelector((state) => state.authReducer);

  console.log('detail', detailState);

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    const actionLogin = dispatch(loginAction.login({ username, password }));

    console.log('STATUS', actionLogin.payload);
  };

  return (
    <div className="flex flex-1 flex-col w-max" style={{ background: '#1F2E35', width: '100%', paddingBottom: '150px' }}>
      <div className="flex flex-col top-0 left-0 right-0 bg-[#1F2E35]">
        <div
          className="flex flex-col px-2 sm:px-6 lg:px-8"
          style={{
            color: '#FFFFFF',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
          }}
        >
          <NavbarLoginRegister fromPage="login" />
        </div>

        <div
          className="flex flex-col px-2 sm:px-6 lg:px-8"
          style={{
            color: '#FFFFFF',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
          }}
        >
          <div className="pl-11 pr-11 pt-14">
            <div
              className="flex lg:flex-row lg:justify-between lg:items-center xl:flex-row xl:justify-between xl:items-center md:flex-col md:justify-center md:items-center sm:flex-col sm:justify-center sm:items-center xsm:flex-col xsm:justify-center xsm:items-center"
              style={{

              }}
            >
              <div
                className="flex flex-1"
                style={{
                  width: '566px',
                  height: '566px',
                }}
              >
                <Image
                  src={LoginImage}
                  style={{
                    width: '566px',
                    height: 'auto',
                    maxWidth: '100%',
                  }}
                  alt="LoginPageImage"
                />
              </div>

              <div className="flex flex-1 px-10 items-center justify-center">
                <div className="bg-white flex flex-1 flex-col px-10 py-5 shadow-md rounded">
                  <div className="text-black">
                    <h2>Welcome Back</h2>
                  </div>

                  <div className="text-[#736767]">
                    <span>Login your account</span>
                  </div>

                  <div>
                    <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleLogin}>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                          Username
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="username"
                          type="text"
                          placeholder="Username"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                        {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                      </div>
                      <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                          Password
                        </label>
                        <input
                          className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          id="password"
                          type="password"
                          placeholder="******************"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                      </div>
                      <div className="flex items-center justify-between">
                        <button className="bg-[#02897A] hover:bg-[#178073] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                          Login
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                          Forgot Password?
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
