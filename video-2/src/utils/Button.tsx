const Button = ({ name, className }: { name: string; className?: string }) => {
  return (
    <button
      className={`bg-blue-500 px-3 text-sm font-bold py-2 rounded-md text-white text-shadow-2xs text-shadow-black/50 hover:bg-blue-600 transition-colors duration-300 ${className}`}
    >
      {name}
    </button>
  );
};

export default Button;
