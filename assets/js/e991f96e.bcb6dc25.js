"use strict";(self.webpackChunkchunjun_web=self.webpackChunkchunjun_web||[]).push([[8236],{3905:function(n,e,t){t.d(e,{Zo:function(){return s},kt:function(){return p}});var r=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var u=r.createContext({}),a=function(n){var e=r.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},s=function(n){var e=a(n.components);return r.createElement(u.Provider,{value:e},n.children)},k={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,l=n.originalType,u=n.parentName,s=c(n,["components","mdxType","originalType","parentName"]),f=a(t),p=i,d=f["".concat(u,".").concat(p)]||f[p]||k[p]||l;return t?r.createElement(d,o(o({ref:e},s),{},{components:t})):r.createElement(d,o({ref:e},s))}));function p(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var l=t.length,o=new Array(l);o[0]=f;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=n,c.mdxType="string"==typeof n?n:i,o[1]=c;for(var a=2;a<l;a++)o[a]=t[a];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6657:function(n,e,t){t.r(e),t.d(e,{assets:function(){return s},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return c},metadata:function(){return a},toc:function(){return k}});var r=t(7462),i=t(3366),l=(t(7294),t(3905)),o=["components"],c={},u="FlinkX 1.12 \u65b0\u7279\u6027",a={unversionedId:"chunjunDocs/change-log",id:"chunjunDocs/change-log",title:"FlinkX 1.12 \u65b0\u7279\u6027",description:"1\u3001FlinkX\u4e0eFlinkStreamSQL\u878d\u5408",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/chunjunDocs/change-log.md",sourceDirName:"chunjunDocs",slug:"/chunjunDocs/change-log",permalink:"/chunjun-web/docs/chunjunDocs/change-log",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chunjunDocs/change-log.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Contributing to ChunJun",permalink:"/chunjun-web/docs/chunjunDocs/contributing"},next:{title:"\u5982\u4f55\u63d0\u4ea4\u4e00\u4e2a\u4f18\u79c0\u7684pr",permalink:"/chunjun-web/docs/chunjunDocs/contribute-pr"}},s={},k=[{value:"1\u3001FlinkX\u4e0eFlinkStreamSQL\u878d\u5408",id:"1flinkx\u4e0eflinkstreamsql\u878d\u5408",level:2},{value:"2\u3001FlinkX\u589e\u52a0transformer\u7b97\u5b50\uff0c\u652f\u6301SQL\u8f6c\u6362",id:"2flinkx\u589e\u52a0transformer\u7b97\u5b50\u652f\u6301sql\u8f6c\u6362",level:2},{value:"3\u3001FlinkX\u63d2\u4ef6Connector\u5316",id:"3flinkx\u63d2\u4ef6connector\u5316",level:2},{value:"4\u3001FlinkX\u6570\u636e\u7ed3\u6784\u4f18\u5316",id:"4flinkx\u6570\u636e\u7ed3\u6784\u4f18\u5316",level:2},{value:"5\u3001FlinkX\u652f\u6301\u4e8c\u9636\u6bb5\u63d0\u4ea4",id:"5flinkx\u652f\u6301\u4e8c\u9636\u6bb5\u63d0\u4ea4",level:2},{value:"6\u3001FlinkX\u652f\u6301\u6570\u636e\u6e56 Iceberg",id:"6flinkx\u652f\u6301\u6570\u636e\u6e56-iceberg",level:2},{value:"7\u3001FlinkX\u652f\u6301\u63d0\u4ea4kubernetes",id:"7flinkx\u652f\u6301\u63d0\u4ea4kubernetes",level:2}],f={toc:k};function p(n){var e=n.components,t=(0,i.Z)(n,o);return(0,l.kt)("wrapper",(0,r.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"flinkx-112-\u65b0\u7279\u6027"},"FlinkX 1.12 \u65b0\u7279\u6027"),(0,l.kt)("h2",{id:"1flinkx\u4e0eflinkstreamsql\u878d\u5408"},"1\u3001FlinkX\u4e0eFlinkStreamSQL\u878d\u5408"),(0,l.kt)("p",null,"FlinkX\u4f5c\u4e3a\u5206\u5e03\u5f0f\u6570\u636e\u540c\u6b65\u5de5\u5177\uff0cFlinkStreamSQL\u57fa\u4e8e\u5f00\u6e90\u7684flink\u5bf9\u5b9e\u65f6sql\u8fdb\u884c\u6269\u5c55\uff0c\u6211\u4eec\u5c06\u4e8c\u8005\u878d\u5408\u3002\u878d\u5408\u540e\u7684FlinkX\u65e2\u652f\u6301\u539f\u6709\u7684\u6570\u636e\u540c\u6b65\u3001\u5b9e\u65f6\u91c7\u96c6\uff0c\u4e5f\u652f\u6301SQL\u6d41\u4e0e\u7ef4\u8868\u7684Join\uff0c\u5b9e\u73b0\u4e86\u4e00\u5957\u63d2\u4ef6\u5b8c\u6210\u6570\u636e\u7684\u540c\u6b65\u3001\u8f6c\u6362\u4e0e\u8ba1\u7b97\u3002"),(0,l.kt)("h2",{id:"2flinkx\u589e\u52a0transformer\u7b97\u5b50\u652f\u6301sql\u8f6c\u6362"},"2\u3001FlinkX\u589e\u52a0transformer\u7b97\u5b50\uff0c\u652f\u6301SQL\u8f6c\u6362"),(0,l.kt)("p",null,"\u57281.10\u53ca\u4e4b\u524d\u7248\u672c\u7684FlinkX\u4e2d\uff0c\u6211\u4eec\u5176\u5b9e\u662f\u4e0d\u652f\u6301\u6570\u636e\u8f6c\u6362\u7684\uff0c\u8fd9\u5bf9\u4e8eETL\u4f5c\u4e1a\u6765\u8bf4\u51e0\u4e4e\u662f\u65ad\u4e86\u4e00\u6761\u817f\u3002\u57281.12\u7248\u672c\uff0c\u6211\u4eec\u589e\u52a0\u4e86transformer\u7b97\u5b50\uff0c\u7528\u6237\u5728\u811a\u672c\u4e2d\u5b9a\u4e49\u597d\u6570\u636e\u7c7b\u578b\u4ee5\u53caSQL\u8f6c\u6362\u903b\u8f91\uff0cFlinkX\u5c06\u4f1a\u5e2e\u7528\u6237\u628aETL\u4f5c\u4e1a\u4e00\u6b65\u5230\u4f4d\u3002\u5728\u914d\u7f6e\u7684SQL\u4e2d\uff0c\u6211\u4eec\u652f\u6301\u6240\u6709Flink\u539f\u751f\u8bed\u6cd5\u53caFunction\u3002"),(0,l.kt)("h2",{id:"3flinkx\u63d2\u4ef6connector\u5316"},"3\u3001FlinkX\u63d2\u4ef6Connector\u5316"),(0,l.kt)("p",null,"\u57281.10\u53ca\u4e4b\u524d\u7248\u672c\u7684FlinkX\u4e2d\uff0c\u6211\u4eec\u7684\u63d2\u4ef6\u5206\u4e3areader\u548cwriter\u3002\u57281.12\u4e2d\uff0c\u6211\u4eec\u5411Flink\u793e\u533a\u9760\u9f50\uff0c\u63d2\u4ef6\u4e0d\u533a\u5206\u4e3areader\u548cwriter\uff0c\u7edf\u4e00\u547d\u540d\u4e3aconnector\u5e76\u9075\u5faa\u793e\u533a\u7684\u89c4\u8303\u3002\u7edf\u4e00\u540e\u7684FlinkX connector\u4e0e\u793e\u533a\u4fdd\u6301\u517c\u5bb9\uff0c\u65e2\u793e\u533a\u53ef\u4ee5\u4f7f\u7528FlinkX\u7684connector\uff0cFlinkX\u4e5f\u53ef\u4ee5\u4f7f\u7528\u793e\u533a\u7684connector\u3002"),(0,l.kt)("h2",{id:"4flinkx\u6570\u636e\u7ed3\u6784\u4f18\u5316"},"4\u3001FlinkX\u6570\u636e\u7ed3\u6784\u4f18\u5316"),(0,l.kt)("p",null,"\u57281.10\u53ca\u4e4b\u524d\u7248\u672c\u7684FlinkX\u4e2d\uff0c\u6570\u636e\u4f20\u8f93\u4f7f\u7528\u7684\u662fRow\uff0c\u57281.12\u4e2d\uff0c\u6211\u4eec\u5411Flink\u793e\u533a\u9760\u9f50\uff0c\u4fee\u6539\u6210\u4e86RowData\u3002\u5728\u4e4b\u524d\u7248\u672c\u5b9e\u65f6\u91c7\u96c6\u5230\u7684\u6570\u636e\u5728Row\u4e2d\u662f\u4e00\u4e2aMap\u7ed3\u6784\uff0c\u6ca1\u6709\u5e73\u94fa\u5c55\u5f00\u5bfc\u81f4\u5176\u5b9e\u65e0\u6cd5\u5199\u5230\u6570\u636e\u5e93\u5bf9\u5e94\u7684\u5b57\u6bb5\u5217\u7684\u3002\u5728\u65b0\u7248\u672c\u4e2d\uff0c\u6211\u4eec\u5c06\u5176\u5c55\u5f00\u4f7f\u5f97\u5b9e\u65f6\u91c7\u96c6\u7684\u6570\u636e\u53ef\u4ee5\u5199\u5230\u5bf9\u5e94\u7684\u5b57\u6bb5\u5217\u3002\u8fd9\u4e3a\u540e\u7eed\u5f02\u6784\u6570\u636e\u6e90\u7684\u6570\u636e\u8fd8\u539f\u8fc8\u4e0b\u4e86\u575a\u5b9e\u7684\u4e00\u6b65\u3002\n\u200b"),(0,l.kt)("h2",{id:"5flinkx\u652f\u6301\u4e8c\u9636\u6bb5\u63d0\u4ea4"},"5\u3001FlinkX\u652f\u6301\u4e8c\u9636\u6bb5\u63d0\u4ea4"),(0,l.kt)("p",null,"\u76ee\u524dFlinkX\u51e0\u4e4e\u6240\u6709\u63d2\u4ef6\u90fd\u652f\u6301\u4e8c\u9636\u6bb5\u63d0\u4ea4\u3002"),(0,l.kt)("h2",{id:"6flinkx\u652f\u6301\u6570\u636e\u6e56-iceberg"},"6\u3001FlinkX\u652f\u6301\u6570\u636e\u6e56 Iceberg"),(0,l.kt)("p",null,"\u53ef\u4ee5\u6d41\u5f0f\u8bfb\u53d6\u548c\u5199\u5165Iceberg\u6570\u636e\u6e56\uff0c\u672a\u6765\u4e5f\u4f1a\u52a0\u5165Hudi\u652f\u6301\u3002"),(0,l.kt)("h2",{id:"7flinkx\u652f\u6301\u63d0\u4ea4kubernetes"},"7\u3001FlinkX\u652f\u6301\u63d0\u4ea4kubernetes"),(0,l.kt)("p",null,"FlinkX\u652f\u6301\u4f7f\u7528native kuberentes\u65b9\u5f0f\u4ee5session\u548crun-application\u6a21\u5f0f\u63d0\u4ea4\u4efb\u52a1\u3002"))}p.isMDXComponent=!0}}]);