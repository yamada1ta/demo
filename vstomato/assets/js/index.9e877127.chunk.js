(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{193:function(t,e,i){"use strict";i.r(e);var r,n=i(1),h=i(6);function o(t,e){var i=e.x+t.width*t.anchor.x,r=e.x+e.width-t.width*(1-t.anchor.x);t.x=t.x<i?i:t.x,t.x=t.x>r?r:t.x;var n=e.y+t.height*t.anchor.y,h=e.y+e.height-t.height*(1-t.anchor.y);t.y=t.y<n?n:t.y,t.y=t.y>h?h:t.y}!function(t){var e;!function(t){t.spoon="assets/images/spoon.png",t.fork="assets/images/fork.png",t.tomato="assets/images/tomato.png"}(t.Resource||(t.Resource={})),function(t){t.red=14509653,t.silver=10529450,t.gold=13416345,t.lightYellow=16776692,t.green=6728260,t.lightGreen=8965222,t.white=16777215}(e=t.Color||(t.Color={})),t.baseStyle={fill:e.white,fontFamily:["Trebuchet MS","Arial"]}}(r||(r={}));var a=function(){function t(t,e){this.graphics=n.Sprite.fromImage(r.Resource.spoon),this.graphics.anchor.set(.5),this.graphics.width=30,this.graphics.height=128,this.graphics.tint=r.Color.silver,this.graphics.x=t,this.graphics.y=e}return Object.defineProperty(t.prototype,"parent",{set:function(t){t.addChild(this.graphics)},enumerable:!0,configurable:!0}),t.prototype.move=function(t,e){-1!==t.indexOf("w")&&(this.graphics.y-=10),-1!==t.indexOf("a")&&(this.graphics.x-=10),-1!==t.indexOf("s")&&(this.graphics.y+=10),-1!==t.indexOf("d")&&(this.graphics.x+=10),o(this.graphics,e)},Object.defineProperty(t.prototype,"hitRange",{get:function(){return{x:this.graphics.x,y:this.graphics.y,width:this.graphics.width,height:this.graphics.height}},enumerable:!0,configurable:!0}),t}(),s=function(){function t(t,e){this.graphics=n.Sprite.fromImage(r.Resource.fork),this.graphics.anchor.set(.5),this.graphics.width=28,this.graphics.height=128,this.graphics.tint=r.Color.gold,this.graphics.x=t,this.graphics.y=e}return t.prototype.move=function(t,e){this.graphics.position=t,o(this.graphics,e)},Object.defineProperty(t.prototype,"parent",{set:function(t){t.addChild(this.graphics)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hitRange",{get:function(){return{x:this.graphics.x,y:this.graphics.y,width:this.graphics.width,height:this.graphics.height}},enumerable:!0,configurable:!0}),t}();function c(t,e){return Math.abs(t.x-e.x)<t.width/2+e.width/2&&Math.abs(t.y-e.y)<t.height/2+e.height/2}function d(t,e){return Math.floor(Math.random()*(e+1-t))+t}function l(t,e){null!==e?e.addChild(t):t.parent&&t.parent.removeChild(t)}function p(t,e){for(var i=[],r=t;r<=e;r++)i.push(r);return i}var g=function(){function t(t){this.graphics=n.Sprite.fromImage(r.Resource.tomato),this.graphics.anchor.set(.5),this.graphics.width=32,this.graphics.height=26,this.graphics.tint=t||function(){return t=function(t,e,i){var r,n,h,o,a,s,c,d=i*e,l=t/60,p=d*(1-Math.abs(l%2-1)),g=0,u=0,f=0;0<=l&&l<1&&(g=(r=[d,p,0])[0],u=r[1],f=r[2]);1<=l&&l<2&&(g=(n=[p,d,0])[0],u=n[1],f=n[2]);2<=l&&l<3&&(g=(h=[0,d,p])[0],u=h[1],f=h[2]);3<=l&&l<4&&(g=(o=[0,p,d])[0],u=o[1],f=o[2]);4<=l&&l<5&&(g=(a=[p,0,d])[0],u=a[1],f=a[2]);5<=l&&l<6&&(g=(s=[d,0,p])[0],u=s[1],f=s[2]);var y=i-d;return g=(c=[g+y,u+y,f+y])[0],u=c[1],f=c[2],g=Math.floor(255*g),u=Math.floor(255*u),f=Math.floor(255*f),[g,u,f]}(0===d(0,9)?d(30,90):d(0,15),.7,.9),Number("0x"+t.map(function(t){return("0"+t.toString(16)).slice(-2)}).join(""));var t}()}return Object.defineProperty(t.prototype,"x",{get:function(){return this.graphics.x},set:function(t){this.graphics.x=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this.graphics.y},set:function(t){this.graphics.y=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return this.graphics.width},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this.graphics.height},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hitRange",{get:function(){return{x:this.graphics.x,y:this.graphics.y,width:this.graphics.width,height:this.graphics.height}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"parent",{set:function(t){l(this.graphics,t)},enumerable:!0,configurable:!0}),t.prototype.startAnimation=function(){return new h.Tween(this.graphics)},t.prototype.remove=function(){var t=this;this.startAnimation().to({alpha:0},200).onComplete(function(){return t.parent=null}).start()},t}();var u,f=function(){function t(t){void 0===t&&(t=0),this.root=new n.Container,this.back=new n.Graphics,this.back.y=8,this.back.alpha=.8,this.root.addChild(this.back),this.text=new n.Text(t.toString(),r.baseStyle),this.text.x=12,this.text.y=10,this.root.addChild(this.text),this.adjustBack(),this.root.alpha=0}return Object.defineProperty(t.prototype,"score",{set:function(t){var e=this.text.text.length;this.text.text=t.toString(),this.text.text.length!==e&&this.adjustBack()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"parent",{set:function(t){l(this.root,t)},enumerable:!0,configurable:!0}),t.prototype.show=function(){new h.Tween(this.root).to({alpha:1},200).start()},t.prototype.adjustBack=function(){this.back.clear().beginFill(r.Color.lightGreen).drawRoundedRect(-10,0,35+this.text.width,35,10).endFill()},t}(),y=function(){function t(t){var e=this;this.onClick=function(){},this.root=new n.Container,this.mainText=new n.Text("Can't Eat Anymore...",r.baseStyle),this.mainText.style.fontSize=36,this.mainText.x=(t.width-this.mainText.width)/2,this.mainText.y=30,this.retryText=new n.Text("Click Retry",r.baseStyle),this.retryText.style.fontSize=22,this.retryText.x=(t.width-this.retryText.width)/2,this.retryText.y=100,this.retryText.alpha=0,this.back=(new n.Graphics).beginFill(r.Color.lightGreen).drawRect(0,0,t.width,.3*t.height).endFill(),this.back.y=0,this.back.alpha=.8,this.root.addChild(this.back),this.root.addChild(this.mainText),this.root.addChild(this.retryText),this.root.x=(t.width-this.root.width)/2,this.root.y=(t.height-this.root.height)/2,this.root.alpha=0,this.root.hitArea=new n.Rectangle(0,0,t.width,t.height),this.root.on("pointertap",function(){e.onClick()})}return Object.defineProperty(t.prototype,"parent",{set:function(t){l(this.root,t)},enumerable:!0,configurable:!0}),t.prototype.show=function(){var t=this;new h.Tween(this.root).to({alpha:1},300).delay(500).onComplete(function(){new h.Tween(t.retryText).to({alpha:1},300).delay(300).onComplete(function(){return t.root.interactive=!0}).start()}).start()},t.prototype.hide=function(){var t=this;new h.Tween(this.root).to({alpha:0},100).onComplete(function(){t.retryText.alpha=0,t.root.interactive=!1}).start()},t}(),w=function(){function t(t){this.root=new n.Container,this.leftGuide=new n.Container,this.rightGuide=new n.Container;var e=(new n.Graphics).beginFill(r.Color.lightGreen).drawRect(0,0,t.width/2-40,.2*t.height).endFill();e.alpha=.7,e.x=20,e.y=10;var i=new n.Text("W",r.baseStyle);i.x=(e.width-i.width)/2,i.y=7;var h=new n.Text("A",r.baseStyle);h.x=(e.width-i.width)/2-25,h.y=i.y+i.height-1;var o=new n.Text("D",r.baseStyle);o.x=(e.width-i.width)/2+32,o.y=h.y;var a=new n.Text("S",r.baseStyle);a.x=(e.width-i.width)/2+5,a.y=h.y+h.height;var s=new n.Container;s.x=e.x,s.y=e.y,s.addChild(i,h,o,a);var c=new g(r.Color.red);c.x=t.width/4,c.y=t.height/2-30,this.hitRangeLeft=c.hitRange;var d=new PIXI.Text("START",r.baseStyle);d.x=c.x-21,d.y=c.y-37,d.style.fontSize=16,d.style.fill=r.Color.red,this.leftGuide.addChild(e),this.leftGuide.addChild(s),this.leftGuide.addChild(d),c.parent=this.leftGuide,this.root.addChild(this.leftGuide);var l=(new n.Graphics).beginFill(r.Color.lightGreen).drawRect(0,0,t.width/2-40,.2*t.height).endFill();l.alpha=.7,l.x=t.width-l.width-20,l.y=10;var p=new n.Text("Move Mouse",r.baseStyle);p.style.fontSize=24,p.x=l.x+(l.width-p.width)/2,p.y=l.y+(l.height-p.height)/2;var u=new g(r.Color.red);u.x=t.width/4*3,u.y=c.y,this.hitRangeRight=u.hitRange;var f=new PIXI.Text("START",r.baseStyle);f.x=u.x-21,f.y=u.y-37,f.style.fontSize=16,f.style.fill=r.Color.red,this.rightGuide.addChild(l),this.rightGuide.addChild(p,f),u.parent=this.rightGuide,this.root.addChild(this.rightGuide)}return Object.defineProperty(t.prototype,"parent",{set:function(t){l(this.root,t)},enumerable:!0,configurable:!0}),t.prototype.hideLeft=function(){new h.Tween(this.leftGuide).to({alpha:0},100).start()},t.prototype.hideRight=function(){new h.Tween(this.rightGuide).to({alpha:0},100).start()},t}(),x=new n.Application({width:500,height:500,antialias:!0,backgroundColor:r.Color.lightYellow}),b={x:0,y:0,width:x.screen.width/2,height:x.screen.height},v={x:x.screen.width/2,y:0,width:x.screen.width/2,height:x.screen.height},m=0,C=0,T=[],G=[],R=[];!function(t){t[t.Guide=0]="Guide",t[t.Play=1]="Play",t[t.GameOver=2]="GameOver"}(u||(u={}));var k=u.Guide,O=!1,S=!1,P=2,j=[.25,.3,.35,.4],M=p(4,10).map(function(t){return 5*t}).reverse().concat(p(0,4).map(function(t){return 2*t+10}).reverse());M.push(8,7);var A=new n.Container;x.stage.addChild(A);var F=new a(x.screen.width/4,3*x.screen.height/4);F.parent=x.stage;var L=new s(3*x.screen.width/4,3*x.screen.height/4);L.parent=x.stage;var I=(new n.Graphics).lineStyle(1,r.Color.lightGreen).moveTo(0,0).lineTo(0,x.screen.height);I.x=(x.screen.width-I.width)/2,x.stage.addChild(I);var z=new f;z.parent=x.stage;var E=new y(x.screen);E.parent=x.stage,E.onClick=function(){A.removeChildren(),R.forEach(function(t){return t.stop()}),k=u.Play,m=0,C=0,T=[],G=[],z.score=m,E.hide()};var B=new w(x.screen);function D(t){var e=new g;e.parent=A;var i=t.x+e.width/2,r=t.x+t.width-e.width/2;e.x=d(i,r),e.y=-e.height/2;var n=d(i,r),h=x.screen.height+e.height/2,o=e.startAnimation().to({x:n,y:h},Math.abs(h-e.y)/j[d(0,j.length)]).onUpdate(function(){k===u.Play&&(c(F.hitRange,e.hitRange)||c(L.hitRange,e.hitRange))&&(o.stop(),e.remove(),m++,z.score=m)}).onComplete(function(){e.parent=null,k===u.Play&&(k=u.GameOver,E.show())}).start();R.push(o)}function J(t){if(k!==u.GameOver){if(F.move(G,b),k===u.Guide)return!O&&c(F.hitRange,B.hitRangeLeft)&&(B.hideLeft(),O=!0),!S&&c(L.hitRange,B.hitRangeRight)&&(B.hideRight(),S=!0),void(O&&S&&(z.show(),k=u.Play));if(C>=M[function(){for(var t=[0,2,5,8,11,20,35,50,75,100,150,200,300,500],e=t.length-1;e>=0;e--)if(m>=t[e])return e;return 0}()]){C=0;var e=0;T.length<P?(e=d(0,1),T.length>0&&-1===T.indexOf(e)&&(T=[])):(e=0===T[0]?1:0,T=[]),D(0===e?b:v),T.push(e)}else C+=t}else D(0===d(0,1)?b:v)}B.parent=x.stage,window.addEventListener("DOMContentLoaded",function(){document.body.appendChild(x.view),x.ticker.add(function(){return h.update()}),x.ticker.add(J),x.stage.hitArea=new n.Rectangle(0,0,x.screen.width,x.screen.height),x.stage.interactive=!0,x.stage.on("pointermove",function(t){k!==u.GameOver&&L.move(t.data.getLocalPosition(t.currentTarget),v)}),window.addEventListener("keydown",function(t){k!==u.GameOver&&G.push(t.key)}),window.addEventListener("keyup",function(t){k!==u.GameOver&&(G=G.filter(function(e){return e!==t.key}))})})},91:function(t,e,i){t.exports=i(193)}},[[91,2,0]]]);