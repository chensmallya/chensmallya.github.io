(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d229073"],{dc64:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Card",{attrs:{shadow:""}},[a("Row",[a("i-col",{attrs:{span:"4"}},[a("Button",{on:{click:t.createTagParams}},[t._v("添加一个标签")])],1),a("i-col",{attrs:{span:"20"}},[a("p",[t._v("动态路由，添加params")])])],1)],1),a("Card",{staticStyle:{"margin-top":"10px"},attrs:{shadow:""}},[a("Row",[a("i-col",{attrs:{span:"4"}},[a("Button",{on:{click:t.createTagQuery}},[t._v("添加一个标签")])],1),a("i-col",{attrs:{span:"20"}},[a("p",[t._v("动态路由，添加query")])])],1)],1),a("Card",{staticStyle:{"margin-top":"10px"},attrs:{shadow:""}},[a("Row",[a("i-col",{attrs:{span:"4"}},[a("Button",{on:{click:t.handleCloseTag}},[t._v("关闭工具方法页")])],1),a("i-col",{attrs:{span:"20"}},[a("p",[t._v("手动关闭页面")])])],1)],1)],1)},n=[],o=(a("ac67"),a("1bc7"),a("32ea"),a("34f5")),c=a("7736");function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var p={name:"tools_methods_page",methods:i(i({},Object(c["d"])(["closeTag"])),{},{createTagParams:function(){var t=parseInt(1e5*Math.random()),e={name:"params",params:{id:t},meta:{title:"动态路由-".concat(t)}};this.$router.push(e)},createTagQuery:function(){var t=parseInt(1e5*Math.random()),e={name:"query",query:{id:t},meta:{title:"参数-".concat(t)}};this.$router.push(e)},handleCloseTag:function(){this.closeTag({name:"tools_methods_page"})}})},l=p,u=a("5d22"),d=Object(u["a"])(l,r,n,!1,null,null,null);e["default"]=d.exports}}]);