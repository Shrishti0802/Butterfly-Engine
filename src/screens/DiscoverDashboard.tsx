import React, { useState } from 'react';
import { NavigationProps } from '../types';
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export const DiscoverDashboard: React.FC<NavigationProps> = ({ navigateTo }) => {
  const [filter, setFilter] = useState<'All' | 'High Density' | 'Campus' | 'Enterprise'>('All');

  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full pb-12">
        {/* Page Header Metadata Strip */}
        <div className="relative z-10 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0e3d3c] border border-[#12544F] text-[#8BBB92] font-mono text-xs uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8BBB92]"></span>
                Active Radar
              </span>
              <span className="text-[#67548c] font-mono text-xs">/</span>
              <span className="font-mono text-xs text-[#8BBB92] uppercase tracking-wider">
                Cohort Discovery
              </span>
            </div>
            <h1 className="text-3xl font-bold text-[#f8f6fc] tracking-tight">
              Community Intelligence Radar
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-3.5 py-1.5 rounded-md bg-[#0e3d3c] border border-[#12544F] flex items-center gap-2 text-[#e2d7f0] font-mono text-xs">
              <span className="material-symbols-outlined text-[#8BBB92] text-[18px]">hub</span>
              <span>48 Total Clusters Analyzed</span>
            </div>
            <button
              className="px-3.5 py-1.5 rounded-md bg-[#12544F] hover:bg-[#2A835F] text-[#f8f6fc] border border-[#2A835F]/40 font-medium text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[#8BBB92] text-[18px]">tune</span>
              Parameters
            </button>
          </div>
        </div>

        {/* Top Target Community Hero Card */}
        <div className="relative z-10 mb-8 rounded-xl bg-[#0e3d3c]/90 border border-[#12544F] p-6 md:p-8 transition-all">
          <div className="relative z-10 flex flex-col gap-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8BBB92]"></span>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#8BBB92] font-semibold">
                    Target Community Focus
                  </span>
                </div>
                {/* Custom Interactive-style Dropdown - Links to Identify */}
                <div
                  className="group relative inline-flex items-center gap-3 w-fit cursor-pointer pt-1"
                  onClick={() => navigateTo('identify', 'push')}
                  title="View Key People for University Hostel Cluster"
                >
                  <span className="text-2xl md:text-3xl font-bold text-[#f8f6fc] tracking-tight group-hover:text-[#8BBB92] transition-colors">
                    University Hostel Cluster
                  </span>
                  <div className="h-7 w-7 rounded-md bg-[#092328] border border-[#12544F] flex items-center justify-center text-[#8BBB92] group-hover:text-[#8BBB92] group-hover:border-[#2A835F] transition-colors">
                    <span className="material-symbols-outlined text-[18px]">keyboard_arrow_down</span>
                  </div>
                </div>
              </div>

              {/* Quick Action Badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#12544F]/40 border border-[#12544F] text-[#e2d7f0] text-xs font-medium">
                  <span className="material-symbols-outlined text-[#8BBB92] text-[16px]">local_fire_department</span>
                  High Intent Cluster
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#12544F]/40 border border-[#12544F] text-[#e2d7f0] text-xs font-medium">
                  <span className="material-symbols-outlined text-[#2A835F] text-[16px]">sensors</span>
                  Active Inbound Requests
                </span>
                <button
                  className="relative inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#8BBB92] text-[#092328] text-sm font-bold hover:bg-[#f8f6fc] transition-colors cursor-pointer overflow-hidden group"
                  onClick={() => navigateTo('ignite', 'push')}
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent"></span>
                  <span className="material-symbols-outlined text-[18px] relative z-10">rocket_launch</span>
                  <span className="relative z-10">Initiate Dispatch</span>
                </button>
              </div>
            </div>

            {/* Inline Stats & Telemetry Row */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-4 text-[#8BBB92] font-mono text-xs bg-[#092328]/80 border border-[#12544F] rounded-lg px-4 py-3">
              <div className="flex items-center gap-2 text-[#e2d7f0]">
                <span className="material-symbols-outlined text-[#8BBB92] text-[18px]">group</span>
                <span className="font-semibold text-[#f8f6fc]">320</span>
                <span className="text-[#8BBB92]">registered members</span>
              </div>
              <span className="text-[#67548c] select-none">•</span>
              <div className="flex items-center gap-2 text-[#e2d7f0]">
                <span className="material-symbols-outlined text-[#8BBB92] text-[18px]">alarm</span>
                <span className="font-semibold text-[#f8f6fc]">8:00 AM</span>
                <span className="text-[#8BBB92]">peak departure</span>
              </div>
              <span className="text-[#67548c] select-none">•</span>
              <div className="flex items-center gap-2 text-[#e2d7f0]">
                <span className="material-symbols-outlined text-[#2A835F] text-[18px]">alt_route</span>
                <span className="font-medium text-[#e2d7f0]">North Campus</span>
                <span className="material-symbols-outlined text-[14px] text-[#67548c]">arrow_forward</span>
                <span className="font-medium text-[#e2d7f0]">Main Engineering Complex</span>
              </div>
              <span className="text-[#67548c] select-none hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 text-[#8BBB92] font-mono text-xs ml-auto">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span>99.4% Corridor Confidence</span>
              </div>
            </div>
          </div>
        </div>

        {/* Two-Column Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
          {/* LEFT: Community Potential Score */}
          <div className="lg:col-span-5 rounded-xl bg-[#0e3d3c]/90 border border-[#12544F] p-6 md:p-7 flex flex-col justify-between transition-colors">
            <div>
              {/* Header and Tooltip */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#8BBB92] font-semibold">
                    Community Potential Score
                  </span>
                  <div className="group/tip relative flex items-center">
                    <span className="material-symbols-outlined text-[#9d8bb8] text-[16px] cursor-help hover:text-[#f8f6fc] transition-colors">
                      help_outline
                    </span>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/tip:flex flex-col w-56 p-2.5 rounded-lg bg-[#092328] border border-[#12544F] text-[#e2d7f0] text-xs shadow-xl z-30 pointer-events-none">
                      Aggregate viability metric indexing route affinity, temporal synchronization, and density volume.
                    </div>
                  </div>
                </div>
                <span className="font-mono text-xs px-2.5 py-0.5 rounded-md bg-[#092328] text-[#8BBB92] border border-[#12544F]">
                  CPS-v2
                </span>
              </div>

              {/* Giant CPS Score Display */}
              <div className="flex items-baseline gap-3 my-2">
                <TextGenerateEffect
                  words="88"
                  className="text-6xl font-extrabold tracking-tight text-[#f8f6fc] inline-block"
                />
                <div className="flex flex-col">
                  <span className="text-xl text-[#9d8bb8] font-semibold">/100</span>
                  <span className="inline-flex items-center gap-1 font-mono text-xs text-[#8BBB92] font-medium mt-0.5">
                    <span className="material-symbols-outlined text-[14px]">trending_up</span>
                    +4.2 pts wk/wk
                  </span>
                </div>
              </div>

              {/* Status Pill */}
              <div className="mt-2 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#2A835F]/20 border border-[#2A835F]/40 text-[#8BBB92] text-xs font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8BBB92]"></span>
                  <span>Top 5% Cohort • High Readiness</span>
                </div>
              </div>
            </div>

            {/* Trend Sparkline Graphic Visualization */}
            <div className="my-3 py-3 px-4 rounded-lg bg-[#092328]/90 border border-[#12544F] flex flex-col gap-2">
              <div className="flex items-center justify-between text-[#8BBB92] font-mono text-xs">
                <span>6-Week Potential Trajectory</span>
                <span className="text-[#8BBB92] font-medium">Converging Target</span>
              </div>
              <div className="w-full h-16 flex items-end">
                <svg className="w-full h-full overflow-visible" fill="none" preserveAspectRatio="none" viewBox="0 0 280 60">
                  <defs>
                    <linearGradient id="greenGrad" x1="0%" x2="0%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#2A835F" stopOpacity="0.3"></stop>
                      <stop offset="100%" stopColor="#092328" stopOpacity="0.0"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,48 C40,46 70,36 110,38 C150,40 180,22 220,18 C250,15 265,10 280,6 L280,60 L0,60 Z"
                    fill="url(#greenGrad)"
                  ></path>
                  <path
                    d="M0,48 C40,46 70,36 110,38 C150,40 180,22 220,18 C250,15 265,10 280,6"
                    stroke="#8BBB92"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                  ></path>
                  <circle cx="280" cy="6" fill="#092328" r="3.5" stroke="#8BBB92" strokeWidth="2"></circle>
                </svg>
              </div>
            </div>

            {/* Insight Note Footer */}
            <div className="mt-4 pt-4 flex items-start gap-3 bg-[#092328] border border-[#12544F] rounded-lg p-3">
              <span className="material-symbols-outlined text-[#8BBB92] text-[18px] shrink-0 mt-0.5">auto_awesome</span>
              <p className="text-xs text-[#8BBB92] leading-relaxed">
                Optimal launch threshold reached. High density concentration predicts{' '}
                <span className="text-[#f8f6fc] font-medium">89% organic seat filling</span> within first 72 hours.
              </p>
            </div>
          </div>

          {/* RIGHT: Breakdown Glass Card */}
          <div className="lg:col-span-7 rounded-xl bg-[#0e3d3c]/90 border border-[#12544F] p-6 md:p-7 flex flex-col justify-between transition-colors">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#8BBB92] font-semibold">
                    Signal Diagnostics
                  </span>
                  <h3 className="text-lg font-bold text-[#f8f6fc] mt-0.5">
                    Score Breakdown &amp; Signals
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#092328] border border-[#12544F] font-mono text-xs text-[#8BBB92]">
                  <span className="material-symbols-outlined text-[#8BBB92] text-[14px]">query_stats</span>
                  Calculated across 1,240 commute queries
                </div>
              </div>

              {/* 5 Progress Bars Grid */}
              <div className="flex flex-col gap-4">
                {/* 1. Route Overlap */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-[#e2d7f0] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#2A835F] text-[16px]">alt_route</span>
                      Route Overlap
                    </span>
                    <span className="font-mono text-xs font-bold text-[#f8f6fc]">92%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-[#092328] border border-[#12544F]/60 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#8BBB92] transition-all duration-700"
                      style={{ width: '92%' }}
                    ></div>
                  </div>
                </div>

                {/* 2. Density */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-[#e2d7f0] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#2A835F] text-[16px]">grid_goldenratio</span>
                      Density Concentration
                    </span>
                    <span className="font-mono text-xs font-bold text-[#f8f6fc]">85%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-[#092328] border border-[#12544F]/60 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#8BBB92] transition-all duration-700"
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>

                {/* 3. Schedule Overlap */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-[#e2d7f0] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#2A835F] text-[16px]">schedule</span>
                      Schedule Synchronization
                    </span>
                    <span className="font-mono text-xs font-bold text-[#f8f6fc]">88%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-[#092328] border border-[#12544F]/60 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#8BBB92] transition-all duration-700"
                      style={{ width: '88%' }}
                    ></div>
                  </div>
                </div>

                {/* 4. Pain Signal */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-[#e2d7f0] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#2A835F] text-[16px]">crisis_alert</span>
                      Commute Friction / Pain Signal
                    </span>
                    <span className="font-mono text-xs font-bold text-[#f8f6fc]">90%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-[#092328] border border-[#12544F]/60 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#8BBB92] transition-all duration-700"
                      style={{ width: '90%' }}
                    ></div>
                  </div>
                </div>

                {/* 5. Driver Availability */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-[#e2d7f0] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#2A835F] text-[16px]">directions_car</span>
                      Driver Availability Ratio
                    </span>
                    <span className="font-mono text-xs font-bold text-[#f8f6fc]">75%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-[#092328] border border-[#12544F]/60 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#2A835F] transition-all duration-700"
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Signal Footnote Strip */}
            <div className="mt-6 pt-4 border-t border-[#12544F] flex flex-wrap items-center justify-between gap-3 text-[#9d8bb8] font-mono text-xs">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[15px] text-[#8BBB92]">check_circle</span>
                <span>Trace verified with 0.8s resolution</span>
              </div>
              <a
                className="text-[#8BBB92] hover:text-[#f8f6fc] transition-colors font-medium flex items-center gap-1 cursor-pointer"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('identify', 'push');
                }}
              >
                Explore Raw Telemetry
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: "OTHER COMMUNITIES" */}
        <div className="relative z-10 flex flex-col gap-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <h2 className="font-mono text-xs uppercase tracking-wider font-bold text-[#8BBB92]">
                Monitored Communities
              </h2>
              <span className="px-2 py-0.5 rounded-md bg-[#0e3d3c] border border-[#12544F] text-[#8BBB92] font-mono text-xs font-semibold">
                12 Available
              </span>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1 p-1 rounded-lg bg-[#0e3d3c] border border-[#12544F] overflow-x-auto max-w-full">
              {(['All', 'High Density', 'Campus', 'Enterprise'] as const).map((tab) => (
                <button
                  key={tab}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                    filter === tab
                      ? 'bg-[#12544F] text-[#f8f6fc] border border-[#2A835F]/50 font-semibold'
                      : 'text-[#8BBB92] hover:text-[#f8f6fc] hover:bg-[#12544F]/40'
                  }`}
                  onClick={() => setFilter(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* 3-Column Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1: University Hostel Cluster */}
            <CardContainer className="inter-var">
              <CardBody className="rounded-xl bg-[#0e3d3c]/90 border border-[#12544F] hover:border-[#2A835F] p-5 flex flex-col justify-between transition-colors group cursor-pointer h-auto w-auto">
                <CardItem translateZ={20} className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#092328] border border-[#12544F] text-[#8BBB92] font-mono text-xs font-medium">
                      Active Focus
                    </span>
                    <span className="material-symbols-outlined text-[#2A835F] group-hover:text-[#8BBB92] transition-colors text-[20px]">
                      school
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#f8f6fc] group-hover:text-[#8BBB92] transition-colors">
                      University Hostel Cluster
                    </h3>
                    <p className="font-mono text-xs text-[#8BBB92] mt-1">
                      320 members • 12 min avg match
                    </p>
                  </div>
                </CardItem>
                <CardItem
                  translateZ={40}
                  className="mt-5 pt-3 border-t border-[#12544F] flex items-center justify-between w-full"
                >
                  <div>
                    <span className="font-mono text-[11px] uppercase text-[#9d8bb8]">Community Score</span>
                    <div className="text-2xl font-bold text-[#f8f6fc] leading-none mt-1">
                      88
                    </div>
                  </div>
                  <button
                    className="h-8 w-8 rounded-lg bg-[#12544F] border border-[#2A835F]/40 flex items-center justify-center text-[#f8f6fc] group-hover:bg-[#8BBB92] group-hover:text-[#092328] group-hover:border-[#8BBB92] transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateTo('identify', 'push');
                    }}
                  >
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </button>
                </CardItem>
              </CardBody>
            </CardContainer>

            {/* Card 2: Tech Park Commuters (Highlighted Winner Card) */}
            <CardContainer className="inter-var">
              <CardBody className="rounded-xl bg-[#12544F] border border-[#2A835F]/60 border-t-2 border-t-[#8BBB92] p-5 flex flex-col justify-between transition-colors relative h-auto w-auto">
                <CardItem translateZ={20} className="flex flex-col gap-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#2A835F]/40 border border-[#2A835F]/60 text-[#8BBB92] font-mono text-xs font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#8BBB92]"></span>
                      Highest CPS • Recommend Next
                    </span>
                    <span className="material-symbols-outlined text-[#8BBB92] text-[20px]">domain</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#f8f6fc]">
                      Tech Park Commuters
                    </h3>
                    <p className="font-mono text-xs text-[#8BBB92] mt-1">
                      840 members • 6 min avg match
                    </p>
                  </div>
                </CardItem>

                <CardItem translateZ={40} className="mt-5 pt-3 border-t border-[#2A835F]/40 flex items-center justify-between relative z-10 w-full">
                  <div>
                    <span className="font-mono text-[11px] uppercase text-[#8BBB92] font-semibold">Community Score</span>
                    <div className="text-2xl font-bold text-[#8BBB92] leading-none mt-1">
                      92
                    </div>
                  </div>
                  <button
                    className="px-3 py-1.5 rounded-md bg-[#8BBB92] hover:bg-[#f8f6fc] text-[#092328] font-mono text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
                    onClick={() => navigateTo('ignite', 'push')}
                  >
                    <span>Queue Launch</span>
                    <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                  </button>
                </CardItem>
              </CardBody>
            </CardContainer>

            {/* Card 3: Green Valley Society */}
            <CardContainer className="inter-var">
              <CardBody className="rounded-xl bg-[#0e3d3c]/90 border border-[#12544F] hover:border-[#2A835F] p-5 flex flex-col justify-between transition-colors group cursor-pointer h-auto w-auto">
                <CardItem translateZ={20} className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#092328] border border-[#12544F] text-[#8BBB92] font-mono text-xs font-medium">
                      Nurturing Phase
                    </span>
                    <span className="material-symbols-outlined text-[#2A835F] group-hover:text-[#8BBB92] transition-colors text-[20px]">
                      villa
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#f8f6fc] group-hover:text-[#8BBB92] transition-colors">
                      Green Valley Society
                    </h3>
                    <p className="font-mono text-xs text-[#8BBB92] mt-1">
                      190 members • 22 min avg match
                    </p>
                  </div>
                </CardItem>
                <CardItem translateZ={40} className="mt-5 pt-3 border-t border-[#12544F] flex items-center justify-between w-full">
                  <div>
                    <span className="font-mono text-[11px] uppercase text-[#9d8bb8]">Community Score</span>
                    <div className="text-2xl font-bold text-[#e2d7f0] leading-none mt-1">
                      71
                    </div>
                  </div>
                  <button
                    className="h-8 w-8 rounded-lg bg-[#12544F] border border-[#2A835F]/40 flex items-center justify-center text-[#f8f6fc] group-hover:bg-[#8BBB92] group-hover:text-[#092328] group-hover:border-[#8BBB92] transition-colors cursor-pointer"
                    onClick={() => navigateTo('identify', 'push')}
                  >
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </button>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </div>
    </div>
  );
};