export interface LayoutDefaultProps {
  children?: React.ReactElement;
}
export type CharacterType = [string, [string, string, string[]][]][];

export type pathWayType = {
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

export type pwType = [string, string[]];

export type description = string | string[][];

export type attackCaseType = {
  [index: string]: description;
  PS: description;
  SC: description;
  PM: description;
};

export type acSelectorType = [string | [string, description]];
