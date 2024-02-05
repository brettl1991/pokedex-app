import { Pokemon } from "@/types";
import Image from "next/image";
import Link from "next/link";
import BadgeType from "../BadgeType/BadgeType";
import { getColorsByPokemonType } from "@/utils";

interface PokemonItemProps {
  pokemon: Pokemon;
}

export default function PokemonItem({ pokemon }: PokemonItemProps) {
  const imageUrl =
    pokemon.sprites.other["official-artwork"].front_default ||
    pokemon.sprites.front_default ||
    "/images/placeholder.png";

  const type = pokemon.types[0].type.name;
  const bgColor = getColorsByPokemonType(type).backgroundColor;
  return (
    <Link href={`/pokemon/${pokemon.id}`} passHref>
      <div
        style={{ backgroundColor: bgColor }}
        className="flex flex-col items-center justify-center p-4 bg-white border border-gray-300 rounded-2xl shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
      >
        {imageUrl && (
          <div
            className={`w-24 h-24 ${
              imageUrl === "/images/placeholder.png"
                ? "flex items-center justify-center overflow-hidden"
                : ""
            }`}
          >
            <Image
              src={imageUrl}
              alt={`Image of ${pokemon.name}`}
              width={156}
              height={156}
              className="object-cover"
              layout="responsive"
              unoptimized
            />
          </div>
        )}
        <span className="text-black text-sm no-underline no-underline">
          #{pokemon.id}
        </span>
        <h2 className="mt-2 text-lg font-bold capitalize no-underline">
          {pokemon.name}
        </h2>
        <div className="flex items-center justify-center mt-2 gap-1">
          {pokemon.types.map((type, index) => (
            <BadgeType type={type.type.name} key={index} />
          ))}
        </div>
      </div>
    </Link>
  );
}
