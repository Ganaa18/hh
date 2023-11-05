'use client'
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import LogoutButton from "./LogoutButton";
const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
      <Link href='/'>
        <h2 className="text-2xl text-white font-semibold">E-commerce</h2>
      </Link>
        <ul className="flex space-x-4">
        <li>
            <Link href='/addproduct'>
              <p className={
            clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathName === '/addproduct',
              },
            )
          }>add item</p>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <p className={
            clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathName === '/',
              },
            )
          }>Home</p>
            </Link>
          </li>
          <li>
            <Link href='/login'>
              <p className={
            clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathName === '/login',
              },
            )
          }>Login</p>
            </Link>
          </li>
          <li>
            <Link href='/signup'>
              <p className={
            clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathName === '/signup',
              },
            )
          }>signup</p>
            </Link>
          </li>
          <li>
              <LogoutButton/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
