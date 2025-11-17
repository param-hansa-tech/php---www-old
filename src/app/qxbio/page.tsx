import React from 'react';
import { Text } from '@/components/common';
import { Page } from '@/components/common/page';
import Section from '@/components/misc/section';
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider';
import { HeroV1 } from '@/components/sections/hero/pages';
import { QXBIO_SESSIONS, QxbioSession } from '@/content/qxbio';
import { ArrowRight } from 'lucide-react';

// Helper function to group sessions by sessionNumber
function groupSessionsByNumber(sessions: QxbioSession[]) {
  const grouped: { [key: string]: QxbioSession[] } = {};
  sessions.forEach((session) => {
    if (!grouped[session.sessionNumber]) {
      grouped[session.sessionNumber] = [];
    }
    grouped[session.sessionNumber].push(session);
  });
  return grouped;
}

// Helper function to get background color for session
function getSessionBackground(sessionNumber: string, type: string) {
  if (type === 'break' || sessionNumber === 'Break' || sessionNumber === 'Lunch Break' || sessionNumber === 'Networking') {
    return 'bg-zinc-50';
  }
  return 'bg-white';
}

export default function QxBioPage() {
  const groupedSessions = groupSessionsByNumber(QXBIO_SESSIONS);

  return (
    <Page>
      <HeroV1
        lineOne={`A Flagship forum — <i>QxBio</i>`}
        lineTwo="for  collaborative  discovery"
        description="The Annual Conference on Quantum of Biology and Biotechnology — aspires to be a catalyst for transformative discovery, a forum where scientific rigor meets visionary thinking."
        theme="light"
        primaryCTA={{
          label: (
            <>
              Sessions <ArrowRight className="h-8 mr-4" />
            </>
          ),
          href: "https://lu.ma/b6ofjbxb",
        }}
      />

      <Section contained={false}>
        <InfiniteSlider gap={24}>
          <Text
            scale="h1"
            className="py-8 md:py-12 lg:py-16 xl:py-20 text-[#4A1A51]"
          >
            Quantum in Biology.{' '}Quantum in Biology.{' '}
          </Text>
        </InfiniteSlider>
      </Section>

      <Section>
        <div className="pt-32 text-dark border-t border-t-zinc-500/20">
          <Text
            as="h3"
            scale="h3"
            className="col-start-1 col-span-4 px-2 pb-20 md:pb-24 lg:pb-28 xl:pb-32"
          >
            Join us for our annual gathering of leading researchers, innovators,
            and pioneers in computational biology and quantitative sciences.
          </Text>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-4 text-[#4A1A51] border-b border-b-zinc-500/20">
          <div className="col-start-1 col-span-4 md:col-start-3 md:col-span-2 border-t border-t-zinc-500/20 px-2">
            <Text
              as="p"
              scale="p1"
              className="bg-[#FAFAFA] text-zinc-500 pt-8 pb-16"
            >
              QxBio brings together thought leaders and emerging voices to
              explore the intersection of computational methods and biological
              sciences, fostering collaboration and innovation in research that
              aims to transform human health and understanding.
            </Text>
          </div>
        </div>
      </Section>

      <Section>

        <div className="pb-32 overflow-x-auto">
          <div className="min-w-[1000px]">
            <table className="w-full border-collapse border border-zinc-500/20 bg-white">
              {/* Table Header */}
              <thead>
                <tr className="bg-[#4A1A51] border-b border-zinc-500/20">
                  <th className="border-r border-zinc-500/20 px-6 py-4 text-left w-[15%]">
                    <Text as="span" scale="p2" className="font-semibold text-white">
                      Theme
                    </Text>
                  </th>
                  <th className="border-r border-zinc-500/20 px-6 py-4 text-left w-[35%]">
                    <Text as="span" scale="p2" className="font-semibold text-white">
                      Session Details
                    </Text>
                  </th>
                  <th className="border-r border-zinc-500/20 px-6 py-4 text-left w-[25%]">
                    <Text as="span" scale="p2" className="font-semibold text-white">
                      Keynote / Speakers
                    </Text>
                  </th>
                  <th className="px-6 py-4 text-center w-[25%]">
                    <Text as="span" scale="p2" className="font-semibold text-white">
                      Time & Duration
                    </Text>
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {Object.entries(groupedSessions).map(([sessionNumber, sessions], groupIndex) => {
                  const firstSession = sessions[0];
                  const bgColor = getSessionBackground(sessionNumber, firstSession.type);
                  const totalDuration = sessions.reduce((acc, s) => {
                    const mins = parseInt(s.duration);
                    return acc + (isNaN(mins) ? 0 : mins);
                  }, 0);

                  return (
                    <React.Fragment key={groupIndex}>
                      {/* Session Header Row (if applicable) */}
                      {sessionNumber.startsWith('Session') && (
                        <tr className="bg-zinc-100 border-b border-zinc-500/20">
                          <td colSpan={4} className="px-6 py-3 text-center">
                            <Text as="span" scale="p1" className="font-semibold text-[#4A1A51]">
                              {sessionNumber.toUpperCase().replace('SESSION', 'SESSION ')}
                            </Text>
                          </td>
                        </tr>
                      )}

                      {/* Session Rows */}
                      {sessions.map((session, sessionIndex) => (
                        <tr 
                          key={sessionIndex} 
                          className={`${bgColor} border-b border-zinc-500/20 hover:bg-[#FAFAFA] transition-colors`}
                        >
                          {/* Theme Column - Rowspan for first row of each session group */}
                          {sessionIndex === 0 && (
                            <td
                              rowSpan={sessions.length}
                              className="border-r border-zinc-500/20 px-6 py-4 align-top"
                            >
                              <Text as="p" scale="p2" className="font-semibold text-[#4A1A51] mb-2">
                                {sessionNumber}
                              </Text>
                              {firstSession.theme && (
                                <Text as="p" scale="p3" className="text-zinc-600">
                                  {firstSession.theme}
                                </Text>
                              )}
                            </td>
                          )}

                          {/* Session Details */}
                          <td className="border-r border-zinc-500/20 px-6 py-4 align-top">
                            <Text as="p" scale="p2" className="font-semibold text-[#4A1A51] mb-2">
                              {session.title}
                            </Text>
                            
                            {session.description && (
                              <Text as="p" scale="p3" className="text-zinc-600 mb-2">
                                {session.description}
                              </Text>
                            )}
                            
                            {session.institution && (
                              <Text as="p" scale="p3" className="text-zinc-500 italic mb-2">
                                {session.institution}
                              </Text>
                            )}
                            
                            {session.chair && (
                              <Text as="p" scale="p3" className="text-zinc-600 mt-2">
                                <span className="font-semibold">Chair:</span> {session.chair}
                              </Text>
                            )}
                            
                            {session.breakoutGroups && (
                              <div className="mt-3 space-y-2">
                                {session.breakoutGroups.map((group, idx) => (
                                  <div key={idx}>
                                    <Text as="p" scale="p3" className="font-semibold text-[#4A1A51]">
                                      {group.name}
                                    </Text>
                                    <Text as="p" scale="p3" className="text-zinc-600">
                                      Facilitators: {group.facilitators.join(', ')}
                                    </Text>
                                  </div>
                                ))}
                              </div>
                            )}
                            
                            {session.components && (
                              <div className="mt-2 space-y-1">
                                {session.components.map((comp, idx) => (
                                  <Text key={idx} as="p" scale="p3" className="text-zinc-600">
                                    <span className="font-semibold text-[#4A1A51]">{comp.title}</span>
                                    {comp.speakers.length > 0 && (
                                      <span> — {comp.speakers.join(', ')}</span>
                                    )}
                                  </Text>
                                ))}
                              </div>
                            )}
                          </td>

                          {/* Speakers */}
                          <td className="border-r border-zinc-500/20 px-6 py-4 align-top">
                            {session.speakers.length > 0 ? (
                              <div className="space-y-1">
                                {session.speakers.map((speaker, idx) => (
                                  <Text 
                                    key={idx} 
                                    as="p" 
                                    scale="p2" 
                                    className="text-zinc-700"
                                  >
                                    {speaker}
                                  </Text>
                                ))}
                              </div>
                            ) : (
                              <Text as="p" scale="p2" className="text-zinc-400 text-center">
                                —
                              </Text>
                            )}
                          </td>

                          {/* Merged Time & Duration Column */}
                          {sessionIndex === 0 && (
                            <td
                              rowSpan={sessions.length}
                              className="px-6 py-4 align-top bg-[#FAFAFA]"
                            >
                              <div className="space-y-3">
                                {/* Overall Time Range */}
                                <div className="text-center pb-3 border-b border-zinc-500/20">
                                  <Text as="p" scale="p1" className="font-semibold text-[#4A1A51]">
                                    {firstSession.startTime}
                                  </Text>
                                  <Text as="p" scale="p3" className="text-zinc-400">
                                    to
                                  </Text>
                                  <Text as="p" scale="p1" className="font-semibold text-[#4A1A51]">
                                    {sessions[sessions.length - 1].endTime}
                                  </Text>
                                  <Text as="span" scale="p3" className="inline-block mt-2 text-white bg-[#4A1A51] px-3 py-1 rounded-full">
                                    {totalDuration} min total
                                  </Text>
                                </div>
                                
                                {/* Individual Session Times */}
                                <div className="space-y-2">
                                  {sessions.map((sess, idx) => (
                                    <div key={idx}>
                                      <Text as="p" scale="p2" className="font-semibold text-zinc-700">
                                        {sess.time}
                                      </Text>
                                      <Text as="p" scale="p3" className="text-zinc-500">
                                        ({sess.duration})
                                      </Text>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </td>
                          )}
                        </tr>
                      ))}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

    </Page>
  );
}
