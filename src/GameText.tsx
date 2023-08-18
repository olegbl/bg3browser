import * as React from 'react';
import * as antd from 'antd';

const GAME_TEXT_REGEXP = /^()$|\[(\d+)\]|<LSTag.*?>(.*?)<\/LSTag>/g;

export default function GameText({
  value,
  params,
}: {
  value?: string | null;
  params?: string[] | null;
}) {
  const { token } = antd.theme.useToken();

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
          <span key={`param:${param}`}>
            {(params != null ? params[param] : null) ?? match}
          </span>,
        );
      }
    } else if (part === 3) {
      if (match !== undefined) {
        // <LSTag>text</LSTag>
        tokens.push(
          <span key={`tag:${match}`} style={{ color: token.colorPrimaryText }}>
            {match}
          </span>,
        );
      }
    } else {
      tokens.push(match);
    }
  }
  return <>{tokens}</>;
}
