/* @flow */

/* eslint-disable no-unused-vars */
// for React, since flow type is converted to props

import React, { Component } from "react"

let semaphore: number = 0

type Props = {
  topbar?: topbar,
}

const getTopBar = (props: Props): topbar => {
  return props.topbar || require("topbar")
}

class TopBar extends Component<void, Props, void> {
  props: Props;

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
