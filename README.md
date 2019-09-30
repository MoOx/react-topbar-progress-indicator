# react-topbar-progress-indicator

[![Build Status](https://github.com/MoOx/react-topbar-progress-indicator/workflows/Build/badge.svg)](https://github.com/MoOx/react-topbar-progress-indicator/actions)
[![Version](https://img.shields.io/npm/v/react-topbar-progress-indicator.svg)](https://github.com/MoOx/react-topbar-progress-indicator/blob/master/CHANGELOG.md)

> `topbar` progress indicator as a React component

Will simply `show()` and `hide()` [topbar](https://github.com/buunguyen/topbar)
when the component is respectively mounted and unmounted.

**Since topbar is a singleton, using `<TopBarProgress />` multiples times will
take this in consideration. This means that `hide()` will only be called when
all `<TopBarProgress />` have been unmounted.**

For example, if you render 2 `<TopBarProgress />` and unmount one (eg: you are doing 2
async things and only once is done), `hide()` won't be called.
You will need to have both instances unmounted.

## Installation

```console
npm install react-topbar-progress-indicator
## or
yarn add react-topbar-progress-indicator
```

## Usage

```js
import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
  barColors: {
    "0": "#fff",
    "1.0": "#fff"
  },
  shadowBlur: 5
});

const YourThing = () => {
  return <div>{this.state.loading && <TopBarProgress />}</div>;
};
```

### Config

Since `topbar` is a singleton, you should configure via `Topbar.config()`.

#### `barThickness` (Integer, px)

The progress bar thickness in `px` (default: 3).

#### `barColors` (Object { progress: color })

Object of gradient color stops used to draw the progress bar.

Example:

```js
  barColors: {
    "0": "#f00",
    "0.5": "#0f0",
    "1.0": "#00f",
  },
```

#### `shadowBlur`

Integer of the shadow blur in `px` (default: `10`).

#### `shadowColor`

String that represent the shadow color (hexa, default: `#000`).

---

## Changelog

Check the [changelog](./CHANGELOG.md) for more informations about recent
releases.
You might also find [releases notes on GitHub](https://github.com/MoOx/react-topbar-progress-indicator/releases).

## Contribute

_⇄ Pull requests and ★ Stars are always welcome._

Please read the [contribution guidelines](./CONTRIBUTING.md) before contributing.

## Code of Conduct

We want the community to be friendly and respectful to each other. Please read
[our full code of conduct](./CODE_OF_CONDUCT.md) so that you can understand what
actions will and will not be tolerated.

## License

[MIT](./LICENSE)
