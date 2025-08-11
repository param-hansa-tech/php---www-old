import { Text } from "@/components/common";
import { Page } from "@/components/common/page";
import Section from "@/components/misc/section";
import { APPLY_INDIVIDUAL_LINK, APPLY_ORGANIZATION_LINK } from "@/content/apply";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <Page>
      <Section
        sectionProps={{
          className: "bg-dark text-light",
        }}
      >
        <div className="border-x border-x-zinc-500/20">
          <div className="h-96 flex flex-col justify-between">
            <div></div>
            <div>
              <Text as="h1" scale="h2" font="serif" className="px-2 text-center font-normal tracking-[-0.01em] leading-[1.25]">
                Get Involved
              </Text>
              <Text as="p" scale="p1" className="px-8 md:px-28 lg:px-40 xl:px-64 pb-16 text-center opacity-70">
              Learn more about opportunities to volunteer, collaborate, or champion our shared vision for a better world.
              </Text>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 my-32 text-dark">
          <div className="col-span-1 border border-zinc-500/20 border-r-[0.5px] bg-white flex flex-col">
            <Text as="h2" scale="h3" className="text-center px-2 pt-16">
              Individual
            </Text>
            <Text as="p" scale="p1" className="text-center px-4 lg:px-16 pt-4 pb-16 text-pretty text-zinc-500">
              Param Hansa Philanthropies offers funding and fellowships
              throughout the year to individuals and groups who share our
              commitment to transformative change. We support visionaries whose
              initiatives foster enduring societal impact.
            </Text>
            <div className="flex-grow"></div>
            <Link href={APPLY_INDIVIDUAL_LINK} className="group col-start-3 col-span-1">
              <div className=" text-[#4A1A51] group-hover:text-[#183FF5] flex flex-row items-center justify-center px-2 py-4 border-t border-t-zinc-500/20 underline underline-offset-2 font-schibsted font-semibold tracking-[-0.04em] text-regular leading-[1.2] w-full">
                <>
                  Apply as an individual <ArrowRight className="h-8 ml-4" />
                </>
              </div>
            </Link>
          </div>
          <div className="col-span-1 border border-zinc-500/20 border-l-[0.5px] bg-white flex flex-col">
            <Text as="h2" scale="h3" className="text-center px-2 pt-16">
              Organization
            </Text>
            <Text as="p" scale="p1" className="text-center px-4 lg:px-16 pt-4 pb-16 text-zinc-500 text-pretty">
              Param Hansa Philanthropies fosters collaborations with
              institutions year-round, partnering with those who share our
              dedication to transformative progress. We seek institutional
              allies with innovative visions, committed to driving sustainable
              societal impact.
            </Text>
            <div className="flex-grow"></div>

            <Link href={APPLY_ORGANIZATION_LINK} className="group col-start-3 col-span-1">
              <div className=" text-[#4A1A51] group-hover:text-[#183FF5] flex flex-row items-center justify-center px-2 py-4 border-t border-t-zinc-500/20 underline underline-offset-2 font-schibsted font-semibold tracking-[-0.04em] text-regular leading-[1.2] w-full">
                <>
                  Apply as an organization <ArrowRight className="h-8 ml-4" />
                </>
              </div>
            </Link>
          </div>
        </div>
      </Section>
    </Page>
  );
}
