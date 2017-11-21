# react-topbar-progress-indicator

[![Unix Build status](https://img.shields.io/travis/MoOx/react-topbar-progress-indicator/master.svg?branch=master&label=unix%20build)](https://travis-ci.org/MoOx/react-topbar-progress-indicator)
[![Code Coverage](https://img.shields.io/coveralls/MoOx/react-topbar-progress-indicator/master.svg)](https://coveralls.io/github/MoOx/react-topbar-progress-indicator)
[![Version](https://img.shields.io/npm/v/react-topbar-progress-indicator.svg)](https://github.com/MoOx/react-topbar-progress-indicator/blob/master/CHANGELOG.md)

> topbar progress indicator React component

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
$ npm install react-topbar-progress-indicator
```

## Usage

```js
import TopBarProgress from "react-topbar-progress-indicator"

TopBarProgress.config({
  barColors: {
    "0": "#fff",
    "1.0": "#fff",
  },
  shadowBlur: 5,
})

class ReactClass extends Component {

  // ...

  render() {
    return {
      {
        this.state.loading &&
        <TopBarProgress />
      }
    }
  }
}
```

### Config

Since ``topbar`` is a singleton, you should configure via ``Topbar.config()``.

#### ``barThickness`` (Integer, px)

The progress bar thickness in ``px`` (default: 3).

#### ``barColors`` (Object { progress: color })

Object of gradient color stops used to draw the progress bar.

Example:

```js
  barColors: {
    "0": "#f00",
    "0.5": "#0f0",
    "1.0": "#00f",
  },
```

#### ``shadowBlur``

Integer of the shadow blur in ``px`` (default: ``10``).

#### ``shadowColor``

String that represent the shadow color (hexa, default: ``#000``).

---

## CONTRIBUTING

* ⇄ Pull requests and ★ Stars are always welcome.
* For bugs and feature requests, please create an issue.
* Pull requests must be accompanied by passing automated tests (`$ npm test`).

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)
