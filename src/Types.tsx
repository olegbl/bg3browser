export type IBoost = {
  id: string;
  label: string;
};

export type IPassive = {
  boosts?: IBoost[] | null;
  description?: string | null;
  descriptionParams?: string[] | null;
  iconURL?: string | null;
  id: string;
  name?: string | null;
};

export type Entity = {
  id: string;
  name: string;
  description: string;
  iconURL: string;
  linkURL: string;
  tags: string[];
  metadata: {
    armorClass?: string | null;
    boosts?: IBoost[] | null;
    damages?: string[] | null;
    food?: string | null;
    passives?: IPassive[] | null;
    range?: string | null;
    rarity?: string | null;
    templateID?: string | null;
    weight?: string | null;
  };
};
