(function() {
var exports = {};
exports.id = 139;
exports.ids = [139,405];
exports.modules = {

/***/ 9117:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _path_; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* reexport */ pages.getStaticProps; }
});

;// CONCATENATED MODULE: external "sitemap-links"
var external_sitemap_links_namespaceObject = require("sitemap-links");;
var external_sitemap_links_default = /*#__PURE__*/__webpack_require__.n(external_sitemap_links_namespaceObject);
// EXTERNAL MODULE: ./pages/index.js
var pages = __webpack_require__(6124);
;// CONCATENATED MODULE: ./pages/[...path].js


/* harmony default export */ var _path_ = (pages.default);

async function getStaticPaths() {
  // Fetch links from Webflow sitemap
  const sitemapLink = process.env.WEBFLOW_URL + `/sitemap.xml`;
  const links = await external_sitemap_links_default()(sitemapLink).catch(err => {
    console.error(err);
  }); // Extract paths from absolute links

  const paths = [];

  for (let link of links) {
    let url = new URL(link);
    const path = url.pathname.replace(`/`, ``).split(`/`);
    if (!path.length || !path[0]) continue;
    paths.push({
      params: {
        path
      }
    });
  }

  return {
    paths: paths,
    fallback: `blocking`
  };
}

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 4359:
/***/ (function(module) {

"use strict";
module.exports = require("cheerio");;

/***/ }),

/***/ 7051:
/***/ (function(module) {

"use strict";
module.exports = require("html-react-parser");;

/***/ }),

/***/ 2566:
/***/ (function(module) {

"use strict";
module.exports = require("lodash/get");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 9914:
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,754], function() { return __webpack_exec__(9117); });
module.exports = __webpack_exports__;

})();