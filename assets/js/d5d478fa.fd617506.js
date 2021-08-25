"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[542],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return m}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?t.createElement(k,i(i({ref:n},u),{},{components:r})):t.createElement(k,i({ref:n},u))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4304:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var t=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],p={sidebar_position:6},s="Frontend Usage & crudQuery",l={unversionedId:"client-side",id:"client-side",isDocsHomePage:!1,title:"Frontend Usage & crudQuery",description:"Overview",source:"@site/docs/client-side.md",sourceDirName:".",slug:"/client-side",permalink:"/nestjs-prisma-crud/client-side",editUrl:"https://github.com/kepelrs/nestjs-prisma-crud/edit/master/website/docs/client-side.md",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Custom Policies",permalink:"/nestjs-prisma-crud/access-control-module/custom-policy"},next:{title:"Limitations & v1 Roadmap",permalink:"/nestjs-prisma-crud/limitations"}},u=[{value:"Overview",id:"overview",children:[]},{value:"TLDR Usage",id:"tldr-usage",children:[]},{value:"CrudQuery Properties",id:"crudquery-properties",children:[{value:"CrudQuery.where",id:"crudquerywhere",children:[]},{value:"CrudQuery.joins",id:"crudqueryjoins",children:[]},{value:"CrudQuery.orderBy",id:"crudqueryorderby",children:[]},{value:"CrudQuery.page",id:"crudquerypage",children:[]},{value:"CrudQuery.pageSize",id:"crudquerypagesize",children:[]}]}],c={toc:u};function d(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"frontend-usage--crudquery"},"Frontend Usage & crudQuery"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"All examples and schematics in this documentation demonstrate passing ",(0,o.kt)("inlineCode",{parentName:"p"},"crudQuery")," as a ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.stringified")," string in your query parameter."),(0,o.kt)("p",{parentName:"div"},"You can chose to adjust your controllers and retrieve the ",(0,o.kt)("inlineCode",{parentName:"p"},"crudQuery")," object from ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," bodies or any other method you prefer. If you choose to do so, remember to also adapt any ",(0,o.kt)("a",{parentName:"p",href:"./access-control-module/builtin-policies"},"built in")," or ",(0,o.kt)("a",{parentName:"p",href:"./access-control-module/custom-policy"},"custom policies")," that were previously relying on ",(0,o.kt)("inlineCode",{parentName:"p"},"request.query"),"."))),(0,o.kt)("p",null,"Every public method of ",(0,o.kt)("inlineCode",{parentName:"p"},"PrismaCrudService")," used in your ",(0,o.kt)("a",{parentName:"p",href:"./crud-endpoints"},"CRUD endpoints")," accept an optional parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"crudQuery"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"crudQuery")," must be an object (or JSON string) with the following shape:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export type CrudQuery = {\n    where?: object;\n    joins?: string[];\n    orderBy?: object;\n    page?: number;\n    pageSize?: number;\n};\n")),(0,o.kt)("h2",{id:"tldr-usage"},"TLDR Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const crudQuery = {\n    where: {\n        posts: {\n            some: {\n                comments: { some: { content: { contains: 'Hello' } } },\n            },\n        },\n    },\n    joins: ['profile', 'posts.comments'],\n    orderBy: [{ age: 'asc' }],\n    page: 2,\n    pageSize: 100,\n};\n\nfetch('http://localhost:3000?' + new URLSearchParams({ crudQuery: JSON.stringify(crudQuery) }));\n")),(0,o.kt)("h2",{id:"crudquery-properties"},"CrudQuery Properties"),(0,o.kt)("h3",{id:"crudquerywhere"},"CrudQuery.where"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type:")," object",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Mandatory:")," No",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Description:")),(0,o.kt)("p",null,"This must be valid prisma ",(0,o.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#where"},(0,o.kt)("inlineCode",{parentName:"a"},".where"))," for your specific entity."),(0,o.kt)("p",null,"Querying nested joins is supported, as long as the joined relations are present in your service's ",(0,o.kt)("a",{parentName:"p",href:"crud-endpoints#optsallowedjoins"},"allowedJoins"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"/*\nTo fetch all users who have posts where someone made a comment containing the word\n'Hello', send the following crudQuery query parameter to the \"/users\" endpoint.\n*/\nconst crudQuery = {\n    // ...\n    where: {\n        posts: {\n            some: {\n                comments: { some: { content: { contains: 'Hello' } } },\n            },\n        },\n    },\n};\n")),(0,o.kt)("p",null,"For more information on the ",(0,o.kt)("inlineCode",{parentName:"p"},".where")," object, see the ",(0,o.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#where"},"prisma API reference"),"."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"crudqueryjoins"},"CrudQuery.joins"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type:")," string[]",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Mandatory:")," No",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Description:")),(0,o.kt)("p",null,"The joined relations you wish the response to include. Supports dot notation."),(0,o.kt)("p",null,"Setting this value will override the server's ",(0,o.kt)("a",{parentName:"p",href:"crud-endpoints#optsdefaultjoins"},"defaultJoins")," option."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Note:")," endpoint will throw ",(0,o.kt)("inlineCode",{parentName:"em"},"403")," if the provided join is not present in ",(0,o.kt)("a",{parentName:"em",href:"crud-endpoints#optsallowedjoins"},"allowedJoins"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"/*\nSend the following crudQuery to the \"/users\" endpoint to get the user with:\n  1. his profile\n  2. all his posts\n  3. all his posts' comments\n*/\nconst crudQuery = {\n    // ...\n    joins: ['profile', 'posts.comments'],\n};\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"crudqueryorderby"},"CrudQuery.orderBy"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type:")," Array","<","{","[string]",": 'asc' | 'desc'}",">",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Mandatory:")," No",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Description:")),(0,o.kt)("p",null,"This must be a valid prisma ",(0,o.kt)("inlineCode",{parentName:"p"},".orderBy")," array. See ",(0,o.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#orderby"},"prisma orderBy reference")," for more."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const crudQuery = {\n    // ...\n    orderBy: [{ age: 'asc' }],\n};\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"crudquerypage"},"CrudQuery.page"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type:")," number ",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Mandatory:")," No",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Description:")),(0,o.kt)("p",null,"The page property is used to control the pagination in the ",(0,o.kt)("inlineCode",{parentName:"p"},"prismaCrudService.findMany")," responses."),(0,o.kt)("p",null,"Page value must be ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," or greater."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const crudQuery = {\n    // ...\n    page: 2,\n};\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"crudquerypagesize"},"CrudQuery.pageSize"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type:")," number ",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Mandatory:")," No",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Description:")),(0,o.kt)("p",null,"The pageSize property is used to control the pagination in the ",(0,o.kt)("inlineCode",{parentName:"p"},"prismaCrudService.findMany")," responses. It be ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," or greater and will get overriden if passed a larger value than ",(0,o.kt)("a",{parentName:"p",href:"./crud-endpoints#configuration"},"configured in the service"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const crudQuery = {\n    // ...\n    pageSize: 100,\n};\n")),(0,o.kt)("hr",null))}d.isMDXComponent=!0}}]);