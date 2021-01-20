(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{118:function(e,n,o){"use strict";o.r(n),o.d(n,"frontMatter",(function(){return r})),o.d(n,"metadata",(function(){return l})),o.d(n,"rightToc",(function(){return i})),o.d(n,"default",(function(){return p}));var t=o(3),a=o(7),s=(o(0),o(130)),r={id:"common-plugins",title:"Common Plugins"},l={unversionedId:"guides/advanced/common-plugins",id:"guides/advanced/common-plugins",isDocsHomePage:!1,title:"Common Plugins",description:"Typegoose supports mongoose plugins. Here's how to use some common plugins:",source:"@site/../docs/guides/advanced/common-plugins.md",slug:"/guides/advanced/common-plugins",permalink:"/typegoose/docs/guides/advanced/common-plugins",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/advanced/common-plugins.md",version:"current",sidebar:"guides",previous:{title:"Reference other Classes",permalink:"/typegoose/docs/guides/advanced/reference-other-classes"},next:{title:"Change _id Type",permalink:"/typegoose/docs/guides/advanced/change-id-type"}},i=[{value:"mongoose-autopopulate",id:"mongoose-autopopulate",children:[]},{value:"mongoose-findorcreate",id:"mongoose-findorcreate",children:[]},{value:"mongoose-sequence",id:"mongoose-sequence",children:[]},{value:"@typegoose/auto-increment",id:"typegooseauto-increment",children:[{value:"AutoIncrementSimple",id:"autoincrementsimple",children:[]},{value:"AutoIncrementID",id:"autoincrementid",children:[]}]}],c={rightToc:i};function p(e){var n=e.components,o=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(t.a)({},c,o,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Typegoose supports mongoose plugins. Here's how to use some common plugins:"),Object(s.b)("h2",{id:"mongoose-autopopulate"},"mongoose-autopopulate"),Object(s.b)("p",null,"Typegoose has the prop option ",Object(s.b)("inlineCode",{parentName:"p"},"autopopulate")," implemented, but it only has an effect if ",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/mongodb-js/mongoose-autopopulate"}),Object(s.b)("inlineCode",{parentName:"a"},"mongoose-autopopulate"))," is installed and used too."),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-ts"}),"import * as mongoose from 'mongoose';\nimport * as autopopulate from 'mongoose-autopopulate';\nimport { plugin, prop, Ref, getModelForClass } from '@typegoose/typegoose';\n\n@plugin(autopopulate as any) // this is an dirty fix, because the types of this plugin dont work\nclass SomeClass {\n  @prop({ autopopulate: true, ref: 'SomeReferencedClass' })\n  public populateField: Ref<SomeReferencedClass>;\n}\n\nclass SomeReferencedClass {}\n\nconst SomeClassModel = getModelForClass(SomeClass);\nconst SomeReferencedClassModel = getModelForClass(SomeReferencedClass);\n\n(async () => {\n  await mongoose.connect(`mongodb://localhost:27017/`, { useNewUrlParser: true, dbName: 'guides', useUnifiedTopology: true });\n\n  const reference = await SomeReferencedClassModel.create({});\n  const { _id: id } = await SomeClassModel.create({ populateField: reference } as SomeClass);\n\n  console.log(await SomeClassModel.findById(id).exec()); // output will be populated\n\n  await mongoose.disconnect();\n})();\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Note:")," If you have a ",Object(s.b)("inlineCode",{parentName:"p"},"ref")," which refers back to its own class/model, like having a User class with a ",Object(s.b)("inlineCode",{parentName:"p"},"createdBy")," field referring\nback to User, then you'll need to set the ",Object(s.b)("inlineCode",{parentName:"p"},"maxDepth")," prop of ",Object(s.b)("inlineCode",{parentName:"p"},"autocomplete")," to 1. If you don't do this, Mongoose will do recursive calls to\nthe user collection 10 times, extremely delaying the output of the query. Below is an example of how to set ",Object(s.b)("inlineCode",{parentName:"p"},"maxDepth"),"."),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-ts"}),'// the types of "autopopulate" may change depending on the tsconfig option "esModuleInterop"\n@plugin(autopopulate as any) // this is a dirty fix, because the types of this plugin dont work\nclass SomeClass {\n  @prop({ autopopulate: { maxDepth: 1 }, ref: \'SomeReferencedClass\' })\n  public populateField: Ref<SomeReferencedClass>;\n}\n')),Object(s.b)("h2",{id:"mongoose-findorcreate"},"mongoose-findorcreate"),Object(s.b)("p",null,"Typegoose has a default class for ",Object(s.b)("inlineCode",{parentName:"p"},"mongoose-findorcreate")," that has all the types it needs. Here's how to use it:"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-ts"}),"import { DocumentType, getModelForClass, plugin, prop, defaultClasses } from '@typegoose/typegoose';\nimport * as mongoose from 'mongoose';\nimport * as findorcreate from 'mongoose-findorcreate';\n\n@plugin(findorcreate)\nclass SomeClass extends defaultClasses.FindOrCreate {\n  @prop()\n  public someField!: string;\n}\n\nconst SomeClassModel = getModelForClass(SomeClass);\n\n(async () => {\n  await mongoose.connect(`mongodb://localhost:27017/`, { useNewUrlParser: true, dbName: 'guides' });\n\n  console.log(await SomeClassModel.findOrCreate({ someField: 'Hello' }));\n  console.log(await SomeClassModel.findOrCreate({ someField: 'Hello' })); // both will give the same output\n\n  await mongoose.disconnect();\n})();\n")),Object(s.b)("h2",{id:"mongoose-sequence"},"mongoose-sequence"),Object(s.b)("p",null,"To use ",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/ramiel/mongoose-sequence"}),"mongoose-sequence"),", import the plugin and use it like this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-ts"}),"import AutoIncrementFactory from 'mongoose-sequence';\n\n// AutoIncrement now is the instance\nconst AutoIncrement = AutoIncrementFactory(mongoose);\n\n@plugin(AutoIncrement, { inc_field: '_id', start_seq: 200 })\nclass SomeClass extends defaultClasses.Base<number> {\n  @prop()\n  public _id: number;\n}\n\n// The Plugin options can be applied too\n\n@plugin<mongoose.SequenceOptions>(AutoIncrement, { inc_field: '_id' }) // Note: \"start_seq\" is not in the \"SequenceOptions\" type\nclass SomeClass extends defaultClasses.Base<number> {\n  @prop()\n  public _id!: number;\n}\n")),Object(s.b)("p",null,"For more details, see ",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/ramiel/mongoose-sequence/issues/83"}),"this issue"),"."),Object(s.b)("h2",{id:"typegooseauto-increment"},"@typegoose/auto-increment"),Object(s.b)("p",null,"The Typegoose project provides an ",Object(s.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/typegoose/auto-increment"}),Object(s.b)("inlineCode",{parentName:"a"},"auto-increment")," plugin")," for Mongoose. Here is how to use it:"),Object(s.b)("h3",{id:"autoincrementsimple"},"AutoIncrementSimple"),Object(s.b)("p",null,"Always increments the field on each save"),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-ts"}),"@plugin(AutoIncrementSimple, [{ field: 'someIncrementedField' }])\nclass SomeClass {\n  @prop() // does not need to be empty\n  public someIncrementedField: number;\n}\n\nconst SomeModel = getModelForClass(SomeClass);\n\nconst doc = await SomeModel.create({ someIncrementedField: 10 });\n\nawait doc.save(); // someIncrementedField will be 11\n")),Object(s.b)("h3",{id:"autoincrementid"},"AutoIncrementID"),Object(s.b)("p",null,"Only increases the field if the document is ",Object(s.b)("em",{parentName:"p"},"new")," and the counter is stored in a counter-collection (default field: ",Object(s.b)("inlineCode",{parentName:"p"},"_id"),")."),Object(s.b)("pre",null,Object(s.b)("code",Object(t.a)({parentName:"pre"},{className:"language-ts"}),"@plugin(AutoIncrementID, {})\nclass SomeClass {\n  @prop()\n  public _id: number;\n\n  @prop() // does not need to be empty\n  public someIncrementedField: number;\n}\n\nconst SomeModel = getModelForClass(SomeClass);\n\nconst doc = await SomeModel.create({ someIncrementedField: 10 }); // _id will be 1\n")),Object(s.b)("hr",null),Object(s.b)("p",null,"Please note that some or all of the listed plugins might not have a ",Object(s.b)("inlineCode",{parentName:"p"},"@types")," package, so you mostly have to declare it as a model."))}p.isMDXComponent=!0},130:function(e,n,o){"use strict";o.d(n,"a",(function(){return u})),o.d(n,"b",(function(){return b}));var t=o(0),a=o.n(t);function s(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function l(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){s(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function i(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)o=s[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)o=s[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=a.a.createContext({}),p=function(e){var n=a.a.useContext(c),o=n;return e&&(o="function"==typeof e?e(n):l(l({},n),e)),o},u=function(e){var n=p(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var o=e.components,t=e.mdxType,s=e.originalType,r=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(o),d=t,b=u["".concat(r,".").concat(d)]||u[d]||m[d]||s;return o?a.a.createElement(b,l(l({ref:n},c),{},{components:o})):a.a.createElement(b,l({ref:n},c))}));function b(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var s=o.length,r=new Array(s);r[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:t,r[1]=l;for(var c=2;c<s;c++)r[c]=o[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"}}]);