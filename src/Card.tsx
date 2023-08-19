import * as React from 'react';
import * as antd from 'antd';

import type { IEntity } from './Types';

import { useIsDebugModeEnabled } from './DebugContext';
import { useMeasurementsAdapters } from './MeasurementsContext';
import ParametrizedText from './ParametrizedText';

const CARD_RARITY_CLASSES: { [key: string]: string | null } = {
  Common: 'card-rarity-common',
  Uncommon: 'card-rarity-uncommon',
  Rare: 'card-rarity-rare',
  VeryRare: 'card-rarity-veryrare',
  Legendary: 'card-rarity-legendary',
};

type Props = {
  entity: IEntity;
};

function Card({ entity }: Props) {
  const [debug] = useIsDebugModeEnabled();
  const { token } = antd.theme.useToken();
  const { getDistance, getWeight } = useMeasurementsAdapters();

  return (
    <antd.Card
      className={['card', CARD_RARITY_CLASSES[entity.metadata.rarity ?? '']]
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
          <antd.Typography className="card-name">{entity.name}</antd.Typography>
          <antd.Typography>
            <ParametrizedText value={entity.description} />
            {debug &&
              ` (Entry: ${entity.id.split(':')[0]}, Template: ${
                entity.metadata.templateID
              })`}
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
            {entity.metadata.damages?.map((damage, index) => (
              <antd.Descriptions.Item
                key={`damage:${index}`}
                label={
                  entity.metadata.damages?.length === 1
                    ? 'Damage'
                    : index === 0
                    ? '1H Damage'
                    : index === 1
                    ? '2H Damage'
                    : 'Damage'
                }
                span={3}>
                {damage}
              </antd.Descriptions.Item>
            ))}
            {entity.metadata.range && (
              <antd.Descriptions.Item label="Range" span={3}>
                {getDistance(entity.metadata.range)}
              </antd.Descriptions.Item>
            )}
            {entity.metadata.boosts?.map((boost) => (
              <antd.Descriptions.Item key={boost.id} label="Boost" span={3}>
                <ParametrizedText
                  value={boost.description}
                  params={boost.descriptionParams}
                />
                {debug && ` (${boost.id})`}
              </antd.Descriptions.Item>
            ))}
            {entity.metadata.passives?.map((passive) => (
              <React.Fragment key={passive.name}>
                <antd.Descriptions.Item label="Passive" span={3}>
                  <div className="card-description-label">
                    {passive.iconURL && (
                      <antd.Avatar
                        className="card-description-label-icon"
                        shape="square"
                        size={36}
                        src={passive.iconURL}
                      />
                    )}
                    <span>
                      <span className="passive-label">{passive.name}</span>:{' '}
                      <span>
                        <ParametrizedText
                          value={passive.description}
                          params={passive.descriptionParams}
                        />
                        {debug && ` (${passive.id})`}
                      </span>
                    </span>
                  </div>
                </antd.Descriptions.Item>
                {debug &&
                  passive.boosts?.map((boost) => (
                    <antd.Descriptions.Item
                      key={boost.id}
                      label="Boost"
                      span={3}>
                      <ParametrizedText
                        value={boost.description}
                        params={boost.descriptionParams}
                      />
                      {debug && ` (${boost.id})`}
                    </antd.Descriptions.Item>
                  ))}
              </React.Fragment>
            ))}
            {entity.metadata.weight && (
              <antd.Descriptions.Item label="Weight" span={3}>
                {getWeight(entity.metadata.weight)}
              </antd.Descriptions.Item>
            )}
          </antd.Descriptions>
          <antd.Space className="card-tags" wrap>
            {entity.tags.map((tag) => (
              <antd.Tag key={tag} className="card-tag" color="processing">
                {tag}
              </antd.Tag>
            ))}
          </antd.Space>
        </antd.Space>
      </div>
    </antd.Card>
  );
}

export default React.memo(Card);
