// Implement the Absolute type. A type that take string, number or bigint. The output should be a positive number string

type Absoulte<T extends number> = `${T}` extends `-${infer R}` ? R : `${T}`;

type asxfsdzf = Absoulte<-4353>;
