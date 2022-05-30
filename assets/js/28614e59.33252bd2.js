"use strict";(self.webpackChunkchunjun_web=self.webpackChunkchunjun_web||[]).push([[2684],{3905:function(e,a,n){n.d(a,{Zo:function(){return g},kt:function(){return m}});var l=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,l,t=function(e,a){if(null==e)return{};var n,l,t={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=l.createContext({}),s=function(e){var a=l.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},g=function(e){var a=s(e.components);return l.createElement(c.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},p=l.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,c=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=t,u=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return n?l.createElement(u,o(o({ref:a},g),{},{components:n})):l.createElement(u,o({ref:a},g))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,o=new Array(r);o[0]=p;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9177:function(e,a,n){n.r(a),n.d(a,{assets:function(){return g},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var l=n(7462),t=n(3366),r=(n(7294),n(3905)),o=["components"],i={},c="Oracle\u914d\u7f6eLogMiner",s={unversionedId:"chunjunDocs/connectors/logminer/LogMiner\u914d\u7f6e",id:"chunjunDocs/connectors/logminer/LogMiner\u914d\u7f6e",title:"Oracle\u914d\u7f6eLogMiner",description:"\u6ce8\u610f\uff1a",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/chunjunDocs/connectors/logminer/LogMiner\u914d\u7f6e.md",sourceDirName:"chunjunDocs/connectors/logminer",slug:"/chunjunDocs/connectors/logminer/LogMiner\u914d\u7f6e",permalink:"/chunjun-web/docs/chunjunDocs/connectors/logminer/LogMiner\u914d\u7f6e",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chunjunDocs/connectors/logminer/LogMiner\u914d\u7f6e.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FlinkX Oracle LogMiner\u5b9e\u65f6\u91c7\u96c6\u57fa\u672c\u539f\u7406",permalink:"/chunjun-web/docs/chunjunDocs/connectors/logminer/LogMiner\u539f\u7406"},next:{title:"MongoDB Sink",permalink:"/chunjun-web/docs/chunjunDocs/connectors/mongodb/mongodb-sink"}},g={},d=[{value:"\u4e00\u3001Oracle 10g(\u5355\u673a\u7248)",id:"\u4e00oracle-10g\u5355\u673a\u7248",level:2},{value:"1\u3001\u67e5\u8be2Oracle\u7248\u672c\u4fe1\u606f\uff0c\u8fd9\u91cc\u914d\u7f6e\u7684\u662f<code>Oracle 10g</code>",id:"1\u67e5\u8be2oracle\u7248\u672c\u4fe1\u606f\u8fd9\u91cc\u914d\u7f6e\u7684\u662foracle-10g",level:3},{value:"2\u3001\u901a\u8fc7\u547d\u4ee4\u884c\u65b9\u5f0f\u767b\u5f55Oracle\uff0c\u67e5\u770b\u662f\u5426\u5f00\u542f\u65e5\u5fd7\u5f52\u6863",id:"2\u901a\u8fc7\u547d\u4ee4\u884c\u65b9\u5f0f\u767b\u5f55oracle\u67e5\u770b\u662f\u5426\u5f00\u542f\u65e5\u5fd7\u5f52\u6863",level:3},{value:"3\u3001\u5f00\u542f\u65e5\u5fd7\u5f52\u6863\uff0c\u5f00\u542f\u65e5\u5fd7\u5f52\u6863\u9700\u8981\u91cd\u542f\u6570\u636e\u5e93\uff0c\u8bf7\u6ce8\u610f",id:"3\u5f00\u542f\u65e5\u5fd7\u5f52\u6863\u5f00\u542f\u65e5\u5fd7\u5f52\u6863\u9700\u8981\u91cd\u542f\u6570\u636e\u5e93\u8bf7\u6ce8\u610f",level:3},{value:"a\u3001\u914d\u7f6e\u5f52\u6863\u65e5\u5fd7\u4fdd\u5b58\u7684\u8def\u5f84",id:"a\u914d\u7f6e\u5f52\u6863\u65e5\u5fd7\u4fdd\u5b58\u7684\u8def\u5f84",level:4},{value:"b\u3001\u5173\u95ed\u6570\u636e\u5e93",id:"b\u5173\u95ed\u6570\u636e\u5e93",level:4},{value:"c\u3001\u5f00\u542f\u65e5\u5fd7\u5f52\u6863",id:"c\u5f00\u542f\u65e5\u5fd7\u5f52\u6863",level:4},{value:"d\u3001\u5f00\u542f\u6269\u5145\u65e5\u5fd7",id:"d\u5f00\u542f\u6269\u5145\u65e5\u5fd7",level:4},{value:"e\u3001\u5f00\u542f\u6570\u636e\u5e93",id:"e\u5f00\u542f\u6570\u636e\u5e93",level:4},{value:"4\u3001\u914d\u7f6e\u65e5\u5fd7\u7ec4",id:"4\u914d\u7f6e\u65e5\u5fd7\u7ec4",level:3},{value:"a\u3001\u67e5\u8be2\u9ed8\u8ba4\u65e5\u5fd7\u7ec4\u4fe1\u606f",id:"a\u67e5\u8be2\u9ed8\u8ba4\u65e5\u5fd7\u7ec4\u4fe1\u606f",level:4},{value:"b\u3001\u67e5\u8be2\u65e5\u5fd7\u7ec4\u50a8\u5b58\u8def\u5f84",id:"b\u67e5\u8be2\u65e5\u5fd7\u7ec4\u50a8\u5b58\u8def\u5f84",level:4},{value:"c\u3001\u65b0\u589e\u65e5\u5fd7\u7ec4\u4e0e\u5220\u9664\u539f\u6709\u65e5\u5fd7\u7ec4",id:"c\u65b0\u589e\u65e5\u5fd7\u7ec4\u4e0e\u5220\u9664\u539f\u6709\u65e5\u5fd7\u7ec4",level:4},{value:"d\u3001\u67e5\u8be2\u521b\u5efa\u7684\u65e5\u5fd7\u7ec4",id:"d\u67e5\u8be2\u521b\u5efa\u7684\u65e5\u5fd7\u7ec4",level:4},{value:"5\u3001\u68c0\u67e5\u662f\u5426\u5b89\u88c5LogMiner\u5de5\u5177",id:"5\u68c0\u67e5\u662f\u5426\u5b89\u88c5logminer\u5de5\u5177",level:3},{value:"6\u3001\u521b\u5efaLogMiner\u89d2\u8272\u5e76\u8d4b\u6743",id:"6\u521b\u5efalogminer\u89d2\u8272\u5e76\u8d4b\u6743",level:3},{value:"7\u3001\u521b\u5efaLogMiner\u7528\u6237\u5e76\u8d4b\u6743",id:"7\u521b\u5efalogminer\u7528\u6237\u5e76\u8d4b\u6743",level:3},{value:"8\u3001\u9a8c\u8bc1\u7528\u6237\u6743\u9650",id:"8\u9a8c\u8bc1\u7528\u6237\u6743\u9650",level:3},{value:"\u4e8c\u3001Oracle 11g(\u5355\u673a\u7248)",id:"\u4e8coracle-11g\u5355\u673a\u7248",level:2},{value:"1\u3001\u67e5\u8be2Oracle\u7248\u672c\u4fe1\u606f\uff0c\u8fd9\u91cc\u914d\u7f6e\u7684\u662f<code>Oracle 11g</code>",id:"1\u67e5\u8be2oracle\u7248\u672c\u4fe1\u606f\u8fd9\u91cc\u914d\u7f6e\u7684\u662foracle-11g",level:3},{value:"2\u3001\u901a\u8fc7\u547d\u4ee4\u884c\u65b9\u5f0f\u767b\u5f55Oracle\uff0c\u67e5\u770b\u662f\u5426\u5f00\u542f\u65e5\u5fd7\u5f52\u6863",id:"2\u901a\u8fc7\u547d\u4ee4\u884c\u65b9\u5f0f\u767b\u5f55oracle\u67e5\u770b\u662f\u5426\u5f00\u542f\u65e5\u5fd7\u5f52\u6863-1",level:3},{value:"3\u3001\u5f00\u542f\u65e5\u5fd7\u5f52\u6863\uff0c\u5f00\u542f\u65e5\u5fd7\u5f52\u6863\u9700\u8981\u91cd\u542f\u6570\u636e\u5e93\uff0c\u8bf7\u6ce8\u610f",id:"3\u5f00\u542f\u65e5\u5fd7\u5f52\u6863\u5f00\u542f\u65e5\u5fd7\u5f52\u6863\u9700\u8981\u91cd\u542f\u6570\u636e\u5e93\u8bf7\u6ce8\u610f-1",level:3},{value:"a\u3001\u914d\u7f6e\u5f52\u6863\u65e5\u5fd7\u4fdd\u5b58\u7684\u8def\u5f84",id:"a\u914d\u7f6e\u5f52\u6863\u65e5\u5fd7\u4fdd\u5b58\u7684\u8def\u5f84-1",level:4},{value:"b\u3001\u5173\u95ed\u6570\u636e\u5e93",id:"b\u5173\u95ed\u6570\u636e\u5e93-1",level:4},{value:"c\u3001\u5f00\u542f\u65e5\u5fd7\u5f52\u6863",id:"c\u5f00\u542f\u65e5\u5fd7\u5f52\u6863-1",level:4},{value:"d\u3001\u5f00\u542f\u6269\u5145\u65e5\u5fd7",id:"d\u5f00\u542f\u6269\u5145\u65e5\u5fd7-1",level:4},{value:"e\u3001\u5f00\u542f\u6570\u636e\u5e93",id:"e\u5f00\u542f\u6570\u636e\u5e93-1",level:4},{value:"4\u3001\u68c0\u67e5\u662f\u5426\u5b89\u88c5LogMiner\u5de5\u5177",id:"4\u68c0\u67e5\u662f\u5426\u5b89\u88c5logminer\u5de5\u5177",level:3},{value:"5\u3001\u521b\u5efaLogMiner\u89d2\u8272\u5e76\u8d4b\u6743",id:"5\u521b\u5efalogminer\u89d2\u8272\u5e76\u8d4b\u6743",level:3},{value:"6\u3001\u521b\u5efaLogMiner\u7528\u6237\u5e76\u8d4b\u6743",id:"6\u521b\u5efalogminer\u7528\u6237\u5e76\u8d4b\u6743",level:3},{value:"7\u3001\u9a8c\u8bc1\u7528\u6237\u6743\u9650",id:"7\u9a8c\u8bc1\u7528\u6237\u6743\u9650",level:3},{value:"\u4e09\u3001Oracle 12c(\u5355\u673a\u7248\u975eCBD)",id:"\u4e09oracle-12c\u5355\u673a\u7248\u975ecbd",level:2},{value:"1\u3001\u67e5\u8be2Oracle\u7248\u672c\u4fe1\u606f\uff0c\u8fd9\u91cc\u914d\u7f6e\u7684\u662f<code>Oracle 12c</code>",id:"1\u67e5\u8be2oracle\u7248\u672c\u4fe1\u606f\u8fd9\u91cc\u914d\u7f6e\u7684\u662foracle-12c",level:3},{value:"2\u3001\u901a\u8fc7\u547d\u4ee4\u884c\u65b9\u5f0f\u767b\u5f55Oracle\uff0c\u67e5\u770b\u662f\u5426\u5f00\u542f\u65e5\u5fd7\u5f52\u6863",id:"2\u901a\u8fc7\u547d\u4ee4\u884c\u65b9\u5f0f\u767b\u5f55oracle\u67e5\u770b\u662f\u5426\u5f00\u542f\u65e5\u5fd7\u5f52\u6863-2",level:3},{value:"3\u3001\u5f00\u542f\u65e5\u5fd7\u5f52\u6863\uff0c\u5f00\u542f\u65e5\u5fd7\u5f52\u6863\u9700\u8981\u91cd\u542f\u6570\u636e\u5e93\uff0c\u8bf7\u6ce8\u610f",id:"3\u5f00\u542f\u65e5\u5fd7\u5f52\u6863\u5f00\u542f\u65e5\u5fd7\u5f52\u6863\u9700\u8981\u91cd\u542f\u6570\u636e\u5e93\u8bf7\u6ce8\u610f-2",level:3},{value:"a\u3001\u914d\u7f6e\u5f52\u6863\u65e5\u5fd7\u4fdd\u5b58\u7684\u8def\u5f84",id:"a\u914d\u7f6e\u5f52\u6863\u65e5\u5fd7\u4fdd\u5b58\u7684\u8def\u5f84-2",level:4},{value:"b\u3001\u5173\u95ed\u6570\u636e\u5e93",id:"b\u5173\u95ed\u6570\u636e\u5e93-2",level:4},{value:"c\u3001\u5f00\u542f\u65e5\u5fd7\u5f52\u6863",id:"c\u5f00\u542f\u65e5\u5fd7\u5f52\u6863-2",level:4},{value:"d\u3001\u5f00\u542f\u6269\u5145\u65e5\u5fd7",id:"d\u5f00\u542f\u6269\u5145\u65e5\u5fd7-2",level:4},{value:"e\u3001\u5f00\u542f\u6570\u636e\u5e93",id:"e\u5f00\u542f\u6570\u636e\u5e93-2",level:4},{value:"4\u3001\u521b\u5efaLogMiner\u89d2\u8272\u5e76\u8d4b\u6743",id:"4\u521b\u5efalogminer\u89d2\u8272\u5e76\u8d4b\u6743",level:3},{value:"5\u3001\u521b\u5efaLogMiner\u7528\u6237\u5e76\u8d4b\u6743",id:"5\u521b\u5efalogminer\u7528\u6237\u5e76\u8d4b\u6743",level:3},{value:"6\u3001\u9a8c\u8bc1\u7528\u6237\u6743\u9650",id:"6\u9a8c\u8bc1\u7528\u6237\u6743\u9650",level:3}],p={toc:d};function m(e){var a=e.components,i=(0,t.Z)(e,o);return(0,r.kt)("wrapper",(0,l.Z)({},p,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"oracle\u914d\u7f6elogminer"},"Oracle\u914d\u7f6eLogMiner"),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,r.kt)("p",null,"1\u3001\u67d0\u4e2aOracle\u6570\u636e\u6e90\u80fd\u540c\u65f6\u8fd0\u884c\u7684\u4efb\u52a1\u6570\u91cf\u53d6\u51b3\u4e8e\u8be5Oracle\u7684\u5185\u5b58\u5927\u5c0f"),(0,r.kt)("p",null,"2\u3001\u82e5\u6570\u636e\u91cf\u592a\u5927\u5bfc\u81f4\u65e5\u5fd7\u7ec4\u9891\u7e41\u5207\u6362\u9700\u8981\u589e\u52a0\u65e5\u5fd7\u7ec4\u6570\u91cf\uff0c\u589e\u5927\u5355\u4e2a\u65e5\u5fd7\u7ec4\u5b58\u50a8\u5927\u5c0f"),(0,r.kt)("h2",{id:"\u4e00oracle-10g\u5355\u673a\u7248"},"\u4e00\u3001Oracle 10g(\u5355\u673a\u7248)"),(0,r.kt)("h3",{id:"1\u67e5\u8be2oracle\u7248\u672c\u4fe1\u606f\u8fd9\u91cc\u914d\u7f6e\u7684\u662foracle-10g"},"1\u3001\u67e5\u8be2Oracle\u7248\u672c\u4fe1\u606f\uff0c\u8fd9\u91cc\u914d\u7f6e\u7684\u662f",(0,r.kt)("inlineCode",{parentName:"h3"},"Oracle 10g")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"--\u67e5\u770boracle\u7248\u672c\nselect *\nfrom v$version;\n")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"image",src:n(7355).Z,width:"570",height:"165"})),(0,r.kt)("p",null,"\u672c\u7ae0Oracle\u7684\u7248\u672c\u5982\u4e0a\u56fe\u6240\u793a\u3002"),(0,r.kt)("h3",{id:"2\u901a\u8fc7\u547d\u4ee4\u884c\u65b9\u5f0f\u767b\u5f55oracle\u67e5\u770b\u662f\u5426\u5f00\u542f\u65e5\u5fd7\u5f52\u6863"},"2\u3001\u901a\u8fc7\u547d\u4ee4\u884c\u65b9\u5f0f\u767b\u5f55Oracle\uff0c\u67e5\u770b\u662f\u5426\u5f00\u542f\u65e5\u5fd7\u5f52\u6863"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"--\u67e5\u8be2\u6570\u636e\u5e93\u5f52\u6863\u6a21\u5f0f\narchive\nlog list;\n")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"image",src:n(8604).Z,width:"538",height:"109"})),(0,r.kt)("p",null,"\u56fe\u4e2d\u663e\u793a",(0,r.kt)("inlineCode",{parentName:"p"},"No Archive Mode"),"\u8868\u793a\u672a\u5f00\u542f\u65e5\u5fd7\u5f52\u6863\u3002"),(0,r.kt)("h3",{id:"3\u5f00\u542f\u65e5\u5fd7\u5f52\u6863\u5f00\u542f\u65e5\u5fd7\u5f52\u6863\u9700\u8981\u91cd\u542f\u6570\u636e\u5e93\u8bf7\u6ce8\u610f"},"3\u3001\u5f00\u542f\u65e5\u5fd7\u5f52\u6863\uff0c\u5f00\u542f\u65e5\u5fd7\u5f52\u6863\u9700\u8981\u91cd\u542f\u6570\u636e\u5e93\uff0c\u8bf7\u6ce8\u610f"),(0,r.kt)("h4",{id:"a\u914d\u7f6e\u5f52\u6863\u65e5\u5fd7\u4fdd\u5b58\u7684\u8def\u5f84"},"a\u3001\u914d\u7f6e\u5f52\u6863\u65e5\u5fd7\u4fdd\u5b58\u7684\u8def\u5f84"),(0,r.kt)("p",null,"\u6839\u636e\u81ea\u8eab\u73af\u5883\u914d\u7f6e\u5f52\u6863\u65e5\u5fd7\u4fdd\u5b58\u8def\u5f84\uff0c\u9700\u8981\u63d0\u524d\u521b\u5efa\u76f8\u5e94\u76ee\u5f55\u53ca\u8d4b\u4e88\u76f8\u5e94\u8bbf\u95ee\u6743\u9650"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u521b\u5efa\u5f52\u6863\u65e5\u5fd7\u4fdd\u5b58\u76ee\u5f55\nmkdir -p /data/oracle/archivelog\n\n# \u8fdb\u5165Oracle\u76ee\u5f55\ncd $ORACLE_HOME\n\n# \u67e5\u770bOracle\u6743\u9650\u7ec4\uff0c\u672c\u7ae0\u6743\u9650\u7ec4\u5982\u4e0b\u56fe\u6240\u793a\nls -l\n\n# \u5bf9\u5f52\u6863\u65e5\u5fd7\u4fdd\u5b58\u76ee\u5f55\u8d4b\u4e88\u76f8\u5e94\u6743\u9650\nchown -R \u4e0b\u56fe\u4e2d\u7684\u7528\u6237\u540d:\u4e0b\u56fe\u4e2d\u7684\u7ec4\u540d /data/oracle/\n")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"image",src:n(3676).Z,width:"700",height:"428"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"--\u914d\u7f6e\u5f52\u6863\u65e5\u5fd7\u4fdd\u5b58\u7684\u8def\u5f84\nalter\nsystem set log_archive_dest_1='location=/data/oracle/archivelog' scope=spfile;\n")),(0,r.kt)("h4",{id:"b\u5173\u95ed\u6570\u636e\u5e93"},"b\u3001\u5173\u95ed\u6570\u636e\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"shutdown\nimmediate;\nstartup\nmount;\n")),(0,r.kt)("h4",{id:"c\u5f00\u542f\u65e5\u5fd7\u5f52\u6863"},"c\u3001\u5f00\u542f\u65e5\u5fd7\u5f52\u6863"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"--\u5f00\u542f\u65e5\u5fd7\u5f52\u6863\nalter\ndatabase archivelog;\n")),(0,r.kt)("h4",{id:"d\u5f00\u542f\u6269\u5145\u65e5\u5fd7"},"d\u3001\u5f00\u542f\u6269\u5145\u65e5\u5fd7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"--\u5f00\u542f\u6269\u5145\u65e5\u5fd7\nalter\ndatabase add supplemental log data (all) columns; \n")),(0,r.kt)("h4",{id:"e\u5f00\u542f\u6570\u636e\u5e93"},"e\u3001\u5f00\u542f\u6570\u636e\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"alter\ndatabase open;\n")),(0,r.kt)("p",null,"\u518d\u6b21\u67e5\u8be2\u6570\u636e\u5e93\u5f52\u6863\u6a21\u5f0f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Archive Mode"),"\u8868\u793a\u5df2\u5f00\u542f\u5f52\u6863\u6a21\u5f0f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Archive destination"),"\u8868\u793a\u5f52\u6863\u65e5\u5fd7\u50a8\u5b58\u8def\u5f84\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"image",src:n(6110).Z,width:"570",height:"122"})),(0,r.kt)("h3",{id:"4\u914d\u7f6e\u65e5\u5fd7\u7ec4"},"4\u3001\u914d\u7f6e\u65e5\u5fd7\u7ec4"),(0,r.kt)("h4",{id:"a\u67e5\u8be2\u9ed8\u8ba4\u65e5\u5fd7\u7ec4\u4fe1\u606f"},"a\u3001\u67e5\u8be2\u9ed8\u8ba4\u65e5\u5fd7\u7ec4\u4fe1\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM v$log;\n")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"image",src:n(9391).Z,width:"663",height:"200"})),(0,r.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u65e5\u5fd7\u7ec4\u7684\u9ed8\u8ba4\u6570\u91cf\u4e3a2\u7ec4\uff0c\u5927\u5c0f\u4e3a4194304/1024/1024 = 4MB\uff0c\u8fd9\u610f\u5473\u7740\u65e5\u5fd7\u5927\u5c0f\u6bcf\u8fbe\u52304MB\u5c31\u4f1a\u8fdb\u884c\u65e5\u5fd7\u7ec4\u7684\u5207\u6362\uff0c\u5207\u6362\u592a\u8fc7\u9891\u7e41\u4f1a\u5bfc\u81f4\u67e5\u8be2\u51fa\u9519\uff0c\u56e0\u6b64\u9700\u8981\u589e\u52a0\u65e5\u5fd7\u7ec4\u6570\u91cf\u53ca\u5927\u5c0f\u3002"),(0,r.kt)("h4",{id:"b\u67e5\u8be2\u65e5\u5fd7\u7ec4\u50a8\u5b58\u8def\u5f84"},"b\u3001\u67e5\u8be2\u65e5\u5fd7\u7ec4\u50a8\u5b58\u8def\u5f84"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM v$logfile;\n")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"image",src:n(4291).Z,width:"728",height:"421"})),(0,r.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u9ed8\u8ba4\u8def\u5f84\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/lib/oracle/xe/app/oracle/flash_recovery_area/XE/onlinelog/"),"\u3002"),(0,r.kt)("h4",{id:"c\u65b0\u589e\u65e5\u5fd7\u7ec4\u4e0e\u5220\u9664\u539f\u6709\u65e5\u5fd7\u7ec4"},"c\u3001\u65b0\u589e\u65e5\u5fd7\u7ec4\u4e0e\u5220\u9664\u539f\u6709\u65e5\u5fd7\u7ec4"),(0,r.kt)("p",null,"\u8bf7\u4e0eDBA\u8054\u7cfb\uff0c\u51b3\u5b9a\u662f\u5426\u53ef\u4ee5\u5220\u9664\u539f\u6709\u65e5\u5fd7\u7ec4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"--\u589e\u52a0\u4e24\u7ec4\u65e5\u5fd7\u7ec4\nalter\ndatabase add logfile group 3 ('/usr/lib/oracle/xe/app/oracle/flash_recovery_area/XE/onlinelog/redo3.log') size 200m;\nalter\ndatabase add logfile group 4 ('/usr/lib/oracle/xe/app/oracle/flash_recovery_area/XE/onlinelog/redo4.log') size 200m;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"--\u5220\u9664\u539f\u6709\u4e24\u7ec4\u65e5\u5fd7\u7ec4\uff0c\u5e76\u7ee7\u7eed\u65b0\u589e\u4e24\u7ec4\u65e5\u5fd7\u7ec4\nalter\nsystem checkpoint;\nalter\nsystem switch logfile;\nalter\ndatabase drop\nlogfile group 1;\nalter\ndatabase drop\nlogfile group 2;\nalter\ndatabase add logfile group 1 ('/usr/lib/oracle/xe/app/oracle/flash_recovery_area/XE/onlinelog/redo1.log') size 200m;\nalter\ndatabase add logfile group 2 ('/usr/lib/oracle/xe/app/oracle/flash_recovery_area/XE/onlinelog/redo2.log') size 200m;\n")),(0,r.kt)("h4",{id:"d\u67e5\u8be2\u521b\u5efa\u7684\u65e5\u5fd7\u7ec4"},"d\u3001\u67e5\u8be2\u521b\u5efa\u7684\u65e5\u5fd7\u7ec4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM v$log;\nSELECT *\nFROM v$logfile;\n")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"image",src:n(85).Z,width:"653",height:"381"})),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"image",src:n(4490).Z,width:"748",height:"639"})),(0,r.kt)("h3",{id:"5\u68c0\u67e5\u662f\u5426\u5b89\u88c5logminer\u5de5\u5177"},"5\u3001\u68c0\u67e5\u662f\u5426\u5b89\u88c5LogMiner\u5de5\u5177"),(0,r.kt)("p",null,"Oracle10g\u9ed8\u8ba4\u5df2\u5b89\u88c5LogMiner\u5de5\u5177\u5305\uff0c\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u8be2\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"desc DBMS_LOGMNR;\ndesc DBMS_LOGMNR_D;\n")),(0,r.kt)("p",null,"\u82e5\u65e0\u4fe1\u606f\u6253\u5370\uff0c\u5219\u6267\u884c\u4e0b\u5217SQL\u521d\u59cb\u5316LogMiner\u5de5\u5177\u5305\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"@\n$ORACLE_HOME\n/rdbms/admin/dbmslm.sql;\n@\n$ORACLE_HOME\n/rdbms/admin/dbmslmd.sql;\n")),(0,r.kt)("h3",{id:"6\u521b\u5efalogminer\u89d2\u8272\u5e76\u8d4b\u6743"},"6\u3001\u521b\u5efaLogMiner\u89d2\u8272\u5e76\u8d4b\u6743"),(0,r.kt)("p",null,"\u5176\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"roma_logminer_privs"),"\u4e3a\u89d2\u8272\u540d\u79f0\uff0c\u53ef\u6839\u636e\u81ea\u8eab\u9700\u6c42\u4fee\u6539\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create role roma_logminer_privs;\ngrant\ncreate\nsession,execute_catalog_role,select any transaction,flashback any table,select any table,lock any table,select any dictionary to roma_logminer_privs;\ngrant select on SYSTEM.LOGMNR_COL$ to roma_logminer_privs;\ngrant select on SYSTEM.LOGMNR_OBJ$ to roma_logminer_privs;\ngrant select on SYSTEM.LOGMNR_USER$ to roma_logminer_privs;\ngrant select on SYSTEM.LOGMNR_UID$ to roma_logminer_privs;\ngrant select_catalog_role to roma_logminer_privs;\n")),(0,r.kt)("h3",{id:"7\u521b\u5efalogminer\u7528\u6237\u5e76\u8d4b\u6743"},"7\u3001\u521b\u5efaLogMiner\u7528\u6237\u5e76\u8d4b\u6743"),(0,r.kt)("p",null,"\u5176\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"roma_logminer"),"\u4e3a\u7528\u6237\u540d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"password"),"\u4e3a\u5bc6\u7801\uff0c\u8bf7\u6839\u636e\u81ea\u8eab\u9700\u6c42\u4fee\u6539\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create\nuser roma_logminer identified by password default tablespace users;\ngrant roma_logminer_privs to roma_logminer;\ngrant execute_catalog_role to roma_logminer;\nalter\nuser roma_logminer quota unlimited on users;\n")),(0,r.kt)("h3",{id:"8\u9a8c\u8bc1\u7528\u6237\u6743\u9650"},"8\u3001\u9a8c\u8bc1\u7528\u6237\u6743\u9650"),(0,r.kt)("p",null,"\u4ee5\u521b\u5efa\u7684LogMiner\u7528\u6237\u767b\u5f55Oracle\u6570\u636e\u5e93\uff0c\u6267\u884c\u4ee5\u4e0bSQL\u67e5\u8be2\u6743\u9650\uff0c\u7ed3\u679c\u5982\u56fe\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"}," SELECT *\n FROM USER_ROLE_PRIVS;\n")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"image",src:n(3052).Z,width:"645",height:"118"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM SESSION_PRIVS;\n")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"image",src:n(4312).Z,width:"431",height:"176"})),(0,r.kt)("p",null,"\u81f3\u6b64\uff0cOracle 10g\u6570\u636e\u5e93LogMiner\u5b9e\u65f6\u91c7\u96c6\u914d\u7f6e\u5b8c\u6bd5\u3002"),(0,r.kt)("h2",{id:"\u4e8coracle-11g\u5355\u673a\u7248"},"\u4e8c\u3001Oracle 11g(\u5355\u673a\u7248)"),(0,r.kt)("h3",{id:"1\u67e5\u8be2oracle\u7248\u672c\u4fe1\u606f\u8fd9\u91cc\u914d\u7f6e\u7684\u662foracle-11g"},"1\u3001\u67e5\u8be2Oracle\u7248\u672c\u4fe1\u606f\uff0c\u8fd9\u91cc\u914d\u7f6e\u7684\u662f",(0,r.kt)("inlineCode",{parentName:"h3"},"Oracle 11g")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"--\u67e5\u770boracle\u7248\u672c\nselect *\nfrom v$version;\n")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"image",src:n(4787).Z,width:"746",height:"162"})),(0,r.kt)("p",null,"\u672c\u7ae0Oracle\u7684\u7248\u672c\u5982\u4e0a\u56fe\u6240\u793a\u3002"),(0,r.kt)("h3",{id:"2\u901a\u8fc7\u547d\u4ee4\u884c\u65b9\u5f0f\u767b\u5f55oracle\u67e5\u770b\u662f\u5426\u5f00\u542f\u65e5\u5fd7\u5f52\u6863-1"},"2\u3001\u901a\u8fc7\u547d\u4ee4\u884c\u65b9\u5f0f\u767b\u5f55Oracle\uff0c\u67e5\u770b\u662f\u5426\u5f00\u542f\u65e5\u5fd7\u5f52\u6863"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"--\u67e5\u8be2\u6570\u636e\u5e93\u5f52\u6863\u6a21\u5f0f\narchive\nlog list;\n")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"image",src:n(6970).Z,width:"510",height:"129"})),(0,r.kt)("p",null,"\u56fe\u4e2d\u663e\u793a",(0,r.kt)("inlineCode",{parentName:"p"},"No Archive Mode"),"\u8868\u793a\u672a\u5f00\u542f\u65e5\u5fd7\u5f52\u6863\u3002"),(0,r.kt)("h3",{id:"3\u5f00\u542f\u65e5\u5fd7\u5f52\u6863\u5f00\u542f\u65e5\u5fd7\u5f52\u6863\u9700\u8981\u91cd\u542f\u6570\u636e\u5e93\u8bf7\u6ce8\u610f-1"},"3\u3001\u5f00\u542f\u65e5\u5fd7\u5f52\u6863\uff0c\u5f00\u542f\u65e5\u5fd7\u5f52\u6863\u9700\u8981\u91cd\u542f\u6570\u636e\u5e93\uff0c\u8bf7\u6ce8\u610f"),(0,r.kt)("h4",{id:"a\u914d\u7f6e\u5f52\u6863\u65e5\u5fd7\u4fdd\u5b58\u7684\u8def\u5f84-1"},"a\u3001\u914d\u7f6e\u5f52\u6863\u65e5\u5fd7\u4fdd\u5b58\u7684\u8def\u5f84"),(0,r.kt)("p",null,"\u6839\u636e\u81ea\u8eab\u73af\u5883\u914d\u7f6e\u5f52\u6863\u65e5\u5fd7\u4fdd\u5b58\u8def\u5f84\uff0c\u9700\u8981\u63d0\u524d\u521b\u5efa\u76f8\u5e94\u76ee\u5f55\u53ca\u8d4b\u4e88\u76f8\u5e94\u8bbf\u95ee\u6743\u9650"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"}," alter\nsystem set log_archive_dest_1='location=/data/oracle/archivelog' scope=spfile;\n")),(0,r.kt)("h4",{id:"b\u5173\u95ed\u6570\u636e\u5e93-1"},"b\u3001\u5173\u95ed\u6570\u636e\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"shutdown\nimmediate;\nstartup\nmount;\n")),(0,r.kt)("h4",{id:"c\u5f00\u542f\u65e5\u5fd7\u5f52\u6863-1"},"c\u3001\u5f00\u542f\u65e5\u5fd7\u5f52\u6863"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"--\u5f00\u542f\u65e5\u5fd7\u5f52\u6863\nalter\ndatabase archivelog;\n")),(0,r.kt)("h4",{id:"d\u5f00\u542f\u6269\u5145\u65e5\u5fd7-1"},"d\u3001\u5f00\u542f\u6269\u5145\u65e5\u5fd7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"--\u5f00\u542f\u6269\u5145\u65e5\u5fd7\nalter\ndatabase add supplemental log data (all) columns; \n")),(0,r.kt)("h4",{id:"e\u5f00\u542f\u6570\u636e\u5e93-1"},"e\u3001\u5f00\u542f\u6570\u636e\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"alter\ndatabase open;\n")),(0,r.kt)("p",null,"\u518d\u6b21\u67e5\u8be2\u6570\u636e\u5e93\u5f52\u6863\u6a21\u5f0f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Archive Mode"),"\u8868\u793a\u5df2\u5f00\u542f\u5f52\u6863\u6a21\u5f0f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Archive destination"),"\u8868\u793a\u5f52\u6863\u65e5\u5fd7\u50a8\u5b58\u8def\u5f84\u3002\n",(0,r.kt)("img",{loading:"lazy",alt:"image",src:n(4184).Z,width:"496",height:"122"})),(0,r.kt)("h3",{id:"4\u68c0\u67e5\u662f\u5426\u5b89\u88c5logminer\u5de5\u5177"},"4\u3001\u68c0\u67e5\u662f\u5426\u5b89\u88c5LogMiner\u5de5\u5177"),(0,r.kt)("p",null,"Oracle11g\u9ed8\u8ba4\u5df2\u5b89\u88c5LogMiner\u5de5\u5177\u5305\uff0c\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u67e5\u8be2\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"desc DBMS_LOGMNR;\ndesc DBMS_LOGMNR_D;\n")),(0,r.kt)("p",null,"\u82e5\u65e0\u4fe1\u606f\u6253\u5370\uff0c\u5219\u6267\u884c\u4e0b\u5217SQL\u521d\u59cb\u5316LogMiner\u5de5\u5177\u5305\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"@\n$ORACLE_HOME\n/rdbms/admin/dbmslm.sql;\n@\n$ORACLE_HOME\n/rdbms/admin/dbmslmd.sql;\n")),(0,r.kt)("h3",{id:"5\u521b\u5efalogminer\u89d2\u8272\u5e76\u8d4b\u6743"},"5\u3001\u521b\u5efaLogMiner\u89d2\u8272\u5e76\u8d4b\u6743"),(0,r.kt)("p",null,"\u5176\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"roma_logminer_privs"),"\u4e3a\u89d2\u8272\u540d\u79f0\uff0c\u53ef\u6839\u636e\u81ea\u8eab\u9700\u6c42\u4fee\u6539\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create role roma_logminer_privs;\ngrant\ncreate\nsession,execute_catalog_role,select any transaction,flashback any table,select any table,lock any table,select any dictionary to roma_logminer_privs;\ngrant select on SYSTEM.LOGMNR_COL$ to roma_logminer_privs;\ngrant select on SYSTEM.LOGMNR_OBJ$ to roma_logminer_privs;\ngrant select on SYSTEM.LOGMNR_USER$ to roma_logminer_privs;\ngrant select on SYSTEM.LOGMNR_UID$ to roma_logminer_privs;\ngrant select_catalog_role to roma_logminer_privs;\n")),(0,r.kt)("h3",{id:"6\u521b\u5efalogminer\u7528\u6237\u5e76\u8d4b\u6743"},"6\u3001\u521b\u5efaLogMiner\u7528\u6237\u5e76\u8d4b\u6743"),(0,r.kt)("p",null,"\u5176\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"roma_logminer"),"\u4e3a\u7528\u6237\u540d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"password"),"\u4e3a\u5bc6\u7801\uff0c\u8bf7\u6839\u636e\u81ea\u8eab\u9700\u6c42\u4fee\u6539\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create\nuser roma_logminer identified by password default tablespace users;\ngrant roma_logminer_privs to roma_logminer;\ngrant execute_catalog_role to roma_logminer;\nalter\nuser roma_logminer quota unlimited on users;\n")),(0,r.kt)("h3",{id:"7\u9a8c\u8bc1\u7528\u6237\u6743\u9650"},"7\u3001\u9a8c\u8bc1\u7528\u6237\u6743\u9650"),(0,r.kt)("p",null,"\u4ee5\u521b\u5efa\u7684LogMiner\u7528\u6237\u767b\u5f55Oracle\u6570\u636e\u5e93\uff0c\u6267\u884c\u4ee5\u4e0bSQL\u67e5\u8be2\u6743\u9650\uff0c\u7ed3\u679c\u5982\u56fe\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"}," SELECT *\n FROM USER_ROLE_PRIVS;\n")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"image",src:n(84).Z,width:"645",height:"118"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM SESSION_PRIVS;\n")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"image",src:n(8020).Z,width:"431",height:"176"})),(0,r.kt)("p",null,"\u81f3\u6b64\uff0cOracle 11g\u6570\u636e\u5e93LogMiner\u5b9e\u65f6\u91c7\u96c6\u914d\u7f6e\u5b8c\u6bd5\u3002"),(0,r.kt)("h2",{id:"\u4e09oracle-12c\u5355\u673a\u7248\u975ecbd"},"\u4e09\u3001Oracle 12c(\u5355\u673a\u7248\u975eCBD)"),(0,r.kt)("h3",{id:"1\u67e5\u8be2oracle\u7248\u672c\u4fe1\u606f\u8fd9\u91cc\u914d\u7f6e\u7684\u662foracle-12c"},"1\u3001\u67e5\u8be2Oracle\u7248\u672c\u4fe1\u606f\uff0c\u8fd9\u91cc\u914d\u7f6e\u7684\u662f",(0,r.kt)("inlineCode",{parentName:"h3"},"Oracle 12c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"--\u67e5\u770boracle\u7248\u672c\nselect BANNER\nfrom v$version;\n")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"image",src:n(9876).Z,width:"700",height:"165"})),(0,r.kt)("p",null,"\u672c\u7ae0Oracle\u7684\u7248\u672c\u5982\u4e0a\u56fe\u6240\u793a\u3002"),(0,r.kt)("h3",{id:"2\u901a\u8fc7\u547d\u4ee4\u884c\u65b9\u5f0f\u767b\u5f55oracle\u67e5\u770b\u662f\u5426\u5f00\u542f\u65e5\u5fd7\u5f52\u6863-2"},"2\u3001\u901a\u8fc7\u547d\u4ee4\u884c\u65b9\u5f0f\u767b\u5f55Oracle\uff0c\u67e5\u770b\u662f\u5426\u5f00\u542f\u65e5\u5fd7\u5f52\u6863"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"--\u67e5\u8be2\u6570\u636e\u5e93\u5f52\u6863\u6a21\u5f0f\narchive\nlog list;\n")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"image",src:n(6064).Z,width:"495",height:"120"})),(0,r.kt)("p",null,"\u56fe\u4e2d\u663e\u793a",(0,r.kt)("inlineCode",{parentName:"p"},"No Archive Mode"),"\u8868\u793a\u672a\u5f00\u542f\u65e5\u5fd7\u5f52\u6863\u3002"),(0,r.kt)("h3",{id:"3\u5f00\u542f\u65e5\u5fd7\u5f52\u6863\u5f00\u542f\u65e5\u5fd7\u5f52\u6863\u9700\u8981\u91cd\u542f\u6570\u636e\u5e93\u8bf7\u6ce8\u610f-2"},"3\u3001\u5f00\u542f\u65e5\u5fd7\u5f52\u6863\uff0c\u5f00\u542f\u65e5\u5fd7\u5f52\u6863\u9700\u8981\u91cd\u542f\u6570\u636e\u5e93\uff0c\u8bf7\u6ce8\u610f"),(0,r.kt)("h4",{id:"a\u914d\u7f6e\u5f52\u6863\u65e5\u5fd7\u4fdd\u5b58\u7684\u8def\u5f84-2"},"a\u3001\u914d\u7f6e\u5f52\u6863\u65e5\u5fd7\u4fdd\u5b58\u7684\u8def\u5f84"),(0,r.kt)("p",null,"\u6839\u636e\u81ea\u8eab\u73af\u5883\u914d\u7f6e\u5f52\u6863\u65e5\u5fd7\u4fdd\u5b58\u8def\u5f84\uff0c\u9700\u8981\u63d0\u524d\u521b\u5efa\u76f8\u5e94\u76ee\u5f55\u53ca\u8d4b\u4e88\u76f8\u5e94\u8bbf\u95ee\u6743\u9650"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"}," alter\nsystem set log_archive_dest_1='location=/data/oracle/archivelog' scope=spfile;\n")),(0,r.kt)("h4",{id:"b\u5173\u95ed\u6570\u636e\u5e93-2"},"b\u3001\u5173\u95ed\u6570\u636e\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"shutdown\nimmediate;\nstartup\nmount;\n")),(0,r.kt)("h4",{id:"c\u5f00\u542f\u65e5\u5fd7\u5f52\u6863-2"},"c\u3001\u5f00\u542f\u65e5\u5fd7\u5f52\u6863"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"--\u5f00\u542f\u65e5\u5fd7\u5f52\u6863\nalter\ndatabase archivelog;\n")),(0,r.kt)("h4",{id:"d\u5f00\u542f\u6269\u5145\u65e5\u5fd7-2"},"d\u3001\u5f00\u542f\u6269\u5145\u65e5\u5fd7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"--\u5f00\u542f\u6269\u5145\u65e5\u5fd7\nalter\ndatabase add supplemental log data (all) columns; \n")),(0,r.kt)("h4",{id:"e\u5f00\u542f\u6570\u636e\u5e93-2"},"e\u3001\u5f00\u542f\u6570\u636e\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"alter\ndatabase open;\n")),(0,r.kt)("p",null,"\u518d\u6b21\u67e5\u8be2\u6570\u636e\u5e93\u5f52\u6863\u6a21\u5f0f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Archive Mode"),"\u8868\u793a\u5df2\u5f00\u542f\u5f52\u6863\u6a21\u5f0f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Archive destination"),"\u8868\u793a\u5f52\u6863\u65e5\u5fd7\u50a8\u5b58\u8def\u5f84\u3002\n",(0,r.kt)("img",{loading:"lazy",alt:"image",src:n(7986).Z,width:"496",height:"122"})),(0,r.kt)("h3",{id:"4\u521b\u5efalogminer\u89d2\u8272\u5e76\u8d4b\u6743"},"4\u3001\u521b\u5efaLogMiner\u89d2\u8272\u5e76\u8d4b\u6743"),(0,r.kt)("p",null,"\u5176\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"roma_logminer_privs"),"\u4e3a\u89d2\u8272\u540d\u79f0\uff0c\u53ef\u6839\u636e\u81ea\u8eab\u9700\u6c42\u4fee\u6539\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create role roma_logminer_privs;\ngrant\ncreate\nsession,execute_catalog_role,select any transaction,flashback any table,select any table,lock any table,logmining,select any dictionary to roma_logminer_privs;\ngrant select on SYSTEM.LOGMNR_COL$ to roma_logminer_privs;\ngrant select on SYSTEM.LOGMNR_OBJ$ to roma_logminer_privs;\ngrant select on SYSTEM.LOGMNR_USER$ to roma_logminer_privs;\ngrant select on SYSTEM.LOGMNR_UID$ to roma_logminer_privs;\ngrant select_catalog_role to roma_logminer_privs;\ngrant LOGMINING to roma_logminer_privs;\n")),(0,r.kt)("h3",{id:"5\u521b\u5efalogminer\u7528\u6237\u5e76\u8d4b\u6743"},"5\u3001\u521b\u5efaLogMiner\u7528\u6237\u5e76\u8d4b\u6743"),(0,r.kt)("p",null,"\u5176\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"roma_logminer"),"\u4e3a\u7528\u6237\u540d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"password"),"\u4e3a\u5bc6\u7801\uff0c\u8bf7\u6839\u636e\u81ea\u8eab\u9700\u6c42\u4fee\u6539\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create\nuser roma_logminer identified by password default tablespace users;\ngrant roma_logminer_privs to roma_logminer;\ngrant execute_catalog_role to roma_logminer;\nalter\nuser roma_logminer quota unlimited on users;\n")),(0,r.kt)("h3",{id:"6\u9a8c\u8bc1\u7528\u6237\u6743\u9650"},"6\u3001\u9a8c\u8bc1\u7528\u6237\u6743\u9650"),(0,r.kt)("p",null,"\u4ee5\u521b\u5efa\u7684LogMiner\u7528\u6237\u767b\u5f55Oracle\u6570\u636e\u5e93\uff0c\u6267\u884c\u4ee5\u4e0bSQL\u67e5\u8be2\u6743\u9650\uff0c\u7ed3\u679c\u5982\u56fe\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"}," SELECT *\n FROM USER_ROLE_PRIVS;\n")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"image",src:n(1191).Z,width:"696",height:"390"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM SESSION_PRIVS;\n")),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"image",src:n(5068).Z,width:"445",height:"206"})),(0,r.kt)("p",null,"\u81f3\u6b64\uff0cOracle 12c\u6570\u636e\u5e93LogMiner\u5b9e\u65f6\u91c7\u96c6\u914d\u7f6e\u5b8c\u6bd5\u3002"))}m.isMDXComponent=!0},7355:function(e,a,n){a.Z=n.p+"assets/images/LogMiner1-5fd7b97d1c9ed9f195d069452951b2d5.png"},4312:function(e,a,n){a.Z=n.p+"assets/images/LogMiner10-a5897dfd91aef8d865301478ab113c8e.png"},4787:function(e,a,n){a.Z=n.p+"assets/images/LogMiner11-2fcec49b46f24cb5dc806152c60c4cfa.png"},6970:function(e,a,n){a.Z=n.p+"assets/images/LogMiner12-feb69035a13c0c6de8a1c2f6e7f5cf18.png"},4184:function(e,a,n){a.Z=n.p+"assets/images/LogMiner13-30ce1b943867a5853713f9c403326fd8.png"},84:function(e,a,n){a.Z=n.p+"assets/images/LogMiner14-d88fbe8f5d39b0cd808b2893c6494316.png"},8020:function(e,a,n){a.Z=n.p+"assets/images/LogMiner15-a5897dfd91aef8d865301478ab113c8e.png"},9876:function(e,a,n){a.Z=n.p+"assets/images/LogMiner16-ebd600cb0f68ede4bdfcdcfe828da7e7.png"},6064:function(e,a,n){a.Z=n.p+"assets/images/LogMiner17-13582f9db39073a811e9d051bbd51b2d.png"},7986:function(e,a,n){a.Z=n.p+"assets/images/LogMiner18-30ce1b943867a5853713f9c403326fd8.png"},1191:function(e,a,n){a.Z=n.p+"assets/images/LogMiner19-cc04dee2cf9cdac76c887571b9f3b470.png"},8604:function(e,a,n){a.Z=n.p+"assets/images/LogMiner2-71f8a1584b0ad4e1b2a894ce62239e2c.png"},5068:function(e,a,n){a.Z=n.p+"assets/images/LogMiner20-3f894445071ddc9de50e0dd446081b29.png"},3676:function(e,a,n){a.Z=n.p+"assets/images/LogMiner3-5a6ad46c1e9634d289e74ffb93a1e1c2.png"},6110:function(e,a,n){a.Z=n.p+"assets/images/LogMiner4-3ce4956994d14954a62cbb7ad9392f04.png"},9391:function(e,a,n){a.Z=n.p+"assets/images/LogMiner5-918eeef49f30467014779e397d15c850.png"},4291:function(e,a,n){a.Z=n.p+"assets/images/LogMiner6-222b676944981da54f175a1b4acb25d1.png"},85:function(e,a,n){a.Z=n.p+"assets/images/LogMiner7-4b07b14e18ab1a942f11b163b7d7369c.png"},4490:function(e,a,n){a.Z=n.p+"assets/images/LogMiner8-e6f36dc15dc0f0d5b2936624547f8cf9.png"},3052:function(e,a,n){a.Z=n.p+"assets/images/LogMiner9-d88fbe8f5d39b0cd808b2893c6494316.png"}}]);