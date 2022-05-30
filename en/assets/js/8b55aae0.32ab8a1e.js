"use strict";(self.webpackChunkchunjun_web=self.webpackChunkchunjun_web||[]).push([[77],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return c}});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=l.createContext({}),m=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=m(e.components);return l.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},N=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),N=m(a),c=n,s=N["".concat(p,".").concat(c)]||N[c]||k[c]||r;return a?l.createElement(s,i(i({ref:t},o),{},{components:a})):l.createElement(s,i({ref:t},o))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=N;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var m=2;m<r;m++)i[m]=a[m];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}N.displayName="MDXCreateElement"},9301:function(e,t,a){a.r(t),a.d(t,{assets:function(){return o},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return k}});var l=a(7462),n=a(3366),r=(a(7294),a(3905)),i=["components"],u={},p="LogMiner Source",m={unversionedId:"chunjunDocs/connectors/logminer/LogMiner-source",id:"chunjunDocs/connectors/logminer/LogMiner-source",title:"LogMiner Source",description:"\u4e00\u3001\u4ecb\u7ecd",source:"@site/docs/chunjunDocs/connectors/logminer/LogMiner-source.md",sourceDirName:"chunjunDocs/connectors/logminer",slug:"/chunjunDocs/connectors/logminer/LogMiner-source",permalink:"/chunjun-web/en/docs/chunjunDocs/connectors/logminer/LogMiner-source",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chunjunDocs/connectors/logminer/LogMiner-source.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kudu Source",permalink:"/chunjun-web/en/docs/chunjunDocs/connectors/kudu/kudu-source"},next:{title:"FlinkX Oracle LogMiner\u5b9e\u65f6\u91c7\u96c6\u57fa\u672c\u539f\u7406",permalink:"/chunjun-web/en/docs/chunjunDocs/connectors/logminer/LogMiner\u539f\u7406"}},o={},k=[{value:"\u4e00\u3001\u4ecb\u7ecd",id:"\u4e00\u4ecb\u7ecd",level:2},{value:"\u4e8c\u3001\u652f\u6301\u7248\u672c",id:"\u4e8c\u652f\u6301\u7248\u672c",level:2},{value:"\u4e09\u3001\u6570\u636e\u5e93\u914d\u7f6e",id:"\u4e09\u6570\u636e\u5e93\u914d\u7f6e",level:2},{value:"\u56db\u3001LogMiner\u539f\u7406",id:"\u56dblogminer\u539f\u7406",level:2},{value:"\u4e94\u3001\u63d2\u4ef6\u540d\u79f0",id:"\u4e94\u63d2\u4ef6\u540d\u79f0",level:2},{value:"\u516d\u3001\u53c2\u6570\u8bf4\u660e",id:"\u516d\u53c2\u6570\u8bf4\u660e",level:2},{value:"1\u3001Sync",id:"1sync",level:3},{value:"2\u3001SQL",id:"2sql",level:3},{value:"\u4e03\u3001\u6570\u636e\u7ed3\u6784",id:"\u4e03\u6570\u636e\u7ed3\u6784",level:2},{value:"\u516b\u3001\u6570\u636e\u7c7b\u578b",id:"\u516b\u6570\u636e\u7c7b\u578b",level:2},{value:"\u4e5d\u3001\u811a\u672c\u793a\u4f8b",id:"\u4e5d\u811a\u672c\u793a\u4f8b",level:2}],N={toc:k};function c(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"logminer-source"},"LogMiner Source"),(0,r.kt)("h2",{id:"\u4e00\u4ecb\u7ecd"},"\u4e00\u3001\u4ecb\u7ecd"),(0,r.kt)("p",null,"OracleLogMiner\u63d2\u4ef6\u652f\u6301\u914d\u7f6e\u76d1\u542c\u8868\u540d\u79f0\u4ee5\u53ca\u8bfb\u53d6\u8d77\u70b9\u8bfb\u53d6\u65e5\u5fd7\u6570\u636e\u3002OracleLogMiner\u5728checkpoint\u65f6\u4fdd\u5b58\u5f53\u524d\u6d88\u8d39\u7684\u4f4d\u70b9\uff0c\u56e0\u6b64\u652f\u6301\u7eed\u8dd1\u3002"),(0,r.kt)("h2",{id:"\u4e8c\u652f\u6301\u7248\u672c"},"\u4e8c\u3001\u652f\u6301\u7248\u672c"),(0,r.kt)("p",null,"oracle10,oracle11,oracle12,oracle19\uff0c\u652f\u6301RAC,\u4e3b\u5907\u67b6\u6784"),(0,r.kt)("h2",{id:"\u4e09\u6570\u636e\u5e93\u914d\u7f6e"},"\u4e09\u3001\u6570\u636e\u5e93\u914d\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/chunjun-web/en/docs/chunjunDocs/connectors/logminer/LogMiner%E9%85%8D%E7%BD%AE"},"Oracle\u914d\u7f6eLogMiner")),(0,r.kt)("h2",{id:"\u56dblogminer\u539f\u7406"},"\u56db\u3001LogMiner\u539f\u7406"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/chunjun-web/en/docs/chunjunDocs/connectors/logminer/LogMiner%E5%8E%9F%E7%90%86"},"LogMiner\u539f\u7406")),(0,r.kt)("h2",{id:"\u4e94\u63d2\u4ef6\u540d\u79f0"},"\u4e94\u3001\u63d2\u4ef6\u540d\u79f0"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Sync"),(0,r.kt)("th",{parentName:"tr",align:null},"oraclelogminerreader\u3001oraclelogminersource"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SQL"),(0,r.kt)("td",{parentName:"tr",align:null},"oraclelogminer-x")))),(0,r.kt)("h2",{id:""}),(0,r.kt)("h2",{id:"\u516d\u53c2\u6570\u8bf4\u660e"},"\u516d\u3001\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("h3",{id:"1sync"},"1\u3001Sync"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"jdbcUrl"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1aoracle\u6570\u636e\u5e93\u7684JDBC URL\u94fe\u63a5"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1astring"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"username"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u7528\u6237\u540d"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1astring"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"password"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u5bc6\u7801"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1astring"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"table"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a \u9700\u8981\u76d1\u542c\u7684\u8868\uff0c\u683c\u5f0f\u4e3a\uff1aschema.table\uff0cschema\u4e0d\u80fd\u914d\u7f6e\u4e3a",(0,r.kt)("em",{parentName:"li"},"\uff0c\u4f46table\u53ef\u4ee5\u914d\u7f6e"),"\u76d1\u542c\u6307\u5b9a\u5e93\u4e0b\u6240\u6709\u7684\u8868\uff0c\u5982\uff1a",'["schema1.table1","schema1.table2","schema2.*"]'),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426\uff0c\u4e0d\u914d\u7f6e\u5219\u76d1\u542c\u9664",(0,r.kt)("inlineCode",{parentName:"li"},"SYS"),"\u5e93\u4ee5\u5916\u7684\u6240\u6709\u5e93\u7684\u6240\u6709\u8868\u53d8\u66f4\u4fe1\u606f"),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1a\u6570\u7ec4"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"splitUpdate"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u5f53\u6570\u636e\u66f4\u65b0\u7c7b\u578b\u4e3aupdate\u65f6\uff0c\u662f\u5426\u5c06update\u62c6\u5206\u4e3a\u4e24\u6761\u6570\u636e\uff0c\u5177\u4f53\u89c1\u3010\u4e03\u3001\u6570\u636e\u7ed3\u6784\u8bf4\u660e\u3011"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aboolean"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1afalse")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"cat"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u9700\u8981\u76d1\u542c\u7684\u64cd\u4f5c\u6570\u636e\u64cd\u4f5c\u7c7b\u578b\uff0c\u6709UPDATE,INSERT,DELETE\u4e09\u79cd\u53ef\u9009\uff0c\u5927\u5c0f\u5199\u4e0d\u654f\u611f\uff0c\u591a\u4e2a\u4ee5,\u5206\u5272"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1aUPDATE,INSERT,DELETE")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"readPosition"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1aOracle\u5b9e\u65f6\u91c7\u96c6\u7684\u91c7\u96c6\u8d77\u70b9"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u9009\u503c\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"all\uff1a \u4eceOracle\u6570\u636e\u5e93\u4e2d\u6700\u65e9\u7684\u5f52\u6863\u65e5\u5fd7\u7ec4\u5f00\u59cb\u91c7\u96c6(\u4e0d\u5efa\u8bae\u4f7f\u7528)"),(0,r.kt)("li",{parentName:"ul"},"current\uff1a\u4ece\u4efb\u52a1\u8fd0\u884c\u65f6\u5f00\u59cb\u91c7\u96c6"),(0,r.kt)("li",{parentName:"ul"},"time\uff1a \u4ece\u6307\u5b9a\u65f6\u95f4\u70b9\u5f00\u59cb\u91c7\u96c6"),(0,r.kt)("li",{parentName:"ul"},"scn\uff1a \u4ece\u6307\u5b9aSCN\u53f7\u5904\u5f00\u59cb\u91c7\u96c6"))),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1acurrent")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"startTime"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a \u6307\u5b9a\u91c7\u96c6\u8d77\u70b9\u7684\u6beb\u79d2\u7ea7\u65f6\u95f4\u6233"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5f53",(0,r.kt)("inlineCode",{parentName:"li"},"readPosition"),"\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"time"),"\u65f6\uff0c\u8be5\u53c2\u6570\u5fc5\u586b"),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aLong(\u6beb\u79d2\u7ea7\u65f6\u95f4\u6233)"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"startSCN"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a \u6307\u5b9a\u91c7\u96c6\u8d77\u70b9\u7684SCN\u53f7"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5f53",(0,r.kt)("inlineCode",{parentName:"li"},"readPosition"),"\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"scn"),"\u65f6\uff0c\u8be5\u53c2\u6570\u5fc5\u586b"),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fetchSize"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a \u6279\u91cf\u4ecev$logmnr_contents\u89c6\u56fe\u4e2d\u62c9\u53d6\u7684\u6570\u636e\u6761\u6570\uff0c\u5bf9\u4e8e\u5927\u6570\u636e\u91cf\u7684\u6570\u636e\u53d8\u66f4\uff0c\u8c03\u5927\u8be5\u503c\u53ef\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u589e\u52a0\u4efb\u52a1\u7684\u8bfb\u53d6\u901f\u5ea6"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aInteger"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a1000")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"queryTimeout"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a LogMiner\u6267\u884c\u67e5\u8be2SQL\u7684\u8d85\u65f6\u53c2\u6570\uff0c\u5355\u4f4d\u79d2"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aLong"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a300")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"supportAutoAddLog"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u542f\u52a8LogMiner\u662f\u5426\u81ea\u52a8\u6dfb\u52a0\u65e5\u5fd7\u7ec4(\u4e0d\u5efa\u8bae\u4f7f\u7528)"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aBoolean"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1afalse")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"pavingData"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u662f\u5426\u5c06\u89e3\u6790\u51fa\u7684json\u6570\u636e\u62cd\u5e73\uff0c\u5177\u4f53\u89c1\u3010\u4e03\u3001\u6570\u636e\u7ed3\u6784\u8bf4\u660e\u3011"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aboolean"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1afalse")))),(0,r.kt)("h3",{id:"2sql"},"2\u3001SQL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"url"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1aoracle\u6570\u636e\u5e93\u7684JDBC URL\u94fe\u63a5"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1astring"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"username"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u7528\u6237\u540d"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1astring"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"password"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u5bc6\u7801"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1astring"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"table"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u9700\u8981\u89e3\u6790\u7684\u6570\u636e\u8868\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1aSQL\u4efb\u52a1\u53ea\u652f\u6301\u76d1\u542c\u5355\u5f20\u8868\uff0c\u4e14\u6570\u636e\u683c\u5f0f\u4e3aschema.table"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1astring"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"cat"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u9700\u8981\u76d1\u542c\u7684\u64cd\u4f5c\u6570\u636e\u64cd\u4f5c\u7c7b\u578b\uff0c\u6709UPDATE,INSERT,DELETE\u4e09\u79cd\u53ef\u9009\uff0c\u5927\u5c0f\u5199\u4e0d\u654f\u611f\uff0c\u591a\u4e2a\u4ee5,\u5206\u5272"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1aUPDATE,INSERT,DELETE")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"read-position"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1aOracle\u5b9e\u65f6\u91c7\u96c6\u7684\u91c7\u96c6\u8d77\u70b9"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u9009\u503c\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"all\uff1a \u4eceOracle\u6570\u636e\u5e93\u4e2d\u6700\u65e9\u7684\u5f52\u6863\u65e5\u5fd7\u7ec4\u5f00\u59cb\u91c7\u96c6(\u4e0d\u5efa\u8bae\u4f7f\u7528)"),(0,r.kt)("li",{parentName:"ul"},"current\uff1a\u4ece\u4efb\u52a1\u8fd0\u884c\u65f6\u5f00\u59cb\u91c7\u96c6"),(0,r.kt)("li",{parentName:"ul"},"time\uff1a \u4ece\u6307\u5b9a\u65f6\u95f4\u70b9\u5f00\u59cb\u91c7\u96c6"),(0,r.kt)("li",{parentName:"ul"},"scn\uff1a \u4ece\u6307\u5b9aSCN\u53f7\u5904\u5f00\u59cb\u91c7\u96c6"))),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1acurrent")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"start-time"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a \u6307\u5b9a\u91c7\u96c6\u8d77\u70b9\u7684\u6beb\u79d2\u7ea7\u65f6\u95f4\u6233"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5f53",(0,r.kt)("inlineCode",{parentName:"li"},"readPosition"),"\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"time"),"\u65f6\uff0c\u8be5\u53c2\u6570\u5fc5\u586b"),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aLong(\u6beb\u79d2\u7ea7\u65f6\u95f4\u6233)"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"start-scn"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a \u6307\u5b9a\u91c7\u96c6\u8d77\u70b9\u7684SCN\u53f7"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5f53",(0,r.kt)("inlineCode",{parentName:"li"},"readPosition"),"\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"scn"),"\u65f6\uff0c\u8be5\u53c2\u6570\u5fc5\u586b"),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fetch-size"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a \u6279\u91cf\u4ecev$logmnr_contents\u89c6\u56fe\u4e2d\u62c9\u53d6\u7684\u6570\u636e\u6761\u6570\uff0c\u5bf9\u4e8e\u5927\u6570\u636e\u91cf\u7684\u6570\u636e\u53d8\u66f4\uff0c\u8c03\u5927\u8be5\u503c\u53ef\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u589e\u52a0\u4efb\u52a1\u7684\u8bfb\u53d6\u901f\u5ea6"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aInteger"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a1000")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"query-timeout"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a LogMiner\u6267\u884c\u67e5\u8be2SQL\u7684\u8d85\u65f6\u53c2\u6570\uff0c\u5355\u4f4d\u79d2"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aLong"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a300")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"support-auto-add-log"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u542f\u52a8LogMiner\u662f\u5426\u81ea\u52a8\u6dfb\u52a0\u65e5\u5fd7\u7ec4(\u4e0d\u5efa\u8bae\u4f7f\u7528)"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aBoolean"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1afalse")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"io-threads"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1aIO\u5904\u7406\u7ebf\u7a0b\u6570,\u6700\u5927\u7ebf\u7a0b\u6570\u4e3a3"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aint"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a1")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"max-log-file-size"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1alogminer\u4e00\u6b21\u6027\u52a0\u8f7d\u7684\u65e5\u5fd7\u6587\u4ef6\u7684\u5927\u5c0f\uff0c\u9ed8\u8ba45g\uff0c\u5355\u4f4dbyte"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1along"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a5",(0,r.kt)("em",{parentName:"li"},"1024"),"1024*1024")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"transaction-cache-num-size"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1alogminer\u53ef\u7f13\u5b58DML\u7684\u6570\u91cf"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1along"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a800")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"transaction-expire-time"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1alogminer\u53ef\u7f13\u5b58\u7684\u5931\u6548\u65f6\u95f4\uff0c\u5355\u4f4d\u5206\u949f"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aint"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a20")))),(0,r.kt)("h2",{id:"\u4e03\u6570\u636e\u7ed3\u6784"},"\u4e03\u3001\u6570\u636e\u7ed3\u6784"),(0,r.kt)("p",null,"\u57282021-06-29 23:42:19(\u65f6\u95f4\u6233\uff1a1624981339000)\u6267\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'INSERT INTO TIEZHU.RESULT1 ("id", "name", "age")\nVALUES (1, \'a\', 12)\n')),(0,r.kt)("p",null,"\u57282021-06-29 23:42:29(\u65f6\u95f4\u6233\uff1a1624981349000)\u6267\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'UPDATE TIEZHU.RESULT1 t\nSET t."id"  = 2,\n    t."age" = 112\nWHERE t."id" = 1\n')),(0,r.kt)("p",null,"\u57282021-06-29 23:42:34(\u65f6\u95f4\u6233\uff1a1624981354000)\u6267\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},' DELETE\n FROM TIEZHU.RESULT1\n WHERE "id" = 2 \n')),(0,r.kt)("p",null,"1\u3001pavingData = true, splitUpdate = false RowData\u4e2d\u7684\u6570\u636e\u4f9d\u6b21\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'//scn schema, table, ts, opTime, type, before_id, before_name, before_age, after_id, after_name, after_age\n[49982945,"TIEZHU", "RESULT1", 6815665753853923328, "2021-06-29 23:42:19.0", "INSERT", null, null, null, 1, "a", 12]\n[49982969,"TIEZHU", "RESULT1", 6815665796098953216, "2021-06-29 23:42:29.0", "UPDATE", 1, "a", 12 , 2, "a", 112]\n[49982973,"TIEZHU", "RESULT1", 6815665796140896256, "2021-06-29 23:42:34.0", "DELETE", 2, "a",112 , null, null, null]\n')),(0,r.kt)("p",null,"2\u3001pavingData = false, splitUpdate = false RowData\u4e2d\u7684\u6570\u636e\u4f9d\u6b21\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'//scn, schema, table,  ts, opTime, type, before, after\n[49982945, "TIEZHU", "RESULT1", 6815665753853923328, "2021-06-29 23:42:19.0", "INSERT", null, {"id":1, "name":"a", "age":12}]\n[49982969, "TIEZHU", "RESULT1", 6815665796098953216, "2021-06-29 23:42:29.0", "UPDATE", {"id":1, "name":"a", "age":12}, {"id":2, "name":"a", "age":112}]\n[49982973, "TIEZHU", "RESULT1", 6815665796140896256, "2021-06-29 23:42:34.0", "DELETE", {"id":2, "name":"a", "age":112}, null]\n')),(0,r.kt)("p",null,"3\u3001pavingData = true, splitUpdate = true RowData\u4e2d\u7684\u6570\u636e\u4f9d\u6b21\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'//scn, schema, table, ts, opTime, type, before_id, before_name, before_age, after_id, after_name, after_age\n[49982945,"TIEZHU", "RESULT1", 6815665753853923328, "2021-06-29 23:42:19.0", "INSERT", null, null, null, 1, "a",12 ]\n\n//scn, schema, table, opTime, ts, type, before_id, before_name, before_age\n[49982969, "TIEZHU", "RESULT1", 6815665796098953216, "2021-06-29 23:42:29.0", "UPDATE_BEFORE", 1, "a", 12]\n//scn, schema, table, opTime, ts, type, after_id, after_name, after_age\n[49982969, "TIEZHU", "RESULT1", 6815665796098953216, "2021-06-29 23:42:29.0", "UPDATE_AFTER", 2, "a", 112]\n\n//scn, schema, table, ts, opTime, type, before_id, before_name, before_age, after_id, after_name, after_age\n[49982973, "TIEZHU", "RESULT1", 6815665796140896256,  "2021-06-29 23:42:34.0", "DELETE", 2, "a", 112, null, null, null]\n\n\n')),(0,r.kt)("p",null,"4\u3001pavingData = false, splitUpdate = true RowData\u4e2d\u7684\u6570\u636e\u4f9d\u6b21\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'//scn, schema, table,  ts, opTime, type, before, after\n[49982945, "TIEZHU", "RESULT1", 6815665753853923328, "2021-06-29 23:42:19.0", "INSERT", null, {"id":1, "name":"a", "age":12}]\n//scn, schema, table,  ts, opTime, type, before\n[49982969, "TIEZHU", "RESULT1", 6815665796098953216, "2021-06-29 23:42:29.0", "UPDATE_BEFORE", {"id":1, "name":"a", "age":12}]\n//scn, schema, table,  ts, opTime, type, after\n[49982969, "TIEZHU", "RESULT1", 6815665796098953216, "2021-06-29 23:42:29.0", "UPDATE_AFTER", {"id":2, "name":"a", "age":112}]\n//scn, schema, table, ts, opTime, type, before, after\n[49982973, "TIEZHU", "RESULT1", 6815665796140896256, "2021-06-29 23:42:34.0",  "DELETE", {"id":2, "name":"a", "age":112}, null]\n\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"scn\uff1aOracle\u6570\u636e\u5e93\u53d8\u66f4\u8bb0\u5f55\u5bf9\u5e94\u7684scn\u53f7"),(0,r.kt)("li",{parentName:"ul"},"type\uff1a\u53d8\u66f4\u7c7b\u578b\uff0cINSERT\uff0cUPDATE\u3001DELETE"),(0,r.kt)("li",{parentName:"ul"},"opTime\uff1a\u6570\u636e\u5e93\u4e2dSQL\u7684\u6267\u884c\u65f6\u95f4"),(0,r.kt)("li",{parentName:"ul"},"ts\uff1a\u81ea\u589eID\uff0c\u4e0d\u91cd\u590d\uff0c\u53ef\u7528\u4e8e\u6392\u5e8f\uff0c\u89e3\u7801\u540e\u4e3aFlinkX\u7684\u4e8b\u4ef6\u65f6\u95f4\uff0c\u89e3\u7801\u89c4\u5219\u5982\u4e0b:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'long id=Long.parseLong("6815665753853923328");\n        long res=id>>22;\n        DateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");\n        System.out.println(sdf.format(res));        //2021-06-29 23:42:24\n')),(0,r.kt)("h2",{id:"\u516b\u6570\u636e\u7c7b\u578b"},"\u516b\u3001\u6570\u636e\u7c7b\u578b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u652f\u6301"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6570\u636e\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u652f\u6301"),(0,r.kt)("td",{parentName:"tr",align:null},"DATE,TIMESTAMP,TIMESTAMP WITH LOCAL TIME ZONE,TIMESTAMP WITH TIME ZONE, CHAR,NCHAR,NVARCHAR2,ROWID,VARCHAR2,VARCHAR,LONG,RAW,LONG RAW,INTERVAL YEAR,INTERVAL DAY,BLOB,CLOB,NCLOB, NUMBER,SMALLINT,INT INTEGER,FLOAT,DECIMAL,NUMERIC,BINARY_FLOAT,BINARY_DOUBLE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301"),(0,r.kt)("td",{parentName:"tr",align:null},"BFILE,XMLTYPE,Collections")))),(0,r.kt)("h2",{id:"\u4e5d\u811a\u672c\u793a\u4f8b"},"\u4e5d\u3001\u811a\u672c\u793a\u4f8b"),(0,r.kt)("p",null,"\u89c1\u9879\u76ee\u5185",(0,r.kt)("inlineCode",{parentName:"p"},"FlinkX : Local : Test"),"\u6a21\u5757\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"demo"),"\u6587\u4ef6\u5939\u3002"))}c.isMDXComponent=!0}}]);