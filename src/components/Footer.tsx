import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 w-full bg-[#150947] border-t border-[#3D2C8D] py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#C996CC] text-[18px]">flutter</span>
          <span className="text-xs text-[#cbbbe4] font-mono">
            Butterfly Engine • Activation &amp; Mobility Intelligence
          </span>
        </div>
        <div className="flex items-center gap-6 text-xs text-[#916BBF] font-mono">
          <span>Engine Kernel Active</span>
          <span>&copy; 2025 All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};
