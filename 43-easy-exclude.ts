// Implement the built-in Exclude<T, U>

// type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'

type MyExclude<T extends object, U extends keyof T> = T extends U ? never : T;
