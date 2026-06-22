/** Recursive Partial — lets machine-translated locales override only some keys. */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends readonly (infer _U)[] ? T[P] : T[P] extends object ? DeepPartial<T[P]> : T[P];
};
