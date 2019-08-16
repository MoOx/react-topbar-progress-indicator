const React = require("react");
const renderer = require("react-test-renderer");

const ReactTopBar = require("../index");

test("ReactTopBar can show topbar", () => {
  let count = 0;

  const topbar = {
    show() {
      count++;
    },
    hide() {}
  };

  let root;
  renderer.act(() => {
    root = renderer.create(
      React.createElement(ReactTopBar, { topbar: topbar })
    );
  });
  renderer.act(() => {
    root.unmount();
  });

  expect(count).toBe(1);
});

test("ReactTopBar can hide topbar", () => {
  let count = 0;

  const topbar = {
    show() {},
    hide() {
      count++;
    }
  };

  let root;
  renderer.act(() => {
    root = renderer.create(
      React.createElement(ReactTopBar, { topbar: topbar })
    );
  });
  renderer.act(() => {
    root.unmount();
  });

  expect(count).toBe(1);
});

test("ReactTopBar can show/hide topbar", () => {
  let count = 0;

  const topbar = {
    show() {
      count++;
    },
    hide() {
      count++;
    }
  };

  let root;
  renderer.act(() => {
    root = renderer.create(
      React.createElement(ReactTopBar, { topbar: topbar })
    );
  });
  renderer.act(() => {
    root.unmount();
  });

  expect(count).toBe(2);
});

test("ReactTopBar can show/hide topbar even with multiples call, but once", () => {
  let count = 0;

  const topbar = {
    show() {
      count++;
    },
    hide() {
      count++;
    }
  };

  let root;
  renderer.act(() => {
    root = renderer.create(
      React.createElement(ReactTopBar, { topbar: topbar })
    );
  });
  let root2;
  renderer.act(() => {
    root2 = renderer.create(
      React.createElement(ReactTopBar, { topbar: topbar })
    );
  });

  renderer.act(() => {
    root.unmount();
  });
  renderer.act(() => {
    root2.unmount();
  });

  expect(count).toBe(2);
});

test("ReactTopBar exposes topbar config function", () => {
  expect(typeof ReactTopBar.config).toBe("function");
});
