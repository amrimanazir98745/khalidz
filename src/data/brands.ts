export type Brand = {
  name: string;
  light: string;
  dark: string;
  width: number;
};

export const brands: Brand[] = [
  { name: "EEtel",     light: "/assets/images/brand/eetal.svg",     dark: "/assets/images/brand/eetal.svg",     width: 120 },
  { name: "ICST",     light: "/assets/images/brand/icst.svg",      dark: "/assets/images/brand/icst.svg",      width: 120 },
  { name: "Kayan",    light: "/assets/images/brand/kayan.svg",     dark: "/assets/images/brand/kayan.svg",     width: 120 },
  { name: "Odai",     light: "/assets/images/brand/odai.svg",      dark: "/assets/images/brand/odai.svg",      width: 120 },
  { name: "So Cal",   light: "/assets/images/brand/so-cal.svg",    dark: "/assets/images/brand/so-cal.svg",    width: 120 },
  { name: "Witsberry",light: "/assets/images/brand/witsberry.png", dark: "/assets/images/brand/witsberry.png", width: 120 },
];
