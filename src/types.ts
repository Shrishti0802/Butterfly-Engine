export type ScreenId = 'discover' | 'identify' | 'ignite' | 'growth';

export type TransitionType = 'push' | 'push_back' | 'none';

export interface NavigationProps {
  currentScreen: ScreenId;
  navigateTo: (screen: ScreenId, transition?: TransitionType) => void;
}
