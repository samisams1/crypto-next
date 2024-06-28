// components/AssetTable.tsx
import React from 'react';
import { Asset } from '../pages/api/assets';
import Image from 'next/image';

type AssetTableProps = {
  assets: Asset[];
};

const AssetTable: React.FC<AssetTableProps> = ({ assets }) => {
  return (
    <div className="mt-8 overflow-x-auto border border-[#4F4F4F] rounded-[10px] px-6 py-4 sm:px-4 sm:py-2">
      <table className="w-full table-auto shadow-md rounded-lg bg-black sm:text-sm">
        <thead>
          <tr className="text-[#FFFFFF] border-b border-[#4F4F4F]">
            <th className="py-4 px-6 text-left sm:px-4 sm:py-2 sm:text-left">ASSETS</th>
            <th className="py-4 px-6 text-left sm:px-4 sm:py-2 sm:text-left">LAST TRADE</th>
            <th className="py-4 px-6 text-right sm:px-4 sm:py-2 sm:text-right">24H%</th>
            <th className="py-4 px-6 text-right sm:px-4 sm:py-2 sm:text-right">24H CHANGE</th>
            <th className="py-4 px-6 text-right sm:px-4 sm:py-2 sm:text-right" style={{ color: '#3980FF' }}>MORE &gt;</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <tr
              key={asset.id}
              className={`${asset.dayChange >= 0 ? 'text-green-500' : 'text-red-500'} sm:text-xs`}
            >
              <td className="py-2 px-6 text-left sm:px-4 sm:py-1 sm:text-left flex items-center gap-2" style={{ color: '#FFFFFF' }}>
                <Image
                  src={`/assets/${asset.image}`}
                  alt="image"
                  width={32}
                  height={32}
                  className="sm:w-8 sm:h-8"
                />
                {asset.assets}<span style={{ color: '#666666' }}>/USD</span>
              </td>
              <td className="py-2 px-6 text-left sm:px-4 sm:py-1 sm:text-left" style={{ color: '#FFFFFF' }}>{asset.lastTrade}</td>
              <td className={`py-2 px-6 text-right sm:px-4 sm:py-1 sm:text-right ${asset.assets === "DOGE" ? 'text-[#6DFFDC]' : asset.assets === "ALGO" || asset.assets === "DOT" || asset.assets === "UNI" ? 'text-[#666666]' : ''}`}>
                ${asset.dayChange.toFixed(2)}%
              </td>
              <td className={`py-2 px-6 text-right sm:px-4 sm:py-1 sm:text-right ${asset.assets === "DOGE" ? 'text-[#6DFFDC]' : asset.assets === "ALGO" || asset.assets === "DOT" || asset.assets === "UNI" ? 'text-[#666666]' : ''}`}>
                ${asset.dayChangeAmount.toFixed(2)}
              </td>
              <td className="py-2 px-6 text-right sm:px-4 sm:py-1 sm:text-right">
                <button
                  className="bg-[#6DFF8B] text-black py-2 px-4 rounded-md hover:bg-[#5FE67E] sm:py-1 sm:px-2 sm:text-xs"
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