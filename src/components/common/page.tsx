/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Cursor } from "@/components/motion-primitives/cursor";
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { NewsLetter } from '@/components/common/newsletter';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Page = ({
  headerProps,
  children,
}: {
  headerProps?: any;
  children: React.ReactNode;
}) => (
  <>
    <Header {...headerProps} />
    {children}
    <NewsLetter />
    <Footer />
    {/* <Cursor
      variants={{
        initial: { scale: 0.3, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.3, opacity: 0 },
      }}
      transition={{
        ease: 'easeInOut',
        duration: 0.15,
      }}
      className=''
    >
      <div className='h-4 w-4 flex items-center justify-center rounded-[24px] bg-gray-500/40 backdrop-blur-md dark:bg-gray-300/40'></div>
    </Cursor> */}
  </>
);
