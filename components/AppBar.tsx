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
      <nav className="relative flex justify-between items-center py-4 px-4 sm:px-0">
        <div className="flex justify-center w-1/4 sm:w-auto">
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
            <span className="text-[#FFFFFF] py-4" style={{ marginLeft: '20px' }}>
              Exchange
            </span>
          </Link>
          <Link href="/last-transactions">
            <span className="text-[#FFFFFF] py-4" style={{ marginLeft: '20px' }}>
              Last Transactions
            </span>
          </Link>
          <Link href="/invite-friend">
            <span className="text-[#FFFFFF] py-4" style={{ marginLeft: '20px' }}>
              Invite Friend
            </span>
          </Link>
          <Link href="/notifications">
            <span className="text-[#FFFFFF] py-4" style={{ marginLeft: '20px' }}>
              Notifications
            </span>
          </Link>
        </div>
        <div className="flex justify-center w-1/4 space-x-4 sm:w-auto sm:space-x-2">
          <Link href="/login">
            <span
              className="text-[#FFFFFF] px-4 py-2 rounded-tl-md rounded-br-md border border-[#9945FF]"
              style={{
                marginLeft: '20px',
                width: '64px',
                height: '36px',
                gap: '10px',
                padding: '10px'
              }}
            >
              LOG IN
            </span>
          </Link>
          <Link href="/signup">
            <span
              className="text-[#FFFFFF] bg-[#9945FF] px-4 py-2 rounded-tl-md rounded-br-md border border-[#9945FF]"
              style={{
                marginLeft: '20px',
                width: '64px',
                height: '36px',
                gap: '10px',
                padding: '10px'
              }}
            >
              SIGN UP
            </span>
          </Link>
        </div>
        <div className="sm:hidden flex flex-col mt-4 items-start">
          <button
            className="text-[#FFFFFF] px-4 py-2 rounded-tl-md rounded-br-md border border-[#9945FF] w-full"
            onClick={toggleMenu}
          >
            Menu
          </button>
          {isMenuOpen && (
            <div className="flex flex-col mt-4 items-start">
              <Link href="/exchange">
                <span className="text-[#FFFFFF] py-2 px-4">Exchange</span>
              </Link>
              <Link href="/last-transactions">
                <span className="text-[#FFFFFF] py-2 px-4">Last Transactions</span>
              </Link>
              <Link href="/invite-friend">
                <span className="text-[#FFFFFF] py-2 px-4">Invite Friend</span>
              </Link>
              <Link href="/notifications">
                <span className="text-[#FFFFFF] py-2 px-4">Notifications</span>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default AppBar;