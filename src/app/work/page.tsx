import { Text } from "@/components/common";
import { Page } from "@/components/common/page";
import { ZStack } from "@/components/misc";
import Section from "@/components/misc/section";
import { AnimatedBackground } from "@/components/motion-primitives/animated-background";
import { Cursor } from "@/components/motion-primitives/cursor";
import { HeroV1 } from "@/components/sections/hero/pages";
import { STATS } from "@/content/work";
import { cn } from "@/lib/utils";
import { sanityFetch } from "@/sanity/lib/live";
import { allWorksQuery } from "@/sanity/lib/queries";
import { ArrowRight, PlusIcon } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Work() {
  const [{ data: works }] = await Promise.all([
    sanityFetch({ query: allWorksQuery }),
  ]);

  return (
    <Page>
      <HeroV1
        lineOne={`Discoveries that <i>matter,</i>`}
        lineTwo={`collaborations that <i>multiply.</i>`}
        theme="light"
      />
      <Section>
        <div className="text-dark py-32 text-dark border-y border-y-zinc-500/20">
          {/* <AnimatedLines
            className="text-pretty pl-2 pr-8 py-32 text-[#4A1A51] font-schibsted font-semibold tracking-[-0.04em] text-6xl leading-[1.1]"
            text="Our work creates ripples of progress, measurable impact through innovative research and powerful collaborations with leading institutions."
          /> */}
          <Text as="h2" scale="h3" className="text-pretty pl-2 pr-8 pb-32">
          By uniting science, innovation, and collaboration, we strive to turn breakthrough ideas into lasting impact — improving lives across communities and continents.

            {/* Playing a catalytic role in strengthening interdisciplinary and
            interinstitutional research collaborations that bring AI, compute,
            tech and natural sciences together for the translational impact. */}
          </Text>
          <div className="grid grid-cols-2 md:grid-cols-4 bg-[#FAFAFA]">
            <AnimatedBackground
              className="bg-[#4A1A51]"
              transition={{
                type: "spring",
                bounce: 0.0,
                duration: 0.3,
              }}
              enableHover
            >
              {STATS.map((o, i) =>
                o ? (
                  <ZStack
                    className="group border border-zinc-500/20"
                    key={i}
                    data-id={`card-${i}`}
                  >
                    <div
                      className={cn(
                        "aspect-square p-6 flex flex-col text-[#4A1A51] group-hover:text-[#FAFAFA] transition ease-in-out "
                      )}
                    >
                      <Text as="h3" scale="h2" className="font-bold">
                        {o.value}
                      </Text>
                      <span className="flex-grow"></span>
                      <Text as="p" scale="h6" className="">
                        {o.label}
                      </Text>
                    </div>
                  </ZStack>
                ) : (
                  <ZStack
                    className="border border-zinc-500/20 hidden md:block"
                    key={i}
                    data-id={`card-${i}`}
                  >
                    <div
                      className={cn(
                        "aspect-square w-full h-full p-6 flex flex-col text-[#4A1A51] transition ease-in-out bg-[#FAFAFA]"
                      )}
                    ></div>
                  </ZStack>
                )
              )}
            </AnimatedBackground>
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-dark">
          {/* <AnimatedLines
            className="text-pretty pl-2 pr-16 py-32 text-[#4A1A51] font-schibsted font-semibold tracking-[-0.04em] text-6xl leading-[1.1]"
            text="We are committed to supporting research initiatives with esteemed institutions, universities, and cutting-edge laboratories to drive progress at the intersection of computing and life sciences."
          /> */}

          <Text as="h2" scale="h3" className="text-pretty pl-2 pr-16 py-32">
          Catalyzing interdisciplinary research that bridges AI, compute, tech, and science for real-world impact.

            {/* Choosing to remain as a grant making institution, the partnerships
            are key to our long-term vision. We believe that power of compute
            and emerging bio technology, combined with wet lab data and clinical
            research, can make life sciences research significantly more
            efficient and in turn, enhance human health. */}
          </Text>

          <table className="w-full">
            <thead></thead>
            <tbody className="w-full pb-64">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {works.map((o: any, i: number) => (
                <Link
                  data-id={`card-${i}`}
                  className="w-full"
                  key={i}
                  href={`/work/${o.slug}`}
                >
                  <tr className="group grid grid-cols-8 h-32 border-b border-x border-x-zinc-500/20 border-b-zinc-500/20 first:border-t-zinc-500/20 first:border-t bg-[#FAFAFA] hover:bg-[#4A1A51] transition ease-in-out">
                    <Cursor
                      attachToParent
                      variants={{
                        initial: { opacity: 0, scale: 1 },
                        animate: { opacity: 1, scale: 1 },
                        exit: { opacity: 0, scale: 1 },
                      }}
                      transition={{
                        type: "spring",
                        duration: 0.3,
                        bounce: 0.1,
                      }}
                      className="overflow-hidden"
                      springConfig={{
                        bounce: 0.01,
                      }}
                    >
                      <div className="px-3 py-1 ml-36 flex items-center justify-center rounded-[24px] bg-gray-500/40 backdrop-blur-md dark:bg-gray-300/40 inline-flex items-center text-sm text-white dark:text-black">
                        Read More <PlusIcon className="ml-1 h-4 w-4" />
                      </div>
                      {/* <Image
                    // src='https://i.pinimg.com/564x/4c/95/69/4c9569ab2928e5ae400a6a34e7c537a0.jpg'
                    src={urlFor(o.mainImage)?.url?.()}
                    alt="Christian Church, Eastern Europe"
                    className="h-64 w-64 object-cover bg-white border border-zinc-500"
                    height={200}
                    width={200}
                  /> */}
                    </Cursor>
                    <th className="col-start-1 col-span-1  flex flex-col items-start justify-center">
                      <div className="ml-8 h-3 w-3 rounded-full bg-zinc-200" />
                    </th>
                    <th className="col-start-2 col-span-6 flex items-center justify-start text-left text-[#4A1A51] group-hover:text-[#FAFAFA] font-schibsted font-semibold tracking-[-0.04em] text-2xl leading-[1.2]">
                      {o.title}
                    </th>
                    {/* <th className="col-start-5 col-span-3 flex items-center justify-start text-left text-[#4A1A51] group-hover:text-[#FAFAFA] font-schibsted font-semibold tracking-[-0.04em] text-sm leading-[1.2]">
                      {o.description}
                    </th> */}
                    <th className="col-start-8 col-span-1 flex flex-col items-center justify-center">
                      <ArrowRight className=" h-8 text-[#4A1A51] group-hover:text-[#FAFAFA]" />
                    </th>
                  </tr>
                </Link>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </Page>
  );
}
