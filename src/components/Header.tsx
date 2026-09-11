import React from 'react';
import { ScreenId, TransitionType } from '../types';

interface HeaderProps {
  currentScreen: ScreenId;
  navigateTo: (screen: ScreenId, transition?: TransitionType) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentScreen, navigateTo }) => {
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentScreen !== 'discover') {
      navigateTo('discover', 'push_back');
    }
  };

  const navItems = [
    { path: 'overview', screen: 'discover' as ScreenId, label: 'Overview' },
    { path: 'corridors', screen: 'identify' as ScreenId, label: 'Corridors' },
    { path: 'activation', screen: 'ignite' as ScreenId, label: 'Activation' },
    { path: 'impact-metrics', screen: 'growth' as ScreenId, label: 'Impact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#092328]/90 backdrop-blur-md border-b border-[#12544F]">
      <div className="h-16 max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a
            className="flex items-center gap-2.5 group cursor-pointer"
            href="#"
            onClick={handleLogoClick}
          >
            <div className="w-8 h-8 rounded-lg bg-[#271577] border border-[#12544F] flex items-center justify-center text-[#8BBB92] group-hover:border-[#2A835F] transition-colors">
              <span className="material-symbols-outlined text-[19px]">flutter</span>
            </div>
            <span className="font-headline-sm text-headline-sm font-bold text-[#f8f6fc] tracking-tight">
              Butterfly Engine
            </span>
          </a>
          <div className="h-4 w-px bg-[#12544F] hidden md:block"></div>
          <nav className="hidden md:flex items-center gap-1.5">
            {navItems.map((item) => {
              const isActive = currentScreen === item.screen;
              return (
                <a
                  key={item.path}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#f8f6fc] bg-[#12544F] border border-[#2A835F]/50 shadow-xs'
                      : 'text-[#8BBB92] hover:text-white hover:bg-[#12544F]/40'
                  }`}
                  data-path={item.path}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentScreen !== item.screen) {
                      navigateTo(item.screen, 'none');
                    }
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#0e3d3c] border border-[#12544F]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8BBB92]"></span>
            <span className="font-mono text-xs text-[#8BBB92] uppercase tracking-wider">
              Live Analytics
            </span>
          </div>
          <div className="px-2 py-0.5 rounded-md bg-[#0e3d3c] border border-[#12544F] font-mono text-xs text-[#8BBB92]">
            v1.0
          </div>
          <div className="w-8 h-8 rounded-lg bg-[#271577] border border-[#12544F] hover:bg-[#12544F] flex items-center justify-center cursor-pointer transition-colors text-[#8BBB92]">
            <span className="material-symbols-outlined text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
};
