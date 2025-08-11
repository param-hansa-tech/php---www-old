import Link from 'next/link';
import { PHPLogo } from '@/components/common/php-logo';
import { ArrowRight } from 'lucide-react';

export const Header = ({ theme = 'light' }) => (
  <header
    className="z-100 fixed w-full border-b border-b-zinc-500/20 border-t-transparent bg-[#FAFAFA]/80 dark:bg-[#4A1A51] backdrop-blur-lg dark:[#4A1A51]"
    data-theme={theme}
  >
    <div className="w-full h-16 m-auto max-w-6xl grid grid-cols-4 px-2">
      <Link
        className="col-start-1 col-span-2 flex flex-row items-center text-[#4A1A51] dark:text-white"
        href="/"
      >
        <PHPLogo className="ml-2 h-9 w-9" />
        <p className="pl-3 font-schibsted font-bold tracking-[-0.04em] text-sm leading-[1.1]">
          Param Hansa <br />
          <span className="opacity-50">Philanthropies</span>
        </p>
      </Link>
      <Link
        href="/apply"
        className="hidden md:block group col-start-4 col-span-1"
      >
        <div className=" text-[#4A1A51] group-hover:text-[#183FF5] flex flex-row items-center justify-between px-2 py-4 underline underline-offset-2 font-schibsted font-semibold tracking-[-0.04em] text-regular leading-[1.2] w-full">
          Get Involved <ArrowRight className="h-8" />
        </div>
      </Link>
      {/* <Link
        href="/apply"
        className="group col-start-4 col-span-1"
        data-theme={theme}
      >
        <div className="h-full text-[#4A1A51] dark:text-[#FAFAFA] dark:group-hover:bg-[#FAFAFA] group-hover:bg-[#4A1A51] dark:group-hover:text-[#4A1A51] group-hover:text-[#FAFAFA] flex flex-row items-center justify-between pr-6 py-4 pl-2 underline underline-offset-2 font-schibsted font-semibold tracking-[-0.04em] text-regular leading-[1.2] w-full">
          
        </div>
      </Link> */}
      {/* <Link href="/" className="group col-start-4 col-span-1">
        <div className="h-full text-[#4A1A51] dark:text-[#FAFAFA] dark:group-hover:bg-[#FAFAFA] group-hover:bg-[#4A1A51] dark:group-hover:text-[#4A1A51] group-hover:text-[#FAFAFA] flex flex-row-reverse items-center justify-between pr-6 py-4 pl-2 underline underline-offset-2 font-schibsted font-semibold tracking-[-0.04em] text-regular leading-[1.2] w-full">
           <Menu className="h-8" />
        </div>
      </Link> */}
    </div>
  </header>
);
