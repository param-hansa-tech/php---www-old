import { ArrowRight } from "lucide-react";
import Section from "@/components/misc/section";
import { Text } from ".";

export const NewsLetter = ({ theme = "light" }) => (
  <Section
    sectionProps={{
      className:
        "text-[#4A1A51] bg-[#FAFAFA] dark:text-[#FAFAFA] dark:bg-[#4A1A51]",
      "data-theme": theme,
    }}
  >
    <div className="flex flex-col">
      <div className="w-full h-full m-auto max-w-6xl py-40 border-t border-t-zinc-500/20">
        <Text as="p" scale="h3" className="pl-2 text-balance">
        Connect with us to join the network of the global scientific community. 

        </Text>

        <div className="mt-16 grid grid-cols-4">
          <input
            className="col-start-1 col-span-4 md:col-start-1 md:col-span-3 p-2 font-schibsted font-semibold tracking-[-0.04em]  text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[1.0] !outline-none border-b border-b-zinc-500/20"
            placeholder="Enter your email"
          />
          <div className=" col-span-4 md:col-span-1 group-hover:bg-[#FAFAFA] group-hover:text-[#4A1A51] flex flex-row items-center justify-between px-2 py-4 border-y border-y-zinc-500/20 underline underline-offset-2 font-schibsted font-semibold tracking-[-0.04em] text-regular leading-[1.2] w-full">
            Enroll me <ArrowRight className="h-8 mr-4" />
          </div>
        </div>
      </div>
    </div>
  </Section>
);
