import React from 'react';
import Link from 'next/link';

const AppBar: React.FC = () => {
  return (
    <header className="mb-8">
      <nav className="flex justify-between items-center py-4">
        <div className="flex justify-center w-1/4">
          <Link href="/">
            <span className="text-[#FFFFFF] shadow-2xl font-extrabold" style={{ fontSize: '20.8px', height: '14px', top: '5.99px', left: '41.03px', gap: '0px', opacity: '1', fontWeight: '900', textShadow: '0 0 20px rgba(255, 255, 255, 0.5)' }}>
              BLOCKCHAIN
            </span>
          </Link>
        </div>
        <div className="flex justify-center w-1/2 space-x-8">
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
        <div className="flex justify-center w-1/4 space-x-4">
          <Link href="/login">
            <span className="text-[#FFFFFF] px-4 py-2 rounded-tl-md rounded-br-md border border-[#9945FF]" style={{ marginLeft: '20px', width: '64px', height: '36px', gap: '10px', padding: '10px' }}>
              LOG IN
            </span>
          </Link>
          <Link href="/signup">
          <span className="text-[#FFFFFF] bg-[#9945FF] px-4 py-2 rounded-tl-md rounded-br-md border border-[#9945FF]" style={{ marginLeft: '20px', width: '64px', height: '36px', gap: '10px', padding: '10px' }}>

              SIGN UP
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default AppBar;