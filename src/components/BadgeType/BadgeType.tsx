import { getColorsByPokemonType } from '@/utils';
import Image from 'next/image';

interface BadgeTypeProps {
  type: string;
}

export default function BadgeType({ type }: BadgeTypeProps) {
  const typeColors = getColorsByPokemonType(type);

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Image
        src={`/images/types/${type}.svg`}
        width={32}
        height={32}
        alt={`Type ${type}`}
        unoptimized
      />
      <span
        className={`px-4 py-2 text-white rounded-md capitalize text-sm`}
        style={typeColors}
      >
        {type}
      </span>
    </div>
  );
}
