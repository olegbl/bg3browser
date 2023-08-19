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
  icon: string | null;
  boosts: IBoost[];
};

export type ISpell = {
  id: string;
  name: string;
  description: string;
  descriptionParams: string[];
  icon: string | null;
};

export type IEntity = {
  id: string;
  name: string;
  description: string;
  icon: string | null;
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

// maps icon IDs to icon base64 encoded data URIs
export type IIcons = {
  [iconID: string]: string;
};
