import Link from 'next/link';

interface PokemonNavigationProps {
  currentId: number;
}

export default function PokemonNavigation({
  currentId,
}: PokemonNavigationProps) {
  const maxId = 10277;
  const isAtEndOfMainSequence = currentId === 1025;
  const isAtStartOfExtendedSequence = currentId === 10001;

  const getNextId = () => {
    if (isAtEndOfMainSequence) return 10001;
    return currentId + 1 > maxId ? 1 : currentId + 1;
  };

  const getPreviousId = () => {
    if (isAtStartOfExtendedSequence) return 1025;
    return currentId - 1 < 1 ? maxId : currentId - 1;
  };

  return (
    <div className="flex justify-center items-center w-full p-4 md:px-6 lg:px-8 gap-10">
      <Link href={`/pokemon/${getPreviousId()}`}>
        <div
          className={`flex-1 justify-center ${
            currentId === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-white'
          } flex items-center w-12 h-12 bg-blue-500 rounded-full `}
        >
          <svg
            className="w-full h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 18l-6-6 6-6"
            />
          </svg>
        </div>
      </Link>
      <Link href={`/`}>
        <div className="flex-1 justify-center text-white flex items-center w-28 h-12 bg-blue-500 rounded-full">
          Go back
        </div>
      </Link>
      <Link href={`/pokemon/${getNextId()}`}>
        <div
          className={`flex-1 justify-center ${
            currentId === maxId
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-white'
          } flex items-center w-12 h-12 bg-blue-500 rounded-full `}
        >
          <svg
            className="w-full h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 18l6-6-6-6"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
}
