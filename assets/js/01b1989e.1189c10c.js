"use strict";(self.webpackChunkchunjun_web=self.webpackChunkchunjun_web||[]).push([[995],{3905:function(t,e,a){a.d(e,{Zo:function(){return k},kt:function(){return c}});var l=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,l,n=function(t,e){if(null==t)return{};var a,l,n={},r=Object.keys(t);for(l=0;l<r.length;l++)a=r[l],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)a=r[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var u=l.createContext({}),m=function(t){var e=l.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},k=function(t){var e=m(t.components);return l.createElement(u.Provider,{value:e},t.children)},N={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},o=l.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,u=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),o=m(a),c=n,s=o["".concat(u,".").concat(c)]||o[c]||N[c]||r;return a?l.createElement(s,p(p({ref:e},k),{},{components:a})):l.createElement(s,p({ref:e},k))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,p=new Array(r);p[0]=o;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:n,p[1]=i;for(var m=2;m<r;m++)p[m]=a[m];return l.createElement.apply(null,p)}return l.createElement.apply(null,a)}o.displayName="MDXCreateElement"},4844:function(t,e,a){a.r(e),a.d(e,{assets:function(){return k},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return N}});var l=a(7462),n=a(3366),r=(a(7294),a(3905)),p=["components"],i={},u="Mysql Source",m={unversionedId:"chunjunDocs/connectors/mysql/mysql-source",id:"chunjunDocs/connectors/mysql/mysql-source",title:"Mysql Source",description:"\u4e00\u3001\u4ecb\u7ecd",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/chunjunDocs/connectors/mysql/mysql-source.md",sourceDirName:"chunjunDocs/connectors/mysql",slug:"/chunjunDocs/connectors/mysql/mysql-source",permalink:"/chunjun-web/docs/chunjunDocs/connectors/mysql/mysql-source",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chunjunDocs/connectors/mysql/mysql-source.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mysql Sink",permalink:"/chunjun-web/docs/chunjunDocs/connectors/mysql/mysql-sink"},next:{title:"Oracle Lookup",permalink:"/chunjun-web/docs/chunjunDocs/connectors/oracle/oracle-lookup"}},k={},N=[{value:"\u4e00\u3001\u4ecb\u7ecd",id:"\u4e00\u4ecb\u7ecd",level:2},{value:"\u4e8c\u3001\u652f\u6301\u7248\u672c",id:"\u4e8c\u652f\u6301\u7248\u672c",level:2},{value:"\u4e09\u3001\u63d2\u4ef6\u540d\u79f0",id:"\u4e09\u63d2\u4ef6\u540d\u79f0",level:2},{value:"\u56db\u3001\u53c2\u6570\u8bf4\u660e",id:"\u56db\u53c2\u6570\u8bf4\u660e",level:2},{value:"1\u3001Sync",id:"1sync",level:3},{value:"2\u3001SQL",id:"2sql",level:3},{value:"\u4e94\u3001\u6570\u636e\u7c7b\u578b",id:"\u4e94\u6570\u636e\u7c7b\u578b",level:2},{value:"\u516d\u3001\u811a\u672c\u793a\u4f8b",id:"\u516d\u811a\u672c\u793a\u4f8b",level:2}],o={toc:N};function c(t){var e=t.components,a=(0,n.Z)(t,p);return(0,r.kt)("wrapper",(0,l.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mysql-source"},"Mysql Source"),(0,r.kt)("h2",{id:"\u4e00\u4ecb\u7ecd"},"\u4e00\u3001\u4ecb\u7ecd"),(0,r.kt)("p",null,"\u652f\u6301\u4ece mysql \u79bb\u7ebf\u8bfb\u53d6\uff0c\u652f\u6301 mysql \u5b9e\u65f6\u95f4\u9694\u8f6e\u8be2\u8bfb\u53d6"),(0,r.kt)("h2",{id:"\u4e8c\u652f\u6301\u7248\u672c"},"\u4e8c\u3001\u652f\u6301\u7248\u672c"),(0,r.kt)("p",null,"mysql5.x"),(0,r.kt)("h2",{id:"\u4e09\u63d2\u4ef6\u540d\u79f0"},"\u4e09\u3001\u63d2\u4ef6\u540d\u79f0"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Sync"),(0,r.kt)("th",{parentName:"tr",align:null},"mysqlsource\u3001mysqlreader"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SQL"),(0,r.kt)("td",{parentName:"tr",align:null},"mysql-x")))),(0,r.kt)("h2",{id:"\u56db\u53c2\u6570\u8bf4\u660e"},"\u56db\u3001\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("h3",{id:"1sync"},"1\u3001Sync"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"connection")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6570\u636e\u5e93\u8fde\u63a5\u53c2\u6570\uff0c\u5305\u542b jdbcUrl\u3001schema\u3001table \u7b49\u53c2\u6570"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aList"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},'"connection": [{\n "jdbcUrl": ["jdbc:mysql://0.0.0.1:3306/database?useSSL=false"],\n "table": ["table"],\n "schema":"public"\n}]\n')),(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"jdbcUrl")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u9488\u5bf9\u5173\u7cfb\u578b\u6570\u636e\u5e93\u7684 jdbc \u8fde\u63a5\u5b57\u7b26\u4e32,jdbcUrl \u53c2\u8003\u6587\u6863\uff1a",(0,r.kt)("a",{parentName:"li",href:"http://dev.mysql.com/doc/connector-j/en/connector-j-reference-configuration-properties.html"},"MySQL \u5b98\u65b9\u6587\u6863")),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1astring"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"schema")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6570\u636e\u5e93 schema \u540d"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1astring"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"table")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u76ee\u7684\u8868\u7684\u8868\u540d\u79f0\u3002\u76ee\u524d\u53ea\u652f\u6301\u914d\u7f6e\u5355\u4e2a\u8868\uff0c\u540e\u7eed\u4f1a\u652f\u6301\u591a\u8868"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aList"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"username")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6570\u636e\u6e90\u7684\u7528\u6237\u540d"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"password")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6570\u636e\u6e90\u6307\u5b9a\u7528\u6237\u540d\u7684\u5bc6\u7801"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"fetchSize")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u4e00\u6b21\u6027\u4ece\u6570\u636e\u5e93\u4e2d\u8bfb\u53d6\u591a\u5c11\u6761\u6570\u636e\uff0cMySQL \u9ed8\u8ba4\u4e00\u6b21\u5c06\u6240\u6709\u7ed3\u679c\u90fd\u8bfb\u53d6\u5230\u5185\u5b58\u4e2d\uff0c\u5728\u6570\u636e\u91cf\u5f88\u5927\u65f6\u53ef\u80fd\u4f1a\u9020\u6210 OOM\uff0c\u8bbe\u7f6e\u8fd9\u4e2a\u53c2\u6570\u53ef\u4ee5\u63a7\u5236\u6bcf\u6b21\u8bfb\u53d6 fetchSize \u6761\u6570\u636e\uff0c\u800c\u4e0d\u662f\u9ed8\u8ba4\u7684\u628a\u6240\u6709\u6570\u636e\u4e00\u6b21\u8bfb\u53d6\u51fa\u6765\uff1b\u5f00\u542f fetchSize \u9700\u8981\u6ee1\u8db3\uff1a\u6570\u636e\u5e93\u7248\u672c\u8981\u9ad8\u4e8e 5.0.2\u3001\u8fde\u63a5\u53c2\u6570 useCursorFetch=true\u3002\n\u6ce8\u610f\uff1a\u6b64\u53c2\u6570\u7684\u503c\u4e0d\u53ef\u8bbe\u7f6e\u8fc7\u5927\uff0c\u5426\u5219\u4f1a\u8bfb\u53d6\u8d85\u65f6\uff0c\u5bfc\u81f4\u4efb\u52a1\u5931\u8d25\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aint"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a1024",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"where")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u7b5b\u9009\u6761\u4ef6\uff0creader \u63d2\u4ef6\u6839\u636e\u6307\u5b9a\u7684 column\u3001table\u3001where \u6761\u4ef6\u62fc\u63a5 SQL\uff0c\u5e76\u6839\u636e\u8fd9\u4e2a SQL \u8fdb\u884c\u6570\u636e\u62bd\u53d6\u3002\u5728\u5b9e\u9645\u4e1a\u52a1\u573a\u666f\u4e2d\uff0c\u5f80\u5f80\u4f1a\u9009\u62e9\u5f53\u5929\u7684\u6570\u636e\u8fdb\u884c\u540c\u6b65\uff0c\u53ef\u4ee5\u5c06 where \u6761\u4ef6\u6307\u5b9a\u4e3a gmt_create > time\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a\u4e0d\u53ef\u4ee5\u5c06 where \u6761\u4ef6\u6307\u5b9a\u4e3a limit 10\uff0climit \u4e0d\u662f SQL \u7684\u5408\u6cd5 where \u5b50\u53e5\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"splitPk")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u5f53 speed \u914d\u7f6e\u4e2d\u7684 channel \u5927\u4e8e 1 \u65f6\u6307\u5b9a\u6b64\u53c2\u6570\uff0cReader \u63d2\u4ef6\u6839\u636e\u5e76\u53d1\u6570\u548c\u6b64\u53c2\u6570\u6307\u5b9a\u7684\u5b57\u6bb5\u62fc\u63a5 sql\uff0c\u4f7f\u6bcf\u4e2a\u5e76\u53d1\u8bfb\u53d6\u4e0d\u540c\u7684\u6570\u636e\uff0c\u63d0\u5347\u8bfb\u53d6\u901f\u7387\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63a8\u8350 splitPk \u4f7f\u7528\u8868\u4e3b\u952e\uff0c\u56e0\u4e3a\u8868\u4e3b\u952e\u901a\u5e38\u60c5\u51b5\u4e0b\u6bd4\u8f83\u5747\u5300\uff0c\u56e0\u6b64\u5207\u5206\u51fa\u6765\u7684\u5206\u7247\u4e5f\u4e0d\u5bb9\u6613\u51fa\u73b0\u6570\u636e\u70ed\u70b9\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u76ee\u524d splitPk \u4ec5\u652f\u6301\u6574\u5f62\u6570\u636e\u5207\u5206\uff0c\u4e0d\u652f\u6301\u6d6e\u70b9\u3001\u5b57\u7b26\u4e32\u3001\u65e5\u671f\u7b49\u5176\u4ed6\u7c7b\u578b\u3002\u5982\u679c\u7528\u6237\u6307\u5b9a\u5176\u4ed6\u975e\u652f\u6301\u7c7b\u578b\uff0cFlinkX \u5c06\u62a5\u9519\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c channel \u5927\u4e8e 1 \u4f46\u662f\u6ca1\u6709\u914d\u7f6e\u6b64\u53c2\u6570\uff0c\u4efb\u52a1\u5c06\u7f6e\u4e3a\u5931\u8d25\u3002"))),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"queryTimeOut")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u67e5\u8be2\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a\u5f53\u6570\u636e\u91cf\u5f88\u5927\uff0c\u6216\u8005\u4ece\u89c6\u56fe\u67e5\u8be2\uff0c\u6216\u8005\u81ea\u5b9a\u4e49 sql \u67e5\u8be2\u65f6\uff0c\u53ef\u901a\u8fc7\u6b64\u53c2\u6570\u6307\u5b9a\u8d85\u65f6\u65f6\u95f4\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aint"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a1000",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"customSql")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u81ea\u5b9a\u4e49\u7684\u67e5\u8be2\u8bed\u53e5\uff0c\u5982\u679c\u53ea\u6307\u5b9a\u5b57\u6bb5\u4e0d\u80fd\u6ee1\u8db3\u9700\u6c42\u65f6\uff0c\u53ef\u901a\u8fc7\u6b64\u53c2\u6570\u6307\u5b9a\u67e5\u8be2\u7684 sql\uff0c\u53ef\u4ee5\u662f\u4efb\u610f\u590d\u6742\u7684\u67e5\u8be2\u8bed\u53e5\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ea\u80fd\u662f\u67e5\u8be2\u8bed\u53e5\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4\u4efb\u52a1\u5931\u8d25\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u8bed\u53e5\u8fd4\u56de\u7684\u5b57\u6bb5\u9700\u8981\u548c column \u5217\u8868\u91cc\u7684\u5b57\u6bb5\u5bf9\u5e94\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u6307\u5b9a\u4e86\u6b64\u53c2\u6570\u65f6\uff0cconnection \u91cc\u6307\u5b9a\u7684 table \u65e0\u6548\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u6307\u5b9a\u6b64\u53c2\u6570\u65f6\uff0ccolumn \u5fc5\u987b\u6307\u5b9a\u5177\u4f53\u5b57\u6bb5\u4fe1\u606f\uff0c\u4e0d\u80fd\u4ee5","*","\u53f7\u4ee3\u66ff\uff1b"))),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"column")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u9700\u8981\u8bfb\u53d6\u7684\u5b57\u6bb5\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u683c\u5f0f\uff1a\u652f\u6301 3 \u79cd\u683c\u5f0f",(0,r.kt)("br",null),'1. \u8bfb\u53d6\u5168\u90e8\u5b57\u6bb5\uff0c\u5982\u679c\u5b57\u6bb5\u6570\u91cf\u5f88\u591a\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u5199\u6cd5\uff1a ```bash "column":["*"] ``` 2. \u53ea\u6307\u5b9a\u5b57\u6bb5\u540d\u79f0\uff1a ``` "column":["id","name"] ``` 3. \u6307\u5b9a\u5177\u4f53\u4fe1\u606f\uff1a')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-JSON"},'  "column": {\n    "name": "col",\n    "type": "datetime",\n    "format": "yyyy-MM-dd hh:mm:ss",\n    "value": "value"\n  }\n')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5c5e\u6027\u8bf4\u660e:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"name\uff1a\u5b57\u6bb5\u540d\u79f0"),(0,r.kt)("li",{parentName:"ul"},"type\uff1a\u5b57\u6bb5\u7c7b\u578b\uff0c\u53ef\u4ee5\u548c\u6570\u636e\u5e93\u91cc\u7684\u5b57\u6bb5\u7c7b\u578b\u4e0d\u4e00\u6837\uff0c\u7a0b\u5e8f\u4f1a\u505a\u4e00\u6b21\u7c7b\u578b\u8f6c\u6362"),(0,r.kt)("li",{parentName:"ul"},"format\uff1a\u5982\u679c\u5b57\u6bb5\u662f\u65f6\u95f4\u5b57\u7b26\u4e32\uff0c\u53ef\u4ee5\u6307\u5b9a\u65f6\u95f4\u7684\u683c\u5f0f\uff0c\u5c06\u5b57\u6bb5\u7c7b\u578b\u8f6c\u4e3a\u65e5\u671f\u683c\u5f0f\u8fd4\u56de"),(0,r.kt)("li",{parentName:"ul"},"value\uff1a\u5982\u679c\u6570\u636e\u5e93\u91cc\u4e0d\u5b58\u5728\u6307\u5b9a\u7684\u5b57\u6bb5\uff0c\u5219\u4f1a\u628a value \u7684\u503c\u4f5c\u4e3a\u5e38\u91cf\u5217\u8fd4\u56de\uff0c\u5982\u679c\u6307\u5b9a\u7684\u5b57\u6bb5\u5b58\u5728\uff0c\u5f53\u6307\u5b9a\u5b57\u6bb5\u7684\u503c\u4e3a null \u65f6\uff0c\u4f1a\u4ee5\u6b64 value \u503c\u4f5c\u4e3a\u9ed8\u8ba4\u503c\u8fd4\u56de"))),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"polling")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u662f\u5426\u5f00\u542f\u95f4\u9694\u8f6e\u8be2\uff0c\u5f00\u542f\u540e\u4f1a\u6839\u636e pollingInterval \u8f6e\u8be2\u95f4\u9694\u65f6\u95f4\u5468\u671f\u6027\u7684\u4ece\u6570\u636e\u5e93\u62c9\u53d6\u6570\u636e\u3002\u5f00\u542f\u95f4\u9694\u8f6e\u8be2\u8fd8\u9700\u914d\u7f6e\u53c2\u6570 pollingInterval\uff0cincreColumn\uff0c\u53ef\u4ee5\u9009\u62e9\u914d\u7f6e\u53c2\u6570 startLocation\u3002\u82e5\u4e0d\u914d\u7f6e\u53c2\u6570 startLocation\uff0c\u4efb\u52a1\u542f\u52a8\u65f6\u5c06\u4f1a\u4ece\u6570\u636e\u5e93\u4e2d\u67e5\u8be2\u589e\u91cf\u5b57\u6bb5\u6700\u5927\u503c\u4f5c\u4e3a\u8f6e\u8be2\u7684\u8d77\u59cb\u4f4d\u7f6e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aBoolean"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1afalse",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"pollingInterval")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u8f6e\u8be2\u95f4\u9694\u65f6\u95f4\uff0c\u4ece\u6570\u636e\u5e93\u4e2d\u62c9\u53d6\u6570\u636e\u7684\u95f4\u9694\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a 5000 \u6beb\u79d2\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1along"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a5000",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"increColumn")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u589e\u91cf\u5b57\u6bb5\uff0c\u53ef\u4ee5\u662f\u5bf9\u5e94\u7684\u589e\u91cf\u5b57\u6bb5\u540d\uff0c\u4e5f\u53ef\u4ee5\u662f\u7eaf\u6570\u5b57\uff0c\u8868\u793a\u589e\u91cf\u5b57\u6bb5\u5728 column \u4e2d\u7684\u987a\u5e8f\u4f4d\u7f6e\uff08\u4ece 0 \u5f00\u59cb\uff09"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString \u6216 int"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"startLocation")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u589e\u91cf\u67e5\u8be2\u8d77\u59cb\u4f4d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"useMaxFunc")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u7528\u4e8e\u6807\u8bb0\u662f\u5426\u4fdd\u5b58 endLocation \u4f4d\u7f6e\u7684\u4e00\u6761\u6216\u591a\u6761\u6570\u636e\uff0ctrue\uff1a\u4e0d\u4fdd\u5b58\uff0cfalse(\u9ed8\u8ba4)\uff1a\u4fdd\u5b58\uff0c \u67d0\u4e9b\u60c5\u51b5\u4e0b\u53ef\u80fd\u51fa\u73b0\u6700\u540e\u51e0\u6761\u6570\u636e\u88ab\u91cd\u590d\u8bb0\u5f55\u7684\u60c5\u51b5\uff0c\u53ef\u4ee5\u5c06\u6b64\u53c2\u6570\u914d\u7f6e\u4e3a true"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aBoolean"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1afalse",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"requestAccumulatorInterval")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u53d1\u9001\u67e5\u8be2\u7d2f\u52a0\u5668\u8bf7\u6c42\u7684\u95f4\u9694\u65f6\u95f4\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aint"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a2",(0,r.kt)("br",null))))),(0,r.kt)("h3",{id:"2sql"},"2\u3001SQL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"connector")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1amysql-x"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"url")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1ajdbc:mysql://localhost:3306/test"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"schema")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6570\u636e\u5e93 schema \u540d"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1astring"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"table-name")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u8868\u540d"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0\uff1a",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"username")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1ausername"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"password")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1apassword"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"scan.polling-interval")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u95f4\u9694\u8f6e\u8bad\u65f6\u95f4\u3002\u975e\u5fc5\u586b(\u4e0d\u586b\u4e3a\u79bb\u7ebf\u4efb\u52a1)\uff0c\u65e0\u9ed8\u8ba4"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"scan.parallelism")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u5e76\u884c\u5ea6"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"scan.fetch-size")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6bcf\u6b21\u4ece\u6570\u636e\u5e93\u4e2d fetch \u5927\u5c0f\uff0c\u5355\u4f4d\uff1a\u6761\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a1024",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"scan.query-timeout")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6570\u636e\u5e93\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\uff1a\u79d2\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a1",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"scan.partition.column")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u591a\u5e76\u884c\u5ea6\u8bfb\u53d6\u7684\u5207\u5206\u5b57\u6bb5"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"scan.partition.strategy")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6570\u636e\u5206\u7247\u7b56\u7565"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1arange",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"scan.increment.column")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u589e\u91cf\u5b57\u6bb5\u540d\u79f0"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"scan.increment.column-type")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u589e\u91cf\u5b57\u6bb5\u7c7b\u578b"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"scan.start-location")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u589e\u91cf\u5b57\u6bb5\u5f00\u59cb\u4f4d\u7f6e,\u5982\u679c\u4e0d\u6307\u5b9a\u5219\u5148\u540c\u6b65\u6240\u6709\uff0c\u7136\u540e\u5728\u589e\u91cf"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"scan.restore.columnname")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u5f00\u542f\u4e86 cp\uff0c\u4efb\u52a1\u4ece sp/cp \u7eed\u8dd1\u5b57\u6bb5\u540d\u79f0\u3002\u5982\u679c\u7eed\u8dd1\uff0c\u5219\u4f1a\u8986\u76d6 scan.start-location \u5f00\u59cb\u4f4d\u7f6e\uff0c\u4ece\u7eed\u8dd1\u70b9\u5f00\u59cb"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"scan.restore.columntype")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u5f00\u542f\u4e86 cp\uff0c\u4efb\u52a1\u4ece sp/cp \u7eed\u8dd1\u5b57\u6bb5\u7c7b\u578b"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null))))),(0,r.kt)("h2",{id:"\u4e94\u6570\u636e\u7c7b\u578b"},"\u4e94\u3001\u6570\u636e\u7c7b\u578b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u652f\u6301"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u7c7b\u578b\u540d\u79f0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u652f\u6301"),(0,r.kt)("td",{parentName:"tr",align:"center"},"BOOLEAN\u3001BIT\u3001TINYINT\u3001TINYINT UNSIGNED\u3001SMALLINT\u3001SMALLINT UNSIGNED\u3001MEDIUMINT\u3001MEDIUMINT UNSIGNED\u3001 INT\u3001INT UNSIGNED\u3001INTEGER\u3001INT UNSIGNED\u3001BIGINT\u3001BIGINT UNSIGNED\u3001REAL\u3001FLOAT\u3001FLOAT UNSIGNED\u3001DECIMAL\u3001DECIMAL UNSIGNED\u3001NUMERIC\u3001DOUBLE\u3001DOUBLE UNSIGNED\u3001STRING\u3001VARCHAR\u3001CHAR\u3001TIMESTAMP \u3001DATETIME\u3001DATE\u3001TIME\u3001YEAR\u3001TINYBLOB\u3001BLOB\u3001MEDIUMBLOB\u3001LONGBLOB\u3001TINYTEXT\u3001TEXT\u3001MEDIUMTEXT\u3001LONGTEXT\u3001BINARY\u3001VARBINARY\u3001JSON\u3001ENUM\u3001SET\u3001GEOMETRY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u4e0d\u652f\u6301"),(0,r.kt)("td",{parentName:"tr",align:"center"},"ARRAY\u3001MAP\u3001STRUCT\u3001UNION")))),(0,r.kt)("h2",{id:"\u516d\u811a\u672c\u793a\u4f8b"},"\u516d\u3001\u811a\u672c\u793a\u4f8b"),(0,r.kt)("p",null,"\u89c1\u9879\u76ee\u5185",(0,r.kt)("inlineCode",{parentName:"p"},"flinkx-examples"),"\u6587\u4ef6\u5939\u3002"))}c.isMDXComponent=!0}}]);