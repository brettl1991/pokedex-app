'use client';
import { useState, Fragment } from 'react';

interface PokemonDetailTabsProps {
  tabs: {
    label: string;
    content: JSX.Element;
  }[];
}

export default function PokemonDetailTabs({ tabs }: PokemonDetailTabsProps) {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].label);

  return (
    <div className="bg-white p-8 rounded-t-3xl mt-[-15px] overflow-auto h-[290px]">
      <div className="flex justify-between space-x-2 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`font-semibold ${
              activeTab === tab.label
                ? 'border-b-2 border-black text-black'
                : 'text-gray-400'
            } pb-2 whitespace-nowrap text-sm sm:text-lg`}
            onClick={() => setActiveTab(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {tabs.map(
          (tab) =>
            tab.label === activeTab && (
              <Fragment key={tab.label}>{tab.content}</Fragment>
            )
        )}
      </div>
    </div>
  );
}
