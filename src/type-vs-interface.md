# Type Alias এবং Interface-এর মধ্যে পার্থক্য

## ভূমিকা

TypeScript-এ `type` alias এবং `interface`---দুটিই ডেটার গঠন বা টাইপ
নির্ধারণ করতে ব্যবহৃত হয়  তাকে। এগুলোর মাধ্যমে অবজেক্টের property ও তার data type
নির্দিষ্ট করা যায়।

## বিস্তারিত আলোচনা

`interface` সাধারণত অবজেক্টের গঠন নির্ধারণে ব্যবহৃত হয় তাকে। একই নামের একাধিক
interface ঘোষণা করলে TypeScript সেগুলোকে একত্র করতে পারে। এই সুবিধাকে
declaration merging বলা হয়।

``` typescript
interface User {
  name: string;
  age: number;
}

interface User {
  email: string;
}
```

এখন `User`-এর মধ্যে `name`, `age` এবং `email`---তিনটি property-ই থাকবে।

অন্যদিকে, `type` alias দিয়ে শুধু অবজেক্ট নয়, primitive, union, tuple এবং
intersection type-ও তৈরি করা যায়।

``` typescript
type Status = "active" | "inactive";

type Product = {
  title: string;
  price: number;
};
```

`interface`-এ `extends` ব্যবহার করে অন্য interface-এর বৈশিষ্ট্য নেওয়া যায়।
`type`-এর ক্ষেত্রে intersection (`&`) দিয়ে একাধিক type একত্র করা সম্ভব।

``` typescript
type Admin = User & {
  role: string;
};
```

## কখন কোনটি ব্যবহার করব?

কোনো অবজেক্টের গঠন নির্ধারণ এবং ভবিষ্যতে সেটি সম্প্রসারণের প্রয়োজন হলে
`interface` ভালো পছন্দ। Union, primitive, tuple বা জটিল type combination
দরকার হলে `type` বেশি উপযোগী।

## উপসংহার

দুটিই TypeScript-এর গুরুত্বপূর্ণ বৈশিষ্ট্য। কাজের ধরন অনুযায়ী সঠিকটি বেছে নিলে
কোড আরও পরিষ্কার, রক্ষণাবেক্ষণযোগ্য এবং নির্ভরযোগ্য হয়।
