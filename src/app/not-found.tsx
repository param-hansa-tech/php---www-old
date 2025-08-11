import { Page } from '@/components/common/page'
import Section from '@/components/misc/section'
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider'
 
export default function NotFound() {
  return (
    <Page>
      <Section contained={false}>
        <InfiniteSlider gap={0}>
          <p className="py-64 text-[#4A1A51] font-schibsted font-semibold tracking-[-0.04em] text-8xl leading-[1.1]">
            404 Not Found&nbsp;&nbsp;&nbsp;404 Not Found&nbsp;&nbsp;&nbsp;404 Not Found&nbsp;&nbsp;&nbsp;
          </p>
        </InfiniteSlider>
      </Section>
    </Page>
  )
}