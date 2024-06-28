import React from 'react';
import { Asset } from '../pages/api/assets';
import Image from 'next/image';

const AssetBottom: React.FC = () => {
  return (
    <div className="mt-8 overflow-x-auto border border-[#4F4F4F] rounded-[10px] px-6 py-4 bg-black">
      <div className="flex items-center justify-between text-[#FAFAFA]">
        <span>SWAP TOKENS</span>
        <span className="text-[#666666]"> <Image
        src={`/assets/layout/setting.png`}
        alt="image"
        width={19}
        height={28}
      /></span>
      </div>
      <div className="flex items-center justify-between text-[#FAFAFA] mt-4 space-x-2">
  <div className="bg-[#1E1E1E]  px-4 py-2 flex items-center justify-between w-1/2">
    <div className="flex items-center">
      <span className="text-[50px] font-[600] font-['Roboto']">0.00</span>
    </div>
    <span className="text-[#666666] flex items-center bg-black px-3 py-2 rounded-md ml-4" style={{
      width: '122px',
      height: '48px',
      opacity: '1',
    }}>
      <Image
        src={`/assets/layout/phCurrency.png`}
        alt="image"
        width={19}
        height={28}
      />
      <span className="ml-2">BTC &gt;</span>
    </span>
  </div>
 
  <div className="bg-[#1E1E1E]  px-4 py-2 flex items-center justify-between w-1/2">
  <div className="flex items-center">
      <span className="text-[50px] font-[600] font-['Roboto']">0.00</span>
    </div>
    <span className="text-[#666666] flex items-center bg-black px-3 py-2 rounded-md ml-4" style={{
      width: '122px',
      height: '48px',
      opacity: '1',
    }}>
      <Image
        src={`/assets/layout/bnb.png`}
        alt="image"
        width={19}
        height={28}
      />
      <span className="ml-2">BNB &gt;</span>
    </span>
  </div>
</div>
      <div className="flex justify-center mt-4">
        <button className="text-[#FFFFFF] bg-[#9945FF] px-6 py-2 rounded-tl-md rounded-br-md border border-[#9945FF] font-medium">
          SWOP TOKENS
        </button>
      </div>
      <div className="flex items-center justify-between mt-4">
        <span style={{ color: '#FAFAFA' }}>1  BTC = 32.4039 ETH <p style={{ color: '#3980FF' }}>Free exchange</p></span>
        <span style={{ color: '#666666' }}>Updates in 4s</span>
      </div>
    </div>
  );
};

export default AssetBottom;