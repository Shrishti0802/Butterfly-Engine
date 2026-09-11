import React, { useState } from 'react';
import { NavigationProps } from '../types';
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export const IgniteTheApproach: React.FC<NavigationProps> = ({ navigateTo }) => {
  const [toneIndex, setToneIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isRegenerating, setIsRegenerating] = useState(false);

  const messages = [
    {
      tone: 'High Personalization • Peer Collaborative',
      salutation: 'Dear Aisha,',
      paragraphs: [
        "I noticed you're actively involved with the University Hostel Cluster community. Given your role on the student council, I thought you'd be interested in something we're building.",
        "We're launching FellaRide — a carpooling platform for students commuting from North Campus to Main Campus. You'd be one of our first users and help shape how it works for everyone.",
        'Would you be open to a 5-minute chat this week?',
      ],
      wordCount: '74 words',
      readingTime: '18s',
      responseRate: '68.4%',
    },
    {
      tone: 'Direct Action • Catalyst Node Focus',
      salutation: 'Hi Aisha,',
      paragraphs: [
        'Our telemetry identified your corridor from Block B to the Engineering Complex as the highest density commute route on campus.',
        "We're setting up initial student driver and rider pools to cut 25 minutes off daily wait times. As a key community connector, your feedback on launch routes would be invaluable.",
        'Can I share a 2-minute preview link with you tomorrow?',
      ],
      wordCount: '69 words',
      readingTime: '16s',
      responseRate: '72.1%',
    },
  ];

  const currentMsg = messages[toneIndex % messages.length];

  const handleCopy = () => {
    const fullText = `${currentMsg.salutation}\n\n${currentMsg.paragraphs.join('\n\n')}\n\n— The Butterfly Engine Team`;
    navigator.clipboard.writeText(fullText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleRegenerate = () => {
    setIsRegenerating(true);
    setTimeout(() => {
      setToneIndex((prev) => prev + 1);
      setIsRegenerating(false);
    }, 450);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex flex-col gap-6 pb-12">
        {/* Top Protocol Bar */}
        <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-3 px-5 py-2.5 rounded-lg bg-[#0e3d3c] border border-[#12544F]">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8BBB92]"></span>
            <span className="font-mono text-xs text-[#8BBB92] uppercase tracking-wider">
              Activation Protocol Active / Outreach Generator
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#9d8bb8] uppercase">Dispatch Readiness</span>
              <span className="px-2 py-0.5 rounded-md bg-[#092328] border border-[#12544F] text-[#8BBB92] font-mono text-xs font-semibold">
                98.6%
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2A835F]"></span>
              <span className="font-mono text-xs text-[#8BBB92] uppercase tracking-wider">
                Optimal Window: Tue 10:00 AM
              </span>
            </div>
          </div>
        </div>

        {/* Section Title & Sub-header */}
        <div className="flex flex-col gap-1.5 pt-1">
          <span className="font-mono text-xs text-[#8BBB92] font-semibold tracking-wider uppercase">
            The Approach
          </span>
          <TextGenerateEffect
            words="Drafting the Message"
            className="text-3xl font-bold text-[#f8f6fc] tracking-tight"
          />
          <p className="text-sm text-[#8BBB92]">
            Contextual, personal, never promotional.
          </p>
        </div>

        {/* Main Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-2">
          {/* LEFT COLUMN: Subject Profile Card */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="flex items-center justify-between px-1">
              <span className="font-mono text-xs text-[#8BBB92] font-semibold tracking-wider uppercase">
                Subject
              </span>
              <span className="font-mono text-xs text-[#9d8bb8]">NODE_ID #AK-8842</span>
            </div>

            <div className="relative rounded-xl bg-[#0e3d3c]/90 border border-[#12544F] p-6 flex flex-col gap-6">
              {/* Header / Identity */}
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="w-14 h-14 rounded-lg bg-[#092328] border border-[#12544F] flex items-center justify-center text-[#8BBB92] font-mono text-lg font-bold">
                    AK
                  </div>
                  <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-[#8BBB92] border-2 border-[#092328]"></span>
                </div>
                <div className="flex flex-col min-w-0">
                  <h2 className="text-xl font-bold text-[#f8f6fc] tracking-tight truncate">
                    Aisha Khan
                  </h2>
                  <p className="text-xs text-[#8BBB92] truncate mt-0.5">
                    Student Council • PhD Candidate
                  </p>
                  <div className="flex items-center gap-1.5 mt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8BBB92]"></span>
                    <span className="font-mono text-[11px] text-[#8BBB92] tracking-wider uppercase font-medium">
                      High Resonance Target
                    </span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-[#12544F]"></div>

              {/* Telemetry Metrics List */}
              <div className="flex flex-col gap-3.5">
                <div className="flex items-center justify-between py-0.5">
                  <span className="font-mono text-xs text-[#9d8bb8] uppercase">Role</span>
                  <span className="px-2.5 py-0.5 rounded-md bg-[#2A835F]/20 border border-[#2A835F]/50 text-[#8BBB92] font-mono text-xs font-semibold uppercase">
                    Connector
                  </span>
                </div>
                <div className="flex items-center justify-between py-0.5">
                  <span className="font-mono text-xs text-[#9d8bb8] uppercase">CRS Score</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl font-bold text-[#8BBB92] font-mono">
                      91
                    </span>
                    <span className="text-xs text-[#9d8bb8] font-mono">/100</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-0.5">
                  <span className="font-mono text-xs text-[#9d8bb8] uppercase">Centrality</span>
                  <span className="font-mono text-xs font-bold text-[#e2d7f0]">0.85</span>
                </div>
                <div className="flex items-center justify-between py-0.5">
                  <span className="font-mono text-xs text-[#9d8bb8] uppercase">Commute Consistency</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-1.5 rounded-full bg-[#092328] border border-[#12544F]/60 overflow-hidden hidden sm:block">
                      <div className="h-full bg-[#8BBB92] rounded-full" style={{ width: '95%' }}></div>
                    </div>
                    <span className="font-mono text-xs font-bold text-[#e2d7f0]">95%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-0.5">
                  <span className="font-mono text-xs text-[#9d8bb8] uppercase">Social Reach</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-1.5 rounded-full bg-[#092328] border border-[#12544F]/60 overflow-hidden hidden sm:block">
                      <div className="h-full bg-[#2A835F] rounded-full" style={{ width: '92%' }}></div>
                    </div>
                    <span className="font-mono text-xs font-bold text-[#e2d7f0]">92%</span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-[#12544F]"></div>

              {/* Channel & Timing Pill */}
              <div className="flex flex-col gap-1.5 p-3 rounded-lg bg-[#092328] border border-[#12544F]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#8BBB92] text-[18px]">schedule_send</span>
                  <span className="font-mono text-xs font-semibold text-[#f8f6fc]">
                    LinkedIn DM • Tuesday 10:00 AM
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#9d8bb8]">Optimal open probability</span>
                  <span className="text-[#8BBB92] font-semibold">94.2%</span>
                </div>
              </div>

              {/* Visual Corridor Micro-Map - Required link to Growth Loop */}
              <div
                className="relative w-full h-24 rounded-lg bg-[#092328] border border-[#12544F] hover:border-[#2A835F] p-3 flex flex-col justify-end cursor-pointer group transition-colors"
                onClick={() => navigateTo('growth', 'push')}
                title="Click Corridor Micro-Map to View Growth Loop Simulation"
              >
                <div className="absolute inset-0 opacity-50 group-hover:opacity-80 transition-opacity">
                  <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300 90">
                    <path
                      d="M 10 75 Q 80 15, 160 55 T 290 25"
                      stroke="#8BBB92"
                      strokeDasharray="3 3"
                      strokeWidth="1.5"
                    ></path>
                    <circle cx="160" cy="55" fill="#8BBB92" r="3.5"></circle>
                    <circle cx="290" cy="25" fill="#2A835F" r="3"></circle>
                    <circle cx="10" cy="75" fill="#2A835F" r="3"></circle>
                  </svg>
                </div>
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-mono text-xs text-[#8BBB92] group-hover:text-[#f8f6fc] transition-colors">
                    North Campus Cluster → Main Hub
                  </span>
                  <span className="font-mono text-xs text-[#8BBB92] font-medium flex items-center gap-1 group-hover:text-[#f8f6fc] transition-colors">
                    <span>Corridor #04</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Message Compose Card */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="flex items-center justify-between px-1">
              <span className="font-mono text-xs text-[#8BBB92] font-semibold tracking-wider uppercase">
                The Message
              </span>
              <span className="font-mono text-xs text-[#8BBB92] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8BBB92]"></span>
                Dynamic Generation Mode
              </span>
            </div>

            {/* Compose Window */}
            <div className="rounded-xl bg-[#0e3d3c]/90 border border-[#12544F] overflow-hidden flex flex-col">
              {/* Top Metadata Bar */}
              <div className="px-6 py-3.5 bg-[#092328]/90 border-b border-[#12544F] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-[#9d8bb8] uppercase">To:</span>
                    <span className="text-xs font-semibold text-[#f8f6fc]">
                      Aisha Khan (LinkedIn InMail)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-[#9d8bb8] uppercase">Tone:</span>
                    <span className="font-mono text-xs text-[#8BBB92]">
                      {currentMsg.tone}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-center">
                  <span className="px-2.5 py-1 rounded-md bg-[#092328] border border-[#12544F] text-[#e2d7f0] font-mono text-xs flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px] text-[#8BBB92]">verified</span>
                    AI Synthesis Verified
                  </span>
                </div>
              </div>

              {/* Message Body Canvas */}
              <div className="p-7 flex flex-col gap-4 bg-[#092328]/40">
                <p className="text-base font-semibold text-[#f8f6fc]" id="salutation-text">
                  {currentMsg.salutation}
                </p>
                <div className="flex flex-col gap-3 text-sm text-[#e2d7f0] leading-relaxed" id="message-body">
                  {currentMsg.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
                <div className="pt-2">
                  <p className="text-xs italic text-[#9d8bb8]">
                    — The Butterfly Engine Team
                  </p>
                </div>
              </div>

              {/* Telemetry Footer inside the Card */}
              <div className="px-6 py-3 bg-[#092328]/90 border-t border-[#12544F] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="text-[#9d8bb8] uppercase">Word Count:</span>
                    <span className="text-[#f8f6fc] font-semibold">{currentMsg.wordCount}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#9d8bb8] uppercase">Reading Time:</span>
                    <span className="text-[#f8f6fc] font-semibold">{currentMsg.readingTime}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#9d8bb8] uppercase">Predicted Response:</span>
                  <span className="text-[#8BBB92] font-bold">{currentMsg.responseRate}</span>
                </div>
              </div>
            </div>

            {/* Action Control Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
              <div className="flex items-center gap-3">
                {/* COPY MESSAGE — Now with MovingBorder */}
                <button
                  className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#8BBB92] text-[#092328] font-bold text-xs font-mono hover:bg-[#f8f6fc] transition-colors cursor-pointer overflow-hidden group"
                  onClick={handleCopy}
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent"></span>
                  <span className="material-symbols-outlined text-[18px] relative z-10">
                    {copied ? 'check' : 'content_copy'}
                  </span>
                  <span className="relative z-10">{copied ? 'COPIED' : 'COPY MESSAGE'}</span>
                </button>

                {/* REGENERATE */}
                <button
                  className="px-4 py-2.5 rounded-md bg-[#12544F] hover:bg-[#2A835F] text-[#f8f6fc] border border-[#2A835F]/40 font-semibold text-xs font-mono flex items-center gap-2 transition-colors cursor-pointer"
                  id="regen-btn"
                  onClick={handleRegenerate}
                >
                  <span
                    className={`material-symbols-outlined text-[18px] text-[#8BBB92] ${
                      isRegenerating ? 'animate-spin' : ''
                    }`}
                  >
                    auto_awesome
                  </span>
                  <span>REGENERATE</span>
                </button>
              </div>

              {/* Secondary Auxiliary Actions */}
              <div className="flex items-center gap-2">
                <button
                  className="px-3.5 py-2 rounded-md bg-[#0e3d3c] hover:bg-[#12544F] text-[#e2d7f0] border border-[#12544F] text-xs font-mono transition-colors flex items-center gap-1.5 cursor-pointer"
                  onClick={() => navigateTo('growth', 'push')}
                >
                  <span className="material-symbols-outlined text-[16px] text-[#8BBB92]">tune</span>
                  <span>Simulate Impact</span>
                </button>
                <button
                  className="px-3.5 py-2 rounded-md bg-[#0e3d3c] hover:bg-[#12544F] text-[#e2d7f0] border border-[#12544F] text-xs font-mono transition-colors flex items-center gap-1.5 cursor-pointer"
                  onClick={handleRegenerate}
                >
                  <span className="material-symbols-outlined text-[16px] text-[#2A835F]">splitscreen</span>
                  <span>A/B Variant Test</span>
                </button>
              </div>
            </div>

            {/* Toast Notification */}
            {copied && (
              <div className="px-4 py-2 rounded-md bg-[#0e3d3c] border border-[#2A835F] text-[#8BBB92] font-mono text-xs self-start flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">done_all</span>
                <span>Message copied to clipboard with telemetry tracking token.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};