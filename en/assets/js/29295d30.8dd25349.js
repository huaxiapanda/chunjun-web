"use strict";(self.webpackChunkchunjun_web=self.webpackChunkchunjun_web||[]).push([[5473],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),s=l,N=m["".concat(i,".").concat(s)]||m[s]||k[s]||a;return n?r.createElement(N,u(u({ref:t},c),{},{components:n})):r.createElement(N,u({ref:t},c))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,u=new Array(a);u[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,u[1]=o;for(var p=2;p<a;p++)u[p]=n[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4938:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return k}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),u=["components"],o={},i=void 0,p={unversionedId:"chunjunDocs/connectors/hbase/hbase-lookup",id:"chunjunDocs/connectors/hbase/hbase-lookup",title:"hbase-lookup",description:"\u4e00\u3001\u4ecb\u7ecd",source:"@site/docs/chunjunDocs/connectors/hbase/hbase-lookup.md",sourceDirName:"chunjunDocs/connectors/hbase",slug:"/chunjunDocs/connectors/hbase/hbase-lookup",permalink:"/chunjun-web/en/docs/chunjunDocs/connectors/hbase/hbase-lookup",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chunjunDocs/connectors/hbase/hbase-lookup.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Greenplum Source",permalink:"/chunjun-web/en/docs/chunjunDocs/connectors/greenplum/greenplum-source"},next:{title:"Hbase Sink",permalink:"/chunjun-web/en/docs/chunjunDocs/connectors/hbase/hbase-sink"}},c={},k=[{value:"\u4e00\u3001\u4ecb\u7ecd",id:"\u4e00\u4ecb\u7ecd",level:2},{value:"\u4e8c\u3001\u652f\u6301\u7248\u672c",id:"\u4e8c\u652f\u6301\u7248\u672c",level:2},{value:"\u4e09\u3001\u63d2\u4ef6\u540d\u79f0",id:"\u4e09\u63d2\u4ef6\u540d\u79f0",level:2},{value:"\u56db\u3001\u53c2\u6570\u8bf4\u660e",id:"\u56db\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u4e94\u3001\u811a\u672c\u793a\u4f8b",id:"\u4e94\u811a\u672c\u793a\u4f8b",level:2}],m={toc:k};function s(e){var t=e.components,n=(0,l.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e00\u4ecb\u7ecd"},"\u4e00\u3001\u4ecb\u7ecd"),(0,a.kt)("p",null,"Hbase Lookup\u67e5\u8be2\u6570\u636e\u300223"),(0,a.kt)("h2",{id:"\u4e8c\u652f\u6301\u7248\u672c"},"\u4e8c\u3001\u652f\u6301\u7248\u672c"),(0,a.kt)("p",null,"hbase1.4"),(0,a.kt)("h2",{id:"\u4e09\u63d2\u4ef6\u540d\u79f0"},"\u4e09\u3001\u63d2\u4ef6\u540d\u79f0"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"SQL"),(0,a.kt)("th",{parentName:"tr",align:null},"hbase14-x")))),(0,a.kt)("h2",{id:"\u56db\u53c2\u6570\u8bf4\u660e"},"\u56db\u3001\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"connector"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1ahbase14-x"),(0,a.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"properties.zookeeper.quorum"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1azk\u5730\u5740"),(0,a.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,a.kt)("li",{parentName:"ul"},"\u793a\u4f8b\uff1axxx:2181,xxx:2181,xxx:2181"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"properties.zookeeper.znode.parent"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1ahbase\u5728zk\u76ee\u5f55"),(0,a.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a/hbase"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"null-string-literal"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u7a7a\u503c\u5b57\u7b26\u4e32\u4ee3\u66ff"),(0,a.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,a.kt)("li",{parentName:"ul"},'\u9ed8\u8ba4\u503c\uff1a"null"')))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"lookup.cache-type"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u7ef4\u8868\u7f13\u5b58\u7c7b\u578b(NONE\u3001LRU\u3001ALL)\uff0c\u9ed8\u8ba4LRU"),(0,a.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1aLRU")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"lookup.error-limit"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u5f02\u6b65\u7ef4\u8868\u52a0\u8f7d\u6570\u636e\u9519\u8bef\u6570\u91cf\u4e0a\u9650"),(0,a.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1aLRU\u5f02\u6b65"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1aLong.MAX_VALUE")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"lookup.cache-period"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1aALL\u7ef4\u8868\u6bcf\u9694\u591a\u4e45\u52a0\u8f7d\u4e00\u6b21\u6570\u636e\uff0c\u9ed8\u8ba43600000\u6beb\u79d2(\u4e00\u4e2a\u5c0f\u65f6)"),(0,a.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a3600000")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"lookup.async-timeout"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u7ef4\u8868\u67e5\u8be2\u8d85\u65f6\u65f6\u95f4"),(0,a.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a10000")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"lookup.cache.max-rows"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1alru\u7ef4\u8868\u7f13\u5b58\u6570\u636e\u7684\u6761\u6570"),(0,a.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a10000")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"lookup.cache.ttl"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1alru\u7ef4\u8868\u7f13\u5b58\u6570\u636e\u7684\u65f6\u95f4"),(0,a.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a60000")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"lookup.parallelism"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u7ef4\u8868\u5e76\u884c\u5ea6"),(0,a.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,a.kt)("h2",{id:""}),(0,a.kt)("h2",{id:"\u4e94\u811a\u672c\u793a\u4f8b"},"\u4e94\u3001\u811a\u672c\u793a\u4f8b"),(0,a.kt)("p",null,"\u89c1\u9879\u76ee\u5185",(0,a.kt)("inlineCode",{parentName:"p"},"flinkx-examples"),"\u6587\u4ef6\u5939\u3002"))}s.isMDXComponent=!0}}]);