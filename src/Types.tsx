type Boost = string;

type Passive = {
  boosts?: Boost[] | null;
  description?: string | null;
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
    boosts?: Boost[] | null;
    damage?: string | null;
    damageVersatile?: string | null;
    food?: string | null;
    passives?: Passive[] | null;
    range?: string | null;
    rarity?: string | null;
    templateID?: string | null;
    weight?: string | null;
  };
};
