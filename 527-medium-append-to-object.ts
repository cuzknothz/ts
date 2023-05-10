// Implement a type that adds a new field to the interface. The type takes the three arguments. The output should be an object with the new field.

type AppendToObject<T extends object, K extends keyof any, V> = {
  [X in keyof T | K]: K extends keyof T ? T[K] : V;
};

type Test3ewr = { id: "1" };

type Res39085r90we8 = AppendToObject<Test3ewr, "asdjf", true>;
