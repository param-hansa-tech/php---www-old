"use client";

import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from "@/components/motion-primitives/morphing-dialog";
import { PlusIcon } from "lucide-react";
import { Text } from "../common";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function MorphingDialogBasicOne({ imgSrc, name, role }: any) {
  return (
    <MorphingDialog
      transition={{
        type: "spring",
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <MorphingDialogTrigger
        style={{
          borderRadius: "12px",
        }}
        className="flex flex-col overflow-hidden dark:border-zinc-50/10 dark:bg-zinc-900"
      >
        <MorphingDialogImage
          src={imgSrc}
          alt="A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood."
          className="w-full object-cover"
        />
        <div className="flex grow flex-row items-center justify-between px-3 py-2">
          <div className="flex flex-col items-start gap-0 px-5 py-1 md:py-4">
            <MorphingDialogTitle className="text-dark">
                <Text as="p" scale="p1" className="drop-shadow-xs">
                  {name}
                </Text>
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-dark">
              <Text as="p" scale="p2" className="md:mb-2 text-zinc-800/80">
                {role}
              </Text>
            </MorphingDialogSubtitle>
          </div>
          <button
            type="button"
            className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500"
            aria-label="Open dialog"
          >
            <PlusIcon size={12} />
          </button>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{
            borderRadius: "24px",
          }}
          className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
        >
          <MorphingDialogImage
            src="/about-ds-02.png"
            alt="A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood."
            className="h-full w-full"
          />
          <div className="p-6">
            <MorphingDialogTitle className="text-dark">
            <Text as="p" scale="p1" className="drop-shadow-xs">
                  {name}
                </Text>
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className="text-dark">
            <Text as="p" scale="p2" className="md:mb-2 text-zinc-800/80">
                {role}
              </Text>
            </MorphingDialogSubtitle>
            <MorphingDialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 100 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 100 },
              }}
            >
              <p className="mt-2 text-zinc-500 dark:text-zinc-500">
                Dheeraj Pandey is
                an Indian-born American entrepreneur, CEO, and philanthropist.
                As the Chairman and CEO of DevRev Inc.
                
              </p>
                <br/>
              <p className="text-zinc-500">
                Parma Hansa Values&apos; philanthropic wing, spearheading impactful
                initiatives. She is a board member of the Common Ground Speaker
                Series, supporting parent education in Bay Area private schools,
                and also sits on the Board of Fellows for her children’s school.
                
              </p>
              {/* <a
                className="mt-2 inline-flex text-zinc-500 underline"
                href="https://www.are.na/block/12759029"
                target="_blank"
                rel="noopener noreferrer"
              >
                Are.na block
              </a> */}
            </MorphingDialogDescription>
          </div>
          <MorphingDialogClose className="text-zinc-50" />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
