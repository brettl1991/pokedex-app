interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export default function Button({
  children,
  onClick,
  disabled = false,
  type = 'button',
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`disabled:opacity-50 inline-block text-center text-white bg-blue-600 border-2 border-yellow-400 rounded-md  px-5 py-3 transition duration-300 ease-in-out ${
        disabled ? 'cursor-not-allowed' : ''
      }`}
    >
      {children}
    </button>
  );
}
