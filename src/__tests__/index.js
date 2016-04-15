import test from "ava"

import React from "react"
import { createRenderer } from "react-addons-test-utils"

import ReactTopBar from "../index"

test("ReactTopBar can show topbar", (t) => {
  t.plan(1)

  const topbar = {
    show() {
      t.pass()
    },
    hide() {},
  }

  const renderer = createRenderer()
  renderer.render(<ReactTopBar topbar={ topbar } />)
  renderer.getRenderOutput()
  renderer.unmount()
})

test("ReactTopBar can hide topbar", (t) => {
  t.plan(1)

  const topbar = {
    show() {},
    hide() {
      t.pass()
    },
  }

  const renderer = createRenderer()
  renderer.render(<ReactTopBar topbar={ topbar } />)
  renderer.getRenderOutput()
  renderer.unmount()
})

test("ReactTopBar can show/hide topbar", (t) => {
  t.plan(2)

  const topbar = {
    show() {
      t.pass()
    },
    hide() {
      t.pass()
    },
  }

  const renderer = createRenderer()
  renderer.render(<ReactTopBar topbar={ topbar } />)
  renderer.getRenderOutput()
  renderer.unmount()
})

test("ReactTopBar can show/hide topbar even with multiples call, but once",
(t) => {
  t.plan(2)

  const topbar = {
    show() {
      t.pass()
    },
    hide() {
      t.pass()
    },
  }

  const renderer = createRenderer()
  renderer.render(<ReactTopBar topbar={ topbar } />)
  renderer.getRenderOutput()
  const renderer2 = createRenderer()
  renderer2.render(<ReactTopBar topbar={ topbar } />)
  renderer2.getRenderOutput()

  renderer.unmount()
  renderer2.unmount()
})

test("ReactTopBar exposes topbar config function",
(t) => {
  t.is(
    typeof ReactTopBar.config,
    "function"
  )
})
