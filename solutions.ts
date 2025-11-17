type AlphaNumeric = string | number | boolean;

const formatValue = (value: AlphaNumeric): AlphaNumeric => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }
  return value;
};

const getLength = (value: string | unknown[]): number => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type Item = {
  title: string;
  rating: number;
};

const filterByRating = (value: Item[]): Item[] => {
  const filterBook = value.filter((item: Item) => {
    return item.rating >= 4;
  });
  return filterBook;
};

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (value: User[]): User[] => {
  return value.filter((user: User) => {
    return user.isActive === true;
  });
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
const printBookDetails = (value: Book) => {
  const available = value.isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${value.title}, Author: ${value.author}, Published: ${value.publishedYear}, Available: ${available}`
  );
};

type UniqueValue = number | string;

const getUniqueValues = (
  value1: UniqueValue[],
  value2: UniqueValue[]
): UniqueValue[] => {
  const uniqueNumbers: UniqueValue[] = [];

  for (let i = 0; i < value1.length; i++) {
    let flag = false;
    for (let j = 0; j < uniqueNumbers.length; j++) {
      if (uniqueNumbers[j] === value1[i]) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      uniqueNumbers.push(value1[i]);
    }
  }

  for (let i = 0; i < value2.length; i++) {
    let flag = false;
    for (let j = 0; j < uniqueNumbers.length; j++) {
      if (uniqueNumbers[j] === value2[i]) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      uniqueNumbers.push(value2[i]);
    }
  }

  return uniqueNumbers;
};

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (value: Product[]): number => {
  if (value.length === 0) {
    return 0;
  }
  return value.reduce((total, product) => {
    let price = product.price;

    if (product.discount) {
      price = price - (price * product.discount) / 100;
    }

    const ItemPrice = price * product.quantity;

    return total + ItemPrice;
  }, 0);
};
