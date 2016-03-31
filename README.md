# react-topbar

[![Unix Build status](https://img.shields.io/travis/MoOx/react-topbar/master.svg?branch=master&label=unix%20build)](https://travis-ci.org/MoOx/react-topbar)
[![Code Coverage](https://img.shields.io/coveralls/MoOx/react-topbar/master.svg)](https://coveralls.io/github/MoOx/react-topbar)
[![Version](https://img.shields.io/npm/v/react-topbar.svg)](https://github.com/MoOx/react-topbar/blob/master/CHANGELOG.md)
[![Support on gitter chat](https://img.shields.io/badge/support-gitter%20chat-E40255.svg)](https://gitter.im/MoOx/react-topbar)

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
$ npm install react-topbar
```

## Usage

```js
import TopBar from "react-topbar"


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
