'use client'
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import LogoutButton from "./LogoutButton";
import { useUser } from "@/context/UserContext";
const Navbar = () => {
  const pathName = usePathname();
  const user = useUser();

  return (
    <div className="bg-slate-950 z-[999999]">
      <div className="fixed p-2 container mx-auto flex flex-col md:flex-row justify-between items-center" style={{ backdropFilter: 'blur(5px)', background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(27, 0, 0, 0.2), rgba(0, 0, 0, 0))' }}>
        <Link href='/'>
          <h2 className="text-2xl text-white font-semibold mb-4 md:mb-0">E-commerce</h2>
        </Link>
        <ul className="flex space-x-4">
          {user?.user && <li>
            <Link href='/addproduct'>
              <p className={
                clsx(
                  'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-gray-100 font-medium hover:text-blue-500 md:flex-none md:justify-start md:p-2 md:px-3',
                  {
                    'text-[#2196F3]': pathName === '/addproduct',
                  },
                )
              }>Add Item</p>
            </Link>
          </li>}
          <li>
            <Link href='/products'>
              <p className={
                clsx(
                  'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-gray-100 font-medium hover: hover:text-blue-500 md:flex-none md:justify-start md:p-2 md:px-3',
                  {
                    'text-[#2196F3]': pathName === '/products',
                  },
                )
              }>Products</p>
            </Link>
          </li>
          {user?.user && <li>
            <Link href='/ownproduct'>
              <p className={
                clsx(
                  'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-gray-100 font-medium hover: hover:text-blue-500 md:flex-none md:justify-start md:p-2 md:px-3',
                  {
                    'text-[#2196F3]': pathName === '/ownproduct',
                  },
                )
              }>My products</p>
            </Link>
          </li>}
          {!user?.user &&
            <>
              <li>
                <Link href='/login'>
                  <p className={
                    clsx(
                      'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-gray-100 font-medium hover: hover:text-blue-500 md:flex-none md:justify-start md:p-2 md:px-3',
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
                      'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-gray-100 font-medium hover: hover:text-blue-500 md:flex-none md:justify-start md:p-2 md:px-3',
                      {
                        ' text-blue-500': pathName === '/signup',
                      },
                    )
                  }>Signup</p>
                </Link>
              </li>
            </>
          }
          {user?.user &&
            <li>
              <LogoutButton />
            </li>}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
