# Assignment1_L2b5_ts

## Answers of Given Questions

### Ans:-1

----Difference Between Interfaces and Types in TypeScript:

In Typescript, both interfaces and type are used to define the shape of objects.but they have key differences in usage and flexibility:

Interface: interface is declared using the (interface keywords) and Interface can be merged. Interface is best for defining object structures that can be extended later. When defining object structures that might grow with additional properties, interfaces are a good choice.

Type: type is declared using the (type keywords) and Type can be used to define a typographical alias for a type. Type is best for defining a new name for an existing type. When typing a value that is already known, types are a good choice.Specially when working with complex types like unions, tuples, or primitive-based combination.

## Ans:-2

--Use of keyof in Typescript

The Keyof keywords in TypeScript is used to create a union of property names(keys) of a given type. It allows us to dynamically reference object key and enforce type safety when working with properties.

## Ans:3

---Different between any, unknown and never.
1: any type: The any type is a type that represents any value. It is a type that can represent any value , including values of any type. It is a type that can be assigned to any value, and any value can be assigned to it. It is a type that can be used to represent a value of any type.

2: unknown type: The unknown type is a type that represents a value that is not known at compile time. It is a type that can represent a value of any type, but it is not known at compile time. It is a type that can be used to represent a value that is not known at compile time.

3: never type: The never type is a type that represents a value that is not possible. It is a type that can represent a value that is not possible, such as a value that is not reachable in a function. It is a type that can be used to represent a value that is not possible. It is a type that can be used to represent a value that is not reachable in a function.

## Ans:4

--- Using Enum in typescript

Enums in typescript provide a way to define a sot of named constants, making code more readable and maintainable. They help enforce a finite set of possible values for a variable.
Example:-
enum Status{
Pending, // 0
inProgress, //1
Completed,//2
}
let currentStats: Status = Status.InProgress;
console.log(currentStats); // Output: 1

## Ans:5

-- Use of Interface and it's working
If we declare a variable without explicitly specifying its type, TypeScript infers the type based on it's value. Type inference in TypeScript refers to its ability to automatically determine the type of a variable, function, or expression without explicit annotations. This makes coding more efficient while preserving type safety.

## Ans-6

--Typescript helping ways and improving code quality.
1:Type safety and error prevention:Detects type-related error during development rather than runtime.
2:Improve readability and maintainability: Provides clearer function signature and object structures.
3: Better code scalability: helps large projects remain structured.
4:Enhance IDE supports and autocompleted: Provides intelligent code completion in IDEs like VS code.etc.

## Ans:-7

---Example of Union and Interaction
1:Union type: A union type allows a variable to have multiple possible types. The value can be either one type or another.
Ex-
type Status = "pending" | "completed" | "failed";

function getStatusMessage(status: Status): string {
if (status === "pending") {
return "Your request is in progress.";
} else if (status === "completed") {
return "Your request has been successfully completed.";
} else {
return "Something went wrong.";
}
}

console.log(getStatusMessage("completed")); //"Your request has been successfully completed."

2:Intersection Type: An Intersection type merges multiple types into a single combined type.
interface User {
name: string;
age: number;
}

interface Employee {
employeeId: number;
position: string;
}

// Intersection type combining User & Employee
type EmployeeDetails = User & Employee;

const employee: EmployeeDetails = {
name: "Akash",
age: 25,
employeeId: 1234,
position: "Software Engineer"
};

console.log(employee);

--------------------------------- Blogs---------------------

#### Blogs

Blog 1: Interfaces vs. Types in TypeScript – Which One Should You Use?
TypeScript provides two ways to define the shape of objects: interface and type. While both serve similar purposes, there are key differences that impact how they are used in projects.

1. Syntax & Declaration

- interface is declared using the interface keyword.
- type is declared using the type keyword.
  Example:
  interface Person {
  name: string;
  age: number;
  }

type PersonAlias = {
name: string;
age: number;
};

Both define the same structure, but their use cases differ. 2. Extensibility & Merging

- Interfaces can be merged when declared multiple times:
  interface User {
  name: string;
  }

interface User {
age: number;
}

- This results in:
  const user: User = { name: "Akash", age: 25 }; // Works!
  - Types, however, do not merge automatically. Instead, they use intersections:
  type Name = { name: string };
  type Age = { age: number };
  type User = Name & Age;

3. When to Use What?- Use interface for defining structured object types that may grow.

- Use type for unions, intersections, and primitive-based type definitions.
  By understanding these differences, developers can make more informed decisions on which one to use based on their needs.Blog 2: Understanding Enums in TypeScript – Numeric vs. String EnumsEnums provide a way to define a set of named constants in TypeScript, making code more readable and maintainable. They are especially useful for defining categories, states, or options.1. Numeric EnumsNumeric enums auto-increment values starting from 0 unless explicitly assigned.Example:enum Status {
  Pending, // 0
  InProgress, // 1
  Completed // 2
  }

console.log(Status.Pending); // Output: 0
console.log(Status.Completed); // Output: 2 2. String EnumsUnlike numeric enums, string enums require explicit assignments.Example:enum Direction {
North = "NORTH",
South = "SOUTH",
East = "EAST",
West = "WEST"
}

console.log(Direction.North); // Output: "NORTH"
console.log(Direction.West); // Output: "WEST" 3. Why Use Enums?- Improves readability (Status.Completed vs. 2).

- Prevents invalid values by restricting options.
- Makes debugging easier by using named constants.
  Enums are particularly useful for defining statuses, roles, directions, or configuration values in large applications.Would you like me to expand on any specific points or adjust these blogs?
