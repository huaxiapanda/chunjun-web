"use strict";(self.webpackChunkchunjun_web=self.webpackChunkchunjun_web||[]).push([[7698],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),k=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},m=function(e){var t=k(e.components);return a.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=k(n),c=l,N=s["".concat(p,".").concat(c)]||s[c]||o[c]||r;return n?a.createElement(N,u(u({ref:t},m),{},{components:n})):a.createElement(N,u({ref:t},m))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,u=new Array(r);u[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,u[1]=i;for(var k=2;k<r;k++)u[k]=n[k];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3754:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return i},metadata:function(){return k},toc:function(){return o}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),u=["components"],i={},p="Hbase Sink",k={unversionedId:"chunjunDocs/connectors/hbase/hbase-sink",id:"chunjunDocs/connectors/hbase/hbase-sink",title:"Hbase Sink",description:"\u4e00\u3001\u4ecb\u7ecd",source:"@site/docs/chunjunDocs/connectors/hbase/hbase-sink.md",sourceDirName:"chunjunDocs/connectors/hbase",slug:"/chunjunDocs/connectors/hbase/hbase-sink",permalink:"/chunjun-web/en/docs/chunjunDocs/connectors/hbase/hbase-sink",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chunjunDocs/connectors/hbase/hbase-sink.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"hbase-lookup",permalink:"/chunjun-web/en/docs/chunjunDocs/connectors/hbase/hbase-lookup"},next:{title:"Hbase Source",permalink:"/chunjun-web/en/docs/chunjunDocs/connectors/hbase/hbase-source"}},m={},o=[{value:"\u4e00\u3001\u4ecb\u7ecd",id:"\u4e00\u4ecb\u7ecd",level:2},{value:"\u4e8c\u3001\u652f\u6301\u7248\u672c",id:"\u4e8c\u652f\u6301\u7248\u672c",level:2},{value:"\u4e09\u3001\u63d2\u4ef6\u540d\u79f0",id:"\u4e09\u63d2\u4ef6\u540d\u79f0",level:2},{value:"\u56db\u3001\u53c2\u6570\u8bf4\u660e",id:"\u56db\u53c2\u6570\u8bf4\u660e",level:2},{value:"1\u3001Sync",id:"1sync",level:3},{value:"2\u3001SQL",id:"2sql",level:3},{value:"\u4e94\u3001\u6570\u636e\u7c7b\u578b",id:"\u4e94\u6570\u636e\u7c7b\u578b",level:2},{value:"\u516d\u3001\u811a\u672c\u793a\u4f8b",id:"\u516d\u811a\u672c\u793a\u4f8b",level:2}],s={toc:o};function c(e){var t=e.components,n=(0,l.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hbase-sink"},"Hbase Sink"),(0,r.kt)("h2",{id:"\u4e00\u4ecb\u7ecd"},"\u4e00\u3001\u4ecb\u7ecd"),(0,r.kt)("p",null,"hbase sink"),(0,r.kt)("h2",{id:"\u4e8c\u652f\u6301\u7248\u672c"},"\u4e8c\u3001\u652f\u6301\u7248\u672c"),(0,r.kt)("p",null,"hbase1.4"),(0,r.kt)("h2",{id:"\u4e09\u63d2\u4ef6\u540d\u79f0"},"\u4e09\u3001\u63d2\u4ef6\u540d\u79f0"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Sync"),(0,r.kt)("th",{parentName:"tr",align:null},"hbasesink\u3001hbasewriter"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SQL"),(0,r.kt)("td",{parentName:"tr",align:null},"hbase14-x")))),(0,r.kt)("h2",{id:"\u56db\u53c2\u6570\u8bf4\u660e"},"\u56db\u3001\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("h3",{id:"1sync"},"1\u3001Sync"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"table"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u8868\u540d"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"encoding"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u7f16\u7801"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1astring"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1autf-8")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"nullMode"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u5b57\u6bb5\u503c\u4e3a\u7a7a\u65f6\u5199\u5165\u6a21\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u9009\uff1aSKIP\uff1a\u8df3\u8fc7\uff0c\u6b64\u5b57\u6bb5\u4e0d\u5199\u5165\uff0cEMPTY\uff1a\u7a7a\u5b57\u8282\u6570\u7ec4\u4ee3\u66ff"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1astring"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1aSKIP")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"walFlag")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u662f\u5426\u8df3\u8fc7WAL"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aBoolean"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1afalse",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"writeBufferSize")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u8bbe\u7f6eHBae client\u7684\u5199buffer\u5927\u5c0f\uff0c\u5355\u4f4d\u5b57\u8282"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aLong"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a 8 ",(0,r.kt)("em",{parentName:"li"}," 1024 ")," 1024",(0,r.kt)("br",null))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"rowkeyExpress"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a \u7528\u4e8e\u6784\u9020rowkey\u7684\u63cf\u8ff0\u4fe1\u606f\uff0c\u91c7\u7528\u5b57\u7b26\u4e32\u683c\u5f0f\uff0c\u5f62\u5f0f\u5982\u4e0b\n\u5b57\u7b26\u4e32\u683c\u5f0f\u4e3a\uff1a$(cf:col)\uff0c\u53ef\u4ee5\u591a\u4e2a\u5b57\u6bb5\u7ec4\u5408\uff1a$(cf:col1)_$(cf:col2)\uff0c\n\u53ef\u4ee5\u4f7f\u7528md5\u51fd\u6570\uff1amd5($(cf:col))"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"versionColumnIndex")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6307\u5b9a\u5199\u5165hbase\u7684\u65f6\u95f4\u6233\u3002\u652f\u6301\uff1a\u5f53\u524d\u65f6\u95f4\u3001\u6307\u5b9a\u65f6\u95f4\u5217\uff0c\u6307\u5b9a\u65f6\u95f4\uff0c\u4e09\u8005\u9009\u4e00\u3002\u82e5\u4e0d\u914d\u7f6e\u8868\u793a\u7528\u5f53\u524d\u65f6\u95f4\u3002index\uff1a\u6307\u5b9a\u5bf9\u5e94reader\u7aefcolumn\u7684\u7d22\u5f15\uff0c\u4ece0\u5f00\u59cb\uff0c\u9700\u4fdd\u8bc1\u80fd\u8f6c\u6362\u4e3along,\u82e5\u662fDate\u7c7b\u578b\uff0c\u4f1a\u5c1d\u8bd5\u7528yyyy-MM-dd HH:mm:ss\u548cyyyy-MM-dd HH:mm:ss SSS\u53bb\u89e3\u6790\uff1b\u82e5\u4e0d\u6307\u5b9aindex\uff1bvalue\uff1a\u6307\u5b9a\u65f6\u95f4\u7684\u503c,\u7c7b\u578b\u4e3a\u5b57\u7b26\u4e32\u3002\n\u6ce8\u610f\uff0c\u5728hbase\u4e2d\u67e5\u8be2\u9ed8\u8ba4\u4f1a\u663e\u793a\u65f6\u95f4\u6233\u6700\u5927\u7684\u6570\u636e\uff0c\u56e0\u6b64\u7b80\u5355\u67e5\u8be2\u53ef\u80fd\u4f1a\u51fa\u73b0\u770b\u4e0d\u5230\u66f4\u65b0\u7684\u60c5\u51b5\uff0c\u9700\u8981\u52a0\u8fc7\u6ee4\u6761\u4ef6\u67e5\u8be2\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aList"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null)))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"versionColumnValue")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'\u63cf\u8ff0\uff1a\u76ee\u7684\u8868\u4e2d\u7684\u6240\u6709\u5b57\u6bb5\uff0c\u5b57\u6bb5\u4e4b\u95f4\u7528\u82f1\u6587\u9017\u53f7\u5206\u9694\u3002\u4f8b\u5982: "column": ','["id","name","age","hobby"]',"\uff0c\u5982\u679c\u4e0d\u914d\u7f6e\uff0c\u5c06\u5728\u7cfb\u7edf\u8868\u4e2d\u83b7\u53d6"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aList"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null))))),(0,r.kt)("h3",{id:"2sql"},"2\u3001SQL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"connector"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1ahbase14-x"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"properties.zookeeper.znode.parent"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1ahbase\u5728zk\u7684\u8def\u5f84"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1astring"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a/hbase",(0,r.kt)("br",null))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"properties.zookeeper.quorum"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1azk\u5730\u5740"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"table-name"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u8868\u540d"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0\uff1a",(0,r.kt)("br",null))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"sink.buffer-flush.max-size"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6bcf\u4e2a\u5199\u8bf7\u6c42\u7f13\u51b2\u884c\u7684\u6700\u5927\u5185\u5b58\u5927\u5c0f\u3002\u8fd9\u6837\u53ef\u4ee5\u63d0\u9ad8HBase\u5199\u6570\u636e\u7684\u6027\u80fd\uff0c\u4f46\u53ef\u80fd\u4f1a\u589e\u52a0\u65f6\u5ef6\u3002\u53ef\u4ee5\u8bbe\u7f6e\u4e3a'0'\u6765\u7981\u7528\u5b83\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a2mb",(0,r.kt)("br",null))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"sink.buffer-flush.max-rows"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6bcf\u4e2a\u5199\u5165\u8bf7\u6c42\u8981\u7f13\u51b2\u7684\u6700\u5927\u884c\u6570\u3002\u8fd9\u6837\u53ef\u4ee5\u63d0\u9ad8HBase\u5199\u6570\u636e\u7684\u6027\u80fd\uff0c\u4f46\u53ef\u80fd\u4f1a\u589e\u52a0\u65f6\u5ef6\u3002\u53ef\u4ee5\u8bbe\u7f6e\u4e3a'0'\u6765\u7981\u7528\u5b83\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aint"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a1000",(0,r.kt)("br",null))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"sink.buffer-flush.interval"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6279\u91cf\u5199\u65f6\u95f4\u95f4\u9694\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a10000",(0,r.kt)("br",null))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"sink.parallelism"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u5199\u5165\u7ed3\u679c\u7684\u5e76\u884c\u5ea6"),(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u7c7b\u578b\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0",(0,r.kt)("br",null))))),(0,r.kt)("h2",{id:"\u4e94\u6570\u636e\u7c7b\u578b"},"\u4e94\u3001\u6570\u636e\u7c7b\u578b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u662f\u5426\u652f\u6301"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u7c7b\u578b\u540d\u79f0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u652f\u6301"),(0,r.kt)("td",{parentName:"tr",align:"center"},"INT\u3001LONG\u3001DOUBLE\u3001FLOAT\u3001SHORT\u3001BOOLEAN\u3001STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u6682\u4e0d\u652f\u6301"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u4ec5\u5728 Sync \u4e2d\u652f\u6301"),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("h2",{id:"\u516d\u811a\u672c\u793a\u4f8b"},"\u516d\u3001\u811a\u672c\u793a\u4f8b"),(0,r.kt)("p",null,"\u89c1\u9879\u76ee\u5185",(0,r.kt)("inlineCode",{parentName:"p"},"flinkx-examples"),"\u6587\u4ef6\u5939\u3002"))}c.isMDXComponent=!0}}]);