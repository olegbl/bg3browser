import React, { useContext, useMemo } from 'react';
import useSavedState from './useSavedState';

type IMeasurementsMode = 'metric' | 'imperial';

type IMeasurementsContext = {
  measurementsMode: IMeasurementsMode;
  setMeasurementsMode: React.Dispatch<React.SetStateAction<IMeasurementsMode>>;
};

export const MeasurementsContext =
  React.createContext<IMeasurementsContext | null>(null);

export default function MeasurementsContextProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [measurementsMode, setMeasurementsMode] =
    useSavedState<IMeasurementsMode>('measurements', 'metric');

  const context = useMemo(
    (): IMeasurementsContext => ({
      measurementsMode,
      setMeasurementsMode,
    }),
    [measurementsMode, setMeasurementsMode],
  );

  return (
    <MeasurementsContext.Provider value={context}>
      {children}
    </MeasurementsContext.Provider>
  );
}

export function useMeasurementsMode(): [
  IMeasurementsMode,
  React.Dispatch<React.SetStateAction<IMeasurementsMode>>,
] {
  const context = useContext<IMeasurementsContext | null>(MeasurementsContext);
  if (context == null) {
    throw new Error('No preferences context available.');
  }
  return [context.measurementsMode, context.setMeasurementsMode];
}

function getDistance(mode: IMeasurementsMode, value: number | string): string {
  if (typeof value === 'string') {
    value = parseFloat(value) / 100;
  }
  switch (mode) {
    case 'metric':
      return `${value} m`;
    case 'imperial':
      // not all numbers convert cleanly because not all of them are shown in the game's UI
      // for example, a Glaive's 2.5 m range becomes 8.33333... ft
      return `${Math.floor((value * 1000) / 3) / 100} ft`;
  }
}

function getWeight(mode: IMeasurementsMode, value: number | string): string {
  if (typeof value === 'string') {
    value = parseFloat(value);
  }
  switch (mode) {
    case 'metric':
      return `${value} kg`;
    case 'imperial':
      return `${value * 2} lb`;
  }
}

export function useMeasurementsAdapters(): {
  getDistance: (value: number | string) => string;
  getWeight: (value: number | string) => string;
} {
  const [measurementsMode] = useMeasurementsMode();
  return useMemo(
    () => ({
      getDistance: (value: number | string) =>
        getDistance(measurementsMode, value),
      getWeight: (value: number | string) => getWeight(measurementsMode, value),
    }),
    [measurementsMode],
  );
}
