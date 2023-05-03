// Implement a generic TupleToUnion<T> which covers the values of a tuple to its values union.

// S1
type TupleToUnion<T extends any[]> = T[number];
// S2
type TupleToUnion2<T> = T extends Array<infer ITEMS> ? ITEMS : never;

type Arr = ["1", "2", "3"];

type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'
type Test2 = TupleToUnion2<Arr>;
