"use strict";(self.webpackChunkchunjun_web=self.webpackChunkchunjun_web||[]).push([[6033],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),o=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=o(a),c=r,N=s["".concat(u,".").concat(c)]||s[c]||k[c]||l;return a?n.createElement(N,i(i({ref:t},m),{},{components:a})):n.createElement(N,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},8027:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return c},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return k}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],p={},u="Greenplum Sink",o={unversionedId:"chunjunDocs/connectors/greenplum/greenplum-sink",id:"chunjunDocs/connectors/greenplum/greenplum-sink",title:"Greenplum Sink",description:"1\u3001Introduce",source:"@site/docs/chunjunDocs/connectors/greenplum/greenplum-sink.md",sourceDirName:"chunjunDocs/connectors/greenplum",slug:"/chunjunDocs/connectors/greenplum/greenplum-sink",permalink:"/chunjun-web/en/docs/chunjunDocs/connectors/greenplum/greenplum-sink",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chunjunDocs/connectors/greenplum/greenplum-sink.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GBase Source",permalink:"/chunjun-web/en/docs/chunjunDocs/connectors/gbase/gbase-source"},next:{title:"Greenplum Source",permalink:"/chunjun-web/en/docs/chunjunDocs/connectors/greenplum/greenplum-source"}},m={},k=[{value:"1\u3001Introduce",id:"1introduce",level:2},{value:"2\u3001Version Support",id:"2version-support",level:2},{value:"3\u3001Connector name",id:"3connector-name",level:2},{value:"4\u3001Parameter description",id:"4parameter-description",level:2},{value:"1\u3001Sync",id:"1sync",level:3},{value:"2\u3001SQL",id:"2sql",level:3},{value:"\u4e94\u3001\u6570\u636e\u7c7b\u578b",id:"\u4e94\u6570\u636e\u7c7b\u578b",level:2},{value:"6. Example",id:"6-example",level:2}],s={toc:k};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"greenplum-sink"},"Greenplum Sink"),(0,l.kt)("h2",{id:"1introduce"},"1\u3001Introduce"),(0,l.kt)("p",null,"Greenplum sink"),(0,l.kt)("h2",{id:"2version-support"},"2\u3001Version Support"),(0,l.kt)("p",null,"Greenplum 5 and above"),(0,l.kt)("h2",{id:"3connector-name"},"3\u3001Connector name"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Sync"),(0,l.kt)("td",{parentName:"tr",align:null},"greenplumsink\u3001greenplumwriter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"---"),(0,l.kt)("td",{parentName:"tr",align:null},"---")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SQL"),(0,l.kt)("td",{parentName:"tr",align:null},"greenplum-x")))),(0,l.kt)("h2",{id:"4parameter-description"},"4\u3001Parameter description"),(0,l.kt)("h3",{id:"1sync"},"1\u3001Sync"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"connection")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description:param for Database connection,including jdbcUrl\u3001schema\u3001table and so on"),(0,l.kt)("li",{parentName:"ul"},"Required:required"),(0,l.kt)("li",{parentName:"ul"},"Type:List"),(0,l.kt)("li",{parentName:"ul"},"Default:none",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'    "connection": [{\n     "jdbcUrl": ["jdbc:pivotal:greenplum://localhost:5432;DatabaseName=postgres"],\n     "table": ["table"],\n     "schema":"public"\n    }]\n')),(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"jdbcUrl")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1ajdbc connection string for relational database,jdbcUrl reference\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://gpdb.docs.pivotal.io/590/datadirect/datadirect_jdbc.html"},"greenplum")),(0,l.kt)("li",{parentName:"ul"},"Required: required"),(0,l.kt)("li",{parentName:"ul"},"Type: string"),(0,l.kt)("li",{parentName:"ul"},"Default: none",(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"schema")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description:Database schema"),(0,l.kt)("li",{parentName:"ul"},"Required:optional"),(0,l.kt)("li",{parentName:"ul"},"Type:string"),(0,l.kt)("li",{parentName:"ul"},"Default:none",(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"table")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1aThe table name of the target table. Currently only single table is supported, and multiple tables will be supported in the future"),(0,l.kt)("li",{parentName:"ul"},"Required:required"),(0,l.kt)("li",{parentName:"ul"},"Type:List"),(0,l.kt)("li",{parentName:"ul"},"Default:none",(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"username")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description:user name"),(0,l.kt)("li",{parentName:"ul"},"Required:required"),(0,l.kt)("li",{parentName:"ul"},"Type:String"),(0,l.kt)("li",{parentName:"ul"},"Default:none",(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"password")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description:password"),(0,l.kt)("li",{parentName:"ul"},"Required:required"),(0,l.kt)("li",{parentName:"ul"},"Type:String"),(0,l.kt)("li",{parentName:"ul"},"Default:none",(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"column")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Description\uff1aThe fields that the destination table needs to write data into, and the fields are separated by commas.for example: "column": ','["id","name","age"]'),(0,l.kt)("li",{parentName:"ul"},"Required:required"),(0,l.kt)("li",{parentName:"ul"},"Type:List"),(0,l.kt)("li",{parentName:"ul"},"Default:none",(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"fullcolumn")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'Description:All fields in the destination table ,which is separated by English commas.for example: "column": ','["id","name","age","hobby"]',",if not configured, it will be obtained in the system table"),(0,l.kt)("li",{parentName:"ul"},"Required:optional"),(0,l.kt)("li",{parentName:"ul"},"Type:List"),(0,l.kt)("li",{parentName:"ul"},"Default:none",(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"preSql")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description:the sql executed  before writing data into the destination table"),(0,l.kt)("li",{parentName:"ul"},"Required:optional"),(0,l.kt)("li",{parentName:"ul"},"Type:List"),(0,l.kt)("li",{parentName:"ul"},"Default:none",(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"postSql")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description:the sql executed  after writing data into the destination table"),(0,l.kt)("li",{parentName:"ul"},"Required:optional"),(0,l.kt)("li",{parentName:"ul"},"Type:List"),(0,l.kt)("li",{parentName:"ul"},"Default:none",(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"writeMode")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1aControls writing data to the target table using insert into or replace into or ON DUPLICATE KEY UPDATE "),(0,l.kt)("li",{parentName:"ul"},"Required:required"),(0,l.kt)("li",{parentName:"ul"},"All options:insert/replace/update"),(0,l.kt)("li",{parentName:"ul"},"Type:String"),(0,l.kt)("li",{parentName:"ul"},"Default:insert",(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"batchSize")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description:The number of records submitted in batch at one time. This value can greatly reduce the number of network interactions between flinkx and the database and improve the overall throughput,Setting this value too large may cause the flinkx process to run oom"),(0,l.kt)("li",{parentName:"ul"},"Required:optional"),(0,l.kt)("li",{parentName:"ul"},"Type:int"),(0,l.kt)("li",{parentName:"ul"},"Default:1024",(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"updateKey")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description:When the write mode is update, you need to specify the value of this parameter as the unique index field"),(0,l.kt)("li",{parentName:"ul"},"attention:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If this parameter is empty and the write mode is update, the application will automatically obtain the unique index in the database;"),(0,l.kt)("li",{parentName:"ul"},"If the data table does not have a unique index, but the required write mode is configured as update and, the application will write data in the way of insert;"))),(0,l.kt)("li",{parentName:"ul"},"Required:optional"),(0,l.kt)("li",{parentName:"ul"},"Type:Map<String,List>",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'for example:"updateKey": {"key": ','["id"]',"}"))),(0,l.kt)("li",{parentName:"ul"},"Default:none",(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"semantic")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description:sink operator support phase two commit"),(0,l.kt)("li",{parentName:"ul"},"attention:\n-If this parameter is blank, phase two commit is not enabled by default,which means sink operators do not support exactly-once semantics\n-Currently only supported exactly-once and at-least-once"),(0,l.kt)("li",{parentName:"ul"},"Required:optional"),(0,l.kt)("li",{parentName:"ul"},"Type:String",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'for example:"semantic": "exactly-once"'))),(0,l.kt)("li",{parentName:"ul"},"Default:at-least-once",(0,l.kt)("br",null))))),(0,l.kt)("h3",{id:"2sql"},"2\u3001SQL"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"connector")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description:greenplum-x"),(0,l.kt)("li",{parentName:"ul"},"Required:required"),(0,l.kt)("li",{parentName:"ul"},"Type:String"),(0,l.kt)("li",{parentName:"ul"},"Default:none",(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"url")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1ajdbc:pivotal:greenplum://localhost:5432;DatabaseName=postgres"),(0,l.kt)("li",{parentName:"ul"},"Required:required"),(0,l.kt)("li",{parentName:"ul"},"Type:String"),(0,l.kt)("li",{parentName:"ul"},"Default:none",(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"schema")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description:Database schema"),(0,l.kt)("li",{parentName:"ul"},"Required:optional"),(0,l.kt)("li",{parentName:"ul"},"Type:string"),(0,l.kt)("li",{parentName:"ul"},"Default:none",(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"table-name")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description: table name"),(0,l.kt)("li",{parentName:"ul"},"Required:required"),(0,l.kt)("li",{parentName:"ul"},"Type:String"),(0,l.kt)("li",{parentName:"ul"},"Default:none",(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"username")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description:username"),(0,l.kt)("li",{parentName:"ul"},"Required:required"),(0,l.kt)("li",{parentName:"ul"},"Type:String"),(0,l.kt)("li",{parentName:"ul"},"Default:none",(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"password")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description:password"),(0,l.kt)("li",{parentName:"ul"},"Required:required"),(0,l.kt)("li",{parentName:"ul"},"Type:String"),(0,l.kt)("li",{parentName:"ul"},"Default:none",(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"sink.buffer-flush.max-rows")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description:Number of data pieces written in batch,Unit:piece."),(0,l.kt)("li",{parentName:"ul"},"Required:optional"),(0,l.kt)("li",{parentName:"ul"},"Type:String"),(0,l.kt)("li",{parentName:"ul"},"Default:1024",(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"sink.buffer-flush.interval")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description:Batch write interval,Unit: ms"),(0,l.kt)("li",{parentName:"ul"},"Required:optional"),(0,l.kt)("li",{parentName:"ul"},"Type:String"),(0,l.kt)("li",{parentName:"ul"},"Default:10000",(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"sink.all-replace")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description\uff1awhether to replace all data in the database(If the original value in the database is not null, the new value is null, if it is true, it will be replaced with null)"),(0,l.kt)("li",{parentName:"ul"},"Required:optional"),(0,l.kt)("li",{parentName:"ul"},"Type:String"),(0,l.kt)("li",{parentName:"ul"},"Default:false",(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"sink.parallelism")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description:the parallelism of sink operator"),(0,l.kt)("li",{parentName:"ul"},"Required:optional"),(0,l.kt)("li",{parentName:"ul"},"Type:String"),(0,l.kt)("li",{parentName:"ul"},"Default:none",(0,l.kt)("br",null)))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"sink.semantic")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description:sink operator support phase two commit"),(0,l.kt)("li",{parentName:"ul"},"attention:\n-If this parameter is blank, phase two commit is not enabled by default,which means sink operators do not support exactly-once semantics;\n-Currently only supported exactly-once and at-least-once"),(0,l.kt)("li",{parentName:"ul"},"Required:optional"),(0,l.kt)("li",{parentName:"ul"},"Type:String",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'for example:"semantic": "exactly-once"'))),(0,l.kt)("li",{parentName:"ul"},"Default:at-least-once",(0,l.kt)("br",null))))),(0,l.kt)("h2",{id:"\u4e94\u6570\u636e\u7c7b\u578b"},"\u4e94\u3001\u6570\u636e\u7c7b\u578b"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Whether to support"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"SMALLINT\u3001SMALLSERIAL\u3001INT2\u3001INT\u3001INTEGER\u3001SERIAL\u3001INT4\u3001BIGINT\u3001BIGSERIAL\u3001OID\u3001INT8\u3001REAL\u3001FLOAT4\u3001FLOAT\u3001DOUBLE PRECISION\u3001FLOAT8\u3001DECIMAL\u3001NUMERIC\u3001 CHARACTER VARYING\u3001VARCHAR\u3001CHARACTER\u3001CHAR\u3001TEXT\u3001NAME\u3001BPCHAR\u3001BYTEA\u3001TIMESTAMP\u3001TIMESTAMPTZ\u3001DATE\u3001TIME\u3001TIMETZ\u3001 BOOLEAN\u3001BOOL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unsupported"),(0,l.kt)("td",{parentName:"tr",align:null},"ARRAY etc.")))),(0,l.kt)("h2",{id:"6-example"},"6. Example"),(0,l.kt)("p",null,"The details are in flinkx-examples dir."))}c.isMDXComponent=!0}}]);