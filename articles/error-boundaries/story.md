
# React basic: How React 16 error boundaries works?

Ever wonder, How to catch an error from a render method of a React component and handle it to display it? I am sure, you will not able to come with any elegant way to do so.

But not with React 16.

React 16 introduce a standard way to handle error in a React component or a React component tree.

Say hello to error boundaries.

> Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors and display a fallback UI instead

## How it works?

React error boundaries is the way to handle errors in React component, not in general javascript. So it does few things and give a pass to others.

<table class="view-table">
   <thead>
      <tr>
         <th>Handles</th>
         <th>Skip</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>
            <ul>
               <li>errors during rendering</li>
               <li>errors in lifecycle methods</li>
               <li>errors in constructors of the whole tree below them (not the constructor of the component itself</li>
            </ul>
         </td>
         <td>
            <ul>
               <li>errors Event handlers</li>
               <li>errors in Asynchronous code (e.g. setTimeout)</li>
               <li>Errors thrown in the error boundary itself (rather than its children)</li>
            </ul>
         </td>
      </tr>
   </tbody>
</table>

## Main api

```js

class ListController extends React.Component {
   
   //Lifecycle method for error boundary
   componentDidCatch(error, errorInfo) {
       this.setState({ hasError: true, errorInfo });
   }

   render() {
       const { todos, hasError, errorInfo } = this.state;
       if (hasError === true) {
           return (<ErrorBanner errorInfo={errorInfo}/>)
       }

       return (
           <div className="todo-app">
               <h1>List</h1>
               <List todos={todos} />
           </div>
       );
   }
}

```
### Let's dive to Demo

<a href="https://placeholder.com"><img src="https://via.placeholder.com/550x450"></a>


<!-- COPY ABOVE CODE-->
<!-- COPY ABOVE CODE-->
<!-- COPY ABOVE CODE-->

<link rel="stylesheet" href="/dist/main.min.css">
<link rel="stylesheet" href="/articles/style/editor.css">
<script src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?skin=sunburst'/>

