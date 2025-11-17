import { Text } from "@/components/common";
import { Page } from "@/components/common/page";
import Section from "@/components/misc/section";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { Cursor } from "@/components/motion-primitives/cursor";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { allPostsQuery } from "@/sanity/lib/queries";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function ArticlePage() {
  const [{ data: posts }] = await Promise.all([
    sanityFetch({ query: allPostsQuery }),
  ]);
  return (
    <Page headerProps={{ theme: "light" }}>
      <Section
        sectionProps={{
          className: "bg-dark text-light",
        }}
      >
        <div className="border-x border-x-zinc-500/20">
          <div className="h-96 flex flex-col justify-between">
            <div></div>
            {/* <div>
              <h1 className="px-2 text-center text-[#FAFAFA] font-instrument tracking-[-0.01em] text-7xl leading-[1.25]">
                Explore all resources
              </h1>
              <p className="px-64 pb-16 text-center text-[#FAFAFA]/80 font-schibsted font-semibold tracking-[-0.04em] text-md leading-[1.2]">
                Discover latest in reports, whitepapers, and educational
                materials from our funded research and initiatives.
              </p>
            </div> */}
            <div>
              <Text
                as="h1"
                scale="h2"
                font="serif"
                className="px-2 text-center font-normal tracking-[-0.01em] leading-[1.25]"
              >
                Explore all resources
              </Text>
              <Text
                as="p"
                scale="p1"
                className="px-8 md:px-28 lg:px-40 xl:px-64 pb-16 text-center opacity-70"
              >
                Discover latest in reports, whitepapers, and educational
                materials from our funded research and initiatives.
              </Text>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="py-16">
          <table>
            <thead></thead>
            <tbody className="pb-64 border-t border-t-zinc-500/20">
              <AnimatedGroup preset="slide">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {posts.map((o: any, i: any) => (
                  <Link
                    data-id={`card-${i}`}
                    className=""
                    key={i}
                    href={``}
                  >
                    <tr className="group grid grid-cols-8 h-32 border-x border-x-zinc-500/20 border-b border-b-zinc-500/20 bg-[#FAFAFA] hover:bg-[#4A1A51] transition ease-in-out">
                      <Cursor
                        attachToParent
                        variants={{
                          initial: { height: "auto", opacity: 0, scale: 1 },
                          animate: { height: "auto", opacity: 1, scale: 1 },
                          exit: { height: "auto", opacity: 0, scale: 1 },
                        }}
                        transition={{
                          type: "spring",
                          duration: 0.3,
                          bounce: 0.1,
                        }}
                        className="hidden"
                        springConfig={{
                          bounce: 0.01,
                        }}
                      >
                        <Image
                          // src='https://i.pinimg.com/564x/4c/95/69/4c9569ab2928e5ae400a6a34e7c537a0.jpg'
                          src={urlFor(o.mainImage).url()}
                          alt="Christian Church, Eastern Europe"
                          className="w-96 aspect-[16/9] object-cover bg-white border border-zinc-500"
                          height={720}
                          width={1280}
                        />
                      </Cursor>
                      <th className="hidden md:col-start-1 md:col-span-1 flex flex-col items-start justify-center">
                        <div className="ml-8 h-3 w-3 rounded-full bg-zinc-200" />
                      </th>
                      <th className="md:col-start-1 col-span-7 md:col-start-2 md:col-span-5 xl:-ml-16 mr-16 flex items-center justify-start">
                        <p className="px-2 text-left text-[#4A1A51] group-hover:text-[#FAFAFA] font-schibsted font-semibold tracking-[-0.04em] text-xl leading-[1.2] truncate">
                          {o.title}
                        </p>
                      </th>
                      {/* <th className="hidden md:col-start-6 md:col-span-1 mr-4 flex items-center justify-start">
                        <p className="text-[#4A1A51]/50 group-hover:text-[#FAFAFA] capitalize font-schibsted font-semibold tracking-[-0.04em] text-sm leading-[1.2] truncate">
                          {o.name}
                        </p>
                      </th> */}
                      {/* <th className="hidden md:col-start-7 md:col-span-1 mr-4 flex items-center justify-start">
                        <p className="text-[#4A1A51]/50 group-hover:text-[#FAFAFA] font-schibsted font-semibold tracking-[-0.04em] text-sm leading-[1.2] truncate">
                          {new Date(o.date).toLocaleDateString()}
                        </p>
                      </th> */}
                      <th className="col-start-8 col-span-1 flex flex-col items-end justify-center">
                        <ArrowRight className="mr-8 h-8 text-[#4A1A51] group-hover:text-[#FAFAFA]" />
                      </th>
                    </tr>
                  </Link>
                ))}
              </AnimatedGroup>
            </tbody>
          </table>
        </div>
      </Section>
    </Page>
  );
}
