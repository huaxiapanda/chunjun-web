"use strict";(self.webpackChunkchunjun_web=self.webpackChunkchunjun_web||[]).push([[6778],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),s=r,d=m["".concat(i,".").concat(s)]||m[s]||k[s]||l;return n?a.createElement(d,u(u({ref:t},c),{},{components:n})):a.createElement(d,u({ref:t},c))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,u=new Array(l);u[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,u[1]=o;for(var p=2;p<l;p++)u[p]=n[p];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3213:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return k}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),u=["components"],o={},i="Clickhouse Lookup",p={unversionedId:"chunjunDocs/connectors/clickhouse/clickhouse-lookup",id:"chunjunDocs/connectors/clickhouse/clickhouse-lookup",title:"Clickhouse Lookup",description:"1\u3001Introduce",source:"@site/docs/chunjunDocs/connectors/clickhouse/clickhouse-lookup.md",sourceDirName:"chunjunDocs/connectors/clickhouse",slug:"/chunjunDocs/connectors/clickhouse/clickhouse-lookup",permalink:"/chunjun-web/en/docs/chunjunDocs/connectors/clickhouse/clickhouse-lookup",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chunjunDocs/connectors/clickhouse/clickhouse-lookup.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MySQL Binlog Source",permalink:"/chunjun-web/en/docs/chunjunDocs/connectors/binlog/binlog-source"},next:{title:"Clickhouse Sink",permalink:"/chunjun-web/en/docs/chunjunDocs/connectors/clickhouse/clickhouse-sink"}},c={},k=[{value:"1\u3001Introduce",id:"1introduce",level:2},{value:"2\u3001Version Support",id:"2version-support",level:2},{value:"3\u3001Connector name",id:"3connector-name",level:2},{value:"4\u3001Parameter description",id:"4parameter-description",level:2},{value:"5\u3001Supported data type",id:"5supported-data-type",level:2},{value:"6\u3001Demo",id:"6demo",level:2}],m={toc:k};function s(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"clickhouse-lookup"},"Clickhouse Lookup"),(0,l.kt)("h2",{id:"1introduce"},"1\u3001Introduce"),(0,l.kt)("p",null,"clickhouse lookup\uff0csupport all and lru cache\nall cache:All data would be loaded into memory since the program start ,which is not recommended to use in scenarios with large amount of data .",(0,l.kt)("br",null),"\nlru cache:Query data asynchronously and  add data to lru cache,which is recommended to use in scenarios with large amount of data."),(0,l.kt)("h2",{id:"2version-support"},"2\u3001Version Support"),(0,l.kt)("p",null,"ClickHouse 19.x and above"),(0,l.kt)("h2",{id:"3connector-name"},"3\u3001Connector name"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"SQL"),(0,l.kt)("th",{parentName:"tr",align:null},"clickhouse-x")))),(0,l.kt)("h2",{id:"4parameter-description"},"4\u3001Parameter description"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"connector")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1aclickhouse-x"),(0,l.kt)("li",{parentName:"ul"},"Required\uff1arequired"),(0,l.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"Default\uff1anone",(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"url")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1aclickhouse jdbc url,jdbc:clickhouse://localhost:8123/default"),(0,l.kt)("li",{parentName:"ul"},"Required\uff1arequired"),(0,l.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"Default\uff1anone",(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"schema")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description:Database schema"),(0,l.kt)("li",{parentName:"ul"},"Required:optional"),(0,l.kt)("li",{parentName:"ul"},"Type:string"),(0,l.kt)("li",{parentName:"ul"},"Default\uff1anone",(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"table-name")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1atable name"),(0,l.kt)("li",{parentName:"ul"},"Required\uff1arequired"),(0,l.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"Default\uff1anone",(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"username")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1ausername"),(0,l.kt)("li",{parentName:"ul"},"Required\uff1arequired"),(0,l.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"Default\uff1anone",(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"password")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1apassword"),(0,l.kt)("li",{parentName:"ul"},"Required\uff1arequired"),(0,l.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"Default\uff1anone",(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"password")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1apassword"),(0,l.kt)("li",{parentName:"ul"},"Required\uff1arequired"),(0,l.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"Default\uff1anone",(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"lookup.cache-type")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1alookup table type (NONE\u3001LRU\u3001ALL),default value is LRU"),(0,l.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,l.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"Default\uff1aLRU",(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"lookup.cache-period")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1aInterval for loading data when the cache type is all,default value is 3600000ms"),(0,l.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,l.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"Default\uff1a3600000",(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"lookup.cache.max-rows")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1acache rows of lru lookup table ,default value is 10000"),(0,l.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,l.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"Default\uff1a10000",(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"lookup.cache.ttl")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1aInterval for loading data when the cache type is lru,default value is 60000ms"),(0,l.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,l.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"Default\uff1a60000",(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"lookup.fetch-size")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1athe num of data fetched from the  clickhouse table which is used as lookup all table at a time"),(0,l.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,l.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"Default\uff1a1000",(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"lookup.parallelism")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1athe parallelism of the lookup table"),(0,l.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,l.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"Default\uff1anone",(0,l.kt)("br",null))))),(0,l.kt)("h2",{id:"5supported-data-type"},"5\u3001Supported data type"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"supported"),(0,l.kt)("th",{parentName:"tr",align:null},"data type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOLEAN\u3001TINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001FLOAT\u3001DOUBLE\u3001DECIMAL\u3001STRING\u3001VARCHAR\u3001TIMESTAMP\u3001DATE\u3001BINARY\u3001NULL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"ARRAY\u3001MAP\u3001STRUCT\u3001UNION")))),(0,l.kt)("h2",{id:"6demo"},"6\u3001Demo"),(0,l.kt)("p",null,"see details in ",(0,l.kt)("inlineCode",{parentName:"p"},"flinkx-examples")," dir of project flinkx."))}s.isMDXComponent=!0}}]);