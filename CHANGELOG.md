# Changelog of `react-topbar-progress-indicator`

## 4.1.1 - 2022-03-07

- Fix TypeScript declaration: Remove unnecessary generic args [#28](https://github.com/MoOx/react-topbar-progress-indicator/pull/28) by [@lpsinger](https://github.com/lpsinger)

## 4.1.0 - 2020-01-31

- Add Typescript declaration [#10](https://github.com/MoOx/react-topbar-progress-indicator/pull/10) by @komsitr

## 4.0.2 - 2019-09-30

- Fix: avoid arrow function to improve browser compatibility

## 4.0.1 - 2019-08-16

- Fix: use var instead of const/let for compatibility as this module is not transpiled

## 4.0.0 - 2019-08-16

- Switch from a React class to a function with `useEffect()` (require React 16.8)

### Internal

- No more babel, just vanilla JS (typed with flow annotations in comments)

## 3.0.0 - 2019-08-16

- React 16.9.0 compat (replace `componentWillMount` by `componentDidMount`) [#5](https://github.com/MoOx/react-topbar-progress-indicator/issues/5)

### Internal

- Test on node 8 & 10
- Babel 6 -> 7
- Test ava -> jest
- Removed eslint & nyc on the codebase (unecessary considering the non complexity of the code of this component)
- Added prettier

## 2.0.0 - 2016-04-01

- react 16 compat
- update props type via babel-plugin-flow-react-proptypes
- use of babel-preset-env for transpilation instead of es2015

## 1.0.0 - 2016-04-01

✨ Initial release
