interface Student {
  name: string;
}
interface Teacher extends Student {
  age: number;
}
//type intersection
type Animal = { 
    name :string 
  } 
  type Cat = Animal & { legs: number }