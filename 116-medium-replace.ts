// Implement Replace<S, From, To> which replace the string From with To once in the given string S

type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer A}${From}${infer B}`
  ? `${A}${To}${B}`
  : S;


type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'