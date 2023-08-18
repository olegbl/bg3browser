import './styles.css';

import * as React from 'react';
import * as antd from 'antd';
import * as icons from '@ant-design/icons';

import CardList from './CardList';
import DebugContextProvider, { useIsDebugModeEnabled } from './DebugContext';
import MeasurementsContextProvider, {
  useMeasurementsMode,
} from './MeasurementsContext';
import ThemeContextProvider, { useThemePreference } from './ThemeContext';

import data from './data';
import useUrlState from './useUrlState';

const TAGS: Set<string> = new Set(
  data.reduce(
    (agg: string[], entity): string[] => [...agg, ...entity.tags],
    [],
  ),
);

const QUERY_REGEXP = new RegExp('".*?"|[^\\s]+', 'g');
const QUOTEED_TOKEN_REGEXP = new RegExp('^"(.*)"$');

function Content() {
  // @ts-ignore
  const [isPending, startTransition] = React.useTransition();

  const { token: themeToken } = antd.theme.useToken();

  const [debug, setDebug] = useIsDebugModeEnabled();
  const [themePreference, setThemePreference] = useThemePreference();
  const [measurementsMode, setMeasurementsMode] = useMeasurementsMode();

  const [queryString, setQueryString] = useUrlState<string>('q', '');
  const [query, setQuery] = React.useState(queryString);

  const queryTokens = React.useMemo(
    () =>
      (query.toLowerCase().match(QUERY_REGEXP) ?? []).map((token) =>
        token.replace(QUOTEED_TOKEN_REGEXP, '$1'),
      ),
    [query],
  );

  const suggestions = React.useMemo(() => {
    const partialQuery = query.replace(/^.*\s+/, '').toLowerCase();
    if (partialQuery === '') {
      return [];
    }
    return Array.from(TAGS)
      .filter(
        (tag) =>
          tag.toLowerCase().includes(partialQuery) &&
          tag.toLowerCase() !== partialQuery,
      )
      .map((tag) => ({
        label: tag,
        value:
          query.replace(/^(.*\s+)?.*?$/, '$1') +
          (tag.includes(' ') ? `"${tag}"` : tag),
      }));
  }, [query]);

  const filteredEntities = React.useMemo(
    () =>
      data.filter(
        (entity) =>
          queryTokens.length === 0 ||
          // every query token must match something
          queryTokens.every((token) => {
            const isInverted = token.startsWith('-');
            const plainToken = isInverted ? token.substring(1) : token;
            const matches =
              // the token can be a part of the name
              entity.name.toLowerCase().includes(plainToken) ||
              // the token can be a part of the description
              entity.description.toLowerCase().includes(plainToken) ||
              // the token can equal one of the tags
              entity.tags.map((tag) => tag.toLowerCase()).includes(plainToken);
            return isInverted ? !matches : matches;
          }),
      ),
    [queryTokens],
  );

  return (
    <React.Suspense fallback={null}>
      <antd.Layout className="app">
        <div className="top-bar">
          <antd.AutoComplete
            className="search-input"
            options={suggestions}
            value={queryString}
            onChange={(value: string): void => {
              // update the search input
              setQueryString(value);
              // update the rest of the view (e.g. list)
              startTransition(() => {
                setQuery(value);
              });
            }}>
            <antd.Input
              addonBefore={
                // @ts-ignore
                <icons.SearchOutlined />
              }
              addonAfter={
                isPending ? 'Loading...' : `${filteredEntities.length} Results`
              }
              allowClear={true}
              placeholder="Search for names, descriptions, or tags..."
              size="large"
            />
          </antd.AutoComplete>
          <antd.Dropdown
            menu={{
              items: [
                {
                  key: 'imperial',
                  label:
                    'Measurements: ' +
                    (measurementsMode === 'imperial' ? 'Imperial' : 'Metric'),
                },
                {
                  key: 'theme',
                  label:
                    'Theme: ' +
                    (themePreference === 'system'
                      ? 'System'
                      : themePreference === 'light'
                      ? 'Light'
                      : themePreference === 'dark'
                      ? 'Dark'
                      : 'Unknown'),
                },
                {
                  key: 'debug',
                  label: 'Debug Mode: ' + (debug ? 'Enabled' : 'Disabled'),
                },
              ],
              onClick: (event) => {
                if (event.key === 'imperial') {
                  setMeasurementsMode((value) =>
                    value === 'metric' ? 'imperial' : 'metric',
                  );
                }
                if (event.key === 'theme') {
                  setThemePreference((value) =>
                    value === 'system'
                      ? 'light'
                      : value === 'light'
                      ? 'dark'
                      : value === 'dark'
                      ? 'system'
                      : 'system',
                  );
                }
                if (event.key === 'debug') {
                  setDebug((value) => !value);
                }
              },
            }}>
            <antd.Button
              className="settings-button"
              icon={<icons.SettingOutlined />}
              size="large"
            />
          </antd.Dropdown>
          <div
            className="top-bar-content-transition"
            style={{
              backgroundImage: `linear-gradient(to bottom, ${themeToken.colorBgLayout}, rgba(0, 0, 0, 0))`,
            }}
          />
        </div>
        <antd.Layout.Content className="content">
          <React.Suspense fallback={null}>
            <CardList entities={filteredEntities} />
          </React.Suspense>
        </antd.Layout.Content>
      </antd.Layout>
    </React.Suspense>
  );
}

export default function App() {
  return (
    <DebugContextProvider>
      <ThemeContextProvider>
        <MeasurementsContextProvider>
          <Content />
        </MeasurementsContextProvider>
      </ThemeContextProvider>
    </DebugContextProvider>
  );
}
