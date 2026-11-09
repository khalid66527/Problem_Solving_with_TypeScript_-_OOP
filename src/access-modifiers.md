# TypeScript OOP-তে Access Modifiers

## ভূমিকা

TypeScript-এর Object-Oriented Programming বা OOP-তে Access Modifier
ব্যবহার করে class-এর property ও method কোথা থেকে ব্যবহার করা যাবে তা
নিয়ন্ত্রণ করা হয় তাকে । `public`, `private`, `protected` এবং
`readonly`---প্রতিটির আলাদা আলাদা করে  কাজ রয়েছে। এগুলো সঠিকভাবে ব্যবহার করলে ডেটা
সুরক্ষিত রাখা এবং কোডের নিয়ন্ত্রণ বজায় রাখা ।

## বিস্তারিত আলোচনা

`public` হলো default access modifier। এটি ব্যবহার করলে class-এর বাইরে
থেকেও property বা method access করা যায়।

``` typescript
class User {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}
```

`private` property শুধু যে class-এ ঘোষণা করা হয়েছে, সেই class-এর ভেতর
থেকেই ব্যবহার করা যায়। বাইরে থেকে সরাসরি access করা যায় না।

``` typescript
class Account {
  private balance: number = 5000;
}
```

`protected` property নিজের class এবং তার subclass থেকে ব্যবহার করা যায়,
কিন্তু সাধারণভাবে class-এর বাইরের কোড থেকে access করা যায় না।

``` typescript
class Employee {
  protected name: string = "Alice";
}

class Manager extends Employee {
  getName(): string {
    return this.name;
  }
}
```

`readonly` property একবার constructor বা declaration-এর সময় মান পাওয়ার
পর সাধারণভাবে পরিবর্তন করা যায় না।

``` typescript
class Course {
  readonly courseId: number = 101;
}
```

এখানে `courseId`-এর মান পরে পরিবর্তন করার চেষ্টা করলে TypeScript error
দেখাবে।

## উপসংহার

`public`, `private`, `protected` এবং `readonly` class-এর ডেটা ব্যবহারের
নিয়ম নির্ধারণ করে। প্রয়োজন অনুযায়ী এগুলো ব্যবহার করলে OOP কোড আরও নিরাপদ,
সংগঠিত এবং সহজে রক্ষণাবেক্ষণযোগ্য হয়।
