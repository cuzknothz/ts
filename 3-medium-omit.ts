// Implement the built-in Omit<T, K> generic without using it.

type MyOmit<T extends object, V extends keyof T> = {
  [K in keyof T as K extends V ? never : K]: T[K];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyOmit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};
