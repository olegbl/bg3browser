import * as React from 'react';
import { Entity } from './Types';
import Card from './Card';

type Props = {
  entities: Entity[];
};

function CardList({ entities }: Props) {
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
            <Card entity={entity} />
          </a>
        );
      })}
    </div>
  );
}

export default React.memo(CardList);
