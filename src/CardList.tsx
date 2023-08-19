import * as React from 'react';

import type { IEntity } from './Types';

import Card from './Card';
import ErrorBoundary from './ErrorBoundary';

type Props = {
  entities: IEntity[];
};

function CardList({ entities }: Props) {
  return (
    <ErrorBoundary>
      <div className="list">
        {entities.map((entity) => {
          return (
            <ErrorBoundary key={entity.id}>
              <a
                className="list-item"
                href={entity.linkURL}
                target="_blank"
                rel="noreferrer">
                <Card entity={entity} />
              </a>
            </ErrorBoundary>
          );
        })}
      </div>
    </ErrorBoundary>
  );
}

export default React.memo(CardList);
