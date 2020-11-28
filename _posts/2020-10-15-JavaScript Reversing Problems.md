---
layout: post
author: Praveen Singh
tags: javascript
title: JavaScript Reversing Problems: String, Number and Array
summary: Leran how to handle Reversing Problems in JavaScript - starting from String, to number to Array
iconClass: fa-js
showcase: true
status: draft
---

Can you reverse a string in JavaScript?...A humble and innocent problem which can turn up in any JvaScript Interview. Beware! its a slow trap! Not much, just a little!

We will break this question, slowly and step by step.

# Reversing a String

This problem has different levels.

## Level 1: Reverse using JavaScript's built in methods. For this, you need to know following.

1. `split`: Using this method you can split a String in an array chars by providing a target token for split.
1. `reverse`: Well, this just reverse an Array.
1. `join`: Join an Array back.

Thats it!

### Example:

```js
const reverse = (str) => str.split('').reverse().join('');
```

Yes, just one line what you need!

Next, let's go bit fancy here! Same can be achieve by Array destructing as well, though things are not super clear

```js
const reverse = (str) => [...str].reverse().join(''); //Fancy, isn't it!
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

We have more possibilities but I think we are good by above!

# Reversing a Number

This one is bit tricky! Take few examples

| Input | Output |
| ----- | ------ |
| 123   | 321    |
| 100   | 1      |
| -123  | -321   |
| -100  | -1     |

You see, just converting into string and then just reversing is not sufficient here! We need to do more.

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
