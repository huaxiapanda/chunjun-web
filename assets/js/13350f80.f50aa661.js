"use strict";(self.webpackChunkchunjun_web=self.webpackChunkchunjun_web||[]).push([[1217],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var k=n.createContext({}),u=function(e){var t=n.useContext(k),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=u(e.components);return n.createElement(k.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,k=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),s=u(a),c=r,N=s["".concat(k,".").concat(c)]||s[c]||m[c]||l;return a?n.createElement(N,i(i({ref:t},o),{},{components:a})):n.createElement(N,i({ref:t},o))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var k in t)hasOwnProperty.call(t,k)&&(p[k]=t[k]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},8428:function(e,t,a){a.r(t),a.d(t,{assets:function(){return o},contentTitle:function(){return k},default:function(){return c},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],p={},k=void 0,u={unversionedId:"chunjunDocs/connectors/kafka/kafka-sink",id:"chunjunDocs/connectors/kafka/kafka-sink",title:"kafka-sink",description:"\u4e00\u3001\u4ecb\u7ecd",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/chunjunDocs/connectors/kafka/kafka-sink.md",sourceDirName:"chunjunDocs/connectors/kafka",slug:"/chunjunDocs/connectors/kafka/kafka-sink",permalink:"/chunjun-web/docs/chunjunDocs/connectors/kafka/kafka-sink",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/chunjunDocs/connectors/kafka/kafka-sink.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"InfluxDB Source",permalink:"/chunjun-web/docs/chunjunDocs/connectors/influxdb/influxdb-source"},next:{title:"kafka-source",permalink:"/chunjun-web/docs/chunjunDocs/connectors/kafka/kafka-source"}},o={},m=[{value:"\u4e00\u3001\u4ecb\u7ecd",id:"\u4e00\u4ecb\u7ecd",level:2},{value:"\u4e8c\u3001\u652f\u6301\u7248\u672c",id:"\u4e8c\u652f\u6301\u7248\u672c",level:2},{value:"\u4e09\u3001\u63d2\u4ef6\u540d\u79f0",id:"\u4e09\u63d2\u4ef6\u540d\u79f0",level:2},{value:"\u56db\u3001\u53c2\u6570\u8bf4\u660e",id:"\u56db\u53c2\u6570\u8bf4\u660e",level:2},{value:"1\u3001Sync",id:"1sync",level:3},{value:"2\u3001SQL",id:"2sql",level:3},{value:"\u4e94\u3001\u6570\u636e\u7c7b\u578b",id:"\u4e94\u6570\u636e\u7c7b\u578b",level:2},{value:"\u516d\u3001\u811a\u672c\u793a\u4f8b",id:"\u516d\u811a\u672c\u793a\u4f8b",level:2},{value:"Sql",id:"sql",level:3}],s={toc:m};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4e00\u4ecb\u7ecd"},"\u4e00\u3001\u4ecb\u7ecd"),(0,l.kt)("p",null,"kafka sink"),(0,l.kt)("h2",{id:"\u4e8c\u652f\u6301\u7248\u672c"},"\u4e8c\u3001\u652f\u6301\u7248\u672c"),(0,l.kt)("p",null,"kafka\u4e3b\u6d41\u7248\u672c"),(0,l.kt)("h2",{id:"\u4e09\u63d2\u4ef6\u540d\u79f0"},"\u4e09\u3001\u63d2\u4ef6\u540d\u79f0"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Sync"),(0,l.kt)("th",{parentName:"tr",align:null},"kafkasink\u3001kafkawriter"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SQL"),(0,l.kt)("td",{parentName:"tr",align:null},"kafka-x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SQL(upsert)"),(0,l.kt)("td",{parentName:"tr",align:null},"upsert-kafka-x")))),(0,l.kt)("h2",{id:"\u56db\u53c2\u6570\u8bf4\u660e"},"\u56db\u3001\u53c2\u6570\u8bf4\u660e"),(0,l.kt)("h3",{id:"1sync"},"1\u3001Sync"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"topic"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6d88\u606f\u53d1\u9001\u81f3kafka\u7684topic\u540d\u79f0\uff0c\u4e0d\u652f\u6301\u591a\u4e2atopic"),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"consumerSettings"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1akafka\u8fde\u63a5\u914d\u7f6e\uff0c\u652f\u6301\u6240\u6709",(0,l.kt)("inlineCode",{parentName:"li"},"kafka.consumer.ConsumerConfig.ConsumerConfig"),"\u4e2d\u5b9a\u4e49\u7684\u914d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aMap"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0"),(0,l.kt)("li",{parentName:"ul"},"\u5982\uff1a")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "consumerSettings":{\n        "bootstrap.servers":"host1:9092,host2:9092,host3:9092"\n    }\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"tableFields"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u5b57\u6bb5\u6620\u5c04\u914d\u7f6e\u3002\u4ecereader\u63d2\u4ef6\u4f20\u9012\u5230writer\u63d2\u4ef6\u7684\u7684\u6570\u636e\u53ea\u5305\u542b\u5176value\u5c5e\u6027\uff0c\u914d\u7f6e\u8be5\u53c2\u6570\u540e\u53ef\u5c06\u5176\u8fd8\u539f\u6210\u952e\u503c\u5bf9\u7c7b\u578bjson\u5b57\u7b26\u4e32\u8f93\u51fa\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u82e5\u914d\u7f6e\u8be5\u5c5e\u6027\uff0c\u5219\u8be5\u914d\u7f6e\u4e2d\u7684\u5b57\u6bb5\u4e2a\u6570\u5fc5\u987b\u4e0d\u5c11\u4e8ereader\u63d2\u4ef6\u4e2d\u8bfb\u53d6\u7684\u5b57\u6bb5\u4e2a\u6570\uff0c\u5426\u5219\u8be5\u914d\u7f6e\u5931\u6548\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u6620\u5c04\u5173\u7cfb\u6309\u8be5\u914d\u7f6e\u4e2d\u5b57\u6bb5\u7684\u5148\u540e\u987a\u5e8f\u4f9d\u6b21\u5339\u914d\uff1b"))),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aString[]"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,l.kt)("h3",{id:"2sql"},"2\u3001SQL"),(0,l.kt)("p",null,"\u5177\u4f53\u53ef\u4ee5\u53c2\u8003\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-release-1.12/dev/table/connectors/kafka.html"},"kafka-connector")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"connector"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1akafka-x"),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"topic"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u5f53\u8868\u7528\u4f5c\u6e90\u65f6\u8981\u4ece\u4e2d\u8bfb\u53d6\u6570\u636e\u7684\u4e3b\u9898\u540d\u79f0\u3002\u5b83\u8fd8\u901a\u8fc7\u7528\u5206\u53f7\u5206\u9694\u4e3b\u9898\u6765\u652f\u6301\u6e90\u7684\u4e3b\u9898\u5217\u8868\uff0c\u5982'topic-1;topic-2'. \u8bf7\u6ce8\u610f\uff0c\u53ea\u80fd\u4e3a\u6e90\u6307\u5b9a\u201ctopic-pattern\u201d\u548c\u201ctopic\u201d\u4e4b\u4e00\u3002\u5f53\u8868\u7528\u4f5c\u63a5\u6536\u5668\u65f6\uff0c\u4e3b\u9898\u540d\u79f0\u662f\u8981\u5199\u5165\u6570\u636e\u7684\u4e3b\u9898\u3002\u63a5\u6536\u5668\u4e0d\u652f\u6301\u6ce8\u610f\u4e3b\u9898\u5217\u8868\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"topic-pattern"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u8981\u4ece\u4e2d\u8bfb\u53d6\u7684\u4e3b\u9898\u540d\u79f0\u6a21\u5f0f\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u3002\u5f53\u4f5c\u4e1a\u5f00\u59cb\u8fd0\u884c\u65f6\uff0c\u6d88\u8d39\u8005\u5c06\u8ba2\u9605\u540d\u79f0\u4e0e\u6307\u5b9a\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u7684\u6240\u6709\u4e3b\u9898\u3002\u8bf7\u6ce8\u610f\uff0c\u53ea\u80fd\u4e3a\u6e90\u6307\u5b9a\u201ctopic-pattern\u201d\u548c\u201ctopic\u201d\u4e4b\u4e00\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"properties.bootstrap.servers"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u9017\u53f7\u5206\u9694\u7684 Kafka \u4ee3\u7406\u5217\u8868\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"properties.group.id"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1aKafka source\u7684\u6d88\u8d39\u7ec4id\uff0cKafka sink\u53ef\u9009\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1arequired by source"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"properties.*"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u8fd9\u53ef\u4ee5\u8bbe\u7f6e\u548c\u4f20\u9012\u4efb\u610f Kafka \u914d\u7f6e\u3002\u540e\u7f00\u540d\u79f0\u5fc5\u987b\u4e0e",(0,l.kt)("a",{parentName:"li",href:"https://kafka.apache.org/documentation/#configuration"},"Kafka \u914d\u7f6e\u6587\u6863\u4e2d"),"\u5b9a\u4e49\u7684\u914d\u7f6e\u952e\u5339\u914d\u3002Flink \u5c06\u5220\u9664\u201c\u5c5e\u6027\u201d\u3002\u952e\u524d\u7f00\u5e76\u5c06\u8f6c\u6362\u540e\u7684\u952e\u548c\u503c\u4f20\u9012\u7ed9\u5e95\u5c42 KafkaClient\u3002\u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 \u7981\u7528\u81ea\u52a8\u4e3b\u9898\u521b\u5efa'properties.allow.auto.create.topics' = 'false'\u3002\u4f46\u662f\u6709\u4e00\u4e9b\u914d\u7f6e\u662f\u4e0d\u652f\u6301\u8bbe\u7f6e\u7684\uff0c\u56e0\u4e3a Flink \u4f1a\u8986\u76d6\u5b83\u4eec\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"format"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u7528\u4e8e\u53cd\u5e8f\u5217\u5316\u548c\u5e8f\u5217\u5316 Kafka \u6d88\u606f\u7684\u503c\u90e8\u5206\u7684\u683c\u5f0f\u3002\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u548c\u66f4\u591a",(0,l.kt)("a",{parentName:"li",href:"https://ci.apache.org/projects/flink/flink-docs-release-1.12/zh/dev/table/connectors/formats/"},"\u683c\u5f0f"),"\u9009\u9879\uff0c\u8bf7\u53c2\u9605\u683c\u5f0f\u9875\u9762\u3002\u6ce8\u610f\uff1a\u6b64\u9009\u9879\u6216'value.format'\u9009\u9879\u90fd\u662f\u5fc5\u9700\u7684\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"key.format"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u7528\u7528\u4e8e\u53cd\u5e8f\u5217\u5316\u548c\u5e8f\u5217\u5316 Kafka \u6d88\u606f\u5173\u952e\u90e8\u5206\u7684\u683c\u5f0f\u3002\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u548c\u66f4\u591a",(0,l.kt)("a",{parentName:"li",href:"https://ci.apache.org/projects/flink/flink-docs-release-1.12/zh/dev/table/connectors/formats/"},"\u683c\u5f0f"),"\u9009\u9879\uff0c\u8bf7\u53c2\u9605\u683c\u5f0f\u9875\u9762\u3002\u6ce8\u610f\uff1a\u5982\u679c\u5b9a\u4e49\u4e86\u5bc6\u94a5\u683c\u5f0f\uff0c\u5219\u8be5'key.fields' \u9009\u9879\u4e5f\u662f\u5fc5\u9700\u7684\u3002\u5426\u5219 Kafka \u8bb0\u5f55\u5c06\u6709\u4e00\u4e2a\u7a7a\u952e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"key.fields"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u5b9a\u4e49\u8868\u67b6\u6784\u4e2d\u7269\u7406\u5217\u7684\u663e\u5f0f\u5217\u8868\uff0c\u7528\u4e8e\u914d\u7f6e\u952e\u683c\u5f0f\u7684\u6570\u636e\u7c7b\u578b\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6b64\u5217\u8868\u4e3a\u7a7a\uff0c\u56e0\u6b64\u672a\u5b9a\u4e49\u952e\u3002\u8be5\u5217\u8868\u5e94\u5982\u4e0b\u6240\u793a'field1;field2'\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aList"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"key.fields-prefix"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u4e3a\u952e\u683c\u5f0f\u7684\u6240\u6709\u5b57\u6bb5\u5b9a\u4e49\u81ea\u5b9a\u4e49\u524d\u7f00\uff0c\u4ee5\u907f\u514d\u4e0e\u503c\u683c\u5f0f\u7684\u5b57\u6bb5\u53d1\u751f\u540d\u79f0\u51b2\u7a81\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u524d\u7f00\u4e3a\u7a7a\u3002\u5982\u679c\u5b9a\u4e49\u4e86\u81ea\u5b9a\u4e49\u524d\u7f00\uff0c\u5219\u8868\u67b6\u6784 \u548c'key.fields'\u90fd\u5c06\u4f7f\u7528\u524d\u7f00\u540d\u79f0\u3002\u5728\u6784\u9020\u5bc6\u94a5\u683c\u5f0f\u7684\u6570\u636e\u7c7b\u578b\u65f6\uff0c\u5c06\u5220\u9664\u524d\u7f00\uff0c\u5e76\u5728\u5bc6\u94a5\u683c\u5f0f\u4e2d\u4f7f\u7528\u975e\u524d\u7f00\u540d\u79f0\u3002\u8bf7\u6ce8\u610f\uff0c\u6b64\u9009\u9879\u8981\u6c42'value.fields-include' \u5fc5\u987b\u8bbe\u7f6e\u4e3a'EXCEPT_KEY'\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"value.format"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u7528\u4e8e\u53cd\u5e8f\u5217\u5316\u548c\u5e8f\u5217\u5316 Kafka \u6d88\u606f\u7684\u503c\u90e8\u5206\u7684\u683c\u5f0f\u3002\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u548c\u66f4\u591a\u683c\u5f0f\u9009\u9879\uff0c\u8bf7\u53c2\u9605\u683c\u5f0f\u9875\u9762\u3002\u6ce8\u610f\uff1a\u6b64\u9009\u9879\u6216'format'",(0,l.kt)("a",{parentName:"li",href:"https://ci.apache.org/projects/flink/flink-docs-release-1.12/zh/dev/table/connectors/formats/"},"\u9009\u9879"),"\u90fd\u662f\u5fc5\u9700\u7684\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u662f"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"value.fields-include"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u5b9a\u4e49\u5982\u4f55\u5904\u7406\u503c\u683c\u5f0f\u7684\u6570\u636e\u7c7b\u578b\u4e2d\u7684\u952e\u5217\u7684\u7b56\u7565\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c'ALL'\u8868\u6a21\u5f0f\u7684\u7269\u7406\u5217\u5c06\u5305\u542b\u5728\u503c\u683c\u5f0f\u4e2d\uff0c\u8fd9\u610f\u5473\u7740\u952e\u5217\u51fa\u73b0\u5728\u952e\u548c\u503c\u683c\u5f0f\u7684\u6570\u636e\u7c7b\u578b\u4e2d"),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1a\u679a\u4e3e",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u9009\u7684\u503c\uff1a","[ALL, EXCEPT_KEY]"))),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1aALL"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"scan.startup.mode"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u5361\u592b\u5361\u6d88\u8d39\u7684\u542f\u52a8\u6a21\u5f0f\uff0c\u6709\u6548\u503c\u4e3a'earliest-offset'\uff0c'latest-offset'\uff0c'group-offsets'\uff0c'timestamp'\u548c'specific-offsets'\u3002\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u4ee5\u4e0b",(0,l.kt)("a",{parentName:"li",href:"https://ci.apache.org/projects/flink/flink-docs-release-1.12/zh/dev/table/connectors/kafka.html#start-reading-position"},"\u5f00\u59cb\u9605\u8bfb\u4f4d\u7f6e"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1agroup-offsets"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"scan.startup.specific-offsets"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u5728'specific-offsets'\u542f\u52a8\u6a21\u5f0f\u4e0b\u4e3a\u6bcf\u4e2a\u5206\u533a\u6307\u5b9a\u504f\u79fb\u91cf\uff0c\u4f8b\u5982'partition:0,offset:42;partition:1,offset:300'."),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"scan.startup.timestamp-millis"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u4ece'timestamp'\u542f\u52a8\u6a21\u5f0f\u4e0b\u4f7f\u7528\u7684\u6307\u5b9a\u7eaa\u5143\u65f6\u95f4\u6233\uff08\u6beb\u79d2\uff09\u5f00\u59cb\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aLong"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"scan.topic-partition-discovery.interval"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u6d88\u8d39\u8005\u5b9a\u671f\u53d1\u73b0\u52a8\u6001\u521b\u5efa\u7684 Kafka \u4e3b\u9898\u548c\u5206\u533a\u7684\u65f6\u95f4\u95f4\u9694\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aDuration"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"sink.partitioner"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a \u4ece Flink \u7684\u5206\u533a\u5230 Kafka \u7684\u5206\u533a\u7684\u8f93\u51fa\u5206\u533a\u3002\u6709\u6548\u503c\u4e3a"),(0,l.kt)("li",{parentName:"ul"},"default: \u4f7f\u7528 kafka \u9ed8\u8ba4\u5206\u533a\u5668\u5bf9\u8bb0\u5f55\u8fdb\u884c\u5206\u533a\u3002"),(0,l.kt)("li",{parentName:"ul"},"fixed\uff1a\u6bcf\u4e2a Flink \u5206\u533a\u6700\u7ec8\u6700\u591a\u5305\u542b\u4e00\u4e2a Kafka \u5206\u533a\u3002"),(0,l.kt)("li",{parentName:"ul"},"round-robin\uff1a\u4e00\u4e2a Flink \u5206\u533a\u88ab\u5206\u53d1\u5230 Kafka \u5206\u533a\u7c98\u6027\u5faa\u73af\u3002\u5b83\u4ec5\u5728\u672a\u6307\u5b9a\u8bb0\u5f55\u7684\u952e\u65f6\u6709\u6548\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49FlinkKafkaPartitioner\u5b50\u7c7b\uff1a\u4f8b\u5982'org.mycompany.MyPartitioner'."),(0,l.kt)("li",{parentName:"ul"},"\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u4ee5\u4e0b",(0,l.kt)("a",{parentName:"li",href:"https://ci.apache.org/projects/flink/flink-docs-release-1.12/zh/dev/table/connectors/kafka.html#sink-partitioning"},"\u63a5\u6536\u5668\u5206\u533a"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1adefault"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"sink.semantic"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u5b9a\u4e49 Kafka \u63a5\u6536\u5668\u7684\u4ea4\u4ed8\u8bed\u4e49\u3002\u6709\u6548\u7684\u679a\u4e3e\u662f'at-least-once','exactly-once'\u548c'none'\u3002\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"li",href:"https://ci.apache.org/projects/flink/flink-docs-release-1.12/zh/dev/table/connectors/kafka.html#consistency-guarantees"},"\u4e00\u81f4\u6027\u4fdd\u8bc1"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aString"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1aat-least-once"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"sink.parallelism"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\uff1a\u5b9a\u4e49 Kafka sink \u64cd\u4f5c\u7b26\u7684\u5e76\u884c\u6027\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5e76\u884c\u5ea6\u7531\u6846\u67b6\u4f7f\u7528\u4e0e\u4e0a\u6e38\u94fe\u5f0f\u8fd0\u7b97\u7b26\u76f8\u540c\u7684\u5e76\u884c\u5ea6\u786e\u5b9a\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u9009\uff1a\u5426"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u7c7b\u578b\uff1aInteger"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a\u65e0")))),(0,l.kt)("h2",{id:"\u4e94\u6570\u636e\u7c7b\u578b"},"\u4e94\u3001\u6570\u636e\u7c7b\u578b"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u652f\u6301"),(0,l.kt)("th",{parentName:"tr",align:null},"BOOLEAN\u3001TINYINT\u3001SMALLINT\u3001INT\u3001BIGINT\u3001FLOAT\u3001DOUBLE\u3001DECIMAL\u3001STRING\u3001VARCHAR\u3001CHAR\u3001TIMESTAMP\u3001DATE\u3001BINARY\u3001ARRAY\u3001MAP\u3001STRUCT\u3001LIST\u3001ROW"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6682\u4e0d\u652f\u6301"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5176\u4ed6")))),(0,l.kt)("h2",{id:"\u516d\u811a\u672c\u793a\u4f8b"},"\u516d\u3001\u811a\u672c\u793a\u4f8b"),(0,l.kt)("p",null,"\u89c1\u9879\u76ee\u5185",(0,l.kt)("inlineCode",{parentName:"p"},"flinkx-examples"),"\u6587\u4ef6\u5939\u3002"),(0,l.kt)("h3",{id:"sql"},"Sql"),(0,l.kt)("p",null,"upsert-kafka"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE pageviews_per_region (\n  id BIGINT,\n  col_bit BOOLEAN,\n  col_tinyint BIGINT,\n  PRIMARY KEY (id) NOT ENFORCED\n) WITH (\n  \'connector\' = \'upsert-kafka-x\',\n  \'topic\' = \'pageviews_per_region_2\',\n  \'properties.bootstrap.servers\' = \'localhost:9092\',\n  \'key.format\' = \'json\',\n    \'value.format\' = \'json\'\n);\n\nCREATE TABLE pageviews (\n  id BIGINT,\n  col_bit BOOLEAN,\n  col_tinyint BIGINT\n) WITH (\n  \'connector\' = \'kafka-x\',\n  \'topic\' = \'pageviews_2\',\n  \'properties.bootstrap.servers\' = \'localhost:9092\',\n    \'value.format\' = \'debezium-json\'\n);\n\n-- \u8ba1\u7b97 pv\u3001uv \u5e76\u63d2\u5165\u5230 upsert-kafka sink\nINSERT INTO pageviews_per_region\nSELECT\n  id,\n  col_bit,\n col_tinyint\nFROM pageviews;\n\n\n-- {"before":null,"after":{"id":1,"col_bit":true,"col_tinyint":1},"op":"c"}\n-- {"before":{"id":1,"col_bit":true,"col_tinyint":1},"after":{"id":1,"col_bit":true,"col_tinyint":2},"op":"u"}\n-- {"before":{"id":2,"col_bit":true,"col_tinyint":2},"after":null,"op":"d"}\n')))}c.isMDXComponent=!0}}]);