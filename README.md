# Shopping Cart React App

The project is hosted at: [link](https://ammonite-test.herokuapp.com/).

## About the project

The project is a simple React app that displays a set of shopping items that can be added to a Shopping basket.
The user is able to increase/decrease the amount of items to purchase. (Number will not go below 0).

Implementhing the increment/decrement is fairly straightforward with `useState`, but I chose to use `useReducer` instead as a learning opportunity. It is advisable to use this method when the state depends on the previous one.

I've also included a very basic example of `useContext`.

## Ways to improve the project

1. Add a database that you can maintain PstgreSQL
2. Implement option to remove items from the shopping cart
3. Add authentification
4. Build payment system
