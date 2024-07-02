import React, { useState } from 'react';
import Image from 'next/image';

const ResponsiveMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <a href="/" className="text-white font-bold text-xl font-family-Roboto">
              <Image
                src={`/assets/layout/logo.png`}
                alt="image"
                width={190}
                height={280}
              />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/"
              className="text-white font-family-Roboto px-3 py-2 rounded-md text-sm font-medium"
              style={{ fontWeight: 500, fontSize: '14px' }}
            >
              Exchange
            </a>
            <a
              href="/lastTransactions"
              className="text-white font-family-Roboto px-3 py-2 rounded-md text-sm font-medium"
              style={{ fontWeight: 500, fontSize: '14px' }}
            >
              Last Transactions
            </a>
            <a
              href="/inviteFriend"
              className="text-white font-family-Roboto px-3 py-2 rounded-md text-sm font-medium"
              style={{ fontWeight: 500, fontSize: '14px' }}
            >
              Invite Friend
            </a>
            <a
              href="/notifications"
              className="text-white font-family-Roboto px-3 py-2 rounded-md text-sm font-medium"
              style={{ fontWeight: 500, fontSize: '14px' }}
            >
              Notifications
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/login"
              className="text-white px-4 py-2 rounded-tl-md rounded-br-md border border-[#9945FF] font-family-Roboto font-medium"
              style={{ fontWeight: 500, fontSize: '14px' }}
            >
              Login
            </a>
            <a
              href="/signUp"
              className="text-white bg-[#9945FF] px-4 py-2 rounded-tl-md rounded-br-md border border-[#9945FF] font-family-Roboto font-medium hover:bg-[#7d36cc]"
              style={{ fontWeight: 500, fontSize: '14px' }}
            >
              Sign Up
            </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden ">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <a
              href="/"
              className="text-white font-family-Roboto block px-3 py-2 rounded-md text-base font-medium"
              style={{ fontWeight: 500, fontSize: '14px' }}
            >
              Exchange
            </a>
            <a
              href="/lastTransactions"
              className="text-white font-family-Roboto block px-3 py-2 rounded-md text-base font-medium"
              style={{ fontWeight: 500, fontSize: '14px' }}
            >
              Last Transactions
            </a>
            <a
              href="/inviteFriend"
              className="text-white font-family-Roboto block px-3 py-2 rounded-md text-base font-medium"
              style={{ fontWeight: 500, fontSize: '14px' }}
            >
              Invite Friend
            </a>
            <a
              href="/notifications"
              className="text-white font-family-Roboto block px-3 py-2 rounded-md text-base font-medium"
              style={{ fontWeight: 500, fontSize: '14px' }}
            >
              Notifications
            </a>
            <a
              href="/login"
              className="text-white px-4 py-2 rounded-tl-md rounded-br-md border border-[#9945FF] font-family-Roboto font-medium"
              style={{ fontWeight: 500, fontSize: '14px' }}
            >
              Login
            </a>
            <a
              href="/signUp"
              className="text-white bg-[#9945FF] px-4 py-2 rounded-tl-md rounded-br-md border border-[#9945FF] font-family-Roboto font-medium hover:bg-[#7d36cc]"
              style={{ fontWeight: 500, fontSize: '14px' }}
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default ResponsiveMenu;