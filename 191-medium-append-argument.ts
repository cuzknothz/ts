// For given function type Fn, and any type A (any in this context means we don't restrict the type, and I don't have in mind any type 😉) create a generic type which will take Fn as the first argument, A as the second, and will produce function type G which will be the same as Fn but with appended argument A as a last one.

type AppendArgument<T extends (...args: any[]) => any, X> = T extends (
  ...args: infer R
) => infer T
  ? (...args: [...R, X]) => T
  : never;



type Fn23 = (a: number, b: string) => number

type Result = AppendArgument<Fn23, 2>
// expected be (a: number, b: string, x: boolean) => number