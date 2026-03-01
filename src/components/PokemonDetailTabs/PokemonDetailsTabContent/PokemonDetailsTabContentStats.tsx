import StatItem from '@/components/StatItem/StatItem';
import { Pokemon } from '@/types';

interface PokemonDetailsTabContentStatsProps {
  pokemon: Pokemon;
}

export default function PokemonDetailsTabContentStats({
  pokemon,
}: PokemonDetailsTabContentStatsProps) {
  return (
    <div>
      {pokemon?.stats.map((item) => (
        <StatItem
          key={item.stat.name}
          item={item}
          type={pokemon.types[0].type.name}
        />
      ))}
    </div>
  );
}
