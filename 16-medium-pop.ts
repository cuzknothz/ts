// Implement a generic Pop<T> that takes an Array T and returns an Array without it's last element.

type Pop<T extends unknown[]> = T extends [...infer R, infer _] ? R : never;

type arr321 = ["a", "b", "c", "d"];
type arr234 = [3, 2, 1];

type re1 = Pop<arr321>; // expected to be ['a', 'b', 'c']
type re2 = Pop<arr234>; // expected to be [3, 2]
