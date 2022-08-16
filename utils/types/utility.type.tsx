export type PartialOn<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type nil = null | undefined;

// removes both null or undefined from T
export type NonNil<T> = T extends nil ? never : T;

// make all properties non nilable
export type NonNilProps<T> = { [P in keyof T]-?: NonNil<T[P]> };

// make some keys non nil
export type WithNonNilKeys<T, K extends keyof T> = Omit<T, K> &
  NonNilProps<Pick<T, K>>;
