# tinder-react-clone

- This is app only for learning React and it's basics. Let's learn it's basics now.

To Create a react app do :

```
npx create-react-app tinder
cd tinder
npm start
```

Once the application has been created. Look inside the src folder.

The App.js contains the code for the first page.
Now in React we build components that can be reused.
So, for the begining we are defining a Header component.

## Icons and Stuff

Here we are using Material UI and install the following pages:

> The syntax might change with versions so check as of 16th May, 2022 they are

```
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
```

For the implementation refer to the code

> PRO TIP: Use `const` most of the time. If you need to change the variable, console will give you error and then define it as `let`

## Routing in React

In order to make everything in React enabled to route we need to import something known as the React Router. To install it run:

```
npm i react-router-dom
```

- Firebase can be used to optimize images // Need to look into it

> Common Mistake: Keep the default root at the bottom, because JS compiles sequentially and hence it will always show the homepage.

## React Tinder Cards

Apparently someone built a npm package known as `react-tinder-cards`. Why not use it then and carry on :p. To install do the following, however, google and check accordingly as the version might get updated.

```
npm i react-tinder-card@5.3.1
```

> Here used specific version because it was giving errors

> Note: Always use `keys` in React because it makes your app fast. Allows Re-ender a list efficiently a list.


# Building the backend of the Application in Node

To use the functionalities of ES6 we need to write the following in the `package.json` of the tinder backend