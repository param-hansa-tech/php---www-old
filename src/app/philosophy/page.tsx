import { Text } from "@/components/common";
import { Page } from "@/components/common/page";
import { ZStack } from "@/components/misc";
import Section from "@/components/misc/section";
import { HeroV2 } from "@/components/sections/hero/pages";
import { PILLARS } from "@/content/philosophy";

import { Inknut_Antiqua } from "next/font/google";
import Image from "next/image";

const inknutAntiqua = Inknut_Antiqua({
  variable: "--font-inknut-antiqua",
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
  preload: true,
});

export default function Philosophy() {
  return (
    <Page headerProps={{ theme: "light" }}>
      <HeroV2
        lineOne={`A vision of <i>unity</i> — where`}
        lineTwo={`atoms and spirit converge.`}
        theme="light"
      />
      <ZStack>
        {/* <video
          className="-mt-32 m-auto"
          src="/meditate.mp4"
          autoPlay
          muted
          loop
        /> */}
        <Image
          src="/yoga-01.png"
          className="hidden md:block -mt-32 m-auto aspect-video object-cover"
          width="4000"
          height="2292"
          alt="Param Hansa Yogananda"
        />
        <div className="-mt-16 h-32 md:-mt-32 m-auto md:h-64 bg-linear-to-b from-[#FAFAFA] to-transparent"></div>
        <div className="-mt-32 h-16 md:-mt-64 m-auto md:h-32 bg-linear-to-t from-[#FAFAFA] to-transparent"></div>
      </ZStack>

      <Section>
        {/* <div className="-mt-0 h-32 bg-linear-to-b from-[#FAFAFA] to-transparent"></div> */}
        {/* <div className="-mt-32 h-32 bg-linear-to-t from-[#FAFAFA] to-transparent"></div> */}
        <div className="mt-32 w-full m-auto max-w-6xl">
          <div className="text-dark">
            {/* <AnimatedLines
              className="px-2 pr-12 py-32 text-[#4A1A51]"
              text="Meet our four pillars that don’t just guide us — they define us, they’re the gears of our operating system."
              /> */}
            <Text as="h2" scale="h3" className="px-2 pr-12 pb-32 ">
              Meet our four pillars that don’t just guide us — they define us,
              they’re the gears of our operating system.
            </Text>
          </div>
        </div>
      </Section>
      <Section>
        <table>
          <thead></thead>
          <tbody className="pb-64 flex flex-col">
            {PILLARS.map((o, i) => (
              <tr
                className="group grid grid-cols-8 h-32 border-b border-x border-x-zinc-500/20 border-b-zinc-500/20 first:border-t-zinc-500/20 first:border-t bg-[#FAFAFA] hover:bg-[#4A1A51] transition ease-in-out"
                key={i}
              >
                <th className="hidden md:col-start-1 md:col-span-1 flex flex-col items-start justify-center">
                  <span className="ml-8 h-3 w-3 rounded-full bg-zinc-200" />
                </th>
                <th
                  className={`col-start-2 col-span-3 md:col-start-2 md:col-span-1 flex items-center justify-start text-left text-[#4A1A51] group-hover:text-[#FAFAFA] font-schibsted font-normal text-2xl leading-[1.2] -ml-8 ${inknutAntiqua.className} `}
                >
                  {o.value}
                </th>
                <th className="col-start-5 col-span-4 md:col-start-3 md:col-span-1 flex items-center justify-start text-left text-[#4A1A51] group-hover:text-[#FAFAFA] font-instrument italic font-normal text-4xl leading-[1.2] ml-8">
                  {o.name}
                </th>
                <th className="col-start-1 col-span-8 md:col-start-5 md:col-span-3 flex items-center justify-start text-left text-[#4A1A51] group-hover:text-[#FAFAFA] font-schibsted font-semibold tracking-[-0.04em] text-sm leading-[1.2] ml-4">
                  {o.description}
                </th>
                <th></th>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
    </Page>
  );
}
