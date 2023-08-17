import './styles.css';
import * as React from 'react';
import * as antd from 'antd';
import * as icons from '@ant-design/icons';
import { Entity } from './Types';
import data from './data';
import { TaobaoSquareFilled } from '@ant-design/icons';

const tags: Set<string> = new Set(
  data.reduce(
    (agg: string[], entity): string[] => [...agg, ...entity.tags],
    [],
  ),
);

const QUERY_REGEXP = new RegExp('".*?"|[^\\s]+', 'g');
const QUOTEED_TOKEN_REGEXP = new RegExp('^"(.*)"$');

const CARD_RARITY: { [key: string]: string | null } = {
  Common: 'card-rarity-common',
  Uncommon: 'card-rarity-uncommon',
  Rare: 'card-rarity-rare',
  VeryRare: 'card-rarity-veryrare',
  Legendary: 'card-rarity-legendary',
  Unknown: null,
};

const GAME_TEXT_REGEXP = /^()$|\[(\d+)\]|<LSTag.*?>(.*?)<\/LSTag>/g;

function GameText({
  value,
  params,
}: {
  value?: string | null;
  params?: string[] | null;
}) {
  if (value == null) {
    return null;
  }

  const tokens = [];
  const matches = (value ?? '').split(GAME_TEXT_REGEXP);
  let part = 0;
  let param = -1;
  for (const match of matches) {
    if (match === undefined && part === 0) {
      part = 1;
    } else if (part !== 0) {
      part++;
      // end of match
      if (part > 3) {
        part = 0;
      }
    }
    if (part === 1) {
      // ignore it, just a marker
      continue;
    } else if (part === 2) {
      if (match !== undefined) {
        // [int]
        param++;
        tokens.push(
          <span className="bold">
            {(params != null ? params[param] : null) ?? match}
          </span>,
        );
      }
    } else if (part === 3) {
      if (match !== undefined) {
        // <LSTag>text</LSTag>
        tokens.push(<span className="bold">{match}</span>);
      }
    } else {
      tokens.push(match);
    }
  }
  return <>{tokens}</>;
}

const List = React.memo(function List({ entities }: { entities: Entity[] }) {
  return (
    <div className="list">
      {entities.map((entity) => {
        return (
          <a
            key={entity.id}
            className="list-item"
            href={entity.linkURL}
            target="_blank"
            rel="noreferrer">
            <antd.Card
              className={[
                'card',
                CARD_RARITY[entity.metadata.rarity ?? 'Unknown'],
              ]
                .filter(Boolean)
                .join(' ')}
              hoverable={true}
              size="small">
              <div className="card-content">
                <antd.Avatar
                  className="card-avatar"
                  shape="square"
                  size={48}
                  src={entity.iconURL}
                />
                <antd.Space className="card-info" direction="vertical">
                  <antd.Typography className="card-name">
                    {entity.name}
                  </antd.Typography>
                  <antd.Typography>
                    <GameText value={entity.description} />
                  </antd.Typography>
                  <antd.Descriptions
                    className="card-descriptions"
                    bordered
                    title={null}
                    size="small">
                    {entity.metadata.armorClass && (
                      <antd.Descriptions.Item label="Armor Class" span={3}>
                        {entity.metadata.armorClass}
                      </antd.Descriptions.Item>
                    )}
                    {entity.metadata.damage && (
                      <antd.Descriptions.Item
                        label={
                          entity.metadata.damageVersatile == null
                            ? 'Damage'
                            : '1H Damage'
                        }
                        span={3}>
                        {entity.metadata.damage}
                      </antd.Descriptions.Item>
                    )}
                    {entity.metadata.damageVersatile && (
                      <antd.Descriptions.Item label="2H Damage" span={3}>
                        {entity.metadata.damageVersatile}
                      </antd.Descriptions.Item>
                    )}
                    {entity.metadata.boosts?.map((boost) => (
                      <antd.Descriptions.Item
                        key={boost}
                        label="Boost"
                        span={3}>
                        {boost}
                      </antd.Descriptions.Item>
                    ))}
                    {entity.metadata.passives?.map((passive) => (
                      <antd.Descriptions.Item
                        key={passive.name}
                        label="Passive"
                        span={3}>
                        <antd.Tooltip
                          title={
                            <div>
                              <div>{passive.id}</div>
                              {passive.boosts?.length === 0 ? null : (
                                <antd.Descriptions
                                  className="card-descriptions"
                                  bordered
                                  title={null}
                                  size="small">
                                  {passive.boosts?.map((boost) => (
                                    <antd.Descriptions.Item
                                      key={boost}
                                      label="Boost"
                                      span={3}>
                                      {boost}
                                    </antd.Descriptions.Item>
                                  ))}
                                </antd.Descriptions>
                              )}
                            </div>
                          }>
                          <div className="card-description-label">
                            {passive.iconURL && (
                              <antd.Avatar
                                className="card-description-label-icon"
                                shape="square"
                                size={24}
                                src={passive.iconURL}
                              />
                            )}
                            {passive.name}
                          </div>
                          {
                            // @ts-ignore - my ts setup seems broken
                            <antd.Typography.Text type="secondary">
                              <GameText
                                value={passive.description}
                                params={passive.descriptionParams}
                              />
                            </antd.Typography.Text>
                          }
                        </antd.Tooltip>
                      </antd.Descriptions.Item>
                    ))}
                  </antd.Descriptions>
                  <antd.Space className="card-tags" wrap>
                    {entity.tags.map((tag) => {
                      const tagEl = (
                        <antd.Tag
                          key={tag}
                          className="card-tag"
                          color="processing">
                          {tag}
                        </antd.Tag>
                      );
                      if (tag === 'Item') {
                        return (
                          <antd.Tooltip
                            title={
                              entity.metadata.templateID == null
                                ? null
                                : `Template ID: ${entity.metadata.templateID}`
                            }>
                            {tagEl}
                          </antd.Tooltip>
                        );
                      }
                      return tagEl;
                    })}
                  </antd.Space>
                </antd.Space>
              </div>
            </antd.Card>
          </a>
        );
      })}
    </div>
  );
});

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
    return Array.from(tags)
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
            <List entities={filteredEntities} />
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
