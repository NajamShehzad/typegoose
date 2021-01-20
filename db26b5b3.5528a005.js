(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{114:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return c})),o.d(t,"rightToc",(function(){return l})),o.d(t,"default",(function(){return p}));var n=o(3),r=o(7),a=(o(0),o(130)),i={id:"add-model-to-typegoose",title:"Add Model To Typegoose"},c={unversionedId:"api/functions/add-model-to-typegoose",id:"api/functions/add-model-to-typegoose",isDocsHomePage:!1,title:"Add Model To Typegoose",description:"addModelToTypegoose(model: mongoose.model, class) is used to get a model with TypeScript type information & to allow getClassForDocument to work.",source:"@site/../docs/api/functions/addModelToTypegoose.md",slug:"/api/functions/add-model-to-typegoose",permalink:"/typegoose/docs/api/functions/add-model-to-typegoose",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/api/functions/addModelToTypegoose.md",version:"current",sidebar:"docs",previous:{title:"Get Discriminator Model For Class",permalink:"/typegoose/docs/api/functions/get-discriminator-model-for-class"},next:{title:"Delete Models",permalink:"/typegoose/docs/api/functions/delete-model"}},l=[{value:"Example",id:"example",children:[]}],s={rightToc:l};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"addModelToTypegoose(model: mongoose.model<any>, class)")," is used to get a model with TypeScript type information & to allow ",Object(a.b)("inlineCode",{parentName:"p"},"getClassForDocument")," to work.\nThis function is mainly used after ",Object(a.b)("inlineCode",{parentName:"p"},"buildSchema")," to add a modified model to Typegoose and still be able to get type information from the Typegoose class."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"class Kitten {\n  @prop()\n  public name?: string;\n}\n\nconst kittenSchema = buildSchema(Kitten);\nconst KittenModel = addModelToTypegoose(mongoose.model('Kitten', kittenSchema), Kitten);\n// \"KittenModel\" is now a valid Typegoose model\n")))}p.isMDXComponent=!0},130:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return f}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(o),m=n,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return o?r.a.createElement(f,c(c({ref:t},s),{},{components:o})):r.a.createElement(f,c({ref:t},s))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=o[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"}}]);