// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define(["dojo/_base/declare","esri/request"],function(f,g){var b=null,e=f(null,{cache:{},getServiceDefinition:function(a,c){c||(c="json");var d=this.cache[a];0>=this._getDefStatus(d)&&(d=g({url:a,handleAs:c,content:{f:c},callbackParamName:"callback"}),this.cache[a]=d);return d},_getDefStatus:function(a){return a?a.isFulfilled()?a.isResolved()?2:-1:1:0}});e.getInstance=function(){b||(b=new e,window._serviceDefinitionManager=b);return b};return e});