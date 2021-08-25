"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[83],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4798:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:5},c="Custom Policies",l={unversionedId:"access-control-module/custom-policy",id:"access-control-module/custom-policy",isDocsHomePage:!1,title:"Custom Policies",description:"The AccessPolicy decorator supports more complex custom made policies for your specific use cases.",source:"@site/docs/access-control-module/custom-policy.md",sourceDirName:"access-control-module",slug:"/access-control-module/custom-policy",permalink:"/nestjs-prisma-crud/access-control-module/custom-policy",editUrl:"https://github.com/kepelrs/nestjs-prisma-crud/edit/master/website/docs/access-control-module/custom-policy.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Built-in Policies",permalink:"/nestjs-prisma-crud/access-control-module/builtin-policies"},next:{title:"Frontend Usage & crudQuery",permalink:"/nestjs-prisma-crud/client-side"}},u=[{value:"Recipes",id:"recipes",children:[{value:"JohnnyIsBanned Policy",id:"johnnyisbanned-policy",children:[]},{value:"BannedPeople Policy",id:"bannedpeople-policy",children:[]},{value:"DbBannedPeople Policy",id:"dbbannedpeople-policy",children:[]},{value:"HideDrafts Policy (extending crudQuery)",id:"hidedrafts-policy-extending-crudquery",children:[]}]}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-policies"},"Custom Policies"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"./access-policy"},(0,a.kt)("inlineCode",{parentName:"a"},"AccessPolicy"))," decorator supports more complex custom made policies for your specific use cases."),(0,a.kt)("p",null,"A policy is any function with the following signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type PolicyMethod = (ctx: ExecutionContext, authData: any, moduleRef: ModuleRef) => void;\n")),(0,a.kt)("p",null,"A short summary of what the parameters mean:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ctx: ExecutionContext:")," useful when the ",(0,a.kt)("inlineCode",{parentName:"li"},"request")," object is needed for your business logic. See ",(0,a.kt)("a",{parentName:"li",href:"https://docs.nestjs.com/fundamentals/execution-context#execution-context"},"NestJS' execution context")," for more."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"authData: any:")," the user's metadata generated by your authentication middleware. Commonly used for accessing user/session information. Retrieved using ",(0,a.kt)("a",{parentName:"li",href:"./access-control-module#optsauthdatakey"},"authDataKey"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"moduleRef: ModuleRef:")," commonly used when accessing injected dependencies such as ",(0,a.kt)("inlineCode",{parentName:"li"},"PrismaService")," inside your policy functions. See ",(0,a.kt)("a",{parentName:"li",href:"https://docs.nestjs.com/fundamentals/module-ref#module-reference"},"NestJS module reference"),".")),(0,a.kt)("h2",{id:"recipes"},"Recipes"),(0,a.kt)("p",null,"Bellow are some example policies to help you get started writing your own."),(0,a.kt)("h3",{id:"johnnyisbanned-policy"},"JohnnyIsBanned Policy"),(0,a.kt)("p",null,"This is an example of a simple static policy that throws ",(0,a.kt)("inlineCode",{parentName:"p"},"403")," errors for the user named ",(0,a.kt)("strong",{parentName:"p"},"Johnny"),"."),(0,a.kt)("h4",{id:"implementation"},"Implementation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=johnny-is-banned.policy.ts",title:"johnny-is-banned.policy.ts"},"import { ExecutionContext, ForbiddenException } from '@nestjs/common';\nimport { ModuleRef } from '@nestjs/core';\n\nexport const JohnnyIsBanned = (ctx: ExecutionContext, authData: any, moduleRef: ModuleRef) => {\n    if (authData.user.name === 'Johnny') {\n        throw new ForbiddenException('Bye Johnny!');\n    }\n};\n")),(0,a.kt)("h4",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=party.controller.ts",title:"party.controller.ts"},"@Controller('party')\nexport class PartyController {\n    // ...\n    @Get()\n    @AccessPolicy('everyone', JohnnyIsBanned)\n    async getParties(@Query('crudQuery') crudQuery: string) {\n        const match = await this.partyService.findMany(crudQuery);\n        return match;\n    }\n}\n")),(0,a.kt)("h3",{id:"bannedpeople-policy"},"BannedPeople Policy"),(0,a.kt)("p",null,"This takes the same idea of the previous example, but now we have a function that receives a ",(0,a.kt)("strong",{parentName:"p"},"list of names to ban"),", and returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"PolicyMethod")," function."),(0,a.kt)("h4",{id:"implementation-1"},"Implementation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=banned-people.policy.ts",title:"banned-people.policy.ts"},"import { ExecutionContext, ForbiddenException } from '@nestjs/common';\nimport { ModuleRef } from '@nestjs/core';\n\nexport const BannedPeople = (bannedNames: string[]) => (\n    ctx: ExecutionContext,\n    authData: any,\n    moduleRef: ModuleRef,\n) => {\n    if (bannedNames.includes(authData.user.name)) {\n        throw new ForbiddenException('You are not alone Johnny!');\n    }\n};\n")),(0,a.kt)("h4",{id:"usage-1"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=party.controller.ts",title:"party.controller.ts"},"@Controller('party')\nexport class PartyController {\n    // ...\n    @Get()\n    @AccessPolicy('everyone', BannedPeople(['Johnny', 'Danny']))\n    async getParties(@Query('crudQuery') crudQuery: string) {\n        const match = await this.partyService.findMany(crudQuery);\n        return match;\n    }\n}\n")),(0,a.kt)("h3",{id:"dbbannedpeople-policy"},"DbBannedPeople Policy"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"NOTE:")," ",(0,a.kt)("em",{parentName:"p"},"This example is meant to illustrate how to perform database operations inside your custom policies. It is not how you would implement this feature in practice!"))),(0,a.kt)("p",null,"This example takes the same idea of the previous, but ",(0,a.kt)("strong",{parentName:"p"},"queries the database")," instead of using a hard coded list."),(0,a.kt)("h4",{id:"implementation-2"},"Implementation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=db-banned-people.policy.ts",title:"db-banned-people.policy.ts"},"import { ExecutionContext, ForbiddenException } from '@nestjs/common';\nimport { ModuleRef } from '@nestjs/core';\n\nexport const DbBannedPeople = (ctx: ExecutionContext, authData: any, moduleRef: ModuleRef) => {\n    const prismaService = moduleRef.get(PrismaService, { strict: false });\n    const bannedPeople = prismaService.bannedPeople.findMany();\n\n    if (bannedPeople.includes(authData.user.name)) {\n        throw new ForbiddenException('You have been banned!');\n    }\n};\n")),(0,a.kt)("h4",{id:"usage-2"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=party.controller.ts",title:"party.controller.ts"},"@Controller('party')\nexport class PartyController {\n    // ...\n    @Get()\n    @AccessPolicy('everyone', DbBannedPeople)\n    async getParties(@Query('crudQuery') crudQuery: string) {\n        const match = await this.partyService.findMany(crudQuery);\n        return match;\n    }\n}\n")),(0,a.kt)("h3",{id:"hidedrafts-policy-extending-crudquery"},"HideDrafts Policy (extending ",(0,a.kt)("a",{parentName:"h3",href:"../client-side"},"crudQuery"),")"),(0,a.kt)("p",null,"In this section we are going to write a policy that modifies the final prisma query, by extending the client's provided ",(0,a.kt)("a",{parentName:"p",href:"../client-side"},(0,a.kt)("inlineCode",{parentName:"a"},"crudQuery"))," and adding additional constraints to it."),(0,a.kt)("p",null,"This is extremely useful when a user must be granted access to only a subset of records from a given table. This method ensures that we scope the client's access while not breaking his specified sorting/filtering/pagination (all of which come in the ",(0,a.kt)("a",{parentName:"p",href:"../client-side"},(0,a.kt)("inlineCode",{parentName:"a"},"crudQuery")),")."),(0,a.kt)("p",null,"Bellow is a policy that only retrieves non-draft ",(0,a.kt)("inlineCode",{parentName:"p"},"parties")," from the database. The highlighted ",(0,a.kt)("inlineCode",{parentName:"p"},"additionalConstraints")," can be any ",(0,a.kt)("a",{parentName:"p",href:"https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#filter-conditions-and-operators"},"prisma filter object")," ."),(0,a.kt)("h4",{id:"implementation-3"},"Implementation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=hide-drafts.policy.ts {11,12}",title:"hide-drafts.policy.ts","{11,12}":!0},"import { ExecutionContext } from '@nestjs/common';\nimport { ModuleRef } from '@nestjs/core';\nimport { CrudQuery } from 'nestjs-prisma-crud';\n\nexport const HideDrafts = (ctx: ExecutionContext, _authData: any, _moduleRef: ModuleRef) => {\n    // get crudQuery from the request's query params\n    const request = ctx.switchToHttp().getRequest();\n    const query = request.query;\n    const crudQuery: string = query.crudQuery;\n\n    // get client provided `.where`, if any\n    const parsedCrudQuery: CrudQuery = crudQuery ? JSON.parse(crudQuery) : {};\n    const clientWhere = parsedCrudQuery.where || {};\n\n    // additionalConstraints is any valid prisma filter object\n    const additionalConstraints = { state: { not: 'DRAFT' } };\n\n    // override client `.where`, adding the additional `AND` clause\n    parsedCrudQuery.where = {\n        AND: [additionalConstraints, clientWhere],\n    };\n\n    request.query.crudQuery = JSON.stringify(parsedCrudQuery);\n};\n")),(0,a.kt)("h4",{id:"usage-3"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=party.controller.ts",title:"party.controller.ts"},"@Controller('party')\nexport class PartyController {\n    // ...\n    @Get()\n    @AccessPolicy('everyone', HideDrafts)\n    async getParties(@Query('crudQuery') crudQuery: string) {\n        const match = await this.partyService.findMany(crudQuery);\n        return match;\n    }\n}\n")))}d.isMDXComponent=!0}}]);