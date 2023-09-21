export interface LayoutDefaultProps {
  children?: React.ReactElement;
}
export type CharacterType = [string, [string, string, string[]][]][];

export type PathWayType = {
  [index: string]: string;
  PS: string;
  WN: string;
  "WN/D": string;
  "WN/E": string;
  PM: string;
  "PM/D": string;
  "PM/S": string;
  SC: string;
  SW: string;
  "SW/F": string;
};

export type PwType = [string, string[]];

export type Description = string | string[][];

export type AttackCaseType = {
  [index: string]: Description;
  PS: Description;
  SC: Description;
  PM: Description;
};

export type acSelectorType = [string | [string, Description]];

export type AssetType = {
  asset: string;
  device: number;
  pathway: PwType;
  characters: string[];
  selectedList: boolean[];
};
