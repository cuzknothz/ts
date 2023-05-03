// Implement a generic Last<T> that takes an Array T and returns its last element.

type Last<T extends any[]> = T extends [...infer _, infer R] ? R : never;

type arr12 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type tail1 = Last<arr12>; // expected to be 'c'
type tail2 = Last<arr2>; // expected to be 1
