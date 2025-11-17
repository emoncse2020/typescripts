# TypeScript

## 1. TypeScript-এ Interface এবং Type-এর মধ্যে পার্থক্য

TypeScript-এ `interface` এবং `type` দুটোই অবজেক্টের স্ট্রাকচার নির্ধারণ করতে ব্যবহৃত হয়। তবে কিছু পার্থক্য রয়েছে:

### **Interface**

- Extends করা যায় (inheritance).
- মূলত অবজেক্টের শেপ বর্ণনা করার জন্য ব্যবহৃত হয়।
- একই নামে একাধিকবার ডিক্লেয়ার করলে তারা merge হয়।

### **Type Alias**

- Primitive, Union, Tuple সহ যেকোনো ধরনের ডাটা টাইপ ডিফাইন করা যায়।
- Merge হয় না; একই নামে দু’বার ঘোষণা করা যায় না।
- Interface যা করতে পারে, Type প্রায় সবই করতে পারে, তবে Type আরও flexible।

---

## 2. keyof কীওয়ার্ডের ব্যবহার

`keyof` ব্যবহার করে একটি টাইপের key গুলোকে union হিসেবে পাওয়া যায়।

### উদাহরণ:

```ts
interface User {
  name: string;
  age: number;
}

// keyof User এর মান হবে "name" | "age"
type UserKeys = keyof User;

const key: UserKeys = "name"; // valid
```

---

## 3. any, unknown, এবং never এর পার্থক্য

### **any**

- যেকোনো মান গ্রহণ করতে পারে।
- Type checking বন্ধ করে দেয়।
- ঝুঁকিপূর্ণ, কারণ এটি ভুল ধরতে পারে না।

### **unknown**

- any এর মতো সব মান গ্রহণ করে, কিন্তু ব্যবহার করার আগে টাইপ চেক করতে হয়।
- নিরাপদ (safer alternative to any).

### **never**

- এমন মান যা কখনোই return করে না, যেমন infinite loop বা error throw করা।
- কোনো ভ্যালুর সম্ভাবনা নেই।

---

## 4. TypeScript-এ Enum এর ব্যবহার

Enum দিয়ে নির্দিষ্ট কিছু নামকৃত মান সেট করা যায়।

### **Numeric Enum উদাহরণ:**

```ts
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
```

### **String Enum উদাহরণ:**

```ts
enum Status {
  Success = "SUCCESS",
  Failed = "FAILED",
}
```

---

## 5. Union এবং Intersection টাইপের উদাহরণ

### **Union Type** (একাধিক টাইপ গ্রহণ করতে পারে):

```ts
let value: string | number;
value = "Hello";
value = 10;
```

### **Intersection Type** (একাধিক টাইপ মিশ্রিত করে):

```ts
interface A {
  name: string;
}

interface B {
  age: number;
}

type Person = A & B;

const person: Person = {
  name: "Emon",
  age: 25,
};
```

---
