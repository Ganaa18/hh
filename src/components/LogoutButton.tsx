// components/LogoutButton.js

import React from 'react';
const LogoutButton = () => {
  return (
    <button className='flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-red-500 hover:text-stone-50 md:flex-none md:justify-start md:p-2 md:px-3'>
      Logout
    </button>
  );
};

export default LogoutButton;
