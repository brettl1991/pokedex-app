import LoadMore from "@/components/LoadMore/LoadMore";
import Loader from "@/components/Loader/Loader";
import PokemonList from "@/components/PokemonList/PokemonList";
import SearchBar from "@/components/SearchBar/SearchBar";
import localFont from "next/font/local";
import { Suspense } from "react";

const pokemonFont = localFont({
  src: "fonts/Pokemon Solid.ttf",
});

interface HomeProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Home({ searchParams }: HomeProps) {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  return (
    <div>
      <div className="flex justify-center items-start bg-[url('/images/bg-title.png')] bg-contain bg-center bg-repeat-x sm:p-4">
        <h1
          className={`text-center text-5xl font-bold text-[#fbc418] ${pokemonFont.className} title`}
        >
          Choose your Pokémon
        </h1>
      </div>
      <div className="p-6 md:px-10 lg:px-40">
        <div className="flex flex-col items-center space-y-4 max-w-max mx-auto">
          <SearchBar search={search} />
          <Suspense fallback={<Loader />} key={search}>
            <PokemonList query={search} />
          </Suspense>
          {!search && <LoadMore />}
        </div>
      </div>
    </div>
  );
}
