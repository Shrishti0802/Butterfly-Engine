import React, { useState } from 'react';
import { NavigationProps } from '../types';
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export const IdentifyKeyPeople: React.FC<NavigationProps> = ({ navigateTo }) => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const isHighlighted = (id: string) => {
    if (!hoveredNode) return false;
    return hoveredNode === id;
  };

  const getEdgeOpacity = (nodeA: string, nodeB: string) => {
    if (!hoveredNode) return 0.55;
    if (hoveredNode === nodeA || hoveredNode === nodeB) return 0.95;
    return 0.2;
  };

  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full pb-12">
        {/* Screen Title Bar & Metadata Header */}
        <section className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0e3d3c] border border-[#12544F] text-[#8BBB92] font-mono text-xs uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8BBB92]"></span>
                Cluster Node Analysis
              </span>
              <span className="text-[#67548c] font-mono text-xs">/</span>
              <span className="font-mono text-xs text-[#8BBB92] uppercase tracking-wider">
                Key People
              </span>
            </div>
            <div className="flex flex-wrap items-baseline gap-3">
              <TextGenerateEffect
                words="University Hostel Cluster"
                className="text-3xl font-bold text-[#f8f6fc] tracking-tight inline-block"
              />
              <span className="font-mono text-xs text-[#8BBB92] font-medium px-2.5 py-1 rounded-md bg-[#0e3d3c] border border-[#12544F]">
                Cluster #04-B
              </span>
            </div>
            <p className="text-sm text-[#8BBB92] max-w-xl">
              Ranked by Connector Readiness Score (CRS). Topological influence mapping for maximum localized route density.
            </p>
          </div>

          {/* Action & Cluster Health */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0e3d3c] border border-[#12544F] text-[#e2d7f0] font-mono text-xs">
              <span className="material-symbols-outlined text-[#2A835F] text-[18px]">group</span>
              <span>5 Profiles Identified</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0e3d3c] border border-[#12544F] text-[#e2d7f0] font-mono text-xs">
              <span className="material-symbols-outlined text-[#8BBB92] text-[18px]">hub</span>
              <span>Centrality <strong className="text-[#8BBB92] font-semibold">0.94</strong></span>
            </div>
            <button
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#8BBB92] text-[#092328] text-sm font-bold hover:bg-[#f8f6fc] transition-colors cursor-pointer overflow-hidden group"
              onClick={() => navigateTo('ignite', 'push')}
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent"></span>
              <span className="material-symbols-outlined text-[18px] relative z-10">bolt</span>
              <span className="relative z-10">Initiate Activation</span>
            </button>
          </div>
        </section>

        {/* Main Dynamic 2-Column Split */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Ranked Key People List */}
          <div className="lg:col-span-5 flex flex-col space-y-3.5">
            <div className="flex items-center justify-between px-1 pb-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#8BBB92] font-semibold">
                  Ranked Nodes
                </span>
                <span className="px-2 py-0.5 rounded-md bg-[#12544F] font-mono text-xs text-[#f8f6fc]">
                  Top 5
                </span>
              </div>
              <span className="font-mono text-xs text-[#9d8bb8]">SORT: CRS DESC</span>
            </div>

            {/* Card 1: Aisha Khan (Top Ignite Highlight) */}
            <div
              className={`group relative rounded-xl p-4 transition-all duration-300 cursor-pointer bg-[#12544F] border hover:-translate-y-1 hover:shadow-lg hover:shadow-[#8BBB92]/20 ${
                isHighlighted('ak') ? 'border-[#8BBB92] ring-2 ring-[#8BBB92]' : 'border-[#2A835F] hover:border-[#8BBB92]'
              }`}
              onMouseEnter={() => setHoveredNode('ak')}
              onMouseLeave={() => setHoveredNode(null)}
              onClick={() => navigateTo('ignite', 'push')}
              title="Click Aisha Khan to Initiate The Approach"
            >
              <div className="relative flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="text-sm font-bold text-[#8BBB92] font-mono">01</span>
                  <div className="relative w-11 h-11 rounded-lg bg-[#092328] border border-[#12544F] flex items-center justify-center overflow-hidden shrink-0">
                    <img
                      className="w-full h-full object-cover"
                      data-alt="Close up portrait of Aisha Khan"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1fIXrRAxPHo9YJNc75DaanWgMpAsk2xm5EhbL6GGq3lWp_MwqjlQ2KNK2OwzFblIPpj5UXWKDBQmXfzU3yKd1VSnDfwT_aOnrtiafpy7CNpujjoH4Vxzb9-nLYM5nog-YNMSfC4Cz-ldCcMyItLz4w7Kgck_hwAAmAetr_gx_6XmkvDCGO6uxqtZLVkm6p4hnagqYRe1hvEe6MDyJFe74LZClXmBZMeTMHg_uB27uL6ti0tVfkaCi"
                      referrerPolicy="no-referrer"
                      alt="Aisha Khan"
                    />
                    <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[#8BBB92]"></span>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-[#f8f6fc] truncate group-hover:text-[#8BBB92] transition-colors">
                        Aisha Khan
                      </h3>
                      <span className="shrink-0 px-2 py-0.5 rounded-md bg-[#2A835F]/30 border border-[#2A835F]/60 text-[#8BBB92] font-mono text-[11px] font-bold tracking-wide uppercase">
                        Connector
                      </span>
                    </div>
                    <p className="text-xs text-[#8BBB92] truncate mt-0.5">
                      Block B • 3 Mutual Hubs • 14 Commute Trips
                    </p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-2xl font-extrabold text-[#8BBB92] leading-none">
                    91
                  </div>
                  <span className="text-[10px] text-[#9d8bb8] font-mono uppercase tracking-wider">
                    CRS / 100
                  </span>
                </div>
              </div>
              <div className="mt-3 w-full bg-[#092328] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#8BBB92] h-full rounded-full w-[91%]"></div>
              </div>
            </div>

            {/* Card 2: Priya Sharma */}
            <div
              className={`group relative rounded-xl p-4 transition-all duration-300 cursor-pointer bg-[#0e3d3c]/90 border hover:-translate-y-1 hover:shadow-lg hover:shadow-[#2A835F]/20 ${
                isHighlighted('ps') ? 'border-[#2A835F] ring-1 ring-[#2A835F]' : 'border-[#12544F] hover:border-[#2A835F]'
              }`}
              onMouseEnter={() => setHoveredNode('ps')}
              onMouseLeave={() => setHoveredNode(null)}
              onClick={() => navigateTo('ignite', 'push')}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="text-sm text-[#9d8bb8] font-mono">02</span>
                  <div className="relative w-11 h-11 rounded-lg bg-[#092328] border border-[#12544F] flex items-center justify-center overflow-hidden shrink-0">
                    <img
                      className="w-full h-full object-cover"
                      data-alt="Portrait of Priya Sharma"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDar3KoEAGqZn66ie6llqo3AzpPYBevq2dGDxbcWOUUKOKgzbT9mcvCaSeUA9kGseHSZGxpPQUur6KONc7kbYNwf3VWR6_8ktQU-xXixGOXJzrkFd4-v7ab2esqhRB3kGvzbVaxgpJs7u4LaoYhTni70pYwswshuxEdZYOEChOH8VGxvy97cm2wwpm_GA43v23rLW5YnhgujL7D4uWBF3wHkrO9F6ZvxrPPa_EwN1QdvUGFc71E02ix"
                      referrerPolicy="no-referrer"
                      alt="Priya Sharma"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-[#f8f6fc] truncate group-hover:text-[#8BBB92] transition-colors">
                        Priya Sharma
                      </h3>
                      <span className="shrink-0 px-2 py-0.5 rounded-md bg-[#12544F] border border-[#2A835F]/40 text-[#8BBB92] font-mono text-[11px] font-bold tracking-wide uppercase">
                        Ambassador
                      </span>
                    </div>
                    <p className="text-xs text-[#8BBB92] truncate mt-0.5">
                      Main Quad • Daily 8:00 AM Departure
                    </p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-2xl font-bold text-[#e2d7f0] leading-none">
                    85
                  </div>
                  <span className="text-[10px] text-[#9d8bb8] font-mono uppercase tracking-wider">
                    CRS
                  </span>
                </div>
              </div>
              <div className="mt-3 w-full bg-[#092328] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#2A835F] h-full rounded-full w-[85%]"></div>
              </div>
            </div>

            {/* Card 3: Rohan Mehta */}
            <div
              className={`group relative rounded-xl p-4 transition-all duration-300 cursor-pointer bg-[#0e3d3c]/90 border hover:-translate-y-1 hover:shadow-lg hover:shadow-[#2A835F]/20 ${
                isHighlighted('rm') ? 'border-[#2A835F] ring-1 ring-[#2A835F]' : 'border-[#12544F] hover:border-[#2A835F]'
              }`}
              onMouseEnter={() => setHoveredNode('rm')}
              onMouseLeave={() => setHoveredNode(null)}
              onClick={() => navigateTo('ignite', 'push')}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="text-sm text-[#9d8bb8] font-mono">03</span>
                  <div className="relative w-11 h-11 rounded-lg bg-[#092328] border border-[#12544F] flex items-center justify-center overflow-hidden shrink-0">
                    <img
                      className="w-full h-full object-cover"
                      data-alt="Portrait photo of Rohan Mehta"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa2DP0sxE97TApbXx-Il7qqQ1u8u0kLwwi9c0kfBi6K6IZB-weAUwx_xgcYZvefZaK-NdCxU6qdDOUg04ABRx9bgBOlqOesXBipcDworFhCKG90srKFlSrSrnApAJj0Mo0SqxYudJEaPhfN-L1PvxsSGgwoO1k6gRclF_zYmkW-8UZDGd9Jo_Y_eZ3urM1GNeG6HRBYMFV2DsSJ9jl7ipHdk7msvSQaCAYeea-Xns3pwOM5I4fSolO"
                      referrerPolicy="no-referrer"
                      alt="Rohan Mehta"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-[#f8f6fc] truncate group-hover:text-[#8BBB92] transition-colors">
                        Rohan Mehta
                      </h3>
                      <span className="shrink-0 px-2 py-0.5 rounded-md bg-[#12544F] border border-[#2A835F]/40 text-[#8BBB92] font-mono text-[11px] font-bold tracking-wide uppercase">
                        Driver
                      </span>
                    </div>
                    <p className="text-xs text-[#8BBB92] truncate mt-0.5">
                      North Gate • 4 Available Seats
                    </p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-2xl font-bold text-[#e2d7f0] leading-none">
                    78
                  </div>
                  <span className="text-[10px] text-[#9d8bb8] font-mono uppercase tracking-wider">
                    CRS
                  </span>
                </div>
              </div>
              <div className="mt-3 w-full bg-[#092328] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#2A835F] h-full rounded-full w-[78%]"></div>
              </div>
            </div>

            {/* Card 4: Arjun Nair */}
            <div
              className={`group relative rounded-xl p-4 transition-all duration-300 cursor-pointer bg-[#0e3d3c]/90 border hover:-translate-y-1 hover:shadow-lg hover:shadow-[#2A835F]/20 ${
                isHighlighted('an') ? 'border-[#2A835F] ring-1 ring-[#2A835F]' : 'border-[#12544F] hover:border-[#2A835F]'
              }`}
              onMouseEnter={() => setHoveredNode('an')}
              onMouseLeave={() => setHoveredNode(null)}
              onClick={() => navigateTo('ignite', 'push')}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="text-sm text-[#9d8bb8] font-mono">04</span>
                  <div className="relative w-11 h-11 rounded-lg bg-[#092328] border border-[#12544F] flex items-center justify-center overflow-hidden shrink-0 font-mono text-xs font-bold text-[#8BBB92]">
                    AN
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-[#f8f6fc] truncate group-hover:text-[#8BBB92] transition-colors">
                        Arjun Nair
                      </h3>
                      <span className="shrink-0 px-2 py-0.5 rounded-md bg-[#12544F]/60 border border-[#12544F] text-[#8BBB92] font-mono text-[11px] uppercase">
                        Passenger
                      </span>
                    </div>
                    <p className="text-xs text-[#8BBB92] truncate mt-0.5">
                      South Block • High Schedule Flexibility
                    </p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-2xl font-bold text-[#e2d7f0] leading-none">
                    62
                  </div>
                  <span className="text-[10px] text-[#9d8bb8] font-mono uppercase tracking-wider">
                    CRS
                  </span>
                </div>
              </div>
              <div className="mt-3 w-full bg-[#092328] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#2A835F] h-full rounded-full w-[62%]"></div>
              </div>
            </div>

            {/* Card 5: Sneha Reddy */}
            <div
              className={`group relative rounded-xl p-4 transition-all duration-300 cursor-pointer bg-[#0e3d3c]/90 border hover:-translate-y-1 hover:shadow-lg hover:shadow-[#2A835F]/20 ${
                isHighlighted('sr') ? 'border-[#2A835F] ring-1 ring-[#2A835F]' : 'border-[#12544F] hover:border-[#2A835F]'
              }`}
              onMouseEnter={() => setHoveredNode('sr')}
              onMouseLeave={() => setHoveredNode(null)}
              onClick={() => navigateTo('ignite', 'push')}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="text-sm text-[#9d8bb8] font-mono">05</span>
                  <div className="relative w-11 h-11 rounded-lg bg-[#092328] border border-[#12544F] flex items-center justify-center overflow-hidden shrink-0 font-mono text-xs font-bold text-[#8BBB92]">
                    SR
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-[#f8f6fc] truncate group-hover:text-[#8BBB92] transition-colors">
                        Sneha Reddy
                      </h3>
                      <span className="shrink-0 px-2 py-0.5 rounded-md bg-[#12544F]/60 border border-[#12544F] text-[#8BBB92] font-mono text-[11px] uppercase">
                        Passenger
                      </span>
                    </div>
                    <p className="text-xs text-[#8BBB92] truncate mt-0.5">
                      Science Block • Mon-Thu Commuter
                    </p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-2xl font-bold text-[#e2d7f0] leading-none">
                    58
                  </div>
                  <span className="text-[10px] text-[#9d8bb8] font-mono uppercase tracking-wider">
                    CRS
                  </span>
                </div>
              </div>
              <div className="mt-3 w-full bg-[#092328] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#2A835F] h-full rounded-full w-[58%]"></div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Living Social Network Graph */}
          <div className="lg:col-span-7 flex flex-col space-y-3.5">
            <div className="flex items-center justify-between px-1 pb-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#8BBB92] font-semibold">
                  Social Network
                </span>
                <span className="font-mono text-xs text-[#9d8bb8]">TOPOLOGICAL GRAPH</span>
              </div>
              <div className="flex items-center gap-4 font-mono text-xs text-[#8BBB92]">
                <span>
                  Hub Degree: <strong className="text-[#f8f6fc]">4</strong>
                </span>
                <span className="text-[#67548c]">|</span>
                <span>
                  Cluster Density: <strong className="text-[#8BBB92]">88%</strong>
                </span>
              </div>
            </div>

            {/* Graph Master Canvas Card */}
            <div className="relative w-full rounded-xl bg-[#0e3d3c]/90 border border-[#12544F] p-6 flex flex-col justify-between overflow-hidden">
              {/* Top Canvas Subhead */}
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <h2 className="text-base font-bold text-[#f8f6fc]">
                    Topological Clustermap &amp; Influence Vectors
                  </h2>
                  <p className="text-xs text-[#8BBB92] mt-0.5">
                    Dynamic peer affinity paths • Centrality vector resonance
                  </p>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#092328] border border-[#12544F]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8BBB92]"></span>
                  <span className="font-mono text-xs text-[#f8f6fc]">AFFINITY MESH</span>
                </div>
              </div>

              {/* SVG Living Canvas Container */}
              <div className="relative w-full h-[440px] my-2 flex items-center justify-center">
                <svg className="w-full h-full" fill="none" viewBox="0 0 600 440" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer Geometric Ring Guides */}
                  <circle cx="300" cy="220" r="170" stroke="#12544F" strokeDasharray="4 6" strokeOpacity="0.8"></circle>
                  <circle cx="300" cy="220" r="100" stroke="#12544F" strokeDasharray="2 4" strokeOpacity="0.8"></circle>

                  {/* Secondary ties between outer nodes */}
                  <path d="M 150 100 Q 300 55 450 100" stroke="#12544F" strokeDasharray="3 3" strokeWidth="1.5"></path>
                  <path d="M 160 330 Q 300 385 440 330" stroke="#12544F" strokeDasharray="3 3" strokeWidth="1.5"></path>
                  <path d="M 150 100 L 160 330" stroke="#12544F" strokeWidth="1"></path>

                  {/* Primary Edges: AK to nodes */}
                  <line
                    stroke="#8BBB92"
                    strokeOpacity={getEdgeOpacity('ak', 'ps')}
                    strokeWidth="2.5"
                    x1="300"
                    x2="150"
                    y1="220"
                    y2="100"
                    className="transition-all duration-300"
                  ></line>
                  <line
                    stroke="#8BBB92"
                    strokeOpacity={getEdgeOpacity('ak', 'rm')}
                    strokeWidth="2.5"
                    x1="300"
                    x2="450"
                    y1="220"
                    y2="100"
                    className="transition-all duration-300"
                  ></line>
                  <line
                    stroke="#2A835F"
                    strokeOpacity={getEdgeOpacity('ak', 'an')}
                    strokeWidth="1.5"
                    x1="300"
                    x2="160"
                    y1="220"
                    y2="330"
                    className="transition-all duration-300"
                  ></line>
                  <line
                    stroke="#2A835F"
                    strokeOpacity={getEdgeOpacity('ak', 'sr')}
                    strokeWidth="1.5"
                    x1="300"
                    x2="440"
                    y1="220"
                    y2="330"
                    className="transition-all duration-300"
                  ></line>

                  {/* Discrete Commute Node Points along paths */}
                  <circle cx="225" cy="160" fill="#8BBB92" r="3"></circle>
                  <circle cx="375" cy="160" fill="#8BBB92" r="3"></circle>
                  <circle cx="230" cy="275" fill="#2A835F" r="2.5"></circle>
                  <circle cx="370" cy="275" fill="#2A835F" r="2.5"></circle>

                  {/* Node: Priya Sharma (PS) */}
                  <g
                    className="transition-all duration-200 cursor-pointer"
                    transform="translate(150, 100)"
                    onMouseEnter={() => setHoveredNode('ps')}
                    onMouseLeave={() => setHoveredNode(null)}
                    onClick={() => navigateTo('ignite', 'push')}
                    style={{ transform: isHighlighted('ps') ? 'translate(150px, 100px) scale(1.08)' : 'translate(150px, 100px)' }}
                  >
                    <circle fill="#12544F" r="28" stroke="#2A835F" strokeWidth="1.5"></circle>
                    <text fill="#f8f6fc" fontFamily="Inter" fontSize="13" fontWeight="700" textAnchor="middle" y="5">
                      PS
                    </text>
                    <rect fill="#092328" height="20" rx="4" stroke="#12544F" strokeWidth="1" width="80" x="-40" y="36"></rect>
                    <text fill="#8BBB92" fontFamily="JetBrains Mono" fontSize="9.5" fontWeight="500" textAnchor="middle" y="50">
                      Priya • 85
                    </text>
                  </g>

                  {/* Node: Rohan Mehta (RM) */}
                  <g
                    className="transition-all duration-200 cursor-pointer"
                    transform="translate(450, 100)"
                    onMouseEnter={() => setHoveredNode('rm')}
                    onMouseLeave={() => setHoveredNode(null)}
                    onClick={() => navigateTo('ignite', 'push')}
                    style={{ transform: isHighlighted('rm') ? 'translate(450px, 100px) scale(1.08)' : 'translate(450px, 100px)' }}
                  >
                    <circle fill="#12544F" r="28" stroke="#2A835F" strokeWidth="1.5"></circle>
                    <text fill="#f8f6fc" fontFamily="Inter" fontSize="13" fontWeight="700" textAnchor="middle" y="5">
                      RM
                    </text>
                    <rect fill="#092328" height="20" rx="4" stroke="#12544F" strokeWidth="1" width="80" x="-40" y="36"></rect>
                    <text fill="#8BBB92" fontFamily="JetBrains Mono" fontSize="9.5" fontWeight="500" textAnchor="middle" y="50">
                      Rohan • 78
                    </text>
                  </g>

                  {/* Node: Arjun Nair (AN) */}
                  <g
                    className="transition-all duration-200 cursor-pointer"
                    transform="translate(160, 330)"
                    onMouseEnter={() => setHoveredNode('an')}
                    onMouseLeave={() => setHoveredNode(null)}
                    onClick={() => navigateTo('ignite', 'push')}
                    style={{ transform: isHighlighted('an') ? 'translate(160px, 330px) scale(1.08)' : 'translate(160px, 330px)' }}
                  >
                    <circle fill="#12544F" r="26" stroke="#12544F" strokeWidth="1.5"></circle>
                    <text fill="#8BBB92" fontFamily="Inter" fontSize="12" fontWeight="600" textAnchor="middle" y="4">
                      AN
                    </text>
                    <rect fill="#092328" height="18" rx="4" stroke="#12544F" strokeWidth="1" width="76" x="-38" y="34"></rect>
                    <text fill="#9d8bb8" fontFamily="JetBrains Mono" fontSize="9" fontWeight="400" textAnchor="middle" y="46">
                      Arjun • 62
                    </text>
                  </g>

                  {/* Node: Sneha Reddy (SR) */}
                  <g
                    className="transition-all duration-200 cursor-pointer"
                    transform="translate(440, 330)"
                    onMouseEnter={() => setHoveredNode('sr')}
                    onMouseLeave={() => setHoveredNode(null)}
                    onClick={() => navigateTo('ignite', 'push')}
                    style={{ transform: isHighlighted('sr') ? 'translate(440px, 330px) scale(1.08)' : 'translate(440px, 330px)' }}
                  >
                    <circle fill="#12544F" r="26" stroke="#12544F" strokeWidth="1.5"></circle>
                    <text fill="#8BBB92" fontFamily="Inter" fontSize="12" fontWeight="600" textAnchor="middle" y="4">
                      SR
                    </text>
                    <rect fill="#092328" height="18" rx="4" stroke="#12544F" strokeWidth="1" width="76" x="-38" y="34"></rect>
                    <text fill="#9d8bb8" fontFamily="JetBrains Mono" fontSize="9" fontWeight="400" textAnchor="middle" y="46">
                      Sneha • 58
                    </text>
                  </g>

                  {/* CENTER NODE: Aisha Khan (AK) */}
                  <g
                    className="transition-all duration-200 cursor-pointer"
                    transform="translate(300, 220)"
                    onMouseEnter={() => setHoveredNode('ak')}
                    onMouseLeave={() => setHoveredNode(null)}
                    onClick={() => navigateTo('ignite', 'push')}
                    style={{ transform: isHighlighted('ak') ? 'translate(300px, 220px) scale(1.08)' : 'translate(300px, 220px)' }}
                  >
                    <circle fill="#0e3d3c" r="42" stroke="#8BBB92" strokeWidth="2.5"></circle>
                    <circle r="47" stroke="#2A835F" strokeOpacity="0.4" strokeWidth="1.5"></circle>
                    <text fill="#f8f6fc" fontFamily="Inter" fontSize="17" fontWeight="800" textAnchor="middle" y="6">
                      AK
                    </text>
                    <g transform="translate(0, 52)">
                      <rect fill="#092328" height="24" rx="6" stroke="#8BBB92" strokeOpacity="0.8" strokeWidth="1" width="138" x="-69" y="0"></rect>
                      <circle cx="-54" cy="12" fill="#8BBB92" r="3"></circle>
                      <text fill="#f8f6fc" fontFamily="Inter" fontSize="11" fontWeight="700" textAnchor="middle" x="6" y="16">
                        Aisha Khan • 91 CRS
                      </text>
                    </g>
                  </g>
                </svg>
              </div>

              {/* Network Graph Footer Telemetry Strip */}
              <div className="relative z-10 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#092328]/90 border border-[#12544F] rounded-lg p-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#8BBB92] text-[18px] shrink-0">auto_awesome</span>
                  <p className="text-xs text-[#e2d7f0] italic">
                    Aisha connects to all four members — the single highest-probability ignition point.
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="px-2.5 py-1 rounded-md bg-[#0e3d3c] border border-[#12544F] text-[#8BBB92] font-mono text-xs font-semibold">
                    Confidence 98.2%
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#0e3d3c] border border-[#12544F] text-[#e2d7f0] font-mono text-xs font-semibold">
                    Window: 72 hrs
                  </span>
                </div>
              </div>
            </div>

            {/* Metric Expansion Row */}
            <div className="grid grid-cols-3 gap-4 pt-1">
              <div className="rounded-xl bg-[#0e3d3c]/90 border border-[#12544F] p-4">
                <span className="font-mono text-xs text-[#9d8bb8] uppercase">Mutual Corridors</span>
                <div className="text-lg font-bold text-[#f8f6fc] mt-1">3 Active</div>
                <p className="text-xs text-[#8BBB92] mt-0.5">8:00 AM, 1:15 PM, 5:45 PM</p>
              </div>
              <div className="rounded-xl bg-[#0e3d3c]/90 border border-[#12544F] p-4">
                <span className="font-mono text-xs text-[#9d8bb8] uppercase">Hostel Hub Tie</span>
                <div className="text-lg font-bold text-[#8BBB92] mt-1">Block B - South</div>
                <p className="text-xs text-[#8BBB92] mt-0.5">Physical proximity: 40m</p>
              </div>
              <div className="rounded-xl bg-[#0e3d3c]/90 border border-[#12544F] p-4">
                <span className="font-mono text-xs text-[#9d8bb8] uppercase">Ignition Yield</span>
                <div className="text-lg font-bold text-[#f8f6fc] mt-1">+4.2 Rides/Wk</div>
                <p className="text-xs text-[#8BBB92] mt-0.5">Projected cohort lift</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};