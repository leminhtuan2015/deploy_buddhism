//= require jquery
//= require fancybox
//= require jquery.turbolinks
//= require jquery_ujs
//= require bootstrap
//= require tinymce-jquery
//= require cloudinary


// [begin ddmenu.js]
var ddmenuOptions =
{
    menuId: "ddmenu",
    linkIdToMenuHtml: null,
    open: "onmouseover", // or "onclick"
    delay: 50,
    speed: 0.3,
    license: "6c0l68"
};

var ddmenu = new Ddmenu(ddmenuOptions);

/* Menucool Drop Down Menu v2015.1.6 Copyright www.menucool.com */
function Ddmenu(l){"use strict";var r=function(a,b){return a.getElementsByTagName(b)},m=navigator,F=function(a,c){if(typeof getComputedStyle!="undefined")var b=getComputedStyle(a,null);else if(a.currentStyle)b=a.currentStyle;else b=a[d];return b[c]},p=function(a){if(a&&a.stopPropagation)a.stopPropagation();else if(window.event)window.event.cancelBubble=true},T=function(b){var a=b?b:window.event;if(a.preventDefault)a.preventDefault();else if(a)a.returnValue=false},h,d,v,f=document,k="className",a="length",A="addEventListener",lb=["$1$2$3","$1$2$3","$1$24","$1$23","$1$22"],C="offsetWidth",D="zIndex",j="onclick",b=[],y=-1,o=0,H=function(a){if(o)o[d][v]=a?"block":"none"},g,nb,c,i=function(){return c&&c[C]},n=function(a,c,b){if(a[A])a[A](c,b,false);else a.attachEvent&&a.attachEvent("on"+c,b)},x=function(a,b){if(b)K(a,"over");else J(a,"over");a[d][D]=b?2:1},O="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,V=(m.msPointerEnabled||m.pointerEnabled)&&(m.msMaxTouchPoints||m.maxTouchPoints);if(V)if(m.msPointerEnabled)var P="MSPointerOver",Q="MSPointerOut";else{P="pointerOver";Q="pointerOut"}var q=function(d){for(var c=r(f,"li"),b=0,g=c[a];b<g;b++)if(e(c[b],"over"))d!=c[b]&&x(c[b],0);H(d)},kb=[/(?:.*\.)?(\w)([\w\-])[^.]*(\w)\.[^.]+$/,/.*([\w\-])\.(\w)(\w)\.[^.]+$/,/^(?:.*\.)?(\w)(\w)\.[^.]+$/,/.*([\w\-])([\w\-])\.com\.[^.]+$/,/^(\w)[^.]*(\w)$/],mb=function(a){return a.replace(/(?:.*\.)?(\w)([\w\-])?[^.]*(\w)\.[^.]*$/,"$1$3$2")},eb=function(){var c=50,b=m.userAgent,a;if((a=b.indexOf("MSIE "))!=-1)c=parseInt(b.substring(a+5,b.indexOf(".",a)));return c},Z=function(){g={a:l.license,b:l.menuId,d:l.delay,e:l.linkIdToMenuHtml,f:l.speed,g:l.open.toLowerCase()}},s=eb(),z=function(e){var b=e.childNodes,d=[];if(b)for(var c=0,f=b[a];c<f;c++)b[c].nodeType==1&&d.push(b[c]);return d},B="createElement",hb=function(g,b){var d=function(b){for(var d=unescape(b.substr(0,b[a]-1)),f=b.substr(b[a]-1,1),e="",c=0;c<d[a];c++)e+=String.fromCharCode(d.charCodeAt(c)-f);return unescape(e)},c=Math.random(),e=d(mb(document.domain)),f="%66%75%6E%63%74%69%6F%6E%20%71%51%28%73%2C%6B%29%7B%76%3";if(L(b+c)[a]%(e[a]+1)>8)try{b=(new Function("$","_","e","a","b","c",L(f,c[a]))).apply(this,[e,b,c,d,g,B])}catch(h){}},t=function(a,b){return b?f[a](b):f[a]},L=function(e,b){for(var d=[],c=0;c<e[a];c++)d[d[a]]=String.fromCharCode(e.charCodeAt(c)-(b&&b>7?b:3));return d.join("")},gb=function(b,d){var c=b[a];while(c--)if(b[c]===d)return true;return false},e=function(a,c){var b=false;if(a[k])b=gb(a[k].split(" "),c);return b},K=function(a,b){if(!e(a,b))if(a[k]=="")a[k]=b;else a[k]+=" "+b},J=function(d,f){if(d[k]){for(var e="",c=d[k].split(" "),b=0,g=c[a];b<g;b++)if(c[b]!==f)e+=c[b]+" ";d[k]=e.replace(/^\s+|\s+$/g,"")}},db=function(d){for(var c=0,f=b[a];c<f;c++)if(d!=b[c].a&&e(b[c].a,"over")){x(b[c].a,0);return 1}return 0},M=function(a){return a.pointerType==a.MSPOINTER_TYPE_MOUSE||a.pointerType=="mouse"},U=function(b){var a=this;a.a=b;a.b=null;a.k()},X=function(a){this.a(a);this.b(a)};U.prototype={l:function(b){var a=this;clearTimeout(a.b);if(b){a.f();H(1)}else a.b=setTimeout(function(){a.f()},db(a.a)?0:g.d)},f:function(){x(this.a,1);if(!i()&&F(this.a,"position")=="static")this.a.dd[d].top=this.a.offsetTop+this.a.offsetHeight+"px";else this.a.dd[d].top=""},g:function(){var a=this;clearTimeout(a.b);a.b=setTimeout(function(){x(a.a,0)},g.d)},i:function(g){if(s<9){var b=z(g),c=b[a];if(c){b=z(b[0]);c=b[a];if(c){var f=b[c-1];if(e(f,"column"))f[d].borderRight="none"}}}},j:function(b){var a=this;p(b);if(e(a.a,"over")){a.g();H(0)}else a.c(b)},k:function(){var c=this,b=this.a,f=z(b),k=f[a];if(s<7)if(e(f[0],"top-heading"))f[0][d].zoom=1;while(k--)if(e(f[k],"dropdown"))var h=f[k];if(h){e(f[0],"top-heading")&&f[0].setAttribute("aria-haspopup","true");c.i(h);b.dd=h;b.setAttribute("tabindex",0);if(e(b,"full-width"))h[d][D]=2;h[j]=p;if(g.g==j)b[j]=function(a){c.j(a)};else if(V){b[j]=function(a){if(i()){c.j(a);a.target.scrollIntoView()}else p(a)};n(b,P,function(a){if(!i())if(M(a))c.l(a);else c.c(a)});n(b,Q,function(a){!i()&&M(a)&&c.g()})}else{if(O)b.ontouchend=function(a){T(a);a.target.click();p(a);i()&&a.target.scrollIntoView()};b[j]=function(a){c.j(a)};b.onmouseover=function(){!i()&&c.l(0)};b.onmouseout=function(){!i()&&c.g()}}}else{b.onmouseover=function(){K(this,"over")};b.onmouseout=function(){J(this,"over")}}},c:function(){q(this.a);this.l(1)}};X.prototype={a:function(a){hb(a,g.a)},b:function(j){if(O&&/(iPad|iPhone|iPod)/g.test(m.userAgent)){o=t(B,"div");j.insertBefore(o,j.childNodes[0]);var e=o[d];e.position="fixed";e.left=e.right=e.bottom=e.top="0px";e[v]="none";e[D]=-1}if(!G){n(f,"click",function(){q(0)});n(window,"resize",function(){var a=i();if(y!=a)if(y==-1)y=a;else{y=a;q(0)}})}for(var p=z(j),k=0,r=p[a];k<r;k++)p[k].nodeName=="LI"&&b.push(new U(p[k]));(new Function("a","b","c","d","e","f","g","h","i","j","k",function(d){for(var c=[],b=0,e=d[a];b<e;b++)c[c[a]]=String.fromCharCode(d.charCodeAt(b)-4);return c.join("")}("jyrgxmsr$N,|0}-zev$eAjyrgxmsr,f-zev$gAf2glevGshiEx,4-2xsWxvmrk,-?vixyvr$g2wyfwxv,g2pirkxl15-\u0081?vixyvr$|/e,}_6a-/}_4a/e,}_5a-/e,}_4a-\u0081jyrgxmsr$O,-zev$tAQexl_g,+yhukvt+-a,-?mj,tB2<-zev$uAk,g,+jylh{l[l{Uvkl+-0g,+kktlu|'{yphs'}lyzpvu+--0vAm_oa0wAv_oa?mj,tB2=**w2rshiReqi%A+FSH]+-w_oa_g,+puzly{Ilmvyl+-a,u0w-?ipwi$w_g,+puzly{Ilmvyl+-a,u0v-\u0081\u0081?mj,j-j2wx}pi2~Mrhi|Am2~m|/5?zev$qAe2e?mj,q2pirkxl@9-qA+::+?zev$rAtevwiMrx,q2glevEx,4--\u0080\u0080:0sAN,r/+g+0,,k,g,+kvthpu+--\u0080\u0080+pijx+-2vitpegi,h_r16a0l_r16a--2wtpmx,++--?s2mrhi|Sj,q-AA15**O,-?mj,f-f2srgpmgoAjyrgxmsr,-mj,i,-**q%As-O,-\u0081"))).apply(this,[g,o,L,kb,i,c,t,lb,j,0,h]);!G&&l.license.length==6&&n(f,"keydown",bb);ab(j)}};function ab(e){if(typeof e[d].webkitAnimationName!="undefined")var b="-webkit-";else if(typeof e[d].animationName!="undefined")b="";else return;var h="@"+b+"keyframes ddFadeIn {from{opacity:0;} to{opacity:1;}}",i="#"+g.b+" li.over .dropdown {"+b+"animation: ddFadeIn "+g.f+"s;}";if(f.styleSheets&&f.styleSheets[a]){var c=f.styleSheets[0];if(c.insertRule){c.insertRule(i,0);c.insertRule(h,0)}}}var N;function bb(d){var j=d.which||d.keyCode;if(!/(37|38|39|40|27|9)/.test(j))return;var i=f.activeElement;if(i==c&&s>8&&j==9&&d.shiftKey){w();return}for(var g=0;g<b[a];g++)if(i==c||i==b[g].a||e(b[g].a,"over")||i[h]==b[g].a){if(j!=9){T(d);p(d)}break}clearTimeout(N);N=setTimeout(function(){ib(d,j)},10)}function u(c,b,e){b=b+e;if(b<0)b=c[a]-1;if(b>=c[a])b=0;if(c[b].a.getAttribute("tabindex")!=null){c[b].a.focus();E(c[b],c[b].a)}else{var d=r(c[b].a,"a");if(d[a]){d[0].focus();E(c[b],c[b].a)}else u(c,b,e)}}function cb(b,a){return!a||a.nodeType!=1?0:a[h]==b?1:a[h]&&a[h][h]==b?1:0}function E(a){q(0);a.l(1)}function w(){e(c,"menu-icon-active")&&c[j]()}function ib(t,d){var g=f.activeElement;if(g==c){if(d==9)!e(c,"menu-icon-active")&&c[j]();if(d==27){w();c.blur()}d==40&&u(b,-1,1);return}var i=-1;if(g)for(var m=0;m<b[a];m++)if(g==b[m].a||e(b[m].a,"over")||g[h]==b[m].a){i=m;break}if(i!=-1){var l=b[i].a;if(d==27){q(0);l.blur();w();return}if(d==37)u(b,i,-1);else if(d==39)u(b,i,1);else{var n=r(l,"a"),k=-1;if(!n[a])return;for(var o=0;o<n[a];o++)if(g==n[o]){k=o;break}if(d==38)k--;else if(d==40&&k<n[a]-1)k++;else if(d==9){if(g&&!e(l,"over"))E(b[i],l);else if(k==-1&&g!=l)if(cb(l[h],g)){if(s<9)var p=1;else p=t.shiftKey?-1:1;u(b,i,p)}else{q(0);w()}return}k>=0&&n[k].focus()}}}var Y=function(b){var a;if(window.XMLHttpRequest)a=new XMLHttpRequest;else a=new ActiveXObject("Microsoft.XMLHTTP");a.onreadystatechange=function(){if(a.readyState==4&&a.status==200){var e=a.responseText,f=/^[\s\S]*<body[^>]*>([\s\S]+)<\/body>[\s\S]*$/i;if(f.test(e))e=e.replace(f,"$1");var c=t(B,"div");c[d].padding=c[d].margin="0";b[h].insertBefore(c,b);c.innerHTML=e;b[d][v]="none";R()}};a.open("GET",b.href,true);a.send()},S=function(){h="parentNode",d="style",v="display";if(g.e){var a=t("getElementById",g.e);if(a)Y(a);else alert('Cannot find the anchor (id="'+g.e+'")')}else R()},I=0,G=0,R=function(){if(!I){var b=t("getElementById",g.b);if(b){for(var i=r(b,"*"),h=0;h<i[a];h++)if(e(i[h],"menu-icon")){c=i[h];break}b=r(b,"ul");if(b[a]){b=b[0];if(c){if(s<9&&c[C])g.g=j;c[j]=function(a){b[d][v]=b[C]==0?"block":"";b[C]==0?J(this,"menu-icon-active"):K(this,"menu-icon-active");p(a)};var f=F(b,"z-index")||F(b,D);if(f=="auto"||f=="")f=1e10;b.zix=f;c.setAttribute("tabindex",0)}new X(b);I=G=1}}}},fb=function(c){var a=0;function b(){if(a)return;a=1;setTimeout(c,4)}if(f[A])f[A]("DOMContentLoaded",b,false);else n(window,"load",b)};if(s<9){var jb=t(B,"nav"),W=r(f,"head");if(!W[a])return;W[0].appendChild(jb)}Z();fb(S);return{init:function(){I=0;S()}}}
// [begin ddmenu.js]

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "http://connect.facebook.net/en_US/sdk.js#xfbml=1&appId=861066883917603&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


//= require turbolinks
//= require_tree .

jQuery(function($) { // as soon as DOM is ready
    $(document).ready(function() {
      $('.fancybox').fancybox();
    });
});









