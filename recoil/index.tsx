import { atom, selector } from "recoil";
import { v1 } from "uuid";
import { assets, ETC, LASM, PT } from "../config";

export const assetState = atom<string>({
  key: `assetState/${v1()}`,
  default: ""
});

export const deviceState = atom<number>({
  key: `deviceState/${v1()}`,
  default: 0
});

export const onCllickState = atom<boolean[]>({
  key: `onCllickState/${v1()}`,
  default: []
});

export const characterState = atom<string[]>({
  key: `characterState/${v1()}`,
  default: []
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

export const characterSelector = selector({
  key: `characterSelector/${v1()}`,
  get: ({ get }) => {
    const assetIdx = get(assetIdxSelector);
    const device = get(deviceState);
    if (assetIdx == 0) {
      return LASM[device - 1];
    } else if (assetIdx == 2) {
      return PT[device - 1];
    }
    return ETC[device - 1];
  }
});
