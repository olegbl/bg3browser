import * as React from 'react';
import * as antd from 'antd';
import { useMeasurementsAdapters } from './MeasurementsContext';

const VALUE_REPLACEMENTS: { [key: string]: string } = {
  Attack: 'Attack Rolls',
  DeathSavingThrow: 'Death Saving Throws',
  MeleeSpellAttack: 'Melee Spell Attack Rolls',
  MeleeUnarmedAttack: 'Melee Unarmed Attack Rolls',
  MeleeWeaponAttack: 'Melee Weapon Attack Rolls',
  ProficiencyBonus: 'Proficiency Bonus',
  RangedSpellAttack: 'Ranged Spell Attack Rolls',
  RangedUnarmedAttack: 'Ranged Unarmed Attack Rolls',
  RangedWeaponAttack: 'Ranged Weapon Attack Rolls',
  RawAbility: 'Ability Checks',
  SavingThrow: 'Saving Throws',
  SkillCheck: 'Skill Checks',
};

function replaceValue(value: string): string | null {
  if (VALUE_REPLACEMENTS[value] != null) {
    return VALUE_REPLACEMENTS[value];
  }
  return null;
}

function replaceValueSafely(value: string): string {
  return replaceValue(value) ?? value;
}

const PARAM_REGEXP = /\[(\d+)\]/g;

function replaceParameters(value: string, params: string[]): string {
  return value.replace(PARAM_REGEXP, (_, index) => {
    index = parseInt(index, 10) - 1;
    return params[index];
  });
}

const DISTANCE_REGEXP = /^Distance\(([+-]?(?:\d+\.)?\d+)\)$/;

// TODO: most of this shouldn't be necessary with propert translations
//       in the scraper (gotta find the translation handles for boosts)
//       but some of this will be needed to handle metric vs imperial units
const SKILL_REGEXP = /^Skill\((.+),\s*([+-]?\d+)\)$/;
const ROLL_BONUS_REGEXP = /^RollBonus\((.+?),\s*(.+?)(?:,\s*(.+))?\)$/;

function replaceFormula(value: string, getDistance: (value: number) => string) {
  const replacement = replaceValue(value);
  if (replacement != null) {
    return replacement;
  }

  const distance = value.match(DISTANCE_REGEXP) ?? [];
  if (distance[1] != null) {
    return getDistance(parseFloat(distance[1]));
  }

  const skill = value.match(SKILL_REGEXP) ?? [];
  if (skill[1] != null && skill[2] != null) {
    const value = parseFloat(skill[2]);
    const sign = value < 0 ? '' : '+';
    return `${skill[1]} ${sign}${value}`;
  }

  const rollBonus = value.match(ROLL_BONUS_REGEXP) ?? [];
  if (rollBonus[1] != null && rollBonus[2] != null) {
    let value: number | string = parseFloat(rollBonus[2]);
    value = isNaN(value)
      ? `+${replaceValueSafely(rollBonus[2])}`
      : value < 0
      ? value
      : `+${value}`;
    return [rollBonus[3], replaceValueSafely(rollBonus[1]), value].join(' ');
  }

  return value;
}

const TAG_REGEXP = /<LSTag.*?(?: Tooltip="(.*?)")?>(.*?)<\/LSTag>/g;

export function getParametrizeString(
  value: string,
  params: string[],
  getDistance: (value: number) => string,
): string {
  value = replaceParameters(value, params);
  return value
    .split(TAG_REGEXP)
    .map((subvalue, index) => {
      const part = index % 3;
      switch (part) {
        case 0:
          return replaceFormula(subvalue, getDistance);
        case 1:
          return '';
        case 2:
          return subvalue;
      }
    })
    .join('');
}

type Props = {
  value: string;
  params?: string[];
};

function ParametrizedText({ value, params = [] }: Props) {
  const { token } = antd.theme.useToken();
  const { getDistance } = useMeasurementsAdapters();

  value = replaceParameters(value, params);

  let tooltip = '';
  return value.split(TAG_REGEXP).map((subvalue, index) => {
    const part = index % 3;
    switch (part) {
      case 0:
        return replaceFormula(subvalue, getDistance);
      case 1:
        tooltip = '';
        return null;
      case 2:
        // TODO: implement translated tooltip
        return (
          <span
            key={`tag:${(index - 2) / 3}`}
            style={{ color: token.colorPrimaryText }}>
            {subvalue}
          </span>
        );
    }
  });
}

export default React.memo(ParametrizedText);
