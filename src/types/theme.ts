export type ThemeType = 'default' | 'organTransplant' | 'cardiology';

export interface Theme {
  id: ThemeType;
  name: string;
  description: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  gradientStart: string;
  gradientEnd: string;
}