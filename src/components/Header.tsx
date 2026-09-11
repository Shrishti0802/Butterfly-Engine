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
    <header className="fixed top-0 w-full z-50 bg-[#1C0C5B]/90 backdrop-blur-md border-b border-[#3D2C8D]">
      <div className="h-16 max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a
            className="flex items-center gap-2.5 group cursor-pointer"
            href="#"
            onClick={handleLogoClick}
          >
            <div className="w-8 h-8 rounded-lg bg-[#271577] border border-[#3D2C8D] flex items-center justify-center text-[#C996CC] group-hover:border-[#916BBF] transition-colors">
              <span className="material-symbols-outlined text-[19px]">flutter</span>
            </div>
            <span className="font-headline-sm text-headline-sm font-bold text-[#f8f6fc] tracking-tight">
              Butterfly Engine
            </span>
          </a>
          <div className="h-4 w-px bg-[#3D2C8D] hidden md:block"></div>
          <nav className="hidden md:flex items-center gap-1.5">
            {navItems.map((item) => {
              const isActive = currentScreen === item.screen;
              return (
                <a
                  key={item.path}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#f8f6fc] bg-[#3D2C8D] border border-[#916BBF]/50 shadow-xs'
                      : 'text-[#cbbbe4] hover:text-white hover:bg-[#3D2C8D]/40'
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
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#24146a] border border-[#3D2C8D]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C996CC]"></span>
            <span className="font-mono text-xs text-[#cbbbe4] uppercase tracking-wider">
              Live Analytics
            </span>
          </div>
          <div className="px-2 py-0.5 rounded-md bg-[#24146a] border border-[#3D2C8D] font-mono text-xs text-[#cbbbe4]">
            v1.0
          </div>
          <div className="w-8 h-8 rounded-lg bg-[#271577] border border-[#3D2C8D] hover:bg-[#3D2C8D] flex items-center justify-center cursor-pointer transition-colors text-[#C996CC]">
            <span className="material-symbols-outlined text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
};
