import { MoveDetail } from '@/types';
import { getColorsByPokemonType } from '@/utils';
import Image from 'next/image';

interface PokemonDetailsTabContentMovesProps {
  pokemonMoves: MoveDetail[];
}

export default function PokemonDetailsTabContentMoves({
  pokemonMoves,
}: PokemonDetailsTabContentMovesProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {pokemonMoves?.map((move, index) => (
        <div
          className="flex items-center justify-center gap-1 rounded-lg px-2"
          key={index}
          style={getColorsByPokemonType(move.type)}
        >
          <Image
            src={`/images/types/${move.type}.svg`}
            width={20}
            height={20}
            alt={`Type ${move.type}`}
            unoptimized
          />
          <span className={` py-2 text-white rounded-md capitalize text-sm`}>
            {move.name}
          </span>
        </div>
      ))}
    </div>
  );
}
