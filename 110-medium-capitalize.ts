// Implement Capitalize<T> which converts the first letter of a string to uppercase and leave the rest as-is.

type MyCapitalize<T extends string> = T extends `${infer A}${infer Tail}` ? `${Uppercase<A>}${Tail}` : T

type capitalized = MyCapitalize<'hello world'> // expected to be 'Hello world'