(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b1fd447"],{b699:function(t,a,e){"use strict";e("f3a6")},f127:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bi"},[e("div",{},[t._m(0),e("Row",[e("Col",{attrs:{span:"6"}},[e("Card",{staticClass:"video",attrs:{shadow:""}},[e("div",{staticClass:"video-list"},[e("chart-bi-bar",{staticStyle:{height:"200px"},attrs:{xData:t.xData,serData:t.serData,text:"综合分析"}})],1)]),e("Card",{staticClass:"video mt10",attrs:{shadow:""}},[e("div",{staticClass:"video-list"},[e("chart-bi-pie",{staticStyle:{height:"200px"},attrs:{serData:t.serDataPie,text:"风险类型"}})],1)])],1),e("Col",{attrs:{span:"12"}},[e("Card",{staticClass:"video",attrs:{shadow:""}},[e("div",{staticClass:"video-list"},[e("baidu-map",{staticStyle:{height:"420px"},attrs:{center:t.center,anchor:"BMAP_ANCHOR_BOTTOM_RIGHT",zoom:t.zoom,ak:"5ieMMexWmzB9jivTq6oCRX9j"},on:{ready:t.handler}},[e("bm-boundary",{attrs:{name:"沈阳市大东区",strokeWeight:2,strokeColor:"blue"}})],1),e("div",{staticClass:"map-company-num"},[e("p",{staticClass:"map-company-til"},[t._v("企业/场所数量（家）")]),e("div",{staticClass:"map-company-num-list"},[e("p",[t._v("0")]),e("p",[t._v("0")]),e("p",[t._v("0")]),e("p",[t._v("3")]),e("p",[t._v("7")]),e("p",[t._v("7")])])]),e("div",{staticClass:"map-risk-num"},[e("div",[e("p",{staticClass:"map-risk-num-con one"},[t._v("2")]),e("p",[t._v("重大")])]),e("div",[e("p",{staticClass:"map-risk-num-con two"},[t._v("2")]),e("p",[t._v("较大")])]),e("div",[e("p",{staticClass:"map-risk-num-con three"},[t._v("2")]),e("p",[t._v("一般")])]),e("div",[e("p",{staticClass:"map-risk-num-con low"},[t._v("2")]),e("p",[t._v("低")])]),e("div",[e("p",{staticClass:"map-risk-num-con total"},[t._v("2")]),e("p",[t._v("总计")])])])],1)])],1),e("Col",{attrs:{span:"6"}},[e("Card",{staticClass:"video",attrs:{shadow:""}},[e("div",{staticClass:"video-list"},[e("chart-bi-line",{staticStyle:{height:"200px"},attrs:{legendData:t.legendData,xLineData:t.xLineData,seriesData:t.seriesData,text:"风险动态"}})],1)]),e("Card",{staticClass:"video mt10",attrs:{shadow:""}},[e("div",{staticClass:"video-list",staticStyle:{"min-height":"200px"}},[e("table",{staticClass:"details-table",attrs:{cellspacing:"0"}},[e("thead",[e("tr",[e("th",[t._v("序号")]),e("th",[t._v("所属行业/领域")]),e("th",[t._v("数量")])])]),e("tbody",t._l(t.riskTotalList,(function(a,s){return e("tr",{key:s},[e("td",[e("span",[t._v(t._s(s+1))])]),e("td",[t._v(t._s(a.name))]),e("td",[t._v(t._s(a.num))])])})),0)]),t.riskTotalList.length>10?e("ul",{staticClass:"page"},[e("li",{staticClass:"page-previous"},[t._v("上一页")]),e("li",{staticClass:"page-active"},[t._v("1")]),e("li",[t._v("2")]),e("li",[t._v("3")]),e("li",[t._v("4")]),e("li",[t._v("5")]),e("li",{staticClass:"page-next"},[t._v("下一页")])]):e("ul",{staticClass:"page-one"},[e("li",{},[t._v("1")])])])])],1)],1),e("Row",[e("Card",{staticClass:"video mt10",attrs:{shadow:""}},[e("div",{staticClass:"video-list"},[e("div",{staticClass:"risk"},[e("ul",[e("li",{staticClass:"risk-til"}),e("li",{staticClass:"even"},[e("span",{staticClass:"one"},[t._v("重大")])]),e("li",{staticClass:"odd"},[e("span",{staticClass:"two"},[t._v("较大")])]),e("li",{staticClass:"even"},[e("span",{staticClass:"three"},[t._v("一般")])]),e("li",{staticClass:"odd"},[e("span",{staticClass:"low"},[t._v("低")])]),e("li",{staticClass:"even"},[e("span",{staticClass:"total"},[t._v("合计")])])]),t._l(t.departments,(function(a,s){return e("ul",{key:s},[e("li",{staticClass:"risk-til"},[t._v(t._s(a.name))]),e("li",{staticClass:"even",class:{no:0==a.one},on:{click:function(e){return t.radDialog(a.name,a.one)}}},[t._v(t._s(a.one))]),e("li",{staticClass:"odd",class:{no:0==a.two},on:{click:function(e){return t.radDialog(a.name,a.two)}}},[t._v(t._s(a.two))]),e("li",{staticClass:"even",class:{no:0==a.three},on:{click:function(e){return t.radDialog(a.name,a.three)}}},[t._v(t._s(a.three))]),e("li",{staticClass:"odd",class:{no:0==a.low},on:{click:function(e){return t.radDialog(a.name,a.low)}}},[t._v(t._s(a.low))]),e("li",{staticClass:"even",class:{no:0==a.total},on:{click:function(e){return t.radDialog(a.name,a.total)}}},[t._v(t._s(a.total))])])}))],2)])])],1)],1),t.dialogBox?e("div",{staticClass:"dialog"},[e("div",{staticClass:"dialog-table"},[e("span",{staticClass:"dialog-close",on:{click:t.dialogClose}},[t._v("X")]),e("table",[t._m(1),e("tbody",t._l(t.dialogLists,(function(a,s){return e("tr",{key:s},[e("td",[t._v(t._s(a.name))]),e("td",[t._v(t._s(a.riskType))]),e("td",[t._v(t._s(a.grade))]),e("td",[t._v(t._s(a.unit))]),e("td",[t._v(t._s(a.industry))]),e("td",[t._v(t._s(a.address))]),e("td",[t._v(t._s(a.con))])])})),0)]),t._m(2)])]):t._e()])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bi-menu"},[e("div",{staticClass:"bi-menu-list"},[e("a",{attrs:{href:"#/BI"}},[t._v("突发事件指挥调度")]),e("a",{attrs:{href:"javascript:;"}},[t._v("安全风险隐患排查")])]),e("div",{staticClass:"bi-menu-list bi-menu-right"},[e("a",{attrs:{href:"javascript:;"}},[t._v("突发事件指挥调度")]),e("a",{attrs:{href:"javascript:;"}},[t._v("风险分级管理")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",[t._v("名称")]),e("th",[t._v("主要风险类型")]),e("th",[t._v("风险等级")]),e("th",[t._v("主管单位")]),e("th",[t._v("所属行业领域")]),e("th",[t._v("详细地址")]),e("th",[t._v("风险描述")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"page"},[e("li",{staticClass:"page-previous"},[t._v("上一页")]),e("li",{staticClass:"page-active"},[t._v("1")]),e("li",[t._v("2")]),e("li",[t._v("3")]),e("li",[t._v("4")]),e("li",[t._v("5")]),e("li",{staticClass:"page-next"},[t._v("下一页")])])}],n=e("c9ae"),l=e("bd0c"),o={name:"risk",components:{ChartBiBar:n["b"],ChartBiPie:n["d"],ChartBiLine:n["c"],BaiduMap:l["BaiduMap"],BmMapType:l["BmMapType"],bmOverlay:l["bmOverlay"],BmMarker:l["BmMarker"],BmBoundary:l["BmBoundary"]},data:function(){return{center:{lng:0,lat:0},zoom:0,mapPositions:[{lng:123.507803,lat:41.828794,type:0},{lng:123.466829,lat:41.831873,type:1}],xData:["重大风险","较大风险","一般风险","低风险"],serData:[{value:1,itemStyle:{color:"#e73336"}},{value:12,itemStyle:{color:"#d67f2e"}},{value:67,itemStyle:{color:"#e6de34"}},{value:110,itemStyle:{color:"#04cfd8"}}],serDataPie:[{value:112,name:"火灾112"},{value:100,name:"其他伤害100"},{value:98,name:"机械伤害98"},{value:88,name:"危险品88"},{value:75,name:"交通事故75"},{value:63,name:"化工品63"},{value:54,name:"化学品54"},{value:34,name:"硫酸34"},{value:28,name:"烟花爆竹28"},{value:26,name:"职业危害26"},{value:10,name:"瓦斯危害10"},{value:9,name:"水利风险9"},{value:7,name:"山洪7"},{value:5,name:"滑坡5"},{value:1,name:"干旱1"},{value:0,name:"中毒0"}],departments:[{name:"应急管理局",one:"1",two:"0",three:"11",low:"12",total:"24"},{name:"应急管理局",one:"1",two:"0",three:"11",low:"12",total:"24"},{name:"应急管理局",one:"1",two:"0",three:"11",low:"12",total:"24"},{name:"应急管理局",one:"1",two:"0",three:"11",low:"12",total:"24"},{name:"应急管理局",one:"1",two:"0",three:"11",low:"12",total:"24"},{name:"应急管理局",one:"1",two:"0",three:"11",low:"12",total:"24"},{name:"应急管理局",one:"1",two:"0",three:"11",low:"12",total:"24"},{name:"应急管理局",one:"1",two:"0",three:"11",low:"12",total:"24"},{name:"应急管理局",one:"1",two:"0",three:"11",low:"12",total:"24"},{name:"应急管理局",one:"1",two:"0",three:"11",low:"12",total:"24"},{name:"应急管理局",one:"1",two:"0",three:"11",low:"12",total:"24"},{name:"应急管理局",one:"1",two:"0",three:"11",low:"12",total:"24"},{name:"应急管理局",one:"1",two:"0",three:"11",low:"12",total:"24"}],legendData:["重大风险","较大风险","一般风险","低风险"],xLineData:["2-01","2-02","2-03","2-04","2-05","2-06","2-07"],seriesData:[{name:"重大风险",type:"line",stack:"总量",data:[0,1,0,5,4,2,1]},{name:"较大风险",type:"line",stack:"总量",data:[2,0,1,0,2,8,1]},{name:"一般风险",type:"line",stack:"总量",data:[10,13,11,34,9,1,21]},{name:"低风险",type:"line",stack:"总量",data:[20,0,101,12,30,45,39]}],riskTotalList:[{name:"涉爆粉尘",num:"19"},{name:"涉爆粉尘",num:"19"},{name:"涉爆粉尘",num:"19"},{name:"涉爆粉尘",num:"19"},{name:"涉爆粉尘",num:"19"},{name:"涉爆粉尘",num:"19"}],dialogBox:!1,riskType:1,dialogLists:[{name:"你好",riskType:"有毒化学物品",grade:"一级",unit:"大东区管理局",industry:"化工",address:"沈阳市大东区XXX",con:"含有剧毒化学品含有剧毒化学品"},{name:"你好",riskType:"有毒化学物品",grade:"一级",unit:"大东区管理局",industry:"化工",address:"沈阳市大东区XXX",con:"含有剧毒化学品含有剧毒化学品"},{name:"你好",riskType:"有毒化学物品",grade:"一级",unit:"大东区管理局",industry:"化工",address:"沈阳市大东区XXX",con:"含有剧毒化学品含有剧毒化学品"},{name:"你好",riskType:"有毒化学物品",grade:"一级",unit:"大东区管理局",industry:"化工",address:"沈阳市大东区XXX",con:"含有剧毒化学品含有剧毒化学品"},{name:"你好",riskType:"有毒化学物品",grade:"一级",unit:"大东区管理局",industry:"化工",address:"沈阳市大东区XXX",con:"含有剧毒化学品含有剧毒化学品"},{name:"你好",riskType:"有毒化学物品",grade:"一级",unit:"大东区管理局",industry:"化工",address:"沈阳市大东区XXX",con:"含有剧毒化学品含有剧毒化学品"},{name:"你好",riskType:"有毒化学物品",grade:"一级",unit:"大东区管理局",industry:"化工",address:"沈阳市大东区XXX",con:"含有剧毒化学品含有剧毒化学品"},{name:"你好",riskType:"有毒化学物品",grade:"一级",unit:"大东区管理局",industry:"化工",address:"沈阳市大东区XXX",con:"含有剧毒化学品含有剧毒化学品"},{name:"你好",riskType:"有毒化学物品",grade:"一级",unit:"大东区管理局",industry:"化工",address:"沈阳市大东区XXX",con:"含有剧毒化学品含有剧毒化学品"}]}},methods:{handler:function(t){var a=t.BMap,e=t.map;console.log(a,e),this.center.lng=123.508,this.center.lat=41.833,this.zoom=13},radDialog:function(t,a){a>0&&(this.dialogBox=!0)},dialogClose:function(){this.dialogBox=!1}}},r=o,c=(e("b699"),e("2877")),d=Object(c["a"])(r,s,i,!1,null,null,null);a["default"]=d.exports},f3a6:function(t,a,e){}}]);