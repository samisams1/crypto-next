import React, { useState, useEffect } from 'react';
import { Asset } from '../pages/api/assets';
import Image from 'next/image';

const AssetTable: React.FC = () => {
  const [assets, setAssets] = useState<Asset[]>([]);

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const response = await fetch('/api/assets');
        const data = await response.json();
        setAssets(data);
      } catch (error) {
        console.error('Error fetching assets:', error);
      }
    };
    fetchAssets();
  }, []);

  return (
    <div className="mt-8 overflow-x-auto border border-[#4F4F4F] rounded-[10px] px-6 py-4 bg-black sm:px-4 sm:py-3 md:px-6 md:py-4">
      <table className="w-full table-auto">
        <thead>
          <tr className="text-[#FFFFFF] border-b border-[#4F4F4F] sm:py-2 sm:px-2 md:py-3 md:px-4">
            <th className="py-3 px-4 font-family: Roboto, text-left sm:py-1 sm:px-1 sm:text-sm md:py-3 md:px-4 md:text-base">ASSETS</th>
            <th className="py-3 px-4 text-left sm:py-1 sm:px-1 sm:text-sm md:py-3 md:px-4 md:text-base">LAST TRADE</th>
            <th className="py-3 px-4 text-right sm:py-1 sm:px-1 sm:text-sm md:py-3 md:px-4 md:text-base">24H%</th>
            <th className="py-3 px-4 text-right sm:py-1 sm:px-1 sm:text-sm md:py-3 md:px-4 md:text-base">24H CHANGE</th>
            <th className="py-3 px-4 text-right sm:py-1 sm:px-1 sm:text-sm md:py-3 md:px-4 md:text-base" style={{ color: '#3980FF' }}>MORE &gt;</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <tr
              key={asset.id}
              className={`${asset.dayChange >= 0 ? 'text-green-500' : 'text-red-500'} sm:text-xs md:text-base lg:text-base`}
              style={{
                height: '80px',
                padding: '8px 0',
                fontFamily: 'Roboto',
                fontWeight: 500,
              }}
            >
              <td className="py-2 px-4 text-left sm:py-1 sm:px-1 md:py-2 md:px-4 flex items-center gap-2" style={{ color: '#FFFFFF' }}>
                <Image
                  src={`/assets/${asset.image}`}
                  alt={asset.assets}
                  width={asset.image ? 48 : 0}
                  height={asset.image ? 48 : 0}
                  className={`sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain ${!asset.image && 'hidden'}`}
                />
                <span
                  className={`${!asset.image && 'ml-0'} sm:hidden md:inline md:mr-2 sm:text-sm sm:ml-2 md:text-base md:mr-4`}
                >
                  {asset.assets}
                </span>
                <span
                  className={`${!asset.image && 'ml-0'} sm:inline md:hidden lg:inline lg:mr-2 sm:text-sm sm:ml-2 md:text-base`}
                >
                  {asset.assets.slice(0, 3)}
                </span>
                <span style={{ color: '#666666' }} className="sm:hidden md:inline lg:inline">
                  /USD
                </span>
              </td>
              <td className="py-2 px-4 text-left sm:py-1 sm:px-1 md:py-2 md:px-4" style={{ color: '#FFFFFF' }}>
                <span className="sm:hidden md:inline lg:inline">{asset.lastTrade}</span>
                <span className="hidden sm:inline md:hidden lg:inline">{asset.lastTrade.slice(0, 8)}</span>
              </td>
              <td
                className={`py-2 px-4 text-right sm:py-1 sm:px-1 sm:text-sm md:py-2 md:px-4 md:text-base ${
                  asset.assets === 'DOGE'
                    ? 'text-[#6DFFDC]'
                    : asset.assets === 'ALGO' || asset.assets === 'DOT' || asset.assets === 'UNI'
                    ? 'text-[#666666]'
                    : ''
                }`}
              >
                {asset.dayChange.toFixed(2)}%
              </td>
              <td
                className={`py-2 px-4 text-right sm:py-1 sm:px-1 sm:text-sm md:py-2 md:px-4 md:text-base ${
                  asset.assets === 'DOGE'
                    ? 'text-[#6DFFDC]'
                    : asset.assets === 'ALGO' || asset.assets === 'DOT' || asset.assets === 'UNI'
                    ? 'text-[#666666]'
                    : ''
                }`}
              >
                ${asset.dayChangeAmount.toFixed(2)}
              </td>
              <td className="py-2 px-4 text-right sm:py-1 sm:px-1 md:py-2 md:px-4">
                <button
                  className="bg-[#6DFF8B] text-black py-2 px-4 hover:bg-[#5FE67E] sm:py-1 sm:px-2 sm:text-xs md:py-2 md:px-4 md:text-base"
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