"use client"; // Error boundaries must be Client Components

import { Page } from "@/components/common/page";
import Section from "@/components/misc/section";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";

export default function GlobalError() {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <Page>
          <Section contained={false}>
            <InfiniteSlider gap={0}>
              <p className="py-64 text-[#4A1A51] font-schibsted font-semibold tracking-[-0.04em] text-8xl leading-[1.1]">
                500 Something went wrong&nbsp;&nbsp;&nbsp;500 Something went wrong&nbsp;&nbsp;&nbsp;500 Something went wrong&nbsp;&nbsp;&nbsp;
              </p>
            </InfiniteSlider>
          </Section>
        </Page>
      </body>
    </html>
  );
}
