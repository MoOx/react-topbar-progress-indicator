/* @flow */

/* eslint-disable no-unused-vars */
// for React, since flow type is converted to props

import React, { Component } from "react"

// topbar require window, so here is an universal workaround
const topbar: Topbar = (
  typeof window === "undefined"
  ? {
    show: () => {},
    hide: () => {},
    config: () => {},
  }
  : require("topbar")
)

let semaphore: number = 0

type Props = {
  topbar?: Topbar,
}

const getTopBar = (props: Props): Topbar => {
  return props.topbar || topbar
}

class TopBar extends Component<void, Props, void> {
  props: Props;

  static config: Function = topbar.config;

  componentWillMount(): void {
    if (semaphore === 0) {
      getTopBar(this.props).show()
    }
    semaphore++
  }

  componentWillUnmount(): void {
    semaphore--
    if (semaphore === 0) {
      getTopBar(this.props).hide()
    }
  }

  render(): null {
    return null
  }
}

export default TopBar
