import './styles.css';
import * as React from 'react';
import * as antd from 'antd';
import * as icons from '@ant-design/icons';
import data from './data';
import CardList from './CardList';

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

  const [queryString, setQueryString] = React.useState(
    new URL(window.location.href).searchParams.get('q') ?? '',
  );
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
              entity.name?.toLowerCase()?.includes(plainToken) ||
              // the token can be a part of the description
              entity.description?.toLowerCase()?.includes(plainToken) ||
              // the token can equal one of the tags
              entity.tags
                ?.map((tag) => tag?.toLowerCase())
                ?.includes(plainToken);
            return isInverted ? !matches : matches;
          }),
      ),
    [queryTokens],
  );

  return (
    <React.Suspense fallback={null}>
      <antd.Layout style={{ minHeight: '100%' }}>
        <antd.Layout.Content style={{ padding: 12 }}>
          <antd.AutoComplete
            options={suggestions}
            style={{ width: '100%', marginBottom: 12 }}
            value={queryString}
            onChange={(value: string): void => {
              // update the URL
              const url = new URL(window.location.href);
              url.searchParams.set('q', value);
              window.history.replaceState({}, '', url.toString());
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
    <antd.ConfigProvider
      theme={{
        // match app theme to OS theme
        algorithm: window.matchMedia('(prefers-color-scheme: dark)').matches
          ? antd.theme.darkAlgorithm
          : antd.theme.defaultAlgorithm,
      }}>
      <Content />
    </antd.ConfigProvider>
  );
}
