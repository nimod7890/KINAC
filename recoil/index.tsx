import { atom } from "recoil";

export const assetsState = atom<string>({
  key: "assetsState",
  default: ""
});

export const deviceState = atom<number>({
  key: "deviceState",
  default: 0
});
