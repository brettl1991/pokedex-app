import Image from 'next/image';

export default function Loader() {
  return (
    <div className="flex flex-col items-center  h-screen">
      <div className="w-72 h-auto">
        <Image
          src={'/images/loading.gif'}
          width={300}
          height={200}
          alt="Pikachu loading"
          priority
          unoptimized
          className="h-auto w-full"
        />
      </div>
      <h3>Loading...</h3>
    </div>
  );
}
