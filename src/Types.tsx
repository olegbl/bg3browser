export type Entity = {
  id: string;
  name: string;
  description: string;
  iconURL: string;
  linkURL: string;
  tags: string[];
  metadata: {
    templateID?: string | null;
    damage?: string | null;
    damageVersatile?: string | null;
    food?: string | null;
    range?: string | null;
    rarity?: string | null;
    weight?: string | null;
  };
};
