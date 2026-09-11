import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'motion/react';
import { ScreenId, TransitionType } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DiscoverDashboard } from './screens/DiscoverDashboard';
import { IdentifyKeyPeople } from './screens/IdentifyKeyPeople';
import { IgniteTheApproach } from './screens/IgniteTheApproach';
import { GrowthLoopButterflyEffect } from './screens/GrowthLoopButterflyEffect';
import { BackgroundBeams } from "@/components/ui/background-beams";

export const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('discover');
  const [transitionType, setTransitionType] = useState<TransitionType>('none');

  const navigateTo = (screen: ScreenId, transition: TransitionType = 'none') => {
    setTransitionType(transition);
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


// ... (other code above)

const variants: Variants = {
  initial: (type: TransitionType) => {
    if (type === 'push') {
      return { opacity: 0, x: 50 };
    }
    if (type === 'push_back') {
      return { opacity: 0, x: -50 };
    }
    return { opacity: 0, x: 0 };
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: (type: TransitionType) => {
    if (type === 'push') {
      return { opacity: 0, x: -50, transition: { duration: 0.2, ease: [0.4, 0, 1, 1] as const } };
    }
    if (type === 'push_back') {
      return { opacity: 0, x: 50, transition: { duration: 0.2, ease: [0.4, 0, 1, 1] as const } };
    }
    return { opacity: 0, transition: { duration: 0.15 } };
  },
};

  return (
        <div className="min-h-screen flex flex-col bg-[#1C0C5B] text-[#f8f6fc] selection:bg-[#916BBF]/40 
        selection:text-[#C996CC] relative">
      {/* Global Fixed Header */}
      <Header currentScreen={currentScreen} navigateTo={navigateTo} />

      {/* Main Screen Stage */}
      <main className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 overflow-x-hidden">
        <AnimatePresence custom={transitionType} mode="wait">
          <motion.div
            key={currentScreen}
            animate="animate"
            custom={transitionType}
            exit="exit"
            initial="initial"
            variants={variants}
            className="w-full"
          >
            {currentScreen === 'discover' && (
              <DiscoverDashboard currentScreen={currentScreen} navigateTo={navigateTo} />
            )}
            {currentScreen === 'identify' && (
              <IdentifyKeyPeople currentScreen={currentScreen} navigateTo={navigateTo} />
            )}
            {currentScreen === 'ignite' && (
              <IgniteTheApproach currentScreen={currentScreen} navigateTo={navigateTo} />
            )}
            {currentScreen === 'growth' && (
              <GrowthLoopButterflyEffect currentScreen={currentScreen} navigateTo={navigateTo} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent Global Footer */}
      <Footer />

      {/* Animated background layer */}
      <BackgroundBeams />
    </div>
  );
};

export default App;
