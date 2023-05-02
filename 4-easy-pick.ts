// Implement the built-in `Pick<T, K>` generic without using it.

//Code
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
//

interface Todo {
  title: string;
  description: string;
}

type PickTitle = Pick<Todo, "title">;
