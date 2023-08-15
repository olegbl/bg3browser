import { Entity } from './Types';

const data: Entity[] = [
  {
    id: '7956d6f3-cef7-4470-ad62-c208231d3258',
    name: 'Ability Improvement',
    description:
      'You increase one Ability by 2, or two Abilities by 1, to a maximum of 20.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Ability_Improvement',
    tags: ['Feat'],
  },
  {
    id: 'e5a796ab-3b90-4cd3-8b5a-c3aa5d993833',
    name: 'Athlete',
    description:
      'Your <LSTag Tooltip="Strength">Strength</LSTag> or <LSTag Tooltip="Dexterity">Dexterity</LSTag> increases by 1, to a maximum of 20.<br><br>When you are Prone, standing up uses significantly less movement. Your <LSTag Type="Spell" Tooltip="Projectile_Jump">Jump</LSTag> distance also increases by 50%.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Athlete',
    tags: ['Feat'],
  },
  {
    id: '413644a9-3cb5-4f76-980a-bf2397dcac3d',
    name: 'Defensive Duellist',
    description:
      'When attacked while wielding a <LSTag Tooltip="Finesse">Finesse Weapon</LSTag> you\'re <LSTag Tooltip="Proficiency">Proficient</LSTag> with, you can use a <LSTag Type="ActionResource" Tooltip="ReactionActionPoint">reaction</LSTag> to add your <LSTag Tooltip="ProficiencyBonus">Proficiency Bonus</LSTag> to your <LSTag Tooltip="ArmourClass">Armour Class</LSTag>, possibly causing the attack to miss. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Defensive_Duellist',
    tags: ['Feat'],
  },
  {
    id: '95777965-bb2b-4ad5-8cc8-3c0c407c4bc4',
    name: 'Dual Wielder',
    description:
      'You can use Two-Weapon Fighting even if your weapons aren\'t <LSTag Tooltip="Light">Light</LSTag>, and you gain a +1 bonus to <LSTag Tooltip="ArmourClass">Armour Class</LSTag> while wielding a melee weapon in each hand. You cannot dual-wield <LSTag Tooltip="Heavy">Heavy</LSTag> weapons.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Dual_Wielder',
    tags: ['Feat'],
  },
  {
    id: 'da220d1c-c365-4695-9c3a-60927f364201',
    name: 'Great Weapon Master',
    description:
      'When you land a <LSTag Tooltip="CriticalHit">Critical Hit</LSTag> or kill a target with a <LSTag Tooltip="MeleeWeaponAttack">melee weapon attack</LSTag>, you can make another melee weapon attack as a <LSTag Type="ActionResource" Tooltip="BonusActionPoint">bonus action</LSTag> that turn.<br><br>Attacks with Heavy melee weapons you are <LSTag Tooltip="Proficiency">Proficient</LSTag> with, can deal an additional 10 damage at the cost of a -5 <LSTag Tooltip="AttackRoll">Attack Roll</LSTag> penalty. (You can toggle this on and off.)',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Great_Weapon Master',
    tags: ['Feat'],
  },
  {
    id: '8ee6c346-ccdf-4335-a342-a15261051035',
    name: 'Heavily Armoured',
    description:
      'You gain <LSTag Tooltip="ArmourProficiency">Armour Proficiency</LSTag> with Heavy Armour and your <LSTag Tooltip="Strength">Strength</LSTag> increases by 1, to a maximum of 20.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Heavily_Armoured',
    tags: ['Feat'],
  },
  {
    id: 'b12ac1e4-aad8-4cdf-aa22-d92b5757bd50',
    name: 'Lightly Armoured',
    description:
      'You gain <LSTag Tooltip="ArmourProficiency">Armour Proficiency</LSTag> with Light Armour and your <LSTag Tooltip="Strength">Strength</LSTag> or <LSTag Tooltip="Dexterity">Dexterity</LSTag> increases by 1, to a maximum of 20.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Lightly_Armoured',
    tags: ['Feat'],
  },
  {
    id: 'c3abcd7c-67da-491b-ad6f-d96623fc675f',
    name: 'Magic Initiate: Bard',
    description:
      'You learn 2 <LSTag Tooltip="Cantrip">cantrips</LSTag> and a Level 1 spell from the bard spell list. You can cast the Level 1 spell once per <LSTag Tooltip="LongRest">Long Rest</LSTag>. Your <LSTag Tooltip="SpellcastingAbility">Spellcasting Ability</LSTag> for all 3 spells is Charisma.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Magic_Initiate: Bard',
    tags: ['Feat'],
  },
  {
    id: '8df4c2d0-cd9e-4473-abd9-45e8073d3e64',
    name: 'Magic Initiate: Cleric',
    description:
      'You learn 2 <LSTag Tooltip="Cantrip">cantrips</LSTag> and a Level 1 spell from the cleric spell list. You can cast the Level 1 spell once per <LSTag Tooltip="LongRest">Long Rest</LSTag>. Your <LSTag Tooltip="SpellcastingAbility">Spellcasting Ability</LSTag> for all 3 spells is Wisdom.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Magic_Initiate: Cleric',
    tags: ['Feat'],
  },
  {
    id: 'aaa0c12c-b643-44eb-b419-42ee72c0f2f2',
    name: 'Magic Initiate: Druid',
    description:
      'You learn 2 <LSTag Tooltip="Cantrip">cantrips</LSTag> and a Level 1 spell from the druid spell list. You can cast the Level 1 spell once per <LSTag Tooltip="LongRest">Long Rest</LSTag>. Your <LSTag Tooltip="SpellcastingAbility">Spellcasting Ability</LSTag> for all 3 spells is Wisdom.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Magic_Initiate: Druid',
    tags: ['Feat'],
  },
  {
    id: '4099d9bc-92dc-41fb-8b58-19c2bf8d32c8',
    name: 'Magic Initiate: Sorcerer',
    description:
      'You learn 2 <LSTag Tooltip="Cantrip">cantrips</LSTag> and a Level 1 spell from the sorcerer spell list. You can cast the Level 1 spell once per <LSTag Tooltip="LongRest">Long Rest</LSTag>. Your <LSTag Tooltip="SpellcastingAbility">Spellcasting Ability</LSTag> for all 3 spells is Charisma.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Magic_Initiate: Sorcerer',
    tags: ['Feat'],
  },
  {
    id: '19681957-adaa-4feb-b813-4413aed56de0',
    name: 'Magic Initiate: Warlock',
    description:
      'You learn 2 <LSTag Tooltip="Cantrip">cantrips</LSTag> and a Level 1 spell from the warlock spell list. You can cast the Level 1 spell once per <LSTag Tooltip="LongRest">Long Rest</LSTag>. Your <LSTag Tooltip="SpellcastingAbility">Spellcasting Ability</LSTag> for all 3 spells is Charisma.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Magic_Initiate: Warlock',
    tags: ['Feat'],
  },
  {
    id: '5670e7db-cbe0-4135-8802-5f33f304346d',
    name: 'Magic Initiate: Wizard',
    description:
      'You learn 2 <LSTag Tooltip="Cantrip">cantrips</LSTag> and a Level 1 spell from the wizard spell list. You can cast the Level 1 spell once per <LSTag Tooltip="LongRest">Long Rest</LSTag>. Your <LSTag Tooltip="SpellcastingAbility">Spellcasting Ability</LSTag> for all 3 spells is Intelligence.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Magic_Initiate: Wizard',
    tags: ['Feat'],
  },
  {
    id: '282f1e7e-33a5-400a-adf4-dff59dc2629c',
    name: 'Martial Adept',
    description:
      'You learn two manoeuvres from the Battle Master subclass and gain a <LSTag Type="ActionResource" Tooltip="SuperiorityDie">Superiority Die</LSTag> to fuel them. You regain expended Superiority Dice after a <LSTag Tooltip="ShortRest">Short</LSTag> or <LSTag Tooltip="LongRest">Long Rest</LSTag>.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Martial_Adept',
    tags: ['Feat'],
  },
  {
    id: '00a17a40-2f3a-429f-a8fc-e3dc264f6670',
    name: 'Mobile',
    description:
      'Your <LSTag Tooltip="MovementSpeed">movement speed</LSTag> increases, and difficult terrain doesn\'t slow you down when you <LSTag Type="Spell" Tooltip="Shout_Dash">Dash</LSTag>.<br><br>If you move after making a melee attack, you don\'t provoke <LSTag Tooltip="OpportunityAttack">Opportunity Attacks</LSTag> from your target.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Mobile',
    tags: ['Feat'],
  },
  {
    id: '3ff13547-e5dd-4c26-955f-ec02535defa2',
    name: 'Moderately Armoured',
    description:
      'You gain <LSTag Tooltip="ArmourProficiency">Armour Proficiency</LSTag> with Medium Armour and shields, and your <LSTag Tooltip="Strength">Strength</LSTag> or <LSTag Tooltip="Dexterity">Dexterity</LSTag> increases by 1, to a maximum of 20.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Moderately_Armoured',
    tags: ['Feat'],
  },
  {
    id: '4dcb182b-3d98-406c-845a-fed95f3f8711',
    name: 'Performer',
    description:
      'You gain <LSTag Tooltip="MusicalInstrumentProficiency">Musical Instrument Proficiency</LSTag>, and your <LSTag Tooltip="Charisma">Charisma</LSTag> increases by 1, to a maximum of 20.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Performer',
    tags: ['Feat'],
  },
  {
    id: '367e04a9-9e10-481c-987f-8b94f9ae0015',
    name: 'Shield Master',
    description:
      'You gain a +2 bonus to Dexterity <LSTag Tooltip="SavingThrow">Saving Throws</LSTag> while wielding a shield. If a spell forces you to make a Dexterity <LSTag Tooltip="SavingThrow">Saving Throw</LSTag>, you can use a <LSTag Type="ActionResource" Tooltip="ReactionActionPoint">reaction</LSTag> to shield yourself and diminish the effect\'s damage. On a failed Saving Throw, you only take half damage. On a successful Saving Throw, you don\'t take any damage.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Shield_Master',
    tags: ['Feat'],
  },
  {
    id: '51ebffc1-d909-4c24-8d24-ef06ad2c3e69',
    name: 'Skilled',
    description:
      'You gain <LSTag Tooltip="Proficiency">Proficiency</LSTag> in 3 <LSTag Tooltip="Skill">Skills</LSTag> of your choice.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Skilled',
    tags: ['Feat'],
  },
  {
    id: '47bd633c-b40e-471c-a77b-d443123e4fcf',
    name: 'Tough',
    description:
      'Your hit point maximum increases by 2 for every level you have gained.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Tough',
    tags: ['Feat'],
  },
  {
    id: 'e1c40138-38a8-4067-87a6-597b52f379fa',
    name: 'Weapon Master',
    description:
      'You gain <LSTag Tooltip="Proficiency">Proficiency</LSTag> with four weapons of your choice, and your <LSTag Tooltip="Strength">Strength</LSTag> or <LSTag Tooltip="Dexterity">Dexterity</LSTag> increases by 1, to a maximum of 20.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Weapon_Master',
    tags: ['Feat'],
  },
  {
    id: 'ARM_Padded_Body:63cc7723-245d-4b62-b9e6-5a47283cf777',
    name: 'Padded Armour',
    description:
      'A standard gambeson of quilted cloth. Good for catching blows, but almost unbearably sweaty.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Padded_Armour',
    tags: ['Item'],
  },
  {
    id: 'ARM_Leather_Body:02ae5d88-8044-43df-8363-02a2900776db',
    name: 'Leather Armour',
    description:
      'Dark, messy stains line the armholes of the well-used leather breastplate.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Leather_Armour',
    tags: ['Item'],
  },
  {
    id: 'ARM_StuddedLeather_Body:19451420-13f6-444c-a15b-7abb6dde3f91',
    name: 'Studded Leather Armour',
    description:
      'Shaped, hardened, and reinforced with metal studs, leather is the armour of choice for those who value agility as much as protection.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Studded_Leather Armour',
    tags: ['Item'],
  },
  {
    id: 'ARM_Hide_Body:b78fabcc-d2df-4c74-b5d4-1eda6dc4c071',
    name: 'Hide Armour',
    description:
      'Constructed from carefully-chosen animal hides tanned, hardened and varnished to a gleaming finish.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Hide_Armour',
    tags: ['Item'],
  },
  {
    id: 'ARM_ChainShirt_Body:921cd1e1-c39c-44c3-a090-b667322af7f8',
    name: 'Chain Shirt',
    description:
      'Tight chains protect the wearer from sharp weapons, while fabric padding protects the skin from cold metal.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Chain_Shirt',
    tags: ['Item'],
  },
  {
    id: 'ARM_ScaleMail_Body:ca0aafad-0f1e-4d76-8e3b-925397bb436b',
    name: 'Scale Mail',
    description:
      'A hefty shirt of scale, offering some protection against the slings and arrows of the world.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Scale_Mail',
    tags: ['Item'],
  },
  {
    id: 'ARM_Breastplate_Body:4814825e-23ee-41ed-9784-d9963434150d',
    name: 'Breastplate',
    description:
      'This standard-sized breastplate is lined with thick padding meant to cushion the wearer and deflect blows from assailants. The uniform squares of the padding suggest a mathematically-minded crafter.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Breastplate',
    tags: ['Item'],
  },
  {
    id: 'ARM_HalfPlate_Body:34a71679-0ab5-4fd4-bba8-d6ad341ee490',
    name: 'Half Plate Armour',
    description:
      'This heavy, resilient breastplate is reinforced by a padded gambeson to protect soldiers from hip to neck.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Half_Plate Armour',
    tags: ['Item'],
  },
  {
    id: 'ARM_ChainMail_Body:b973e3cb-c18d-4514-ba01-ebcabbf26968',
    name: 'Chain Mail',
    description:
      'The tight weave of chains in this armour chimes like wind through leaves.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Chain_Mail',
    tags: ['Item'],
  },
  {
    id: 'ARM_Splint_Body:8ed82f7e-fdd4-4a9f-94b6-f256c599bfdd',
    name: 'Splint Armour',
    description:
      'Combining sturdy metal plates with flexible cloth, this armour promises protection and mobility.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Splint_Armour',
    tags: ['Item'],
  },
  {
    id: 'ARM_Robe_Body:168b9099-19f5-44e4-b55c-e64ceb60b71f',
    name: 'Simple Robe',
    description:
      "Crafted with care, this robe will protect you from the elements. It won't do much against a sword's thrust, though.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Simple_Robe',
    tags: ['Item'],
  },
  {
    id: 'ARM_Padded_Body_1:f5faa6c5-a43c-4edd-a77f-6e7536a7e683',
    name: 'Padded Armour +1',
    description:
      'The quilting threads running through this padded vest seem to gleam in the rising sun.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Padded_Armour +1',
    tags: ['Item'],
  },
  {
    id: 'ARM_Leather_Body_1:90a79e46-e327-41f4-a349-8e4dd70b1892',
    name: 'Leather Armour +1',
    description:
      'This well-tailored leather tunic is reinforced by geometric quilting.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Leather_Armour +1',
    tags: ['Item'],
  },
  {
    id: 'ARM_Leather_Body_2:ac71c753-c207-465c-b28b-c10f95ed0745',
    name: 'Leather Armour +2',
    description:
      'This armour is stitched together with thick, metal-lined cord, reinforcing it at the seams.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Leather_Armour +2',
    tags: ['Item'],
  },
  {
    id: 'ARM_StuddedLeather_Body_1:58d7927f-c6eb-4635-85b6-70265c621b3d',
    name: 'Studded Leather Armour +1',
    description:
      'This armour is strong enough to stop a dagger and light enough to escape whatever weapon follows it.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Studded_Leather Armour +1',
    tags: ['Item'],
  },
  {
    id: 'ARM_StuddedLeather_Body_2:83603f36-d158-4a0e-b9c9-358413ba3a92',
    name: 'Studded Leather Armour +2',
    description:
      'Superbly shaped, elegantly designed, and tough as ring mail with none of the weight.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Studded_Leather Armour +2',
    tags: ['Item'],
  },
  {
    id: 'ARM_Hide_Body_1:94ed8ec8-93a4-4a8c-bc47-55cb3faae7c0',
    name: 'Hide Armour +1',
    description:
      'Tight stitches bind panels of hard leather into a formfitting carapace that moves like a second skin.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Hide_Armour +1',
    tags: ['Item'],
  },
  {
    id: 'ARM_Hide_Body_2:fd4ab5b0-67e6-4a8b-8745-2003f2f5ada3',
    name: 'Hide Armour +2',
    description:
      "This hide armour, soft to the touch but hard as a zaratan's hide, is stitched together of narrow panels allowing for the wearer's ease of movement and comfort.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Hide_Armour +2',
    tags: ['Item'],
  },
  {
    id: 'ARM_ChainShirt_Body_1:eac652ed-ecf7-4505-bf64-0fec29e7d677',
    name: 'Chain Shirt +1',
    description:
      'The intricate embroidery on the linen panel of this armour indicates the nobility of its previous owner.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Chain_Shirt +1',
    tags: ['Item'],
  },
  {
    id: 'ARM_ChainShirt_Body_2:461f1cbe-6d0d-40ee-8bf6-8a68e0570d6f',
    name: 'Chain Shirt +2',
    description:
      "This mail's impossibly fine, close joining indicates the work of gnomish fingers.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Chain_Shirt +2',
    tags: ['Item'],
  },
  {
    id: 'ARM_ScaleMail_Body_1:dc748177-8590-4a99-a446-feccbd8d8eb4',
    name: 'Scale Mail +1',
    description:
      'The work of a skilled craftsman, this scale shirt offers better protection than most.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Scale_Mail +1',
    tags: ['Item'],
  },
  {
    id: 'ARM_ScaleMail_Body_2:21f0dd84-6f02-4be9-8654-4cebd00dcbaf',
    name: 'Scale Mail +2',
    description:
      "Crafted by an artist's hands, this exquisite scale shirt feels like it could turn aside any blade.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Scale_Mail +2',
    tags: ['Item'],
  },
  {
    id: 'ARM_Breastplate_Body_1:ad912cef-8bfb-4bf3-98f0-f2c5e3b45915',
    name: 'Breastplate +1',
    description:
      "This breastplate is crafted in the specialty style of a mysterious armourer in Amn known only as 'The Tailor.'",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Breastplate_+1',
    tags: ['Item'],
  },
  {
    id: 'ARM_Breastplate_Body_2:4842e9ec-95ba-4168-81a9-f184b08d6c2c',
    name: 'Breastplate +2',
    description:
      "This garment's previous owner left a few minor personal effects in its inner breast pocket: a scrap of sassafrass, a short bit of thread, and half a peppermint.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Breastplate_+2',
    tags: ['Item'],
  },
  {
    id: 'ARM_HalfPlate_Body_1:c3407c8d-0180-4f5a-9530-e1167e7290b3',
    name: 'Half Plate Armour +1',
    description:
      'Heraldic runes are sewn into the padding of this armour, offering a gift of protection to whoever dons it.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Half_Plate Armour +1',
    tags: ['Item'],
  },
  {
    id: 'ARM_HalfPlate_Body_2:15338da1-c4f8-4b43-912c-c14e7d9a8579',
    name: 'Half Plate Armour +2',
    description:
      'This breastplate is far tougher than it appears, taking blows from common weapons without suffering so much as a scratch.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Half_Plate Armour +2',
    tags: ['Item'],
  },
  {
    id: 'ARM_ChainMail_Body_1:ed7a8055-cf36-42c8-ad77-15a80d19744f',
    name: 'Chain Mail +1',
    description:
      'Fine fabric obscures the bulk of this chain mail, allowing its wearer to mix in polite society while protecting them from unexpected assailants.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Chain_Mail +1',
    tags: ['Item'],
  },
  {
    id: 'ARM_ChainMail_Body_2:d8120501-e5bb-4eb1-b5cf-120b8bfd2ab2',
    name: 'Chain Mail +2',
    description:
      'Made from thick, strong chains loosely-fitted, this armour hangs more heavily than some but protects its wearer with an impenetrable weave of metal.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Chain_Mail +2',
    tags: ['Item'],
  },
  {
    id: 'ARM_Splint_Body_1:ecfb1364-b1a0-4d0e-b82a-0becd8c291fd',
    name: 'Splint Armour +1',
    description:
      'Skilled hands crafted this armour, reinforcing the metal plates while sacrificing none of the flexibility.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Splint_Armour +1',
    tags: ['Item'],
  },
  {
    id: 'ARM_Splint_Body_2:2e8dfe32-cd6e-475b-98b5-5e2d9c42a7df',
    name: 'Splint Armour +2',
    description:
      "Wrought of an artisan's skill and passion, this armour will turn aside all but the fiercest of blades.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Splint_Armour +2',
    tags: ['Item'],
  },
  {
    id: 'UNI_RobeOfSummer:ffed890a-69fe-4798-8c71-1bd3b72369bc',
    name: 'Robe of Summer',
    description: "This robe's thin fabric is pleasantly warm to the touch.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Robe_of Summer',
    tags: ['Item'],
  },
  {
    id: 'ARM_StuddedLeather_Body_Drow:cab3455f-59fe-42be-8dcd-7cd61149389a',
    name: 'Drow Studded Leather Armour',
    description:
      'Tracings of glossy black spider-web mark this drow-made armour. It is supple, but strong - and made to blend in with the dark caves and crevices of the Underdark.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Drow_Studded Leather Armour',
    tags: ['Item'],
  },
  {
    id: 'ARM_HalfPlate_Body_Githyanki:38c63f49-3c50-46d0-90d3-68b247542c36',
    name: 'Githyanki Half Plate',
    description:
      "This armour was forged to Vlaakith's standards under the exacting eye of a githyanki smith.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Githyanki_Half Plate',
    tags: ['Item'],
  },
  {
    id: 'ARM_Boots_Metal:689e8d3e-b79b-417b-8cd2-9d08b2f5e618',
    name: 'Metallic Boots',
    description:
      'Scratched in places, scorched in others, and worn thin at the heel, these boots bear the indelible marks of experience.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Metallic_Boots',
    tags: ['Item'],
  },
  {
    id: 'ARM_Boots_Metal_Githyanki:319c625a-cfb7-4e44-ac3f-370a00c0d4ef',
    name: 'Githyanki Boots',
    description:
      'Lavishly decorated boots, crafted on far-away planes from stolen metals and poached rubies.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Githyanki_Boots',
    tags: ['Item'],
  },
  {
    id: 'UNI_Daisy_Plate:aa0917ea-5f66-4a22-97de-654228484128',
    name: 'Elegant Robe',
    description:
      'A draped robe made with lightweight fabric. Made for seduction rather than battle.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Elegant_Robe',
    tags: ['Item'],
  },
  {
    id: 'ARM_Gloves_Metal:1dcdf52e-b596-4e3a-8d1c-8fff17ed8c2c',
    name: 'Metallic Gloves',
    description:
      'Made from steel hammered thin, these gauntlets are a fine investment for any warrior.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Metallic_Gloves',
    tags: ['Item'],
  },
  {
    id: 'ARM_Robe_Body_Sorcerer:4ba55c6f-1302-4069-9e04-ff0bf2a7ede2',
    name: 'Sorcerer Robe',
    description:
      'Neat leather bands keep the trailing cloth secure. Singed sleeves are a liability for any spellcaster.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Sorcerer_Robe',
    tags: ['Item'],
  },
  {
    id: 'ARM_Barbarian:f6599c3f-cfcd-4721-9cc2-1df5d8ff0154',
    name: 'Barbarian Clothes',
    description:
      'A rough combination of furs, leathers, and supple fabrics, made for a life outside civilisation.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Barbarian_Clothes',
    tags: ['Item'],
  },
  {
    id: 'ARM_ScaleMail_Body_Paladin_Devotion:a455f1a1-acc6-4fce-a09e-111aceced98a',
    name: 'Scale Mail of Devotion',
    description:
      'Embroidered on the tabard are the tenets of devotion: Honesty, Courage, Compassion, Honour, and Duty.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Scale_Mail of Devotion',
    tags: ['Item'],
  },
  {
    id: 'ARM_ScaleMail_Body_Paladin_Ancients:e4daf34d-053c-471a-9171-92fa9b4db4af',
    name: 'Scale Mail of the Ancients',
    description:
      "Four embroidered sentences decorate the tabard - the tenets of the ancients: 'Kindle the Light. Shelter the Light. Preserve your own Light. Be the Light.'",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Scale_Mail of the Ancients',
    tags: ['Item'],
  },
  {
    id: 'ARM_Padded_Body_Destroyed:e8609f47-b67c-4020-850d-58f7897593e0',
    name: 'Damaged Padded Armour',
    description:
      'Scorching fire, jagged metallic edges, and destructive poison have turned this padded armour into a rag.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Damaged_Padded Armour',
    tags: ['Item'],
  },
  {
    id: 'ARM_Leather_Body_Destroyed:91d8e57d-4c73-47ca-87dc-252ab0a3aa95',
    name: 'Damaged Leather Armour',
    description:
      'Scorch marks, acid burns, and jagged tears indicate this leather armour has been to the Hells and back.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Damaged_Leather Armour',
    tags: ['Item'],
  },
  {
    id: 'ARM_ChainShirt_Body_Destroyed:82f4d3d6-c2c8-47ee-8fcb-7b093deff6e9',
    name: 'Damaged Chain Shirt',
    description:
      'Your crash landing aboard the nautiloid has done serious damage to this garment.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Damaged_Chain Shirt',
    tags: ['Item'],
  },
  {
    id: 'ARM_ScaleMail_Body_Destroyed:ddf6982a-72d4-44db-a152-4dd2b816e836',
    name: 'Damaged Scale Mail',
    description:
      'With many broken and missing scales, this armour offers little in the way of protection.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Damaged_Scale Mail',
    tags: ['Item'],
  },
  {
    id: 'ARM_HalfPlate_Body_Githyanki_Destroyed:c3aaffa5-096d-4d4c-87b6-a9298d306cb6',
    name: 'Damaged Githyanki Half Plate',
    description:
      'Scorched, stained, and dented, this suit of githyanki armour has survived the unthinkable - and still endured.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Damaged_Githyanki Half Plate',
    tags: ['Item'],
  },
  {
    id: 'ARM_Robe_Destroyed:14c13bc9-ab35-4cab-a220-23a61cd43845',
    name: 'Damaged Robe',
    description: 'Tattered and stained, this robe has seen better days.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Damaged_Robe',
    tags: ['Item'],
  },
  {
    id: 'ARM_Gloves_Leather:8e34fd76-8b6d-48a5-89e3-942289bec31e',
    name: 'Leather Gloves',
    description: 'These supple gloves provide both flexibility and protection.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Leather_Gloves',
    tags: ['Item'],
  },
  {
    id: 'ARM_Gloves_Metal_Githyanki:30b19abd-fc49-4826-811f-9c4c556ae6f0',
    name: 'Githyanki Bracers',
    description:
      'Forged from an amalgamation of metals, these bracers shine a million different shades of silver.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Githyanki_Bracers',
    tags: ['Item'],
  },
  {
    id: 'ARM_Shoes:97f37571-35e8-4cc8-8b0d-ff92d20ae0bb',
    name: 'Simple Boots',
    description:
      'Made of tough, well-worn leather, these boots have survived years of use, and can survive many more.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Simple_Boots',
    tags: ['Item'],
  },
  {
    id: 'ARM_Boots_Leather:969bab00-b269-46a5-a7e9-dd4887814719',
    name: 'Leather Boots',
    description:
      'These boots are well-maintained and clean, though their soles are thin from wear.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Leather_Boots',
    tags: ['Item'],
  },
  {
    id: 'ARM_Shoes_Barbarian:2577a332-8ad2-4e54-b52b-f4f7cc5823a1',
    name: 'Leather Boots',
    description:
      'Warm, supple boots, made to cross the roughest of terrains with ease.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Leather_Boots',
    tags: ['Item'],
  },
  {
    id: 'ARM_Hat_Wizard_A:07ad0e9f-7fb4-418f-a1ef-06b431c252be',
    name: 'Wizard Hat',
    description:
      'This wizardly hat has a little embroidered rabbit inside its lining - the rabbit is called snowball, and once he was lost, never to be found. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Wizard_Hat',
    tags: ['Item'],
  },
  {
    id: 'ARM_Hat_Wizard_B:65f78de8-f6aa-4080-84de-73e654b02883',
    name: 'Old Floppy Hat',
    description: 'Whacked around more often than a clown in a tragedy. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Old_Floppy Hat',
    tags: ['Item'],
  },
  {
    id: 'ARM_Hat_Wizard_C:a05f4468-4e26-4856-b996-ba8ab8e55a14',
    name: 'Bycocket',
    description:
      'This wizardly hat has a little embroidered rabbit inside its lining - the rabbit is called snowball, and once he was lost, never to be found. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Bycocket',
    tags: ['Item'],
  },
  {
    id: 'ARM_Hat_Wizard_D:b8bd447c-eef3-441e-9fb8-303b5b926432',
    name: 'Brimmed Hat',
    description:
      'This wizardly hat has a little embroidered rabbit inside its lining - the rabbit is called snowball, and once he was lost, never to be found. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Brimmed_Hat',
    tags: ['Item'],
  },
  {
    id: 'ARM_Hat_Wizard_E:e24d6a8b-5489-4c5c-b133-b435fda3918a',
    name: 'Embroidered Hat',
    description: 'Silvery wings spread over the stiff unyeilding leather.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Embroidered_Hat',
    tags: ['Item'],
  },
  {
    id: 'ARM_Hat_Wizard_F:694320b7-726b-4804-9dd6-fbc8a307a05f',
    name: 'Embroidered Bycocket',
    description:
      'Tapered to a precise point, such as the wizardly mind when focusing on a nice big dinner, instead of all these complicated spells.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Embroidered_Bycocket',
    tags: ['Item'],
  },
  {
    id: 'ARM_Hat_Wizard_G:ff47e1c4-f49f-460c-b6a6-dce635fa48c4',
    name: 'Wide-Brimmed Hat',
    description:
      'Very wide brimmed, really. Almost a kind of grinning sombrero.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Wide-Brimmed_Hat',
    tags: ['Item'],
  },
  {
    id: 'ARM_Hat_Wizard_H:4a4e2cf1-a02f-41c4-b68f-5f5301f74577',
    name: 'Snakeskin Hat',
    description:
      'As classic a design as one can hope for. It even has the frumpy wrinkles.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Snakeskin_Hat',
    tags: ['Item'],
  },
  {
    id: 'ARM_Hat_MuffinHat_A:90008c9b-ca19-46c1-9c2b-7164983de6da',
    name: 'Ignoble Hat',
    description:
      'Foppish and fluffy and built for just the right sort of dome accustomed to having it set upon the head by other people.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Ignoble_Hat',
    tags: ['Item'],
  },
  {
    id: 'ARM_Hat_MuffinHat_B:3d3c949f-8fff-4133-b12e-3c739dbd6428',
    name: 'Rufflesome Blaggart Hat',
    description:
      'For the discerning ranonteur, spinning of stories, and peacockish personality.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Rufflesome_Blaggart Hat',
    tags: ['Item'],
  },
  {
    id: 'ARM_MerregonMask:b2409a86-dc0d-4193-9985-4f11419c64be',
    name: 'Devilfoil Mask',
    description:
      'A placid smile and cherubic cheeks. Who knows what face once lay beneath.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Devilfoil_Mask',
    tags: ['Item'],
  },
  {
    id: 'ARM_Helmet_Leather:c58a1f91-ec1b-49c8-96ab-d94d4be4b584',
    name: 'Leather Helmet',
    description:
      'Layers of leather were boiled and moulded to create this rugged cap. It still smells a bit of tannins.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Leather_Helmet',
    tags: ['Item'],
  },
  {
    id: 'ARM_Helmet_Metal:67a87879-533e-4f9b-8274-f5bd37748ace',
    name: 'Helmet',
    description:
      'Any padding that once lined this helmet has long since worn away.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Helmet',
    tags: ['Item'],
  },
  {
    id: 'ARM_Circlet:348b0f52-8960-43e0-ae38-c1d3b1974c3f',
    name: 'Circlet',
    description:
      'Provides its wearer a touch of elegance but no additional protection.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Circlet',
    tags: ['Item'],
  },
  {
    id: 'ARM_CircletOfBlasting:3abdbb8a-4701-4397-8fce-7a8dd8a0bb84',
    name: 'Circlet of Blasting',
    description:
      'This delicate circlet grants its wearer the ability to cast the Scorching Ray spell.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Circlet_of Blasting',
    tags: ['Item'],
  },
  {
    id: 'ARM_HeadbandOfIntellect:8779b30f-dc6f-4264-b7af-9dc0eff51bb0',
    name: 'Headband of Intellect',
    description:
      'An elegant circlet, best worn by those with an affinity for the magical arts.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Headband_of Intellect',
    tags: ['Item'],
  },
  {
    id: 'ARM_Ring:ecf4a8a4-7859-4a82-8c08-0c9526f29500',
    name: 'Tarnished Ring',
    description: 'A cheap ring marred by rust and a thin patina of neglect.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Tarnished_Ring',
    tags: ['Item'],
  },
  {
    id: 'ARM_Ring_Copper:7ff7d7b1-6fdd-44b7-b0ca-d9f4ebf5bb72',
    name: 'Emerald Ring',
    description:
      'Imported in bulk from Calimshan, the gemstone set in this ring is roughly finished and marred with visible flaws.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Emerald_Ring',
    tags: ['Item'],
  },
  {
    id: 'ARM_Ring_B:7ff7d7b1-6fdd-44b7-b0ca-d9f4ebf5bb72',
    name: 'Emerald Ring',
    description:
      'Imported in bulk from Calimshan, the gemstone set in this ring is roughly finished and marred with visible flaws.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Emerald_Ring',
    tags: ['Item'],
  },
  {
    id: 'ARM_Ring_C:d4d7ed7f-3b51-4be4-8b3c-15dcd4f9de91',
    name: 'Carnelian Ring',
    description:
      "Considered a token of good fortune, this ring's stones are perfectly smooth.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Carnelian_Ring',
    tags: ['Item'],
  },
  {
    id: 'ARM_Ring_D:9e1ef422-c33e-4429-a197-abc07a02d767',
    name: 'Bronze Ring',
    description:
      'A purple gemstone set in bronze, this ring has been crafted by a steady and practised hand.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Bronze_Ring',
    tags: ['Item'],
  },
  {
    id: 'ARM_Ring_E:8b1c2137-76e4-4a47-bebb-cf50847aca08',
    name: 'Copper Ring',
    description:
      'Inlaid with semi precious stones, this ring looks expensive - at first glance.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Copper_Ring',
    tags: ['Item'],
  },
  {
    id: 'ARM_Ring_F:5dafe8e9-8437-4347-96eb-98b58efaacf6',
    name: 'Bronze Ring',
    description: 'A cheap ring, decorated only with a sizeable green agate.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Bronze_Ring',
    tags: ['Item'],
  },
  {
    id: 'ARM_Ring_G:5f2b3262-bc71-4873-beb5-b51968e565ee',
    name: 'Copper Band',
    description: 'This chunky copper ring is embedded with dark green stones.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Copper_Band',
    tags: ['Item'],
  },
  {
    id: 'ARM_Ring_H:f284c260-84d9-45d6-8a15-257401f361dc',
    name: 'Garnet Ring',
    description:
      'The garnet at the centrepiece of this ring is like an unblinking, malevolent eye.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Garnet_Ring',
    tags: ['Item'],
  },
  {
    id: 'ARM_Ring_I:5b22795e-8193-4933-98f9-9667d6f60b53',
    name: 'Dark Ring',
    description:
      'With a sharpened gemstone at its centre, this ring is capable of cutting the very flesh it decorates. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Dark_Ring',
    tags: ['Item'],
  },
  {
    id: 'ARM_Ring_Silver:9c147265-5b32-44fe-af57-fa0d3f6c5712',
    name: 'Peridot Ring',
    description:
      'Considered sacred by some gnomes and halflings, the gem set in this ring sparkles brilliantly. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Peridot_Ring',
    tags: ['Item'],
  },
  {
    id: 'ARM_Ring_B_Silver_A:9c147265-5b32-44fe-af57-fa0d3f6c5712',
    name: 'Peridot Ring',
    description:
      'Considered sacred by some gnomes and halflings, the gem set in this ring sparkles brilliantly. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Peridot_Ring',
    tags: ['Item'],
  },
  {
    id: 'ARM_Ring_C_Silver_A:81d843ad-2343-4964-b5d0-3db44dfee4e1',
    name: 'Ruby Ring',
    description:
      'The setting around the ruby is chipped and scratched, as if somebody had tried to lever the gem free.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Ruby_Ring',
    tags: ['Item'],
  },
  {
    id: 'ARM_Ring_D_Silver_A:a9f741f6-a758-47ea-bb21-9a37d3ddfe42',
    name: 'Amethyst Ring',
    description:
      "The silver band's cool undertones highlight this ring's vivid purple gemstone.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Amethyst_Ring',
    tags: ['Item'],
  },
  {
    id: 'ARM_Ring_E_Silver_A:efe2746c-10d4-4082-9133-d05b6f7fa291',
    name: 'Polished Ring',
    description:
      'Each purple gemstone set in this thin silver band has been polished until it gleams.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Polished_Ring',
    tags: ['Item'],
  },
  {
    id: 'ARM_Ring_F_Silver_A:49b84359-6a28-460e-af98-4526c5fca6fd',
    name: 'Tourmaline Ring',
    description:
      'A slim-fitting silver band, decorated with a mint green gemstone.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Tourmaline_Ring',
    tags: ['Item'],
  },
  {
    id: 'ARM_Ring_G_Silver_A:34dceb64-7246-4a2a-b7c0-411725ce468e',
    name: 'Silver Band',
    description: 'Calishite emeralds are embedded in this heavy silver ring.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Silver_Band',
    tags: ['Item'],
  },
  {
    id: 'ARM_Ring_H_Silver_A:5cbedb00-e900-439e-9035-50ab581fc5b9',
    name: 'Ruby Ring',
    description: 'A ruby like a drop of blood sits at the centre of this ring.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Ruby_Ring',
    tags: ['Item'],
  },
  {
    id: 'ARM_Ring_I_Silver_A:fc5dbbb6-10ec-427d-abe5-a04f5182e332',
    name: 'Onyx Ring',
    description:
      'This silver band is inlaid with onyx and tempered to a sharpened point. Beautiful, but dangerous.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Onyx_Ring',
    tags: ['Item'],
  },
  {
    id: 'ARM_Ring_Gold:5cd7c5d3-fb97-4757-b5fd-dcc7a43110a7',
    name: 'Verdelite Ring',
    description:
      'Encased in delicately twisted gold, this seafoam green stone is of the tourmaline variety.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Verdelite_Ring',
    tags: ['Item'],
  },
  {
    id: 'ARM_Ring_A_Gem_A_Gold:173aad0e-0db4-4f2f-8f24-49e6898b8f90',
    name: 'Gold Ring',
    description:
      'A date was once engraved on the inside of this ring, but most of it has long since been worn away by time.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Gold_Ring',
    tags: ['Item'],
  },
  {
    id: 'ARM_Ring_A_Simple_Gold:ecf4a8a4-7859-4a82-8c08-0c9526f29500',
    name: 'Tarnished Ring',
    description: 'A cheap ring marred by rust and a thin patina of neglect.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Tarnished_Ring',
    tags: ['Item'],
  },
  {
    id: 'ARM_Ring_B_Gem_A_Gold:8eba01b5-b731-447f-887e-0cf0dd4d53d4',
    name: 'Garnet Ring',
    description:
      'The garnet embedded in this tarnished ring has been lovingly polished - the band worn thin from use.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Garnet_Ring',
    tags: ['Item'],
  },
  {
    id: 'ARM_Ring_B_Gem_B_Gold:2a4b298c-88cb-4951-b244-2e65e6819945',
    name: 'Gold Ring',
    description:
      'A mythical creature, depicted in full flight, has been delicately carved into this ring.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Gold_Ring',
    tags: ['Item'],
  },
  {
    id: 'ARM_Ring_B_Gold_A:5cd7c5d3-fb97-4757-b5fd-dcc7a43110a7',
    name: 'Verdelite Ring',
    description:
      'Encased in delicately twisted gold, this seafoam green stone is of the tourmaline variety.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Verdelite_Ring',
    tags: ['Item'],
  },
  {
    id: 'ARM_Ring_C_Gold_A:a631b70a-22e9-4e2c-bb07-2164c2beb5d0',
    name: 'Gold Ring ',
    description:
      'Expertly formed and finished, this ring catches the attention of admirers and thieves alike.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Gold_Ring ',
    tags: ['Item'],
  },
  {
    id: 'ARM_Ring_D_Gold_A:b7aab838-cafa-4b7d-a8d5-95ec3488f909',
    name: 'Amethyst Ring',
    description:
      "An unusual piece, this gold-studded amethyst caused a stir at the Wide plaza in Baldur's Gate.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Amethyst_Ring',
    tags: ['Item'],
  },
  {
    id: 'ARM_Ring_E_Gold_A:aa39ec3a-55c5-465c-8a3f-d5eb810c073f',
    name: 'Gold Ring',
    description:
      "Multiple amethysts fresh off the boat from Chult line this ring's band.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Gold_Ring',
    tags: ['Item'],
  },
  {
    id: 'ARM_Ring_F_Gold_A:66dc3535-3757-403b-8236-de380bf3f4ca',
    name: 'Tourmaline Ring',
    description:
      'The warm tones of the gold band pair beautifully with this mint-green tourmaline. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Tourmaline_Ring',
    tags: ['Item'],
  },
  {
    id: 'ARM_Ring_G_Gold_A:b72c3fb7-c172-4dfa-81bb-f924a3c1ec19',
    name: 'Gold Band',
    description:
      'A weighted gold ring embellished with emeralds of varying sizes. Simple, but elegant. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Gold_Band',
    tags: ['Item'],
  },
  {
    id: 'ARM_Ring_H_Gold_A:638307c5-20ec-41a3-8c2f-c86d56bbaf73',
    name: 'Garnet Ring',
    description:
      'When the light catches, this ring shines like a smouldering flame.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Garnet_Ring',
    tags: ['Item'],
  },
  {
    id: 'ARM_Ring_I_Gold_A:65bb04bb-4313-4446-b250-727a712000c9',
    name: 'Obsidian Ring',
    description:
      "This ring's dark gemstone appears to steal the light from around it. ",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Obsidian_Ring',
    tags: ['Item'],
  },
  {
    id: 'ARM_RingOfPoisonResistance:35688051-90df-40e1-890b-c3cde2c82fde',
    name: 'Ring of Poison Resistance',
    description: "The ring's emerald glows a deep, deadly green.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Ring_of Poison Resistance',
    tags: ['Item'],
  },
  {
    id: 'ARM_Amulet:51873c0d-f319-45e6-a6a2-79164cd8f3db',
    name: 'Silver Amulet',
    description:
      'Chunky and a little dated, but made entirely of hammered silver.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Silver_Amulet',
    tags: ['Item'],
  },
  {
    id: 'ARM_Amulet_Bronze:fda631e5-83f5-4ae4-b28f-cf4da102e3be',
    name: 'Bronze Necklace',
    description:
      'Though shining brightly, this necklace smells distinctively of rust.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Bronze_Necklace',
    tags: ['Item'],
  },
  {
    id: 'ARM_Amulet_Necklace_A_Bronze_Green:8bba4a7c-a7df-4d1f-b202-286522a028fa',
    name: 'Tarnished Pendant',
    description:
      'Spots of crumbling green patina are slowly eating away at this once-bronze pendant.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Tarnished_Pendant',
    tags: ['Item'],
  },
  {
    id: 'ARM_Amulet_Necklace_B_Bronze_A:fda631e5-83f5-4ae4-b28f-cf4da102e3be',
    name: 'Bronze Necklace',
    description:
      'Though shining brightly, this necklace smells distinctively of rust.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Bronze_Necklace',
    tags: ['Item'],
  },
  {
    id: 'ARM_Amulet_Necklace_C_Bronze_A:032c0c5e-158f-4c51-8fbe-f7658f43c853',
    name: 'Burnished Necklace',
    description:
      'Bright and polished, this necklace was clearly cherished by its previous owner.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Burnished_Necklace',
    tags: ['Item'],
  },
  {
    id: 'ARM_Amulet_Necklace_D_Bronze_Green:15be2ce4-3f2c-4b75-8068-bd13fd69a3d5',
    name: 'Bronze Pendant',
    description:
      'The interlocked bronze links of this necklace tinkle softly every time you move.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Bronze_Pendant',
    tags: ['Item'],
  },
  {
    id: 'ARM_Amulet_Necklace_F_Bronze_A:3a3a688b-4d18-44df-9190-003493492070',
    name: 'Polished Necklace',
    description:
      'Heavily set with gemstones, this necklace weighs more than expected.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Polished_Necklace',
    tags: ['Item'],
  },
  {
    id: 'ARM_Amulet_Silver:51873c0d-f319-45e6-a6a2-79164cd8f3db',
    name: 'Silver Amulet',
    description:
      'Chunky and a little dated, but made entirely of hammered silver.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Silver_Amulet',
    tags: ['Item'],
  },
  {
    id: 'ARM_Amulet_Necklace_A_Silver_Orange:51873c0d-f319-45e6-a6a2-79164cd8f3db',
    name: 'Silver Amulet',
    description:
      'Chunky and a little dated, but made entirely of hammered silver.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Silver_Amulet',
    tags: ['Item'],
  },
  {
    id: 'ARM_Amulet_Necklace_B_Silver_A:50d054ee-4982-46eb-8f16-7a1c71ec8e28',
    name: 'Silver Necklace',
    description:
      "Sapphire necklaces are popular among Baldur's Gate's patriars as mourning garb - the heavy teardrop-shaped stones represent the weight of their loss.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Silver_Necklace',
    tags: ['Item'],
  },
  {
    id: 'ARM_Amulet_Necklace_C_Silver_A:c3d8f808-3f35-4206-9f6d-a26961953616',
    name: 'Burnished Necklace',
    description:
      'Set with gems harvested from deep within the Underdark, this necklace has a dark lustre.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Burnished_Necklace',
    tags: ['Item'],
  },
  {
    id: 'ARM_Amulet_Necklace_D_Silver_Purple:1df12296-498c-494c-b639-f103b63156a3',
    name: 'Silver Pendant',
    description: 'This cold, heavy pendant is slow to warm to the touch.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Silver_Pendant',
    tags: ['Item'],
  },
  {
    id: 'ARM_Amulet_Necklace_F_Silver_B:e75e18a0-0a94-42b4-8745-063ea00a5a66',
    name: 'Polished Necklace',
    description:
      'Fine strips of silver snake around the emeralds in this necklace, holding them firmly in place.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Polished_Necklace',
    tags: ['Item'],
  },
  {
    id: 'ARM_Amulet_Pearl:5fb93f62-06fa-4dc1-9c59-ff3fd48043d4',
    name: 'Pearl Necklace',
    description: "Tiny rainbows reflect in the pearls' iridescent shine.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Pearl_Necklace',
    tags: ['Item'],
  },
  {
    id: 'ARM_Amulet_Necklace_E_Pearl_A:5fb93f62-06fa-4dc1-9c59-ff3fd48043d4',
    name: 'Pearl Necklace',
    description: "Tiny rainbows reflect in the pearls' iridescent shine.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Pearl_Necklace',
    tags: ['Item'],
  },
  {
    id: 'ARM_Amulet_Gold:fc44cf0e-04dc-4feb-b143-b1c52cffe252',
    name: 'Gold Pendant',
    description:
      "Though this necklace looks simple in design, the tiny filigreed triangles holding the gemstone in place demonstrate the jeweller's skill.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Gold_Pendant',
    tags: ['Item'],
  },
  {
    id: 'ARM_Amulet_Necklace_A_Gold_Purple:fc44cf0e-04dc-4feb-b143-b1c52cffe252',
    name: 'Gold Pendant',
    description:
      "Though this necklace looks simple in design, the tiny filigreed triangles holding the gemstone in place demonstrate the jeweller's skill.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Gold_Pendant',
    tags: ['Item'],
  },
  {
    id: 'ARM_Amulet_Necklace_B_Gold_A:c612c1e6-0ff0-40a1-b199-b25db1c9808e',
    name: 'Gold Necklace',
    description:
      'Tiny, ageless flower petals fill the amber stones of this necklace.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Gold_Necklace',
    tags: ['Item'],
  },
  {
    id: 'ARM_Amulet_Necklace_C_Gold_A:ee6309db-5347-435c-94d8-a84f5996ea56',
    name: 'Burnished Necklace',
    description:
      "The deep emerald stones on this chain sparkle like Eldath's eyes.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Burnished_Necklace',
    tags: ['Item'],
  },
  {
    id: 'ARM_Amulet_Necklace_F_Gold_A:912bbc6f-f4f0-4815-9ed5-d914289402e6',
    name: 'Polished Necklace',
    description:
      "It is said that wearing a ruby near the heart will increase a lover's courage.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Polished_Necklace',
    tags: ['Item'],
  },
  {
    id: 'ARM_Amulet_Necklace_D_Gold_Blue:54566608-c5e2-40e1-b2fc-014ba43a67ae',
    name: 'Gold Pendant',
    description:
      'Heavily embossed with filigree, this necklace reflects light in all directions.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Gold_Pendant',
    tags: ['Item'],
  },
  {
    id: 'ARM_KeepsakeLocket_A:fa28af9d-f179-4eeb-9780-a4cde893ac1f',
    name: 'Brass Locket',
    description:
      'Slightly tarnished, and opened with a mere flick of the thumb.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Brass_Locket',
    tags: ['Item'],
  },
  {
    id: 'ARM_Shield:d2af60ea-1b72-4d25-a188-6d8bc4fe255b',
    name: 'Studded Shield',
    description:
      'The side of this shield has a slightly lighter colour - as if part of it was cut away and replaced.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Studded_Shield',
    tags: ['Item'],
  },
  {
    id: 'ARM_Shield_C:4491fcaf-03bf-4087-baf3-b638657080f6',
    name: 'Wooden Shield',
    description:
      'Despite the chips and dents, you can still make out the faded painting of a flower on the face of this shield.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Wooden_Shield',
    tags: ['Item'],
  },
  {
    id: 'ARM_Shield_Rusty:8c02c87f-955d-4cc2-b547-f22462ad7106',
    name: 'Rusty Studded Shield',
    description:
      "Good for defending from stray flatulence, but that's about it. ",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Rusty_Studded Shield',
    tags: ['Item'],
  },
  {
    id: 'ARM_Shar_Shield:e4b4c45f-0563-4b00-851c-30a64fcb18ec',
    name: 'Iron-Banded Shield',
    description:
      'This thick oak shield is reinforced with a frame of rough-hammered iron.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Iron-Banded_Shield',
    tags: ['Item'],
  },
  {
    id: 'ARM_Drow_Shield:e4b4c45f-0563-4b00-851c-30a64fcb18ec',
    name: 'Iron-Banded Shield',
    description:
      'This thick oak shield is reinforced with a frame of rough-hammered iron.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Iron-Banded_Shield',
    tags: ['Item'],
  },
  {
    id: 'ARM_Drow_Shield_Absolute:004ab562-5cd4-4f1f-8aa5-497e7e2c5f4f',
    name: 'Iron-Banded Shield',
    description:
      'This thick oak shield is reinforced with a frame of rough-hammered iron.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Iron-Banded_Shield',
    tags: ['Item'],
  },
  {
    id: 'ARM_Shield_FlamingFist:ab10f66f-6e93-43f5-9384-82565f14124a',
    name: 'Metal Shield',
    description:
      'Though the metal is only of moderate quality, a proud, flaming fist decorates the front of this shield.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Metal_Shield',
    tags: ['Item'],
  },
  {
    id: 'ARM_Shield_Broken:d59619ef-320f-4c16-8e21-0644034f0c26',
    name: 'Broken Shield',
    description:
      "This old splintered shield is no stronger than a child's toy.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Broken_Shield',
    tags: ['Item'],
  },
  {
    id: 'ARM_Toy_Shield:e13facc6-aced-4b48-b239-b0e76448013f',
    name: 'Training Shield',
    description: 'A light, wooden shield, full of dents and cuts.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Training_Shield',
    tags: ['Item'],
  },
  {
    id: 'ARM_Goblin_Shield_A:dd7550d6-112d-476e-9234-4901a95bd7f6',
    name: 'Scrapwood Shield',
    description:
      'This rough wooden shield is held together by strips of scrap metal, bolted together with obvious haste.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Scrapwood_Shield',
    tags: ['Item'],
  },
  {
    id: 'ARM_Goblin_Shield_B:89bb450f-d976-4981-b43e-b5d16948da1e',
    name: 'Goblin Shield',
    description: 'Thick spikes jut from this repurposed wooden tabletop.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Goblin_Shield',
    tags: ['Item'],
  },
  {
    id: 'ARM_Goblin_Shield_C:e0d5a057-328a-467d-b8fb-1bfd298d59e7',
    name: 'Spiked Shield',
    description: 'Thick spikes jut from this repurposed wooden tabletop.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Spiked_Shield',
    tags: ['Item'],
  },
  {
    id: 'ARM_KuoToa_Shield_A:2099af4a-caa2-4e06-9b6d-fa6e9754bd09',
    name: 'Fossilised Shell',
    description:
      'Sticky, rope-like seaweed is wrapped around this oversized shell, allowing it to be fashioned as a shield.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Fossilised_Shell',
    tags: ['Item'],
  },
  {
    id: 'ARM_WoodWoad_Shield:41b07341-1bf3-450d-9303-377c035c09ac',
    name: 'Organic Shield',
    description:
      'These three small stumps make for a peculiar but effective shield.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Organic_Shield',
    tags: ['Item'],
  },
  {
    id: '_Shield_Magic:cb2d6c27-ec29-4555-adf2-41e8c1952439',
    name: 'Shield +1',
    description: 'Though dented in many places, this shield shines like new.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Shield_+1',
    tags: ['Item'],
  },
  {
    id: 'ARM_Shield_1:cb2d6c27-ec29-4555-adf2-41e8c1952439',
    name: 'Shield +1',
    description: 'Though dented in many places, this shield shines like new.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Shield_+1',
    tags: ['Item'],
  },
  {
    id: 'ARM_Instrument_Drum:76944b2f-1e79-4c22-8d9a-e6c30e5194e0',
    name: 'Hand Drum',
    description:
      "Whether sounding war, celebration, or simple rhythm, the drum is a main-stay of any entertainer's arsenal.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Hand_Drum',
    tags: ['Item'],
  },
  {
    id: 'ARM_Instrument_Flute:848ad8dc-59f3-464b-b8b2-95eab6022446',
    name: 'Flute',
    description:
      'It is said Diores the Charming once lured a nest of harpies to their deaths, using only a flute.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Flute',
    tags: ['Item'],
  },
  {
    id: 'ARM_Instrument_Lute_B:f2487101-548f-4494-9ec8-b20fa3ad6f7b',
    name: 'Lute',
    description:
      "Many a bard's first instrument, the lute is heard in taverns all across Faerûn.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Lute',
    tags: ['Item'],
  },
  {
    id: 'ARM_Instrument_Lyre:13739f15-7366-4d7f-9926-991e98b9e964',
    name: 'Lyre',
    description:
      "Devotees of the goddess Sune hold that the lyre's seven strings represent the seven different forms of love. ",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Lyre',
    tags: ['Item'],
  },
  {
    id: 'ARM_Instrument_Violin:aca5d144-773b-42ba-aca1-6903c60c418c',
    name: 'Violin',
    description:
      'A violin of cedar and burled walnut. The pegs are a little scuffed, the strings thin and worn, but the song from this instrument would still ring clear and true.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Violin',
    tags: ['Item'],
  },
  {
    id: 'ARM_Camp_Body:f369f4fa-2da7-4693-a147-16cfaf02bca5',
    name: 'Homely Clothes',
    description:
      'Perfect for ambling around a campsite, enjoying the starlight and good conversation.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Homely_Clothes',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Citizen:516d4737-5f69-4083-8bae-3f09e5aab180',
    name: 'Comfortable Blue-Red Outfit',
    description:
      'Stylish without being altogether noteworthy, though the embroidery is actually very fine in certain lights.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Comfortable_Blue-Red Outfit',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Citizen_B:52353c73-2c58-4dd7-8370-adb266a17fab',
    name: 'Spring Slimfit Outfit',
    description:
      'Accentuating all features, turning stockiness into slenderness, turning a beer-belly into... well, an ale gut, but even so! A win overall!',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Spring_Slimfit Outfit',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Citizen_C:d9caff77-293c-4e8d-a721-3e17908490f8',
    name: 'Swarthy Wayfarer in Cream',
    description:
      'A most adventuresome and spring-heeled variety of ensemble, perfect for journey-makers and risk-takers.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Swarthy_Wayfarer in Cream',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Refugee_Gray:47e4e37b-d3fa-4e23-8d53-203804cd3b6e',
    name: 'Road-Dust Gray Clothes',
    description:
      'Gray with accumulated road dust as much as dye, these clothes are nothing special.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Road-Dust_Gray Clothes',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Refugee_Green:dfe7cf67-64b5-4b91-9ae2-50aea87493f9',
    name: 'Scruffy Vagabond Clothes',
    description:
      'Patchwork and threadbare, these clothes practically dangle off their wearer.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Scruffy_Vagabond Clothes',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Shirt_Blue:e03b6708-5865-409d-8855-67aa834c60bd',
    name: 'Cosy Blue Shirt',
    description:
      'At camp, under the deep blue sky fading to indigo at the horizon, this shirt fits right in.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Cosy_Blue Shirt',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Shirt_Red:4866f90d-ee70-43a8-96a4-35511f4b824e',
    name: 'Comfortable Red Shirt',
    description: 'As red as campfire flame.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Comfortable_Red Shirt',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Shirt_Purple:8725508f-e47e-488f-8187-3d15ebb9c8e9',
    name: 'Snug Purple Shirt',
    description: 'Purple as tasty plums shared by a camp tent.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Snug_Purple Shirt',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Shirt_Green:39d87577-6f4f-438e-a5b7-abf387a6f0f1',
    name: 'Snugglesome Green Shirt',
    description: 'Soft and green and ideal for a good sleep under the stars.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Snugglesome_Green Shirt',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Shirt_Black:67f1d175-a03b-4cb0-bf3c-c7304b147aca',
    name: 'Mellow Black Shirt',
    description:
      'Dark and inexpensive, yet with a very charming cosiness once worn.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Mellow_Black Shirt',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Aristocrat:3dc4b718-0504-43e2-a88f-0d6736bf6b25',
    name: 'Sweetly Tailored Outfit',
    description:
      'Fashioned at the hands of someone deeply skilled... or, at the very least, someone who was having a good day at the loom and tailor shop.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Sweetly_Tailored Outfit',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Aristocrat_Brown:3fc58d24-9743-4e82-a4bd-ad18eda257cb',
    name: 'Chocolatier Style Doublet',
    description:
      'This lovely ensemble is evocative of the apron of a master chocolatier - and just as scrumptious.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Chocolatier_Style Doublet',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Aristocrat_White:af6ffb20-cbdc-410c-9a12-6c217eb8aa9c',
    name: 'Winter Gala Doublet',
    description:
      "Crisply white with snatches of blue, this garment would not be out of place at a winter festival gala celebrating the wearer's sense of style.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Winter_Gala Doublet',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Patriars:2e3d2a61-a0ba-495c-80e2-faa452542035',
    name: 'Magnificently Realised Ensemble',
    description:
      'Some craftsperson of the highest caliber envisioned and created this, and anyone who wears it shall be the envy of not only their friends, but their enemies too.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Magnificently_Realised Ensemble',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Patriars_Black:164ebd0f-432e-4aa6-8589-5dccafc8383e',
    name: 'Eminent Obsidian Outfit',
    description:
      'Black as volcanic glass and just as valuable, this ensemble would turn the eye of an entire court.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Eminent_Obsidian Outfit',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Patriars_Blue:f577a9be-8793-48da-a03d-e66d993dc4e7',
    name: 'Opalescent Outfit',
    description:
      'When held out in the sun, the sleeves almost glitter, so richly woven is the fabric of this outfit.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Opalescent_Outfit',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Patriars_Green:c2024c47-967b-4d6b-bfb3-978f502d1321',
    name: 'Eminent Emerald Outfit',
    description:
      'Each stitch not embellished with filigree and gold weave is gorgeous as the polished scales of a green dragon fully grown.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Eminent_Emerald Outfit',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Patriars_Red:c65c5dd5-705c-4103-904c-0835d81bd846',
    name: 'City of Brass Outfit',
    description:
      "Though the name is an exaggeration (the fabled city's heat would burn the fabric black stitch by stitch), the sheer magnificence of this ensemble's appeal is not.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/City_of Brass Outfit',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Rich:9c1fedb8-4262-4426-84cc-8ad8dc01be97',
    name: 'Splendid Outfit',
    description:
      'Keenly administered to by the sort of fingers that were born stitching, crocheting, and generally making nice clothes.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Splendid_Outfit',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Rich_Gold:12c2f3d2-a4a6-47e6-a7aa-dfcced16add6',
    name: 'Splendid Gold Outfit',
    description:
      'This outfit makes the wearer feel like a ray of sunlight swanning around camp.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Splendid_Gold Outfit',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Rich_Green:3c8eca7a-8c7c-40a5-be4c-64455630f08f',
    name: 'Splendid Green Outfit ',
    description:
      'This outfit makes the wearer feel like a brilliant green turaco bird.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Splendid_Green Outfit ',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Rich_Teal:f4064489-adce-4b58-b664-311c6d476880',
    name: 'Splendid Teal Outfit',
    description:
      'This outfit makes the wearer feel like a bouquet of puya flowers, except with legs, and great style.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Splendid_Teal Outfit',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Rich_B:0469f558-e4f0-4eb5-b4b2-bf00b8e0aa15',
    name: 'Delicately Constructed Outfit',
    description: 'Capably crafted, giving the impression of affirming wealth,',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Delicately_Constructed Outfit',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Rich_B_Purple:efb49491-ca1d-4bab-a7a7-815f8d298ee0',
    name: 'Splendid Purple Outfit',
    description:
      'Tailoired with immaculate skill, this outfit makes you feel like a Luskan noble walking their manor instead of a wilderland camp.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Splendid_Purple Outfit',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Rich_B1:a38159ef-a981-4abd-bcdd-58e61558960e',
    name: 'Fastidiously Perfect Outfit',
    description: 'Nimble fingers designed and created this outfit. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Fastidiously_Perfect Outfit',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Rich_B1_Beige:0d2cf317-1e3d-492b-8755-00f33cd3f24f',
    name: 'Splendid Beige Outfit',
    description:
      'Tailoired with immaculate skill, this outfit makes you feel like someone who has elevated beige. Beige is an atrocious colour, yet here it is, very impressive and pleasing on the eye.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Splendid_Beige Outfit',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Rich_C:66685917-3cd9-4dc8-a792-319288dacb30',
    name: 'Chandelier-Style Embroidered Ensemble',
    description:
      'Modelled on the chandeliers in the Waterdavian Sea Ward - aesthetically pleasing and most grand.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Chandelier-Style_Embroidered Ensemble',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Rich_C_Blue:5daa7ba8-8e8d-4e68-9f5a-3c9f89c32c89',
    name: 'Splendid Blue Outfit',
    description:
      'This outfit makes you feel like a piece of the summer sky transmuted into silk.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Splendid_Blue Outfit',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Rich_C_Red:6909f7fa-6da9-40ea-898e-91cbaac9bf5c',
    name: 'Splendid Red Outfit',
    description:
      "This outfit makes you feel like a red dragon's fiery breath, only the deadliness lies in sheer aesthetic beauty.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Splendid_Red Outfit',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Rich_D:d0b540dd-c778-4573-b0cb-149a0309bfa2',
    name: 'Backless Extravaganza',
    description:
      "Backless so that people can pat you on the back and proclaim, 'I say, lovely outfit.'",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Backless_Extravaganza',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Rich_D_Blue:0004915f-4399-4ae1-beab-85a62c11b674',
    name: 'Anarchic Blue Outfit',
    description:
      'There is something of the blue-blooded rebel in this outfit, of the bandit princess or prince stealing plunder and hearts.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Anarchic_Blue Outfit',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Rich_D_Green:0004915f-4399-4ae1-beab-85a62c11b674',
    name: 'Anarchic Blue Outfit',
    description:
      'There is something of the blue-blooded rebel in this outfit, of the bandit princess or prince stealing plunder and hearts.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Anarchic_Blue Outfit',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Rich_D_Puple:05916397-ed55-46e0-bec3-ab6c4b2b1cb4',
    name: 'Anarchic Purple Outfit',
    description:
      'There is something of the purple-peacock rebel in this outfit, of the bandit princess or prince stealing plunder and hearts.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Anarchic_Purple Outfit',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Rich_D_White:0e9c3ca7-070f-43e9-b642-bd0b21f76290',
    name: 'Anarchic White Outfit',
    description:
      'There is something of the pale-white-toothed rebel in this outfit, of the bandit princess or prince stealing plunder and hearts.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Anarchic_White Outfit',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Rich_E:91bb667d-239b-4d56-9287-c41124736872',
    name: 'Lionheart Outfit',
    description:
      'Presumably named for a courageous person. Regardless, a marvellously decadent outfit.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Lionheart_Outfit',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Rich_E_GreenPink:1c6c44c6-4bc5-44f6-b5f6-8d3cc4654134',
    name: 'Lionheart Green-Pink Outfit',
    description:
      'Robust, sleek, and flattering, this ensemble presents a very fetching figure for the wearer.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Lionheart_Green-Pink Outfit',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Rich_E_Teal:6cd27edd-fd6b-491b-8263-c01d9dd915aa',
    name: 'Lionheart Teal Outfir',
    description:
      'Robust, sleek, and flattering, this ensemble presents a very fetching figure for the wearer.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Lionheart_Teal Outfir',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Rich_F:c1212df0-3f47-4af7-b98a-164fca31da97',
    name: 'Diamond Pattern Garb',
    description:
      'Diamonds are like the colour black - they simply go with everything.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Diamond_Pattern Garb',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Rich_F_Blue:a6e5ebd6-beb6-4d67-8aeb-254a2b063332',
    name: 'Diamond Blue Doublet',
    description:
      'Robust, sleek, and flattering, this ensemble presents a very fetching figure for the wearer.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Diamond_Blue Doublet',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Rich_G:c9588fa5-3644-4c2d-8b8b-f0d4cdb3869e',
    name: 'Raffish Garb',
    description:
      'Something slightly perilous and fun imbues this design of garments.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Raffish_Garb',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Rich_G_Black:4880fb87-77b7-4931-a586-6909c4a5752a',
    name: 'Raffish Midnight Outfit',
    description:
      'Raffish (meaning sly and disreputable in an alluring way) comes from Raffish Buck Daederum, whose fashion this ensemble mimicks closely.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Raffish_Midnight Outfit',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Rich_G_Bright:e6497a0d-94e6-41bd-8bbd-91885bf56313',
    name: 'Raffish Metallic-Shaded Outfit',
    description:
      'Raffish (meaning sly and disreputable in an alluring way) comes from Raffish Buck Daederum, whose fashion this ensemble mimicks closely.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Raffish_Metallic-Shaded Outfit',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Rich_G_Brown:22a80754-79f2-4b6a-9de4-3e619a80d5d4',
    name: 'Raffish Chestnut Outfit',
    description:
      'Raffish (meaning sly and disreputable in an alluring way) comes from Raffish Buck Daederum, whose fashion this ensemble mimicks closely.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Raffish_Chestnut Outfit',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Rich_G_Red:220d0f79-5016-407d-aaa6-5fb4208dcc56',
    name: 'Raffish Bronze-Red Outift',
    description:
      'Raffish (meaning sly and disreputable in an alluring way) comes from Raffish Buck Daederum, whose fashion this ensemble mimicks closely.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Raffish_Bronze-Red Outift',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Rich_G2:9a8a79fe-a9a2-466d-af06-f3973fe5b16b',
    name: 'Solemnity Outfit',
    description:
      "Austere and no-nonsense, this outfit betoken's largesse and poise.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Solemnity_Outfit',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Rich_G2_Blue:b3185288-bcb3-475d-aac1-7c34fa88898e',
    name: 'Solemnity Outfit in Blue',
    description:
      "One of master Figaro's collection pieces, this outfit maintains the poise and grace of the wearer. Honestly, it elevates it considerably. Bad poise becomes competent poise. Competent becomes strong. Strong becomes spiffing.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Solemnity_Outfit in Blue',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Rich_G2_Green:a7b3f166-f909-4103-8c2c-b8559da749b5',
    name: 'Solemnity Outfit in Green',
    description:
      "One of master Figaro's collection pieces, this outfit maintains the poise and grace of the wearer. Honestly, it elevates it considerably. Bad poise becomes competent poise. Competent becomes strong. Strong becomes spiffing.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Solemnity_Outfit in Green',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Rich_G2_Purple:0650531b-3a2f-499e-bf4e-58488a14636f',
    name: 'Solemnity Outfit in Purple',
    description:
      "One of master Figaro's collection pieces, this outfit maintains the poise and grace of the wearer. Honestly, it elevates it considerably. Bad poise becomes competent poise. Competent becomes strong. Strong becomes spiffing.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Solemnity_Outfit in Purple',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Rich_G2_White:168a676a-af4c-497c-8b98-76a0f6d20462',
    name: 'Solemnity Outfit in Gold Medallions',
    description:
      "One of master Figaro's collection pieces, this outfit maintains the poise and grace of the wearer. Honestly, it elevates it considerably. Bad poise becomes competent poise. Competent becomes strong. Strong becomes spiffing.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Solemnity_Outfit in Gold Medallions',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Cultist:ef840839-3516-43b1-823f-103b1e0b04bf',
    name: 'Absolute Outfit',
    description:
      'Adorned with the tripartite symbol of the Absolute, this ensemble of black and green presents the wearer as either a mocker or a devotee of the cult. Or someone who likes the cut and colour. Or someone who is cold.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Absolute_Outfit',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Deva:62950ae1-b74f-46a6-bfd0-055c93bad651',
    name: 'Angelic Scion Outfit',
    description: 'Golden vambraces and arm rings surmount this divine set.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Angelic_Scion Outfit',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Leather:82fa106f-3fb9-4c00-818f-5e5df5deb434',
    name: 'Leathery Garb',
    description: 'So tight... ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Leathery_Garb',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Leather_Black:5efe9bb8-bffe-4c91-bbd6-bee4d5d0611c',
    name: 'Black Flare Leather Outfit',
    description:
      'A minimalist leather binding get-up that clings to the skin and creaks just the slightest bit when you move.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Black_Flare Leather Outfit',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Leather_Bright:ab68a753-921f-4df5-9979-d9663cea078e',
    name: 'Bright Flare Leather Outfit',
    description:
      'A minimalist leather binding get-up that clings to the skin and creaks just the slightest bit when you move.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Bright_Flare Leather Outfit',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Leather_Rich_Blue:6f3c80a9-14f8-481d-ab27-5426a00329e1',
    name: 'Blue Flare Leather Outfit',
    description:
      'A minimalist leather binding get-up that clings to the skin and creaks just the slightest bit when you move.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Blue_Flare Leather Outfit',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Leather_Rich_Green:cf7e5e2f-d791-4929-b1bc-a7ba35db1687',
    name: 'Green Flare Leather Outfit',
    description:
      'A minimalist leather binding get-up that clings to the skin and creaks just the slightest bit when you move.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Green_Flare Leather Outfit',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Circus:76e754a1-9559-4cb7-b11b-045f1b8aada1',
    name: 'Circus Ensemble',
    description: 'Designed for fun rather than function.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Circus_Ensemble',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Body_Circus_B:c03c2a3c-9e84-4042-8267-189ccb2af715',
    name: 'Mesmerising Circus Outfit',
    description:
      'A burst of fun and colour, this outfit completely avoids the general sensation of damp misery inherent to the standard circus clown.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Mesmerising_Circus Outfit',
    tags: ['Item'],
  },
  {
    id: 'UNI_DaisyDress:d943c31f-a8c9-49b0-8eba-f120b5075a67',
    name: 'Elegant Robe',
    description:
      'A draped robe made with lightweight fabric. Made for seduction rather than battle.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Elegant_Robe',
    tags: ['Item'],
  },
  {
    id: 'UNI_DaisyPlaysuit:bf4700bb-f1db-4586-8332-4e3e0c3e0fe0',
    name: 'Elegant Robe',
    description:
      'A draped robe made with lightweight fabric. Made for seduction rather than battle.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Elegant_Robe',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_ElegantRobe:2f7aadd5-65ea-4ab6-8c55-88ee584c72df',
    name: 'Elegant Robe',
    description:
      'A draped robe made with lightweight fabric. Made for seduction rather than battle.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Elegant_Robe',
    tags: ['Item'],
  },
  {
    id: 'ARM_Camp_Shoes_B:d8bc3625-f1d8-4ad3-8cfd-23b6b496cf36',
    name: 'Elfin Woodsoles',
    description:
      'These shoes make light, almost imperceptible clicking noises as they walk on stone, the wood nice and sculpted.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Elfin_Woodsoles',
    tags: ['Item'],
  },
  {
    id: 'ARM_Camp_Shoes_C:c6db137e-b61c-418f-9785-b0beb6e6de0f',
    name: "Tanner's Delight",
    description:
      'The tanners had an excellent time producing this leather - they actually got to use real animal flesh. Usually they work with much grosser stuff.',
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Tanner's_Delight",
    tags: ['Item'],
  },
  {
    id: 'ARM_Camp_Sandals_B:ba0fbaf7-324f-4f79-a124-66ba185faef9',
    name: 'Casual Sandals',
    description:
      'Strapped and lined in an either piscine or arboreal motif, these sandals are perfect for a warm morning stroll.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Casual_Sandals',
    tags: ['Item'],
  },
  {
    id: 'ARM_Camp_Sandals_C:aa1b4d17-528f-4934-b350-6b17f389b9dd',
    name: 'Gladiatorial Sandals',
    description: 'Worn by warriors upon the bloodiest sands.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Gladiatorial_Sandals',
    tags: ['Item'],
  },
  {
    id: 'ARM_Camp_Shoes_E:5272e57c-7ea0-4bda-aac5-449304f4f011',
    name: 'Delicate Shoes',
    description:
      'Patterned with twists of gold, lilac and sapphire, these delicate shoes are very reasonable for dancing, romancing, perhaps even prancing.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Delicate_Shoes',
    tags: ['Item'],
  },
  {
    id: 'ARM_Camp_Shoes_F:16a8aee6-568c-458e-b006-cb3344cac4fb',
    name: 'Pointed-Toe Shoes',
    description:
      'The height of modern Sword Coastian fashion, provided you like being targetted by muggers and thugs and other interesting friendly people.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Pointed-Toe_Shoes',
    tags: ['Item'],
  },
  {
    id: 'ARM_Camp_Sandals:1856414d-8a47-4e41-8aee-55991b18f494',
    name: 'Meshtoe Sandals',
    description:
      'A mesh of webbed material protects the toes from errant spiders.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Meshtoe_Sandals',
    tags: ['Item'],
  },
  {
    id: 'ARM_Camp_Sandals_Blue:2290f957-2e17-4ceb-870f-bd53f81f866c',
    name: 'Pristine Meshtoe Sandals',
    description:
      'A mesh of webbed material protects the toes from errant spiders - these seem brand new, and never worn.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Pristine_Meshtoe Sandals',
    tags: ['Item'],
  },
  {
    id: 'ARM_Camp_Sandals_A1:37ceb8fb-7d41-4373-b31b-6fcc602955b4',
    name: 'Slashstrip Sandals',
    description:
      'Slashes of leather gird the feet. A bright silvery button gleams.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Slashstrip_Sandals',
    tags: ['Item'],
  },
  {
    id: 'ARM_Camp_Sandals_A1_Black:03855492-12d7-42bf-866f-8aeb8eae176f',
    name: 'Worn Slashstrip Sandals',
    description:
      'Slashes of leather gird the feet. A bright silvery button gleams - this pair have seen better days.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Worn_Slashstrip Sandals',
    tags: ['Item'],
  },
  {
    id: 'ARM_Vanity_Deva_Shoes:db2f2945-debc-4b18-b4f5-6456a11ecddb',
    name: 'Celestial Sandals',
    description:
      'Not only do these sandals allow your feet to breathe on warm summer-scented evenings and leaf-crunchy autumn afternoons, but come the turning of clocks toward colder seasons, the sandal straps emit a faintly magical heat as cosy as any pair of wooly socks.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Celestial_Sandals',
    tags: ['Item'],
  },
  {
    id: 'CRA_HermitCrab_Ring:bcd0ad1a-19b3-4068-a3b0-b968c8d50bf7',
    name: 'Hermit Crab',
    description:
      "This creature's tiny appendages periodically creep out to poke at its surroundings.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Hermit_Crab',
    tags: ['Item'],
  },
  {
    id: 'ARM_TalismanOfJergal:e89d55a7-9a68-445a-bac9-b4a02654f0c7',
    name: 'The Amulet of Lost Voices',
    description: "The dead hold no secrets from Jergal's Scriveners of Doom.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/The_Amulet of Lost Voices',
    tags: ['Item'],
  },
  {
    id: 'CHA_OutpostJewelry:8b5fb90f-f957-4a1a-b8eb-2baff0c3b40b',
    name: 'Silver Pendant',
    description:
      'Grime covers this necklace, but you can vaguely discern delicate engravings of a moon and harp.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Silver_Pendant',
    tags: ['Item'],
  },
  {
    id: 'DEN_RaidingParty_GoblinCaptain_Gloves:d22e2679-aff0-4244-9ed2-7aac981b82cf',
    name: 'Gloves of Power',
    description:
      "Blessed by Priestess Gut, these gauntlets provide additional aid to any who bear the Absolute's mark upon their flesh.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Gloves_of Power',
    tags: ['Item'],
  },
  {
    id: 'DEN_Thiefling_Ring1:1abd032b-c138-45ee-b85e-62b5bbb6ea2d',
    name: 'Ring of Being Really Invisible',
    description:
      "This ring is missing its gem - or perhaps it's just <i>very</i> invisible.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Ring_of Being Really Invisible',
    tags: ['Item'],
  },
  {
    id: 'DEN_Thiefling_Ring2:4ca7ff5f-2c7b-407c-b754-b227d6e4fc31',
    name: 'Ring of Resistance to Ants',
    description:
      "A glob of tree sap studded with dead ants occupies the space where this ring's stone once sat.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Ring_of Resistance to Ants',
    tags: ['Item'],
  },
  {
    id: 'DEN_Thiefling_Ring3:1f2df119-5ca2-4860-ba0c-ecbb9c140e37',
    name: 'Ring of Infinite Wishes',
    description:
      'The exterior of this ring is roughly carved with nonsensical runes.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Ring_of Infinite Wishes',
    tags: ['Item'],
  },
  {
    id: 'DEN_Thiefling_Ring4:46e1228a-6682-4766-af76-bf5a42fe8611',
    name: 'Ring of the Lekinesus',
    description:
      'A small pebble swings from a length of fishing line tied to this copper ring.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Ring_of the Lekinesus',
    tags: ['Item'],
  },
  {
    id: 'DEN_Thiefling_Ring5:eb4e9410-3d33-4986-a5c2-8642ca5bbfc4',
    name: "'Magic' Ring",
    description:
      'The runes encircling this ring appear to have been scratched into the metal with a rock.',
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/'Magic'_Ring",
    tags: ['Item'],
  },
  {
    id: 'DEN_VoloOperation_ErsatzEye:000cfc9f-b973-48e7-a5c8-f2992a47a943',
    name: "Volo's Ersatz Eye",
    description:
      "While the ersatz eye is embedded in your eye socket, you can see through the tiny orb as though it were a normal eye. Can't be removed once inserted.<br><br><i>A hollow bead of white glass, carefully painted to resemble a realistic eye. Its tarnished brass fittings hum with a tinge of magic.</i>",
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Volo's_Ersatz Eye",
    tags: ['Item'],
  },
  {
    id: 'DEN_Arabella_Locket:be745c7b-f5a0-48cb-a7bd-3b7713f6e702',
    name: "Komira's Locket",
    description:
      "Worked carefully into the locket's metal back are the words, 'Never dark again.'",
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Komira's_Locket",
    tags: ['Item'],
  },
  {
    id: 'DEN_HarpyMeal_NestRing:eadad0c4-d4a5-45cb-b4c3-e16a9b3ebe0a',
    name: 'Ring of Colour Spray',
    description:
      'When the light hits it just so, the centre jewel shimmers with every colour of the rainbow.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Ring_of Colour Spray',
    tags: ['Item'],
  },
  {
    id: 'DEN_BearReward_Amulet:c0b04c1c-afb5-4f02-b832-e12043a2d2c4',
    name: 'Amulet of Silvanus',
    description:
      'This amulet, engraved with a small waterfall, imparts a feeling of calm serenity when worn.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Amulet_of Silvanus',
    tags: ['Item'],
  },
  {
    id: 'DEN_HellridersPride:db4d4560-dc72-4d64-b552-5caf442c0927',
    name: "Hellrider's Pride",
    description:
      'A waft of sulphur emanates from these proudly-kept gauntlets.',
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Hellrider's_Pride",
    tags: ['Item'],
  },
  {
    id: 'UNI_Druid_Helmet_Circlet:f4bef44e-57f1-47b5-ab2d-2457ff21c707',
    name: 'Key of the Ancients',
    description:
      'The branches of this circlet are half-fossilised, passed down through generations of druids. Fabricated during the founding of the grove, the wreath is forever linked to its lands, the tiny rubies connected to its stones and structures, bidding them to do their bidding.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Key_of the Ancients',
    tags: ['Item'],
  },
  {
    id: 'FOR_OwlbearCubs_Armor:9ab8b5fa-ba00-44d4-8c4a-50acd5fa62e3',
    name: "The Oak Father's Embrace",
    description:
      "Embroidered with a simple maxim - 'Nature is the True State of the World' - these hides radiate a faint divine power.",
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/The_Oak Father's Embrace",
    tags: ['Item'],
  },
  {
    id: 'FOR_OgresForHire_HeadbandOfIntellect:8f4876f1-44d9-4bb8-802e-907c6b0a0dba',
    name: 'Warped Headband of Intellect',
    description:
      'This particular circlet is covered in yellow slime and has pieces of half-digested mutton stuck behind the gems.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Warped_Headband of Intellect',
    tags: ['Item'],
  },
  {
    id: 'FOR_DeathOfATrueSoul_TrueSoul_Ring:f09b6c2f-e5f3-43df-82c7-9ed5862a7421',
    name: "Absolute's Smite",
    description:
      'This ring coaxes anyone branded by the Absolute. Their fingers veritably itch to slip it on.',
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Absolute's_Smite",
    tags: ['Item'],
  },
  {
    id: 'FOR_SpiderQueen_Robe:0db056b3-23d1-4873-883d-482b5d9337b5',
    name: "Poisoner's Robe",
    description:
      "Found in the Spider Queen's stomach, this robe emanates a sour smell and stings to the touch.",
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Poisoner's_Robe",
    tags: ['Item'],
  },
  {
    id: 'UNI_GOB_SeluneAmulet:e7bf966a-b611-4c36-89fe-0a3b28393d97',
    name: "Amulet of Selûne's Chosen",
    description:
      'The gems and pearls of this necklace have a brilliant shine to them, as if reflecting unseen moonlight.',
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Amulet_of Selûne's Chosen",
    tags: ['Item'],
  },
  {
    id: 'GOB_Priest_Shield:3d57c1a7-2dee-4a0f-aa7a-e7b6574b75e3',
    name: "Absolute's Warboard",
    description:
      "Blood is smeared across the shield's face, exalting wielders who bear the Absolute's mark.",
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Absolute's_Warboard",
    tags: ['Item'],
  },
  {
    id: 'GOB_Priest_Amulet:95b04c9c-8b58-44c5-bf1f-7d4d1027d57e',
    name: "Absolute's Talisman",
    description:
      'Stained by blood, and gifted to only the most faithful of True Souls to help preserve their lives.',
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Absolute's_Talisman",
    tags: ['Item'],
  },
  {
    id: 'GOB_DrowCommander_Amulet:338848e7-b2c6-4f97-879b-cb3439b4f959',
    name: 'Amulet of Misty Step',
    description:
      "This necklace allows the wearer to cast Misty Step.<br><br><i>Made of blue gems unique to a privately-owned mine in Menzoberranzan, this necklace was likely a token of esteem - or perhaps a desperate attempt to win its recipient's mercy.</i>",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Amulet_of Misty Step',
    tags: ['Item'],
  },
  {
    id: 'GOB_DrowCommander_Leather_Armor:c0c0534c-b7fc-4d0b-a335-b8f4c548852d',
    name: 'Spidersilk Armour',
    description:
      'Tracings of glossy black spider-web mark this drow-made armour. It is supple, but strong - and made to blend in with the dark caves and crevices of the Underdark.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Spidersilk_Armour',
    tags: ['Item'],
  },
  {
    id: 'GOB_Pens_BeastmasterAmulet:01d74aea-9e8a-4d03-9b55-e43458b61163',
    name: "Beastmaster's Chain",
    description:
      "The green jewel set into this necklace's pendant is carved to resemble a cat's slivered pupil.",
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Beastmaster's_Chain",
    tags: ['Item'],
  },
  {
    id: 'HAG_HagsRing:139a436b-120a-413e-a36e-c0e2c970439c',
    name: "Hag's Ring",
    description:
      "Grimy, discoloured, and revoltingly ugly. Auntie Ethel must have made it herself. Surprisingly, you feel no disgust. Instead it fills you with a longing, as if it's calling out for its like.",
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Hag's_Ring",
    tags: ['Item'],
  },
  {
    id: 'HAG_EyeballNecklace:3af0e44d-309a-4a42-818a-288af77a7350',
    name: 'The Ever-Seeing Eye',
    description:
      'A pale green eye, pierced by the twisting branches of a dead tree - the result of a foolhardy woman begging Auntie for a favour.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/The_Ever-Seeing Eye',
    tags: ['Item'],
  },
  {
    id: 'ARM_HAG_Phylactery:6d02f3e8-9c0e-49ce-993e-035e433d02b2',
    name: 'Tarnished Charm',
    description:
      'A menacing cackle emanates from this twisted charm. It whispers to bite, to maim, to kill...',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Tarnished_Charm',
    tags: ['Item'],
  },
  {
    id: 'ACT1_HAG_HagMask:73690248-deea-4713-84d6-c1c8fb045869',
    name: 'Whispering Mask',
    description:
      'Soft, unintelligible whispers seep from the dark wood, ringing in your ears and resounding in your skull.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Whispering_Mask',
    tags: ['Item'],
  },
  {
    id: 'HAG_SwampedHero_OldFancyHelmet:910ed403-38b3-4128-b07b-0de5d14da8f8',
    name: 'Reinforced Helmet',
    description: 'Forged from an unfamiliar alloy. Uncommonly rugged.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Reinforced_Helmet',
    tags: ['Item'],
  },
  {
    id: 'PLA_SmugglerRing:1b47637d-fdea-431f-a828-7ff8d9b4341e',
    name: "Smuggler's Ring",
    description: 'A subtle accessory prized by purveyors of the covert arts.',
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Smuggler's_Ring",
    tags: ['Item'],
  },
  {
    id: 'PLA_ZhentCave_Gloves:69271c04-ab3d-4efc-ab3c-4ca6c5ec7db3',
    name: 'Gloves of Hail of Thorns',
    description:
      'Grants wearer ability to cast Hail of Thorns.<br><br><i>Whoever previously owned these gloves marked each with a series of thirty superficial scrapes, six per finger. What they indicate is unclear.</i> ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Gloves_of Hail of Thorns',
    tags: ['Item'],
  },
  {
    id: 'FOR_NightWalkers:ac9145d1-31d0-4aa3-8755-62cc85dad22b',
    name: 'Disintegrating Night Walkers',
    description:
      'Darker than a starless night, Night Walkers are made for secrecy in the honour of Shar.<br>This particular pair was found deep in the ruins of an Underdark fortress. Though the leather is old and the magic is fading, the boots were recently cleaned and oiled with care.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Disintegrating_Night Walkers',
    tags: ['Item'],
  },
  {
    id: 'UND_Myco_Alchemist_HealerGloves:f3ff7066-f407-41c7-b936-0aff066c08e4',
    name: "Herbalist's Gloves",
    description:
      'The leather smells faintly of herbs, as if washed in a herbal bath.',
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Herbalist's_Gloves",
    tags: ['Item'],
  },
  {
    id: 'UND_ShadowOfMenzoberranzan:d46206c9-fb4f-44a4-a4f4-f70f8cd2a64c',
    name: 'Shadow of Menzoberranzan',
    description:
      'You sense the shadows that envelop this drowcraft cowl, eagerly waiting to envelop you and shield you from view.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Shadow_of Menzoberranzan',
    tags: ['Item'],
  },
  {
    id: 'UNI_UND_RingOfMindShielding:c8f05ff8-58f9-49f9-8ea7-abda1fea27d6',
    name: 'Ring of Mind-Shielding',
    description:
      'This ring is forged from a smooth, alien metal, capped with eyes of emerald that watch the world unblinking.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Ring_of Mind-Shielding',
    tags: ['Item'],
  },
  {
    id: 'UND_MushroomHunger_RingOfExploration:046598e3-8cb4-497c-bfd2-866ff88b50db',
    name: "Explorer's Ring",
    description:
      'A radiant and remarkably preserved ring, forged from arandur metal.',
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Explorer's_Ring",
    tags: ['Item'],
  },
  {
    id: 'UND_FairyRing_AntiCharmHelmet:a47c13a1-1a8e-4b3b-9cd9-53cf9c7058f0',
    name: 'Helmet of Autonomy',
    description:
      "The metal bolted to the helmet's forehead is engraved with a faded script. Though the words have become unintelligible, their magic remains.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Helmet_of Autonomy',
    tags: ['Item'],
  },
  {
    id: 'UND_SocietyOfBrilliance_MagicMissileNecklace:4a9f0479-954f-486c-9534-d7d72c11f919',
    name: 'Psychic Spark',
    description:
      'Every gem hanging from this necklace is warm to the touch, as if waiting to ignite.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Psychic_Spark',
    tags: ['Item'],
  },
  {
    id: 'UND_SocietyOfBrilliance_DarkvisionRing:e8b6eb1d-c4f2-4b46-979c-ad3b9469030e',
    name: "Sunwalker's Gift",
    description:
      "The ring's arcane jewel parts all but the darkest of shadows.",
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Sunwalker's_Gift",
    tags: ['Item'],
  },
  {
    id: 'UND_SocietyOfBrilliance_PullingRing:a6fe2fbc-b0f8-4c35-a3ab-d5deb6aa2978',
    name: 'Ring of Salving',
    description:
      'A hymn to Eilistraee is inscribed along the inside of this ring, which is surprisingly heavy when worn.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Ring_of Salving',
    tags: ['Item'],
  },
  {
    id: 'UND_Minotaur_BeltAmulet:b96d16dc-da98-4108-9a0e-5e55720dbf5c',
    name: 'Amulet of the Unworthy',
    description:
      'Once part of the Girdle of Blades, this buckle was torn off and fashioned into an amulet that can be worn by creatures of all sizes.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Amulet_of the Unworthy',
    tags: ['Item'],
  },
  {
    id: 'UND_Tower_RingArcana:4b6d7c53-43b5-4c17-8139-732ca0fc2972',
    name: "Mage's Friend",
    description:
      'Though carefully stowed away in a bedside chest, this ring is covered in dust and cobwebs.',
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Mage's_Friend",
    tags: ['Item'],
  },
  {
    id: 'UND_Tower_RingLight:70ad7889-e1e2-4c2f-980f-28eaa02c2022',
    name: 'Guiding Light',
    description:
      "Used by the previous owner to access both the Underdark's darkest corners and her own basement, this ring seems to reflect light where there should be none.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Guiding_Light',
    tags: ['Item'],
  },
  {
    id: 'UND_Tower_AmuletDetectThoughts:cfbda235-8cb7-4ee7-bd94-b9a2249ed82e',
    name: 'Uncovered Mysteries',
    description:
      "Beneath the layers of dust covering this necklace, its inlaid gems still give off a blue sparkle - the colour of Mystra's clergy.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Uncovered_Mysteries',
    tags: ['Item'],
  },
  {
    id: 'UND_DeadInWater_CallarduranTrinket:f2b2327e-0aae-4389-87fb-cc999f7121ed',
    name: 'Fetish of Callarduran Smoothhands',
    description:
      'The smooth, six-pointed star on this ring is beset with small Underdark gemstones, as befits a talisman of the god of mining and patron of deep gnomes.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Fetish_of Callarduran Smoothhands',
    tags: ['Item'],
  },
  {
    id: 'UND_DrowDisguiseCowl:85f6aec3-a6df-458c-8ef4-b3fa58d85a56',
    name: 'Frayed Drow Hood',
    description:
      'A supple leather cowl. Its spider web embroidery is stained, and pieces of leather and thread are slowly disintegrating.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Frayed_Drow Hood',
    tags: ['Item'],
  },
  {
    id: 'UND_MyconidAmulet_Good:5556b0c1-5b0a-47f9-8bc6-91c8f293f83e',
    name: "Envoy's Amulet",
    description:
      "A fleshy amulet shaped by Sovereign Spaw's own hand. Wherever the bearer goes, so does the myconid circle.",
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Envoy's_Amulet",
    tags: ['Item'],
  },
  {
    id: 'UND_MyconidAmulet_Evil:f6963e1e-b95a-496d-9d57-d4ad79a4394c',
    name: "Champion's Chain",
    description:
      "A plump mass torn from Sovereign Glut's own flesh. A marker of the colony's esteem - or perhaps its property.",
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Champion's_Chain",
    tags: ['Item'],
  },
  {
    id: 'UND_MonkAmulet_Amulet:086ae8fd-c44e-43a7-b8be-777b551a06d6',
    name: 'Sentient Amulet',
    description:
      'Sun-graced warmth radiates from both the pendant and its chain. Somehow, even a brief glance of it brings a smile to your face.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Sentient_Amulet',
    tags: ['Item'],
  },
  {
    id: 'UND_Justiciar_Mask_Magic:58968403-4dd6-4611-a7a2-a293ae7cf0b0',
    name: 'Dark Justiciar Mask',
    description:
      "Worn by Shar's most loyal zealots, the mere sight of it strikes fear in the heart of even the bravest of souls.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Dark_Justiciar Mask',
    tags: ['Item'],
  },
  {
    id: 'UND_Justiciar_Helmet_Magic:27f1c6cd-c716-440d-ba7c-795c431ce5a3',
    name: 'Dark Justiciar Helm',
    description:
      "Stamped with Shar's own sigil, this helm was worn by the Nightsinger's own crusaders. The darkness within seems deeper than night, somehow.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Dark_Justiciar Helm',
    tags: ['Item'],
  },
  {
    id: 'UND_Justiciar_Chainshirt_Magic:14c4c9a8-9d2b-4b15-a6b6-a24852092c5a',
    name: 'Dark Justiciar Mail',
    description:
      "Though well-preserved, the armour's gleam is somewhat muted - as if half-shadowed, even in brightest day.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Dark_Justiciar Mail',
    tags: ['Item'],
  },
  {
    id: 'UND_KC_RingOfAbsolute:c7a58f48-f24f-4139-b0f0-8b12e1bf074e',
    name: 'Ring of Absolute Force',
    description:
      "Darkness seems to blossom from this ring, heightened by the menacing glare of the Absolute's symbol, though for the Branded this symbol holds the promise of power.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Ring_of Absolute Force',
    tags: ['Item'],
  },
  {
    id: 'UNI_MassHealRing:4aef9bb0-38a8-428e-8b87-6e462d612dd6',
    name: 'The Whispering Promise',
    description:
      'A soft, soothing voice floats from this ring, reciting a prayer over and over.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/The_Whispering Promise',
    tags: ['Item'],
  },
  {
    id: 'UNI_MartyrAmulet:c1cb7388-bd2f-4cc7-8305-7d7a0651874f',
    name: 'Amulet of Elemental Torment',
    description: 'Each jewel gleams with the energy of the natural elements.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Amulet_of Elemental Torment',
    tags: ['Item'],
  },
  {
    id: 'MAG_LowHP_CounterOnDamage_ChainShirt:81cdbea7-3cd5-44a5-baa7-852c930bdf7b',
    name: 'Robust Chain Shirt',
    description:
      'A multitude of names are embroidered on the inside collar - the lives of those this shirt has saved. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Robust_Chain Shirt',
    tags: ['Item'],
  },
  {
    id: 'MAG_LowHP_TemporaryHP_Shield:3374ad91-ddcf-430a-bddd-f48e8699ade9',
    name: 'Glowing Shield',
    description:
      'Soft, loving whispers emanate from this shield. Though barely audible and spoken in some long-forgotten language, they make you feel safe.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Glowing_Shield',
    tags: ['Item'],
  },
  {
    id: 'MAG_LowHP_ResistanceFire_Gloves:9c888908-04d0-4047-bf9d-02d3cecb08d6',
    name: 'Gloves of Fire Resistance',
    description:
      "These gloves are cool to the touch, chilling the tips of the wearer's fingers.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Gloves_of Fire Resistance',
    tags: ['Item'],
  },
  {
    id: 'MAG_LowHP_IgnoreAttackOfOpportunity_Amulet:5bf24229-7a46-46d7-94d7-766ea5591ec2',
    name: 'Moondrop Pendant ',
    description:
      "The back bears an inscription under a delicate crescent moon. 'You're a novice no more, Robin. Only right you should carry a little of our Lady's light with you.'",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Moondrop_Pendant ',
    tags: ['Item'],
  },
  {
    id: 'MAG_LowHP_BonusAction_Helmet:d98595e1-0722-4200-ab73-5e88269519fa',
    name: 'Helmet of Grit',
    description:
      'At the barest touch, you feel a surge of exuberance and stamina - like you could take on anyone and anything.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Helmet_of Grit',
    tags: ['Item'],
  },
  {
    id: 'MAG_LowHP_IncreasedSpellDamage_Amulet:49a3a5ac-4e04-497a-a721-1decf89ea077',
    name: "Ilmater's Aid",
    description:
      "Named after the god of martyrs, this amulet seems to shine in the presence of the wearer's blood.",
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Ilmater's_Aid",
    tags: ['Item'],
  },
  {
    id: 'MAG_Fire_IncreasedDamage_Ring:146e88ea-85ca-469b-9ce0-60be52613f2d',
    name: 'Ring of Fire',
    description:
      'A burning heat radiates from this ring, warming the wearer from head to toe.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Ring_of Fire',
    tags: ['Item'],
  },
  {
    id: 'MAG_Fire_ApplyBurningOnFireDamage_Gloves:88225372-376e-42fb-a028-65ac3d0dd864',
    name: 'Gloves of Flint and Steel',
    description:
      'Carixim, a fiendish smith of hell who gorged himself fat on souls by the thousand, did not consider himself to have enemies, though many hated him dearly.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Gloves_of Flint and Steel',
    tags: ['Item'],
  },
  {
    id: 'MAG_Fire_BonusActionOnFireSpell_Circlet:d5e4dce0-4385-4fae-a601-22a11fe0b2af',
    name: 'Pyroquickness Hat',
    description:
      'Merely holding the circlet makes your skin flush, filling you with determination and righteous fury.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Pyroquickness_Hat',
    tags: ['Item'],
  },
  {
    id: 'MAG_Healer_DisengageOnHeal_ChainShirt:e6e74ef9-1916-4c6b-a7bb-98fc83e71b62',
    name: 'Slippery Chain Shirt',
    description:
      "Scored with slime and blood, it seems this chain mail shirt couldn't save its previous owner. Although it may help the next.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Slippery_Chain Shirt',
    tags: ['Item'],
  },
  {
    id: 'MAG_Healer_HealSelf_Helmet:e305c00e-a231-41e4-86de-cbb320bafbc8',
    name: "Wapira's Crown",
    description:
      'Legends say a giant elk and a druid once formed a powerful friendship. When the elk laid down his life for the druid, she crafted this helmet in honour of her beloved friend, so his beauty and compassion would live on forever.',
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Wapira's_Crown",
    tags: ['Item'],
  },
  {
    id: 'MAG_Healer_HealSelfPoisonWeapon_Amulet:21abc023-343a-4693-b63f-3ba07a231864',
    name: "Broodmother's Revenge",
    description: "Each of this amulet's jewels shines like a viper's eyes.",
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Broodmother's_Revenge",
    tags: ['Item'],
  },
  {
    id: 'MAG_Shove_ACboost_Ring:c714fc94-eeaf-4622-9375-545261867514',
    name: 'Bracing Band',
    description:
      'A common ring, simple and unadorned. Though there is a certain heft to it...',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Bracing_Band',
    tags: ['Item'],
  },
  {
    id: 'MAG_Rage_TempHPOnExit_Gloves:b51863cc-f8de-4945-a062-6bda2a35cdbc',
    name: "Reason's Grasp",
    description:
      'The snug fit of these gloves resist a balled fist - as if favouring the open hand of peace.',
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Reason's_Grasp",
    tags: ['Item'],
  },
  {
    id: 'MAG_Mobility_MomentumOnCombatStart_Helmet:94cc605d-e407-408d-acb6-9e2e31dfb283',
    name: 'Haste Helm',
    description:
      'The helm throbs when violence is near, filling the wearer with a compulsion to act.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Haste_Helm',
    tags: ['Item'],
  },
  {
    id: 'MAG_Mobility_SprintForMomentum_ChainShirt:88107048-2ec3-4e48-9670-4d4dd2ca0ff9',
    name: 'Chain of Liberation',
    description:
      'The linked rings crackle with energy just waiting to be released.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Chain_of Liberation',
    tags: ['Item'],
  },
  {
    id: 'MAG_Mobility_LowHP_Momentum_Ring:699135e9-8932-4bde-8a17-8be5e11d873f',
    name: 'Spurred Band',
    description:
      "Tiny barbs prick the wearer when they're injured, as if urging flight from danger.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Spurred_Band',
    tags: ['Item'],
  },
  {
    id: 'MAG_Mobility_JumpOnDash_Gloves:df7093d7-efdd-4153-bfb6-b2a6350fb3c2',
    name: 'Fleetfingers',
    description:
      'Plain leather with a faint but unmistakable buzz - as if eager to put idle hands to work.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Fleetfingers',
    tags: ['Item'],
  },
  {
    id: 'MAG_Violence_LowHP_Violence_Clothes:5fc2fcce-810d-47d2-824c-f6acf7b81a22',
    name: 'Bloodguzzler Garb',
    description:
      "No sooner does blood speck the armour than it's absorbed, as if sustaining something within.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Bloodguzzler_Garb',
    tags: ['Item'],
  },
  {
    id: 'MAG_Violence_ViolenceOnDamaged_Helmet:b2ac96aa-5f04-49fb-800c-ab51a2bdb3c6',
    name: 'Cap of Wrath',
    description:
      'With every blow the skullcap seems to compress, narrowing the vision of the wearer.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Cap_of Wrath',
    tags: ['Item'],
  },
  {
    id: 'MAG_Violence_ViolenceOnDash_Boots:edb7385a-e4d4-4fb7-ad9f-a9910e4b9e97',
    name: 'Linebreaker Boots',
    description:
      "Lightweight fur and leather, designed to speed the wearer's charge into battle.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Linebreaker_Boots',
    tags: ['Item'],
  },
  {
    id: 'MAG_MeleeDebuff_AttackDebuff1_OnDamage_ScaleMail:5427c806-5565-421f-a00f-a8282a9f504f',
    name: 'Adamantine Scale Mail',
    description:
      'The adamantine scales hug your body like a second skin - a heavy, near-impregnable skin.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Adamantine_Scale Mail',
    tags: ['Item'],
  },
  {
    id: 'MAG_MeleeDebuff_AttackDebuff1_OnDamage_Shield:96907713-b560-4daf-ab32-3c1aec3f3890',
    name: 'Adamantine Shield',
    description:
      'The dull shine of the adamantine promises this shield could take a thousand beatings - and still look as good as new.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Adamantine_Shield',
    tags: ['Item'],
  },
  {
    id: 'MAG_MeleeDebuff_AttackDebuff2_OnDamage_SplintMail:ea3cf349-19ab-4104-9253-8e182bdbf538',
    name: 'Adamantine Splint Armour',
    description:
      'The adamantine plates lock and slide together perfectly - offering protection against even the deadliest of blades.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Adamantine_Splint Armour',
    tags: ['Item'],
  },
  {
    id: 'MAG_MeleeDebuff_AttackDebuff1_OnDamage_Helmet:6b1c4d55-e0d1-4b58-a26d-57d807bca488',
    name: 'Grymskull Helm',
    description:
      "Once home to an inscrutable machine intelligence, Grym's skull now serves as a simple helm.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Grymskull_Helm',
    tags: ['Item'],
  },
  {
    id: 'MAG_ChargedLightning_Electrocute_Armor:1fda52bd-6983-49a3-ba52-6756327a5182',
    name: 'The Jolty Vest',
    description:
      'Yrre the Sparkstruck got their nickname for both their obsession with lightning and the inventions they created, which had the habit of electrocuting both Yrre and any poor observers that got too close.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/The_Jolty Vest',
    tags: ['Item'],
  },
  {
    id: 'MAG_ChargedLightning_TempHP_Helmet:3ccc28a3-faa5-4664-a46a-39300b2d3803',
    name: 'The Lifebringer',
    description:
      "'Lightning is like magic,' Yrre the Sparkstruck once said. 'And what is magic but life itself?'",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/The_Lifebringer',
    tags: ['Item'],
  },
  {
    id: 'MAG_ChargedLightning_StaticDischarge_Shield:93c2143c-1c9f-493e-9fee-2310c7bee672',
    name: 'The Real Sparky Sparkswall',
    description:
      "'Is there anything as beautiful as lightning striking all around you?' Yrre the Sparkstruck said, letting lightning strike all around them.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/The_Real Sparky Sparkswall',
    tags: ['Item'],
  },
  {
    id: 'MAG_ChargedLightning_LightningBlast_Amulet:c2bbb262-34ee-4483-a0f8-f72cb7794ff1',
    name: 'The Blast Pendant',
    description:
      'Though they only worked together for a short time, it is hard to overstate the influence Lenore the cleric of Mystra had on Yrre the Sparkstruck, who often likened harnessing lightning to manipulating the Weave.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/The_Blast Pendant',
    tags: ['Item'],
  },
  {
    id: 'MAG_ChargedLightning_Resistance_Ring:a72120e6-aa1c-4a2b-89ae-a0469fb5b088',
    name: 'The Sparkswall',
    description:
      'When the inventor Yrre met the cleric Lenore, sparks flew. Apart, they were in a rut, but together, they inspired each other to push the boundaries of innovation and invention. This ring is just one of their many scientific triumphs.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/The_Sparkswall',
    tags: ['Item'],
  },
  {
    id: 'MAG_ChargedLightning_BonusAC_Robe:f28c3264-8cdb-46c1-800f-a47a01e49efc',
    name: 'The Protecty Sparkswall',
    description:
      "Yrre the Sparkstruck was raised in the Underdark, so they weren't surprised that power begets envy, and envy begets violence. They were prepared.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/The_Protecty Sparkswall',
    tags: ['Item'],
  },
  {
    id: 'MAG_Bard_RefreshBardicInspirationSlot_Shoes:a7ce200c-ab1a-4d49-bf7d-c6894b1e5b06',
    name: 'Boots of Brilliance',
    description:
      "Tiny bells are sewn into the boots' cuffs. They jingle subtly with every step.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Boots_of Brilliance',
    tags: ['Item'],
  },
  {
    id: 'MAG_Bard_TempHP_Armor:947dbbe3-19e3-4b96-ba5a-14750f0acc29',
    name: 'Blazer of Benevolence',
    description:
      "Even though the embroidered velvet won't help against a sharp blade, wearing it fills you with self-assuredness.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Blazer_of Benevolence',
    tags: ['Item'],
  },
  {
    id: 'MAG_Bard_HealingBardicInspiration_Hat:cfbd013c-f24d-4430-be13-d7bfafd48709',
    name: 'Cap of Curing',
    description: 'Putting on this hat is somehow enough to lift your spirits.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Cap_of Curing',
    tags: ['Item'],
  },
  {
    id: 'MAG_Paladin_LayOnHandsSupport_Gloves:110144ac-db1d-4db8-a907-92f642086d0d',
    name: 'Gloves of Heroism',
    description:
      'Suede covers the palms of these gloves - ensuring a soft, comforting touch for anyone in need of help.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Gloves_of Heroism',
    tags: ['Item'],
  },
  {
    id: 'MAG_Paladin_SmiteSpellsSupport_Helmet:0ae1e62c-b36a-4dbc-97fb-e0658b454974',
    name: 'Helmet of Smiting',
    description:
      "A set of runes has been expertly worked into the helmet's filigree. Almost imperceptible - but powerful nonetheless.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Helmet_of Smiting',
    tags: ['Item'],
  },
  {
    id: 'ARM_Camp_Body_Astarion:b7392453-6569-4c24-9a1b-cbaea7cebac8',
    name: "Astarion's Eccentric Clothes",
    description:
      "Clearly no stranger to a needle and thread, Astarion has embroidered the words of a poem on his shirt. It reads, 'Lamentable is the autumn picker content with plums.'",
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Astarion's_Eccentric Clothes",
    tags: ['Item'],
  },
  {
    id: 'ARM_Camp_Body_Gale:c56bbf29-2315-415e-a488-fada851828ea',
    name: "Gale's Austere Clothes",
    description:
      'Somehow Gale has managed to make his clothes smell like a library - perhaps through thaumaturgy, or through a passion to books most people reserve for sexual partners.',
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Gale's_Austere Clothes",
    tags: ['Item'],
  },
  {
    id: 'ARM_Camp_Body_Halsin:dc74db6c-14b2-44fa-8415-0dd1194e90e2',
    name: "Halsin's Grove Garments",
    description:
      'Feeling the fabric, the strangest feeling occurs: your thumbs brush sun-dappled leaves, skim the water of a creek, tangle in the fur of some panting animal, heat and breath.',
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Halsin's_Grove Garments",
    tags: ['Item'],
  },
  {
    id: 'ARM_Camp_Body_Jaheira:0d0d9c0f-e9aa-4ba4-a0a9-1a0b7b7069ca',
    name: "Jaheira's Respectable Clothes",
    description:
      "Though humble in appearance, these clothes bear little hints at Jaheira's fashionability. Minimalism offset by the subtle hues shining brighter at night and softening in sunbeams.",
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Jaheira's_Respectable Clothes",
    tags: ['Item'],
  },
  {
    id: 'ARM_Camp_Body_Karlach:5c79e518-2c59-41c5-84a7-d43a58e76d09',
    name: "Karlach's Infernal Trousers",
    description:
      'Torn and hell-scented, these trousers have seen a good deal of action - though not perhaps the sort Karlach might prefer.',
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Karlach's_Infernal Trousers",
    tags: ['Item'],
  },
  {
    id: 'ARM_Camp_Body_Laezel:54de4a07-c57c-421e-912c-7e8bd93ca0c4',
    name: "Lae'zel's Clothes",
    description:
      'As exciting as a trade deposition and as functional as a brick.',
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Lae'zel's_Clothes",
    tags: ['Item'],
  },
  {
    id: 'ARM_Camp_Body_Minsc:42ff9d36-849d-4777-968c-8cf9ca7d8027',
    name: "Minsc's Fantastical Relaxation Garb",
    description:
      'To the metaphorical eye, an absolute fantasia of an outfit, declaiming Minsc as a style icon without equal. To the literal eye, this is a belt-buckle shirt/pants combo.',
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Minsc's_Fantastical Relaxation Garb",
    tags: ['Item'],
  },
  {
    id: 'ARM_Camp_Body_Minthara:29a31736-6f9d-46ef-880d-ac3157187202',
    name: "Minthara's At-Ease Clothes",
    description:
      "While there is little of the spidery Goddess Lolth's influence in this outfit, there is something of spiney inflexible culture of the drow in it.",
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Minthara's_At-Ease Clothes",
    tags: ['Item'],
  },
  {
    id: 'ARM_Camp_Body_Shadowheart:7062410b-439c-4f2f-bc48-1c16ab1ace20',
    name: "Shadowheart's Clothes",
    description:
      'A little bar of standard-issue cloister soap is tucked into this outfit. It smells like lime and religious fervour.',
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Shadowheart's_Clothes",
    tags: ['Item'],
  },
  {
    id: 'ARM_Camp_Body_Wyll:bd2ac836-5584-41e5-b4ff-01782c0dec6d',
    name: "Wyll's Earthy Garb",
    description:
      'In his good-humoured performativity, Wyll could not resist a puff of perfume on these clothes. Possibly <i>eau du Frontiers</i>.',
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Wyll's_Earthy Garb",
    tags: ['Item'],
  },
  {
    id: 'WPN_Battleaxe:a086b825-8f17-4f0e-855b-178f8cdc515a',
    name: 'Battleaxe',
    description:
      'Tiny scratches mar the metal - a testament of someone sharpening this axe over and over.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Battleaxe',
    tags: ['Item'],
  },
  {
    id: 'WPN_Club:d9c87013-1f41-4c17-b71d-f353ec0d64e8',
    name: 'Club',
    description:
      'A long, deep crack runs through the side of the wood, filled with crusted blood.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Club',
    tags: ['Item'],
  },
  {
    id: 'WPN_Dagger:569b0f3d-abcd-4b01-aaf0-979091288163',
    name: 'Dagger',
    description: "A rogue's favourite toy.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Dagger',
    tags: ['Item'],
  },
  {
    id: 'WPN_Dart:fb08eef6-f6a0-454e-ab14-c1470f3ba18d',
    name: 'Dart',
    description: 'A well-used dart, its stained feathers slightly bent.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Dart',
    tags: ['Item'],
  },
  {
    id: 'WPN_Flail:9eadef92-5dd0-408e-9b55-1cf791cafe9d',
    name: 'Flail',
    description:
      'The head of this flail is shiny and new, its wooden shaft still coarse and unmarked by blood.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Flail',
    tags: ['Item'],
  },
  {
    id: 'WPN_Glaive:99f3b2d9-e03d-4cd5-9a67-5435a95682da',
    name: 'Glaive',
    description:
      'Simple but sharp. The shaft of this glaive is worn smooth with use.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Glaive',
    tags: ['Item'],
  },
  {
    id: 'WPN_Greataxe:d5712e24-ce9e-42ce-8fad-6e049b62c28c',
    name: 'Greataxe',
    description:
      "The rectangular engravings on this axe's wooden handle have been nearly scratched away by armoured hands.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Greataxe',
    tags: ['Item'],
  },
  {
    id: 'WPN_Greatclub:19ce6720-03b6-4d22-bf35-4963b510d1da',
    name: 'Greatclub',
    description:
      'Traces of dried viscera ring many of the iron spikes embedded in this oak club.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Greatclub',
    tags: ['Item'],
  },
  {
    id: 'WPN_Greatsword:ecfb9f69-5bc3-402e-acd8-c91d57e28403',
    name: 'Greatsword',
    description:
      "This sword's guard, held haphazardly in place by thin rope, wobbles slightly when swung.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Greatsword',
    tags: ['Item'],
  },
  {
    id: 'WPN_Halberd:f928a70d-5b23-4605-9cae-5342f9ed206e',
    name: 'Halberd',
    description:
      'Part of the spike affixed to the top of this halberd has snapped off, leaving a cruel barb.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Halberd',
    tags: ['Item'],
  },
  {
    id: 'WPN_Handaxe:46b64a36-8446-45bd-98e8-ee81e3136baa',
    name: 'Handaxe',
    description:
      'A straightforward hatchet, dulled slightly from chopping wood - or bones.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Handaxe',
    tags: ['Item'],
  },
  {
    id: 'WPN_HeavyCrossbow:04622e3d-5b3f-4f2c-a0db-513a717d911f',
    name: 'Heavy Crossbow',
    description: 'A standard-issue crossbow, used by many guardsmen.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Heavy_Crossbow',
    tags: ['Item'],
  },
  {
    id: 'WPN_HeavyCrossbow_B:6af59cba-cc38-4511-9c3b-75caac4b96b5',
    name: 'Heavy Crossbow +1',
    description:
      'Despite the heaviness of this crossbow, the latch pulls back with an effortless ease.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Heavy_Crossbow +1',
    tags: ['Item'],
  },
  {
    id: 'WPN_Javelin:0a7adc8d-b561-4f81-a8f2-ec07b5d54955',
    name: 'Javelin',
    description: 'A rusted fishing harpoon, repurposed as a weapon.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Javelin',
    tags: ['Item'],
  },
  {
    id: 'WPN_LightCrossbow:43b7fbf5-7f6e-4e9e-bce7-c679eea44593',
    name: 'Light Crossbow',
    description:
      "This crossbow's cast iron latch is mottled with blooms of rust.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Light_Crossbow',
    tags: ['Item'],
  },
  {
    id: 'WPN_LightHammer:494f21ac-5a1b-4e91-bd30-551b79532516',
    name: 'Light Hammer',
    description:
      "A blacksmith's pride and joy, repurposed for combat. Its steel head is tarnished from years in the forge.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Light_Hammer',
    tags: ['Item'],
  },
  {
    id: 'WPN_Longbow_B:049173ec-636a-487e-a9ed-bfafeadf6bb7',
    name: 'Longbow +1',
    description: 'Carved enchantments span the length of this supple bow.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Longbow_+1',
    tags: ['Item'],
  },
  {
    id: 'WPN_Longsword:1865323f-b428-4791-a0a9-578841e57463',
    name: 'Longsword',
    description:
      'A common sword, passed between hands both fresh and battle-scarred.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Longsword',
    tags: ['Item'],
  },
  {
    id: 'WPN_Mace:3186796d-3ab3-4d49-bfc2-cba1aff0cf5a',
    name: 'Mace',
    description:
      'A simple but effective mace, cast en masse by human blacksmiths.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Mace',
    tags: ['Item'],
  },
  {
    id: 'WPN_Maul:5487ceb4-b009-46ae-8ed6-cd3baaf0a18d',
    name: 'Maul',
    description:
      'Hammers like this are used in many dwarven competitions, testing who can throw them the farthest while enduring the most ale.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Maul',
    tags: ['Item'],
  },
  {
    id: 'WPN_Morningstar:26a9fba6-1a60-4691-84ea-da7ffcb304e0',
    name: 'Morningstar',
    description: "More of this morningstar's iron spikes are bent than not.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Morningstar',
    tags: ['Item'],
  },
  {
    id: 'WPN_Pike:baa5b139-42ad-40fd-b6c3-6b52b092c48e',
    name: 'Pike',
    description:
      "This pike's broad steel head has been repeatedly bent and hammered back into its original shape.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Pike',
    tags: ['Item'],
  },
  {
    id: 'WPN_Quarterstaff:96e2abaf-78ff-4dcb-a6a3-a5f0c348bd9f',
    name: 'Quarterstaff',
    description:
      'Someone has carved twenty-seven small lines into the hard wood.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Quarterstaff',
    tags: ['Item'],
  },
  {
    id: 'WPN_Rapier:7061f489-4b13-4982-aa09-cf0ad961e75f',
    name: 'Rapier',
    description:
      'A slender but deadly sword, favoured by Waterdhavian nobility.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Rapier',
    tags: ['Item'],
  },
  {
    id: 'WPN_Scimitar:868217db-9dcb-414c-bb88-e321ab3e0349',
    name: 'Scimitar',
    description:
      'This human-made scimitar falls far short of replicating the quality of the drow style it clearly imitates.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Scimitar',
    tags: ['Item'],
  },
  {
    id: 'WPN_Shortbow:c5403c1d-f372-43e1-927a-9189e9e3545d',
    name: 'Shortbow',
    description:
      'This small, agile bow bears a beautiful elven string, easy to draw but tough as steel.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Shortbow',
    tags: ['Item'],
  },
  {
    id: 'WPN_Sickle:50d677ed-3a0e-40e9-8291-ee6823af5672',
    name: 'Sickle',
    description:
      'A farming tool with a wicked edge, spilling blood and grain with equal ease.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Sickle',
    tags: ['Item'],
  },
  {
    id: 'WPN_Sling:d31af642-ae35-4f22-b7a6-100f3048be33',
    name: 'Sling',
    description:
      'Big, neat stitches line the supple leather pouch of this sling',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Sling',
    tags: ['Item'],
  },
  {
    id: 'WPN_Spear:9f0f1c0e-012d-44e1-9b29-86c64d2bf675',
    name: 'Spear',
    description:
      'An aged spear, its steel head nicked by the blows of a dozen battles. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Spear',
    tags: ['Item'],
  },
  {
    id: 'WPN_Trident:d3807461-7c32-44ae-9aba-49ef4d3bf35e',
    name: 'Trident',
    description:
      "It is said tridents were brought to the surface when Umberlee threw a Triton prince who scorned her onto Faerûn's shores.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Trident',
    tags: ['Item'],
  },
  {
    id: 'WPN_Warhammer:6b17998d-2e79-405d-8b1f-beb53658312f',
    name: 'Warhammer',
    description:
      "This hammer's noticeable lack of upkeep hardly matters, given its heft.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Warhammer',
    tags: ['Item'],
  },
  {
    id: 'WPN_WarPick:a088775a-8f75-42f2-aa74-76a3f80701fa',
    name: 'War Pick',
    description:
      'A pickaxe modified to pierce flesh and armour rather than stone.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/War_Pick',
    tags: ['Item'],
  },
  {
    id: 'WPN_Battleaxe_1:c17ee133-cbb5-418f-88be-5ef27991cf50',
    name: 'Battleaxe +1',
    description:
      "The intricate engravings on this axe's blade and handle make plain the skill of its smith.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Battleaxe_+1',
    tags: ['Item'],
  },
  {
    id: 'WPN_Club_1:b30dca22-22bc-496e-b3b6-dd5744b73869',
    name: 'Club +1',
    description:
      'A long, deep crack runs through the side of the wood, filled with crusted blood.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Club_+1',
    tags: ['Item'],
  },
  {
    id: 'WPN_Dagger_1:1eab180b-5bf9-48ea-aece-7ba20d1deb78',
    name: 'Dagger +1',
    description:
      "This dagger's handle is smooth and light, its jagged blade sharpened into a thin, cruel edge.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Dagger_+1',
    tags: ['Item'],
  },
  {
    id: 'WPN_Dart_1:5557cbf6-ce24-48de-beed-3be1a77e1c82',
    name: 'Dart +1',
    description:
      'A dart made of lightweight wood, its feathers carefully cut at a sharp angle.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Dart_+1',
    tags: ['Item'],
  },
  {
    id: 'WPN_Flail_1:9076abf1-1029-4be9-a7cf-428d2b6fdea5',
    name: 'Flail +1',
    description:
      'A browning piece of brain sticks stubbornly to one of the spikes.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Flail_+1',
    tags: ['Item'],
  },
  {
    id: 'WPN_Glaive_1:15d2830c-ac76-4b5b-969d-05197875b1c2',
    name: 'Glaive +1',
    description:
      'Fashioned by expert elven hands to be both deadly and beautiful.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Glaive_+1',
    tags: ['Item'],
  },
  {
    id: 'WPN_Greataxe_1:afbfaee7-e2cd-48e7-8c46-d2377c7320e3',
    name: 'Greataxe +1',
    description:
      'A small prayer decorates the hilt of this axe. It resonates in your head when you touch it.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Greataxe_+1',
    tags: ['Item'],
  },
  {
    id: 'WPN_Greatclub_1:d64e1a13-18a5-4cdc-ac02-977523435f8f',
    name: 'Greatclub +1',
    description:
      'Without the wrapped leather grip, the weight of the slab of iron at the end of this greatclub would send it flying with a single swing.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Greatclub_+1',
    tags: ['Item'],
  },
  {
    id: 'WPN_Greatsword_1:1a2a58b7-4bd5-44d5-b1fe-8cd7e5b53def',
    name: 'Greatsword +1',
    description:
      'The thick leather straps wrapped around the base of the blade creak under a solid grip.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Greatsword_+1',
    tags: ['Item'],
  },
  {
    id: 'WPN_Greatsword_Gith:d1082e88-b1e2-479d-913f-1413784d95a1',
    name: 'Githyanki Greatsword',
    description:
      "Though heavily decorated and inlaid with rubies, the blade's sharp edge suggests its use isn't merely ornamental.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Githyanki_Greatsword',
    tags: ['Item'],
  },
  {
    id: 'WPN_Halberd_1:d1019d9d-e5ae-4601-8a63-1b33421926e1',
    name: 'Halberd +1',
    description:
      "This halberd's spike is black with ash that cannot be washed away.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Halberd_+1',
    tags: ['Item'],
  },
  {
    id: 'WPN_Handaxe_1:7a05135d-b285-4186-8a32-a870f1684b60',
    name: 'Handaxe +1',
    description: "This axe's hooked blade is crafted to cleave flesh and bone.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Handaxe_+1',
    tags: ['Item'],
  },
  {
    id: 'WPN_HandCrossbow_1:d2f396c2-9b1b-4eea-bf21-2f25934f092d',
    name: 'Hand Crossbow +1',
    description:
      'A subtle magic runs through both strings of this crossbow, keeping the bows even once the lock is released.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Hand_Crossbow +1',
    tags: ['Item'],
  },
  {
    id: 'WPN_HeavyCrossbow_1:6af59cba-cc38-4511-9c3b-75caac4b96b5',
    name: 'Heavy Crossbow +1',
    description:
      'Despite the heaviness of this crossbow, the latch pulls back with an effortless ease.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Heavy_Crossbow +1',
    tags: ['Item'],
  },
  {
    id: 'WPN_HeavyCrossbow_Gith:b674ea52-2b6f-4977-b6d5-98810304a98b',
    name: 'Githyanki Crossbow',
    description:
      "This heavy crossbow is fashioned from a curious, tensile metal that doesn't seem to be native to Faerûn.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Githyanki_Crossbow',
    tags: ['Item'],
  },
  {
    id: 'WPN_Javelin_1:b908f109-b379-4a49-8f41-5b7f154d9b76',
    name: 'Javelin +1',
    description:
      'The worn leather strap at the end of this javelin loops around the wrist to let it be thrown with devastating force.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Javelin_+1',
    tags: ['Item'],
  },
  {
    id: 'WPN_LightCrossbow_1:509dd5c3-7c72-4335-9b23-19a14a884f2e',
    name: 'Light Crossbow +1',
    description:
      "Though this crossbow's stock is hollowed out, its heavy trigger mechanism keeps it well-balanced.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Light_Crossbow +1',
    tags: ['Item'],
  },
  {
    id: 'WPN_LightHammer_1:d0419aaf-9e20-4029-b8e9-9e1a62661b13',
    name: 'Light Hammer +1',
    description:
      'A skilful smith decorated the wooden handle with a fine golden filigree.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Light_Hammer +1',
    tags: ['Item'],
  },
  {
    id: 'WPN_Longbow_1:049173ec-636a-487e-a9ed-bfafeadf6bb7',
    name: 'Longbow +1',
    description: 'Carved enchantments span the length of this supple bow.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Longbow_+1',
    tags: ['Item'],
  },
  {
    id: 'WPN_Longsword_1:3fc2ba50-3070-4caa-abe8-3bf885969bde',
    name: 'Longsword +1',
    description:
      'A complex filigree wraps around the base of this blade - the runes on the side suggesting it is not merely decorative.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Longsword_+1',
    tags: ['Item'],
  },
  {
    id: 'WPN_Longsword_Gith:907a794b-b089-406b-880d-6f2df2bb3f13',
    name: 'Githyanki Longsword',
    description:
      'Every tip and edge on this elaborate sword is sharpened to a deadly perfection.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Githyanki_Longsword',
    tags: ['Item'],
  },
  {
    id: 'WPN_Mace_1:5a948b12-ca43-4256-9821-0d151036dbd1',
    name: 'Mace +1',
    description:
      'The leather handle of this mace smells badly of rotting blood.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Mace_+1',
    tags: ['Item'],
  },
  {
    id: 'WPN_Maul_1:7e8ef269-0e7b-4352-8828-89c5fced943c',
    name: 'Maul +1',
    description:
      'A weapon of dwarven make: elegant, but strong enough to last several human lifetimes.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Maul_+1',
    tags: ['Item'],
  },
  {
    id: 'WPN_Morningstar_1:deea755b-5335-49d9-bd0e-dbaab9eaf94c',
    name: 'Morningstar +1',
    description:
      "It's said that one warrior with a morningstar is worth seventeen with a sword - one for each of the weapon's spikes.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Morningstar_+1',
    tags: ['Item'],
  },
  {
    id: 'WPN_Pike_1:40fa8049-b6c1-4463-b212-52ad13b5d687',
    name: 'Pike +1',
    description:
      "The base of this polearm's shaft is splintered, likely having borne the weight of a rider plucked from their mount.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Pike_+1',
    tags: ['Item'],
  },
  {
    id: 'WPN_Quarterstaff_1:2fa18ee4-92df-486f-97d2-dd0a720b6fad',
    name: 'Quarterstaff +1',
    description:
      'A polished wooden staff, embellished with knobs and steel for both function and design.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Quarterstaff_+1',
    tags: ['Item'],
  },
  {
    id: 'WPN_Rapier_1:5a6cea10-b3f6-4370-8eed-0b69b4ba531a',
    name: 'Rapier +1',
    description:
      'A lightweight sword that turns the slightest flick of a wrist into a deadly attack.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Rapier_+1',
    tags: ['Item'],
  },
  {
    id: 'WPN_Scimitar_1:7cc7a0e1-d0b8-4569-afb2-d538e8941894',
    name: 'Scimitar +1',
    description:
      "The phases of the moon are carved into the hilt of this scimitar, betraying a druid's careful hand.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Scimitar_+1',
    tags: ['Item'],
  },
  {
    id: 'WPN_Shortbow_1:a46173b7-afd6-48e0-9c76-817acd027574',
    name: 'Shortbow +1',
    description:
      'This halfling bow requires a full draw for smaller folk, but serves as a quick off-hand for those of greater height.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Shortbow_+1',
    tags: ['Item'],
  },
  {
    id: 'WPN_Shortsword_1:261b946f-154b-4f75-8985-cab6531034a2',
    name: 'Shortsword +1',
    description:
      'A standard, lightweight sword, suitable for both thrusting and slashing techniques.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Shortsword_+1',
    tags: ['Item'],
  },
  {
    id: 'WPN_Shortsword_Gith:4b54911a-a32d-48ad-8691-ff28801e1275',
    name: 'Githyanki Shortsword',
    description:
      'Despite its engravings, this lightweight sword is perfectly balanced - a flawless killing implement.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Githyanki_Shortsword',
    tags: ['Item'],
  },
  {
    id: 'WPN_Spear_1:158e6f29-89e9-4279-8f8f-85078f047225',
    name: 'Spear +1',
    description:
      'Forged by dwarven hands, and prized by all warriors who wish to keep their foe at a distance.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Spear_+1',
    tags: ['Item'],
  },
  {
    id: 'WPN_Trident_1:2fab5801-76b1-4669-95d9-7df76bed12dd',
    name: 'Trident +1',
    description:
      "The brutal design of this weapon's trio of prongs forces pierced flesh apart.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Trident_+1',
    tags: ['Item'],
  },
  {
    id: 'WPN_Warhammer_1:3e1b3db9-036e-4931-ab92-c3730a1c3d5f',
    name: 'Warhammer +1',
    description:
      "Following tradition, this hammer's faces were forged with grooves that sealed in the blood of its first kill.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Warhammer_+1',
    tags: ['Item'],
  },
  {
    id: 'WPN_WarPick_1:75586d3e-21b2-4d94-ac99-99a6b0e8c3dd',
    name: 'War Pick +1',
    description:
      'When swung, the arc of this weapon perfectly matches the curve of its beak-like pick.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/War_Pick +1',
    tags: ['Item'],
  },
  {
    id: 'WPN_Battleaxe_2:7faff867-9cb3-432b-aa27-8de281b7428e',
    name: 'Battleaxe +2',
    description:
      'A pulse of magic shoots through your hands whenever you touch this axe.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Battleaxe_+2',
    tags: ['Item'],
  },
  {
    id: 'WPN_Dagger_2:c68026c8-8af9-4a05-b77a-246a01bafe61',
    name: 'Dagger +2',
    description: 'A light, slender blade, magically honed to stay razor-sharp.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Dagger_+2',
    tags: ['Item'],
  },
  {
    id: 'WPN_Dart_2:e292c502-b116-4a46-a232-dd53f7838f6f',
    name: 'Dart +2',
    description:
      'Pegasus feathers lend this dart remarkable speed, as well as a pleasant jasmine fragrance.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Dart_+2',
    tags: ['Item'],
  },
  {
    id: 'WPN_Flail_2:23ab9011-ef66-463e-a8ee-012321be6d1c',
    name: 'Flail +2',
    description:
      'The flail sits heavy in your hand - the weight of steel and magic.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Flail_+2',
    tags: ['Item'],
  },
  {
    id: 'WPN_Glaive_2:bc1c2a84-27f5-46e4-b4b4-0f5ca534469c',
    name: 'Glaive +2',
    description:
      'Tiny specks of blood are fused into the blade, as if the glaive is feeding on them.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Glaive_+2',
    tags: ['Item'],
  },
  {
    id: 'WPN_Greataxe_2:ce8a894c-3dc6-48dc-bb8f-af5390890d43',
    name: 'Greataxe +2',
    description: 'This heavy axe emits a barely audible hum when swung.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Greataxe_+2',
    tags: ['Item'],
  },
  {
    id: 'WPN_Greatclub_2:adf0ef57-7811-40ed-9d29-05c6336f9e1f',
    name: 'Greatclub +2',
    description:
      'A blue glow radiates through the brass spirals at the end of this heavy club.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Greatclub_+2',
    tags: ['Item'],
  },
  {
    id: 'WPN_Greatsword_2:2741505a-9d0b-4c9e-adcd-2e6339491e95',
    name: 'Greatsword +2',
    description:
      "This greatsword's guard has been replaced with the spiked ball of a morningstar. ",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Greatsword_+2',
    tags: ['Item'],
  },
  {
    id: 'WPN_Halberd_2:0e3b29e8-572f-459d-b382-234ec53b1c08',
    name: 'Halberd +2',
    description:
      'A deep scratch runs down one side of the axe blade. It thrums with magic.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Halberd_+2',
    tags: ['Item'],
  },
  {
    id: 'WPN_HandCrossbow_2:ab150a98-0a8e-4ee2-9dca-580d77f99be3',
    name: 'Hand Crossbow +2',
    description:
      'Though the crossbow is small and light, a heavy power runs through its bowstring.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Hand_Crossbow +2',
    tags: ['Item'],
  },
  {
    id: 'WPN_HeavyCrossbow_2:59c190d2-4b91-44f5-a720-f75d338dd341',
    name: 'Heavy Crossbow +2',
    description:
      'The crossbow feels weightless in your hands, as if held up by indiscernible currents of air.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Heavy_Crossbow +2',
    tags: ['Item'],
  },
  {
    id: 'WPN_Javelin_2:d8461adb-44f5-49b3-87ff-ea652f6d4081',
    name: 'Javelin +2',
    description:
      "The tell-tale glow of magical enchantment pulses along this javelin's hooked head.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Javelin_+2',
    tags: ['Item'],
  },
  {
    id: 'WPN_LightCrossbow_2:fa9b6992-dbfc-4265-996b-73d9836cf7fe',
    name: 'Light Crossbow +2',
    description:
      'Persistent rumours speak of magical crossbows that never miss their mark. While clearly exaggerated, every tale holds a kernel of truth.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Light_Crossbow +2',
    tags: ['Item'],
  },
  {
    id: 'WPN_LightHammer_2:647f2f89-f10f-4def-ba9e-9078e49b6157',
    name: 'Light Hammer +2',
    description: 'Magic thrums through you with each blow of this hammer.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Light_Hammer +2',
    tags: ['Item'],
  },
  {
    id: 'WPN_Longbow_2:118967f7-14de-41fa-bec8-3ba383252e9a',
    name: 'Longbow +2',
    description:
      'A soothing hum drifts through your head whenever you draw this bow.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Longbow_+2',
    tags: ['Item'],
  },
  {
    id: 'WPN_Longsword_2:e3b2adb6-7493-466e-9c65-4281fb74e83f',
    name: 'Longsword +2',
    description:
      'This longsword never dulls, although an observer may notice it quietly drinks the blood of slain enemies.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Longsword_+2',
    tags: ['Item'],
  },
  {
    id: 'WPN_Mace_2:f203a318-ea9a-4117-8d27-299dabafd1d3',
    name: 'Mace +2',
    description:
      "The shallow etchings along this mace's head seem to change shape, depending on the light.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Mace_+2',
    tags: ['Item'],
  },
  {
    id: 'WPN_Maul_2:904286be-03fc-4755-adf0-9fd5f44942f4',
    name: 'Maul +2',
    description:
      'This massive hammer is inscribed with a battle chant in Giant, bidding the wielder to split the world in two.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Maul_+2',
    tags: ['Item'],
  },
  {
    id: 'WPN_Morningstar_2:9e2c45b2-0411-42cc-bac6-6222c1334cb0',
    name: 'Morningstar +2',
    description:
      'The intense heat of dwarven forges has given the metal its shiny blue hue.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Morningstar_+2',
    tags: ['Item'],
  },
  {
    id: 'WPN_Pike_2:50ffcd8e-eaa2-479c-b8ed-117ef5436b49',
    name: 'Pike +2',
    description:
      "Tiny indentations in the groove along this pike's head emit a high-pitched whistle when thrust.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Pike_+2',
    tags: ['Item'],
  },
  {
    id: 'WPN_Quarterstaff_2:e1e112b2-5465-4e37-acdc-372666ec1521',
    name: 'Quarterstaff +2',
    description:
      'Steel bands wrap around a wooden core, giving this staff extra momentum.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Quarterstaff_+2',
    tags: ['Item'],
  },
  {
    id: 'WPN_Rapier_2:5c572e8e-8693-48cf-b494-2df0341f7ced',
    name: 'Rapier +2',
    description:
      'The thin edge of this sword seems to blur and become nigh imperceptible with even the slightest movement.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Rapier_+2',
    tags: ['Item'],
  },
  {
    id: 'WPN_Scimitar_2:5193af64-48c1-406f-90bf-87f7f01b4684',
    name: 'Scimitar +2',
    description:
      "An arched electric-blue afterimage follows this blade's every move.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Scimitar_+2',
    tags: ['Item'],
  },
  {
    id: 'WPN_Shortbow_2:d9a98dce-1027-4324-939c-3c9cfe776731',
    name: 'Shortbow +2',
    description:
      'Pliable yew and a hearty bowstring ensure this shortbow fires straight and true.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Shortbow_+2',
    tags: ['Item'],
  },
  {
    id: 'WPN_Spear_2:74d9758a-84e9-4244-9ae8-14acee76acb3',
    name: 'Spear +2',
    description:
      "Even the ornamentation at the base of this spear's head is honed to a razor edge.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Spear_+2',
    tags: ['Item'],
  },
  {
    id: 'WPN_Trident_2:6cf827d6-5bae-480a-a1b4-d7fdb0e68801',
    name: 'Trident +2',
    description:
      'An elegant, vicious weapon designed to eviscerate flesh and organs.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Trident_+2',
    tags: ['Item'],
  },
  {
    id: 'WPN_Warhammer_2:e6b027a7-40bb-445e-b199-38b08d2b4832',
    name: 'Warhammer +2',
    description:
      'The segmented design of this gnome-forged hammer borrows elements of dragonborn weaponry.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Warhammer_+2',
    tags: ['Item'],
  },
  {
    id: 'WPN_WarPick_2:a5012da9-9cfa-467b-901a-61e33db55516',
    name: 'War Pick +2',
    description:
      "This weapon's slick steel point prevents it from catching in armour or bone.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/War_Pick +2',
    tags: ['Item'],
  },
  {
    id: 'UNI_StaffOfRain:28b38ae1-8d66-4d8e-a4f0-5d4c6c342c59',
    name: 'Rain Dancer',
    description:
      'A pale staff inlaid with droplet-shaped topaz. It is cool to the touch.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Rain_Dancer',
    tags: ['Item'],
  },
  {
    id: 'WPN_Dagger_B:c68026c8-8af9-4a05-b77a-246a01bafe61',
    name: 'Dagger +2',
    description: 'A light, slender blade, magically honed to stay razor-sharp.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Dagger_+2',
    tags: ['Item'],
  },
  {
    id: 'WPN_Warhammer_B:3e1b3db9-036e-4931-ab92-c3730a1c3d5f',
    name: 'Warhammer +1',
    description:
      "Following tradition, this hammer's faces were forged with grooves that sealed in the blood of its first kill.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Warhammer_+1',
    tags: ['Item'],
  },
  {
    id: 'WPN_MeatCleaver:b6b4ac25-e54b-441f-b6d3-423ea728cfb1',
    name: 'Cleaver',
    description:
      'Stained with blood and gore, the handle has almost rusted through.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Cleaver',
    tags: ['Item'],
  },
  {
    id: 'WPN_Pitchfork:c8274575-61a2-43a7-bde0-65a278dde287',
    name: 'Pitchfork',
    description:
      'A farming tool crafted from mismatched branches, held together by fraying twine.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Pitchfork',
    tags: ['Item'],
  },
  {
    id: 'WPN_Torch:50c43f27-a12e-412c-88f0-56e15eba692a',
    name: 'Torch',
    description: 'A deep oily smell wafts from this crude tree branch.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Torch',
    tags: ['Item'],
  },
  {
    id: 'WPN_ToySword:5e651778-cc78-425e-b27d-483b1c8afa82',
    name: 'Practice Sword',
    description:
      'Though carefully coated in a thick layer of varnish, the edges of the wooden sword are already starting to chip away.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Practice_Sword',
    tags: ['Item'],
  },
  {
    id: 'WPN_Salami:e082f373-81ec-4f4b-818b-9ee86952e2fa',
    name: 'Salami',
    description:
      'A boon to any adventurer - delicious, long-lasting, and hard enough to smack an adversary.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Salami',
    tags: ['Item'],
  },
  {
    id: 'WPN_Scimitar_FlameBlade:dfb5a6ef-baee-4c0e-9b9d-7f5bd9458131',
    name: 'Flame Blade',
    description: 'An ethereal scimitar made of living fire.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Flame_Blade',
    tags: ['Item'],
  },
  {
    id: 'WPN_MinePickaxe:8693aa7e-cd47-4990-80e7-51041f036400',
    name: 'Pickaxe',
    description: 'A plain tool, covered almost entirely in coppery rust.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Pickaxe',
    tags: ['Item'],
  },
  {
    id: 'WPN_WhippingCane:3a9e4e60-9f58-4fb9-8a16-4cf784ad6f0d',
    name: 'Whipping Cane',
    description:
      'A cane designed to inflict a sharp and agonising pain with every blow.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Whipping_Cane',
    tags: ['Item'],
  },
  {
    id: 'WPN_Automaton_Halberd:f928a70d-5b23-4605-9cae-5342f9ed206e',
    name: 'Halberd',
    description:
      'Part of the spike affixed to the top of this halberd has snapped off, leaving a cruel barb.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Halberd',
    tags: ['Item'],
  },
  {
    id: 'WPN_Bugbear_Morningstar:5ca50a09-548b-4134-a0c7-98f10e8d69e6',
    name: 'Morningstar',
    description:
      "A tuft of hair is caked to the base of one this morningstar's jagged spikes.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Morningstar',
    tags: ['Item'],
  },
  {
    id: 'WPN_LightCrossbow_Makeshift:52f9bd01-fe6e-416d-896e-8600446abb0d',
    name: 'Makeshift Crossbow',
    description:
      'A barely-functional crossbow made from rough twine and repurposed timber. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Makeshift_Crossbow',
    tags: ['Item'],
  },
  {
    id: 'WPN_Goblin_Quarterstaff:58c90cf9-5541-4909-a853-d1a0ca31c046',
    name: 'Ritual Staff',
    description:
      'Streaks of tendon and sinew cling to the animal skull lashed atop of this wooden staff.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Ritual_Staff',
    tags: ['Item'],
  },
  {
    id: 'WPN_Goblin_Scimitar:288356cc-0c6b-43c1-b049-dde418faf1f2',
    name: 'Goblin Scimitar',
    description: 'A cruel and crude blade forged en masse by goblin hordes.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Goblin_Scimitar',
    tags: ['Item'],
  },
  {
    id: 'WPN_Goblin_Shortbow:fd6f48fc-b153-4e6b-9a7f-86ac2963c95f',
    name: 'Goblin Bow',
    description:
      'Fashioned together from a rough-cut branch and stinking sinew.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Goblin_Bow',
    tags: ['Item'],
  },
  {
    id: 'WPN_Goblin_Spear:81b017b5-d185-4026-8871-a053aca8648c',
    name: 'Makeshift Spear',
    description:
      'Dirt and rust mar the edges of this spear, but it is deadly all the same.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Makeshift_Spear',
    tags: ['Item'],
  },
  {
    id: 'WPN_Goblin_Mace:7ebf3d2b-39ff-4a18-9114-4d09d17f432f',
    name: 'Crude Mace',
    description:
      'Rotten rags and mud are the only things keeping this mace together.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Crude_Mace',
    tags: ['Item'],
  },
  {
    id: 'WPN_Gnoll_Sword:3af0f251-36b5-425f-8d2a-f81559a70967',
    name: 'Scrap Sword',
    description:
      'Crudely forged with mismatched components, nearly rusted through, and <i>plenty</i> sharp.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Scrap_Sword',
    tags: ['Item'],
  },
  {
    id: 'WPN_Gnoll_Flind_Flail:608e265d-f81b-4c13-a786-e5602852fcf4',
    name: 'Chaos Flail',
    description:
      'The weapon of a flind, imbued with the power of the demon lord Yeenoghu. Some say the flail itself is the catalyst for transforming gnolls into vicious flinds.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Chaos_Flail',
    tags: ['Item'],
  },
  {
    id: 'WPN_Harpy_Club:0ca0e540-dabe-4bf4-9e23-c006f03ffae2',
    name: 'Broken Club',
    description:
      'The tip of this club has snapped off, its wood rotten to the core.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Broken_Club',
    tags: ['Item'],
  },
  {
    id: 'WPN_Imp_LightCrossbow:43b7fbf5-7f6e-4e9e-bce7-c679eea44593',
    name: 'Light Crossbow',
    description:
      "This crossbow's cast iron latch is mottled with blooms of rust.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Light_Crossbow',
    tags: ['Item'],
  },
  {
    id: 'WPN_Kuotoa_Spear:8fdd7b33-6740-4d15-935c-9e54f54e16d4',
    name: "BOOOAL's Arms",
    description:
      'The cut-off pincer of some Underdark crustacean seems to magically adhere to a bone shaft, creating a make-shift javelin.',
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/BOOOAL's_Arms",
    tags: ['Item'],
  },
  {
    id: 'WPN_KingsKnife:5908898d-5d9e-40de-ab07-3f8fb5f0174c',
    name: "King's Knife",
    description:
      'Crudely forged with mismatched components, nearly rusted through, and <i>plenty</i> sharp.',
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/King's_Knife",
    tags: ['Item'],
  },
  {
    id: 'WPN_Merregon_Halberd:c86a3bf4-16b4-4d76-a33d-3df5c265aca8',
    name: 'Merregon Halberd',
    description:
      "Sharp teeth grow out of the halberd's dark metal - if it is indeed metal at all.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Merregon_Halberd',
    tags: ['Item'],
  },
  {
    id: 'WPN_Minotaur_Greatclub:20bd2850-f6b3-4f13-bf96-c566d8df0de4',
    name: 'Greatclub',
    description:
      "Heavy, spiked branches bound together with rope and sinew. It's hard to imagine a cruder weapon, but it is effective.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Greatclub',
    tags: ['Item'],
  },
  {
    id: 'WPN_Ogre_Greatclub:01da5a5b-97cd-4989-9ae3-af646eb35bc9',
    name: 'Gnarled Tree Branch',
    description: 'A heavy branch ripped from the trunk of an oak tree.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Gnarled_Tree Branch',
    tags: ['Item'],
  },
  {
    id: 'WPN_Shortbow_Makeshift:82992370-cb61-4381-b390-891a3a9bd075',
    name: 'Makeshift Bow',
    description:
      'Though nothing more than a flexible twig and a string, this makeshift bow will do in a pinch.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Makeshift_Bow',
    tags: ['Item'],
  },
  {
    id: 'WPN_WoodWoad_Club:c71e2798-31ae-4f57-8073-c6195c2e9d02',
    name: 'Twisting Branch',
    description: 'A thick, gnarled branch, grown into a club-like shape.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Twisting_Branch',
    tags: ['Item'],
  },
  {
    id: 'WPN_Battleaxe_Pact:407954e3-71e4-4611-9221-0ba3ea71d6e8',
    name: 'Pactbound Battleaxe',
    description:
      "A summonable battleaxe granted by a warlock's patron. Its surface crackles with interdimensional energy.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Pactbound_Battleaxe',
    tags: ['Item'],
  },
  {
    id: 'WPN_Glaive_Pact:e7dab8bd-8037-4d8e-9c4e-ebec705912aa',
    name: 'Pactbound Glaive',
    description:
      "A summonable glaive granted by a warlock's patron. Its surface crackles with interdimensional energy.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Pactbound_Glaive',
    tags: ['Item'],
  },
  {
    id: 'WPN_Greatsword_Pact:e90936db-7f65-446c-819d-c7fc6ba44d6c',
    name: 'Pactbound Greatsword',
    description:
      "A summonable greatsword granted by a warlock's patron. Its surface crackles with interdimensional energy.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Pactbound_Greatsword',
    tags: ['Item'],
  },
  {
    id: 'WPN_Rapier_Pact:705662e8-2a7f-4c7e-b0a0-e505395a45e3',
    name: 'Pactbound Rapier',
    description:
      "A summonable rapier granted by a warlock's patron. Its surface crackles with interdimensional energy.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Pactbound_Rapier',
    tags: ['Item'],
  },
  {
    id: 'WPN_Trident_Pact:fd1b4c45-e2df-4add-bc56-697d0339c4bd',
    name: 'Pactbound Trident',
    description:
      "A summonable trident granted by a warlock's patron. Its surface crackles with interdimensional energy.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Pactbound_Trident',
    tags: ['Item'],
  },
  {
    id: 'WPN_Warhammer_Pact:fdaf8461-4d1a-4364-8d7d-4dd9ce824a1e',
    name: 'Pactbound Warhammer',
    description:
      "A summonable warhammer granted by a warlock's patron. Its surface crackles with interdimensional energy.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Pactbound_Warhammer',
    tags: ['Item'],
  },
  {
    id: 'WPN_Battleaxe_Rusty:3030f1f1-74fc-4008-9317-80c71075c8e3',
    name: 'Rusty Battleaxe',
    description: 'A rust-pitted axe, malodorous in its degradation. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Rusty_Battleaxe',
    tags: ['Item'],
  },
  {
    id: 'WPN_Dagger_Rusty:6a321455-d00f-4164-ab12-3601fef2ae6e',
    name: 'Rusty Dagger',
    description:
      'Useful for writing your name in damp slush and not much else. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Rusty_Dagger',
    tags: ['Item'],
  },
  {
    id: 'WPN_Flail_Rusty:04ae8618-3f49-453a-91f2-e5ac68cf366f',
    name: 'Rusty Flail',
    description: 'A pitiful excuse for a flail, pitted with rust. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Rusty_Flail',
    tags: ['Item'],
  },
  {
    id: 'WPN_Glaive_Rusty:be861724-206e-483e-a42d-9dd131030ad6',
    name: 'Rusty Glaive',
    description: 'Ruined with decay. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Rusty_Glaive',
    tags: ['Item'],
  },
  {
    id: 'WPN_Greataxe_Rusty:a8f37e10-8590-4a65-85d1-29bf8ef5bd64',
    name: 'Rusty Greataxe',
    description:
      'The beard of this axe is ginger with rust, and therefore soulless. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Rusty_Greataxe',
    tags: ['Item'],
  },
  {
    id: 'WPN_Greatsword_Rusty:82311843-dae9-4bda-86fb-40b722daf82e',
    name: 'Rusty Greatsword',
    description:
      'Large and crusted with rust, and about as useful as a drink of water to a drowning man. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Rusty_Greatsword',
    tags: ['Item'],
  },
  {
    id: 'WPN_Halberd_Rusty:7addb7c0-f428-4033-9065-f4ad6e4c7e81',
    name: 'Rusty Halberd',
    description: 'A dilapidated old shanker of a weapon. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Rusty_Halberd',
    tags: ['Item'],
  },
  {
    id: 'WPN_HandCrossbow_Rusty:794f58a7-4bc5-4c98-8e66-7a8e242fb7ef',
    name: 'Rusty Hand Crossbow',
    description: 'This adroit little crossbow is undone with rust. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Rusty_Hand Crossbow',
    tags: ['Item'],
  },
  {
    id: 'WPN_Handaxe_Rusty:2c362536-7ffa-43f4-926c-70dc682ffbff',
    name: 'Rusty Handaxe',
    description:
      "This handaxe is so banjaxed, it's only possible use could be as a kind of flaky backscratcher. ",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Rusty_Handaxe',
    tags: ['Item'],
  },
  {
    id: 'WPN_HeavyCrossbow_Rusty:181104f6-6423-42de-b624-e225e5fb8a4d',
    name: 'Rusty Heavy Crossbow',
    description:
      'Try firing a bolt from this rust-encrusted stock, see if you keep all your fingers. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Rusty_Heavy Crossbow',
    tags: ['Item'],
  },
  {
    id: 'WPN_LightCrossbow_Rusty:6f0568b1-86ac-4039-8d3a-5db844b55fe8',
    name: 'Rusty Light Crossbow',
    description: 'The stock of this crossbow is devoured by decay. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Rusty_Light Crossbow',
    tags: ['Item'],
  },
  {
    id: 'WPN_LightHammer_Rusty:0c8a9530-273d-4f64-81b9-0d169d890483',
    name: 'Rusty Light Hammer',
    description:
      'Pockmarked in rust like flaking red tears, this light hammer is good as a doorstop, and not much else. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Rusty_Light Hammer',
    tags: ['Item'],
  },
  {
    id: 'WPN_Longsword_Rusty:dddd2204-0ee3-47b0-a7ea-6b5216a65e89',
    name: 'Rusty Longsword',
    description:
      'Mottled with rust, this longsword is a hideous excuse for a blade. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Rusty_Longsword',
    tags: ['Item'],
  },
  {
    id: 'WPN_Mace_Rusty:ce1c45a5-5606-4604-9afa-beca19fd03e1',
    name: 'Rusty Mace',
    description:
      'The head of this mace is a scratchboard of peeling orange rust. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Rusty_Mace',
    tags: ['Item'],
  },
  {
    id: 'WPN_Maul_Rusty:67e97333-2225-4797-9c06-0a0e08e6edd7',
    name: 'Rusty Maul',
    description: 'Rust has eaten clean-through the heavy head of this maul.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Rusty_Maul',
    tags: ['Item'],
  },
  {
    id: 'WPN_Morningstar_Rusty:f8856d2d-ffda-417c-b7a8-c7aa757903b7',
    name: 'Rusty Morningstar',
    description: 'The heavy head of this steel star is malefic with rust.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Rusty_Morningstar',
    tags: ['Item'],
  },
  {
    id: 'WPN_Pike_Rusty:0eddcd68-36fb-4c9f-8cbb-66513d8d718e',
    name: 'Rusty Pike',
    description:
      'Truly the amount of rust accumulated on this pike is a lesson in how not to keep your weapons. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Rusty_Pike',
    tags: ['Item'],
  },
  {
    id: 'WPN_Rapier_Rusty:1958c259-3772-46ac-9de3-741806f18703',
    name: 'Rusty Rapier',
    description: 'So brittle, you could flick it in half. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Rusty_Rapier',
    tags: ['Item'],
  },
  {
    id: 'WPN_Scimitar_Rusty:134cca90-23ea-497d-8698-b7a66bab59d3',
    name: 'Rusty Scimitar',
    description:
      'Only an utter gibbon would consider swinging this in combat. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Rusty_Scimitar',
    tags: ['Item'],
  },
  {
    id: 'WPN_Shortsword_Rusty:9d66df2d-8e8f-4798-8684-77b738d26704',
    name: 'Rusty Shortsword',
    description: 'Leopardspots of rust mottle this sword. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Rusty_Shortsword',
    tags: ['Item'],
  },
  {
    id: 'WPN_Sickle_Rusty:1d75dc84-b276-47b0-a0be-a5b25dfcb086',
    name: 'Rusty Sickle',
    description: 'Not even useful in the herbalist trade. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Rusty_Sickle',
    tags: ['Item'],
  },
  {
    id: 'WPN_Spear_Rusty:86450ec8-d876-457f-92c0-7bb11e8f38f8',
    name: 'Rusty Spear',
    description:
      'While the handle is well made, the metal point is pitted with rust, and brittle as frozen underwear in the hands of a stone giant. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Rusty_Spear',
    tags: ['Item'],
  },
  {
    id: 'WPN_Trident_Rusty:27ef84b1-ea40-4f06-a013-f6281511f0e9',
    name: 'Rusty Trident',
    description: "Rust pits each of this trident's prongs. ",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Rusty_Trident',
    tags: ['Item'],
  },
  {
    id: 'WPN_Warhammer_Rusty:ed53c828-d185-408e-8381-9b042849de8e',
    name: 'Rusty Warhammer',
    description: 'Snared and flaking with awful rust. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Rusty_Warhammer',
    tags: ['Item'],
  },
  {
    id: 'WPN_Warpick_Rusty:1d6d5983-4546-4eba-b9e6-d23021d08805',
    name: 'Rusty War Pick',
    description:
      'Swinging this war pick might actually result in the rust-eaten head simply falling off. ',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Rusty_War Pick',
    tags: ['Item'],
  },
  {
    id: 'WPN_Shortbow_Skeleton_AnimateDead:82992370-cb61-4381-b390-891a3a9bd075',
    name: 'Makeshift Bow',
    description:
      'Though nothing more than a flexible twig and a string, this makeshift bow will do in a pinch.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Makeshift_Bow',
    tags: ['Item'],
  },
  {
    id: 'CHA_CompassSpear:7fdf8022-629a-4b34-b0c0-3295bfb2903d',
    name: "The Watcher's Guide",
    description:
      "Time has dampened this spear's sheen, but the centre glows a faint blue. The magic it exudes feels old, terrible... and divine. The spear was given to its previous owner for his unerring loyalty - even after death.",
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/The_Watcher's Guide",
    tags: ['Item'],
  },
  {
    id: 'DEN_HalsinBlade:0de9e072-7048-4d07-8bbe-79e0591674c2',
    name: 'Sorrow',
    description:
      'For every drop of blood spilled, a piece of the soul perishes - until nothing remains but regret.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Sorrow',
    tags: ['Item'],
  },
  {
    id: 'DEN_TunnelStaff:4893bf4e-97e1-48e0-ada8-6bbf115ad68b',
    name: "Nature's Snare",
    description: 'Thread-like vines wriggle along this wooden staff.',
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Nature's_Snare",
    tags: ['Item'],
  },
  {
    id: 'DEN_FaithwardenStaff:13f6ff0c-08c4-4e9f-a624-511389b68dc2',
    name: 'Pale Oak',
    description:
      "Infused with Silvanus' strength, these staves are gifted to Faithwardens who act in defence of nature. ",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Pale_Oak',
    tags: ['Item'],
  },
  {
    id: 'DEN_CapturedGoblin_MurderDagger:520d3f36-af72-4385-89af-f585c8edc9cf',
    name: "Assassin's Touch",
    description:
      'This long, slender blade fits perfectly between the ribs of any unsuspecting victim.',
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Assassin's_Touch",
    tags: ['Item'],
  },
  {
    id: 'FOR_TrueSoul_Spear:a2f4c951-7db4-4d60-9888-f2ad50af7110',
    name: 'Vision of the Absolute',
    description:
      "The tip of this spear strikes unerringly towards its target's eyes.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Vision_of the Absolute',
    tags: ['Item'],
  },
  {
    id: 'FOR_Village_Blacksmith_FineSword:65b41886-823d-416b-b53e-c332a3aad530',
    name: 'Steelforged Sword',
    description:
      "Though the grip's leather is old and crusty, it shows no signs of wear, and not a single scratch mars the slender blade.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Steelforged_Sword',
    tags: ['Item'],
  },
  {
    id: 'FOR_IncompleteMasterwork_SussurGreatsword:44dedec0-df82-4ed3-b9ca-147bd830e312',
    name: 'Sussur Greatsword',
    description:
      "Sussur roots extend from this sword's hilt into the blade itself. It yearns to drink magic, silencing every creature it strikes.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Sussur_Greatsword',
    tags: ['Item'],
  },
  {
    id: 'FOR_IncompleteMasterwork_SussurDagger:8733edb7-f04e-4b6d-ad48-7d49fb782bef',
    name: 'Sussur Dagger',
    description:
      "Smoke-like whorls of sussur sap darken the metal of this dagger's blade and silence its victims.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Sussur_Dagger',
    tags: ['Item'],
  },
  {
    id: 'FOR_IncompleteMasterwork_SussurSickle:6b95bb45-41c3-4954-ac2f-ef1aa169b0b6',
    name: 'Sussur Sickle',
    description:
      'The sheen of sussur sap forged into this sickle glows blue, silencing every creature it cuts.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Sussur_Sickle',
    tags: ['Item'],
  },
  {
    id: 'FOR_WebStaff:baa8bd91-09ec-4c92-a0e1-4a5a9d4ea8ed',
    name: 'Spiderstep Staff',
    description: 'Slightly sticky to the touch, this staff has excellent grip.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Spiderstep_Staff',
    tags: ['Item'],
  },
  {
    id: 'GOB_DrowCommander_Mace:4b0131e0-875a-4f3c-8b41-dbf653857d00',
    name: 'Xyanyde',
    description:
      'Cast deep in the Underdark by duergar slaves, the head of this mace is engraved with spiderwebs. It is ice-cold to the touch.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Xyanyde',
    tags: ['Item'],
  },
  {
    id: 'GOB_GoblinKing_Warhammer:37a29c63-3fcd-43bd-8021-c363dcc852bc',
    name: 'Faithbreaker',
    description:
      "A hand-like brand stamped into the leather handle obscures the notches that would normally signify a hobgoblin's rank.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Faithbreaker',
    tags: ['Item'],
  },
  {
    id: 'GOB_PainPriest_Dagger:11aa209f-6e42-40bd-a12c-aa33445c21ea',
    name: 'Ritual Dagger',
    description:
      'The leather handle is smooth with use, and slick with fresh blood.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Ritual_Dagger',
    tags: ['Item'],
  },
  {
    id: 'GOB_PainPriest_Scourge:b1dc33ba-c595-4036-9683-26635f297e44',
    name: "Loviatar's Scourge",
    description:
      'More club than scourge, this weapon has a serrated edge made for drawing long, shallow cuts.',
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Loviatar's_Scourge",
    tags: ['Item'],
  },
  {
    id: 'GOB_PainPriest_Handaxe:5c996c03-99e9-40c1-8acf-d761550d26f5',
    name: 'Ritual Axe',
    description:
      'Though shiny and recently polished, dried blood still fills the deepest crevices of this axe.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Ritual_Axe',
    tags: ['Item'],
  },
  {
    id: 'GOB_Torturer_Spear:1fea9dfa-96a6-43c5-bce8-34452baa073e',
    name: 'Jagged Spear',
    description:
      'The point of this spear is blackened and melted - the uneven metal is designed to catch deep in the wounds it creates.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Jagged_Spear',
    tags: ['Item'],
  },
  {
    id: 'GOB_Pens_Dagger:529fe100-de0b-4a34-a669-4861ee4538a2',
    name: 'Goblinbane Dagger',
    description:
      "'No goblin will strike you down' is etched into this dagger's handle. When goblin assailants realised they couldn't kill the dagger's original owner, they gave him to the worgs, who made short work of him.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Goblinbane_Dagger',
    tags: ['Item'],
  },
  {
    id: 'Quest_HAG_HagLair_Staff:544e81be-cc28-4fdf-aea7-9a31940af4d0',
    name: 'Staff of Crones',
    description:
      "Live worms wriggle beneath the crumbling surface of this half-rotten staff. Merely touching it fills you with a wave of unbearable nausea and a strange longing, as if it's calling out for its like.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Staff_of Crones',
    tags: ['Item'],
  },
  {
    id: 'HAG_SwampedHero_OldFancyGreatsword:0bf738cf-c0b7-471c-b66e-91578a6f657f',
    name: 'Reinforced Greatsword',
    description:
      'This cumbersome blade looks strong enough to survive journey through all nine Hells.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Reinforced_Greatsword',
    tags: ['Item'],
  },
  {
    id: 'PLA_WPN_DreadedSkullsFlail:b551469c-5a53-4df3-a2c9-91516ef55695',
    name: 'Flail of Dread Skulls',
    description:
      'Target must succeed a Wisdom <LSTag Tooltip="SavingThrow">Saving Throw</LSTag>. On failure, they are struck by Yeenoghu\'s curse. Depending on a dice roll, they will receive one of the following: Madness, 2d6 Psychic damage, or become Paralysed.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Flail_of Dread Skulls',
    tags: ['Item'],
  },
  {
    id: 'PLA_ConflictedFlind_Flail_Broken:8a527abd-a2ff-4267-a067-d26bdf6742ee',
    name: 'Shattered Flail',
    description:
      "A bundle of bones and blood - and a soul-piercing demonic presence - is all that remains of the Flind's flail. It would make a decent mace with a particularly nasty bite.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Shattered_Flail',
    tags: ['Item'],
  },
  {
    id: 'PLA_WPN_SwordOfJustice:455383a5-1211-4500-85f9-b71fad3fbf15',
    name: 'Sword of Justice',
    description:
      "The words 'Deliverance. Justice. Vengeance.' are engraved on the base of this sword. They echo in your mind.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Sword_of Justice',
    tags: ['Item'],
  },
  {
    id: 'UND_SocietyOfBrilliance_ResonanceStaff:62da3651-f2e4-4371-b5f2-fd06dd705030',
    name: "Creation's Echo",
    description:
      'This staff pulses with energy, swiftly attuning itself to the beat of your heart.',
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Creation's_Echo",
    tags: ['Item'],
  },
  {
    id: 'UND_Duergar_ShortswordOfFirstBlood:1e172d76-3433-4ee7-ae1a-9e7d8ae0f12b',
    name: 'Shortsword of First Blood',
    description: 'A golden blade, exquisitely made and astonishingly sharp.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Shortsword_of First Blood',
    tags: ['Item'],
  },
  {
    id: 'UND_DuergarRaft_PestKillerAxe:6e05319b-d8c4-4dbc-b0f4-cea561810fa6',
    name: "Exterminator's Axe",
    description:
      "The intricate engravings on this axe's blade and handle make plain the skill of its smith.",
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Exterminator's_Axe",
    tags: ['Item'],
  },
  {
    id: 'UND_DuergarRaft_GruesomeHammer:4d1f9bce-1884-47d0-a420-69417f397139',
    name: 'Intransigent Warhammer',
    description:
      'The elegant design of this hammer belies its brutal, crushing power. This weapon does not give ground.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Intransigent_Warhammer',
    tags: ['Item'],
  },
  {
    id: 'UNI_SickleOfBOOOAL:a07f2e91-e084-4fe5-9dbb-ef7de76a3c0a',
    name: 'Sickle of BOOOAL',
    description:
      'Infused with the inconceivable might of the formidable BOOOAL!',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Sickle_of BOOOAL',
    tags: ['Item'],
  },
  {
    id: 'UND_StrengthChair_Leg:768010ce-dcfe-43bb-8398-2d681d4fa6eb',
    name: 'Club of Hill Giant Strength',
    description:
      "Though this rotting chair leg doesn't look like much, every splinter vibrates with barely-contained power.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Club_of Hill Giant Strength',
    tags: ['Item'],
  },
  {
    id: 'UND_Tower_StaffBlessMystra:da0ba39a-366d-456b-8dbd-1c5790ca40bf',
    name: 'Staff of Arcane Blessing',
    description:
      'Though dust has settled into every nook and cranny of this staff, it still emanates a soothing aura. Its previous owner cast it aside - forgotten because there was nobody to bless.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Staff_of Arcane Blessing',
    tags: ['Item'],
  },
  {
    id: 'WPN_Tower_AutomatonHalberd:1534c8ee-3651-477d-999c-b22efc9f850d',
    name: 'Light of Creation',
    description:
      "Small lodestones have been inserted along the halberd's shaft, a strange blue current running through them.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Light_of Creation',
    tags: ['Item'],
  },
  {
    id: 'UND_DuergarBlacksmithHammer:733a70a1-2e0f-46f4-aca1-037c0335dc72',
    name: 'Skybreaker',
    description:
      'And they shall have Celestia\'s light, even if we must crack wide the heavens to bring it."',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Skybreaker',
    tags: ['Item'],
  },
  {
    id: 'UND_Nere_Sword:df6698d2-b690-4aea-be83-956d3b2ea97e',
    name: 'Sword of Screams',
    description:
      'A blade of flawless craft. As it parts the air, you fancy you can hear a faint, whispering shriek...',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Sword_of Screams',
    tags: ['Item'],
  },
  {
    id: 'UND_SharranCrossbow:43b7fbf5-7f6e-4e9e-bce7-c679eea44593',
    name: 'Light Crossbow',
    description:
      "This crossbow's cast iron latch is mottled with blooms of rust.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Light_Crossbow',
    tags: ['Item'],
  },
  {
    id: 'UND_SwordInStone:6d0d3206-50b5-48ed-af92-a146ed6b98f2',
    name: 'Phalar Aluve',
    description:
      "The drow inscription on this blade appears to have been recently carved. It translates to: 'Though I have to leave you, I will dance forever in Eilistraee's light.'",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Phalar_Aluve',
    tags: ['Item'],
  },
  {
    id: 'UND_KC_Elder_Warpick:a42bf0f7-3a78-4aae-b94f-ed92a89e847c',
    name: 'Deep Delver',
    description:
      'Countless hands have smoothened the haft and sharpened the blade. This is an ancestral weapon - perhaps dating back to the ancient digs that sundered the duergar from their dwarf-kin.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Deep_Delver',
    tags: ['Item'],
  },
  {
    id: 'UNI_SuperheavyWeapon:b3ed22d9-dd32-46c3-928a-e7253a843dfc',
    name: 'Very Heavy Greataxe',
    description: "It's really very heavy.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Very_Heavy Greataxe',
    tags: ['Item'],
  },
  {
    id: 'UNI_DoomHammer:2f481fef-1877-4eac-820d-dc3210ff0b36',
    name: 'Doom Hammer',
    description: 'Bringer of that which it is.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Doom_Hammer',
    tags: ['Item'],
  },
  {
    id: 'UNI_Bow_SpellslotRecharge:db4a3e0f-6315-4337-abce-aad5f38513aa',
    name: 'Spellthief',
    description:
      'A shiver of magic flows from this bow into your hand - like a promise.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Spellthief',
    tags: ['Item'],
  },
  {
    id: 'UNI_RepeatStaff:48b4f49b-2937-4664-ac87-7db2c64d09c9',
    name: "Corellon's Grace",
    description:
      'This light, flexible staff is of elven make, marked with mithral sigils that channel magic in the blink of an eye.',
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Corellon's_Grace",
    tags: ['Item'],
  },
  {
    id: 'MAG_Cold_IncreaseColdDamageOnCast_Staff:cab10a42-8c85-459a-9d68-b4836388c022',
    name: 'Mourning Frost',
    description:
      'The air around this staff crackles with a cold, frosty wind - a power that has been divided for too long, and is waiting to be released.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Mourning_Frost',
    tags: ['Item'],
  },
  {
    id: 'MAG_LowHP_IncreaseDamage_Greataxe:e1e090ec-ab8c-4db4-a0c3-8b7ab24bb181',
    name: 'Blooded Greataxe',
    description:
      'Stained brown and reeking of iron, this greataxe once belonged to a killer so deranged, his name was magically scrubbed from all histories.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Blooded_Greataxe',
    tags: ['Item'],
  },
  {
    id: 'MAG_Fire_IncreaseSlashingDamageToBurning_Handaxe:4f67b6cb-ccc4-497e-b5d3-2804726e8706',
    name: "Dragon's Grasp",
    description: 'Somehow, this axe perpetually feels warm to the touch.',
    iconURL: '',
    linkURL: "https://bg3.wiki/wiki/Dragon's_Grasp",
    tags: ['Item'],
  },
  {
    id: 'MAG_Fire_IncreasePiercingDamageToBurning_HandCrossbow:3c9f6e52-1597-4ba6-ae36-d532c0e8bad5',
    name: 'Firestoker',
    description:
      "Though the crossbow's bolts look burning hot, they are pleasantly warm to the touch.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Firestoker',
    tags: ['Item'],
  },
  {
    id: 'MAG_Fire_AlwaysDippedInFire_Greatsword:660483f6-8eb3-45be-88a4-327f9d417026',
    name: 'Everburn Blade',
    description:
      'Silent flames surge the length of the blade as soon as it clears the scabbard.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Everburn_Blade',
    tags: ['Item'],
  },
  {
    id: 'MAG_Fire_BurningDamage_Longsword:c3647bf7-8eea-45cd-8cec-a90b21cd8c07',
    name: 'Blistering Greatsword',
    description:
      'This sword nearly burns your flesh, so eager is it to rain fire down upon your enemies.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Blistering_Greatsword',
    tags: ['Item'],
  },
  {
    id: 'MAG_Mobility_ExplosionOnJump_Maul:efb003c3-af98-43d7-bcf4-af29702fb531',
    name: 'Hamarhraft',
    description:
      "The Dwarven grammar is garbled, but the weapon's name suggests something about the importance of first impressions.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Hamarhraft',
    tags: ['Item'],
  },
  {
    id: 'MAG_Mobility_MomentumOnAttack_Scimitar:4456e2ec-ba1f-4f53-aab8-847249cabc09',
    name: 'Speedy Reply',
    description:
      'A heavy haft and wide blade belie the speed of this weapon. It parts the air as swiftly as any duelling sabre.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Speedy_Reply',
    tags: ['Item'],
  },
  {
    id: 'MAG_MeleeDebuff_AttackDebuff1_OnDamage_Mace:df08ec01-52f0-4fdf-b5e7-4fa0970a480a',
    name: 'Adamantine Mace',
    description: 'A nimble mace, heavy with the promise of broken bones.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Adamantine_Mace',
    tags: ['Item'],
  },
  {
    id: 'MAG_MeleeDebuff_AttackDebuff1_OnDamage_Scimitar:503b4f8d-da61-4fc1-a4b7-cad124a10c69',
    name: 'Adamantine Scimitar',
    description:
      'Each cut of this blade shines with the wicked glint of adamantine - a promise for a devastating blow.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Adamantine_Scimitar',
    tags: ['Item'],
  },
  {
    id: 'MAG_MeleeDebuff_AttackDebuff12versatile_OnDamage_Longsword:d116f35c-4399-408c-ba90-b455a5d29a1f',
    name: 'Adamantine Longsword',
    description:
      'Though heavy, this longsword swings effortlessly in your hand - ready to take down a hundred enemies.',
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Adamantine_Longsword',
    tags: ['Item'],
  },
  {
    id: 'MAG_MeleeDebuff_AttackDebuff2_OnDamage_HeavyCrossbow:260a44f7-9ce6-4c8c-bcc8-2eb018c00590',
    name: 'Giantbreaker',
    description:
      "Legends say the Giantbreaker earned its name when an elven ranger singlehandedly defeated a score of hill giants. While the ranger's name is long forgotten, Giantbreaker's lives on.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/Giantbreaker',
    tags: ['Item'],
  },
  {
    id: 'MAG_ChargedLightning_Longbow:38b80bf8-9cf8-4495-8267-eb84c7779d0c',
    name: 'The Joltshooter',
    description:
      "Sleek and lightweight, it is said that the Joltshooter was Yrre the Sparkstruck's favourite weapon. They were indifferent towards bows, but the spikes jutting out of it?",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/The_Joltshooter',
    tags: ['Item'],
  },
  {
    id: 'MAG_ChargedLightning_Trident:cfdc8fdc-9f59-415f-8098-70035585eadb',
    name: 'The Sparky Points',
    description:
      "When Yrre the Sparkstruck was asked why they'd created a trident twice their size, they simply replied, 'The question is why not?'",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/The_Sparky Points',
    tags: ['Item'],
  },
  {
    id: 'MAG_ChargedLightning_Quarterstaff:53d6be1b-eac1-4b88-83ab-ba17956eca57',
    name: 'The Spellsparkler',
    description:
      "Yrre the Sparkstruck intended to give the Spellsparkler to Lenore, a cleric of Mystra and old lover. But when the gnome returned to the cleric's tower, they found it empty - inhabited only by dust and abandoned experiments.",
    iconURL: '',
    linkURL: 'https://bg3.wiki/wiki/The_Spellsparkler',
    tags: ['Item'],
  },
];

export default data;
