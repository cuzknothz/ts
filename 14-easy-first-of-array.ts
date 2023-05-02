// Implement a generic First<T> that takes an Array T and returns its first element's type.

// type arr1 = ['a', 'b', 'c']
// type arr2 = [3, 2, 1]

// type head1 = First<arr1> // expected to be 'a'
// type head2 = First<arr2> // expected to be 3

//Code
// Solution1
type First<T extends any[]> = T extends [] ? never : T[0];
//Solution2

type First2<T extends any[]> = T["length"] extends 0 ? never : T[0];

//Solution3

type First3<T extends any[]> = T extends [infer R, ...infer rest] ? R : never;

type arr1 = ["a", "b", "c"];

type head = First3<arr1>;
