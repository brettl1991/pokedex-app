'use client';

import { getColorsByPokemonType } from '@/utils';
import { useEffect, useState } from 'react';

interface StatBarProps {
  type: string;
  stat: string;
  baseStat: number;
}

type baseStats = {
  [key: string]: number;
};

const MAX_BASE_STAT: baseStats = {
  hp: 255,
  attack: 190,
  defense: 250,
  'special-attack': 194,
  'special-defense': 250,
  speed: 200,
};

export default function StatBar({ type, stat, baseStat }: StatBarProps) {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setCompleted((baseStat * 100) / MAX_BASE_STAT[stat]);
  }, [baseStat, stat]);

  const bgColor = getColorsByPokemonType(type).backgroundColor;

  return (
    <div className="h-1 w-full bg-black bg-opacity-10 rounded-full overflow-hidden">
      <div
        style={{ width: `${completed}%`, backgroundColor: bgColor }}
        className={`h-full rounded-full transition-all ease-in-out duration-1000`}
      ></div>
    </div>
  );
}
