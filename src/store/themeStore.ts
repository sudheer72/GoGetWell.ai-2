import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Theme, ThemeType } from '../types/theme';

interface ThemeState {
  currentTheme: ThemeType;
  themes: Record<ThemeType, Theme>;
  setTheme: (theme: ThemeType) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      currentTheme: 'default',
      themes: {
        default: {
          id: 'default',
          name: 'Default Theme',
          description: 'The standard GoGetWell.ai theme',
          primaryColor: '#5932EA',
          secondaryColor: '#8F73FF',
          accentColor: '#3E97FF',
          gradientStart: '#36249C',
          gradientEnd: '#5932EA',
        },
        organTransplant: {
          id: 'organTransplant',
          name: 'Organ Transplant',
          description: 'Specialized theme for transplant services',
          primaryColor: '#1976D2',
          secondaryColor: '#2196F3',
          accentColor: '#0D47A1',
          gradientStart: '#0D47A1',
          gradientEnd: '#1976D2',
        },
        cardiology: {
          id: 'cardiology',
          name: 'Cardiology',
          description: 'Specialized theme for heart health services',
          primaryColor: '#D32F2F',
          secondaryColor: '#F44336',
          accentColor: '#B71C1C',
          gradientStart: '#B71C1C',
          gradientEnd: '#D32F2F',
        },
      },
      setTheme: (theme) => set({ currentTheme: theme }),
    }),
    {
      name: 'theme-storage',
    }
  )
);