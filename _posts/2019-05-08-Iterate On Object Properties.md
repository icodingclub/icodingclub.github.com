---
layout: post
author: Praveen Singh
tags: javascript
title: Elegantly Iterate On Object
summary: How To Elegantly Iterate On Object Properties In Javascript (ES6+)?
iconClass: fa-js
---

JavaScript is one of the programming languages which lets you iterate on Object properties without using any complex tool or API.
In this article, we are going to explore, how this simple technique evolved over the years and Why we have something now, which can be classified as elegant!
A historical way if Iteration (Read till ES5)
Let have a look on below code and then we can talk further
var obj = { // Yes 'var'...bad old days!
    a: 1,
    b: 2,
    c: 3,
};
for (var key in obj) {
    if (obj.hasOwnProperty(key)) { // <- Ahh...What's this??
        var value = obj[key];
        console.log(key, ' : ', value);
    }
}
Output:
a : 1
b : 2
c : 3
Many of us miss out the check obj.hasOwnProperty
In JavaScript, when you are iterating, it is very critical to avoid iteration on Object’s parent properties( and it’s parent properties and it’s parent…You got the idea!). Missing may result into a slow code.
Luckily, most of us working with some kind of linting tool which will give a warning if you miss this check.
Modern way — Iteration in ES6+
Now let’s move to modern JavaScript or ES6+!
Acknowledging this problem, ECMA team has added support for simple iteration in ES6.
And it starts with — Object.entries()
The Object.entries() method returns an array of a given object’s own enumerable property [key, value] pairs, in the same order as that provided by a for…in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).
For example, below code
const obj = {
    a: 1,
    b: 2,
    c: 3
};
console.log(Object.entries(obj));
will give output like below, An array of arrays of two elements, where at index: 0, we will have key and at index:1, we will have value

```
[["a",1],["b",2],["c",3]]
```