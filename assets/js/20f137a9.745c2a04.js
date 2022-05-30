"use strict";(self.webpackChunkchunjun_web=self.webpackChunkchunjun_web||[]).push([[3573],{3905:function(t,e,a){a.d(e,{Zo:function(){return k},kt:function(){return c}});var l=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,l,n=function(t,e){if(null==t)return{};var a,l,n={},r=Object.keys(t);for(l=0;l<r.length;l++)a=r[l],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)a=r[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var u=l.createContext({}),m=function(t){var e=l.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},k=function(t){var e=m(t.components);return l.createElement(u.Provider,{value:e},t.children)},N={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},o=l.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,u=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),o=m(a),c=n,s=o["".concat(u,".").concat(c)]||o[c]||N[c]||r;return a?l.createElement(s,p(p({ref:e},k),{},{components:a})):l.createElement(s,p({ref:e},k))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,p=new Array(r);p[0]=o;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:n,p[1]=i;for(var m=2;m<r;m++)p[m]=a[m];return l.createElement.apply(null,p)}return l.createElement.apply(null,a)}o.displayName="MDXCreateElement"},331:function(t,e,a){a.r(e),a.d(e,{assets:function(){return k},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return N}});var l=a(7462),n=a(3366),r=(a(7294),a(3905)),p=["components"],i={},u="Mysql Sink",m={unversionedId:"chunjunDocs/connectors/mysql/mysql-sink",id:"chunjunDocs/connectors/mysql/mysql-sink",title:"Mysql Sink",description:"\u4e00\u3001\u4ecb\u7ecd",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/chunjunDocs/connectors/mysql/mysql-sink.md",sourceDirName:"chunjunDocs/connectors/mysql",slug:"/chunjunDocs/connectors/mysql/mysql-sink",permalink:"/chunjun-web/docs/chunjunDocs/connectors/mysql/mysql-sink",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chunjunDocs/connectors/mysql/mysql-sink.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mysql Lookup",permalink:"/chunjun-web/docs/chunjunDocs/connectors/mysql/mysql-lookup"},next:{title:"Mysql Source",permalink:"/chunjun-web/docs/chunjunDocs/connectors/mysql/mysql-source"}},k={},N=[{value:"\u4e00\u3001\u4ecb\u7ecd",id:"\u4e00\u4ecb\u7ecd",level:2},{value:"\u4e8c\u3001\u652f\u6301\u7248\u672c",id:"\u4e8c\u652f\u6301\u7248\u672c",level:2},{value:"\u4e09\u3001\u63d2\u4ef6\u540d\u79f0",id:"\u4e09\u63d2\u4ef6\u540d\u79f0",level:2},{value:"\u56db\u3001\u53c2\u6570\u8bf4\u660e",id:"\u56db\u53c2\u6570\u8bf4\u660e",level:2},{value:"1\u3001Sync",id:"1sync",level:3},{value:"2\u3001SQL",id:"2sql",level:3},{value:"\u4e94\u3001\u6570\u636e\u7c7b\u578b",id:"\u4e94\u6570\u636e\u7c7b\u578b",level:2},{value:"\u516d\u3001\u811a\u672c\u793a\u4f8b",id:"\u516d\u811a\u672c\u793a\u4f8b",level:2}],o={toc:N};function c(t){var e=t.components,a=(0,n.Z)(t,p);return(0,r.kt)("wrapper",(0,l.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mysql-sink"},"Mysql Sink"),(0,r.kt)("h2",{id:"\u4e00\u4ecb\u7ecd"},"\u4e00\u3001\u4ecb\u7ecd"),(0,r.kt)("p",null,"mysql sink"),(0,r.kt)("h2",{id:"\u4e8c\u652f\u6301\u7248\u672c"},"\u4e8c\u3001\u652f\u6301\u7248\u672c"),(0,r.kt)("p",null,"mysql5.x"),(0,r.kt)("h2",{id:"\u4e09\u63d2\u4ef6\u540d\u79f0"},"\u4e09\u3001\u63d2\u4ef6\u540d\u79f0"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Sync"),(0,r.kt)("th",{parentName:"tr",align:null},"mysqlsink\u3001mysqlwriter"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SQL"),(0,r.kt)("td",{parentName:"tr",align:null},"mysql-x")))),(0,r.kt)("h2",{id:"\u56db\u53c2\u6570\u8bf4\u660e"},"\u56db\u3001\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("h3",{id:"1sync"},"1\u3001Sync"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"connection")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6570\u636e\u5e93\u8fde\u63a5\u53c2\u6570\uff0c\u5305\u542b jdbcUrl\u3001schema\u3001table \u7b49\u53c2\u6570"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aList"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},'"connection": [{\n "jdbcUrl": ["jdbc:mysql://0.0.0.1:3306/database?useSSL=false"],\n "table": ["table"],\n "schema":"public"\n}]\n')),(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"jdbcUrl")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u9488\u5bf9\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7684 jdbc \u8fde\u63a5\u5b57\u7b26\u4e32,jdbcUrl \u53c2\u8003\u6587\u6863\uff1a",(0,r.kt)("a",{parentName:"li",href:"http://dev.mysql.com/doc/connector-j/en/connector-j-reference-configuration-properties.html"},"MySQL \u5b98\u65b9\u6587\u6863")),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1astring"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"schema")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6570\u636e\u5e93 schema \u540d"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1astring"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"table")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u76ee\u7684\u8868\u7684\u8868\u540d\u79f0\u3002\u76ee\u524d\u53ea\u652f\u6301\u914d\u7f6e\u5355\u4e2a\u8868\uff0c\u540e\u7eed\u4f1a\u652f\u6301\u591a\u8868"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aList"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"username")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6570\u636e\u6e90\u7684\u7528\u6237\u540d"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"password")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6570\u636e\u6e90\u6307\u5b9a\u7528\u6237\u540d\u7684\u5bc6\u7801"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"column")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'\u63cf\u8ff0\uff1a\u76ee\u7684\u8868\u9700\u8981\u5199\u5165\u6570\u636e\u7684\u5b57\u6bb5\u3002\u4f8b\u5982: "column": ','[{"name":"id",type:"varchar"}]'),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aList"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"fullColumn")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'\u63cf\u8ff0\uff1a\u76ee\u7684\u8868\u4e2d\u7684\u6240\u6709\u5b57\u6bb5\uff0c\u5b57\u6bb5\u4e4b\u95f4\u7528\u82f1\u6587\u9017\u53f7\u5206\u9694\u3002\u4f8b\u5982: "column": ','["id","name","age","hobby"]',"\uff0c\u5982\u679c\u4e0d\u914d\u7f6e\uff0c\u5c06\u5728\u7cfb\u7edf\u8868\u4e2d\u83b7\u53d6"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aList"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"preSql")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u5199\u5165\u6570\u636e\u5230\u76ee\u7684\u8868\u524d\uff0c\u4f1a\u5148\u6267\u884c\u8fd9\u91cc\u7684\u4e00\u7ec4\u6807\u51c6\u8bed\u53e5"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aList"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"postSql")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u5199\u5165\u6570\u636e\u5230\u76ee\u7684\u8868\u540e\uff0c\u4f1a\u6267\u884c\u8fd9\u91cc\u7684\u4e00\u7ec4\u6807\u51c6\u8bed\u53e5"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aList"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"mode")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u63a7\u5236\u5199\u5165\u6570\u636e\u5230\u76ee\u6807\u8868\u91c7\u7528 insert into \u6216\u8005 replace into \u6216\u8005 ON DUPLICATE KEY UPDATE \u8bed\u53e5"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u6240\u6709\u9009\u9879\uff1ainsert/replace/update"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1ainsert",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"batchSize")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u4e00\u6b21\u6027\u6279\u91cf\u63d0\u4ea4\u7684\u8bb0\u5f55\u6570\u5927\u5c0f\uff0c\u8be5\u503c\u53ef\u4ee5\u6781\u5927\u51cf\u5c11 FlinkX \u4e0e\u6570\u636e\u5e93\u7684\u7f51\u7edc\u4ea4\u4e92\u6b21\u6570\uff0c\u5e76\u63d0\u5347\u6574\u4f53\u541e\u5410\u91cf\u3002\u4f46\u662f\u8be5\u503c\u8bbe\u7f6e\u8fc7\u5927\u53ef\u80fd\u4f1a\u9020\u6210 FlinkX \u8fd0\u884c\u8fdb\u7a0b OOM \u60c5\u51b5"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aint"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a1",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"updateKey")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u5f53\u5199\u5165\u6a21\u5f0f\u4e3a update \u548c replace \u65f6\uff0c\u9700\u8981\u6307\u5b9a\u6b64\u53c2\u6570\u7684\u503c\u4e3a\u552f\u4e00\u7d22\u5f15\u5b57\u6bb5"),(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u6b64\u53c2\u6570\u4e3a\u7a7a\uff0c\u5e76\u4e14\u5199\u5165\u6a21\u5f0f\u4e3a update \u548c replace \u65f6\uff0c\u5e94\u7528\u4f1a\u81ea\u52a8\u83b7\u53d6\u6570\u636e\u5e93\u4e2d\u7684\u552f\u4e00\u7d22\u5f15\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u6570\u636e\u8868\u6ca1\u6709\u552f\u4e00\u7d22\u5f15\uff0c\u4f46\u662f\u5199\u5165\u6a21\u5f0f\u914d\u7f6e\u4e3a update \u548c replace\uff0c\u5e94\u7528\u4f1a\u4ee5 insert \u7684\u65b9\u5f0f\u5199\u5165\u6570\u636e\uff1b"))),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aList< String >",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'\u793a\u4f8b\uff1a"updateKey": ','["id"]'))),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"semantic")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1asink \u7aef\u662f\u5426\u652f\u6301\u4e8c\u9636\u6bb5\u63d0\u4ea4"),(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u6b64\u53c2\u6570\u4e3a\u7a7a\uff0c\u9ed8\u8ba4\u4e0d\u5f00\u542f\u4e8c\u9636\u6bb5\u63d0\u4ea4\uff0c\u5373 sink \u7aef\u4e0d\u652f\u6301 exactly_once \u8bed\u4e49\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u524d\u53ea\u652f\u6301 exactly-once \u548c at-least-once"))),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'\u793a\u4f8b\uff1a"semantic": "exactly-once"'))),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1aat-least-once",(0,r.kt)("br",null))))),(0,r.kt)("h3",{id:"2sql"},"2\u3001SQL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"connector")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1amysql-x"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"url")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1ajdbc:mysql://localhost:3306/test"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"schema")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6570\u636e\u5e93 schema \u540d"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1astring"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"table-name")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u8868\u540d"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0\uff1a",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"username")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1ausername"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"password")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1apassword"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"sink.buffer-flush.max-rows")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6279\u91cf\u5199\u6570\u636e\u6761\u6570\uff0c\u5355\u4f4d\uff1a\u6761"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a1024",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"sink.buffer-flush.interval")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6279\u91cf\u5199\u65f6\u95f4\u95f4\u9694\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a10000",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"sink.all-replace")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u662f\u5426\u5168\u90e8\u66ff\u6362\u6570\u636e\u5e93\u4e2d\u7684\u6570\u636e(\u5982\u679c\u6570\u636e\u5e93\u4e2d\u539f\u503c\u4e0d\u4e3a null,\u65b0\u503c\u4e3a null,\u5982\u679c\u4e3a true \u5219\u4f1a\u66ff\u6362\u4e3a null)"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1afalse",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"sink.parallelism")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u5199\u5165\u7ed3\u679c\u7684\u5e76\u884c\u5ea6"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"sink.semantic")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1asink \u7aef\u662f\u5426\u652f\u6301\u4e8c\u9636\u6bb5\u63d0\u4ea4"),(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u6b64\u53c2\u6570\u4e3a\u7a7a\uff0c\u9ed8\u8ba4\u4e0d\u5f00\u542f\u4e8c\u9636\u6bb5\u63d0\u4ea4\uff0c\u5373 sink \u7aef\u4e0d\u652f\u6301 exactly_once \u8bed\u4e49\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u524d\u53ea\u652f\u6301 exactly-once \u548c at-least-once"))),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'\u793a\u4f8b\uff1a"semantic": "exactly-once"'))),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1aat-least-once",(0,r.kt)("br",null))))),(0,r.kt)("h2",{id:"\u4e94\u6570\u636e\u7c7b\u578b"},"\u4e94\u3001\u6570\u636e\u7c7b\u578b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u652f\u6301"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u7c7b\u578b\u540d\u79f0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u652f\u6301"),(0,r.kt)("td",{parentName:"tr",align:"center"},"BOOLEAN\u3001BIT\u3001TINYINT\u3001TINYINT UNSIGNED\u3001SMALLINT\u3001SMALLINT UNSIGNED\u3001MEDIUMINT\u3001MEDIUMINT UNSIGNED\u3001 INT\u3001INT UNSIGNED\u3001INTEGER\u3001INT UNSIGNED\u3001BIGINT\u3001BIGINT UNSIGNED\u3001REAL\u3001FLOAT\u3001FLOAT UNSIGNED\u3001DECIMAL\u3001DECIMAL UNSIGNED\u3001NUMERIC\u3001DOUBLE\u3001DOUBLE UNSIGNED\u3001STRING\u3001VARCHAR\u3001CHAR\u3001TIMESTAMP \u3001DATETIME\u3001DATE\u3001TIME\u3001YEAR\u3001TINYBLOB\u3001BLOB\u3001MEDIUMBLOB\u3001LONGBLOB\u3001TINYTEXT\u3001TEXT\u3001MEDIUMTEXT\u3001LONGTEXT\u3001BINARY\u3001VARBINARY\u3001JSON\u3001ENUM\u3001SET\u3001GEOMETRY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u4e0d\u652f\u6301"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ARRAY\u3001MAP\u3001STRUCT\u3001UNION")))),(0,r.kt)("h2",{id:"\u516d\u811a\u672c\u793a\u4f8b"},"\u516d\u3001\u811a\u672c\u793a\u4f8b"),(0,r.kt)("p",null,"\u89c1\u9879\u76ee\u5185",(0,r.kt)("inlineCode",{parentName:"p"},"flinkx-examples"),"\u6587\u4ef6\u5939\u3002"))}c.isMDXComponent=!0}}]);