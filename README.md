# react-topbar-progress-indicator

[![Unix Build status](https://img.shields.io/travis/MoOx/react-topbar-progress-indicator/master.svg?branch=master&label=unix%20build)](https://travis-ci.org/MoOx/react-topbar-progress-indicator)
[![Code Coverage](https://img.shields.io/coveralls/MoOx/react-topbar-progress-indicator/master.svg)](https://coveralls.io/github/MoOx/react-topbar-progress-indicator)
[![Version](https://img.shields.io/npm/v/react-topbar-progress-indicator.svg)](https://github.com/MoOx/react-topbar-progress-indicator/blob/master/CHANGELOG.md)
[![Support on gitter chat](https://img.shields.io/badge/support-gitter%20chat-E40255.svg)](https://gitter.im/MoOx/react-topbar-progress-indicator)

> topbar React component

Will simply `show()` and `hide()` [topbar](https://github.com/buunguyen/topbar)
when the component is respectively mounted and unmounted.

**Since topbar is a singleton, using `<TopBar />` multiples times will
take this in consideration. This means that `hide()` will only be called when
all `<TopBar />` have been unmounted.**

For example, if you render 2 `<TopBar />` and unmount one (eg: you are doing 2
async things and only once is done), `hide()` won't be called.
You will need to have both instances unmounted.

## Installation

```console
$ npm install react-topbar-progress-indicator
```

## Usage

```js
import TopBar from "react-topbar-progress-indicator"


class ReactClass extends Component {

  // ...

  render() {
    return {
      {
        this.state.loading &&
        <TopBar />
      }
    }
  }
}
```

---

## CONTRIBUTING

* ⇄ Pull requests and ★ Stars are always welcome.
* For bugs and feature requests, please create an issue.
* Pull requests must be accompanied by passing automated tests (`$ npm test`).

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)
