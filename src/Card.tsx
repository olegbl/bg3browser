import * as React from 'react';
import * as antd from 'antd';

import type { IEntity } from './Types';

import { useIsDebugModeEnabled } from './DebugContext';
import { useMeasurementsAdapters } from './MeasurementsContext';
import ParametrizedText from './ParametrizedText';

// antd's prevalence for modifying direct children while
// prevnets them from being wrapped in proper React components
// is a very bad design choice
function getDescriptionRow({
  debug,
  key = null,
  label,
  id = null,
  name = null,
  description,
  descriptionParams = [],
  iconURL = null,
  children,
}: {
  debug: boolean;
  key?: string | null;
  label: string;
  id?: string | null;
  name?: string | null;
  description: string;
  descriptionParams?: string[];
  iconURL?: string | null;
  children?: React.ReactNode;
}) {
  if (description == null) {
    return null;
  }
  return (
    <React.Fragment key={key}>
      <antd.Descriptions.Item label={label} span={3}>
        <div className="card-description-label">
          {iconURL && (
            <antd.Avatar
              className="card-description-label-icon"
              shape="square"
              size={36}
              src={iconURL}
            />
          )}
          <span>
            {name && (
              <>
                <span className="passive-label">{name}</span>:{' '}
              </>
            )}
            <span>
              <ParametrizedText
                value={description}
                params={descriptionParams}
              />
              {debug && id && ` (${id})`}
            </span>
          </span>
        </div>
      </antd.Descriptions.Item>
      {children}
    </React.Fragment>
  );
}

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
            {entity.metadata.range &&
              getDescriptionRow({
                debug,
                label: 'Range',
                description: getDistance(entity.metadata.range),
              })}
            {entity.metadata.boosts?.map((boost) =>
              getDescriptionRow({
                debug,
                key: boost.id,
                label: 'Boost',
                id: boost.id,
                description: boost.description,
                descriptionParams: boost.descriptionParams,
              }),
            )}
            {entity.metadata.passives?.map((passive) =>
              getDescriptionRow({
                debug,
                key: passive.id,
                label: 'Passive',
                name: passive.name,
                id: passive.id,
                description: passive.description,
                descriptionParams: passive.descriptionParams,
                iconURL: passive.iconURL,
                children:
                  debug &&
                  passive.boosts?.map((boost) =>
                    getDescriptionRow({
                      debug,
                      key: boost.id,
                      label: 'Boost',
                      id: boost.id,
                      description: boost.description,
                      descriptionParams: boost.descriptionParams,
                    }),
                  ),
              }),
            )}
            {entity.metadata.spells?.map((spell) =>
              getDescriptionRow({
                debug,
                key: spell.id,
                label: 'Ability',
                name: spell.name,
                id: spell.id,
                description: spell.description,
                descriptionParams: spell.descriptionParams,
                iconURL: spell.iconURL,
              }),
            )}
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
