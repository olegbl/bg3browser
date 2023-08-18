import * as antd from 'antd';
import React, { useContext, useMemo } from 'react';

import useUrlState from './useUrlState';
import { MappingAlgorithm } from 'antd/es/config-provider/context';

type IThemeMode = 'light' | 'dark';
type IThemePreference = 'light' | 'dark' | 'system';

type IThemeContext = {
  themeMode: IThemeMode;
  themePreference: IThemePreference;
  setThemePreference: React.Dispatch<React.SetStateAction<IThemePreference>>;
};

export const ThemeContext = React.createContext<IThemeContext | null>(null);

function getSystemThemeMode(): IThemeMode {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function getThemeAlgorithm(themeMode: IThemeMode): MappingAlgorithm {
  switch (themeMode) {
    case 'light':
      return antd.theme.defaultAlgorithm;
    case 'dark':
      return antd.theme.darkAlgorithm;
  }
}

export default function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [themePreference, setThemePreference] = useUrlState<IThemePreference>(
    'theme',
    'system',
  );
  const themeMode =
    themePreference === 'system' ? getSystemThemeMode() : themePreference;

  const context = useMemo(
    (): IThemeContext => ({
      themeMode,
      themePreference,
      setThemePreference,
    }),
    [themePreference, setThemePreference],
  );

  const theme = useMemo(
    () => ({
      algorithm: getThemeAlgorithm(themeMode),
    }),
    [themeMode],
  );

  return (
    <ThemeContext.Provider value={context}>
      <antd.ConfigProvider theme={theme}>{children}</antd.ConfigProvider>
    </ThemeContext.Provider>
  );
}

function useThemeContext(): IThemeContext {
  const context = useContext<IThemeContext | null>(ThemeContext);
  if (context == null) {
    throw new Error('No preferences context available.');
  }
  return context;
}

export function useThemePreference(): [
  IThemePreference,
  React.Dispatch<React.SetStateAction<IThemePreference>>,
] {
  const context = useThemeContext();
  return [context.themePreference, context.setThemePreference];
}

export function useThemeMode(): IThemeMode {
  const context = useThemeContext();
  return context.themeMode;
}
