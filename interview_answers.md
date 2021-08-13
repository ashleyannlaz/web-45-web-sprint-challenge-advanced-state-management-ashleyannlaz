# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
    The context API was created to solve issues with sharing state down a component tree. Similar to Redux, the context API prevents prop drilling.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Reducer manipulates the data when it receives an action, action tells the reducer to manipulate the store data and store holds all the data your application uses. 

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
    Redux thunk allows you to return functions rather than just actions within redux.

4. What is your favorite state management system you've learned and this sprint? Please explain why!
    Redux, it makes the most sense to me and allows for managing state easily.