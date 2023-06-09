// Implement the built-in Parameters generic without using it.

type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer P
) => unknown
  ? P
  : never;

const foo = (arg1: string, arg2: number): void => {};

type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]
