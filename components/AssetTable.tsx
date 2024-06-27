// components/AssetTable.tsx
import React from 'react';
import { Asset } from '../pages/api/assets';
import Image from 'next/image';

type AssetTableProps = {
  assets: Asset[];
};

const AssetTable: React.FC<AssetTableProps> = ({ assets }) => {
  return (
    <div className="mt-8 overflow-x-auto border border-[#4F4F4F] rounded-[10px] px-6 py-4">
      <table className="w-full table-auto shadow-md rounded-lg  bg-black">
        <thead>
          <tr className="text-[#FFFFFF] border-b border-[#4F4F4F]">
            <th className="py-4 px-6 text-left md:text-center">ASSETS</th>
            <th className="py-4 px-6 text-left md:text-center">LAST TRADE</th>
            <th className="py-4 px-6 text-right md:text-center">24H %</th>
            <th className="py-4 px-6 text-right md:text-center">24H CHANGE</th>
            <th className="py-4 px-6 text-right md:text-center" style={{ color: '#3980FF' }}>MORE > </th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <tr
              key={asset.id}
              className={`${asset.dayChange >= 0 ? 'text-green-500' : 'text-red-500'}`}
            >
              <td className="py-2 px-6 text-left md:text-center flex items-center gap-2">
                <Image
                  src={`/assets/${asset.image}`}
                  alt="image"
                  width={32}
                  height={32}
                />
                {asset.assets}
              </td>
              <td className="py-2 px-6 text-left md:text-center">{asset.lastTrade}</td>
              <td className="py-2 px-6 text-right md:text-center">${asset.dayChange.toFixed(2)}</td>
              <td className="py-2 px-6 text-right md:text-center">{asset.dayChangeAmount.toFixed(2)}%</td>
              <td className="py-2 px-6 text-right md:text-center">
                <button
                  className="bg-[#6DFF8B] text-black py-2 px-4 rounded-md hover:bg-[#5FE67E]"
                >
                  Trade
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetTable;