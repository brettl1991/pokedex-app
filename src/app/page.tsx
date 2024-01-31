import localFont from "next/font/local";

const pokemonFont = localFont({
  src: "fonts/Pokemon Solid.ttf",
});

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-start p-8 bg-[url('/images/bg-title.png')] bg-contain bg-center bg-repeat-x sm:p-4">
        <h1
          className={`text-center text-5xl font-bold text-[#fbc418] ${pokemonFont.className} title`}
        >
          Choose your Pokémon
        </h1>
      </div>
      hello
    </div>
  );
}
