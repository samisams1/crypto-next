import React from 'react';
import { Asset } from '../pages/api/assets';

const AssetBottom: React.FC = () => {
  return (
    <div className="mt-8 overflow-x-auto border border-[#4F4F4F] rounded-[10px] px-6 py-4 bg-black">
      <div className="flex items-center justify-between text-[#FAFAFA]">
        <span>SWAP TOKENS</span>
        <span className="text-[#666666]">setting icon</span>
      </div>
      <div className="flex items-center justify-between text-[#FAFAFA] mt-4">
        <div className="bg-[#1E1E1E] border border-[#4F4F4F] px-4 py-2">
          <span className="text-[50px] font-[600] font-['Roboto'] mr-[380px]">0.00</span>
          <span className="text-[#666666]">BNB</span>
          <span className="text-[#666666]">&gt;</span>
        </div>
        <div className="bg-[#1E1E1E] border border-[#4F4F4F] px-4 py-2 mr-4">
          <span className="text-[50px] font-[600] font-['Roboto'] mr-[400px]">0.00</span>
          <span className="text-[#666666]">BNB</span>
          <span className="text-[#666666]">&gt;</span>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className="text-[#FFFFFF] bg-[#9945FF] px-6 py-2 rounded-tl-md rounded-br-md border border-[#9945FF] font-medium">
          SWOP TOKENS
        </button>
      </div>
      <div className="flex items-center justify-between mt-4">
        <span style={{ color: '#FAFAFA' }}>1 BTC = 32.4039 ETH <p style={{ color: '#3980FF' }}>Free exchange</p></span>
        <span style={{ color: '#666666' }}>Updates in 4s</span>
      </div>
    </div>
  );
};

export default AssetBottom;