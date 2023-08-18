import React, { useContext, useMemo } from 'react';
import useUrlState from './useUrlState';

type IEnabled = boolean;

type IDebugContext = {
  enabled: IEnabled;
  setEnabled: React.Dispatch<React.SetStateAction<IEnabled>>;
};

export const DebugContext = React.createContext<IDebugContext | null>(null);

export default function DebugContextProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [enabled, setEnabled] = useUrlState<IEnabled>('debug', false);

  const context = useMemo(
    (): IDebugContext => ({
      enabled,
      setEnabled,
    }),
    [enabled, setEnabled],
  );

  return (
    <DebugContext.Provider value={context}>{children}</DebugContext.Provider>
  );
}

export function useIsDebugModeEnabled(): [
  IEnabled,
  React.Dispatch<React.SetStateAction<IEnabled>>,
] {
  const context = useContext<IDebugContext | null>(DebugContext);
  if (context == null) {
    throw new Error('No preferences context available.');
  }
  return [context.enabled, context.setEnabled];
}
