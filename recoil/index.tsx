import { connected } from "process";
import { atom, selector } from "recoil";
import { v1 } from "uuid";
import { assets, attackCase, LASM, pathWay } from "../config";
import { acSelectorType, description, pwType } from "../types";

export const assetState = atom<string>({
  key: `assetState/${v1()}`,
  default: ""
});

export const assetIdxSelector = selector({
  key: `assetIdxSelector/${v1()}`,
  get: ({ get }) => {
    const asset = get(assetState);
    for (let i = 0; i < assets.length; i++) {
      if (asset == assets[i]) {
        return i;
      }
    }
  }
});

export const pathwayState = atom<pwType>({
  key: `pathwayState/${v1()}`,
  default: ["", []]
});

export const pathwaySelector = selector({
  key: `pathwaySelector/${v1()}`,
  get: ({ get }) => {
    const pathway = get(pathwayState);
    var arr: string[] = [];
    for (const key of pathway[1]) {
      pathWay[key] != undefined && arr.push(pathWay[key]);
    }
    return arr;
  }
});

export const attackcaseSelector = selector<acSelectorType>({
  key: `attackcaseSelector/${v1()}`,
  get: ({ get }) => {
    const [isValid, pathway] = get(pathwayState);
    if (isValid == "x") {
      return [isValid];
    }
    var arr: acSelectorType = [isValid];
    for (const key of pathway) {
      attackCase[key] != undefined && arr.push([pathWay[key], attackCase[key]]);
    }
    return arr;
  }
});

export const deviceState = atom<number>({
  key: `deviceState/${v1()}`,
  default: 0
});

export const characterState = atom<string[]>({
  key: `characterState/${v1()}`,
  default: []
});
export const characterSelector = selector({
  key: `characterSelector/${v1()}`,
  get: ({ get }) => {
    const assetIdx = get(assetIdxSelector);
    const device = get(deviceState);
    if (assetIdx == 0) {
      return LASM[device - 1];
    }
    //Todo
    return LASM[device - 1];
  }
});

export const onCllickState = atom<boolean[]>({
  key: `onCllickState/${v1()}`,
  default: []
});
