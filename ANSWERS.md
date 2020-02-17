- [ ] Why would you use class component over function components (removing hooks from the question)?

Class components offered more functionality before hooks were introduced as they dealt with state. Theya re good for large scale applications, many companies still use them today.


- [ ] Name three lifecycle methods and their purposes.

-componentDidMount is invoked immediately after a component is mounted, is called only once. Good place to put our API calls in so it can fetch  data and set to state. Also the place to set up event listeners, setTimeout/setIntervals, subscriptions and any other async actions.

-componentDidUpdate() is invoked immediately after updating occurs, not called for the initial render. We are able to call setState but it must be wrapped in a condition. This function takes in 2 arguments: prevProps and prevState. Providues an opportunity to operate on the DOM when the component has been updated. 

-componentWillUnmount() is invoked immediately before a component is unmounted. In here we perform any cleanups, such as invalidating timers, canceling network requests, rid of event listeners, subscriptions (connected to live chat via web sockets).

- [ ] What is the purpose of a custom hook?


-They allow our code to be DRY, we can use this custom logic, mainly concerning state, of each individual hook to use throughout our components in our application. 

- [ ] Why is it important to test our apps?

-We are able to test our code through testing libraries, we are able to undertake unit testing which involve testing isolated functions (units) and testing components 
-Minimises the risk of bugs finding their way into production code
-Acts as a safety net when making changes or refactoring
-We have access to lots of assertions e.g if something is false, true, NaN, array contains an item.
