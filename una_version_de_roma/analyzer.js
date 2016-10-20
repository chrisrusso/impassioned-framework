/* PluginDetect v0.7.4 by Eric Gerds www.pinlady.net/PluginDetect [ ShowMessages onWindowLoaded isMinVersion getVersion onDetectionDone beforeInstantiate getInfo Java(OTF & NOTF & VerifyJarfile) QT DevalVR Shockwave Flash WMP Silverlight VLC AdobeReader PDFreader(OTF & NOTF) ] */var Analyzze=PluginDetect={version:"0.7.4",handler:function(c,b,a){return function(){c(b,a)
}
},messageEnabled:1,message:function(i,f){if(!this.messageEnabled||i===null){return
}var d=this,g=document,e,a="msg99887799",c=g.getElementById(a),b=false;
var h=function(n,j,m){var l=null,k=g.createTextNode(n);
if(j||m){l=g.createElement("span")
}if(j){d.setStyle(l,["fontWeight","bold"])
}if(m){d.setStyle(l,["color","#BB0000"])
}if(l){c.appendChild(l);
l.appendChild(k)
}else{c.appendChild(k)
}};
if(!c){c=g.createElement("div");
c.id=a;
d.setStyle(c,["color","black","border","solid blue 2px","padding","5px","width","98%","fontSize","18px","margin","5px","backgroundColor","#B3AAAA"]);
d.insertDivInBody(c);
h("This box displays STATUS/ERROR messages for PluginDetect v"+d.version,1);
c.appendChild(g.createElement("br"));
h("This box is visible when you select the 'Show status/error messages' option in the Script Generator web page.",1);
c.appendChild(g.createElement("br"));
c.appendChild(g.createElement("br"))
}if(!c){return
}if(d.isString(i)){e=(/\[.*\*.*error/i).test(i);
h(i,1,e)
}else{if(i&&i.message){e=i.message;
if(e.length>300){e=e.substring(0,300)+"..."
}h(e)
}}if(d.isString(f)){h(f,1)
}else{if(f&&f.message){e=f.message;
if(e.length>300){e=e.substring(0,300)+"..."
}h(e)
}}c.appendChild(g.createElement("br"))
},printArgs:function(c){var d=this,a,b="";
if(!d.isDefined(c)){return b
}if(!d.isArray(c)){c=[c]
}for(a=0;
a<c.length;
a++){if(!d.isDefined(c[a])){break
}if(d.isString(c[a])){b+="'"+c[a]+"'"
}else{if(c[a]===null){b+="null"
}else{if(d.isFunc(c[a])){b+="F"
}else{if(d.isArray(c[a])){b+="["+d.printArgs(c[a])+"]"
}else{if(d.isNum){b+=c[a].toString()
}else{b+="???"
}}}}}if(c.length>a+1&&d.isDefined(c[a+1])){b+=", "
}}return b
},isDefined:function(b){return typeof b!="undefined"
},isArray:function(b){return(/array/i).test(Object.prototype.toString.call(b))
},isFunc:function(b){return typeof b=="function"
},isString:function(b){return typeof b=="string"
},isNum:function(b){return typeof b=="number"
},isStrNum:function(b){return(typeof b=="string"&&(/\d/).test(b))
},getNumRegx:/[\d][\d\.\_,-]*/,splitNumRegx:/[\.\_,-]/g,getNum:function(b,c){var d=this,a=d.isStrNum(b)?(d.isDefined(c)?new RegExp(c):d.getNumRegx).exec(b):null;
return a?a[0]:null
},compareNums:function(h,f,d){var e=this,c,b,a,g=parseInt;
if(e.isStrNum(h)&&e.isStrNum(f)){if(e.isDefined(d)&&d.compareNums){return d.compareNums(h,f)
}c=h.split(e.splitNumRegx);
b=f.split(e.splitNumRegx);
for(a=0;
a<Math.min(c.length,b.length);
a++){if(g(c[a],10)>g(b[a],10)){return 1
}if(g(c[a],10)<g(b[a],10)){return -1
}}}return 0
},formatNum:function(b,c){var d=this,a,e;
if(!d.isStrNum(b)){return null
}if(!d.isNum(c)){c=4
}c--;
e=b.replace(/\s/g,"").split(d.splitNumRegx).concat(["0","0","0","0"]);
for(a=0;
a<4;
a++){if(/^(0+)(.+)$/.test(e[a])){e[a]=RegExp.$2
}if(a>c||!(/\d/).test(e[a])){e[a]="0"
}}return e.slice(0,4).join(",")
},$$hasMimeType:function(a){return function(d){if(!a.isIE){var c,b,e,f=a.isString(d)?[d]:d;
for(e=0;
e<f.length;
e++){if(/[^\s]/.test(f[e])&&(c=navigator.mimeTypes[f[e]])&&(b=c.enabledPlugin)&&(b.name||b.description)){return c
}}}return null
}
},findNavPlugin:function(l,e,c){var j=this,h=new RegExp(l,"i"),d=(!j.isDefined(e)||e)?/\d/:0,k=c?new RegExp(c,"i"):0,a=navigator.plugins,g="",f,b,m;
for(f=0;
f<a.length;
f++){m=a[f].description||g;
b=a[f].name||g;
if((h.test(m)&&(!d||d.test(RegExp.leftContext+RegExp.rightContext)))||(h.test(b)&&(!d||d.test(RegExp.leftContext+RegExp.rightContext)))){if(!k||!(k.test(m)||k.test(b))){return a[f]
}}}return null
},getMimeEnabledPlugin:function(a,e){var d=this,b,c=new RegExp(e,"i");
if((b=d.hasMimeType(a))&&(b=b.enabledPlugin)&&(c.test(b.description||"")||c.test(b.name||""))){return b
}return 0
},getPluginFileVersion:function(f,b){var h=this,e,d,g,a,c=-1;
if(h.OS>2||!f||!f.version||!(e=h.getNum(f.version))){return b
}if(!b){return e
}e=h.formatNum(e);
b=h.formatNum(b);
d=b.split(h.splitNumRegx);
g=e.split(h.splitNumRegx);
for(a=0;
a<d.length;
a++){if(c>-1&&a>c&&d[a]!="0"){return b
}if(g[a]!=d[a]){if(c==-1){c=a
}if(d[a]!="0"){return b
}}}return e
},AXO:window.ActiveXObject,getAXO:function(a){var d=null,c,b=this;
try{d=new b.AXO(a)
}catch(c){b.message("[ Unable to create ActiveX Object for "+b.printArgs(a)+" ? ] ",c)
}return d
},convertFuncs:function(g){var a,h,f,b=/^[\$][\$]/,d={},c=this;
for(a in g){if(b.test(a)){d[a]=1
}}for(a in d){try{h=a.slice(2);
if(h.length>0&&!g[h]){g[h]=g[a](g);
delete g[a]
}}catch(f){c.message(f)
}}},initScript:function(){var c=this,a=navigator,d="/",h=a.userAgent||"",f=a.vendor||"",b=a.platform||"",g=a.product||"";
c.message("[ Script initialized ]");
c.OS=(/win/i).test(b)?1:((/mac/i).test(b)?2:((/linux/i).test(b)?3:4));
c.convertFuncs(c);
c.isIE=new Function("return "+d+"*@cc_on!@*"+d+"false")();
c.verIE=c.isIE&&(/MSIE\s*(\d+\.?\d*)/i).test(h)?parseFloat(RegExp.$1,10):null;
c.ActiveXEnabled=false;
if(c.isIE){var e,i=["Msxml2.XMLHTTP","Msxml2.DOMDocument","Microsoft.XMLDOM","ShockwaveFlash.ShockwaveFlash","TDCCtl.TDCCtl","Shell.UIHelper","Scripting.Dictionary","wmplayer.ocx"];
for(e=0;
e<i.length;
e++){if(c.getAXO(i[e])){c.ActiveXEnabled=true;
break
}}c.head=c.isDefined(document.getElementsByTagName)?document.getElementsByTagName("head")[0]:null
}c.isGecko=(/Gecko/i).test(g)&&(/Gecko\s*\/\s*\d/i).test(h);
c.verGecko=c.isGecko?c.formatNum((/rv\s*\:\s*([\.\,\d]+)/i).test(h)?RegExp.$1:"0.9"):null;
c.isSafari=(/Safari\s*\/\s*\d/i).test(h)&&(/Apple/i).test(f);
c.isChrome=(/Chrome\s*\/\s*(\d[\d\.]*)/i).test(h);
c.verChrome=c.isChrome?c.formatNum(RegExp.$1):null;
c.isOpera=(/Opera\s*[\/]?\s*(\d+\.?\d*)/i).test(h);
c.verOpera=c.isOpera&&((/Version\s*\/\s*(\d+\.?\d*)/i).test(h)||1)?parseFloat(RegExp.$1,10):null;
;
c.addWinEvent("load",c.handler(c.runWLfuncs,c));

},init:function(c){var b=this,a,c;
if(!b.isString(c)){b.message("[ ***** ERROR ***** Bad input argument. Plugin name should be a string. ]");
return -3
}if(c.length==1){b.getVersionDelimiter=c;
return -3
}c=c.toLowerCase().replace(/\s/g,"");
a=b[c];
if(!a||!a.getVersion){b.message("[ ***** ERROR ***** Bad input argument. Unrecognized plugin name: "+b.printArgs(c)+" ]");
return -3
}b.plugin=a;
if(!b.isDefined(a.installed)){a.installed=a.version=a.version0=a.getVersionDone=null;
a.$=b;
a.pluginName=c
}b.garbage=false;
if(b.isIE&&!b.ActiveXEnabled){if(a!==b.java){return -2
}}return 1
},fPush:function(b,a){var c=this;
if(c.isArray(a)&&(c.isFunc(b)||(c.isArray(b)&&b.length>0&&c.isFunc(b[0])))){a.push(b)
}},callArray:function(b){var c=this,a;
if(c.isArray(b)){for(a=0;
a<b.length;
a++){if(b[a]===null){return
}c.call(b[a]);
b[a]=null
}}},call:function(c){var b=this,a=b.isArray(c)?c.length:-1;
if(a>0&&b.isFunc(c[0])){c[0](b,a>1?c[1]:0,a>2?c[2]:0,a>3?c[3]:0)
}else{if(b.isFunc(c)){c(b)
}}},$$isMinVersion:function(a){return function(h,g,d,c){var e=a.init(h),f,b=-1;
if(e<0){return e
}f=a.plugin;
g=a.formatNum(a.isNum(g)?g.toString():(a.isStrNum(g)?a.getNum(g):"0"));
a.message("[ run $.isMinVersion("+a.printArgs([h,g,d,c])+") ]");
if(f.getVersionDone!=1){f.getVersion(d,c);
if(f.getVersionDone===null){f.getVersionDone=1
}}a.cleanup();
if(f.installed!==null){b=f.installed<=0.5?f.installed:(f.version===null?0:(a.compareNums(f.version,g,f)>=0?1:-1))
}return b
}
},getVersionDelimiter:",",$$getVersion:function(a){return function(g,d,c){var e=a.init(g),f,b;
if(e<0){return null
}a.message("[ run $.getVersion("+a.printArgs([g,d,c])+") ]");
f=a.plugin;
if(f.getVersionDone!=1){f.getVersion(d,c);
if(f.getVersionDone===null){f.getVersionDone=1
}}a.cleanup();
b=(f.version||f.version0);
return b?b.replace(a.splitNumRegx,a.getVersionDelimiter):b
}
},$$getInfo:function(a){return function(g,d,c){var b={},e=a.init(g),f;
if(e<0){return b
}a.message("[ run $.getInfo("+a.printArgs([g,d,c])+") ]");
f=a.plugin;
if(f.getInfo){if(f.getVersionDone===null){a.isMinVersion?a.isMinVersion(g,"0",d,c):a.getVersion(g,d,c)
}b=f.getInfo()
}return b
}
},cleanup:function(){
var a=this;
if(a.garbage&&a.isDefined(window.CollectGarbage)){window.CollectGarbage()
}
},isActiveXObject:function(b){var f=this,a=false,g,c="<",d=c+'object width="1" height="1" style="display:none" '+f.plugin.getCodeBaseVersion(b)+">"+f.plugin.HTML+c+"/object>";
if(!f.head){return a
}if(f.head.firstChild){f.head.insertBefore(document.createElement("object"),f.head.firstChild)
}else{f.head.appendChild(document.createElement("object"))
}f.head.firstChild.outerHTML=d;
try{f.head.firstChild.classid=f.plugin.classID
}catch(g){f.message(g)
}try{if(f.head.firstChild.object){a=true
}}catch(g){f.message(g)
}try{if(a&&f.head.firstChild.readyState<4){f.garbage=true
}}catch(g){f.message(g)
}f.head.removeChild(f.head.firstChild);
return a
},codebaseSearch:function(c){var e=this;
if(!e.ActiveXEnabled){return null
}if(e.isDefined(c)){return e.isActiveXObject(c)
}var j=[0,0,0,0],g,f,b=e.plugin.digits,i=function(k,l){return e.isActiveXObject((k==0?l:j[0])+","+(k==1?l:j[1])+","+(k==2?l:j[2])+","+(k==3?l:j[3]))
},h,d,a=false;
for(g=0;
g<b.length;
g++){h=b[g]*2;
j[g]=0;
for(f=0;
f<20;
f++){if(h==1&&g>0&&a){break
}if(h-j[g]>1){d=Math.round((h+j[g])/2);
if(i(g,d)){j[g]=d;
a=true
}else{h=d
}}else{if(h-j[g]==1){h--;
if(!a&&i(g,h)){a=true
}break
}else{if(!a&&i(g,h)){a=true
}break
}}}if(!a){return null
}}return j.join(",")
},addWinEvent:function(d,c){var e=this,a=window,b;
if(e.isFunc(c)){if(a.addEventListener){a.addEventListener(d,c,false)
}else{if(a.attachEvent){a.attachEvent("on"+d,c)
}else{b=a["on"+d];
a["on"+d]=e.winHandler(c,b)
}}}},winHandler:function(d,c){return function(){d();
if(typeof c=="function"){c()
}}
},WLfuncs0:[],WLfuncs:[],runWLfuncs:function(a){a.winLoaded=true;
a.message("[ window.onload event has fired ]");
a.message("[ START event handlers for $.onWindowLoaded( ) ]");
a.callArray(a.WLfuncs0);
a.callArray(a.WLfuncs);
a.message("[ END event handlers for $.onWindowLoaded( ) ]");
if(a.onDoneEmptyDiv){a.onDoneEmptyDiv()
}},winLoaded:false,$$onWindowLoaded:function(a){return function(b){a.message("[ run $.onWindowLoaded("+a.printArgs([b])+") ]");
if(a.winLoaded){a.message("[ START event handler "+a.printArgs([b])+" for $.onWindowLoaded("+a.printArgs([b])+") ]");
a.call(b);
a.message("[ END event handler "+a.printArgs([b])+" for $.onWindowLoaded("+a.printArgs([b])+") ]")
}else{a.fPush(b,a.WLfuncs)
}}
},$$beforeInstantiate:function(a){return function(e,d){var b=a.init(e),c=a.plugin;
if(b==-3){return
}a.message("[ run $.beforeInstantiate("+a.printArgs([e,d])+") ]");
if(!a.isArray(c.BIfuncs)){c.BIfuncs=[]
}a.fPush(d,c.BIfuncs)
}
},$$onDetectionDone:function(a){return function(h,g,c,b){var d=a.init(h),j,e;
if(d==-3){return -1
}e=a.plugin;
a.message("[ run $.onDetectionDone("+a.printArgs([h,g,c,b])+") ]");
if(!a.isArray(e.funcs)){e.funcs=[]
}if(e.getVersionDone!=1){j=a.isMinVersion?a.isMinVersion(h,"0",c,b):a.getVersion(h,c,b)
}if(e.installed!=-0.5&&e.installed!=0.5){a.message("[ $.onDetectionDone("+a.printArgs([h,g,c,b])+") has completed detection ]");
a.message("[ START event handler "+a.printArgs([g])+" for $.onDetectionDone("+a.printArgs([h,g,c,b])+") ]");
a.call(g);
a.message("[ END event handler "+a.printArgs([g])+" for $.onDetectionDone("+a.printArgs([h,g,c,b])+") ]");
return 1
}if(e.NOTF){a.fPush(g,e.funcs);
return 0
}return 1
}
},div:null,divWidth:50,pluginSize:1,emptyDiv:function(){var c=this,a,e,b,d=0;
if(c.div&&c.div.childNodes){c.message("[ Removing all HTML tags that were inserted ]",1);
for(a=c.div.childNodes.length-1;
a>=0;
a--){b=c.div.childNodes[a];
if(b&&b.childNodes){if(d==0){for(e=b.childNodes.length-1;
e>=0;
e--){b.removeChild(b.childNodes[e])
}c.div.removeChild(b)
}else{}}}}c.message("[ DONE ]",1)
},DONEfuncs:[],onDoneEmptyDiv:function(){var c=this,a,b;
if(!c.winLoaded){return
}if(c.WLfuncs&&c.WLfuncs.length&&c.WLfuncs[c.WLfuncs.length-1]!==null){return
}for(a in c){b=c[a];
if(b&&b.funcs){if(b.OTF==3){return
}if(b.funcs.length&&b.funcs[b.funcs.length-1]!==null){return
}}}for(a=0;
a<c.DONEfuncs.length;
a++){c.callArray(c.DONEfuncs)
}c.emptyDiv()
},getWidth:function(c){if(c){var a=c.scrollWidth||c.offsetWidth,b=this;
if(b.isNum(a)){return a
}}return -1
},getTagStatus:function(m,g,a,b){var c=this,f,k=m.span,l=c.getWidth(k),h=a.span,j=c.getWidth(h),d=g.span,i=c.getWidth(d);
if(!k||!h||!d||!c.getDOMobj(m)){return -2
}if(j<i||l<0||j<0||i<0||i<=c.pluginSize||c.pluginSize<1){return 0
}if(l>=i){return -1
}try{if(l==c.pluginSize&&(!c.isIE||c.getDOMobj(m).readyState==4)){if(!m.winLoaded&&c.winLoaded){return 1
}if(m.winLoaded&&c.isNum(b)){if(!c.isNum(m.count)){m.count=b
}if(b-m.count>=10){return 1
}}}}catch(f){c.message(f)
}return 0
},getDOMobj:function(g,a){var f,d=this,c=g?g.span:0,b=c&&c.firstChild?1:0;
try{if(b&&a){c.firstChild.focus()
}}catch(f){d.message("[ Unable to use focus() method on span.firstChild? ] ",f)
}return b?c.firstChild:null
},setStyle:function(b,g){var f=b.style,a,d,c=this;
if(f&&g){for(a=0;
a<g.length;
a=a+2){try{f[g[a]]=g[a+1]
}catch(d){c.message("[ HTML tag: Unable to set style "+g[a]+", "+g[a+1]+" ? ] ",d)
}}}},insertDivInBody:function(i){var g,d=this,h="pd33993399",c=null,f=document,b="<",a=(f.getElementsByTagName("body")[0]||f.body);
if(!a){try{f.write(b+'div id="'+h+'">o'+b+"/div>");
c=f.getElementById(h)
}catch(g){d.message("[ Unable to use document.write? ] ",g)
}}a=(f.getElementsByTagName("body")[0]||f.body);
if(a){if(a.firstChild&&d.isDefined(a.insertBefore)){a.insertBefore(i,a.firstChild)
}else{a.appendChild(i)
}if(c){a.removeChild(c)
}}else{}},insertHTML:function(g,b,h,a,k){var l,m=document,j=this,q,o=m.createElement("span"),n,i,f="<";
var c=["outlineStyle","none","borderStyle","none","padding","0px","margin","0px","visibility","visible"];
if(!j.isDefined(a)){a=""
}if(j.isString(g)&&(/[^\s]/).test(g)){q=f+g+' width="'+j.pluginSize+'" height="'+j.pluginSize+'" ';
for(n=0;
n<b.length;
n=n+2){if(/[^\s]/.test(b[n+1])){q+=b[n]+'="'+b[n+1]+'" '
}}q+=">";
for(n=0;
n<h.length;
n=n+2){if(/[^\s]/.test(h[n+1])){q+=f+'param name="'+h[n]+'" value="'+h[n+1]+'" />'
}}q+=a+f+"/"+g+">"
}else{q=a
}if(!j.div){j.div=m.createElement("div");
i=m.getElementById("plugindetect");
if(i){j.div=i
}else{j.div.id="plugindetect";
j.insertDivInBody(j.div)
}j.setStyle(j.div,c.concat(["width",j.divWidth+"px","height",(j.pluginSize+3)+"px","fontSize",(j.pluginSize+3)+"px","lineHeight",(j.pluginSize+3)+"px","verticalAlign","baseline","display","block"]));
if(!i){j.setStyle(j.div,["position","absolute","right","0px","top","0px"])
}}if(j.div&&j.div.parentNode){
if(k&&k.BIfuncs&&k.BIfuncs.length&&k.BIfuncs[k.BIfuncs.length-1]!==null){j.message("[ START event handlers for $.beforeInstantiate("+j.printArgs(k.pluginName)+") ]");
j.callArray(k.BIfuncs);
j.message("[ END event handlers for $.beforeInstantiate("+j.printArgs(k.pluginName)+") ]")
};
j.message("[ inserting HTML tag: "+f+"span>"+q+f+"/span> ]");
j.div.appendChild(o);
j.setStyle(o,c.concat(["fontSize",(j.pluginSize+3)+"px","lineHeight",(j.pluginSize+3)+"px","verticalAlign","baseline","display","inline"]));
try{if(o&&o.parentNode){o.focus()
}}catch(l){j.message("[ Unable to use focus() method on HTML tag? ] ",l)
}try{o.innerHTML=q
}catch(l){j.message("[ Unable to set span.innerHTML? ] ",l)
}if(o.childNodes.length==1&&!(j.isGecko&&j.compareNums(j.verGecko,"1,5,0,0")<0)){j.setStyle(o.firstChild,c.concat(["display","inline"]))
}return{span:o,winLoaded:j.winLoaded,tagName:(j.isString(g)?g:"")}
}return{span:null,winLoaded:j.winLoaded,tagName:""}
},quicktime:{mimeType:["video/quicktime","application/x-quicktimeplayer","image/x-macpaint","image/x-quicktime"],progID:"QuickTimeCheckObject.QuickTimeCheck.1",progID0:"QuickTime.QuickTime",classID:"clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B",minIEver:7,HTML:("<")+'param name="src" value="" />'+("<")+'param name="controller" value="false" />',getCodeBaseVersion:function(a){return'codebase="#version='+a+'"'
},digits:[8,64,64,0],getVersion:function(){var d=this,b=d.$,a=null,c=null;
if(!b.isIE){if(b.hasMimeType(d.mimeType)){c=b.OS!=3?b.findNavPlugin("QuickTime.*Plug-?in",0):null;
if(c&&c.name){a=b.getNum(c.name)
}}}else{if(b.verIE>=d.minIEver){if(d.BIfuncs&&d.BIfuncs.length&&d.BIfuncs[d.BIfuncs.length-1]!==null){b.message("[ START event handlers for $.beforeInstantiate("+b.printArgs(d.pluginName)+") ]");
b.callArray(d.BIfuncs);
b.message("[ END event handlers for $.beforeInstantiate("+b.printArgs(d.pluginName)+") ]")
}a=b.codebaseSearch()
}else{c=b.getAXO(d.progID);
if(c&&c.QuickTimeVersion){a=c.QuickTimeVersion.toString(16);
a=a.charAt(0)+"."+a.charAt(1)+"."+a.charAt(2)
}}}d.installed=a?1:(c?0:-1);
a=b.formatNum(a);
if(b.isIE&&a){if(b.compareNums(a,"7,50,0,0")>=0&&b.compareNums(a,"7,60,0,0")<0){p=a.split(b.splitNumRegx);
a=[p[0],p[1].charAt(0),p[1].charAt(1),p[2]].join(",")
}}d.version=b.formatNum(a,3)
}},java:{mimeType:["application/x-java-applet","application/x-java-vm","application/x-java-bean"],mimeTypeJPI:"application/x-java-applet;jpi-version=",classID:"clsid:8AD9C840-044E-11D1-B3E9-00805F499D93",DTKclassID:"clsid:CAFEEFAC-DEC7-0000-0000-ABCDEFFEDCBA",DTKmimeType:["application/java-deployment-toolkit","application/npruntime-scriptable-plugin;DeploymentToolkit"],forceVerifyTag:[],jar:[],Enabled:navigator.javaEnabled(),VENDORS:["Sun Microsystems Inc.","Apple Computer, Inc."],OTF:null,All_versions:[],mimeTypeJPIresult:"",JavaPlugin_versions:[],JavaVersions:[[1,9,2,30],[1,8,2,30],[1,7,2,30],[1,6,1,30],[1,5,1,30],[1,4,2,30],[1,3,1,30]],searchJavaPluginAXO:function(){var h=null,a=this,c=a.$,g=[],j=[1,5,0,14],i=[1,6,0,2],f=[1,3,1,0],e=[1,4,2,0],d=[1,5,0,7],b=false;
if(!c.ActiveXEnabled){return null
};
b=true;
;
if(c.verIE>=a.minIEver){g=a.searchJavaAXO(i,i,b);
if(g.length>0&&b){g=a.searchJavaAXO(j,j,b)
}}else{
if(b){g=a.searchJavaAXO(d,d,true)
};
if(g.length==0){g=a.searchJavaAXO(f,e,false)
}}if(g.length>0){h=g[0]
}a.JavaPlugin_versions=[].concat(g);
return h
},searchJavaAXO:function(l,i,m){var n,f,h=this.$,q,k,a,e,g,j,b,r=[];
if(h.compareNums(l.join(","),i.join(","))>0){i=l
}i=h.formatNum(i.join(","));
var o,d="1,4,2,0",c="JavaPlugin."+l[0]+""+l[1]+""+l[2]+""+(l[3]>0?("_"+(l[3]<10?"0":"")+l[3]):"");
for(n=0;
n<this.JavaVersions.length;
n++){f=this.JavaVersions[n];
q="JavaPlugin."+f[0]+""+f[1];
g=f[0]+"."+f[1]+".";
for(a=f[2];
a>=0;
a--){b="JavaWebStart.isInstalled."+g+a+".0";
if(h.compareNums(f[0]+","+f[1]+","+a+",0",i)>=0&&!h.getAXO(b)){continue
}o=h.compareNums(f[0]+","+f[1]+","+a+",0",d)<0?true:false;
for(e=f[3];
e>=0;
e--){k=a+"_"+(e<10?"0"+e:e);
j=q+k;
if(h.getAXO(j)&&(o||h.getAXO(b))){r.push(g+k);
if(!m){return r
}}if(j==c){return r
}}if(h.getAXO(q+a)&&(o||h.getAXO(b))){r.push(g+a);
if(!m){return r
}}if(q+a==c){return r
}}}return r
},minIEver:7,getMimeJPIversion:function(){var h,a=this,d=a.$,c=new RegExp("("+a.mimeTypeJPI+")(\\d.*)","i"),k=new RegExp("Java","i"),e,j,f="",i={},g=0,b;
for(h=0;
h<navigator.mimeTypes.length;
h++){j=navigator.mimeTypes[h];
if(c.test(j.type)&&(e=j.enabledPlugin)&&(j=RegExp.$2)&&(k.test(e.description||f)||k.test(e.name||f))){i["a"+d.formatNum(j)]=j
}}b="0,0,0,0";
for(h in i){g++;
e=h.slice(1);
if(d.compareNums(e,b)>0){b=e
}}a.mimeTypeJPIresult=g>0?a.mimeTypeJPI+i["a"+b]:"";
return g>0?b:null
},getVersion:function(d,l){var f,c=this,e=c.$,h=c.NOTF,b=c.applet,j=c.verify,i=vendor=versionEnabled=null;
e.message((!e.isDefined(d)?null:(!e.isString(d)?"[ Jarfile input argument not a string: Jarfile input ignored ]":(!(/[^\s]/).test(d)?"[ Jarfile input argument '"+d+"' is empty: Jarfile input ignored ]":(!(/\.jar\s*$/).test(d)?"[ ***** Error ***** Jarfile input argument '"+d+"' should end with '.jar' ]":((/\\/).test(d)?"[ ***** Error ***** Jarfile input argument '"+d+"' cannot have backslash '\\' ]":null))))));
if(c.getVersionDone===null){c.OTF=0;
c.mimeObj=e.hasMimeType(c.mimeType);
c.deployTK.$=e;
c.deployTK.parentNode=c;
b.$=e;
b.parentNode=c;
if(h){h.$=e;
h.parentNode=c
}if(j){j.parentNode=c;
j.$=e;
j.init()
}}var k;
if(e.isArray(l)){for(k=0;
k<b.allowed.length;
k++){if(e.isNum(l[k])){b.allowed[k]=l[k]
}}}for(k=0;
k<c.forceVerifyTag.length;
k++){b.allowed[k]=c.forceVerifyTag[k]
}if(e.isString(d)){c.jar.push(d)
}if(c.getVersionDone==0){if(!c.version||b.canTryAny()){f=b.insertHTMLQueryAll(d);
if(f[0]){c.installed=1;
c.EndGetVersion(f[0],f[1])
}}return
}var g=c.deployTK.query();
if(g.JRE){i=g.JRE;
vendor=c.VENDORS[0]
}if(!e.isIE){var o,m,a,n;
n=(c.mimeObj&&c.Enabled)?true:false;
if(!i&&(f=c.getMimeJPIversion())!==null){i=f
}if(!i&&c.mimeObj){f="Java[^\\d]*Plug-in";
a=e.findNavPlugin(f);
if(a){f=new RegExp(f,"i");
o=f.test(a.description||"")?e.getNum(a.description):null;
m=f.test(a.name||"")?e.getNum(a.name):null;
if(o&&m){i=(e.compareNums(e.formatNum(o),e.formatNum(m))>=0)?o:m
}else{i=o||m
}}}if(!i&&c.mimeObj&&e.isSafari&&e.OS==2){a=e.findNavPlugin("Java.*\\d.*Plug-in.*Cocoa",0);
if(a){o=e.getNum(a.description);
if(o){i=o
}}}if(i){c.version0=i;
if(c.Enabled){versionEnabled=i
}}}else{if(!i&&g.status==0){i=c.searchJavaPluginAXO();
if(i){vendor=c.VENDORS[0]
}}if(i){c.version0=i;
if(c.Enabled&&e.ActiveXEnabled){versionEnabled=i
}}}if(!versionEnabled||b.canTryAny()){f=b.insertHTMLQueryAll(d);
if(f[0]){versionEnabled=f[0];
vendor=f[1]
}}if(!versionEnabled&&(f=c.queryWithoutApplets())[0]){c.version0=versionEnabled=f[0];
vendor=f[1];
if(c.installed==-0.5){c.installed=0.5
}}if(e.isSafari&&e.OS==2){if(!versionEnabled&&n){if(c.installed===null){c.installed=0
}else{if(c.installed==-0.5){c.installed=0.5
}}}}if(c.jreDisabled()){versionEnabled=null
};
if(c.isPlugin2==0&&(f=c.mimeObj)&&(f=f.enabledPlugin)&&(f=f.description)){if((/Next.*Generation.*Java.*Plug-in/i).test(f)){c.isPlugin2=1
}else{if((/Classic.*Java.*Plug-in/i).test(f)){c.isPlugin2=-1
}}};
if(c.installed===null){c.installed=versionEnabled?1:(i?-0.2:-1)
}c.EndGetVersion(versionEnabled,vendor)
},EndGetVersion:function(b,d){var a=this,c=a.$;
if(a.version0){a.version0=c.formatNum(c.getNum(a.version0))
}if(b){a.version=c.formatNum(c.getNum(b));
a.vendor=(c.isString(d)?d:"")
}if(a.getVersionDone!=1){a.getVersionDone=0
}},jreDisabled:function(){var b=this,d=b.$,c=b.deployTK.query().JRE,a;
if(c&&d.OS==1){if((d.isGecko&&d.compareNums(d.verGecko,"1,9,2,0")>=0&&d.compareNums(c,"1,6,0,12")<0)||(d.isChrome&&d.compareNums(c,"1,6,0,12")<0)){return 1
}};
if(d.OS==3&&(a=b.mimeObj)&&(a=a.enabledPlugin)&&(a=a.description)&&(/Next.*Generation.*Java.*Plug-in/i).test(a)&&b.isPlugin2<2&&!b.Browser4Plugin2()){return 1
};
if(d.isOpera&&d.verOpera>=9&&!b.Enabled&&!b.mimeObj&&!b.queryWithoutApplets()[0]){return 1
}if((d.isGecko||d.isChrome)&&!b.mimeObj&&!b.queryWithoutApplets()[0]){return 1
}return 0
},deployTK:{status:null,JREall:[],JRE:null,HTML:null,query:function(){var f=this,h=f.$,c=f.parentNode,i,a,b,g=len=null;
if(f.status!==null){return f
}f.status=0;
if((h.isGecko&&h.compareNums(h.verGecko,h.formatNum("1.6"))<=0)||h.isSafari||(h.isIE&&!h.ActiveXEnabled)){return f
}if(h.isIE&&h.verIE>=6){f.HTML=h.insertHTML("object",[],[]);
g=h.getDOMobj(f.HTML)
}else{if(!h.isIE&&(b=h.hasMimeType(c.DTKmimeType))&&b.type){f.HTML=h.insertHTML("object",["type",b.type],[]);
g=h.getDOMobj(f.HTML)
}}if(g){if(h.isIE&&h.verIE>=6){try{g.classid=c.DTKclassID
}catch(i){h.message("[ Deployment Toolkit ActiveX control: Unable to set classid of object tag? ] ",i)
}};
try{if(Math.abs(c.isPlugin2)<2){c.isPlugin2=g.isPlugin2()?2:-2
}}catch(i){h.message("[ Deployment Toolkit: isPlugin2() method does not run? ] ",i)
};
try{var d=g.jvms;
if(d){len=d.getLength();
if(h.isNum(len)){f.status=len>0?1:-1;
for(a=0;
a<len;
a++){b=h.getNum(d.get(len-1-a).version);
if(b){f.JREall[a]=b
}}}}}catch(i){h.message("[ Deployment Toolkit: Unable to query? ] ",i)
}}if(f.JREall.length>0){f.JRE=h.formatNum(f.JREall[0])
}return f
}},queryWithoutApplets00:function(c,a){var b=window.java,d;
try{if(b.lang){a.value=[b.lang.System.getProperty("java.version")+" ",b.lang.System.getProperty("java.vendor")+" "]
}}catch(d){c.message("[ Querying Java without applets causes error? ] ",d)
}},queryWithoutApplets:function(){var b=this,c=b.$,d,a=b.queryWithoutApplets;
if(!a.value){a.value=[null,null];
if(!c.isIE&&window.java){if(c.OS==2&&c.isOpera&&c.verOpera<9.2&&c.verOpera>=9){}else{if(c.isGecko&&c.compareNums(c.verGecko,"1,9,0,0")<0&&c.compareNums(c.verGecko,"1,8,0,0")>=0){}else{b.queryWithoutApplets00(c,a)
}}}}return a.value
},applet:{results:[[null,null],[null,null],[null,null]],HTML:[0,0,0],active:[0,0,0],allowed:[2,2,2],DummyObjTagHTML:0,DummySpanTagHTML:0,getResult:function(){var c=this.results,a,b;
for(a=0;
a<c.length;
a++){b=c[a];
if(b[0]){break
}}return[].concat(b)
},canTry:function(d){var b=this,c=b.$,a=b.parentNode;
if(b.allowed[d]==3){return true
}if(!a.version0||!a.Enabled||(c.isIE&&!c.ActiveXEnabled)){if(b.allowed[d]==2){return true
}if(b.allowed[d]==1&&!b.getResult()[0]){return true
}}return false
},canTryAny:function(){var b=this,a;
for(a=0;
a<b.allowed.length;
a++){if(b.canTry(a)){return true
}}return false
},canUseAppletTag:function(){var b=this,c=b.$,a=b.parentNode;
return(!c.isIE||a.Enabled)
},canUseObjectTag:function(){var a=this,b=a.$;
return(!b.isIE||b.ActiveXEnabled)
},queryThis:function(h){var g,c=this,b=c.parentNode,f=b.$,a=vendor=null,d=f.getDOMobj(c.HTML[h],true);
if(d){try{a=d.getVersion()+" ";
vendor=d.getVendor()+" ";
d.statusbar(f.winLoaded?" ":" ")
}catch(g){f.message("[ Java: unable to run applet.getVersion(), applet.getVendor(), and/or applet.statusbar()? ] ",g)
}if(f.isStrNum(a)){c.results[h]=[a,vendor]
}try{if(f.isIE&&a&&d.readyState!=4){f.garbage=true;
d.parentNode.removeChild(d)
}}catch(g){f.message(g)
};
if(a&&Math.abs(b.isPlugin2)<2){b.isPlugin2=-2;
try{if(b.minJRE4Plugin2(a)&&d.Packages.java.applet){b.isPlugin2=2
}}catch(g){f.message("[ Java Plugin2: Unable to access applet.Packages.java.applet? ] ",g)
}}
}},insertHTMLQueryAll:function(e){var g=this,n=g.parentNode,d=n.$,o=g.results,q=g.HTML,h="&nbsp;&nbsp;&nbsp;&nbsp;",u="A.class";
if(!d.isString(e)||!(/\.jar\s*$/).test(e)||(/\\/).test(e)){return[null,null]
}if(n.OTF<1){n.OTF=1
}if(n.jreDisabled()){return[null,null]
}if(n.OTF<2){n.OTF=2
}var c=e,t="",m;
if((/[\/]/).test(e)){m=e.split("/");
c=m[m.length-1];
m[m.length-1]="";
t=m.join("/")
}var j=["archive",c,"code",u],l=["mayscript","true"],r=["scriptable","true"].concat(l),f=!d.isIE&&n.mimeObj&&n.mimeObj.type?n.mimeObj.type:n.mimeType[0];
if(!q[0]&&g.canUseObjectTag()&&g.canTry(0)){q[0]=d.isIE?d.insertHTML("object",["type",f].concat(j),["codebase",t].concat(j).concat(r),h,n):d.insertHTML("object",["type",f,"archive",c,"classid","java:"+u],["codebase",t,"archive",c].concat(r),h,n);
o[0]=[0,0];
g.queryThis(0)
}if(!q[1]&&g.canUseAppletTag()&&g.canTry(1)){q[1]=d.isIE?d.insertHTML("applet",["alt",h].concat(l).concat(j),["codebase",t].concat(l),h,n):d.insertHTML("applet",["codebase",t,"alt",h].concat(l).concat(j),[].concat(l),h,n);
o[1]=[0,0];
g.queryThis(1)
}if(!q[2]&&g.canUseObjectTag()&&g.canTry(2)){q[2]=d.isIE?d.insertHTML("object",["classid",n.classID],["codebase",t].concat(j).concat(r),h,n):d.insertHTML();
o[2]=[0,0];
g.queryThis(2)
}if(!g.DummyObjTagHTML&&g.canUseObjectTag()){g.DummyObjTagHTML=d.insertHTML("object",[],[],h)
}if(!g.DummySpanTagHTML){g.DummySpanTagHTML=d.insertHTML("",[],[],h)
};
if(n.OTF<3&&((q[0]&&!o[0][0])||(q[1]&&!o[1][0])||(d.isIE&&q[2]&&!o[2][0]))){var i=n.NOTF,b=i.isJavaActive();
if(b>=0){n.OTF=3;
n.installed=b==1?0.5:-0.5;
i.onIntervalQuery=d.handler(i.$$onIntervalQuery,i);
if(!d.winLoaded){d.WLfuncs0.push([i.winOnLoadQuery,i])
}setTimeout(i.onIntervalQuery,i.intervalLength);
d.message("[ NOTF Java detection has begun ]")
}};
var k,a=0;
for(k=0;
k<o.length;
k++){if(q[k]||g.canTry(k)){a++
}else{break
}}if(a==o.length){n.getVersionDone=n.forceVerifyTag.length>0?0:1
}return g.getResult()
}},NOTF:{count:0,countMax:25,intervalLength:250,isJavaActive:function(){var e=this,c=e.parentNode,a,b,d=-9;
for(a=0;
a<c.applet.HTML.length;
a++){b=e.isAppletActive(a);
c.applet.active[a]=b;
if(b>d){d=b
}}return d
},isAppletActive:function(g){var h=this,d=h.$,c=h.parentNode,b=c.applet,f,a=d.getTagStatus(b.HTML[g],b.DummySpanTagHTML,b.DummyObjTagHTML,h.count);
if(a==-2){return -2
}try{if(d.isIE&&d.verIE>=c.minIEver&&d.getDOMobj(b.HTML[g]).object){return 1
}}catch(f){d.message("[ Java: Unable to access applet.object property? ] ",f)
}if(a==1&&(d.isIE||((c.version0&&c.Enabled&&c.Enabled)||c.queryWithoutApplets()[0]))){return 1
}if(a<0){return -1
}return 0
},winOnLoadQuery:function(c,d){var b=d.parentNode,a;
if(b.OTF==3){a=d.queryAllApplets();
d.queryCompleted(a[1],a[2])
}},$$onIntervalQuery:function(d){var c=d.$,b=d.parentNode,a;
if(b.OTF==3){a=d.queryAllApplets();
if(a[0]||(c.winLoaded&&d.count>d.countMax)){d.queryCompleted(a[1],a[2])
}}d.count++;
if(b.OTF==3){setTimeout(d.onIntervalQuery,d.intervalLength)
}},queryAllApplets:function(){var f=this,e=f.parentNode,d=e.applet,b,a,c;
for(b=0;
b<d.results.length;
b++){d.queryThis(b)
}a=d.getResult();
c=(a[0]||f.isJavaActive()<0)?true:false;
return[c,a[0],a[1]]
},queryCompleted:function(c,f){var e=this,d=e.$,b=e.parentNode;
if(b.OTF==4){return
}b.OTF=4;
var a=e.isJavaActive()==1?true:false;
if(c||b.queryWithoutApplets()[0]){b.installed=1
}else{if(a){if(b.version0){b.installed=1;
c=b.version0
}else{b.installed=0
}}else{if(b.installed==0.5){b.installed=0
}else{if(b.version0){b.installed=-0.2
}else{b.installed=-1
}}}}b.EndGetVersion(c,f);
d.message("[ NOTF Java detection has completed ]");
if(b.funcs){d.message("[ $.onDetectionDone("+d.printArgs(b.pluginName)+") has completed detection ]");
d.message("[ START event handlers for $.onDetectionDone("+d.printArgs(b.pluginName)+") ]");
d.callArray(b.funcs);
d.message("[ END event handlers for $.onDetectionDone("+d.printArgs(b.pluginName)+") ]")
}if(d.onDoneEmptyDiv){d.onDoneEmptyDiv()
}}},append:function(e,d){for(var c=0;
c<d.length;
c++){e.push(d[c])
}},isPlugin2:0,minJRE4Plugin2:function(a){var c=this.$,b=c.formatNum(c.getNum(a));
return b?(c.compareNums(b,"1,6,0,10")>=0):0
},Browser4Plugin2:function(){var a=this.$;
if(a.isIE){if(a.verIE<6){return 0
}}else{if(a.isGecko&&a.compareNums(a.verGecko,"1,9,0,0")<0){return 0
}}return 1
},getInfo:function(){var b=this,e=b.$,a=b.applet,j,o=b.installed,i=b.deployTK.query(),h=a.results,m=-1,q={All_versions:[],DeployTK_versions:[],DeploymentToolkitPlugin:(i.status==0?null:e.getDOMobj(i.HTML)),vendor:(e.isString(b.vendor)?b.vendor:""),OTF:(b.OTF<3?0:(b.OTF==3?1:2)),PLUGIN:null};
if(o==1&&b.minJRE4Plugin2(b.version)){if(b.isPlugin2<0||(b.isPlugin2<2&&!b.Browser4Plugin2())){}else{m=b.isPlugin2>0?1:0
}}q.isPlugin2=m;
for(j=0;
j<h.length;
j++){if(h[j][0]){q.PLUGIN=e.getDOMobj(a.HTML[j]);
break
}}var g=[null,null,null];
for(j=0;
j<h.length;
j++){if(h[j][0]){g[j]=1
}else{if(a.active[j]==1){g[j]=0
}else{if(a.allowed[j]>=1&&b.OTF!=3){if((j==1&&!a.canUseAppletTag())||(j!=1&&!a.canUseObjectTag())||o==-0.2||o==-1||a.active[j]<0||(j==2&&(!e.isIE||(/Microsoft/i).test(q.vendor)))){g[j]=-1
}}}}}q.objectTag=g[0];
q.appletTag=g[1];
q.objectTagActiveX=g[2];
var d=q.All_versions,n=q.DeployTK_versions,c=b.JavaPlugin_versions;
b.append(n,i.JREall);
b.append(d,(n.length>0?n:(c.length>0?c:(e.isString(b.version)?[b.version]:[]))));
for(j=0;
j<d.length;
j++){d[j]=e.formatNum(e.getNum(d[j]))
}var k,f=null;
if(!e.isIE){k=b.mimeObj||e.hasMimeType(b.mimeTypeJPIresult);
if(k){f=k.enabledPlugin
}}q.name=f?f.name:"";
q.description=f?f.description:"";
var l=null;
if((o==0||o==1)&&q.vendor==""){if(e.OS==2){l=b.VENDORS[1]
}else{if(!e.isIE&&e.OS==1){l=b.VENDORS[0]
}else{if(e.OS==3){l=b.VENDORS[0]
}}}if(l){q.vendor=l
}}return q
},verify:{verifyJarEnabled:1,id:"outputverify",addText:function(a,h,b,i){var f=this,c=f.$,d=c.isString(a)?document.getElementById(a):a;
var e=d;
if(d){if(c.isArray(b)){var g=document.createElement("span");
c.setStyle(g,b);
d.appendChild(g);
d=g
}if(c.isString(h)){d.appendChild(document.createTextNode(h))
}if(i===false){}else{e.appendChild(document.createElement("br"))
}}},errorStyle:["fontWeight","bold","color","#CC4444"],verifiedStyle:["fontWeight","bold","color","blue"],boldStyle:["fontWeight","bold"],init:function(){var d=this,c=d.$,b=d.parentNode,a=document.createElement("div");
if(!d.verifyJarEnabled){return
}if(document.getElementById(d.id)||b.forceVerifyTag.length>0){return
}b.forceVerifyTag=[3,3,3];
a.id=d.id;
c.setStyle(a,["color","black","border","solid blue 2px","padding","5px","width","98%","fontSize","18px","margin","5px","backgroundColor","#B3AAAA"]);
c.insertDivInBody(a);
d.addText(a,"This box displays results for jarfile [path/]name verification for PluginDetect v"+c.version,d.boldStyle);
d.addText(a,"This box is visible when you select the 'Verify jarfile [path/]name' option in the Script Generator web page.",d.boldStyle);
d.addText(a,"It will verify that you correctly specified the jarfile [path/]name in your Java detection code in this web page.",d.boldStyle);
d.addText(a);
d.addText(a,"Please keep in mind the following points:");
d.addText(a,"- Even if PluginDetect is able to sucessfully detect Java, that is NOT a guarantee that your jarfile [path/]name were specified correctly.The reason is that the jarfile is often not needed by PluginDetect to detect Java. This Jarfile Verification test will force PluginDetect to use the jarfile during plugin detection, thus showing if the jarfile [path/]name is correctly specified in your code.");
d.addText(a,"- An incorrectly specified jarfile will prevent Java detection from working in certain cases.");
d.addText(a,'- The jarfile path is NOT allowed to contain backslash "\\". Use forwardslash "/" instead when needed.');
d.addText(a,"- The jarfile path is relative to the webpage, not relative to any Javascript file.");
d.addText(a,"- Your jarfile only needs to be specified in the very first Java related PluginDetect command that is executed.");
d.addText(a,"- Please make sure that Java is installed and enabled in your browser for this verification test.");
d.addText(a,"- This jarfile verification test may not work on all browsers. If it keeps giving you errors and you believe that your jarfile name/path are correct, then try running this test on a different browser.");
d.addText(a,"- You do not need to run this verification test on all browsers. You only need to pass this test on ONE browser.");
d.addText(a);
d.addText(a);
d.addText(a,"Starting verification of jarfile [path/]name in your Java detection code...",d.boldStyle);
d.addText(a);
c.fPush([d.run,d],c.DONEfuncs)
},run:function(f,g){var e=g.parentNode,b,a,d,c;
if(!g.verifyJarEnabled){return
}if(!document.getElementById(g.id)){return
}g.run2();
g.done()
},done:function(){var c=this,b=c.$;
var a=document.getElementById(c.id);
c.addText(a);
c.addText(a,"DONE",c.verifiedStyle);
c.addText(a)
},run2:function(){var j=this,h=j.$,a=j.parentNode,m,n,f,i=null;
var b=document.getElementById(j.id);
var e=a.jar.length,l,d=false;
j.addText(b,"jarfile was specified "+e+" time"+(e>1?"s":"")+" in your Java detection code as follows:");
for(m=0;
m<e;
m++){l=a.jar[m];
j.addText(b,'jarfile [path/]name: "'+l+'"',null,false);
if(typeof l!="string"){j.addText(b," (Error: jarfile not a string)",j.errorStyle);
d=true;
continue
}if((/[\\]/).test(l)){j.addText(b,' (Error: jarfile path may not have backslash "\\")',j.errorStyle,false);
d=true
}if(!(/\.jar\s*$/).test(l)){j.addText(b,' (Error: jarfile must have extension ".jar")',j.errorStyle,false);
d=true
}j.addText(b)
}j.addText(b);
if(d){return
}if(e>1){var g=a.jar[0],k=true;
for(m=1;
m<e;
m++){if(g!==a.jar[m]){k=false;
break
}}if(!k){j.addText(b,"Error: all jarfile [path/]names in your detection code should be the same.",j.errorStyle);
return
}}if(a.OTF<1){j.addText(b,"Error: Unable to find jarfile in your detection code or jarfile name is wrong.",j.errorStyle);
return
}j.addText(b,"NOTE: verifyTagsArray is set to [3,3,3] to force PluginDetect to use the jarfile applet for Java detection.");
if(h.isMinVersion){f=h.isMinVersion("Java","0");
j.addText(b,'Analyzze.isMinVersion("Java", "0", "'+a.jar[0]+'", [3,3,3]): '+f)
}if(h.getVersion){i=h.getVersion("Java");
j.addText(b,'Analyzze.getVersion("Java", "'+a.jar[0]+'", [3,3,3]): '+i)
}j.addText(b,"navigator.javaEnabled(): "+navigator.javaEnabled());
if(h.isIE){j.addText(b,"ActiveX enabled: "+h.ActiveXEnabled)
}j.addText(b);
if(f<0&&h.isChrome){j.addText(b,"NOTE: Google Chrome browser may require Java 1,6,0,10 or higher.")
}if(f<0&&h.isGecko&&h.compareNums(h.verGecko,"1,9,2,0")>=0){j.addText(b,"NOTE: Firefox 3.6+ browser may require Java 1,6,0,10 or higher.")
}n=null;
for(m=0;
m<a.applet.results.length;
m++){if(h.isStrNum(a.applet.results[m][0])){n=true;
break
}a.applet.queryThis(m);
if(h.isStrNum(a.applet.results[m][0])){n=true;
break
}}if(n===null){if(!h.isIE&&!navigator.javaEnabled()){j.addText(b,"Error: Java may be disabled in your browser. Try to enable it in your browser settings.",j.errorStyle);
j.addText(b,"Also, make sure that Java is installed.",j.errorStyle);
j.addText(b,"Unable to verify jarfile at this time.",j.errorStyle);
return
}if(h.isIE){if(!h.ActiveXEnabled){j.addText(b,"Error: ActiveX appears to be disabled in Internet Explorer. Please enable it in your browser settings.",j.errorStyle)
}if(!navigator.javaEnabled()){j.addText(b,"Error: navigator.javaEnabled() appears to be false in Internet Explorer. Please enable Java in your browser settings.",j.errorStyle)
}if(!h.ActiveXEnabled||!navigator.javaEnabled()){j.addText(b,"Error: Unable to verify jarfile at this time.",j.errorStyle);
return
}}if(f==-1){j.addText(b,"Error: Java not installed, or Java not enabled in browser, or jarfile name and path are incorrect.",j.errorStyle);
j.addText(b,"Unable to verify jarfile at this time.",j.errorStyle);
return
}if(f==-0.2){j.addText(b,"Error: Java appears to be installed but PluginDetect is unable to query the jarfile applet.",j.errorStyle);
j.addText(b,"Make sure Java is enabled in your browser. ",j.errorStyle);
j.addText(b,"Also make sure that jarfile name and path are correct.",j.errorStyle);
j.addText(b,"Make sure the jarfile path is relative to the web page, not relative to any Javascript file.",j.errorStyle);
j.addText(b,"Unable to verify jarfile at this time.",j.errorStyle);
return
}if(a&&!a.NOTF){j.addText(b,"Warning: Unable to verify jarfile. Because the PluginDetect script in this page does not appear to have NOTF detection capabilities, it may be possible that this particular browser requires NOTF and for this reason we are unable to verify the jarfile. You might try a different browser that can do Java detection OTF to see if verification is successful.",j.errorStyle);
j.addText(b)
}j.addText(b,"Error: Unable to verify jarfile.",j.errorStyle);
j.addText(b,"Make sure jarfile name and path are correct in your detection code.",j.errorStyle);
j.addText(b,"Remember that the jarfile path should be relative to the webpage itself.",j.errorStyle);
return
}var c=j.getJarVersion();
if(c>=0){j.addText(b,"jarfile version: "+c);
j.addText(b,"")
}j.addText(b,"jarfile [path/]name: VERIFIED",j.verifiedStyle)
},getApplet:function(){var e=this,d=e.$,b=e.parentNode,c=b.applet.results,a;
for(a=0;
a<c.length;
a++){if(c[a][0]){return d.getDOMobj(b.applet.HTML[a])
}}return null
},getJarVersion:function(){var g=this,d=g.$,c=g.parentNode,b=g.getApplet(),f,a;
if(b){a=null;
try{a=b.getAppVersion()+" "
}catch(f){}if(d.isStrNum(a)){return a
}a=null;
try{a=b.getProp("java.version")+" "
}catch(f){}if(d.isStrNum(a)){return 2
}a=null;
try{a=b.getVersion()+" "
}catch(f){}if(d.isStrNum(a)){return 1
}}return -1
}},JavaFix:function(){}},devalvr:{mimeType:"application/x-devalvrx",progID:"DevalVRXCtrl.DevalVRXCtrl.1",classID:"clsid:5D2CF9D0-113A-476B-986F-288B54571614",getVersion:function(){var h=this,a=null,f,b=h.$,d;
if(!b.isIE){f=b.findNavPlugin("DevalVR");
if(f&&f.name&&b.hasMimeType(h.mimeType)){a=f.description.split(" ")[3]
}h.installed=a?1:-1
}else{var g,c;
g=b.getAXO(h.progID);
if(g){c=b.getDOMobj(b.insertHTML("object",["classid",h.classID],["src",""],"",h));
if(c){try{if(c.pluginversion){a="00000000"+c.pluginversion.toString(16);
a=a.substr(a.length-8,8);
a=parseInt(a.substr(0,2),16)+","+parseInt(a.substr(2,2),16)+","+parseInt(a.substr(4,2),16)+","+parseInt(a.substr(6,2),16)
}}catch(d){b.message("[ DevalVR: Unable to query plugin? ] ",d)
}}}h.installed=a?1:(g?0:-1)
}h.version=b.formatNum(a)
}},flash:{mimeType:["application/x-shockwave-flash","application/futuresplash"],progID:"ShockwaveFlash.ShockwaveFlash",classID:"clsid:D27CDB6E-AE6D-11CF-96B8-444553540000",getVersion:function(){var b=function(i){if(!i){return null
}var e=/[\d][\d\,\.\s]*[rRdD]{0,1}[\d\,]*/.exec(i);
return e?e[0].replace(/[rRdD\.]/g,",").replace(/\s/g,""):null
};
var d,h=this,f=h.$,j,g,k=null,c=null,a=null;
if(!f.isIE){d=f.findNavPlugin("Flash");
if(d&&d.description&&f.hasMimeType(h.mimeType)){k=b(d.description)
}if(k){k=f.getPluginFileVersion(d,k)
}}else{for(g=15;
g>2;
g--){c=f.getAXO(h.progID+"."+g);
if(c){a=g.toString();
break
}}if(a=="6"){try{c.AllowScriptAccess="always"
}catch(j){return"6,0,21,0"
}}try{k=b(c.GetVariable("$version"))
}catch(j){}if(!k&&a){k=a
}}h.installed=k?1:-1;
h.version=f.formatNum(k);
return true
}},shockwave:{mimeType:"application/x-director",progID:"SWCtl.SWCtl",classID:"clsid:166B1BCA-3F9C-11CF-8075-444553540000",getVersion:function(){var a=null,b=null,g,f,d=this,c=d.$;
if(!c.isIE){f=c.findNavPlugin("Shockwave\\s*for\\s*Director");
if(f&&f.description&&c.hasMimeType(d.mimeType)){a=c.getNum(f.description)
}if(a){a=c.getPluginFileVersion(f,a)
}}else{try{b=c.getAXO(d.progID).ShockwaveVersion("")
}catch(g){}if(c.isString(b)&&b.length>0){a=c.getNum(b)
}else{if(c.getAXO(d.progID+".8")){a="8"
}else{if(c.getAXO(d.progID+".7")){a="7"
}else{if(c.getAXO(d.progID+".1")){a="6"
}}}}}d.installed=a?1:-1;
d.version=c.formatNum(a)
}},windowsmediaplayer:{mimeType:["application/x-mplayer2","application/asx","application/x-ms-wmp"],progID:"wmplayer.ocx",classID:"clsid:6BF52A52-394A-11D3-B153-00C04F79FAA6",getVersion:function(){var b=this,a=null,e=b.$,d,f=null,c;
b.installed=-1;
if(!e.isIE){if(e.hasMimeType(b.mimeType)){f=e.findNavPlugin("Windows\\s*Media.*Plug-?in",0,"Totem")||e.findNavPlugin("Flip4Mac.*Windows\\s*Media.*Plug-?in",0,"Totem");
d=(e.isGecko&&e.compareNums(e.verGecko,e.formatNum("1.8"))<0);
d=d||(e.isOpera&&e.verOpera<10);
if(!d&&e.getMimeEnabledPlugin(b.mimeType[2],"Windows\\s*Media.*Firefox.*Plug-?in")){c=e.getDOMobj(e.insertHTML("object",["type",b.mimeType[2],"data",""],["src",""],"",b));
if(c){a=c.versionInfo
}}}}else{f=e.getAXO(b.progID);
if(f){a=f.versionInfo
}}b.installed=f&&a?1:(f?0:-1);
b.version=e.formatNum(a)
}},silverlight:{mimeType:"application/x-silverlight",progID:"AgControl.AgControl",digits:[9,20,9,12,31],getVersion:function(){var e=this,c=e.$,k=document,i=null,b=null,f=null,h=true,a=[1,0,1,1,1],u=[1,0,1,1,1],j=function(d){return(d<10?"0":"")+d.toString()
},n=function(s,d,v,w,t){return(s+"."+d+"."+v+j(w)+j(t)+".0")
},o=function(s,d,t){return r(s,(d==0?t:u[0]),(d==1?t:u[1]),(d==2?t:u[2]),(d==3?t:u[3]),(d==4?t:u[4]))
},r=function(w,t,s,y,x,v){var v;
try{return w.IsVersionSupported(n(t,s,y,x,v))
}catch(v){}return false
};
if(!c.isIE){var g;
if(c.hasMimeType(e.mimeType)){g=c.isGecko&&c.compareNums(c.verGecko,c.formatNum("1.6"))<=0;
if(c.isGecko&&g){h=false
}f=c.findNavPlugin("Silverlight.*Plug-?in",0);
if(f&&f.description){i=c.formatNum(f.description)
}if(i){u=i.split(c.splitNumRegx);
if(parseInt(u[2],10)>=30226&&parseInt(u[0],10)<2){u[0]="2"
}i=u.join(",")
}}e.installed=f&&h&&i?1:(f&&h?0:(f?-0.2:-1))
}else{b=c.getAXO(e.progID);
var m,l,q;
if(b&&r(b,a[0],a[1],a[2],a[3],a[4])){for(m=0;
m<e.digits.length;
m++){q=u[m];
for(l=q+(m==0?0:1);
l<=e.digits[m];
l++){if(o(b,m,l)){h=true;
u[m]=l
}else{break
}}if(!h){break
}}if(h){i=n(u[0],u[1],u[2],u[3],u[4])
}}e.installed=b&&h&&i?1:(b&&h?0:(b?-0.2:-1))
}e.version=c.formatNum(i)
}},vlc:{mimeType:"application/x-vlc-plugin",progID:"VideoLAN.VLCPlugin",compareNums:function(e,d){var c=this.$,k=e.split(c.splitNumRegx),i=d.split(c.splitNumRegx),h,b,a,g,f,j;
for(h=0;
h<Math.min(k.length,i.length);
h++){j=/([\d]+)([a-z]?)/.test(k[h]);
b=parseInt(RegExp.$1,10);
g=(h==2&&RegExp.$2.length>0)?RegExp.$2.charCodeAt(0):-1;
j=/([\d]+)([a-z]?)/.test(i[h]);
a=parseInt(RegExp.$1,10);
f=(h==2&&RegExp.$2.length>0)?RegExp.$2.charCodeAt(0):-1;
if(b!=a){return(b>a?1:-1)
}if(h==2&&g!=f){return(g>f?1:-1)
}}return 0
},getVersion:function(){var c=this,b=c.$,f,a=null,d;
if(!b.isIE){if(b.hasMimeType(c.mimeType)){f=b.findNavPlugin("VLC.*Plug-?in",0,"Totem");
if(f&&f.description){a=b.getNum(f.description,"[\\d][\\d\\.]*[a-z]*")
}}c.installed=a?1:-1
}else{f=b.getAXO(c.progID);
if(f){try{a=b.getNum(f.VersionInfo,"[\\d][\\d\\.]*[a-z]*")
}catch(d){}}c.installed=f?1:-1
}c.version=b.formatNum(a)
}},adobereader:{mimeType:"application/pdf",navPluginObj:null,progID:["AcroPDF.PDF","PDF.PdfCtrl"],classID:"clsid:CA8A9780-280D-11CF-A24D-444553540000",INSTALLED:{},pluginHasMimeType:function(d,c,f){var b=this,e=b.$,a;
for(a in d){if(d[a]&&d[a].type&&d[a].type==c){return 1
}}if(e.getMimeEnabledPlugin(c,f)){return 1
}return 0
},getVersion:function(i){var f=this,c=f.$,g,d,j,l=p=null,h=null,k=null,a,b;
i=(c.isString(i)&&i.length)?i.replace(/\s/,"").toLowerCase():f.mimeType;
if(c.isDefined(f.INSTALLED[i])){f.installed=f.INSTALLED[i];
return
}if(!c.isIE){a="Adobe.*PDF.*Plug-?in|Adobe.*Acrobat.*Plug-?in|Adobe.*Reader.*Plug-?in";
if(f.getVersionDone!==0){f.getVersionDone=0;
p=c.getMimeEnabledPlugin(f.mimeType,a);
if(!p&&c.hasMimeType(f.mimeType)){p=c.findNavPlugin(a,0)
}if(p){f.navPluginObj=p;
h=c.getNum(p.description)||c.getNum(p.name);
h=c.getPluginFileVersion(p,h);
if(!h&&c.OS==1){if(f.pluginHasMimeType(p,"application/vnd.adobe.pdfxml",a)){h="9"
}else{if(f.pluginHasMimeType(p,"application/vnd.adobe.x-mars",a)){h="8"
}}}}}else{h=f.version
}l=c.getMimeEnabledPlugin(i,a);
f.installed=l&&h?1:(l?0:(f.navPluginObj?-0.2:-1))
}else{p=c.getAXO(f.progID[0])||c.getAXO(f.progID[1]);
b=/=\s*([\d\.]+)/g;
try{d=(p||c.getDOMobj(c.insertHTML("object",["classid",f.classID],["src",""],"",f))).GetVersions();
for(j=0;
j<5;
j++){if(b.test(d)&&(!h||RegExp.$1>h)){h=RegExp.$1
}}}catch(g){c.message("[ Adobe PDF Reader: Unable to query in Internet Explorer? ] ",g)
}f.installed=h?1:(p?0:-1)
}if(!f.version){f.version=c.formatNum(h)
}f.INSTALLED[i]=f.installed
}},pdfreader:{mimeType:"application/pdf",progID:["AcroPDF.PDF","PDF.PdfCtrl"],classID:"clsid:CA8A9780-280D-11CF-A24D-444553540000",OTF:null,fileUsed:0,isValid:function(a){var b=this.$;
if(!b.isString(a)||/\\/.test(a)||!/\.pdf\s*$/.test(a)){return 0
}return 1
},getVersion:function(g,a){var h=this,d=h.$,c=false,f,b,j,i=h.NOTF,k=h.doc;
d.message((!d.isDefined(g)?null:(!d.isString(g)?"[ PDF input argument not a string: PDF input ignored ]":(!(/[^\s]/).test(g)?"[ PDF input argument '"+g+"' is empty: PDF input ignored ]":(!(/\.pdf\s*$/).test(g)?"[ ***** ERROR ***** PDF input argument '"+g+"' should end with '.pdf' ]":((/\\/).test(g)?"[ ***** ERROR ***** PDF input argument '"+g+"' cannot have backslash '\\' ]":null))))));
if(h.getVersionDone===null){h.OTF=0;
k.$=d;
k.parentNode=h;
if(i){i.$=d;
i.parentNode=h
}}if(h.getVersionDone==0){f=k.insertHTMLQuery(g);
if(f>0){h.installed=0
}if(f<0){h.installed=-1
}return
}if(!d.isIE){if(!c&&!a&&d.hasMimeType(h.mimeType)){c=true
}if(!c){f=k.insertHTMLQuery(g);
if(f>0){c=true
}}if(h.getVersionDone===null){h.getVersionDone=c?1:0
}if(h.installed===null){h.installed=c?0:-1
}}else{if(!c&&!a){try{if((d.getAXO(h.progID[0])||d.getAXO(h.progID[1])).GetVersions()){c=true
}}catch(j){d.message("[ Adobe PDF Reader: Unable to query in Internet Explorer? ] ",j)
}}if(!c&&h.isValid(g)){h.fileUsed=1;
try{if(d.getDOMobj(d.insertHTML("object",["classid",h.classID],["src",g],"",h)).GetVersions()){c=true
}}catch(j){d.message("[ Adobe PDF Reader: Unable to query in Internet Explorer? ] ",j)
}}h.getVersionDone=1;
if(h.installed===null){h.installed=c?0:-1.5
}}h.version=null
},doc:{HTML:0,DummyObjTagHTML:0,DummySpanTagHTML:0,insertHTMLQuery:function(c){var f=this,b=f.parentNode,e=b.$,a,d="&nbsp;&nbsp;&nbsp;&nbsp;";
if(!b.isValid(c)){return 0
}if(b.OTF<1){b.OTF=1
}if(b.OTF<2){b.OTF=2
}if(!f.HTML){f.HTML=e.insertHTML("object",["type",b.mimeType,"data",c],["src",c],d,b)
}b.fileUsed=1;
if(!f.DummyObjTagHTML){f.DummyObjTagHTML=e.insertHTML("object",[],[],d)
}if(!f.DummySpanTagHTML){f.DummySpanTagHTML=e.insertHTML("",[],[],d)
}a=e.getTagStatus(f.HTML,f.DummySpanTagHTML,f.DummyObjTagHTML);
if(a!=0){return a
};
var g=b.NOTF;
if(b.OTF<3&&f.HTML&&g){b.OTF=3;
b.installed=-0.5;
g.onIntervalQuery=e.handler(g.$$onIntervalQuery,g);
if(!e.winLoaded){e.WLfuncs0.push([g.winOnLoadQuery,g])
}setTimeout(g.onIntervalQuery,g.intervalLength);
e.message("[ NOTF PDFreader detection has begun ]")
};
b.getVersionDone=1;
return a
}},NOTF:{count:0,countMax:25,intervalLength:250,$$onIntervalQuery:function(e){var c=e.$,b=e.parentNode,d=b.doc,a;
if(b.OTF==3){a=c.getTagStatus(d.HTML,d.DummySpanTagHTML,d.DummyObjTagHTML,e.count);
if(a>0||a<0||(c.winLoaded&&e.count>e.countMax)){e.queryCompleted(a)
}}e.count++;
if(b.OTF==3){setTimeout(e.onIntervalQuery,e.intervalLength)
}},winOnLoadQuery:function(c,e){var b=e.parentNode,d=b.doc,a;
if(b.OTF==3){a=c.getTagStatus(d.HTML,d.DummySpanTagHTML,d.DummyObjTagHTML,e.count);
e.queryCompleted(a)
}},queryCompleted:function(b){var d=this,c=d.$,a=d.parentNode;
if(a.OTF==4){return
}a.OTF=4;
a.installed=b>0?0:-1;
c.message("[ NOTF PDFreader detection has completed ]");
if(a.funcs){c.message("[ $.onDetectionDone("+c.printArgs(a.pluginName)+") has completed detection ]");
c.message("[ START event handlers for $.onDetectionDone("+c.printArgs(a.pluginName)+") ]");
c.callArray(a.funcs);
c.message("[ END event handlers for $.onDetectionDone("+c.printArgs(a.pluginName)+") ]")
}if(c.onDoneEmptyDiv){c.onDoneEmptyDiv()
}}},getInfo:function(){var b=this,c=b.$,a={OTF:(b.OTF<3?0:(b.OTF==3?1:2)),DummyPDFused:(b.fileUsed?true:false)};
return a
},zz:0},zz:0};
Analyzze.initScript();
