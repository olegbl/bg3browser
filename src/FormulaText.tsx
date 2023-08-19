import * as React from 'react';
import { useMeasurementsAdapters } from './MeasurementsContext';

const REPLACEMENTS: { [key: string]: string } = {
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

function replace(value: string): string | null {
  if (REPLACEMENTS[value] != null) {
    return REPLACEMENTS[value];
  }
  return null;
}

function safeReplace(value: string): string {
  return replace(value) ?? value;
}

const DISTANCE_REGEXP = /^Distance\(([+-]?(?:\d+\.)?\d+)\)$/;
const SKILL_REGEXP = /^Skill\((.+),\s*([+-]?\d+)\)$/;
const ROLL_BONUS_REGEXP = /^RollBonus\((.+?),\s*(.+?)(?:,\s*(.+))?\)$/;

type Props = {
  value: string;
};

// TODO: most of this shouldn't be necessary with propert translations
//       in the scraper (gotta find the translation handles for boosts)
//       but some of this will be needed to handle metric vs imperial units
function FormulaText({ value }: Props) {
  const { getDistance } = useMeasurementsAdapters();

  const replacement = replace(value);
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
      ? `+${safeReplace(rollBonus[2])}`
      : value < 0
      ? value
      : `+${value}`;
    return [rollBonus[3], safeReplace(rollBonus[1]), value].join(' ');
  }

  return value;
}

export default React.memo(FormulaText);
