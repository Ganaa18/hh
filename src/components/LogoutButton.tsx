import React from 'react';
const LogoutButton = () => {
  return (
    <button className='flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-gray-100 font-medium  hover:text-red-500 md:flex-none md:justify-start md:p-2 md:px-3'>
      Logout
    </button>
  );
};

export default LogoutButton;
