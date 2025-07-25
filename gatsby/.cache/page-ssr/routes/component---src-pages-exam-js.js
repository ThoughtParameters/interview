"use strict";
exports.id = 690;
exports.ids = [690];
exports.modules = {

/***/ 2529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(826);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7076);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2659);
const PrivateRoute=({component:Component,location,...rest})=>{const{user,loading}=(0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__/* .useAuth */ .a)();if(loading){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,"Loading...");// Or a spinner component
}if(!user){// If we’re not on the client side, don’t redirect
if(typeof window!=='undefined'){(0,gatsby__WEBPACK_IMPORTED_MODULE_1__.navigate)('/login');}return null;}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component,rest);};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrivateRoute);

/***/ }),

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

/***/ 5649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(826);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6300);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1707);
/* harmony import */ var _components_PrivateRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2529);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7896);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2659);
/* harmony import */ var _utils_supabase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7711);
/* provided dependency */ var fetch = __webpack_require__(1515);
const ExamContent=({exam_slug})=>{const{user}=(0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__/* .useAuth */ .a)();const{0:exam,1:setExam}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);const{0:questions,1:setQuestions}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);const{0:answers,1:setAnswers}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});const{0:loading,1:setLoading}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);const{0:error,1:setError}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');const{0:startTime,1:setStartTime}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);const{0:time,1:setTime}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);const timerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const fetchExamAndQuestions=async()=>{try{const supabase=(0,_utils_supabase__WEBPACK_IMPORTED_MODULE_6__/* .getSupabase */ .S)();// Fetch exam details to get the ID
const{data:examData,error:examError}=await supabase.from('exams').select('id, name').eq('slug',exam_slug).single();if(examError)throw examError;setExam(examData);// Fetch questions
const response=await fetch(`https://interviewapi.thoughtparameters.com/questions/${exam_slug}`);if(!response.ok)throw new Error('Failed to fetch questions');const questionsData=await response.json();setQuestions(questionsData);setStartTime(Date.now());}catch(err){setError(err.message);}finally{setLoading(false);}};fetchExamAndQuestions();},[exam_slug]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(startTime){timerRef.current=setInterval(()=>{setTime(Math.floor((Date.now()-startTime)/1000));},1000);}return()=>clearInterval(timerRef.current);},[startTime]);const handleAnswerChange=(questionId,answerId)=>{setAnswers({...answers,[questionId]:answerId});};const handleSubmit=async e=>{e.preventDefault();clearInterval(timerRef.current);const duration_seconds=Math.floor((Date.now()-startTime)/1000);const submission={exam_id:exam.id,answers:Object.entries(answers).map(([question_id,answer_id])=>({question_id,answer_id})),duration_seconds};try{const supabase=(0,_utils_supabase__WEBPACK_IMPORTED_MODULE_6__/* .getSupabase */ .S)();const{data:session,error:sessionError}=await supabase.auth.getSession();if(sessionError)throw sessionError;const response=await fetch('https://interviewapi.thoughtparameters.com/submit-exam',{method:'POST',headers:{'Content-Type':'application/json',Authorization:`Bearer ${session.session.access_token}`},body:JSON.stringify(submission)});if(!response.ok)throw new Error('Failed to submit exam');const result=await response.json();(0,_reach_router__WEBPACK_IMPORTED_MODULE_4__.navigate)('/exam-results',{state:result});}catch(err){setError(err.message);}};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_seo__WEBPACK_IMPORTED_MODULE_2__/* .SEO */ .H,{title:`Exam: ${(exam===null||exam===void 0?void 0:exam.name)||exam_slug}`}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1",{className:"text-3xl font-bold mb-4"},"Certification Exam: ",(exam===null||exam===void 0?void 0:exam.name)||exam_slug),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"fixed top-4 right-4 bg-gray-800 p-2 rounded"},"Time: ",new Date(time*1000).toISOString().substr(11,8)),loading&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,"Loading questions..."),error&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"text-red-500"},error),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form",{onSubmit:handleSubmit},questions.map(q=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{key:q.id,className:"mb-8"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"font-bold"},q.question_text),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"mt-2 space-y-2"},q.answers.map(a=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label",{key:a.id,className:"flex items-center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",{type:"radio",name:q.id,value:a.id,onChange:()=>handleAnswerChange(q.id,a.id),className:"mr-2"}),a.answer_text))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{type:"submit",className:"w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"},"Submit Exam")));};const ExamPage=()=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_reach_router__WEBPACK_IMPORTED_MODULE_4__.Router,{basepath:"/exam"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PrivateRoute__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{component:ExamContent,path:"/:exam_slug"})));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExamPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-exam-js.js.map