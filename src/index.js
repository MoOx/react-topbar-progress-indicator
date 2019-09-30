// @flow

var React = require("react");

// topbar require window, so here is an universal workaround
var topbar =
  typeof window === "undefined"
    ? {
        show: function() {},
        hide: function() {},
        config: function() {}
      }
    : require("topbar");

var semaphore /*: number*/ = 0;

/*::
type Props = {
  topbar?: typeof topbar
};
*/

var getTopBar = function(props /*: Props*/) /*: typeof topbar*/ {
  return props.topbar || topbar;
};

function TopBar(props /*: Props */) {
  React.useEffect(function() {
    if (semaphore === 0) {
      getTopBar(props).show();
    }
    semaphore++;

    return function() {
      semaphore--;
      if (semaphore === 0) {
        getTopBar(props).hide();
      }
    };
  }, []);

  return null;
}

TopBar.config = topbar.config;

module.exports = TopBar;
