{
  // Task-1
  function formatString(
    input: string | boolean,
    toUpper?: boolean
  ): string | null {
    if (typeof input === "string" && toUpper) {
      return input.toString().toUpperCase();
    } else if (toUpper === false) {
      return input.toString().toLowerCase();
    } else {
      return input.toString().toUpperCase();
    }
  }

  // const case1 = formatString("Hello");
  // console.log(case1);
  // const case2 = formatString("Hello", true);
  // console.log(case2);
  // const case3 = formatString("Hello", false);
  // console.log(case3);

  // Task-2:
  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
    { title: "Book C", rating: 3.9 },
    { title: "Book C", rating: 4.0 },
    { title: "Book C", rating: 2.45 },
  ];

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] | void {
    return items.filter((item) => item.rating >= 4.0);
  }

  const case1 = filterByRating(books);
  // console.log(case1);

  // Task-3
  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
  }
  const result1 = concatenateArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]);
  const result2 = concatenateArrays(["1", "2", "3"], ["4", "5", "6"]);
  // console.log(result1);
  // console.log(result2);

  // Task-4
  class Vehicle {
    private make: string;
    year: number;
    getInfo() {
      return `Make: ${this.make}, Year: ${this.year}`;
    }

    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
  }
  class Car extends Vehicle {
    private model: string;
    getModel() {
      return `Model: ${this.model}`;
    }
    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
  }
  const myCar = new Car("Toyota", 2000, "Corolla");
  myCar.getInfo();
  myCar.getModel();

  // Task-5

  function processValue(value: string | number): string | number | undefined {
    if (typeof value === "string") {
      return value.length;
    } else if (typeof value === "number") {
      return value * 2;
    }
  }

  const resultA = processValue("Hello");
  const resultB = processValue(10);

  // Task-6

  interface Product {
    name: string;
    price: number;
  }
  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
    { name: "Bag", price: 85 },
    { name: "Bag", price: 120 },
  ];

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.filter((prod) => prod.price)) {
      return products.reduce(
        (max, current) => (max.price > current.price ? max : current),
        products[0]
      );
    } else {
      return null;
    }
  }

  const res1 = getMostExpensiveProduct(products);
  // console.log(res1);

  // Task-7

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string | undefined {
    if (day === Day.Monday) {
      return "Weekday";
    } else if (day === Day.Sunday) {
      return "Weekend";
    }
  }
  const getDay = getDayType(Day.Monday);
  // console.log(getDay);

  // Task-8 :

  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      if (n < 0) {
        return reject("number is invalid");
      } else {
        setTimeout(() => {
          return resolve(n * n);
        }, 1000);
      }
    });
  }

  // squareAsync(4).then(console.log);
  squareAsync(-6)
    .then(console.log)
    .catch((error) => console.error(error));

  //
}
