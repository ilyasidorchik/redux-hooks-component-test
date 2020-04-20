# Test of a component with Redux Hooks

I faced the question of how to test component that used Redux Hooks. To deal with it I extended recipe from React Testing Library.

As I understand after one Redux contributor lecture, there are two ways for component with Redux: unit test unconnected one or integration test connected component by rendering with a Provider. Another Redux contributor Nick McCurdy said that hooks were recommended and made things like typechecking much easier, so I chose the second way.

Perhaps I’ll add Sagas and Typescript to my example.

<br />

`yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

<br />

[RTL. React Redux Recipe](https://testing-library.com/docs/example-react-redux)
[Mark Erikson lecture](https://youtu.be/xiKMbmDv-Vw?t=1191)
