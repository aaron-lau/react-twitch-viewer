(window.webpackJsonpnew=window.webpackJsonpnew||[]).push([[0],{30:function(e,t,a){e.exports=a(61)},58:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),s=a(7),m=a(6),l=a.n(m),i=a(10),u=a(9),o=a(26),p=a.n(o).a.create({headers:{"Client-ID":"60mzgsx8unzk1jj4ksvtp2gazjct1o"}});var d=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("https://api.twitch.tv/helix/games/top");case 2:t=e.sent,a=t.data.data,n=a.map((function(e){var t=e.box_art_url.replace("{width}","300").replace("{height}","300");return e.box_art_url=t,e})),s(n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),c.a.createElement("div",null,c.a.createElement("h1",null,"Most Popular Games"),c.a.createElement("div",{className:"row"},a.map((function(e){return c.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-12 mt-5"},c.a.createElement("div",{className:"card"},c.a.createElement("img",{className:"card-img-top",src:e.box_art_url}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},e.name),c.a.createElement("button",{className:"btn btn-success"},c.a.createElement(r.b,{className:"link",to:{pathname:"game/"+e.name,state:{gameID:e.id}}},e.name," streams"," ")))))}))))};var v=function(){return c.a.createElement("nav",{className:"navbar justify-content-center"},c.a.createElement("li",{className:"nav-item nav-link"},c.a.createElement(r.b,{to:"/"},"Top Games")),c.a.createElement("li",{className:"nav-item nav-link"},c.a.createElement(r.b,{to:"/top-streams"},"Top Live Streams")))};var h=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){var t,a,n,c,s,m,i,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("https://api.twitch.tv/helix/streams");case 2:return t=e.sent,a=t.data.data,n=a.map((function(e){return e.game_id})),"https://api.twitch.tv/helix/games?",c="",n.map((function(e){return c+="id=?".concat(e,"&")})),s="https://api.twitch.tv/helix/games?"+c,e.next=11,p.get(s);case 11:m=e.sent,i=m.data.data,u=a.map((function(e){e.gameName="",i.map((function(t){if(e.game_id===t.id)return e.gameName=t.name}));var t=e.thumbnail_url.replace("{width}","300").replace("{height}","300");return e.thumbnail_url=t,e})),r(u);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),c.a.createElement("div",null,c.a.createElement("h1",null,"Most Popular Live Streams"),c.a.createElement("div",{className:"row"},a.map((function(e){return c.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-12 mt-5"},c.a.createElement("div",{className:"card"},c.a.createElement("img",{className:"card-img-top",src:e.thumbnail_url}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h3",{className:"card-title"},e.user_name),c.a.createElement("h5",{className:"card-text"},e.gameName),c.a.createElement("div",{className:"card-text"},e.viewer_count," live viewers"),c.a.createElement("button",{className:"btn btn-success"},c.a.createElement("a",{href:"https://twitch.tv/"+e.user_name,className:"link",target:"_blank"},"watch ",e.user_name,"'s' stream")))))}))))};var E=function(e){var t=e.match,a=e.location,r=Object(n.useState)([]),s=Object(u.a)(r,2),m=s[0],o=s[1],d=Object(n.useState)(0),v=Object(u.a)(d,2),h=v[0],E=v[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){var t,n,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("https://api.twitch.tv/helix/streams?game_id=".concat(a.state.gameID));case 2:t=e.sent,n=t.data.data,c=n.map((function(e){var t=e.thumbnail_url.replace("{width}","300").replace("{height}","300");return e.thumbnail_url=t,e})),r=c.reduce((function(e,t){return e+t.viewer_count}),0),E(r),o(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),c.a.createElement("div",null,c.a.createElement("h1",{className:"text-center"},t.params.id," Streams"),c.a.createElement("h3",{className:"text-center"},c.a.createElement("strong",{className:"text-primary"},h)," people currently watch ",t.params.id),c.a.createElement("div",{className:"row"},m.map((function(e){return c.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-12 mt-5"},c.a.createElement("div",{className:"card"},c.a.createElement("img",{className:"card-img-top",src:e.thumbnail_url}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},e.user_name),c.a.createElement("div",{className:"card-text"},e.viewer_count," live viewers"),c.a.createElement("button",{className:"btn btn-success"},c.a.createElement("a",{className:"link",href:"https://twitch.tv/"+e.user_name,target:"_blank"},"watch ",e.user_name,"'s channel")))))}))))},f=a(29),b=a.n(f);a(58),a(59),a(60);var N=document.getElementById("root");b.a.render(c.a.createElement((function(){return c.a.createElement(r.a,null,c.a.createElement("div",{className:"App container-fluid"},c.a.createElement(v,null),c.a.createElement(s.a,{exact:!0,path:"/",component:d}),c.a.createElement(s.a,{exact:!0,path:"/top-streams",component:h}),c.a.createElement(s.a,{exact:!0,path:"/game/:id",component:E})))}),null),N)}},[[30,1,2]]]);
//# sourceMappingURL=main.bea0caf0.chunk.js.map