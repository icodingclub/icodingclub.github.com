<link rel="stylesheet" href="/dist/main.min.css">
<link rel="stylesheet" href="/articles/style/editor.css">

# JavaScript Recipes: How to elegantly iterate on Object properties in ES6 and beyond?

JavaScript is one of the languages which let you iterate on Object properties without using any complex tool or api.
However, till ES5, even though we had support for it but it was far from elegant.

ES6 introduced a simple and elegant way to do this job!

## Iteration in ES5
Let have a look at below code and then we can talk further

```
var obj = {
    a: 1,
    b: 2,
    c: 3
}, key;


for (key in obj) {
    if (obj.hasOwnProperty(key)) {
        var value = obj[key];
        console.log(key, " : ", value)
    }
}
```


#### Output:

![object-iteration-es6] (images/iterartion-output.png)


in above code 'if' block make most of the new JavaScript developer tumble. They either don't put this check or forget to understand it.

As we know, it is very critical to avoid iteration on Object’s parent properties and it’s parent properties i.e. You will end up writing a slow code if you miss putting this check.

> Modern linting tools you give you prompt warning or error if miss > to add this check.


## Iteration in ES6 and beyond

New iteration technique is made possible due to introduction of ```js Object.entries() ```


> The Object.entries() method returns an array of a given object’s own enumerable property [key, value] pairs, in the same order
> as that provided by a for\...in loop (the difference being that a for-in loop enumerates properties
> in the prototype chain as well).


For example, below code

```js

const obj = {
    a: 1,
    b: 2,
    c: 3
};
console.log(Object.entries(obj));
```

will give output like below, An array of arrays of two elements, where at index: 0, we will have key and at index:1, we will have value

![entries-out] (images/entries-out.png)

Now this simple function will lead to an elegant iteration of technique

```js
const obj = {
    a: 1,
    b: 2,
    c: 3
};
for (const [key, value] of Object.entries(obj)) {
    console.log(`${key} : ${value}`);
}

```

#### Output:
![object-iteration-es6] (images/iterartion-output.png)


In similar fashion, we can forEach or map

```js

const obj = {
    a: 1,
    b: 2,
    c: 3
};
Object.entries(obj).forEach(([key, value]) => {
    console.info(`${key} : ${value}`);
});

```

#### Output:
![object-iteration-es6] (images/iterartion-output.png)


An example of bit less elegant but closer to ES5 way is below


```js

const obj = {
    a: 1,
    b: 2,
    c: 3
};


for (const key of Object.keys(obj)) {
    console.log(`${key} : ${obj[key]}`);
}

```

That's all folks!

Pick any example from above and you will be the master of ES6 Object iteration.
