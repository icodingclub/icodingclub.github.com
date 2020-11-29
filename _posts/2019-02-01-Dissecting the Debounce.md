---
layout: post
author: Praveen Singh
tags: javascript
title: Build a Debounce function in JavaScript from scratch
summary: Step by Step guide of Debounce in JavaScript
iconClass: fa-js
showcase: true
---


# What is a Debounce anyway?
Debounce is a pattern to limit the rate at which function can fire. It returns a function, which can only be triggered when there is a user-provided delay in its invocations. If the function is getting triggered continuously, without the delay, it will not be called.

## Advantages
1. Improve the performance by regulating the rate at which a function can be triggered.
1. Make your code more meaningful, by calling the handler only when we need for it.

## Conceptual Diagram
<img src="/assets/post-images/debounce-architecure.png" alt="" />

## Case Study - Google autocomplete suggestions

<img src="/assets/post-images/debounce-google.png" alt="" />


Google search is an interesting case of debounce pattern. If you are designing this page, you may want to consider the following

1. On every meaning full keyword, we want to provide autocomplete suggestions to the user.
1. Providing suggestions too early, maybe at every keypress, would be meaningless. Also, it will put unnecessary load on the server.
1. Providing it too late would defeat the purpose of autocomplete suggestions.

Debounce is a standard pattern to solve this kind of problem.

## Step by step guide for building a Debounce function.

### Step 1: Delay the function call.


```js

/*
 * DEBOUNCE
 */
function debounce(func, wait) {
  return function() {
    setTimeout(func, wait);
  };
}
/*
 * TEST
 */
const start = performance.now();
function timer(){
  return performance.now() - start;
}
const msg = 'Hello Debounce!';
function logMsg() {
  console.log(`${msg} Time: ${timer()}`);
}
const smartLogMsg = debounce(logMsg, 400);
smartLogMsg(); // will be called at 400+ ms.
setTimeout(smartLogMsg, 300); // will be called at 700+ ms.
setTimeout(smartLogMsg, 800); // will be called at 1200+ ms.
```

Output: 

```console
Hello Debounce! Time: 402.9799999552779
Hello Debounce! Time: 705.5549999931827
Hello Debounce! Time: 1200.894999958109
```

## Step 2: Limit the number of function calls.

```js
/*
 * DEBOUNCE
 */
function debounce(func, wait) {
  let timeout;
  return function(){
    // Clear the timeout if it get called before the wait period.
    clearTimeout(timeout);
    timeout = setTimeout(func, wait)
  }
}
/*
 * TEST
 */
const start = performance.now();
function timer(){
  return performance.now() - start;
}
const msg = 'Hello Debounce!';
function logMsg() {
  console.log(`${msg} Time: ${timer()}`);
}
const smartLogMsg = debounce(logMsg, 400);
smartLogMsg(); // will be called at 400+ ms.
// will be called at 700+ ms, hence cancel the previous.
setTimeout(smartLogMsg, 300);
// will be called at 1200+ ms, will log normally
setTimeout(smartLogMsg, 800);

```

Output:

```console
Hello Debounce! Time: 705.0699999999779 
Hello Debounce! Time: 1200.7099999991624 

```

At this point, our debounce function is half complete and working for a few happy scenarios. 

To fix things further, and to understand the value of it, we have to add a little bit of complexity now.
Let's build a small App with following features

1. Take user input.
1. Put through the debounce.
1. Use a "fake" XHR call, which pretends that it's processing the data on the server.
1. Put back the "processed text" on the view, at a delayed rate.

# Starting code:
Let's use below code as starting point
<script async src="//jsfiddle.net/ipraveen/f9am6xeo/embed/html/"></script>

If you run the code, use below fiddle, you will see that we are getting output but all are just undefined.

Let's use below fiddle as starting point

<script async src="//jsfiddle.net/ipraveen/f9am6xeo/embed/result/"></script>


### What's wrong here?
well, everything which can go wrong with this. We are losing the context. Let's try to fix that.

## Step 3: Fix the context

```js
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this; // Preserving the context
        const executor = function() {
            timeout = null;
            func.apply(context); // Calling function with context
        };
        clearTimeout(timeout);
        timeout = setTimeout(executor, wait);
    };
}
```


Now, if you replace the `debounce` function in fiddle, you will see following output like below for input `abc a`.

```console
XHR with payload: abc
XHR with payload: abc
XHR with payload: abc a
```

Hurray!
No no….not so fast!….one last thing is pending. Can you see something odd in below section of code

```js
...
function handleInput() {
      doXhr(this.value).then(data => (output.innerHTML += `<li>${data}</li>`));
 }
...

```
Well, we are using `this.value` to get the entered text; nothing wrong in it, it's just we can also use `event.target.value` instead of that. let's do the change and see the output.

### Try `event.target.value`

Changes:
```js
...
function handleInput(event) {
        const inputData = event.target.value;
        doXhr(inputData).then(data => (output.innerHTML += `<li>${data}</li>`));
      }
...
```
and when we run the code, disappointment is there on console

>  Uncaught TypeError: Cannot read property 'target' of undefined"

Why?…point is, we are not mapping the argument passed to the function properly. Let's fix that.

## Step 4: Fix the function arguments

```js
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const context = this;
        const executor = function() {
            timeout = null;
            func.apply(context, args);
        };
clearTimeout(timeout);
        timeout = setTimeout(executor, wait);
    };
}

```
Now if you run the app, it will work like a charm, try below fiddle now.

# Final working sample.

<script async src="//jsfiddle.net/ipraveen/bhjd7cx5/embed/result/"></script>

## Final Code

<script async src="//jsfiddle.net/ipraveen/bhjd7cx5/embed/html/"></script>


Thank You!
That's all folk! let me know in the comment section if this article helped you.
