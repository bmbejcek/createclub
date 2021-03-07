const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/brett/repos/createclub/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/brett/repos/createclub/src/pages/404.js"))),
  "component---src-pages-get-inspired-js": hot(preferDefault(require("/Users/brett/repos/createclub/src/pages/get-inspired.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/brett/repos/createclub/src/pages/index.js"))),
  "component---src-pages-reroll-js": hot(preferDefault(require("/Users/brett/repos/createclub/src/pages/reroll.js")))
}

