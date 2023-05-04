// Implement ReplaceAll<S, From, To> which replace the all the substring From with To in the given string S

// For example

type ReplaceAll<
  T extends string,
  From extends string,
  To extends string
> = From extends ""
  ? T
  : T extends `${infer A}${From}${infer B}`
  ? `${A}${To}${ReplaceAll<B, From, To>}`
  : T;

type repdsfsdalaced = ReplaceAll<"t y p e s", " ", "">; // expected to be 'types'
