// Implement Trim<T> which takes an exact string type and returns a new string with the whitespace from both ends removed.

// For example


type Whitespace2 = '\n' | ' ' | '\t';

type TrimRight<T extends string> = T extends `${infer R}${Whitespace2}` ? TrimRight<R>: T 

type test001 = TrimRight<TrimLeft<'  dsafdf  '>>