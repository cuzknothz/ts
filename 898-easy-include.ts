// Implement the JavaScript Array.includes function in the type system. A type takes the two arguments. The output should be a boolean true or false.
// type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`

type Include<T extends any[], V> = {
  [P in T[number]]: true;
}[V] extends true
  ? true
  : false;
