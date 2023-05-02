// Implement the built-in Readonly<T> generic without using it.

//Code

type MyReadOnly<T> = {
  +readonly [K in keyof T]: T[K];
};

//

interface Todo {
  title: string;
  description: string;
}

type TodoReadonly = MyReadOnly<Todo>;
