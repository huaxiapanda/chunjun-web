"use strict";(self.webpackChunkchunjun_web=self.webpackChunkchunjun_web||[]).push([[3727],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return k}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=p(a),k=l,N=m["".concat(o,".").concat(k)]||m[k]||c[k]||r;return a?n.createElement(N,i(i({ref:t},s),{},{components:a})):n.createElement(N,i({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:l,i[1]=u;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},964:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=["components"],u={},o="ElasticSearch Source",p={unversionedId:"chunjunDocs/connectors/elasticsearch/es7-source",id:"chunjunDocs/connectors/elasticsearch/es7-source",title:"ElasticSearch Source",description:"1\u3001Introduce",source:"@site/docs/chunjunDocs/connectors/elasticsearch/es7-source.md",sourceDirName:"chunjunDocs/connectors/elasticsearch",slug:"/chunjunDocs/connectors/elasticsearch/es7-source",permalink:"/chunjun-web/en/docs/chunjunDocs/connectors/elasticsearch/es7-source",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chunjunDocs/connectors/elasticsearch/es7-source.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ElasticSearch Sink",permalink:"/chunjun-web/en/docs/chunjunDocs/connectors/elasticsearch/es7-sink"},next:{title:"GBase Lookup",permalink:"/chunjun-web/en/docs/chunjunDocs/connectors/gbase/gbase-lookup"}},s={},c=[{value:"1\u3001Introduce",id:"1introduce",level:2},{value:"2\u3001Version support",id:"2version-support",level:2},{value:"3\u3001Plugin name",id:"3plugin-name",level:2},{value:"4\u3001Param description",id:"4param-description",level:2},{value:"4.1\u3001Sync",id:"41sync",level:3},{value:"4.2\u3001SQL",id:"42sql",level:3},{value:"5\u3001Data type",id:"5data-type",level:2},{value:"6\u3001Sample demo",id:"6sample-demo",level:2}],m={toc:c};function k(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"elasticsearch-source"},"ElasticSearch Source"),(0,r.kt)("h2",{id:"1introduce"},"1\u3001Introduce"),(0,r.kt)("p",null,"The ElasticSearch Source plugin supports reading data from an existing ElasticSearch cluster in a specified index."),(0,r.kt)("h2",{id:"2version-support"},"2\u3001Version support"),(0,r.kt)("p",null,"Elasticsearch 7.x"),(0,r.kt)("h2",{id:"3plugin-name"},"3\u3001Plugin name"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sync"),(0,r.kt)("td",{parentName:"tr",align:null},"elasticsearch7reader")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SQL"),(0,r.kt)("td",{parentName:"tr",align:null},"elasticsearch7-x")))),(0,r.kt)("h2",{id:"4param-description"},"4\u3001Param description"),(0,r.kt)("h3",{id:"41sync"},"4.1\u3001Sync"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hosts"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Description\uff1aOne or more Elasticsearch hosts to connect to\u3002eg: "localhost:9200".'),(0,r.kt)("li",{parentName:"ul"},"Required\uff1arequired"),(0,r.kt)("li",{parentName:"ul"},"Type\uff1aList"),(0,r.kt)("li",{parentName:"ul"},"Default\uff1anone")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"index"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description\uff1aElasticsearch index for every record. "),(0,r.kt)("li",{parentName:"ul"},"Required\uff1arequired"),(0,r.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"Default\uff1anone")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"username"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description\uff1aUser name after basic authentication is enabled. Please notice that Elasticsearch doesn't pre-bundled security feature, but you can enable it by following the guideline to secure an Elasticsearch cluster."),(0,r.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,r.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"Default\uff1anone")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"password"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description\uff1aPassword used to connect to Elasticsearch instance. If username is configured, this option must be configured with non-empty string as well."),(0,r.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,r.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"Default\uff1anone")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"batchSize"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description\uff1aNumber of data pieces written in batches"),(0,r.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,r.kt)("li",{parentName:"ul"},"Type\uff1aInteger"),(0,r.kt)("li",{parentName:"ul"},"Default\uff1a1")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"column")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description\uff1aColumns to be synchronized"),(0,r.kt)("li",{parentName:"ul"},"note\uff1a'*' is not supported."),(0,r.kt)("li",{parentName:"ul"},"format:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'  "column": [{\n    "name": "col", -- Column name, which can be found in a multi-level format\n    "type": "string", -- Column type, when name is not specified, returns a constant column with the value specified by value\n    "value": "value" -- Constant column value\n  }]\n'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"connectTimeout")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description\uff1aElasticsearch client max connect timeout."),(0,r.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,r.kt)("li",{parentName:"ul"},"Type\uff1aInteger"),(0,r.kt)("li",{parentName:"ul"},"Default\uff1a5000")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"socketTimeout"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description\uff1aElasticsearch client max socket timeout."),(0,r.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,r.kt)("li",{parentName:"ul"},"Type\uff1aInteger"),(0,r.kt)("li",{parentName:"ul"},"Default\uff1a1800000")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"keepAliveTime"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description\uff1aElasticsearch client connection max keepAlive time."),(0,r.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,r.kt)("li",{parentName:"ul"},"Type\uff1aInteger"),(0,r.kt)("li",{parentName:"ul"},"Default\uff1a5000")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"requestTimeout"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description\uff1aElasticsearch client connection max request timeout."),(0,r.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,r.kt)("li",{parentName:"ul"},"Type\uff1aInteger"),(0,r.kt)("li",{parentName:"ul"},"Default\uff1a2000")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"maxConnPerRoute"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description\uff1aElasticsearch client connection assigns maximum connection per route value."),(0,r.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,r.kt)("li",{parentName:"ul"},"Type\uff1aInteger"),(0,r.kt)("li",{parentName:"ul"},"Default\uff1a10")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"sslConfig"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description: Configuration items required to enable ssl connection authentication.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"useLocalFile\uff1awhether to use local files."),(0,r.kt)("li",{parentName:"ul"},"fileName\uff1aFile name, when using a local file, the file path is: filePath/fileName, when using sftp, the file path is: path/fileName."),(0,r.kt)("li",{parentName:"ul"},"filePath\uff1aThe parent directory where the file is located."),(0,r.kt)("li",{parentName:"ul"},"keyStorePass\uff1aUse the password of the certificate file, the password specified when the certificate file is generated, if not, no configuration is required."),(0,r.kt)("li",{parentName:"ul"},"type\uff1aCertificate type, currently supports two types of certificate files: ca (ca.crt) and pkcs12 (xxx.p12). Optional value: ca/pkcs12"),(0,r.kt)("li",{parentName:"ul"},"sftpConf\uff1asftp configuration"))),(0,r.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,r.kt)("li",{parentName:"ul"},"Type\uff1aMap"),(0,r.kt)("li",{parentName:"ul"},"Default\uff1anone",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'"sslConfig": {\n  "useLocalFile":false,\n  "fileName":"ca.crt",\n  "filePath":"/Users/edy/Downloads",\n  "keyStorePass":"",\n  "type":"ca",\n  "sftpConf": {\n    "path":"/data/sftp/ssl",\n    "password":"dtstack",\n    "port":"22",\n    "auth":"1",\n    "host":"127.0.0.1",\n    "username":"root"\n  }\n}\n')))))),(0,r.kt)("h3",{id:"42sql"},"4.2\u3001SQL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"hosts"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Description\uff1aOne or more Elasticsearch hosts to connect to\u3002eg: "localhost:9200", Multiple addresses are delimited by semicolons.'),(0,r.kt)("li",{parentName:"ul"},"Required\uff1arequired"),(0,r.kt)("li",{parentName:"ul"},"Type\uff1aList"),(0,r.kt)("li",{parentName:"ul"},"Default\uff1anone")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"index"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description\uff1aElasticsearch index for every record. "),(0,r.kt)("li",{parentName:"ul"},"Required\uff1arequired"),(0,r.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"Default\uff1anone")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"username"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description\uff1aUser name after basic authentication is enabled. Please notice that Elasticsearch doesn't pre-bundled security feature, but you can enable it by following the guideline to secure an Elasticsearch cluster."),(0,r.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,r.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"Default\uff1anone")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"password"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description\uff1aPassword used to connect to Elasticsearch instance. If username is configured, this option must be configured with non-empty string as well."),(0,r.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,r.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"Default\uff1anone")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"sink.bulk-flush.max-actions"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description\uff1aMaximum number of actions to buffer for each bulk request."),(0,r.kt)("li",{parentName:"ul"},"Required\uff1aoptinal"),(0,r.kt)("li",{parentName:"ul"},"Type\uff1aInteger"),(0,r.kt)("li",{parentName:"ul"},"Default\uff1a1000")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"client.connect-timeout"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description\uff1aElasticsearch client max connect timeout."),(0,r.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,r.kt)("li",{parentName:"ul"},"Type\uff1aInteger"),(0,r.kt)("li",{parentName:"ul"},"Default\uff1a5000")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"client.socket-timeout"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description\uff1aElasticsearch client max socket timeout."),(0,r.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,r.kt)("li",{parentName:"ul"},"Type\uff1aInteger"),(0,r.kt)("li",{parentName:"ul"},"Default\uff1a1800000")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"client.keep-alive-time"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description\uff1aElasticsearch client connection max keepAlive time."),(0,r.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,r.kt)("li",{parentName:"ul"},"Type\uff1aInteger"),(0,r.kt)("li",{parentName:"ul"},"Default\uff1a5000")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"client.request-timeout"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description\uff1aElasticsearch client connection max request timeout."),(0,r.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,r.kt)("li",{parentName:"ul"},"Type\uff1aInteger"),(0,r.kt)("li",{parentName:"ul"},"Default\uff1a2000")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"client.max-connection-per-route"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description\uff1aElasticsearch client connection assigns maximum connection per route value."),(0,r.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,r.kt)("li",{parentName:"ul"},"Type\uff1aInteger"),(0,r.kt)("li",{parentName:"ul"},"Default\uff1a10")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"security.ssl-keystore-file"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description\uff1assl keystore authentication file name"),(0,r.kt)("li",{parentName:"ul"},"Required: optional"),(0,r.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"Default\uff1anone")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"security.ssl-keystore-password"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description\uff1assl keystore authentication file password, if present"),(0,r.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,r.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"Default\uff1anone")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"security.ssl-type"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Description\uff1aCertificate type, currently supports two types of certificate files: ca (ca.crt) and pkcs12 (xxx.p12). Optional value: ca/pkcs12"),(0,r.kt)("li",{parentName:"ul"},"Required\uff1aoptional"),(0,r.kt)("li",{parentName:"ul"},"Type\uff1aString"),(0,r.kt)("li",{parentName:"ul"},"Default\uff1anone")))),(0,r.kt)("h2",{id:"5data-type"},"5\u3001Data type"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"SUPPORTED"),(0,r.kt)("th",{parentName:"tr",align:null},"DATA TYPE"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"YES"),(0,r.kt)("td",{parentName:"tr",align:null},"INTEGER,FLOAT,DOUBLE,LONG,DATE,TEXT,BYTE,BINARY,OBJECT,NESTED")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NO"),(0,r.kt)("td",{parentName:"tr",align:null},"IP,GEO_POINT,GEO_SHAPE")))),(0,r.kt)("h2",{id:"6sample-demo"},"6\u3001Sample demo"),(0,r.kt)("p",null,"See the 'demo' folder in the 'flinkx-examples' module of the project."))}k.isMDXComponent=!0}}]);