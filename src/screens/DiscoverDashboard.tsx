import React, { useState } from 'react';
import { NavigationProps } from '../types';

export const DiscoverDashboard: React.FC<NavigationProps> = ({ navigateTo }) => {
  const [filter, setFilter] = useState<'All' | 'High Density' | 'Campus' | 'Enterprise'>('All');

  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full pb-12">
        {/* Page Header Metadata Strip */}
        <div className="relative z-10 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#24146a] border border-[#3D2C8D] text-[#C996CC] font-mono text-xs uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C996CC]"></span>
                Active Radar
              </span>
              <span className="text-[#67548c] font-mono text-xs">/</span>
              <span className="font-mono text-xs text-[#cbbbe4] uppercase tracking-wider">
                Cohort Discovery
              </span>
            </div>
            <h1 className="text-3xl font-bold text-[#f8f6fc] tracking-tight">
              Community Intelligence Radar
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-3.5 py-1.5 rounded-md bg-[#24146a] border border-[#3D2C8D] flex items-center gap-2 text-[#e2d7f0] font-mono text-xs">
              <span className="material-symbols-outlined text-[#C996CC] text-[18px]">hub</span>
              <span>48 Total Clusters Analyzed</span>
            </div>
            <button
              className="px-3.5 py-1.5 rounded-md bg-[#3D2C8D] hover:bg-[#4d38b0] text-[#f8f6fc] border border-[#916BBF]/40 font-medium text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[#C996CC] text-[18px]">tune</span>
              Parameters
            </button>
          </div>
        </div>

        {/* Top Target Community Hero Card */}
        <div className="relative z-10 mb-8 rounded-xl bg-[#24146a]/90 border border-[#3D2C8D] p-6 md:p-8 transition-all">
          <div className="relative z-10 flex flex-col gap-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C996CC]"></span>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#C996CC] font-semibold">
                    Target Community Focus
                  </span>
                </div>
                {/* Custom Interactive-style Dropdown - Links to Identify */}
                <div
                  className="group relative inline-flex items-center gap-3 w-fit cursor-pointer pt-1"
                  onClick={() => navigateTo('identify', 'push')}
                  title="View Key People for University Hostel Cluster"
                >
                  <span className="text-2xl md:text-3xl font-bold text-[#f8f6fc] tracking-tight group-hover:text-[#C996CC] transition-colors">
                    University Hostel Cluster
                  </span>
                  <div className="h-7 w-7 rounded-md bg-[#1C0C5B] border border-[#3D2C8D] flex items-center justify-center text-[#cbbbe4] group-hover:text-[#C996CC] group-hover:border-[#916BBF] transition-colors">
                    <span className="material-symbols-outlined text-[18px]">keyboard_arrow_down</span>
                  </div>
                </div>
              </div>

              {/* Quick Action Badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#3D2C8D]/40 border border-[#3D2C8D] text-[#e2d7f0] text-xs font-medium">
                  <span className="material-symbols-outlined text-[#C996CC] text-[16px]">local_fire_department</span>
                  High Intent Cluster
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#3D2C8D]/40 border border-[#3D2C8D] text-[#e2d7f0] text-xs font-medium">
                  <span className="material-symbols-outlined text-[#916BBF] text-[16px]">sensors</span>
                  Active Inbound Requests
                </span>
                <button
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#C996CC] text-[#1C0C5B] text-sm font-bold hover:bg-[#d8aedd] transition-colors cursor-pointer"
                  onClick={() => navigateTo('ignite', 'push')}
                >
                  <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
                  Initiate Dispatch
                </button>
              </div>
            </div>

            {/* Inline Stats & Telemetry Row */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-4 text-[#cbbbe4] font-mono text-xs bg-[#150947]/80 border border-[#3D2C8D] rounded-lg px-4 py-3">
              <div className="flex items-center gap-2 text-[#e2d7f0]">
                <span className="material-symbols-outlined text-[#C996CC] text-[18px]">group</span>
                <span className="font-semibold text-[#f8f6fc]">320</span>
                <span className="text-[#cbbbe4]">registered members</span>
              </div>
              <span className="text-[#67548c] select-none">•</span>
              <div className="flex items-center gap-2 text-[#e2d7f0]">
                <span className="material-symbols-outlined text-[#C996CC] text-[18px]">alarm</span>
                <span className="font-semibold text-[#f8f6fc]">8:00 AM</span>
                <span className="text-[#cbbbe4]">peak departure</span>
              </div>
              <span className="text-[#67548c] select-none">•</span>
              <div className="flex items-center gap-2 text-[#e2d7f0]">
                <span className="material-symbols-outlined text-[#916BBF] text-[18px]">alt_route</span>
                <span className="font-medium text-[#e2d7f0]">North Campus</span>
                <span className="material-symbols-outlined text-[14px] text-[#67548c]">arrow_forward</span>
                <span className="font-medium text-[#e2d7f0]">Main Engineering Complex</span>
              </div>
              <span className="text-[#67548c] select-none hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 text-[#C996CC] font-mono text-xs ml-auto">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span>99.4% Corridor Confidence</span>
              </div>
            </div>
          </div>
        </div>

        {/* Two-Column Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
          {/* LEFT: Community Potential Score */}
          <div className="lg:col-span-5 rounded-xl bg-[#24146a]/90 border border-[#3D2C8D] p-6 md:p-7 flex flex-col justify-between transition-colors">
            <div>
              {/* Header and Tooltip */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#cbbbe4] font-semibold">
                    Community Potential Score
                  </span>
                  <div className="group/tip relative flex items-center">
                    <span className="material-symbols-outlined text-[#9d8bb8] text-[16px] cursor-help hover:text-[#f8f6fc] transition-colors">
                      help_outline
                    </span>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/tip:flex flex-col w-56 p-2.5 rounded-lg bg-[#150947] border border-[#3D2C8D] text-[#e2d7f0] text-xs shadow-xl z-30 pointer-events-none">
                      Aggregate viability metric indexing route affinity, temporal synchronization, and density volume.
                    </div>
                  </div>
                </div>
                <span className="font-mono text-xs px-2.5 py-0.5 rounded-md bg-[#1C0C5B] text-[#cbbbe4] border border-[#3D2C8D]">
                  CPS-v2
                </span>
              </div>

              {/* Giant CPS Score Display */}
              <div className="flex items-baseline gap-3 my-2">
                <span className="text-6xl font-extrabold tracking-tight text-[#f8f6fc]">
                  88
                </span>
                <div className="flex flex-col">
                  <span className="text-xl text-[#9d8bb8] font-semibold">/100</span>
                  <span className="inline-flex items-center gap-1 font-mono text-xs text-[#C996CC] font-medium mt-0.5">
                    <span className="material-symbols-outlined text-[14px]">trending_up</span>
                    +4.2 pts wk/wk
                  </span>
                </div>
              </div>

              {/* Status Pill */}
              <div className="mt-2 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#916BBF]/20 border border-[#916BBF]/40 text-[#C996CC] text-xs font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C996CC]"></span>
                  <span>Top 5% Cohort • High Readiness</span>
                </div>
              </div>
            </div>

            {/* Trend Sparkline Graphic Visualization */}
            <div className="my-3 py-3 px-4 rounded-lg bg-[#150947]/90 border border-[#3D2C8D] flex flex-col gap-2">
              <div className="flex items-center justify-between text-[#cbbbe4] font-mono text-xs">
                <span>6-Week Potential Trajectory</span>
                <span className="text-[#C996CC] font-medium">Converging Target</span>
              </div>
              <div className="w-full h-16 flex items-end">
                <svg className="w-full h-full overflow-visible" fill="none" preserveAspectRatio="none" viewBox="0 0 280 60">
                  <defs>
                    <linearGradient id="purpleIrisGrad" x1="0%" x2="0%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#916BBF" stopOpacity="0.3"></stop>
                      <stop offset="100%" stopColor="#1C0C5B" stopOpacity="0.0"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,48 C40,46 70,36 110,38 C150,40 180,22 220,18 C250,15 265,10 280,6 L280,60 L0,60 Z"
                    fill="url(#purpleIrisGrad)"
                  ></path>
                  <path
                    d="M0,48 C40,46 70,36 110,38 C150,40 180,22 220,18 C250,15 265,10 280,6"
                    stroke="#C996CC"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                  ></path>
                  <circle cx="280" cy="6" fill="#1C0C5B" r="3.5" stroke="#C996CC" strokeWidth="2"></circle>
                </svg>
              </div>
            </div>

            {/* Insight Note Footer */}
            <div className="mt-4 pt-4 flex items-start gap-3 bg-[#150947] border border-[#3D2C8D] rounded-lg p-3">
              <span className="material-symbols-outlined text-[#C996CC] text-[18px] shrink-0 mt-0.5">auto_awesome</span>
              <p className="text-xs text-[#cbbbe4] leading-relaxed">
                Optimal launch threshold reached. High density concentration predicts{' '}
                <span className="text-[#f8f6fc] font-medium">89% organic seat filling</span> within first 72 hours.
              </p>
            </div>
          </div>

          {/* RIGHT: Breakdown Glass Card */}
          <div className="lg:col-span-7 rounded-xl bg-[#24146a]/90 border border-[#3D2C8D] p-6 md:p-7 flex flex-col justify-between transition-colors">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#C996CC] font-semibold">
                    Signal Diagnostics
                  </span>
                  <h3 className="text-lg font-bold text-[#f8f6fc] mt-0.5">
                    Score Breakdown &amp; Signals
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#1C0C5B] border border-[#3D2C8D] font-mono text-xs text-[#cbbbe4]">
                  <span className="material-symbols-outlined text-[#C996CC] text-[14px]">query_stats</span>
                  Calculated across 1,240 commute queries
                </div>
              </div>

              {/* 5 Progress Bars Grid */}
              <div className="flex flex-col gap-4">
                {/* 1. Route Overlap */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-[#e2d7f0] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#916BBF] text-[16px]">alt_route</span>
                      Route Overlap
                    </span>
                    <span className="font-mono text-xs font-bold text-[#f8f6fc]">92%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-[#1C0C5B] border border-[#3D2C8D]/60 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#C996CC] transition-all duration-700"
                      style={{ width: '92%' }}
                    ></div>
                  </div>
                </div>

                {/* 2. Density */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-[#e2d7f0] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#916BBF] text-[16px]">grid_goldenratio</span>
                      Density Concentration
                    </span>
                    <span className="font-mono text-xs font-bold text-[#f8f6fc]">85%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-[#1C0C5B] border border-[#3D2C8D]/60 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#C996CC] transition-all duration-700"
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>

                {/* 3. Schedule Overlap */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-[#e2d7f0] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#916BBF] text-[16px]">schedule</span>
                      Schedule Synchronization
                    </span>
                    <span className="font-mono text-xs font-bold text-[#f8f6fc]">88%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-[#1C0C5B] border border-[#3D2C8D]/60 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#C996CC] transition-all duration-700"
                      style={{ width: '88%' }}
                    ></div>
                  </div>
                </div>

                {/* 4. Pain Signal */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-[#e2d7f0] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#916BBF] text-[16px]">crisis_alert</span>
                      Commute Friction / Pain Signal
                    </span>
                    <span className="font-mono text-xs font-bold text-[#f8f6fc]">90%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-[#1C0C5B] border border-[#3D2C8D]/60 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#C996CC] transition-all duration-700"
                      style={{ width: '90%' }}
                    ></div>
                  </div>
                </div>

                {/* 5. Driver Availability */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-[#e2d7f0] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#916BBF] text-[16px]">directions_car</span>
                      Driver Availability Ratio
                    </span>
                    <span className="font-mono text-xs font-bold text-[#f8f6fc]">75%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-[#1C0C5B] border border-[#3D2C8D]/60 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#916BBF] transition-all duration-700"
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Signal Footnote Strip */}
            <div className="mt-6 pt-4 border-t border-[#3D2C8D] flex flex-wrap items-center justify-between gap-3 text-[#9d8bb8] font-mono text-xs">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[15px] text-[#C996CC]">check_circle</span>
                <span>Trace verified with 0.8s resolution</span>
              </div>
              <a
                className="text-[#C996CC] hover:text-[#d8aedd] transition-colors font-medium flex items-center gap-1 cursor-pointer"
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
              <h2 className="font-mono text-xs uppercase tracking-wider font-bold text-[#cbbbe4]">
                Monitored Communities
              </h2>
              <span className="px-2 py-0.5 rounded-md bg-[#24146a] border border-[#3D2C8D] text-[#C996CC] font-mono text-xs font-semibold">
                12 Available
              </span>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-1 p-1 rounded-lg bg-[#24146a] border border-[#3D2C8D] overflow-x-auto max-w-full">
              {(['All', 'High Density', 'Campus', 'Enterprise'] as const).map((tab) => (
                <button
                  key={tab}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                    filter === tab
                      ? 'bg-[#3D2C8D] text-[#f8f6fc] border border-[#916BBF]/50 font-semibold'
                      : 'text-[#cbbbe4] hover:text-[#f8f6fc] hover:bg-[#3D2C8D]/40'
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
            <div
              className="rounded-xl bg-[#24146a]/90 border border-[#3D2C8D] hover:border-[#916BBF] p-5 flex flex-col justify-between transition-colors group cursor-pointer"
              onClick={() => navigateTo('identify', 'push')}
              title="Click to view Key People"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#1C0C5B] border border-[#3D2C8D] text-[#C996CC] font-mono text-xs font-medium">
                    Active Focus
                  </span>
                  <span className="material-symbols-outlined text-[#916BBF] group-hover:text-[#C996CC] transition-colors text-[20px]">
                    school
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#f8f6fc] group-hover:text-[#C996CC] transition-colors">
                    University Hostel Cluster
                  </h3>
                  <p className="font-mono text-xs text-[#cbbbe4] mt-1">
                    320 members • 12 min avg match
                  </p>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-[#3D2C8D] flex items-center justify-between">
                <div>
                  <span className="font-mono text-[11px] uppercase text-[#9d8bb8]">Community Score</span>
                  <div className="text-2xl font-bold text-[#f8f6fc] leading-none mt-1">
                    88
                  </div>
                </div>
                <button
                  className="h-8 w-8 rounded-lg bg-[#3D2C8D] border border-[#916BBF]/40 flex items-center justify-center text-[#f8f6fc] group-hover:bg-[#C996CC] group-hover:text-[#1C0C5B] group-hover:border-[#C996CC] transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateTo('identify', 'push');
                  }}
                >
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </button>
              </div>
            </div>

            {/* Card 2: Tech Park Commuters (Highlighted Winner Card) */}
            <div className="rounded-xl bg-[#271577] border border-[#916BBF]/60 border-t-2 border-t-[#C996CC] p-5 flex flex-col justify-between transition-colors relative">
              <div className="flex flex-col gap-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#916BBF]/25 border border-[#916BBF]/50 text-[#C996CC] font-mono text-xs font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C996CC]"></span>
                    Highest CPS • Recommend Next
                  </span>
                  <span className="material-symbols-outlined text-[#C996CC] text-[20px]">domain</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#f8f6fc]">
                    Tech Park Commuters
                  </h3>
                  <p className="font-mono text-xs text-[#cbbbe4] mt-1">
                    840 members • 6 min avg match
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#3D2C8D] flex items-center justify-between relative z-10">
                <div>
                  <span className="font-mono text-[11px] uppercase text-[#C996CC] font-semibold">Community Score</span>
                  <div className="text-2xl font-bold text-[#C996CC] leading-none mt-1">
                    92
                  </div>
                </div>
                <button
                  className="px-3 py-1.5 rounded-md bg-[#C996CC] hover:bg-[#d8aedd] text-[#1C0C5B] font-mono text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
                  onClick={() => navigateTo('ignite', 'push')}
                >
                  <span>Queue Launch</span>
                  <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Card 3: Green Valley Society */}
            <div className="rounded-xl bg-[#24146a]/90 border border-[#3D2C8D] hover:border-[#916BBF] p-5 flex flex-col justify-between transition-colors group">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#1C0C5B] border border-[#3D2C8D] text-[#cbbbe4] font-mono text-xs font-medium">
                    Nurturing Phase
                  </span>
                  <span className="material-symbols-outlined text-[#916BBF] group-hover:text-[#C996CC] transition-colors text-[20px]">
                    villa
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#f8f6fc] group-hover:text-[#C996CC] transition-colors">
                    Green Valley Society
                  </h3>
                  <p className="font-mono text-xs text-[#cbbbe4] mt-1">
                    190 members • 22 min avg match
                  </p>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-[#3D2C8D] flex items-center justify-between">
                <div>
                  <span className="font-mono text-[11px] uppercase text-[#9d8bb8]">Community Score</span>
                  <div className="text-2xl font-bold text-[#e2d7f0] leading-none mt-1">
                    71
                  </div>
                </div>
                <button
                  className="h-8 w-8 rounded-lg bg-[#3D2C8D] border border-[#916BBF]/40 flex items-center justify-center text-[#f8f6fc] group-hover:bg-[#C996CC] group-hover:text-[#1C0C5B] group-hover:border-[#C996CC] transition-colors cursor-pointer"
                  onClick={() => navigateTo('identify', 'push')}
                >
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
