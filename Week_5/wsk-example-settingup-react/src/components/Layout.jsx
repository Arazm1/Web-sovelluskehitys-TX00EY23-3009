import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router';
import { useUserContext } from '../hooks/contextHooks.js';

const Layout = () => {
  const { user, handleAutoLogin } = useUserContext();

  useEffect(() => {
    handleAutoLogin();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="w-full">
        <ul className="flex justify-end list-none m-0 p-0 overflow-hidden bg-[#333333]">
          <li>
            <Link
              to="/"
              className="block text-white text-center p-4 no-underline hover:bg-[#111111]"
            >
              Home
            </Link>
          </li>

          {user && (
            <>
              <li>
                <Link
                  to="/profile"
                  className="block text-white text-center p-4 no-underline hover:bg-[#111111]"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/upload"
                  className="block text-white text-center p-4 no-underline hover:bg-[#111111]"
                >
                  Upload
                </Link>
              </li>
              <li>
                <Link
                  to="/logout"
                  className="block text-white text-center p-4 no-underline hover:bg-[#111111]"
                >
                  Logout
                </Link>
              </li>
            </>
          )}

          {!user && (
            <li>
              <Link
                to="/login"
                className="block text-white text-center p-4 no-underline hover:bg-[#111111]"
              >
                Login/Register
              </Link>
            </li>
          )}
        </ul>
      </nav>

      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
