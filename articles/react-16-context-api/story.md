
# React basic: How React 16 context API work?

We have been waiting for this...from very long. 
A experienced React developer might says, that we have context apis from long. In fact, it is available from very first version of React.
but that is an experimental version of API, something, very clearly warned by React online docs, can break your application.

However, finally we have a good news....React 16 context APIs are public and good for any application.


## What is React 16 context API and why should I care?

Context is designed to share data that can be considered “global” for a tree of React Components.
It sit next to React props and state.

In other words, Context provides a way to pass data through the component tree without having to pass props down manually at every level.

![react-context-data-flow.jpg] (https://raw.githubusercontent.com/icodingclub/icodingclub.github.com/master/articles/react-16-context-api/images/react-context-data-flow.jpg)

## Main api
### Step 1: Initialize context

```js
const Context = React.createContext('light');
```



### Step 2: Expose it via Context.Provide

```js
class TodoProvider extends React.Component {
  state = {todos: [...]};

  render() {
    return (
      <Context.Provider value={this.state.todos}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
```

### Initialize context

```js
class TodoList extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {todos => ....}
      </Context.Consumer>
    );
  }
}
```


### What we are building in this article?

We are building a Todo App
![react-context-data-flow.jpg] (https://raw.githubusercontent.com/icodingclub/icodingclub.github.com/master/articles/react-16-context-api/images/todo-app.jpg)


### High level code view of Todo App

We are building a todo app
![todo-app-context-architecure.jpg] (https://raw.githubusercontent.com/icodingclub/icodingclub.github.com/master/articles/react-16-context-api/images/todo-app-context-architecure.jpg)


### Let's dive to Demo

<a href="https://placeholder.com"><img src="https://via.placeholder.com/550x450"></a>


### Github code repo

<a href="https://github.com/ipraveen/react-16-context-poc"><img   height="120" width="120" src="https://raw.githubusercontent.com/icodingclub/icodingclub.github.com/master/resource/image/github.jpg"></a>


<!-- DO NOT COPY-->

<link rel="stylesheet" href="/dist/main.min.css">
<link rel="stylesheet" href="/articles/style/editor.css">
<script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?skin=sunburst'/>

