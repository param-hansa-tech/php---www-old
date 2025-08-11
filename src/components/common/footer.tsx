import { Guides, ZStack } from '@/components/misc';
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider';
import { PHPLogo } from './php-logo';
import Link from 'next/link';
import { Text } from '.';

export const Footer = ({ theme = 'dark' }) => (
  <ZStack
    className="text-[#4A1A51] bg-[#FAFAFA] dark:text-[#FAFAFA] dark:bg-[#4A1A51]"
    data-theme={theme}
  >
    <div className="w-full h-full m-auto max-w-6xl px-2">
      <Guides />
    </div>
    <div className="flex flex-col">
      <div className="w-full h-full m-auto max-w-6xl px-2 py-32 grid grid-cols-1 md:grid-cols-4">
        <div className="md:col-start-1 md:col-span-2">
          <Link href="/" className="flex flex-col">
            <PHPLogo className="ml-2 h-20 w-20" />
            <p className="pl-2 font-schibsted font-bold tracking-[-0.04em] text-3xl leading-[1.0]">
              Param Hansa <br />
              <span className="opacity-50">Philanthropies</span>
            </p>
            <p className="pl-2 pt-8 pb-16 font-instrument text-xl">
              Catalyzing health innovation through tech and translational
              research.
            </p>
          </Link>
        </div>
        <div className="mt-16 md:row-start-2 md:col-span-2 font-schibsted font-semibold tracking-[-0.04em] text-sm leading-[1.5]">
          <Link href="mailto:info@phvalues.org" className="px-2">
            <span className="opacity-50">Mail</span>
            <br />

            <span className="px-2"> info@phvalues.org</span>
          </Link>

          <br />
          <br />
          <br />
          <Text as="p" scale="p2" className="px-2 opacity-50">
            Global Office
          </Text>
          <br />
          <Text as="p" scale="p2" className="px-2">
            Param Hansa Philanthropies Tampa, Florida - 33558 USA
          </Text>
          <br />
          <br />
          <Text as="p" scale="p2" className="px-2 opacity-50">
            India Office
          </Text>
          <br />
          <Text className="px-2" as="p" scale="p2">
            Param Hansa Philanthropies Foundation, UrbanVault Indiranagar 608,
            12th Main Road, Indiranagar Bengaluru - 560008, Karnataka INDIA
          </Text>
          <br />
          <br />
        </div>
        <div className="flex flex-col md:col-start-3 md:col-span-1">
          <ul className="flex flex-col pl-2 font-schibsted font-semibold tracking-[-0.04em] text-sm leading-[1.0] *:py-3">
            {QUICK_LINKS.map((o, i) => (
              <Link className="first:opacity-50" key={i} href={o.href ?? '/'}>
                {o.label}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex flex-col md:col-start-4 md:col-span-1">
        <ul className="flex flex-col pl-2 font-schibsted font-semibold tracking-[-0.04em] text-sm leading-[1.0] *:py-3">
            {SOCIALS.map((o, i) => (
              <Link className="first:opacity-50" key={i} href={o.href ?? '/'}>
                {o.label}
              </Link>
            ))}
          </ul>
        </div>
        <div className="mt-16 flex flex-col items-start justify-start md:col-start-3 md:col-span-1">
          <ul className="flex flex-col pl-2 font-schibsted font-semibold tracking-[-0.04em] text-sm leading-[1.0] *:py-3">
            {RESOURCES.map((o, i) => (
              <Link className="first:opacity-50" key={i} href={o.href ?? '/'}>
                {o.label}
              </Link>
            ))}
          </ul>
        </div>
      </div>

      <InfiniteSlider className="border-t border-t-zinc-500/20">
        <Text scale="h1" className="py-8 opacity-20">
          Param Hansa Philanthropies. Param Hansa Philanthropies.
        </Text>
      </InfiniteSlider>
    </div>
  </ZStack>
);

const QUICK_LINKS = [
  { label: 'Quick Links' },
  { label: 'Our Work', href: '/work' },
  { label: 'Get Involved', href: '/apply' },
  { label: 'Philosophy', href: '/philosophy' },
  { label: 'About Us', href: '/about' },
];

const RESOURCES = [
  { label: 'Resources' },
  // { label: "Press", href: "/press" },
  { label: 'Blog', href: '/blog' },
  // { label: "Documents", href: "/documents" },
  // { label: "Brand", href: "/brand" },
];

const SOCIALS = [
  { label: 'Socials' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/param-hansa-philanthropies/' },
];
