import { Text } from "@/components/common";
import { Page } from "@/components/common/page";
import { ZStack } from "@/components/misc";
import Section from "@/components/misc/section";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { HeroV4 } from "@/components/sections/hero/pages";
import { LOGOS } from "@/content/home";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Page headerProps={{ theme: "light" }}>
      <HeroV4
        lineOne={`Catalyzing health innovation`}
        lineTwo={`through tech and translational research`}
        theme="light"
        primaryCTA={{
          label: (
            <>
              QxBio <ArrowRight className="h-8 mr-4" />
            </>
          ),
          href: "/events/qxbio",
        }}
        secondaryCTA={{
          label: (
            <>
              Resources <ArrowRight className="h-8 mr-4" />
            </>
          ),
          href: "/blog",
        }}
      />

      <Section contained={false}>
        <InfiniteSlider
          className="py-8 md:py-8 lg:py-12 xl:py-16 text-dark"
          gap={24}
        >
          <Text scale="h1">
          Investing into future for a better tomorrow.{" "}
          </Text>
        </InfiniteSlider>
      </Section>

      {/* <Section contained={false}>
        <InfiniteSlider gap={24}>
          <p className="py-16 px-16 text-[#4A1A51] font-schibsted font-semibold tracking-[-0.04em] text-8xl leading-[1.1]">
            Progress should serve humanity, not just speed.{" "}
          </p>
        </InfiniteSlider>
      </Section> */}

      <Section>
        <div className="flex flex-col text-dark">
          <Image
            alt="dheeraj quote"
            className="p-8 md:p-8 lg:p-12 xl:p-16"
            src="/dheeraj-quote-02.png"
            width={3368}
            height={2217}
          />

          <Text
            as="h2"
            scale="h3"
            className="pl-2 pr-8 pt-8 md:pt-16 lg:pt-24 xl:pt-32 text-pretty"
            // className="px-2 py-32 text-[#4A1A51] font-schibsted font-semibold tracking-[-0.04em] text-6xl leading-[1.1]"
          >
            In science we unite, in health we grow.

            {/* Partnerships and collaborations with universities and research
            organizations to foster efforts in the computing + life sciences
            arena. */}
          </Text>
          {/* <div className="pt-4 md:pt-4 lg:pt-8 xl:pt-16 grid grid-cols-4">
            <Link
              href="/about"
              className="group col-start-1 col-span-1 bg-white"
            >
              <div className=" text-[#4A1A51] group-hover:text-[#183FF5] flex flex-row items-center justify-between px-2 py-4 border border-zinc-500/20 underline underline-offset-2 font-schibsted font-semibold tracking-[-0.04em] text-regular leading-[1.2] w-full">
                <>
                  Who we are <ArrowRight className="h-8 mr-4" />
                </>
              </div>
            </Link>
          </div> */}
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-4 text-[#4A1A51] pt-4 md:pt-4 lg:pt-8 xl:pt-16 ">
          <div className="col-start-1 col-span-4 md:col-start-3 md:col-span-2 border-t border-t-zinc-500/20 border-b border-b-zinc-500/20 px-2">
            <Text as="p" className="bg-light pt-8 pb-16" scale="p1">
            We support ideas that harness the revolutionary power of tech to capture new frontiers in healthcare, and enhance the quality of human life.

            </Text>
          </div>
          {/* <div className="col-start-1 col-span-4 md:col-start-3 md:col-span-2 border-t border-t-zinc-500/20 px-2 border-b border-b-zinc-500/20">
            <Text as="p" className="bg-light pt-8 pb-16" scale="p1">
              Additionally, by supporting young scientists, we are nurturing the
              next generation of innovators who will continue to push the
              boundaries of scientific knowledge.
            </Text>
          </div> */}
        </div>
        <div className="mt-16 grid grid-cols-4">
          <Link
            href="/about"
            className="group col-start-1 col-span-2 md:col-start-3 md:col-span-1 bg-white"
          >
            <div className=" text-[#4A1A51] group-hover:text-[#183FF5] flex flex-row items-center justify-between px-2 py-4 border border-zinc-500/20 underline underline-offset-2 font-schibsted font-semibold tracking-[-0.04em] text-regular leading-[1.2] w-full">
              <>
              Who we are <ArrowRight className="h-8 mr-4" />
              </>
            </div>
          </Link>
        </div>
      </Section>

      <Section>
        <div className="text-dark">
          <Text
            as="h2"
            scale="h3"
            className="pl-2 pr-8 pt-8 md:pt-16 lg:pt-24 xl:pt-32 text-pretty"
            // className="px-2 py-64 text-[#4A1A51] font-schibsted font-semibold tracking-[-0.04em] text-6xl leading-[1.1]"
          >
            Building global research partnerships that harmonize science, scientists, and innovation to advance human health.

          </Text>
          <div className="pt-4 md:pt-4 lg:pt-8 xl:pt-16 grid grid-cols-4">
            <Link
              href="/work"
              className="group col-start-1 col-span-1 bg-white"
            >
              <div className=" text-[#4A1A51] group-hover:text-[#183FF5] flex flex-row items-center justify-between px-2 py-4 border border-zinc-500/20 underline underline-offset-2 font-schibsted font-semibold tracking-[-0.04em] text-regular leading-[1.2] w-full">
                <>
                  What we do <ArrowRight className="h-8 mr-4" />
                </>
              </div>
            </Link>
          </div>

          <div className="pt-4 md:pt-4 lg:pt-8 xl:pt-16  pb-32 grid grid-cols-2 md:grid-cols-4">
            {[...LOGOS].map((o, i) =>
              o ? (
                <ZStack className="group border border-zinc-500/20" key={i}>
                  <Link href={o.value} className="aspect-square p-6 flex flex-col items-center justify-center text-[#4A1A51] bg-white group-hover:text-[#FAFAFA] transition ease-in-out">
                    <Image
                      className="grayscale"
                      alt="logo"
                      src={o.src}
                      height={120}
                      width={160}
                    />
                  </Link>
                </ZStack>
              ) : (
                <ZStack className="" key={i}>
                  <div className=" h-72 p-6 flex flex-col text-[#4A1A51] transition ease-in-out"></div>
                </ZStack>
              )
            )}
          </div>
        </div>
      </Section>
    </Page>
  );
}
