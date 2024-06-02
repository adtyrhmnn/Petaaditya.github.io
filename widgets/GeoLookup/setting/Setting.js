// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"widgets/GeoLookup/setting/layerDetails":function(){define("dojo/Evented dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred dojo/promise/all esri/request".split(" "),function(r,w,n,l,v,p,t){return w([r],{declaredClass:"layerDetails",map:null,layers:null,layerStore:null,fieldName:null,childList:null,validFieldTypes:"esriFieldTypeInteger esriFieldTypeSmallInteger esriFieldTypeDouble esriFieldTypeSingle esriFieldTypeString esriFieldTypeDate esriFieldTypeGeometry esriFieldTypeOID esriFieldTypeBlob esriFieldTypeGlobalID esriFieldTypeRaster esriFieldTypeGUID esriFieldTypeXML".split(" "),
geometryTypes:null,layersOnly:!1,constructor:function(b){this.map=b;this.startup()},startup:function(){this.layerStore=null;this.layerStore=[]},getAllMapLayers:function(){var b=[],k=new v,f;l.forEach(this.map.itemInfo.itemData.operationalLayers,n.hitch(this,function(d){if(!d.featureCollection)if("undefined"!==typeof d.layerObject&&d.layerObject.type&&"Feature Layer"===d.layerObject.type)f={label:d.title,id:d.id,url:d.url,fieldName:this.fieldName,type:"Feature Layer",checked:!1,children:[]},b.push(this._getLayerInfo(f)),
this.layerStore.push(f);else if(d.layers){if(this.childList=[],"undefined"===typeof d.layerType||"ArcGISTiledMapServiceLayer"!==d.layerType)l.forEach(d.layerObject.layerInfos,n.hitch(this,function(g){g={label:g.name,id:d.id+"."+g.id,url:d.url+"/"+g.id,type:"Layer",fieldName:this.fieldName,checked:!1,children:[]};this.childList.push(g);b.push(this._getLayerInfo(g))})),f={label:d.title,id:d.id,url:d.url,type:"Service",checked:!1,children:this.childList},this.layerStore.push(f)}else"ArcGISMapServiceLayer"===
d.layerType&&(this.childList=[],l.forEach(d.layerObject.layerInfos,n.hitch(this,function(g){g={label:g.name,id:d.id+"."+g.id,url:d.url+"/"+g.id,type:"Layer",fieldName:this.fieldName,checked:!1,children:[]};this.childList.push(g);b.push(this._getLayerInfo(g))})),f={label:d.title,id:d.id,url:d.url,type:"MapService",checked:!1,children:this.childList},this.layerStore.push(f))}));p(b).then(n.hitch(this,function(){var d=this._controlComplete();this.emit("complete",d);k.resolve(d)}),n.hitch(this,function(){k.resolve(null)}));
return k.promise},_getLayerInfo:function(b){var k=new v;b.url?0===b.url.length?k.resolve():t({url:b.url,content:{f:"json"},callbackParamName:"callback"}).then(n.hitch(this,function(f){if(f.hasOwnProperty("fields")&&!1===this.layersOnly){var d=l.map(f.fields,n.hitch(this,function(g){return{label:g.alias,id:b.id+"."+g.name,name:g.name,type:"Field",fieldType:g.type,checked:!1}}));d=l.filter(d,n.hitch(this,function(g){return 0<=l.indexOf(this.validFieldTypes,g.fieldType)}));b.children=d}b.geometryType=
f.geometryType;b.visible=!0;this.geometryTypes&&!l.some(this.geometryTypes,function(g){if(g===b.geometryType)return!0})&&(b.visible=!1);k.resolve(f)}),function(){k.resolve(null)}):k.resolve();return k.promise},_controlComplete:function(){l.forEach(this.layerStore,function(b){if(b.children&&0<b.children.length){var k=l.filter(b.children,function(f){return f.hasOwnProperty("visible")?f.visible:!0});b.children=k;0===b.children.length&&(b.visible=!1)}});return this.store={data:{identifier:"id",label:"label",
items:l.filter(this.layerStore,function(b){return b.hasOwnProperty("visible")?b.visible:!0})}}}})})},"widgets/GeoLookup/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/GeoLookup/setting/Setting.html":'\x3cdiv style\x3d"width:100%;"\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" data-dojo-attach-point\x3d"fieldsPage" title\x3d"${nls.settingsConfigureTitle}"\x3e\r\n    \t\x3cdiv class\x3d"dijitDialogPaneContent" data-dojo-attach-point\x3d"fieldsContainer"\x3e\r\n        \x3clabel data-dojo-attach-point\x3d"layername"\x3e${nls.fieldTable.label}\x3c/label\x3e\x3cp style\x3d"height:15px;"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"tableFieldInfos"\x3e\x3c/div\x3e\r\n       \x3c/div\x3e\r\n\t    \x3cdiv class\x3d"dijitDialogPaneActionBar"\x3e\r\n\t        \x3cdiv class\x3d"jimu-btn" data-dojo-attach-point\x3d"ok" data-dojo-attach-event\x3d"click:saveFields" \x3e${nls.okBtn}\x3c/div\x3e\r\n\t        \x3cdiv class\x3d"jimu-btn" data-dojo-attach-point\x3d"cancel" data-dojo-attach-event\x3d"click:cancelFields" \x3e${nls.cancelBtn}\x3c/div\x3e\r\n\t    \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" data-dojo-attach-point\x3d"advSettingsPage" title\x3d"${nls.advSettings.label}"\x3e\r\n\r\n        \x3ctable class\x3d"setting-adv-table" cellspacing\x3d"0"\x3e\r\n            \x3ctbody\x3e\r\n                \x3ctr class\x3d"controls"\x3e\r\n                    \x3ctd colspan\x3d"2"\x3e\r\n                        \x3cspan class\x3d"adv-settings-subTitle"\x3e${nls.advSettings.subTitle}\x3c/span\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr class\x3d"controlsMulti"\x3e\r\n\r\n                    \x3ctd\x3e\x3cspan\x3e${nls.advSettings.latFieldsDesc}\x3c/span\x3e\x3c/td\x3e\r\n\r\n                    \x3ctd\x3e\x3ctextarea class\x3d"textAreaCoord" data-dojo-attach-point\x3d"advSettingsLatValues" data-dojo-type\x3d"dijit/form/SimpleTextarea"\x3e\x3c/textarea\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr class\x3d"controlsMulti"\x3e\r\n\r\n                    \x3ctd\x3e\r\n                        \x3cspan\x3e${nls.advSettings.longFieldsDesc}\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n                        \x3ctextarea class\x3d"textAreaCoord" data-dojo-attach-point\x3d"advSettingsLongValues" data-dojo-type\x3d"dijit/form/SimpleTextarea"\x3e\x3c/textarea\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr class\x3d"controls"\x3e\r\n\r\n                    \x3ctd class\x3d"intersectFieldStyle"\x3e\r\n                        \x3cspan\x3e${nls.advSettings.intersectFieldDesc}\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n                        \x3cdiv class\x3d"textBox" data-dojo-attach-point\x3d"advSettingsIntersectField" data-dojo-type\x3d"dijit/form/TextBox"\x3e\x3c/div\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr class\x3d"controls"\x3e\r\n\r\n                    \x3ctd\x3e\r\n                        \x3cspan\x3e${nls.advSettings.intersectInDesc}\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n                        \x3cdiv class\x3d"textBox" data-dojo-attach-point\x3d"advSettingsIntersectInValue" data-dojo-type\x3d"dijit/form/TextBox"\x3e\x3c/div\x3e\r\n                    \x3c/td\x3e\r\n\r\n                \x3c/tr\x3e\r\n                \x3ctr class\x3d"controls"\x3e\r\n\r\n                    \x3ctd\x3e\r\n                        \x3cspan\x3e${nls.advSettings.intersectOutDesc}\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n                        \x3cdiv class\x3d"textBox" data-dojo-attach-point\x3d"advSettingsIntersectOutValue" data-dojo-type\x3d"dijit/form/TextBox"\x3e\x3c/div\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr class\x3d"controls"\x3e\r\n                    \x3ctd\x3e\r\n                        \x3cspan\x3e${nls.advSettings.maxRowCount}\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n                        \x3cdiv class\x3d"textBox" data-dojo-attach-point\x3d"advSettingsMaxRowCount" data-dojo-type\x3d"dijit/form/TextBox"\x3e\x3c/div\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr class\x3d"controls"\x3e\r\n                    \x3ctd\x3e\r\n                        \x3cspan\x3e${nls.advSettings.cacheNumberDesc}\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n                        \x3cdiv class\x3d"textBox" data-dojo-attach-point\x3d"advSettingsCacheNumber" data-dojo-type\x3d"dijit/form/TextBox"\x3e\x3c/div\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr class\x3d"controls"\x3e\r\n                    \x3ctd\x3e\r\n                        \x3cspan\x3e${nls.advSettings.geometryServiceDesc}\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n                        \x3cdiv class\x3d"textBox" data-dojo-attach-point\x3d"advSettingsGeometryService" data-dojo-type\x3d"dijit/form/TextBox"\x3e\x3c/div\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n            \x3c/tbody\x3e\r\n        \x3c/table\x3e\r\n\t    \x3cdiv class\x3d"dijitDialogPaneActionBar"\x3e\r\n\t        \x3cdiv class\x3d"jimu-btn" data-dojo-attach-point\x3d"ok" data-dojo-attach-event\x3d"click:saveAdv" \x3e${nls.okBtn}\x3c/div\x3e\r\n\t        \x3cdiv class\x3d"jimu-btn" data-dojo-attach-point\x3d"cancel" data-dojo-attach-event\x3d"click:cancelAdv" \x3e${nls.cancelBtn}\x3c/div\x3e\r\n\t    \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n\t\x3cdiv data-dojo-type\x3d"dijit/Dialog" data-dojo-id\x3d"symbolDial" data-dojo-attach-point\x3d"symbolDial" title\x3d"${nls.chooseSymbol}"\x3e\r\n\t    \x3ctable class\x3d"dijitDialogPaneContentArea"\x3e\r\n\t        \x3ctr\x3e\r\n\t            \x3ctd\x3e\x3cdiv data-dojo-attach-point\x3d"symbolPicker" data-dojo-type\x3d"jimu/dijit/SymbolChooser" data-dojo-props\x3d\'type:"marker"\'\x3e\x3c/div\x3e\x3c/td\x3e\r\n\t        \x3c/tr\x3e\r\n\t    \x3c/table\x3e\r\n\r\n\t    \x3cdiv class\x3d"dijitDialogPaneActionBar"\x3e\r\n\t        \x3cdiv class\x3d"jimu-btn" data-dojo-attach-point\x3d"ok" data-dojo-attach-event\x3d"click:saveSymbol" \x3e${nls.okBtn}\x3c/div\x3e\r\n\t        \x3cdiv class\x3d"jimu-btn" data-dojo-attach-point\x3d"cancel" data-dojo-attach-event\x3d"click:cancelSymbol" \x3e${nls.cancelBtn}\x3c/div\x3e\r\n\t    \x3c/div\x3e\r\n\r\n\t\x3c/div\x3e\r\n\r\n\r\n    \x3cdiv data-dojo-attach-point\x3d"mainPage" style\x3d"width:100%;"\x3e\r\n\r\n        \x3c!-- \x3cdiv class\x3d"settings-heading" data-dojo-attach-point\x3d"settingsHeader"\x3e${nls.settingsHeader}\x3c/div\x3e  --\x3e\r\n        \x3cdiv class\x3d"settings-description" data-dojo-attach-point\x3d"settingsDesc"\x3e${nls.settingsDesc}\x3c/div\x3e\r\n        \x3cdiv class\x3d"setting-layer-table" data-dojo-attach-point\x3d"tableLayerInfos"\x3e\x3c/div\x3e\x3cbr /\x3e\r\n        \x3cdiv class\x3d"settings-error" data-dojo-attach-point\x3d"tableLayerInfosError" style\x3d"display:none"\x3e${nls.noPolygonLayers}\x3c/div\x3e\x3cbr /\x3e\r\n        \x3ctable class\x3d"settings-symbol-area" data-dojo-attach-point\x3d"symbolArea" cellspacing\x3d"0"\x3e\r\n            \x3ctbody\x3e\r\n                \x3ctr \x3e\r\n                    \x3ctd class\x3d"symbolItemLeft"\x3e\r\n                        \x3clabel data-dojo-attach-point\x3d"symbolWithinLabel" for\x3d"symbolWithin"\x3e${nls.symbolArea.symbolLabelWithin}\x3c/label\x3e\r\n                    \x3c/td\x3e\r\n                    \x3ctd\x3e\r\n                    \t\x3cspan class\x3d"symPreview" data-dojo-attach-point\x3d"symbolInPreview"\x3e\x3c/span\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr\x3e\r\n                    \x3ctd class\x3d"symbolItemLeft"\x3e\r\n                        \x3clabel data-dojo-attach-point\x3d"symbolOutsideLabel" for\x3d"symbolOutside"\x3e${nls.symbolArea.symbolLabelOutside}\x3c/label\x3e\r\n                    \x3c/td\x3e\r\n                    \x3ctd\x3e\r\n                    \t\x3cspan class\x3d"symPreview" data-dojo-attach-point\x3d"symbolOutPreview"\x3e\x3c/span\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n            \x3c/tbody\x3e\r\n        \x3c/table\x3e\r\n        \x3cdiv class\x3d"jimu-btn" data-dojo-attach-point\x3d"btnAdvSettings2" data-dojo-attach-event\x3d"click:showAdvSettings"\x3e${nls.advSettingsBtn}\x3c/div\x3e\r\n\r\n        \x3cdiv class\x3d\'settings-error hideGLItem\'  data-dojo-attach-point\x3d"btnErrorMsg"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/GeoLookup/setting/css/style.css":".solutions-widget-geolookup-setting .settings-heading {font-size: 1.35em; margin-top: 15px;}.solutions-widget-geolookup-setting .settings-description {font-family: 'Open Sans', sans-serif; font-size: 14px; color: #596679; margin-top: 15px;}.solutions-widget-geolookup-setting .settings-error {padding-top: 15px; font-size: 14px; color: orangered;}.solutions-widget-geolookup-setting .hideGLItem {display: none;}.solutions-widget-geolookup-setting .setting-layer-table {margin: 0px; padding-top: 15px;}.solutions-widget-geolookup-setting .enrich {width: 100px;}.solutions-widget-geolookup-setting .fieldselector {width: 140px;}.solutions-widget-geolookup-setting .settings-symbol-area \x3e tbody \x3e tr \x3e td {vertical-align: middle; font-family: 'Open Sans', sans-serif; font-size: 14px; color: #596679; margin-right: 10px;}.solutions-widget-geolookup-setting .settings-symbol-area {padding-bottom: 8px;}.solutions-widget-geolookup-setting .symbolItemleft {width: 50%; float: left; vertical-align: middle; font-family: 'Open Sans', sans-serif; font-size: 14px; color: #596679; margin-right: 10px;}.solutions-widget-geolookup-setting .symPreview {cursor: pointer;}.solutions-widget-geolookup-setting .appended {width: 100px;}.solutions-widget-geolookup-setting .setting-adv-table {margin-left: 15px;}.solutions-widget-geolookup-setting .controlsMulti {width: 100%; height: 130px; vertical-align: middle;}.solutions-widget-geolookup-setting .controls {width: 100%; vertical-align: middle;}.solutions-widget-geolookup-setting .setting-adv-table \x3e tbody \x3e tr \x3e td \x3e span {margin-left: 20px;}.solutions-widget-geolookup-setting .setting-adv-table \x3e tbody \x3e tr \x3e td \x3e input {margin-left: 5px;}.solutions-widget-geolookup-setting .setting-adv-table \x3e thead \x3e tr \x3e th,.solutions-widget-geolookup-setting .setting-adv-table \x3e tbody \x3e tr \x3e td {height: 40px; line-height: 40px; vertical-align: middle; font-size: 1em;}.solutions-widget-geolookup-setting .adv-settings-subTitle {font-family: 'Open Sans', sans-serif; font-size: 14px; font-style: bold; color: #596679;}.textAreaCoord {height: 130px; min-height: 100px; float: right; resize: none; width: 100%; font-size: 1em;}.solutions-widget-geolookup-setting .textBox {float: right; width: auto; margin-left: 5px; font-size: 1em;}.intersectFieldStyle {padding-right: 10px;} .claro .dijitDialogTitleBar {background-color: #FFFFFF; font-family: 'Open Sans', sans-serif; font-style:Semibold; font-size: 14px; color: #596679;} .claro .dijitDialogPaneContent {font-family: 'Open Sans', sans-serif; font-size: 14px; color: #596679;} .claro .dijitDialogPaneActionBar {background-color: #FFFFFF; border-color: #FFFFFF;}",
"*now":function(r){r(['dojo/i18n!*preload*widgets/GeoLookup/setting/nls/Setting*["ar","bg","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sk","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin jimu/dijit/SimpleTable dojo/query dojo/_base/html dojo/dom-style dojo/_base/array dojo/on dojo/_base/lang dojo/dom-construct jimu/symbolUtils esri/symbols/jsonUtils jimu/dijit/SymbolChooser jimu/utils ./layerDetails".split(" "),function(r,w,n,l,v,p,t,b,k,f,d,g,x,C,q,A){return r([w,n],{baseClass:"solutions-widget-geolookup-setting",layersTable:null,currentLayer:null,selectedFields:[],layerList:[],symbolEvent:null,startup:function(){this.inherited(arguments);
null===this.config&&(this.config={});void 0===this.config&&(this.config={});""===this.config&&(this.config={});this.setConfig(this.config);this.own(k(this.symbolInPreview,"click",f.hitch(this,function(){this.popSymbolChooser("Within");this.symbolDial.show()})));this.own(k(this.symbolOutPreview,"click",f.hitch(this,function(){this.popSymbolChooser("Outside");this.symbolDial.show()})));var a='\x3cimg src\x3d"'+this.folderUrl+'setting/css/images/processing.gif"\x3e ';a+=this.nls.settingsLoadingLayers;
this.tableLayerInfos.innerHTML=q.sanitizeHTML(a);this.layerList=[];0<this.map.itemInfo.itemData.operationalLayers.length?(a=new A(this.map),this.own(k(a,"complete",f.hitch(this,this._completeLayerDetails))),a.getAllMapLayers()):this._noLayersDisplay()},setConfig:function(a){this.config=a;b.forEach(this.config.enrichLayers,function(c){this.selectedFields[c.id]=c.fields},this);this.showInitSymbols()},getConfig:function(){this.config.SymbolWithin=this.config.SymbolWithin;this.config.SymbolOutside=this.config.SymbolOutside;
var a=this.layersTable.getData();this.config.enrichLayers=[];var c=!1;return b.some(a,function(h){if(h.enrich){var e={};e.id=h.id;e.label=h.label;e.url=h.url;e.name=h.name;if(!this.selectedFields[e.id]||1>this.selectedFields[e.id].length)return!0;e.fields=this.selectedFields[e.id];this.config.enrichLayers.push(e);c=!0}},this)||!1===c?(0<a.length&&this.showOKError(),!1):this.config},_completeLayerDetails:function(a){this.createLayerTable();this.createFieldsTable();a?(b.forEach(a.data.items,f.hitch(this,
function(c){"Feature Layer"===c.type?this.layerList.push(c):("Service"===c.type||"MapService"===c.type)&&b.forEach(c.children,f.hitch(this,function(h){"Layer"===h.type&&this.layerList.push(h)}))})),1<=this.layerList.length?this.loadLayerTable():this._noLayersDisplay()):this._noLayersDisplay()},loadLayerTable:function(){var a="",c=!1,h=!1;b.forEach(this.layerList,function(e){null===e.id||void 0===e.id||"Feature Layer"!==e.type&&"Layer"!==e.type||!e.url||"esriGeometryPolygon"!==e.geometryType||(a=e.label,
h=!1,0<b.filter(this.config.enrichLayers,function(u){return u.id===e.id}).length&&(h=!0),this.layersTable.addRow({label:a,enrich:h,id:e.id,url:e.url}),c=!0)},this);c?t.set(this.tableLayerInfosError,"display","none"):t.set(this.tableLayerInfosError,"display","")},createLayerTable:function(){var a={fields:[{name:"enrich",title:this.nls.layerTable.colEnrich,type:"checkbox","class":"enrich"},{name:"label",title:this.nls.layerTable.colLabel,type:"text"},{name:"actions",title:this.nls.layerTable.colFieldSelector,
type:"actions","class":"fieldselector",actions:["edit"]},{name:"id",type:"text",hidden:!0},{name:"url",type:"text",hidden:!0}],selectable:!1};d.empty(this.tableLayerInfos);this.layersTable=new l(a);this.layersTable.placeAt(this.tableLayerInfos);this.layersTable.startup();this.own(k(this.layersTable,"actions-edit",f.hitch(this,function(c){this.showLayerFields(c);this.fieldsPage.show();this.resizeFieldsTable()})))},createFieldsTable:function(){this.layerFieldsTable=new l({fields:[{name:"isAppended",
title:this.nls.fieldTable.colAppend,type:"checkbox","class":"appended"},{name:"fieldName",title:this.nls.fieldTable.colName,type:"text"},{name:"label",title:this.nls.fieldTable.colAlias,type:"text",editable:!0},{name:"order",title:this.nls.fieldTable.colOrder,type:"actions",actions:["up","down"]}],selectable:!1});this.layerFieldsTable.placeAt(this.tableFieldInfos);this.layerFieldsTable.startup();this.own(k(this.layerFieldsTable,"row-up",f.hitch(this,function(){this.resizeFieldsTable()})));this.own(k(this.layerFieldsTable,
"row-down",f.hitch(this,function(){this.resizeFieldsTable()})))},resizeFieldsTable:function(){this.layerFieldsTable.domNode.style.width="608px";this.layerFieldsTable.domNode.style.height="360px";this.fieldsPage.resize()},showLayerFields:function(a){this.currentLayer=null;var c=v(".action-item-parent",a);if(c&&c.length){var h=this.layersTable.getRowData(a);this.layerFieldsTable.clear();var e;b.forEach(this.layerList,f.hitch(this,function(m){m.id===h.id&&(e=m)}));if(e&&e.children){a=this.selectedFields[h.id];
var u,y;if(a){var z=b.map(a,function(m){return m.fieldName});var B=b.map(a,function(m){return m.label})}a=e.children;b.forEach(a,function(m){y=m.label;u=!1;z&&0<=z.indexOf(m.name)&&(u=!0,y=B[z.indexOf(m.name)]);this.layerFieldsTable.addRow({fieldName:m.name,label:y,isAppended:u})},this);this.currentLayer=h.id}}},saveFields:function(){var a=this.layerFieldsTable.getData(),c=[],h;b.forEach(a,function(e){!0===e.isAppended&&(h={},h.fieldName=e.fieldName,h.label=e.label,c.push(h))},this);this.selectedFields[this.currentLayer]=
c;this.fieldsPage.hide()},cancelFields:function(){this.fieldsPage.hide()},cancelAdv:function(){this.advSettingsPage.hide()},saveAdv:function(){var a=q.sanitizeHTML(this.advSettingsLatValues.get("value"));a=a.split("\n");this.config.latFields=[];b.forEach(a,function(c){""!==c&&this.config.latFields.push(c)},this);a=q.sanitizeHTML(this.advSettingsLongValues.get("value"));a=a.split("\n");this.config.longFields=[];b.forEach(a,function(c){""!==c&&this.config.longFields.push(c)},this);this.config.intersectField=
q.sanitizeHTML(this.advSettingsIntersectField.get("value"));this.config.valueIn=q.sanitizeHTML(this.advSettingsIntersectInValue.get("value"));this.config.valueOut=q.sanitizeHTML(this.advSettingsIntersectOutValue.get("value"));this.config.cacheNumber=q.sanitizeHTML(this.advSettingsCacheNumber.get("value"));this.config.maxRowCount=q.sanitizeHTML(this.advSettingsMaxRowCount.get("value"));this.config.geometryServiceURL=q.sanitizeHTML(this.advSettingsGeometryService.get("value"));this.advSettingsPage.hide()},
showAdvSettings:function(){var a="";b.forEach(this.config.latFields,function(c){a=a+c+"\n"},this);this.advSettingsLatValues.set("value",a);a="";b.forEach(this.config.longFields,function(c){a=a+c+"\n"},this);this.advSettingsLongValues.set("value",a);this.advSettingsIntersectField.set("value",this.config.intersectField);this.advSettingsIntersectInValue.set("value",this.config.valueIn);this.advSettingsIntersectOutValue.set("value",this.config.valueOut);this.advSettingsCacheNumber.set("value",this.config.cacheNumber);
this.advSettingsMaxRowCount.set("value",this.config.maxRowCount);"undefined"!==typeof this.config.geometryServiceURL?this.advSettingsGeometryService.set("value",this.config.geometryServiceURL):this.advSettingsGeometryService.set("value","https://utility.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer");this.advSettingsPage.show()},popSymbolChooser:function(a){this.symbolEvent=a;(a=x.fromJson("Within"===a?this.config.SymbolWithin:this.config.SymbolOutside))&&this.symbolPicker.showBySymbol(a)},
saveSymbol:function(){"Within"===this.symbolEvent?this.config.SymbolWithin=this.symbolPicker.getSymbol().toJson():this.config.SymbolOutside=this.symbolPicker.getSymbol().toJson();this.showInitSymbols();this.symbolDial.hide()},cancelSymbol:function(){this.symbolDial.hide()},showInitSymbols:function(){var a;if(this.config.SymbolWithin&&(a=x.fromJson(this.config.SymbolWithin))){var c=this.symbolInPreview;p.empty(c);(a=g.createSymbolNode(a))||(a=p.create("div"));p.place(a,this.symbolInPreview)}this.config.SymbolOutside&&
(a=x.fromJson(this.config.SymbolOutside))&&(c=this.symbolOutPreview,p.empty(c),(a=g.createSymbolNode(a))||(a=p.create("div")),p.place(a,this.symbolOutPreview))},showOKError:function(){this.btnErrorMsg.innerHTML=q.sanitizeHTML(this.nls.errorOnOk);p.removeClass(this.btnErrorMsg,"hideGLItem")},hideOkError:function(){p.addClass(this.btnErrorMsg,"hideGLItem")},_noLayersDisplay:function(){this.hideOkError();t.set(this.tableLayerInfosError,"display","")}})});