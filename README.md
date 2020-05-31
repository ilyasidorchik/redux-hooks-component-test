# Test of a component with Redux Hooks

I tested the [`Counter`](https://github.com/ilyasidorchik/redux-hooks-component-test/blob/master/src/components/Counter/Counter.test.js) component that used Redux Hooks: `useSelector` and `useDispatch`. I made it by rendering with a Provider. My example is based on the recipe from React Testing Library.

## Manual

`yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Motivation

Hooks API is a modern thing in React world. When I worked with Redux state container I wanted to use new Hooks, too. Unfortunately, I did’t understand how to test such a component.


## Process

Before Hooks era I used to divide components into two parts: dump and connected — and test the former. It was advice from Redux documentation. Now I can’t work the same way because React Redux Hooks API is strongly coupling with Redux store implementation logic.

I faced the following errors. I got rid of them away by stubbing. However, it was an awkward testing so I needed better solution.
```
TypeError: (0, _reactRedux.useSelector) is not a function

TypeError: (0 , _reactRedux.useDispatch) is not a function

could not find react-redux context value; please ensure the component is wrapped in a <Provider>
```

I was thinking of giving up and returning to the old method, but I tried to consult with experienced developers. One of them, a Redux contributor Nick McCurdy, answered that the hooks were recommended and made things like typechecking much easier. Also he suggested a test by rendering with a Provider.

I kept walking in that direction. I found the special recipe in React Testing Library and created my current repository.


## Plans

Perhaps I’ll add Sagas and Typescript to my example.


## Sources

[Docs about Redux Hooks](https://react-redux.js.org/next/api/hooks)<br />
[React Redux Test Recipe](https://testing-library.com/docs/example-react-redux)<br/>
[Lecture ’Hooks, HOCS, and Tradeoffs’](https://youtu.be/xiKMbmDv-Vw?t=1191)
