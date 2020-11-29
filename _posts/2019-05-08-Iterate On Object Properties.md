---
layout: post
author: Praveen Singh
tags: javascript
title: Elegantly Iterate On Object In Javascript (ES6+)
summary: How To Elegantly Iterate On Object Properties In Javascript (ES6+)?
iconClass: fa-js
---

JavaScript is one of the programming languages which lets you iterate on Object properties without using any complex tool or API.

In this article, we are going to explore, how this simple technique evolved over the years and Why we have something now, which can be classified as elegant!

# A historical way if Iteration (Read till ES5)

Let have a look on below code and then we can talk further

```js
var obj = {
    // Yes 'var'...bad old days!
    a: 1,
    b: 2,
    c: 3,
};
for (var key in obj) {
    // <- Ahh...What's this??
    if (obj.hasOwnProperty(key)) {
        var value = obj[key];
        console.log(key, ' : ', value);
    }
}
```

### Output:

```console
a : 1;
b : 2;
c : 3;
```

> Many of us miss out on the check `obj.hasOwnProperty`

In JavaScript, when you are iterating, it is very critical to avoid iteration on Object’s parent properties( and it’s parent properties and it’s parent…You got the idea!). Missing may result in a slow code.

Luckily, most of us working with some kind of linting tool which will give a warning if you miss this check.

# Modern way — Iteration in ES6+

Now let’s move to modern JavaScript or ES6+!

Acknowledging this problem, ECMA team has added support for simple iteration in ES6.

**And it starts with — `Object.entries()`**

## `Object.entries()`

> The `Object.entries()` method returns an array of a given object’s own enumerable property [key, value] pairs, in the same order as that provided by a for…in the loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).

For example, below code

```js
const obj = {
    a: 1,
    b: 2,
    c: 3,
};
console.log(Object.entries(obj));
```

will give output like below, An array of arrays of two elements, where at index: 0, we will have key and at index:1, we will have value

```console
[
    ["a", 1],
    ["b", 2],
    ["c", 3]
]
```

Now this simple function will lead to an elegant iteration of Object, check out the below code.

## Start with `Object.entries`

```js
const obj = {
    a: 1,
    b: 2,
    c: 3,
};

// Notice use of Object.entries in for...of loop
for (const entry of Object.entries(obj)) {
    console.log(`key: ${entry[0]} : value: ${entry[1]}`);
}
```

### Output:

```console
key: a: value: 1;
key: b: value: 2;
key: c: value: 3;
```

It’s already been good, but let’s make it awesome

## Use Destructing to make loop better looking and more usable.

```js
const obj = {
    a: 1,
    b: 2,
    c: 3,
};
for (const [key, value] of Object.entries(obj)) {
    console.log(`${key} : ${value}`);
}
```

# Apply same concept in `forEach`

```js
const obj = {
    a: 1,
    b: 2,
    c: 3,
};
Object.entries(obj).forEach(([key, value]) => {
    console.info(`${key} : ${value}`);
});
```

### Output:

```console
a: 1;
b: 2;
c: 3;
```

Thank You!
That’s all folk! let me know in the comment section if this article helped you.
