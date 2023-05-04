// Implement TrimLeft<T> which takes an exact string type and returns a new string with the whitespace beginning removed.

// For example

// type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '

type Whitespace = '\n' | ' ' | '\t';

type TrimLeft<T extends string> = T extends `${Whitespace}${infer R}` ? TrimLeft<R> : T