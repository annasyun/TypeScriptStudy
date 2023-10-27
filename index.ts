// Type Aliases (별칭)
type AniamlType = string | number | boolean;
let animal: aniamlType;

//readonly
type PetType = { readonly name: string; readonly age: number };
const pet: PetType = { name: "dubu", age: 9 };
