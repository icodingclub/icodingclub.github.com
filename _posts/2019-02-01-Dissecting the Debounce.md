---
layout: post
author: Praveen Singh
tags: javascript
title: Dissecting the Debounce
summary_card: Step by Step guide of Debounce in JavaScript
---


# What is a Debounce anyway?
Debounce is a pattern to limit the rate at which function can fire. It returns a function, which can only be triggered when there is a user-provided delay in its invocations. If the function is getting triggered continuously, without the delay, it will not be called.

## Variations
1. *Lazy*: function invocation happens on the trailing edge.
1. *Early*: function invocation happens on the leading edge.

## Advantages
1. Improve the performance by regulating the rate at which a function can be triggered.
1. Make your code more meaningful, by calling the handler only when we need for it.

## Conceptual Diagram
<img src="assets/post-images/debounce-architecure.png" alt="" />

## Case Study - Google autocomplete suggestions

<img src="assets/post-images/debounce-google.png" alt="" />


Google search is an interesting case of debounce pattern. If you are designing this page, you may want to consider the following

1. On every meaning full keyword, we want to provide autocomplete suggestions to the user.
1. Providing suggestions too early, maybe at every keypress, would be meaningless. Also, it will put unnecessary load on the server.
1. Providing it too late would defeat the purpose of autocomplete suggestions.

Debounce is a standard pattern to solve this kind of problem.

## Step by step guide for building a Debounce function.
> Note: if you are in a hurry, you can directly jump to the section "Final working sample." and copy the code :)
> Else, let's follow below step by step guide.

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

```csv
Hello Debounce! Time: 402.9799999552779
test.js:18 Hello Debounce! Time: 705.5549999931827
test.js:18 Hello Debounce! Time: 1200.894999958109

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

TODO

At this point, our debounce function is half complete and working for a few happy scenarios. To fix things further, and to understand the value of it, we have to add a little bit of complexity now.
Let's build a small App!… What it will do, you might ask?
Take user input.
Put through the debounce.
Use a "fake" XHR call, which pretends that it's processing the data on the server.
Put back the "processed text" on the view, at a delayed rate.

Starting code:



However, if you run your code now, you will get output like below
Can you notice "undefined"….try in below fiddle (play with it)



What's wrong here?…well, everything which can go wrong with this.We are losing the context. Let's try to fix that.

## Step 3: Fix the context

```js
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this;
        const executor = function() {
            timeout = null;
            func.apply(context);
        };
        clearTimeout(timeout);
        timeout = setTimeout(executor, wait);
    };
}


now the output is like below
Hurray!
No no….not so fast!….one more thing is pending. Can you see something odd in below section of code

```js
...
function handleInput() {
      doXhr(this.value).then(data => (output.innerHTML += `<li>${data}</li>`));
 }
...

```
Well, we are using this.value to get the entered text; nothing wrong in it, it's just we can also use event.target.value instead of that. let's do the change and see the output.
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
Final working sample.



Bonus: Early Debounce
Normally, in debounce we wait and then trigger the event. We do have a variant of debounce in which you first trigger and then wait for a fixed interval - it is called "Ealy Debounce".
This can be implemented as below with an optional argument.

```js
function debounce(func, wait = 500, early = false) {
    let timeout;
return function(...args) {
        const context = this;
        const isEarlyEnable = !timeout && early;
        const executor = function() {
            timeout = null;
            !early && func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(executor, wait);
        isEarlyEnable && func.apply(context, args);
    };
}

```


<iframe width="100%" height="300" src="//jsfiddle.net/ipraveen/bhjd7cx5/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


Thank You!
That's all folk! let me know in the comment section if this article helped you.




