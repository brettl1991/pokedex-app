import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-[#003366] border-b-5 border-[#111]">
      <nav className="flex flex-row flex-wrap justify-between items-center gap-1 p-6 md:px-10 lg:px-40">
        <div className="flex justify-center items-center">
          <a href="/" aria-label="Go to Home">
            <div className="flex justify-center items-end border-b-2 border-transparent hover:border-[#fbc418] transition duration-400">
              <Image
                src="/images/pokedex.png"
                width={160}
                height={60}
                alt="Pokédex logo"
                priority
                unoptimized
              />
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}
