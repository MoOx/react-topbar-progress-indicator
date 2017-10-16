// @flow

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

class TopBar extends Component<Props> {
  props: Props;

  static config = topbar.config;

  componentWillMount() {
    if (semaphore === 0) {
      getTopBar(this.props).show()
    }
    semaphore++
  }

  componentWillUnmount() {
    semaphore--
    if (semaphore === 0) {
      getTopBar(this.props).hide()
    }
  }

  render() {
    return null
  }
}

export default TopBar
