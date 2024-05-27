type ThemeOb = {
  color: string;
  background: string;
};

interface Theme {
  light: ThemeOb;
  dark: ThemeOb;
}

interface ThemeProps {
  children: React.ReactNode;
}

export type { Theme, ThemeProps };
