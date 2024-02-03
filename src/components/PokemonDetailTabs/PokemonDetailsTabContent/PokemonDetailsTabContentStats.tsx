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
      {pokemon?.stats.map((item, index) => (
        <StatItem key={index} item={item} type={pokemon.types[0].type.name} />
      ))}
    </div>
  );
}
