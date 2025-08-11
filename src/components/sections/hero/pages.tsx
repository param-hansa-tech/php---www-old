import { Text } from '@/components/common';
import { Guides, ZStack } from '@/components/misc';
import { AnimatedLines } from '@/components/misc/animated-lines';
import Section from '@/components/misc/section';
import Link from 'next/link';

export const HeroV0 = ({
  lineOne,
  lineTwo,
  primaryCTA,
  secondaryCTA,
  theme = 'dark',
}: {
  lineOne?: string;
  lineTwo?: string;
  primaryCTA?: { label: React.ReactNode; href: string };
  secondaryCTA?: { label: React.ReactNode; href: string };
  theme?: string;
}) => (
  <ZStack
    className="overfow-hidden overflow-clip dark:bg-[#4A1A51] dark:text-[#FAFAFA] text-[#4A1A51]"
    data-theme={theme}
  >
    <div className="w-full h-full m-auto max-w-6xl px-2">
      <Guides />
    </div>

    <div className="w-full h-full m-auto max-w-6xl px-2 flex flex-col items-center justify-center">
      <video
        className="brightness-100 rotate-55 contrast-100 scale-50 hue-rotate-90"
        autoPlay
        muted
        loop
      >
        {/* <source
          src="https://designed-cells.chipsa.design/video/r&d-sequence/r&d-sequence-2.webm"
          type="video/webm"
        /> */}
        <source src="/about-sequence-2.webm" type="video/webm" />
      </video>
    </div>

    <div className="w-full xl:min-h-[60rem] h-screen xl:max-h-[64rem] m-auto max-w-6xl px-2">
      {lineOne && (
        // <h1 className=" pl-2 pt-84 font-instrument tracking-[-0.01em] leading-none text-8xl drop-shadow-2xl">
        //   <AnimatedLines className="drop-shadow-xs" text={lineOne} />
        // </h1>
        <Text
          as="h1"
          scale="h2"
          className="pl-2 pt-56 md:pt-64 lg:pt-72 xl:pt-84 font-instrument font-normal drop-shadow-2xl tracking-[-0.01em] leading-none"
          dangerouslySetInnerHTML={{
            __html: lineOne,
          }}
        />
      )}
      {lineTwo && (
        // <h1 className=" pr-2 -mt-5 font-instrument tracking-[-0.01em] leading-none text-8xl text-right">
        //   <AnimatedLines animationDelay={0.07} text={lineTwo} />
        // </h1>
        <Text
          as="h1"
          scale="h2"
          className="pl-2 pr-2 font-instrument font-normal drop-shadow-2xl md:text-right tracking-[-0.01em] leading-none"
          dangerouslySetInnerHTML={{
            __html: lineTwo,
          }}
        />
      )}
      <div className="mt-32 grid grid-cols-4">
        <p className="pl-2 font-schibsted font-semibold tracking-[-0.04em] text-sm leading-[1.2] col-start-3 col-span-2 lowercase">
          Supporting ideas that harness the revolutionary power of tech to
          capture new frontiers in healthcare, and enhance the quality of human
          life.
        </p>
      </div>

      <div className="mt-20 xl:mt-24 xl:mt-28 xl:mt-32 grid grid-cols-4">
        {primaryCTA && (
          <Link
            href={primaryCTA?.href}
            className="group col-start-1 col-span-2 md:col-start-3 md:col-span-1"
          >
            <div className="group-hover:bg-[#FFFFFF] group-hover:text-[#4A1A51] flex flex-row items-center justify-between px-2 py-4 border-y border-y-zinc-500/20 underline underline-offset-2 font-schibsted font-semibold tracking-[-0.04em] text-regular leading-[1.2] w-full">
              {primaryCTA?.label}
            </div>
          </Link>
        )}
        {secondaryCTA && (
          <Link
            href={secondaryCTA.href}
            className="group col-start-3 col-span-2 md:col-start-4 md:col-span-1"
          >
            <div className="group-hover:bg-[#FFFFFF] group-hover:text-[#4A1A51] flex flex-row items-center justify-between px-2 py-4 border-y border-y-zinc-500/20 underline underline-offset-2 font-schibsted font-semibold tracking-[-0.04em] text-regular leading-[1.2] w-full">
              {secondaryCTA.label}
            </div>
          </Link>
        )}
      </div>
    </div>
  </ZStack>
);

export const HeroV1 = ({
  lineOne,
  lineTwo,
  primaryCTA,
  secondaryCTA,
  theme = 'dark',
}: {
  lineOne?: string;
  lineTwo?: string;
  primaryCTA?: { label: React.ReactNode; href: string };
  secondaryCTA?: { label: React.ReactNode; href: string };
  theme?: string;
}) => (
  <Section
    contained={false}
    sectionProps={{
      className: 'dark:bg-[#4A1A51] dark:text-[#FAFAFA] text-[#4A1A51]',
      'data-theme': theme,
    }}
  >
    <div className="w-full xl:min-h-[60rem] h-screen xl:max-h-[64rem] m-auto max-w-6xl px-2">
      {lineOne && (
        // <h1 className="pl-2 pt-84 font-instrument tracking-[-0.01em] leading-none text-8xl">
        //   <AnimatedLines text={lineOne} />
        // </h1>
        <Text
          as="h1"
          scale="h1"
          className="pl-2 pt-56 md:pt-64 lg:pt-72 xl:pt-84 font-instrument font-medium drop-shadow-xs tracking-[-0.01em] leading-none"
          dangerouslySetInnerHTML={{
            __html: lineOne,
          }}
        />
      )}
      {lineTwo && (
        // <h1 className="pr-2 -mt-5 font-instrument tracking-[-0.01em] leading-none text-8xl text-right">
        //   <AnimatedLines animationDelay={0.07} text={lineTwo} />
        // </h1>
        <Text
          as="h1"
          scale="h1"
          className="pl-2 pr-2 font-instrument font-medium drop-shadow-xs md:text-right tracking-[-0.01em] leading-none"
          dangerouslySetInnerHTML={{
            __html: lineTwo,
          }}
        />
      )}
      <div className="mt-32 grid grid-cols-4">
        <p className="pl-2 font-schibsted font-semibold tracking-[-0.04em] text-sm leading-[1.2] col-start-3 col-span-2 lowercase">
          Paramhansa Yogananda’s timeless teachings remind us that true progress
          harmonizes the material and the divine. At param hansa philanthropies,
          we channel his wisdom to ensure technology serves not just humanity,
          but the sanctity of life itself.
        </p>
      </div>
      {/* <div className="mt-32 grid grid-cols-4">
        <p className="pl-2 font-schibsted font-semibold tracking-[-0.04em] text-sm leading-[1.2] col-start-1 col-span-2 md:col-start-3 md:col-span-1 lowercase">
          Synthetic Cells, <br />
          Sacred Code
        </p>
        <p className="pl-2 font-schibsted font-semibold tracking-[-0.04em] text-sm leading-[1.2] col-start-3 col-span-2 md:col-start-4 md:col-span-1 lowercase">
          Engineering Life <br />
          with Integrity.
        </p>
      </div> */}

      <div className="mt-32 grid grid-cols-4">
        {primaryCTA && (
          <Link
            href={primaryCTA?.href}
            className="group col-start-3 col-span-1"
          >
            <div className="group-hover:bg-[#FFFFFF] group-hover:text-[#4A1A51] flex flex-row items-center justify-between px-2 py-4 border-y border-y-zinc-500/20 underline underline-offset-2 font-schibsted font-semibold tracking-[-0.04em] text-regular leading-[1.2] w-full">
              {primaryCTA?.label}
            </div>
          </Link>
        )}
        {secondaryCTA && (
          <Link
            href={secondaryCTA.href}
            className="group col-start-4 col-span-1"
          >
            <div className="group-hover:bg-[#FFFFFF] group-hover:text-[#4A1A51] flex flex-row items-center justify-between px-2 py-4 border-y border-y-zinc-500/20 underline underline-offset-2 font-schibsted font-semibold tracking-[-0.04em] text-regular leading-[1.2] w-full">
              {secondaryCTA.label}
            </div>
          </Link>
        )}
      </div>
    </div>
  </Section>
);

export const HeroV2 = ({
  lineOne,
  lineTwo,
  theme = 'light',
}: {
  lineOne: string;
  lineTwo: string;
  theme?: string;
}) => (
  <ZStack
    className="dark:bg-[#4A1A51] dark:text-[#FAFAFA] bg-[#FFFFFF] text-[#4A1A51]"
    data-theme={theme}
  >
    <div className="w-full h-full m-auto max-w-6xl px-2">
      <Guides />
    </div>
    <div className="w-full min-h-[60rem] h-screen max-h-[64rem] m-auto max-w-6xl px-2">
      {lineOne && (
        // <h1 className="pl-2 pt-84 font-instrument tracking-[-0.01em] leading-none text-8xl">
        //   <AnimatedLines text={lineOne} />
        // </h1>
        <Text
          as="h1"
          scale="h1"
          className="pl-2 pt-56 md:pt-64 lg:pt-72 xl:pt-84 font-instrument font-medium drop-shadow-xs tracking-[-0.01em] leading-none"
          dangerouslySetInnerHTML={{
            __html: lineOne,
          }}
        />
      )}
      {lineTwo && (
        // <h1 className="pr-2 font-instrument tracking-[-0.01em] leading-none text-8xl text-right">
        //   <AnimatedLines animationDelay={0.07} text={lineTwo} />
        // </h1>
        <Text
          as="h1"
          scale="h1"
          className="pl-2 pr-2 font-instrument font-medium drop-shadow-xs md:text-right tracking-[-0.01em] leading-none"
          dangerouslySetInnerHTML={{
            __html: lineTwo,
          }}
        />
      )}
      <div className="mt-32 grid grid-cols-4">
        <p className="pl-2 font-schibsted font-semibold tracking-[-0.04em] text-sm leading-[1.2] col-start-3 col-span-2 lowercase">
          Paramhansa Yogananda’s timeless teachings remind us that true progress
          harmonizes the material and the divine. At param hansa philanthropies,
          we channel his wisdom to ensure technology serves not just humanity,
          but the sanctity of life itself.
        </p>
      </div>
    </div>
  </ZStack>
);

export const HeroV3 = ({
  lineOne,
  lineTwo,
  primaryCTA,
  secondaryCTA,
  theme = 'dark',
}: {
  lineOne?: string;
  lineTwo?: string;
  primaryCTA?: { label: React.ReactNode; href: string };
  secondaryCTA?: { label: React.ReactNode; href: string };
  theme?: string;
}) => (
  <ZStack
    className="overfow-hidden overflow-clip dark:bg-[#4A1A51] dark:text-[#FAFAFA] bg-[#FAFAFA] text-[#4A1A51]"
    data-theme={theme}
  >
    <div className="w-full h-full m-auto max-w-6xl px-2">
      <Guides />
    </div>

    <div className="w-full xl:min-h-[60rem] h-screen xl:max-h-[64rem] m-auto max-w-6xl px-2 relative">
      <div className="z-0 pointer-events-none  absolute w-full h-full m-auto max-w-6xl px-2 flex flex-col items-center justify-center">
        <video
          className="brightness-100 rotate-55 contrast-125 scale-100 hue-rotate-90 opacity-40"
          autoPlay
          muted
          loop
        >
          {/* <source
          src="https://designed-cells.chipsa.design/video/r&d-sequence/r&d-sequence-2.webm"
          type="video/webm"
        /> */}
          <source src="/about-sequence-2.webm" type="video/webm" />
        </video>
      </div>
      {lineOne && (
        // <h1 className=" pl-2 pt-84 font-instrument tracking-[-0.01em] leading-none text-8xl drop-shadow-2xl">
        //   <AnimatedLines className="drop-shadow-xs" text={lineOne} />
        // </h1>
        <Text
          as="h1"
          scale="h2"
          className="mix-blend-color-burn pl-2 pt-56 md:pt-64 lg:pt-72 xl:pt-84 font-instrument font-normal drop-shadow-2xl tracking-[-0.01em] leading-none"
          >
          <AnimatedLines text={lineOne} />
        </Text>
      )}
      {lineTwo && (
        // <h1 className=" pr-2 -mt-5 font-instrument tracking-[-0.01em] leading-none text-8xl text-right">
        //   <AnimatedLines animationDelay={0.07} text={lineTwo} />
        // </h1>
        <Text
          as="h1"
          scale="h2"
          weight="normal"
          className="mix-blend-color-burn pl-2 pr-2 font-instrument drop-shadow-2xl md:text-right tracking-[-0.01em] leading-none"
        >
          <AnimatedLines animationDelay={0.07} text={lineTwo} />
        </Text>
      )}
      <div className="mt-32 grid grid-cols-4">
        <p className="mix-blend-color-burn drop-shadow-xs text-zinc-500 pl-2 font-schibsted font-semibold tracking-[-0.04em] text-sm leading-[1.2] col-start-1 col-span-3 md:col-start-3 md:col-span-2 ">
          Supporting ideas that harness the revolutionary power of tech to
          capture new frontiers in healthcare, and enhance the quality of human
          life.
        </p>
      </div>

      <div className="mt-20 xl:mt-24 xl:mt-28 xl:mt-32 grid grid-cols-4">
        {primaryCTA && (
          <Link
            href={primaryCTA?.href}
            className="group col-start-1 col-span-2 md:col-start-3 md:col-span-1 bg-white"
          >
            <div className=" text-[#4A1A51] group-hover:text-[#183FF5] flex flex-row items-center justify-between px-2 py-4 border-x border-x-[0.5px] border-x-zinc-500/20 border-y border-y-zinc-500/20 underline underline-offset-2 font-schibsted font-semibold tracking-[-0.04em] text-regular leading-[1.2] w-full">
              <>{primaryCTA?.label}</>
            </div>
          </Link>
          // <Link
          //   href={primaryCTA?.href}
          //   className="group col-start-1 col-span-2 md:col-start-3 md:col-span-1"
          // >
          //   <div className="group-hover:bg-[#FFFFFF] group-hover:text-[#4A1A51] flex flex-row items-center justify-between px-2 py-4 border-y border-y-[var(--color-border)] underline underline-offset-2 font-schibsted font-semibold tracking-[-0.04em] text-regular leading-[1.2] w-full">
          //     {primaryCTA?.label}
          //   </div>
          // </Link>
        )}
        {secondaryCTA && (
          <Link
            href={secondaryCTA.href}
            className="group col-start-3 col-span-2 md:col-start-4 md:col-span-1 bg-white"
          >
            <div className=" text-[#4A1A51] group-hover:text-[#183FF5] flex flex-row items-center justify-between px-2 py-4 border-l border-l-[0.5px] border-l-zinc-500/20 border-r border-r-zinc-500/20 border-y border-y-zinc-500/20 underline underline-offset-2 font-schibsted font-semibold tracking-[-0.04em] text-regular leading-[1.2] w-full">
              <>{secondaryCTA.label}</>
            </div>
          </Link>
          // <Link
          //   href={secondaryCTA.href}
          //   className="group col-start-3 col-span-2 md:col-start-4 md:col-span-1"
          // >
          //   <div className="group-hover:bg-[#FFFFFF] group-hover:text-[#4A1A51] flex flex-row items-center justify-between px-2 py-4 border-y border-y-[var(--color-border)] underline underline-offset-2 font-schibsted font-semibold tracking-[-0.04em] text-regular leading-[1.2] w-full">
          //     {secondaryCTA.label}
          //   </div>
          // </Link>
        )}
      </div>
    </div>
  </ZStack>
);

export const HeroV4 = ({
  lineOne,
  lineTwo,
  primaryCTA,
  secondaryCTA,
  theme = 'dark',
}: {
  lineOne?: string;
  lineTwo?: string;
  primaryCTA?: { label: React.ReactNode; href: string };
  secondaryCTA?: { label: React.ReactNode; href: string };
  theme?: string;
}) => (
  <ZStack
    className="overfow-hidden overflow-clip dark:bg-[#4A1A51] dark:text-[#FAFAFA] text-[#4A1A51]"
    data-theme={theme}
  >
    <div className="w-full h-full m-auto max-w-6xl px-2">
      <Guides />
    </div>

    <div className="w-full xl:min-h-[60rem] h-screen xl:max-h-[64rem] m-auto max-w-6xl px-2 relative">
      <div className="z-0 pointer-events-none  absolute w-full h-full m-auto max-w-6xl px-2 flex flex-col items-center justify-center">
        <video
          className="brightness-100 rotate-55 contrast-100 scale-125 hue-rotate-90"
          autoPlay
          muted
          loop
        >
          {/* <source
          src="https://designed-cells.chipsa.design/video/r&d-sequence/r&d-sequence-2.webm"
          type="video/webm"
        /> */}
          {/* <source
          src="/about-sequence-2.webm"
          type="video/webm"
        /> */}
        </video>
      </div>
      {lineOne && (
        // <h1 className=" pl-2 pt-84 font-instrument tracking-[-0.01em] leading-none text-8xl drop-shadow-2xl">
        //   <AnimatedLines className="drop-shadow-xs" text={lineOne} />
        // </h1>
        <Text
          as="h1"
          scale="h1"
          className="mix-blend-color-burn pl-2 pt-56 md:pt-64 lg:pt-72 xl:pt-84 font-instrument font-normal drop-shadow-xl tracking-[-0.01em] leading-none"
          dangerouslySetInnerHTML={{
            __html: lineOne,
          }}
        />
      )}
      {lineTwo && (
        // <h1 className=" pr-2 -mt-5 font-instrument tracking-[-0.01em] leading-none text-8xl text-right">
        //   <AnimatedLines animationDelay={0.07} text={lineTwo} />
        // </h1>
        <Text
          as="h1"
          scale="h1"
          className="mix-blend-color-burn pl-2 pr-2 font-instrument font-normal drop-shadow-xl md:text-right tracking-[-0.01em] leading-none"
          dangerouslySetInnerHTML={{
            __html: lineTwo,
          }}
        />
      )}
      <div className="mt-32 grid grid-cols-4">
        <p className=" mix-blend-color-burn drop-shadow-md pl-2 font-schibsted font-semibold tracking-[-0.04em] text-sm leading-[1.2] col-start-3 col-span-2 lowercase">
          Supporting ideas that harness the revolutionary power of tech to
          capture new frontiers in healthcare, and enhance the quality of human
          life.
        </p>
      </div>

      <div className="mt-20 xl:mt-24 xl:mt-28 xl:mt-32 grid grid-cols-4">
        {primaryCTA && (
          <Link
            href={primaryCTA?.href}
            className="group col-start-1 col-span-2 md:col-start-3 md:col-span-1"
          >
            <div className="group-hover:bg-[#FFFFFF] group-hover:text-[#4A1A51] flex flex-row items-center justify-between px-2 py-4 border-y border-y-[var(--color-border)] underline underline-offset-2 font-schibsted font-semibold tracking-[-0.04em] text-regular leading-[1.2] w-full">
              {primaryCTA?.label}
            </div>
          </Link>
        )}
        {secondaryCTA && (
          <Link
            href={secondaryCTA.href}
            className="group col-start-3 col-span-2 md:col-start-4 md:col-span-1"
          >
            <div className="group-hover:bg-[#FFFFFF] group-hover:text-[#4A1A51] flex flex-row items-center justify-between px-2 py-4 border-y border-y-[var(--color-border)] underline underline-offset-2 font-schibsted font-semibold tracking-[-0.04em] text-regular leading-[1.2] w-full">
              {secondaryCTA.label}
            </div>
          </Link>
        )}
      </div>
    </div>
  </ZStack>
);
