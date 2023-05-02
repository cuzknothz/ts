// // Implement a generic MyReadonly2<T, K> which takes two type argument T and K.

// // K specify the set of properties of T that should set to Readonly. When K is not provided, it should make all properties readonly just like the normal Readonly<T>.

// // type MyReadonly2<T, U extends keyof T> =

type MyReadonly2<T, V extends keyof T> = Omit<T, V> & Readonly<Pick<T, V>>;
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

const todo2: MyReadonly2<Todo, "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

todo2.title = "Hello"; // Error: cannot reassign a readonly property
todo2.description = "barFoo"; // Error: cannot reassign a readonly property
todo2.completed = true; // OK
