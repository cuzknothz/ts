// Implement the generic version of Array.push

// type Result = Push<[1, 2], '3'> // [1, 2, '3']

type Push<T extends unknown[], V> = [...T, V];

type Result3 = Push<[1, 2], "3">;
