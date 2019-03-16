setTimeout(function(){
    'use strict';
    try{
        var stringifyFunc = null;
		if(window.JSON){
			stringifyFunc = window.JSON.stringify;
		} else {
			if(window.parent && window.parent.JSON){
				stringifyFunc = window.parent.JSON.stringify;
			}
		}
		if(!stringifyFunc){
			return;
		}
        var msg = {
            action: 'notifyBrandShieldAdEntityInformation',
            bsAdEntityInformation: {
                brandShieldId:'e256f4d7ec794037a33f033fce7f0244',
                comparisonItems:[{name : 'cmp', value : 14485719},{name : 'plmt', value : 14492435}]
            }
        };
        var msgString = stringifyFunc(msg);
        var bst2tWin = null;

        var findAndSendMessage = function() {
            if (!bst2tWin) {
                var frame = document.getElementById('bst2t_1552693437378834');
                if (frame) {
                    bst2tWin = frame.contentWindow;
                }
            }

            if (bst2tWin) {
                bst2tWin.postMessage(msgString, '*');
            }
        };

        findAndSendMessage();
        setTimeout(findAndSendMessage, 50);
        setTimeout(findAndSendMessage, 500);
    } catch(err){}
}, 10);var dvObj = $dvbsr;function np764531(g,i){function d(){function d(){function f(b,a){b=(i?"dvp_":"")+b;e[b]=a}var e={},a=function(b){for(var a=[],c=0;c<b.length;c+=2)a.push(String.fromCharCode(parseInt(b.charAt(c)+b.charAt(c+1),32)));return a.join("")},h=window[a("3e313m3937313k3f3i")];h&&(a=h[a("3g3c313k363f3i3d")],f("pltfrm",a));(function(){var a=e;e={};dvObj.registerEventCall(g,a,2E3,true)})()}try{d()}catch(f){}}try{dvObj.pubSub.subscribe(dvObj==window.$dv?"ImpressionServed":"BeforeDecisionRender",g,"np764531",d)}catch(f){}}
;np764531("e256f4d7ec794037a33f033fce7f0244",false);var dvObj=$dvbsr;var impId='e256f4d7ec794037a33f033fce7f0244';var htmlRate=10;var runTag=-1;var lab=0;var sources=0;var adid='-3944694176618970956';var urlTypeId=1024;var ddt=1;var date='20190315';var prefix='ch201902';dvObj.pubSub.subscribe('BeforeDecisionRender',impId,'AttributeCollection',function(){try{try{!function(){var r=window,e=0;try{for(;r.parent&&r!=r.parent&&r.parent.document&&(r=r.parent,!(10<e++)););}catch(e){}var a=0;function t(e,t){t&&(a=(a|1<<e)>>>0)}var n=r.document;t(0,r==window.top),t(1,""==n.title),t(2,r.innerWidth>r.screen.width);try{t(3,n.querySelector('script[src*="/coinhive"]')||r.Miner||r.CoinHive||function(){try{return r.localStorage.getItem("coinhive")}catch(e){return!1}}()),t(4,n.querySelector('script[src*="videoadtest.com"]')),t(5,r.CustomWLAdServer&&r.CustomWLAdServer.passbackCallbacks),t(7,n.querySelector('script[src*="algovid.com"]')),t(8,r.ddcQueryStr&&r.handleFileLoad&&r.handleComplete),t(9,r.location.href.match(/^http:\/\/[^\/]*\/[a-zA-Z-_\/]{40,}\.php$/)),t(10,-1!=n.title.indexOf("</>"));for(var o=n.getElementsByTagName("script"),i=0;i<o.length;i++)-1!=o[i].src.indexOf("172.93.96.99")&&t(11,!0),-1!=o[i].src.indexOf("104.243.38.59")&&t(12,!0);if(t(13,C=n.getElementById("adloaderframe")),t(14,function(){try{var e=n.getElementById("adloaderframe").previousElementSibling,t="VIDEO"==e.tagName&&"none"==e.style.display&&"DIV"==e.previousElementSibling.tagName?e.previousElementSibling.getAttribute("style"):"";return/width: \d+px; height: \d+px; background-color: black;/.test(t)}catch(e){return!1}}()),C){var c=C.previousElementSibling;for(i=0;i<5;i++)t(15,function(){try{var e='<video muted="muted"></video>'==c.outerHTML&&"DIV"==c.previousElementSibling.tagName?c.previousElementSibling.getAttribute("style"):"";return/width: \d+px; height: \d+px; background-color: black;/.test(e)}catch(e){return!1}}()),c=c.previousElementSibling}if(t(16,n.querySelector('iframe[id="adloaderframe"][style*="display: none"]')),t(17,function(){try{return null!=n.querySelector('#header[class="kk"]')&&"rgb(0, 255, 255)"==getComputedStyle(document.body).backgroundColor}catch(e){}}()),t(18,function(){try{return/<!--(.|\n)*checklength(.|\n)*function timer(.|\n)*aol3\.php(.|\n)*--\>/.test(document.documentElement.outerHTML)}catch(e){}}()),t(20,function(){try{return null!=n.querySelector('div[id="kt_player"][hiegth]')}catch(e){}}()),t(21,function(){try{return null!=n.querySelector('div[id="kt_player"][width]')}catch(e){}}()),r.top==r&&0<r.document.getElementsByClassName("asu").length)for(var d=r.document.styleSheets,l=0;l<d.length;l++)try{for(var u=r.document.styleSheets[l].cssRules,s=0;s<u.length;s++)if("div.kk"==u[s].selectorText||"div.asu"==u[s].selectorText){t(19,!0);break}}catch(e){}t(22,function(){try{return null!=n.querySelector('script[src*="./newplayer.js"]')}catch(e){}}());for(o=r.document.getElementsByTagName("script"),i=0;i<o.length;i++)if(o[i].innerText&&(-1!=o[i].innerText.indexOf("ga_pa.push('ga_")||-1!=o[i].innerText.indexOf("apntag.showTag('ga_"))&&"DIV"==o[i].parentElement.tagName&&o[i].parentElement.id&&-1!=o[i].parentElement.id.indexOf("ga_")&&("TH"==o[i].parentElement.parentElement.tagName||"TD"==o[i].parentElement.parentElement.tagName)){t(23,!0);break}t(24,function(){try{return r.top==r&&(0<r.document.getElementsByClassName("asu").length||r.document.getElementsByClassName("kk").length)}catch(e){}}()),t(25,function(){try{return null!=n.querySelector('link[href="data:;base64,iVBORw0KGgo="]')}catch(e){}}())}catch(e){}var p=Object.prototype.toString,m=Function.prototype.toString,h=/^\[object .+?Constructor\]$/,g=RegExp("^"+String(p).replace(/[.*+?^${}()|[\]\/\\]/g,"\\$&").replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function f(e){var t=typeof e;return"function"==t?g.test(m.call(e)):e&&"object"==t&&h.test(p.call(e))||!1}var v=window,y=0,w=!1,b=!1;try{for(;v.parent&&v!=v.parent&&v.parent.document&&(b|=!f(r.document.hasFocus),v=v.parent,w|=f(window.document.hasFocus)!=f(v.document.hasFocus),!(10<y++)););}catch(e){}t(26,r==window.top&&!f(v.document.hasFocus)),t(27,b),t(28,w);var E={dvp_acv:a,dvp_acifd:e};new Date;if(r==window.top){E.dvp_mref=(refm=n.referrer.match(/https?:\/\/(www\.)?([^\/]*)/),null!=refm&&3==refm.length?refm[2]:"");var _=n.head;_&&(_.children&&(E.dvp_acc=_.children.length),_.outerHTML&&(E.dvp_acl=_.outerHTML.length)),r.external&&(E.dvp_acwe=Object.keys(r.external).length);var S=r.innerWidth>r.innerHeight,x=r.screen[S?"height":"width"];if(n.body.offsetWidth>x&&(E.dvp_vpos=n.body.offsetWidth+"-"+x+"-"+(S?1:0)),navigator&&navigator.mediaDevices&&"function"==typeof navigator.mediaDevices.enumerateDevices){var k=[];navigator.mediaDevices.enumerateDevices().then(function(e){e.forEach(function(e){k.push(-1<e.kind.toLowerCase().indexOf("audio")?1:-1<e.kind.toLowerCase().indexOf("video")?2:0)})}).then(function(){dvObj.registerEventCall(impId,{dvp_dvcs:k.join(",")})}).catch(function(e){dvObj.registerEventCall(impId,{dvp_dvcs:encodeURIComponent(e.message)})})}else E.dvp_dvcs="na"}if(dvObj.registerEventCall(impId,E),(new Date).getTime()%100<htmlRate&&(1==lab||1==runTag&&0==(2&urlTypeId)&&(0==sources||0<(sources&a)))){function T(e,t){var n=new XMLHttpRequest;n.open("PUT","https://d23xwq4myz19mk.cloudfront.net/htmldata/"+prefix+"/"+date+"/"+r.location.hostname+"/"+a+"_"+adid+"_"+impId+"_"+t+".html",!0),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),n.setRequestHeader("x-amz-acl","public-read"),n.send(e.document.documentElement.outerHTML)}var C;T(r,"top"),r!=window&&T(window,"iframe_tag"),r!=window.parent&&T(window.parent,"iframe_tag_parent"),r!=window.parent.parent&&T(window.parent.parent,"iframe_tag_parent_parent"),(C=n.getElementById("adloaderframe"))&&T(C.contentWindow,"iframe_top_child")}}()}catch(e){dvObj.registerEventCall(impId,{dvp_ace:String(e).substring(0,150)})}}catch(e){}});


try{__tagObject_callback_704728923046({ImpressionID:"e256f4d7ec794037a33f033fce7f0244", ServerPublicDns:"tps618.doubleverify.com"});}catch(e){}
try{$dvbsr.pubSub.publish('BeforeDecisionRender', "e256f4d7ec794037a33f033fce7f0244");}catch(e){}
try{__verify_callback_704728923046({
ResultID:2,
Passback:"",
AdWidth:300,
AdHeight:250});}catch(e){}
try{$dvbsr.pubSub.publish('AfterDecisionRender', "e256f4d7ec794037a33f033fce7f0244");}catch(e){}
