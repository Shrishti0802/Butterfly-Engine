import React, { useState, useMemo } from 'react';
import { NavigationProps } from '../types';
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export const GrowthLoopButterflyEffect: React.FC<NavigationProps> = () => {
  const [kFactor, setKFactor] = useState(1.6);
  const [weeks, setWeeks] = useState(10);
  const [seedUsers, setSeedUsers] = useState(5);
  const [chartView, setChartView] = useState<'cumulative' | 'delta'>('cumulative');

  // Compute growth trajectory data points
  const trajectory = useMemo(() => {
    const points: { week: number; users: number; delta: number }[] = [];
    let currentUsers = seedUsers;
    const churn = 0.1;

    for (let w = 0; w <= weeks; w++) {
      if (w === 0) {
        points.push({ week: 0, users: currentUsers, delta: 0 });
      } else {
        const delta = Math.round(currentUsers * (kFactor - 1) - currentUsers * churn);
        currentUsers = Math.max(1, currentUsers + delta);
        points.push({ week: w, users: currentUsers, delta: Math.max(0, delta) });
      }
    }
    return points;
  }, [kFactor, weeks, seedUsers]);

  const finalUsers = trajectory[trajectory.length - 1]?.users || 375;
  const ridesCreated = Math.round(finalUsers * 1.54);
  const co2Saved = Math.round(ridesCreated * 2.5);
  const catalyticFactor = Math.max(1, Math.round(finalUsers / seedUsers));

  // Compute SVG path dynamically
  const svgWidth = 760;
  const svgHeight = 300;
  const leftX = 50;
  const rightX = 730;
  const bottomY = 270;
  const topY = 30;

  const maxVal = Math.max(400, finalUsers * 1.05);

  const coords = trajectory.map((pt, idx) => {
    const x = leftX + (idx / Math.max(1, trajectory.length - 1)) * (rightX - leftX);
    const value = chartView === 'cumulative' ? pt.users : pt.delta * 4;
    const y = bottomY - Math.min(1, value / maxVal) * (bottomY - topY);
    return { x, y, ...pt };
  });

  // Construct smooth bezier path
  const pathD = coords.reduce((acc, pt, idx) => {
    if (idx === 0) return `M ${pt.x} ${pt.y}`;
    const prev = coords[idx - 1];
    const cpx = (prev.x + pt.x) / 2;
    return `${acc} C ${cpx} ${prev.y}, ${cpx} ${pt.y}, ${pt.x} ${pt.y}`;
  }, '');

  const areaD = `${pathD} L ${rightX} ${bottomY} L ${leftX} ${bottomY} Z`;

  const handleReset = () => {
    setKFactor(1.6);
    setWeeks(10);
    setSeedUsers(5);
  };

  return (
    <div className="flex flex-col w-full pb-12">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 px-5 py-2.5 mb-6 rounded-lg bg-[#0e3d3c] border border-[#12544F]">
        <div className="flex items-center gap-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#8BBB92]"></span>
          <span className="font-mono text-xs text-[#8BBB92] uppercase tracking-wider">
            Trajectory Protocol Active <span className="text-[#67548c] mx-1.5">/</span> Growth Simulation
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#092328] border border-[#12544F]">
            <span className="font-mono text-xs text-[#9d8bb8] uppercase">VIRAL COEFFICIENT</span>
            <span className="font-mono text-xs text-[#8BBB92] font-semibold">k={kFactor.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#092328] border border-[#12544F]">
            <span className="font-mono text-xs text-[#9d8bb8] uppercase">CONFIDENCE</span>
            <span className="font-mono text-xs text-[#f8f6fc] font-semibold">94.8%</span>
          </div>
        </div>
      </div>

      {/* Header Intro Section */}
      <div className="flex flex-col gap-2 mb-8">
        <div className="inline-flex items-center gap-2">
          <span className="font-mono text-xs tracking-wider uppercase font-semibold text-[#8BBB92] px-2.5 py-0.5 rounded-md bg-[#2A835F]/20 border border-[#2A835F]/50">
            The Butterfly Effect
          </span>
          <span className="font-mono text-xs text-[#9d8bb8] tracking-wider uppercase">
            Screen 04 • Model Alpha
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <TextGenerateEffect
              words="How Five Becomes Three Hundred"
              className="text-3xl font-bold text-[#f8f6fc] tracking-tight"
            />
            <p className="text-sm text-[#8BBB92] mt-1">
              A simulation of dynamic community growth once the first rides begin across target mobility corridors.
            </p>
          </div>

          {/* Scenario Toggle */}
          <div className="flex items-center gap-1 p-1 rounded-lg bg-[#0e3d3c] border border-[#12544F]">
            <button
              className={`px-3 py-1 rounded-md font-mono text-xs transition-colors cursor-pointer ${
                kFactor === 1.2
                  ? 'bg-[#8BBB92] text-[#092328] font-bold'
                  : 'text-[#8BBB92] hover:text-white hover:bg-[#12544F]/40'
              }`}
              id="btn-conservative"
              onClick={() => setKFactor(1.2)}
            >
              Conservative (k=1.2)
            </button>
            <button
              className={`px-3 py-1 rounded-md font-mono text-xs transition-colors cursor-pointer ${
                kFactor === 1.6
                  ? 'bg-[#8BBB92] text-[#092328] font-bold'
                  : 'text-[#8BBB92] hover:text-white hover:bg-[#12544F]/40'
              }`}
              id="btn-baseline"
              onClick={() => {
                setKFactor(1.6);
                setWeeks(10);
                setSeedUsers(5);
              }}
            >
              Baseline (k=1.6)
            </button>
            <button
              className={`px-3 py-1 rounded-md font-mono text-xs transition-colors cursor-pointer ${
                kFactor === 2.1
                  ? 'bg-[#8BBB92] text-[#092328] font-bold'
                  : 'text-[#8BBB92] hover:text-white hover:bg-[#12544F]/40'
              }`}
              id="btn-accelerated"
              onClick={() => setKFactor(2.1)}
            >
              Viral (k=2.1)
            </button>
          </div>
        </div>
      </div>

      {/* Two Column Main Layout (30% / 70%) */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-start">
        {/* LEFT COLUMN (30% / 3 cols) */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          {/* Parameter Panel */}
          <div className="relative rounded-xl bg-[#0e3d3c]/90 border border-[#12544F] p-6 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#8BBB92] text-[18px]">tune</span>
                <span className="font-mono text-xs uppercase tracking-wider text-[#8BBB92] font-semibold">
                  Parameters
                </span>
              </div>
              <button
                className="font-mono text-xs text-[#8BBB92] hover:text-[#f8f6fc] transition-colors flex items-center gap-1 cursor-pointer"
                id="reset-params"
                onClick={handleReset}
              >
                <span className="material-symbols-outlined text-[14px]">restart_alt</span> Reset
              </button>
            </div>

            {/* Slider 1: k-factor */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="text-xs text-[#e2d7f0] font-medium flex items-center gap-1.5" htmlFor="slider-k">
                  k-factor
                  <span className="font-mono text-[11px] text-[#9d8bb8]" title="Viral coefficient per rider cohort">
                    (viral coeff.)
                  </span>
                </label>
                <span className="text-xl font-bold font-mono text-[#8BBB92]" id="val-k">
                  {kFactor.toFixed(1)}
                </span>
              </div>
              <div className="relative flex items-center h-4">
                <input
                  className="w-full h-1.5 bg-[#092328] rounded-full appearance-none cursor-pointer accent-[#8BBB92] transition-all"
                  id="slider-k"
                  max="2.4"
                  min="1.0"
                  step="0.1"
                  type="range"
                  value={kFactor}
                  onChange={(e) => setKFactor(parseFloat(e.target.value))}
                />
              </div>
              <div className="flex justify-between font-mono text-[11px] text-[#9d8bb8]">
                <span>1.0</span>
                <span>Balanced</span>
                <span>2.4</span>
              </div>
            </div>

            {/* Slider 2: Weeks */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="text-xs text-[#e2d7f0] font-medium flex items-center gap-1.5" htmlFor="slider-weeks">
                  Weeks
                  <span className="font-mono text-[11px] text-[#9d8bb8]">(simulation horizon)</span>
                </label>
                <span className="text-xl font-bold font-mono text-[#f8f6fc]" id="val-weeks">
                  {weeks}
                </span>
              </div>
              <div className="relative flex items-center h-4">
                <input
                  className="w-full h-1.5 bg-[#092328] rounded-full appearance-none cursor-pointer accent-[#8BBB92] transition-all"
                  id="slider-weeks"
                  max="16"
                  min="4"
                  step="1"
                  type="range"
                  value={weeks}
                  onChange={(e) => setWeeks(parseInt(e.target.value, 10))}
                />
              </div>
              <div className="flex justify-between font-mono text-[11px] text-[#9d8bb8]">
                <span>W4</span>
                <span>Mid-term</span>
                <span>W16</span>
              </div>
            </div>

            {/* Slider 3: Seed users */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="text-xs text-[#e2d7f0] font-medium flex items-center gap-1.5" htmlFor="slider-seed">
                  Seed users
                  <span className="font-mono text-[11px] text-[#9d8bb8]">(initial cohort)</span>
                </label>
                <span className="text-xl font-bold font-mono text-[#f8f6fc]" id="val-seed">
                  {seedUsers}
                </span>
              </div>
              <div className="relative flex items-center h-4">
                <input
                  className="w-full h-1.5 bg-[#092328] rounded-full appearance-none cursor-pointer accent-[#8BBB92] transition-all"
                  id="slider-seed"
                  max="25"
                  min="1"
                  step="1"
                  type="range"
                  value={seedUsers}
                  onChange={(e) => setSeedUsers(parseInt(e.target.value, 10))}
                />
              </div>
              <div className="flex justify-between font-mono text-[11px] text-[#9d8bb8]">
                <span>1</span>
                <span>Campus Nucleus</span>
                <span>25</span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[#12544F]"></div>

            {/* Mathematical Model Sub-section */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#2A835F] text-[16px]">functions</span>
                <span className="font-mono text-xs tracking-wider uppercase text-[#8BBB92] font-semibold">
                  The Model
                </span>
              </div>
              <div className="rounded-lg bg-[#092328] border border-[#12544F] p-3 text-center">
                <code className="font-mono text-xs text-[#f8f6fc] block font-semibold">
                  U(t+1) = U(t) + (U(t) · k) − (U(t) · c)
                </code>
              </div>
              <div className="flex items-center justify-between px-1 text-xs text-[#9d8bb8] font-mono">
                <span>c = churn rate (fixed at 10%)</span>
                <span
                  className="material-symbols-outlined text-[#2A835F] text-[15px] cursor-help"
                  title="10% structural cohort attrition per 7-day cycle"
                >
                  info
                </span>
              </div>
              <div className="mt-1 flex items-center gap-2 p-2.5 rounded-lg bg-[#092328] border border-[#12544F]">
                <span className="material-symbols-outlined text-[#8BBB92] text-[18px]">hub</span>
                <div className="flex flex-col min-w-0 font-mono text-xs">
                  <span className="text-[#f8f6fc] truncate font-semibold">
                    Recursive cohort diffusion
                  </span>
                  <span className="text-[#9d8bb8]">
                    Engine Kernel v2.4 • Markov Chain
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Telemetry Insight Snippet */}
          <div className="rounded-xl bg-[#0e3d3c]/90 border border-[#12544F] p-4 flex items-start gap-3.5">
            <div className="p-2 rounded-lg bg-[#092328] border border-[#12544F] flex items-center justify-center text-[#8BBB92]">
              <span className="material-symbols-outlined text-[18px]">bolt</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-[#f8f6fc]">Tipping Threshold</span>
              <p className="text-xs text-[#8BBB92] mt-0.5 leading-relaxed">
                At k ≥ 1.4, propagation bypasses community drag, achieving sustainable self-reinforcing modal density by Week 6.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (70% / 7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Main Hero Card */}
          <div className="relative rounded-xl bg-[#0e3d3c]/90 border border-[#12544F] p-6 md:p-8 flex flex-col gap-6">
            {/* Hero Card Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs tracking-wider uppercase text-[#8BBB92] font-semibold">
                    Projected Growth
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#092328] border border-[#12544F] font-mono text-xs text-[#f8f6fc]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8BBB92]"></span>
                    Realtime Model Run
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#f8f6fc] mt-1">
                  Dynamic Exponential Diffusion Curve
                </h2>
              </div>

              {/* Chart View Toggles */}
              <div className="flex items-center p-1 rounded-lg bg-[#092328] border border-[#12544F]">
                <button
                  className={`px-3 py-1.5 rounded-md font-mono text-xs transition-colors cursor-pointer ${
                    chartView === 'cumulative'
                      ? 'bg-[#12544F] text-[#f8f6fc] border border-[#2A835F]/50 font-semibold'
                      : 'text-[#8BBB92] hover:text-white'
                  }`}
                  id="tab-cumul"
                  onClick={() => setChartView('cumulative')}
                >
                  Cumulative Users
                </button>
                <button
                  className={`px-3 py-1.5 rounded-md font-mono text-xs transition-colors cursor-pointer ${
                    chartView === 'delta'
                      ? 'bg-[#12544F] text-[#f8f6fc] border border-[#2A835F]/50 font-semibold'
                      : 'text-[#8BBB92] hover:text-white'
                  }`}
                  id="tab-delta"
                  onClick={() => setChartView('delta')}
                >
                  Weekly Delta (Δ)
                </button>
              </div>
            </div>

            {/* THE HERO GROWTH CHART (SVG Canvas) */}
            <div className="relative w-full h-80 md:h-96 rounded-lg bg-[#092328] border border-[#12544F] p-4 flex flex-col justify-between overflow-hidden">
              <svg className="w-full h-full overflow-visible" id="growth-svg" preserveAspectRatio="none" viewBox="0 0 760 300">
                <defs>
                  <linearGradient id="greenAreaGrad" x1="0%" x2="0%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#2A835F" stopOpacity="0.32"></stop>
                    <stop offset="100%" stopColor="#092328" stopOpacity="0.01"></stop>
                  </linearGradient>
                </defs>

                {/* Background Gridlines */}
                <line stroke="#12544F" strokeDasharray="3 3" strokeOpacity="0.6" x1="50" x2="730" y1="30" y2="30"></line>
                <line stroke="#12544F" strokeDasharray="3 3" strokeOpacity="0.6" x1="50" x2="730" y1="90" y2="90"></line>
                <line stroke="#12544F" strokeDasharray="3 3" strokeOpacity="0.6" x1="50" x2="730" y1="150" y2="150"></line>
                <line stroke="#12544F" strokeDasharray="3 3" strokeOpacity="0.6" x1="50" x2="730" y1="210" y2="210"></line>
                <line stroke="#12544F" strokeOpacity="0.8" x1="50" x2="730" y1="270" y2="270"></line>

                <line stroke="#12544F" strokeDasharray="3 3" strokeOpacity="0.6" x1="50" x2="50" y1="20" y2="270"></line>
                <line stroke="#12544F" strokeDasharray="3 3" strokeOpacity="0.6" x1="186" x2="186" y1="20" y2="270"></line>
                <line stroke="#12544F" strokeDasharray="3 3" strokeOpacity="0.6" x1="322" x2="322" y1="20" y2="270"></line>
                <line stroke="#12544F" strokeDasharray="3 3" strokeOpacity="0.6" x1="458" x2="458" y1="20" y2="270"></line>
                <line stroke="#12544F" strokeDasharray="3 3" strokeOpacity="0.6" x1="594" x2="594" y1="20" y2="270"></line>
                <line stroke="#12544F" strokeDasharray="3 3" strokeOpacity="0.6" x1="730" x2="730" y1="20" y2="270"></line>

                {/* Y-Axis Labels */}
                <text fill="#9d8bb8" fontFamily="JetBrains Mono" fontSize="10" textAnchor="end" x="40" y="34">
                  {Math.round(maxVal)}
                </text>
                <text fill="#9d8bb8" fontFamily="JetBrains Mono" fontSize="10" textAnchor="end" x="40" y="94">
                  {Math.round((maxVal * 3) / 4)}
                </text>
                <text fill="#9d8bb8" fontFamily="JetBrains Mono" fontSize="10" textAnchor="end" x="40" y="154">
                  {Math.round(maxVal / 2)}
                </text>
                <text fill="#9d8bb8" fontFamily="JetBrains Mono" fontSize="10" textAnchor="end" x="40" y="214">
                  {Math.round(maxVal / 4)}
                </text>
                <text fill="#9d8bb8" fontFamily="JetBrains Mono" fontSize="10" textAnchor="end" x="40" y="274">
                  0
                </text>

                {/* Curve Fill Area */}
                <path d={areaD} fill="url(#greenAreaGrad)" id="growth-area" className="transition-all duration-500"></path>

                {/* Smooth Bezier Stroke */}
                <path
                  d={pathD}
                  fill="none"
                  id="growth-path"
                  stroke="#8BBB92"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  className="transition-all duration-500"
                ></path>

                {/* Coordinate Nodes */}
                {coords.map((pt, idx) => {
                  const isLast = idx === coords.length - 1;
                  if (isLast) {
                    return (
                      <g key={idx}>
                        <circle cx={pt.x} cy={pt.y} fill="#8BBB92" fillOpacity="0.25" r="11"></circle>
                        <circle cx={pt.x} cy={pt.y} fill="#092328" r="5" stroke="#8BBB92" strokeWidth="2.5"></circle>
                        <g transform={`translate(${Math.max(50, pt.x - 105)}, ${Math.max(10, pt.y - 25)})`}>
                          <rect fill="#092328" height="22" rx="4" stroke="#12544F" strokeWidth="1" width="105"></rect>
                          <circle cx="10" cy="11" fill="#8BBB92" r="3"></circle>
                          <text fill="#f8f6fc" fontFamily="JetBrains Mono" fontSize="11" fontWeight="600" x="18" y="15">
                            {finalUsers} Users
                          </text>
                        </g>
                      </g>
                    );
                  }
                  return (
                    <circle
                      key={idx}
                      cx={pt.x}
                      cy={pt.y}
                      fill="#0e3d3c"
                      r="3.5"
                      stroke="#2A835F"
                      strokeWidth="1.5"
                      className="transition-all duration-300"
                    ></circle>
                  );
                })}

                {/* X-Axis Labels */}
                <text fill="#9d8bb8" fontFamily="JetBrains Mono" fontSize="11" textAnchor="middle" x="50" y="292">
                  W0
                </text>
                <text fill="#9d8bb8" fontFamily="JetBrains Mono" fontSize="11" textAnchor="middle" x="186" y="292">
                  W{Math.round(weeks * 0.25)}
                </text>
                <text fill="#9d8bb8" fontFamily="JetBrains Mono" fontSize="11" textAnchor="middle" x="322" y="292">
                  W{Math.round(weeks * 0.5)}
                </text>
                <text fill="#9d8bb8" fontFamily="JetBrains Mono" fontSize="11" textAnchor="middle" x="458" y="292">
                  W{Math.round(weeks * 0.75)}
                </text>
                <text fill="#f8f6fc" fontFamily="JetBrains Mono" fontSize="11" fontWeight="600" textAnchor="middle" x="730" y="292">
                  W{weeks}
                </text>
              </svg>

              {/* Axis Titles */}
              <div className="flex items-center justify-between pt-1 px-1 font-mono text-xs text-[#9d8bb8]">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">arrow_upward</span> Active Users
                </span>
                <span className="flex items-center gap-1">
                  Horizon Timeline (Weekly Epochs) <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </span>
              </div>
            </div>

            {/* Ambient Divider */}
            <div className="w-full h-px bg-[#12544F]"></div>

            {/* 4-Column Metric Tiles Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Tile 1: Active Users */}
              <div className="group rounded-xl bg-[#092328] border border-[#12544F] hover:border-[#2A835F] p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:shadow-[#2A835F]/20 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#9d8bb8]">
                    Active Users
                  </span>
                  <span className="material-symbols-outlined text-[#2A835F] text-[16px] group-hover:text-[#8BBB92] transition-colors">
                    group
                  </span>
                </div>
                <div
                  className="text-3xl font-extrabold text-[#f8f6fc] font-mono leading-none py-1"
                  id="metric-users"
                >
                  {finalUsers.toLocaleString()}
                </div>
                <div className="flex items-center gap-1 mt-2 font-mono text-xs text-[#8BBB92]">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span>
                  <span>+{Math.round(((finalUsers - seedUsers) / seedUsers) * 100).toLocaleString()}% from seed</span>
                </div>
              </div>

              {/* Tile 2: Rides Created */}
              <div className="group rounded-xl bg-[#092328] border border-[#12544F] hover:border-[#2A835F] p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:shadow-[#2A835F]/20 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#9d8bb8]">
                    Rides Created
                  </span>
                  <span className="material-symbols-outlined text-[#2A835F] text-[16px] group-hover:text-[#8BBB92] transition-colors">
                    route
                  </span>
                </div>
                <div
                  className="text-3xl font-extrabold text-[#f8f6fc] font-mono leading-none py-1"
                  id="metric-rides"
                >
                  {ridesCreated.toLocaleString()}
                </div>
                <div className="flex items-center gap-1 mt-2 font-mono text-xs text-[#8BBB92]">
                  <span className="material-symbols-outlined text-[14px]">electric_car</span>
                  <span>1.54 rides / member</span>
                </div>
              </div>

              {/* Tile 3: CO2 Saved */}
              <div className="group rounded-xl bg-[#092328] border border-[#12544F] hover:border-[#2A835F] p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:shadow-[#2A835F]/20 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#9d8bb8]">
                    CO₂ Saved
                  </span>
                  <span className="material-symbols-outlined text-[#2A835F] text-[16px] group-hover:text-[#8BBB92] transition-colors">
                    eco
                  </span>
                </div>
                <div
                  className="text-3xl font-extrabold text-[#f8f6fc] font-mono leading-none py-1"
                  id="metric-co2"
                >
                  {co2Saved.toLocaleString()} kg
                </div>
                <div className="flex items-center gap-1 mt-2 font-mono text-xs text-[#8BBB92]">
                  <span className="material-symbols-outlined text-[14px]">compost</span>
                  <span>Offset eq. {Math.round(co2Saved / 21)} trees</span>
                </div>
              </div>

              {/* Tile 4: BUTTERFLY EFFECT */}
              <div className="group rounded-xl bg-[#12544F] border border-[#2A835F]/50 border-t-2 border-t-[#8BBB92] p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:shadow-[#8BBB92]/30 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#8BBB92] font-semibold flex items-center gap-1">
                    Butterfly Effect
                    <span className="material-symbols-outlined text-[#8BBB92] text-[14px]">flutter</span>
                  </span>
                  <span className="px-1.5 py-0.5 rounded-md bg-[#2A835F]/50 font-mono text-[11px] text-[#8BBB92] font-bold">
                    ALPHA
                  </span>
                </div>
                <div
                  className="text-3xl font-extrabold text-[#8BBB92] font-mono leading-none py-1"
                  id="metric-factor"
                >
                  {catalyticFactor}×
                </div>
                <div className="flex items-center gap-1 mt-2 font-mono text-xs text-[#8BBB92]">
                  <span className="material-symbols-outlined text-[14px]">all_inclusive</span>
                  <span>Catalytic amplification</span>
                </div>
              </div>
            </div>

            {/* Evocative Community Anchor Quote */}
            <div className="mt-2 text-center px-4 py-3 rounded-lg bg-[#092328] border border-[#12544F]">
              <p className="text-xs italic tracking-wide text-[#e2d7f0] font-serif">
                "One connector can create the first ride. The first ride can create the community."
              </p>
            </div>
          </div>

          {/* Bottom Supporting Telemetry Stream */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl bg-[#0e3d3c]/90 border border-[#12544F] p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#092328] border border-[#12544F] flex items-center justify-center text-[#8BBB92]">
                <span className="material-symbols-outlined text-[20px]">share</span>
              </div>
              <div>
                <div className="font-mono text-xs text-[#9d8bb8] uppercase">Share Velocity</div>
                <div className="text-base font-bold font-mono text-[#f8f6fc]">
                  {(kFactor * 2).toFixed(1)} invites / wk
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-[#0e3d3c]/90 border border-[#12544F] p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#092328] border border-[#12544F] flex items-center justify-center text-[#2A835F]">
                <span className="material-symbols-outlined text-[20px]">repeat</span>
              </div>
              <div>
                <div className="font-mono text-xs text-[#9d8bb8] uppercase">Cohort Retention</div>
                <div className="text-base font-bold font-mono text-[#f8f6fc]">89.4% post-ride</div>
              </div>
            </div>
            <div className="rounded-xl bg-[#0e3d3c]/90 border border-[#12544F] p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#092328] border border-[#12544F] flex items-center justify-center text-[#2A835F]">
                <span className="material-symbols-outlined text-[20px]">speed</span>
              </div>
              <div>
                <div className="font-mono text-xs text-[#9d8bb8] uppercase">Equilibrium Time</div>
                <div className="text-base font-bold font-mono text-[#f8f6fc]">
                  {(24 - kFactor * 6).toFixed(1)} weeks
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};