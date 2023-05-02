// Implement the util type If<C, T, F> which accepts condition C, a truthy value T, and a falsy value F. C is expected to be either true or false while T and F can be any type.

type If<T extends boolean, U, V> = T extends true ? U : V;

type result1 = If<false, "a", "b">;
