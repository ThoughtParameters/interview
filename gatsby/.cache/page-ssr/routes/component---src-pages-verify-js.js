"use strict";
exports.id = 96;
exports.ids = [96];
exports.modules = {

/***/ 6300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "/Users/jasonmiller/GitHub/ThoughtParameters/interview/gatsby/node_modules/react/index.js"
var index_js_ = __webpack_require__(826);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
// EXTERNAL MODULE: ./src/context/AuthContext.js
var AuthContext = __webpack_require__(2659);
;// CONCATENATED MODULE: ./src/components/header.js
const Header=()=>{const{user,signOut}=(0,AuthContext/* useAuth */.a)();return/*#__PURE__*/index_js_default().createElement("header",{className:"bg-gray-800 mb-6"},/*#__PURE__*/index_js_default().createElement("div",{className:"container mx-auto px-6 py-4 flex justify-between items-center"},/*#__PURE__*/index_js_default().createElement("h1",{className:"text-2xl font-bold text-white"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/",className:"text-white no-underline"},"Thought Parameters")),/*#__PURE__*/index_js_default().createElement("nav",null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/blog",className:"text-white ml-5 no-underline"},"Blog"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/learn",className:"text-white ml-5 no-underline"},"Learn"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/exams",className:"text-white ml-5 no-underline"},"Exams"),user?/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/profile",className:"text-white ml-5 no-underline"},"Profile"),/*#__PURE__*/index_js_default().createElement("button",{onClick:signOut,className:"text-white ml-5 no-underline bg-transparent border-none cursor-pointer"},"Logout")):/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/login",className:"text-white ml-5 no-underline"},"Login"))));};/* harmony default export */ const header = (Header);
// EXTERNAL MODULE: ./node_modules/react-cookie-consent/dist/react-cookie-consent.esm.js
var react_cookie_consent_esm = __webpack_require__(143);
;// CONCATENATED MODULE: ./src/components/cookie-consent.js
const CookieConsentBanner=()=>{return/*#__PURE__*/index_js_default().createElement(react_cookie_consent_esm/* default */.ZP,{location:"bottom",buttonText:"Accept",cookieName:"gatsby-gdpr-google-analytics",style:{background:'#2B373B'},buttonStyle:{color:'#4e503b',fontSize:'13px'},expires:150},"This website uses cookies to enhance the user experience.");};/* harmony default export */ const cookie_consent = (CookieConsentBanner);
;// CONCATENATED MODULE: ./src/components/layout.js
const Layout=({children})=>{return/*#__PURE__*/index_js_default().createElement("div",{className:"bg-gray-900 text-white min-h-screen"},/*#__PURE__*/index_js_default().createElement(header,null),/*#__PURE__*/index_js_default().createElement("main",{className:"container mx-auto px-6 py-8"},children),/*#__PURE__*/index_js_default().createElement(cookie_consent,null));};/* harmony default export */ const layout = (Layout);

/***/ }),

/***/ 1707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  H: () => (/* binding */ SEO)
});

// EXTERNAL MODULE: external "/Users/jasonmiller/GitHub/ThoughtParameters/interview/gatsby/node_modules/react/index.js"
var index_js_ = __webpack_require__(826);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
;// CONCATENATED MODULE: ./src/hooks/use-site-metadata.js
const useSiteMetadata=()=>{const data=(0,gatsby_browser_entry.useStaticQuery)("1865044719");return data.site.siteMetadata;};
;// CONCATENATED MODULE: ./src/components/seo.js
const SEO=({title,description,pathname,children})=>{const{title:defaultTitle,description:defaultDescription,image,siteUrl,twitterUsername}=useSiteMetadata();const seo={title:title||defaultTitle,description:description||defaultDescription,image:`${siteUrl}${image}`,url:`${siteUrl}${pathname||``}`,twitterUsername};return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement("title",null,seo.title),/*#__PURE__*/index_js_default().createElement("meta",{name:"description",content:seo.description}),/*#__PURE__*/index_js_default().createElement("meta",{name:"image",content:seo.image}),/*#__PURE__*/index_js_default().createElement("meta",{name:"twitter:card",content:"summary_large_image"}),/*#__PURE__*/index_js_default().createElement("meta",{name:"twitter:title",content:seo.title}),/*#__PURE__*/index_js_default().createElement("meta",{name:"twitter:url",content:seo.url}),/*#__PURE__*/index_js_default().createElement("meta",{name:"twitter:description",content:seo.description}),/*#__PURE__*/index_js_default().createElement("meta",{name:"twitter:image",content:seo.image}),/*#__PURE__*/index_js_default().createElement("meta",{name:"twitter:creator",content:seo.twitterUsername}),/*#__PURE__*/index_js_default().createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>\uD83D\uDC64</text></svg>"}),children);};

/***/ }),

/***/ 4945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(826);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6300);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1707);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7896);
/* provided dependency */ var fetch = __webpack_require__(1515);
const VerificationContent=({verification_id})=>{const{0:verificationData,1:setVerificationData}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);const{0:loading,1:setLoading}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);const{0:error,1:setError}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const fetchVerificationData=async()=>{try{const response=await fetch(`https://interviewapi.thoughtparameters.com/verify/${verification_id}`);if(!response.ok){throw new Error('Verification not found');}const data=await response.json();setVerificationData(data);}catch(err){setError(err.message);}finally{setLoading(false);}};if(verification_id){fetchVerificationData();}},[verification_id]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,loading&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,"Loading..."),error&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"text-red-500"},error),verificationData&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"bg-gray-800 p-6 rounded-lg"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2",{className:"text-2xl font-bold mb-2"},verificationData.full_name),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong",null,"Exam:")," ",verificationData.exam_type),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong",null,"Date Completed:"),' ',new Date(verificationData.completed_at).toLocaleDateString()),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong",null,"Status:")," ",verificationData.passed?'Passed':'Failed')));};const VerificationPage=()=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_seo__WEBPACK_IMPORTED_MODULE_2__/* .SEO */ .H,{title:"Verify Certification"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1",{className:"text-3xl font-bold mb-4"},"Certification Verification"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_reach_router__WEBPACK_IMPORTED_MODULE_3__.Router,{basepath:"/verify"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(VerificationContent,{path:"/:verification_id"})));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VerificationPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-verify-js.js.map