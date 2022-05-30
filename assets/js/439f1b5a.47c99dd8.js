"use strict";(self.webpackChunkchunjun_web=self.webpackChunkchunjun_web||[]).push([[2573],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return k}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),k=a,m=d["".concat(u,".").concat(k)]||d[k]||s[k]||l;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},74:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),i=["components"],o={slug:"spilt-sql-statement",title:"\u5206\u5272SQL\u8bed\u53e5",authors:"wang",tags:["Principle"]},u="\u5206\u5272SQL\u8bed\u53e5",c={permalink:"/chunjun-web/blog/spilt-sql-statement",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-06-08-split-sql/FXIP-7 \u5206\u5272SQL\u8bed\u53e5.md",source:"@site/blog/2021-06-08-split-sql/FXIP-7 \u5206\u5272SQL\u8bed\u53e5.md",title:"\u5206\u5272SQL\u8bed\u53e5",description:"\u80cc\u666f",date:"2021-06-08T00:00:00.000Z",formattedDate:"2021\u5e746\u67088\u65e5",tags:[{label:"Principle",permalink:"/chunjun-web/blog/tags/principle"}],readingTime:2.94,truncated:!1,authors:[{name:"Ada Wang",title:"ChunJun maintainer",url:"https://github.com/deadwind4",imageURL:"https://github.com/deadwind4.png",key:"wang"}],frontMatter:{slug:"spilt-sql-statement",title:"\u5206\u5272SQL\u8bed\u53e5",authors:"wang",tags:["Principle"]},prevItem:{title:"\u4efb\u52a1\u810f\u6570\u636e\u63d2\u4ef6\u5316\u7ba1\u7406",permalink:"/chunjun-web/blog/dirty-data-management"}},p={authorsImageUrls:[void 0]},s=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u6307\u5bfc\u601d\u60f3",id:"\u6307\u5bfc\u601d\u60f3",level:4},{value:"\u6b65\u9aa4",id:"\u6b65\u9aa4",level:4},{value:"\u4e00\u3001\u72b6\u6001\u673a\u7684\u5b9e\u73b0",id:"\u4e00\u72b6\u6001\u673a\u7684\u5b9e\u73b0",level:3},{value:"\u72b6\u6001\u673a\u8f6c\u6362\u56fe",id:"\u72b6\u6001\u673a\u8f6c\u6362\u56fe",level:4},{value:"\u72b6\u6001\u673a\u4e94\u79cd\u72b6\u6001\uff1a",id:"\u72b6\u6001\u673a\u4e94\u79cd\u72b6\u6001",level:4},{value:"\u5207\u6362\u72b6\u6001\u7684\u4e09\u79cd\u5173\u952e\u5b57",id:"\u5207\u6362\u72b6\u6001\u7684\u4e09\u79cd\u5173\u952e\u5b57",level:4},{value:"\u4e8c\u3001Token\u7684\u5b9e\u73b0",id:"\u4e8ctoken\u7684\u5b9e\u73b0",level:3},{value:"Token\u4f7f\u7528\u4e3e\u4f8b",id:"token\u4f7f\u7528\u4e3e\u4f8b",level:4},{value:"\u53c2\u8003\u4ee3\u7801",id:"\u53c2\u8003\u4ee3\u7801",level:4}],d={toc:s};function k(e){var n=e.components,o=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,l.kt)("p",null,"SQL\u8bed\u53e5\u7684DDL\u548cDML\u6839\u636e\u5206\u53f7\u5212\u5206\u3002\n\u4e4b\u524d\u7684\u5bf9\u4e00\u7ec4SQL\u8bed\u53e5\u7684\u5207\u5206\u6709\u95ee\u9898\u3002\u51fa\u73b0 '","\\","\\","' \u4f1a\u51fa\u73b0\u5207\u5272\u9519\u8bef\u3002\n\u4f8b\u5b50\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"CREATE TABLE student (id INT, name STRING, age INT) USING CSV;\nSELECT *, split(q,'\\\\\\\\') as qq FROM foo_table;\nSELECT * FROM bar_table;\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u65e0\u6cd5\u88absplitIgnoreQuota()\u65b9\u6cd5\u6b63\u786e\u5207\u5272\u6210\u4e09\u53e5SQL\u3002"),(0,l.kt)("h4",{id:"\u6307\u5bfc\u601d\u60f3"},"\u6307\u5bfc\u601d\u60f3"),(0,l.kt)("p",null,"\u60f3\u4ece\u7f16\u8bd1\u539f\u7406\u7684\u8bcd\u6cd5\u5206\u6790\u89d2\u5ea6\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002\u5b9e\u73b0\u4e00\u4e2aDFA\uff08\u786e\u5b9a\u6709\u9650\u72b6\u6001\u81ea\u52a8\u673a\uff09\u3002\u53ea\u8981\u72b6\u6001\u8f6c\u6362\u56fe\u662f\u5bf9\u7684\u3002\u90a3\u4e48\u89e3\u6790\u7684\u5b57\u7b26\u4e32\u4e00\u5b9a\u662f\u5bf9\u7684\u3002"),(0,l.kt)("h1",{id:"\u6280\u672f\u65b9\u6848"},"\u6280\u672f\u65b9\u6848"),(0,l.kt)("h4",{id:"\u6b65\u9aa4"},"\u6b65\u9aa4"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u72b6\u6001\u673a\u5c06\u5b57\u7b26\u4e32Token\u5316\u3002",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u6210Token\u6570\u7ec4\u3002"))),(0,l.kt)("li",{parentName:"ol"},"\u6839\u636eToken\u91cd\u7ec4\u6210SQL\u8bed\u53e5\u3002",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u6839\u636eToken\u6570\u7ec4\u4e2d\u7684Token\u7c7b\u578b\uff0c\u62fc\u63a5\u6210\u4e00\u4e2a\u4e00\u4e2aSQL\u8bed\u53e5\uff0c\u7ec4\u6210SQL\u6570\u7ec4\u3002")))),(0,l.kt)("p",null,"\u4e3b\u5e72\u4ee3\u7801\u5c31\u5982\u4e0b\u4e24\u6b65\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'String string = "\u4e00\u5768SQL\u8bed\u53e5";\nList<Token> tokens = tokenize(s);\nList<Token> tokens = tokenize(string);\nreturn processTokens(tokens);\n')),(0,l.kt)("h3",{id:"\u4e00\u72b6\u6001\u673a\u7684\u5b9e\u73b0"},"\u4e00\u3001\u72b6\u6001\u673a\u7684\u5b9e\u73b0"),(0,l.kt)("h4",{id:"\u72b6\u6001\u673a\u8f6c\u6362\u56fe"},"\u72b6\u6001\u673a\u8f6c\u6362\u56fe"),(0,l.kt)("p",null,"\u4e0b\u56fe\u4e2d\uff0c\u6bcf\u4e00\u4e2a\u8282\u70b9\u90fd\u4ee3\u8868\u4e00\u79cd\u72b6\u6001\uff0c\u6bcf\u4e00\u6761\u8fb9\u90fd\u4ee3\u8868\u4e00\u4e2a\u51fd\u6570\u3002\n\u6bcf\u5f53\u8def\u8fc7\u9700\u8981\u751f\u6210Token\u7684\u8fb9\uff0c\u5c31\u628a\u7f13\u51b2\u533a\u4e2d\u6240\u6709\u5b57\u7b26\u4fdd\u5b58\u5230Token\u4e2d\u3002\n",(0,l.kt)("img",{loading:"lazy",alt:"image.png",src:t(569).Z,width:"1040",height:"918"})),(0,l.kt)("h4",{id:"\u72b6\u6001\u673a\u4e94\u79cd\u72b6\u6001"},"\u72b6\u6001\u673a\u4e94\u79cd\u72b6\u6001\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"private enum State {\n    /** current char in single quote */\n    SINGLE_QUOTED,\n    /** current char in single quote\uff0cand after '\\' */\n    AFTER_BACKSLASH_SINGLE_QUOTED,\n    /** current char in double quote */\n    DOUBLE_QUOTED,\n    /** current char in double quote\uff0cand after '\\' */\n    AFTER_BACKSLASH_DOUBLE_QUOTED,\n    /** out of quote */\n    UNQUOTED\n}\n")),(0,l.kt)("h4",{id:"\u5207\u6362\u72b6\u6001\u7684\u4e09\u79cd\u5173\u952e\u5b57"},"\u5207\u6362\u72b6\u6001\u7684\u4e09\u79cd\u5173\u952e\u5b57"),(0,l.kt)("p",null,"\u5206\u9694\u7b26\u4e0d\u5728\u5173\u952e\u5b57\u4e2d\uff0c\u52a8\u6001\u4f20\u5165\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class Keyword {\n    public static final char SINGLE_QUOTE = '\\'';\n    public static final char DOUBLE_QUOTE = '\\\"';\n    public static final char BACKSLASH = '\\\\';\n}\n")),(0,l.kt)("h3",{id:"\u4e8ctoken\u7684\u5b9e\u73b0"},"\u4e8c\u3001Token\u7684\u5b9e\u73b0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public class Token {\n\n    private TokenKind kind;\n    private String val;\n\n    Token(TokenKind kind, String val) {\n        this.kind = kind;\n        this.val = val;\n    }\n    \n    public TokenKind getKind() {\n        return kind;\n    }\n\n    public String getVal() {\n        return val;\n    }\n}\n")),(0,l.kt)("p",null,"Token\u53ea\u6709\u4e24\u79cd\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"/** There are only two kinds */\nprivate enum TokenKind {\n    /** SQL string */\n    STRING,\n    /** SQL delimiter */\n    DELIMITER\n}\n")),(0,l.kt)("h4",{id:"token\u4f7f\u7528\u4e3e\u4f8b"},"Token\u4f7f\u7528\u4e3e\u4f8b"),(0,l.kt)("p",null,"\u5728\u5982\u4e0bSQL\u4f8b\u5b50\u4e2d\uff0c\u8f6c\u6362\u51fa\u7684\u4e00\u4e2aToken\u6570\u7ec4\u662f\u8fd9\u6837","[STRING, STRING, STRING, DELIMITER, STRING, DELIMITER]","\u3002\u90a3\u4e48\u4f1a\u6839\u636eSEMICOLON\u7c7b\u578b\uff0c\u6700\u7ec8\u8fd8\u539f\u51fa\u4e24\u53e5SQL\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"SELECT *, split(q,'\\\\\\\\') as qq FROM foo_table;\nSELECT * FROM bar_table;\n")),(0,l.kt)("h1",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,l.kt)("p",null,"\u300a\u73b0\u4ee3\u7f16\u8bd1\u539f\u7406:C\u8bed\u8a00\u63cf\u8ff0\u300b\u2014\u2014\u7b2c2\u7ae0 \u8bcd\u6cd5\u5206\u6790"),(0,l.kt)("h4",{id:"\u53c2\u8003\u4ee3\u7801"},"\u53c2\u8003\u4ee3\u7801"),(0,l.kt)("p",null,"Flink StructuredOptionsSplitter\u7c7b splitEscaped\uff08\uff09\u65b9\u6cd5\u3002"))}k.isMDXComponent=!0},569:function(e,n,t){n.Z=t.p+"assets/images/image-2581d8a2a831085c7434ea9d74ba4189.png"}}]);