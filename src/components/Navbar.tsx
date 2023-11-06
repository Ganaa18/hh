'use client'
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import LogoutButton from "./LogoutButton";
const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className="bg-gray-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
      <Link href='/'>
        <h2 className="text-2xl text-white font-semibold">E-commerce</h2>
      </Link>
        <ul className="flex space-x-4">
        <li>
            <Link href='/addproduct'>
              <p className={
            clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md  p-3 text-gray-100 font-medium hover: hover:text-blue-500 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                ' text-blue-500': pathName === '/addproduct',
              },
            )
          }>add item</p>
            </Link>
          </li>
          <li>
            <Link href='/products'>
              <p className={
            clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md  p-3 text-gray-100 font-medium hover: hover:text-blue-500 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                ' text-blue-500': pathName === '/products',
              },
            )
          }>Products</p>
            </Link>
          </li>
          <li>
            <Link href='/login'>
              <p className={
            clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md  p-3 text-gray-100 font-medium hover: hover:text-blue-500 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                ' text-blue-500': pathName === '/login',
              },
            )
          }>Login</p>
            </Link>
          </li>
          <li>
            <Link href='/signup'>
              <p className={
            clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md  p-3 text-gray-100 font-medium hover: hover:text-blue-500 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                ' text-blue-500': pathName === '/signup',
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
