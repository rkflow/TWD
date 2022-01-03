exports.id = 754;
exports.ids = [754];
exports.modules = {

/***/ 6124:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7051);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2566);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





 // Determines if URL is internal or external

function isUrlInternal(link) {
  if (!link || link.indexOf(`https:`) === 0 || link.indexOf(`#`) === 0 || link.indexOf(`http`) === 0 || link.indexOf(`://`) === 0) {
    return false;
  }

  return true;
} // Replaces DOM nodes with React components


function replace(node) {
  const attribs = node.attribs || {}; // Replace links with Next links

  if (node.name === `a` && isUrlInternal(attribs.href)) {
    const {
      href,
      style
    } = attribs,
          props = _objectWithoutProperties(attribs, ["href", "style"]);

    if (props.class) {
      props.className = props.class;
      delete props.class;
    }

    if (!style) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
        href: href,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", _objectSpread(_objectSpread({}, props), {}, {
          children: !!node.children && !!node.children.length && (0,html_react_parser__WEBPACK_IMPORTED_MODULE_4__.domToReact)(node.children, parseOptions)
        }))
      });
    }

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
      href: href,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_StyledA, _objectSpread(_objectSpread({}, props), {}, {
        href: href,
        $_css: style,
        children: !!node.children && !!node.children.length && (0,html_react_parser__WEBPACK_IMPORTED_MODULE_4__.domToReact)(node.children, parseOptions)
      }))
    });
  } // Make Google Fonts scripts work


  if (node.name === `script`) {
    let content = lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(node, `children.0.data`, ``);

    if (content && content.trim().indexOf(`WebFont.load(`) === 0) {
      content = `setTimeout(function(){${content}}, 1)`;
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", _objectSpread(_objectSpread({}, attribs), {}, {
        dangerouslySetInnerHTML: {
          __html: content
        }
      }));
    }
  }
}

const parseOptions = {
  replace
};
function Home(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: html_react_parser__WEBPACK_IMPORTED_MODULE_4___default()(props.headContent, parseOptions)
    }), html_react_parser__WEBPACK_IMPORTED_MODULE_4___default()(props.bodyContent, parseOptions)]
  });
}
async function getStaticProps(ctx) {
  // Import modules in here that aren't needed in the component
  const cheerio = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 4359, 23));
  const axios = (await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 2376, 23))).default; // Use path to determine Webflow path

  let url = lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(ctx, `params.path`, []);
  console.log(url); // if(!!url[0]){
  //   url[0] = "landing-page"
  // }

  url = url.join(`/`);

  if (url.charAt(0) !== `/`) {
    url = `/${url}`;
  }

  const fetchUrl = process.env.WEBFLOW_URL + url; // Fetch HTML

  let res = await axios(fetchUrl).catch(err => {
    console.error(err);
  });
  const html = res.data; // Parse HTML with Cheerio

  const $ = cheerio.load(html); // Convert back to HTML strings

  const bodyContent = $(`body`).html();
  const headContent = $(`head`).html(); // Send HTML to component via props

  return {
    props: {
      bodyContent,
      headContent
    }
  };
}

var _StyledA = styled_components__WEBPACK_IMPORTED_MODULE_1___default()("a").withConfig({
  displayName: "pages___StyledA",
  componentId: "sc-8b4pbj-0"
})(["", ""], p => p.$_css);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;