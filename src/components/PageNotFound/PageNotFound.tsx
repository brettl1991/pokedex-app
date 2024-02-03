import Image from 'next/image';
import Button from '../Button/Button';

export default function PageNotFound() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center leading-relaxed m-auto p-4 min-h-screen">
        <h1 className="text-4xl mb-1">Page or Pokémon not found!</h1>
        <h2 className="text-xl font-normal mb-4">
          Unfortunately the page you are looking for is not here.
        </h2>

        <Image
          src="/images/psyduck.png"
          width={350}
          height={200}
          alt="Psyduck confused"
          priority
          unoptimized
        />

        <a href="/" aria-label="Go to Home">
          <Button>Go to Home</Button>
        </a>
      </div>
    </>
  );
}
