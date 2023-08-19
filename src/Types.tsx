export type IBoost = {
  id: string;
  description: string;
  descriptionParams: string[];
};

export type IPassive = {
  id: string;
  name: string;
  description: string;
  descriptionParams: string[];
  iconURL: string | null;
  boosts: IBoost[];
};

export type ISpell = {
  id: string;
  name: string;
  description: string;
  descriptionParams: string[];
  iconURL: string | null;
};

export type IEntity = {
  id: string;
  name: string;
  description: string;
  iconURL: string;
  linkURL: string;
  tags: string[];
  metadata: {
    armorClass: string | null;
    boosts: IBoost[];
    damages: string[];
    food: string | null;
    passives: IPassive[];
    range: string | null;
    rarity: string | null;
    spells: ISpell[];
    templateID: string | null;
    weight: string | null;
  };
};
