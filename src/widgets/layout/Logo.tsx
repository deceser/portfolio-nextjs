import Image from 'next/image';

export function Logo() {
  return (
    <div className="relative">
      <button
        type="button"
        data-logo
        aria-label="Matrix trigger"
        className="peer h-24 w-24 rounded-full overflow-hidden bg-transparent ring-0"
      >
        <Image
          src="/logo.png"
          alt="Site icon"
          width={96}
          height={96}
          className="h-full w-full object-contain cursor-pointer"
          draggable={false}
        />
      </button>
      <span className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-3 opacity-0 transition-opacity text-xs glass-card px-2 py-1 whitespace-nowrap peer-hover:opacity-100">
        Click 3 times — enter Matrix for 10 seconds
      </span>
    </div>
  );
}
