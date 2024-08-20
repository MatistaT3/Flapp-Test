import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className='px-4 lg:px-6 h-14 flex items-center'>
      <Link
        href='/'
        className='flex items-center justify-center'
        prefetch={false}
      >
        <Image
          src='/images/FlappLogoBlue.png'
          alt='Flapp Logo'
          width={160}
          height={50.83}
        />
      </Link>
    </header>
  );
}
