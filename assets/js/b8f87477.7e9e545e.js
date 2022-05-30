"use strict";(self.webpackChunkchunjun_web=self.webpackChunkchunjun_web||[]).push([[3668],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),k=p(n),s=a,d=k["".concat(i,".").concat(s)]||k[s]||c[s]||l;return n?r.createElement(d,o(o({ref:t},m),{},{components:n})):r.createElement(d,o({ref:t},m))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5933:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],u={},i=void 0,p={unversionedId:"chunjunDocs/connectors/mongodb/mongodb-source",id:"chunjunDocs/connectors/mongodb/mongodb-source",title:"mongodb-source",description:"\u4e00\u3001\u4ecb\u7ecd",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/chunjunDocs/connectors/mongodb/mongodb-source.md",sourceDirName:"chunjunDocs/connectors/mongodb",slug:"/chunjunDocs/connectors/mongodb/mongodb-source",permalink:"/chunjun-web/docs/chunjunDocs/connectors/mongodb/mongodb-source",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chunjunDocs/connectors/mongodb/mongodb-source.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"mongodb-lookup",permalink:"/chunjun-web/docs/chunjunDocs/connectors/mongodb/mongodb-lookup"},next:{title:"Mysql Lookup",permalink:"/chunjun-web/docs/chunjunDocs/connectors/mysql/mysql-lookup"}},m={},c=[{value:"\u4e00\u3001\u4ecb\u7ecd",id:"\u4e00\u4ecb\u7ecd",level:2},{value:"\u4e8c\u3001\u652f\u6301\u7248\u672c",id:"\u4e8c\u652f\u6301\u7248\u672c",level:2},{value:"\u4e09\u3001\u63d2\u4ef6\u540d\u79f0",id:"\u4e09\u63d2\u4ef6\u540d\u79f0",level:2},{value:"\u56db\u3001\u53c2\u6570\u8bf4\u660e",id:"\u56db\u53c2\u6570\u8bf4\u660e",level:2},{value:"1\u3001\u6570\u636e\u540c\u6b65",id:"1\u6570\u636e\u540c\u6b65",level:4},{value:"2\u3001SQL\u8ba1\u7b97",id:"2sql\u8ba1\u7b97",level:4},{value:"\u4e94\u3001\u6570\u636e\u7c7b\u578b",id:"\u4e94\u6570\u636e\u7c7b\u578b",level:2},{value:"\u516d\u3001\u811a\u672c\u793a\u4f8b",id:"\u516d\u811a\u672c\u793a\u4f8b",level:2}],k={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4e00\u4ecb\u7ecd"},"\u4e00\u3001\u4ecb\u7ecd"),(0,l.kt)("p",null,"\u8bfb\u53d6MongoDB\u6570\u636e\uff0c\u76ee\u524d\u4e0d\u652f\u6301SQL Scan\u65b9\u5f0f\u8bfb\u53d6MongoDB\u3002"),(0,l.kt)("h2",{id:"\u4e8c\u652f\u6301\u7248\u672c"},"\u4e8c\u3001\u652f\u6301\u7248\u672c"),(0,l.kt)("p",null,"MongoDB 3.4\u53ca\u4ee5\u4e0a"),(0,l.kt)("h2",{id:"\u4e09\u63d2\u4ef6\u540d\u79f0"},"\u4e09\u3001\u63d2\u4ef6\u540d\u79f0"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Sync"),(0,l.kt)("th",{parentName:"tr",align:null},"mongodbsource\u3001mongodbreader"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SQL"),(0,l.kt)("td",{parentName:"tr",align:null},"mongodb-x")))),(0,l.kt)("h2",{id:"\u56db\u53c2\u6570\u8bf4\u660e"},"\u56db\u3001\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("h4",{id:"1\u6570\u636e\u540c\u6b65"},"1\u3001\u6570\u636e\u540c\u6b65"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"url"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1aMongoDB\u6570\u636e\u5e93\u8fde\u63a5\u7684URL\u5b57\u7b26\u4e32\uff0c\u8be6\u7ec6\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/reference/connection-string/"},"MongoDB\u5b98\u65b9\u6587\u6863")),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"hostPorts"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1aMongoDB\u7684\u5730\u5740\u548c\u7aef\u53e3\uff0c\u683c\u5f0f\u4e3a IP1:port\uff0c\u53ef\u586b\u5199\u591a\u4e2a\u5730\u5740\uff0c\u4ee5\u82f1\u6587\u9017\u53f7\u5206\u9694"),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"username"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6570\u636e\u6e90\u7684\u7528\u6237\u540d"),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"password"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6570\u636e\u6e90\u6307\u5b9a\u7528\u6237\u540d\u7684\u5bc6\u7801"),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"database"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6570\u636e\u5e93\u540d\u79f0"),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"collectionName")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u96c6\u5408\u540d\u79f0"),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0"),(0,l.kt)("li",{parentName:"ul"}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"fetchSize")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6bcf\u6b21\u8bfb\u53d6\u7684\u6570\u636e\u6761\u6570\uff0c\u901a\u8fc7\u8c03\u6574\u6b64\u53c2\u6570\u6765\u4f18\u5316\u8bfb\u53d6\u901f\u7387\u3002\u9ed8\u8ba4\u4e3a0\u4ee3\u8868MongoDB\u670d\u52a1\u5668\u81ea\u52a8\u9009\u62e9\u5408\u9002\u7684\u6279\u91cf\u5927\u5c0f"),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aint"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a0")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"filter"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u8fc7\u6ee4\u6761\u4ef6\uff0c\u91c7\u7528json\u683c\u5f0f\uff0c\u901a\u8fc7\u8be5\u914d\u7f6e\u578b\u6765\u9650\u5236\u8fd4\u56de MongoDB \u6570\u636e\u8303\u56f4\uff0c\u8bed\u6cd5\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/crud/#read-operations"},"MongoDB\u67e5\u8be2\u8bed\u6cd5")),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"column"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u9700\u8981\u8bfb\u53d6\u7684\u5b57\u6bb5\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5c5e\u6027\u8bf4\u660e:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"name\uff1a\u5b57\u6bb5\u540d\u79f0"),(0,l.kt)("li",{parentName:"ul"},"type\uff1a\u5b57\u6bb5\u7c7b\u578b\uff0c\u53ef\u4ee5\u548c\u6570\u636e\u5e93\u91cc\u7684\u5b57\u6bb5\u7c7b\u578b\u4e0d\u4e00\u6837\uff0c\u7a0b\u5e8f\u4f1a\u505a\u4e00\u6b21\u7c7b\u578b\u8f6c\u6362"))),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aList"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,l.kt)("h4",{id:"2sql\u8ba1\u7b97"},"2\u3001SQL\u8ba1\u7b97"),(0,l.kt)("p",null,"\u6682\u4e0d\u652f\u6301"),(0,l.kt)("h2",{id:"\u4e94\u6570\u636e\u7c7b\u578b"},"\u4e94\u3001\u6570\u636e\u7c7b\u578b"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u652f\u6301"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b\u540d\u79f0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:null},"long  double  decimal objectId string bindata date timestamp bool")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:null},"array")))),(0,l.kt)("h2",{id:"\u516d\u811a\u672c\u793a\u4f8b"},"\u516d\u3001\u811a\u672c\u793a\u4f8b"),(0,l.kt)("p",null,"\u89c1\u9879\u76ee\u5185",(0,l.kt)("inlineCode",{parentName:"p"},"flinkx-examples"),"\u6587\u4ef6\u5939\u3002"))}s.isMDXComponent=!0}}]);