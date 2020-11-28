---
layout: post
author: Praveen Singh
tags: javascript
title: JavaScript Reversing - String, Number, and Array
summary: Learn how to handle Reversing Problems in JavaScript - starting from String, to number to Array
iconClass: fa-js
status: draft
---

**Can you reverse a string in JavaScript?**

A humble and innocent question that can turn up in any JvaScript Interview. Though it seems easy - it has it's own tricky parts!

We will break this question, slowly and step by step.

# Reversing a String

This problem has different levels.

## Level 1: Reverse using JavaScript's built-in methods. 

For this, you need to know the following.

1. `split`: Using this method you can split a string in an array of chars by providing a target token for the split.
1. `reverse`: Well, this just reverses an Array.
1. `join`: Join an Array back.

### Code:

```js
const reverse = (str) => str.split('').reverse().join('');
```

Yes, just one line what you need!

Next, let's go a bit fancy here! The same can be achieved by Array destructing as well, though things are not super clear

```js
const reverse = (str) => [...str].reverse().join('');
```

## Level 2: Programmatically

### Using for...of loop

```js
function reverse(str) {
    let out = '';
    for (const ch of str) {
        out = ch + out;
    }

    return out;
}

console.log(reverse('abc') === 'cba'); //true
```

### A less clear version using `reduce`

```js
function reverse(str) {
    return str.split('').reduce((out, ch) => ch + out, '');
}

console.log(reverse('abc') === 'cba'); //true
```

We have more possibilities but I think we are good by the above!

# Reversing a Number

This one is a bit tricky! Take a few examples

| String | Reversed |
| ----- | ------ |
| 123   | 321    |
| 100   | 1      |
| -123  | -321   |
| -100  | -1     |

You see, just converting into the string and then just reversing is not sufficient here! We need to do more.

What more? See it by yourself

```js
function reverse(no) {
    const reverseNoStr = no.toString().split('').reverse().join('');
    return parseInt(reverseNoStr) * Math.sign(no);
}

//Test:
console.log(reverse(123) === 321); //true
console.log(reverse(100) === 1); //true
console.log(reverse(-123) === -321); //true
console.log(reverse(-100) === -1); //true
```

Notice use `Math.sign` and `parseInt`

# Reversing and Array

Well, using `Array.reverse` would be too simple to be a question. Let's solve it programmatically

```js
function reverse(_array) {
    const array = [..._array];

    for (let i = 0; i < array.length / 2; i++) {
        [array[i], array[array.length - 1 - i]] = [array[array.length - 1 - i], array[i]];
    }

    return array;
}

console.log(reverse([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
```

That's All folk! 
