import Navbar from '../../components/Navbar';
import React, { useState } from 'react';

const Login = () => {
  return (<>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded shadow-md w-96" >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-semibold">Email:</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 font-semibold">Password:</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border rounded"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
            Login
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
