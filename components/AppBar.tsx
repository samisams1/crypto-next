import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AppBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="mb-8">
      <nav className="relative flex flex-col sm:flex-row justify-between items-center py-4 px-4 sm:px-8 md:px-16">
        <div className="flex justify-center w-full sm:w-1/4">
          <Link href="/">
            <Image
              src={`/assets/layout/logo.png`}
              alt="image"
              width={190}
              height={280}
            />
          </Link>
        </div>
        <div className="hidden sm:flex justify-center w-1/2 space-x-8">
          <Link href="/exchange">
            <span className="text-[#FFFFFF] py-4 hover:text-[#9945FF]">
              Exchange
            </span>
          </Link>
          <Link href="/last-transactions">
            <span className="text-[#FFFFFF] py-4 hover:text-[#9945FF]">
              Last Transactions
            </span>
          </Link>
          <Link href="/invite-friend">
            <span className="text-[#FFFFFF] py-4 hover:text-[#9945FF]">
              Invite Friend
            </span>
          </Link>
          <Link href="/notifications">
            <span className="text-[#FFFFFF] py-4 hover:text-[#9945FF]">
              Notifications
            </span>
          </Link>
        </div>
        <div className="sm:hidden flex flex-col mt-4 items-start w-full">
          <button
            className="text-[#FFFFFF] px-4 py-2 rounded-tl-md rounded-br-md border border-[#9945FF] w-full"
            onClick={toggleMenu}
          >
            Menu
          </button>
          {isMenuOpen && (
            <div className="flex flex-col mt-4 items-start w-full space-y-2">
              <Link href="/exchange">
                <span className="text-[#FFFFFF] py-2 px-4 w-full hover:bg-[#9945FF] hover:text-[#FFFFFF] hover:rounded-tl-md hover:rounded-br-md">
                  Exchange
                </span>
              </Link>
              <Link href="/last-transactions">
                <span className="text-[#FFFFFF] py-2 px-4 w-full hover:bg-[#9945FF] hover:text-[#FFFFFF] hover:rounded-tl-md hover:rounded-br-md">
                  Last Transactions
                </span>
              </Link>
              <Link href="/invite-friend">
                <span className="text-[#FFFFFF] py-2 px-4 w-full hover:bg-[#9945FF] hover:text-[#FFFFFF] hover:rounded-tl-md hover:rounded-br-md">
                  Invite Friend
                </span>
              </Link>
              <Link href="/notifications">
                <span className="text-[#FFFFFF] py-2 px-4 w-full hover:bg-[#9945FF] hover:text-[#FFFFFF] hover:rounded-tl-md hover:rounded-br-md">
                  Notifications
                </span>
              </Link>
              <Link href="/login">
                <span
                  className="text-[#FFFFFF] px-4 py-2 rounded-tl-md rounded-br-md border border-[#9945FF] hover:bg-[#9945FF] hover:text-[#FFFFFF] w-full"
                >
                  LOG IN
                </span>
              </Link>
              <Link href="/signup">
                <span
                  className="text-[#FFFFFF] bg-[#9945FF] px-4 py-2 rounded-tl-md rounded-br-md border border-[#9945FF] hover:bg-[#FFFFFF] hover:text-[#9945FF] w-full"
                >
                  SIGN UP
                </span>
              </Link>
            </div>
          )}
        </div>
        <div className="hidden sm:flex justify-center sm:w-1/4 space-x-2">
          <Link href="/login">
            <span
              className="text-[#FFFFFF] px-4 py-2 rounded-tl-md rounded-br-md border border-[#9945FF] hover:bg-[#9945FF] hover:text-[#FFFFFF] w-full sm:w-auto"
            >
              LOG IN
            </span>
          </Link>
          <Link href="/signup">
            <span
              className="text-[#FFFFFF] bg-[#9945FF] px-4 py-2 rounded-tl-md rounded-br-md border border-[#9945FF] hover:bg-[#FFFFFF] hover:text-[#9945FF] w-full sm:w-auto"
            >
              SIGN UP
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default AppBar;