(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{168:function(e,t,a){},190:function(e,t,a){},287:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(0),c=a.n(n),s=a(14),o=a.n(s),i=a(43),l=a(16),d=(a(168),a(325)),j=a(328),u=a(332),h=a(44),b=a(330),m=a(331),p=Object(d.a)({root:{maxWidth:"50%","@media (max-width: 768px)":{maxWidth:"90%"},color:"white",backgroundColor:"#1a2430",textAlign:"center",marginLeft:"auto",marginRight:"auto",marginTop:100,padding:20},typography:{marginBottom:13}});var x=function(){var e=p();return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)(j.a,{className:e.root,children:[Object(r.jsx)(b.a,{title:"Home",subheader:"Earthquakes / Covid / And many more!"}),Object(r.jsx)(m.a,{}),Object(r.jsxs)(u.a,{children:[Object(r.jsx)(h.a,{variant:"body2",component:"p",className:e.typography,children:"Welcome to the danger dashboard!"}),Object(r.jsx)(h.a,{variant:"body2",component:"p",className:e.typography,children:"This site has data regarding earthquakes and covid worldwide!"})]})]})})})},O=a(7),g=a.n(O),f=a(15),v=a(54),y=a(27),N=a(83),k=a(82),C=a(17),w=a(349),S=a(350),D=a(33),M=a.n(D),A=a(32),B=a.n(A),L=function(){var e=Object(f.a)(g.a.mark((function e(t){var a,r,n,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/"+t+".geojson",e.prev=1,e.next=4,M.a.get("".concat(a));case 4:return r=e.sent,n=r.data.features,c=n.map((function(e){return{id:e.id,coordinates:e.geometry.coordinates,title:e.properties.title,time:B()(e.properties.time).format("MMMM Do YYYY, h:mm:ss a"),mag:e.properties.mag,place:e.properties.place}})),e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(1);case 12:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(f.a)(g.a.mark((function e(){var t,a,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.get("".concat("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"));case 3:return t=e.sent,a=t.data.features,r=a.map((function(e){return{id:e.id,coordinates:e.geometry.coordinates,title:e.properties.title,time:B()(e.properties.time).format("MMMM Do YYYY, h:mm:ss a"),mag:e.properties.mag,place:e.properties.place}})),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),T=a(334),P=a(347),I=a(348),E=a(333),F=a(139),R=a.n(F),Y=a(141),_=a.n(Y),z=a(140),V=a.n(z),W=Object(d.a)({title:{fontSize:14},pos:{marginBottom:12},card:{boxShadow:"none !important"},cardHeader:{padding:0},CardContent:{padding:0,width:250},h3:{marginBottom:0},gridAlign:{textAlign:"center"},pAlign:{display:"flex",verticalAlign:"middle",alignItems:"center"}});var G=function(e){var t=e.quake,a=e.index,n=W(),c="";c=t.mag<2?"green":t.mag>4?"red":"blue";var s=t.place.split(","),o=s[0].split("of"),i=s[s.length-1].trim();return Object(r.jsx)(P.a,{center:[t.coordinates[1],t.coordinates[0]],color:c,radius:2*t.mag,children:Object(r.jsx)(I.a,{children:Object(r.jsx)(j.a,{className:n.card,children:Object(r.jsx)(u.a,{className:n.CardContent,children:Object(r.jsxs)(E.a,{container:!0,spacing:3,children:[Object(r.jsx)(E.a,{item:!0,xs:8,children:Object(r.jsx)(b.a,{title:i,subheader:o[1],className:n.cardHeader})}),Object(r.jsxs)(E.a,{item:!0,xs:4,className:n.gridAlign,children:[Object(r.jsx)("h3",{className:n.h3,children:t.mag}),Object(r.jsx)("small",{children:"Richter Scale"})]}),Object(r.jsxs)(E.a,{item:!0,xs:6,children:[Object(r.jsxs)(h.a,{variant:"body2",component:"span",className:n.pAlign,children:[Object(r.jsx)(R.a,{}),Object(r.jsx)("p",{children:"Location"})]}),Object(r.jsxs)(h.a,{variant:"body2",component:"small",children:[t.coordinates[1],", ",t.coordinates[0]]})]}),Object(r.jsxs)(E.a,{item:!0,xs:6,children:[Object(r.jsxs)(h.a,{variant:"body2",component:"span",className:n.pAlign,children:[Object(r.jsx)(V.a,{}),Object(r.jsx)("p",{children:"Distance"})]}),Object(r.jsx)(h.a,{variant:"body2",component:"small",children:o[0]})]}),Object(r.jsxs)(E.a,{item:!0,xs:8,children:[Object(r.jsxs)(h.a,{variant:"body2",component:"span",className:n.pAlign,children:[Object(r.jsx)(_.a,{}),Object(r.jsx)("p",{children:"Time"})]}),Object(r.jsx)(h.a,{variant:"body2",component:"small",children:t.time})]})]})})})})},a)};a(190);var H=function(e){var t=e.mapData,a=e.mapSelector,c=e.pos,s=Object(n.useState)([]),o=Object(C.a)(s,2),i=o[0],l=o[1],d=[0,0],j=2;Object(n.useEffect)((function(){(function(){var e=Object(f.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,q();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),0!==c.length&&(j=10,d=c);var u=function(e){var t=e.latlng,a=t.lat,r=t.lng;console.log(a,r)},h=i.length?Object(r.jsxs)(w.a,{center:d,zoom:j,minZoom:2,worldCopyJump:!0,onclick:u,children:[Object(r.jsx)(S.a,{url:"https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"}),i.map((function(e,t){return Object(r.jsx)(G,{quake:e,index:t},t)}))]}):Object(r.jsx)(T.a,{}),b=t.length?Object(r.jsxs)(w.a,{center:d,zoom:j,minZoom:2,worldCopyJump:!0,onclick:u,children:[Object(r.jsx)(S.a,{url:"https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"}),t.map((function(e,t){return Object(r.jsx)(G,{quake:e,index:t},t)}))]}):Object(r.jsx)(T.a,{});return Object(r.jsx)(r.Fragment,{children:a?b:h})},U=a(57),J=function(e){var t=e.mag,a=[];t.forEach((function(e){e<2&&(a[0]=a[0]?a[0]+1:1),e>2&&e<3&&(a[1]=a[1]?a[1]+1:1),e>=3&&e<4&&(a[2]=a[2]?a[2]+1:1),e>=4&&e<5&&(a[3]=a[3]?a[3]+1:1),e>=5&&e<6&&(a[4]=a[4]?a[4]+1:1),e>=6&&e<7&&(a[5]=a[5]?a[5]+1:1),e>=7&&e<8&&(a[6]=a[6]?a[6]+1:1),e>=8&&(a[7]=a[7]?a[7]+1:1)}));var n=a.length?Object(r.jsx)(U.HorizontalBar,{data:{labels:["Less than 2","2","3","4","5","6","7","8"],datasets:[{label:"Magnitude",backgroundColor:["rgba(109, 204, 178, 0.5)","rgba(102, 209, 126, 0.5)","rgba(148, 208, 103, 0.5)","rgba(192, 202, 87, 0.5)","rgba(203, 181, 99, 0.5)","rgba(199, 147, 75, 0.5)","rgba(199, 102, 45, 0.5)","rgba(205, 7, 0, 0.5)"],data:[a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]]}]},options:{legend:{display:!1},title:{display:!0,text:"Magnitude breakdown"}}}):null,c=a.length?Object(r.jsx)(U.Line,{data:{labels:["Less than 2","2","3","4","5","6","7","8"],datasets:[{label:"Magnitude",backgroundColor:"rgba(109, 204, 178, 0.2)",borderColor:"rgba(109, 204, 178, 0.5)",fill:!0,data:[a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]]}]},options:{legend:{display:!1},title:{display:!0,text:"Magnitude breakdown"}}}):null;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(E.a,{container:!0,spacing:2,children:[Object(r.jsx)(E.a,{item:!0,xs:12,md:6,children:n}),Object(r.jsx)(E.a,{item:!0,xs:12,md:6,children:c})]})})};var Z=function(e){var t=e.data,a=e.dataSource,n=[],c=0;return t.length?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:a}),t.forEach((function(e){n[c]=e.mag,c++})),Object(r.jsx)(J,{mag:n})]}):Object(r.jsx)(T.a,{})},K=a(335),Q=a(142),X=Object(d.a)((function(e){return{formControl:{width:"100%",textAlign:"center",marginBottom:"30px !important"},select:{backgroundColor:"#1a2430",color:"white",width:"40%",margin:"auto",textAlign:"center",paddingLeft:20,"@media (max-width: 768px)":{width:"100%"}},option:{backgroundColor:"#1a2430 !important",color:"white",paddingLeft:20}}})),$=function(e){var t=e.handleMapChange,a=X();return Object(r.jsx)(K.a,{className:a.formControl,children:Object(r.jsxs)(Q.a,{className:a.select,defaultValue:"all_day",onChange:function(e){return t(e.target.value)},children:[Object(r.jsx)("option",{className:a.option,value:"all_hour",children:"Past Hour"}),Object(r.jsx)("option",{className:a.option,value:"all_day",children:"Past Day"}),")",Object(r.jsx)("option",{className:a.option,value:"all_week",children:"Past 7 Days *Slow*"}),")",Object(r.jsx)("option",{className:a.option,value:"all_month",children:"Past 30 Days *Slow*"}),")"]})})},ee=a(47),te=a.n(ee),ae=a(48),re=a.n(ae),ne=Object(d.a)((function(e){return{container:{margin:"50px 0"},card:{margin:"2% 2% !important",backgroundColor:"#1a2430",color:"white"},total:{borderBottom:"20px solid rgba(0,0,255,0.5);"},smallMag:{borderBottom:"20px solid rgba(0,255,0,0.5)"},mag:{borderBottom:"20px solid rgba(255,0,0,0.5)"},pos:{color:"rgba(255, 255, 255, .5) !important"},coords:{color:"lightblue","&:hover":{color:"blue"}}}}));var ce=function(e){var t=e.data,a=e.display,n=e.pos,c=ne();return 0===t.length?Object(r.jsx)(T.a,{}):(void 0===a&&(a="all_day"),t.sort((function(e,t){return t.mag-e.mag})),Object(r.jsx)("div",{className:c.container,children:Object(r.jsxs)(E.a,{container:!0,spacing:2,justify:"center",children:[Object(r.jsx)(E.a,{item:!0,component:j.a,xs:12,md:2,className:re()(c.card,c.total),children:Object(r.jsxs)(u.a,{children:[Object(r.jsx)(h.a,{color:"textSecondary",className:c.pos,gutterBottom:!0,children:"Total"}),Object(r.jsx)(h.a,{variant:"h5",children:Object(r.jsx)(te.a,{start:0,end:t.length,duration:2.5,separator:","})}),Object(r.jsx)(h.a,{color:"textSecondary",className:c.pos,children:Object(r.jsx)("small",{children:B()().format("MMMM Do YYYY, h:mm:ss a")})}),Object(r.jsxs)(h.a,{variant:"body2",children:["Number of earthquakes this past ",a.split("_")[1]]})]})}),Object(r.jsx)(E.a,{item:!0,component:j.a,xs:12,md:2,className:re()(c.card,c.smallMag),children:Object(r.jsxs)(u.a,{children:[Object(r.jsx)(h.a,{color:"textSecondary",className:c.pos,gutterBottom:!0,children:"Smallest Earthquake"}),Object(r.jsx)(h.a,{variant:"h5",children:Object(r.jsx)(te.a,{start:0,end:t[t.length-1].mag,duration:2.5,separator:",",decimals:1})}),Object(r.jsx)(h.a,{color:"textSecondary",className:c.pos,children:Object(r.jsx)("small",{children:t[t.length-1].time})}),Object(r.jsx)(h.a,{variant:"body2",children:t[t.length-1].place}),Object(r.jsx)(h.a,{color:"textSecondary",className:c.pos,children:Object(r.jsxs)("small",{className:c.coords,onClick:function(e){return n(t[t.length-1].coordinates[1]+", "+t[t.length-1].coordinates[0])},children:[t[t.length-1].coordinates[1],", ",t[t.length-1].coordinates[0]]})})]})}),Object(r.jsx)(E.a,{item:!0,component:j.a,xs:12,md:2,className:re()(c.card,c.mag),children:Object(r.jsxs)(u.a,{children:[Object(r.jsx)(h.a,{color:"textSecondary",className:c.pos,gutterBottom:!0,children:"Biggest Earthquake"}),Object(r.jsx)(h.a,{variant:"h5",children:Object(r.jsx)(te.a,{start:0,end:t[0].mag,duration:2.5,separator:",",decimals:1})}),Object(r.jsx)(h.a,{color:"textSecondary",className:c.pos,children:Object(r.jsx)("small",{children:t[0].time})}),Object(r.jsx)(h.a,{variant:"body2",children:t[0].place}),Object(r.jsx)(h.a,{color:"textSecondary",className:c.pos,children:Object(r.jsxs)("small",{className:c.coords,onClick:function(e){return n(t[0].coordinates[1]+", "+t[0].coordinates[0])},children:[t[0].coordinates[1],", ",t[0].coordinates[0]]})})]})})]})}))},se=function(e){Object(N.a)(a,e);var t=Object(k.a)(a);function a(){var e;Object(v.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={dailyData:[],mapSelector:"",mapData:[],mapPos:[]},e.handleMapChange=function(){var t=Object(f.a)(g.a.mark((function t(a){var r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L(a);case 2:r=t.sent,e.setState({mapData:r,mapSelector:a}),e.setState({mapPos:[]});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleMapPos=function(t){e.setState({mapPos:t.split(",")})},e}return Object(y.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:t=e.sent,this.setState({dailyData:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.dailyData,a=e.mapSelector,n=e.mapData,c=e.mapPos;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{children:"Earthquake"}),n.length?Object(r.jsx)(ce,{data:n,display:a,pos:this.handleMapPos}):Object(r.jsx)(ce,{data:t,pos:this.handleMapPos}),Object(r.jsxs)("div",{className:"map-container",children:[Object(r.jsx)($,{handleMapChange:this.handleMapChange}),Object(r.jsx)(H,{mapData:n,mapSelector:a,pos:c})]}),n.length?Object(r.jsx)(Z,{data:n,dataSource:a}):Object(r.jsx)(Z,{data:t,dataSource:a})]})})}}]),a}(n.Component),oe=Object(d.a)((function(e){return{container:{margin:"50px 0"},card:{margin:"2% 2% !important",backgroundColor:"#1a2430",color:"white"},infected:{borderBottom:"20px solid rgba(0,0,255,0.5);"},recovered:{borderBottom:"20px solid rgba(0,255,0,0.5)"},deaths:{borderBottom:"20px solid rgba(255,0,0,0.5)"},pos:{color:"rgba(255, 255, 255, .5) !important"}}}));var ie=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,s=t.lastUpdate,o=oe();return a?Object(r.jsx)("div",{className:o.container,children:Object(r.jsxs)(E.a,{container:!0,spacing:3,justify:"center",children:[Object(r.jsx)(E.a,{item:!0,component:j.a,xs:12,md:3,className:re()(o.card,o.infected),children:Object(r.jsxs)(u.a,{children:[Object(r.jsx)(h.a,{color:"textSecondary",className:o.pos,gutterBottom:!0,children:"Infected"}),Object(r.jsx)(h.a,{variant:"h5",children:Object(r.jsx)(te.a,{start:0,end:a.value,duration:2.5,separator:","})}),Object(r.jsx)(h.a,{color:"textSecondary",className:o.pos,children:new Date(s).toDateString()}),Object(r.jsx)(h.a,{variant:"body2",children:"Number of active case of COVID-19"})]})}),Object(r.jsx)(E.a,{item:!0,component:j.a,xs:12,md:3,className:re()(o.card,o.recovered),children:Object(r.jsxs)(u.a,{children:[Object(r.jsx)(h.a,{color:"textSecondary",className:o.pos,gutterBottom:!0,children:"Recovered"}),Object(r.jsxs)(h.a,{variant:"h5",children:[Object(r.jsx)(te.a,{start:0,end:n.value,duration:2.5,separator:","}),Object(r.jsxs)("small",{children:[" ",(n.value/a.value*100).toFixed(2)+"%"]})]}),Object(r.jsx)(h.a,{color:"textSecondary",className:o.pos,children:new Date(s).toDateString()}),Object(r.jsx)(h.a,{variant:"body2",children:"Number of recovered cases of COVID-19"})]})}),Object(r.jsx)(E.a,{item:!0,component:j.a,xs:12,md:3,className:re()(o.card,o.deaths),children:Object(r.jsxs)(u.a,{children:[Object(r.jsx)(h.a,{color:"textSecondary",className:o.pos,gutterBottom:!0,children:"Deaths"}),Object(r.jsxs)(h.a,{variant:"h5",children:[Object(r.jsx)(te.a,{start:0,end:c.value,duration:2.5,separator:","}),Object(r.jsxs)("small",{children:[" ",(c.value/a.value*100).toFixed(2)+"%"]})]}),Object(r.jsx)(h.a,{color:"textSecondary",className:o.pos,children:new Date(s).toDateString()}),Object(r.jsx)(h.a,{variant:"body2",children:"Number of deaths caused by COVID-19"})]})})]})}):Object(r.jsx)(T.a,{})},le="https://covid19.mathdro.id/api",de=function(){var e=Object(f.a)(g.a.mark((function e(t){var a,r,n,c,s,o,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=le,t&&(a="".concat(le,"/countries/").concat(t)),e.prev=2,e.next=5,M.a.get(a);case 5:return r=e.sent,n=r.data,c=n.confirmed,s=n.recovered,o=n.deaths,i=n.lastUpdate,e.abrupt("return",{confirmed:c,recovered:s,deaths:o,lastUpdate:i});case 14:e.prev=14,e.t0=e.catch(2);case 16:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),je=function(){var e=Object(f.a)(g.a.mark((function e(){var t,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.get("https://api.covidtracking.com/v1/us/daily.json");case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){return{confirmed:e.positive,recovered:e.recovered,deaths:e.death,date:e.dateChecked}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=Object(f.a)(g.a.mark((function e(){var t,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.get("".concat(le,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),he=function(){var e=Object(f.a)(g.a.mark((function e(){var t,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.get("https://api.covid19api.com/summary");case 3:return t=e.sent,a=t.data,e.abrupt("return",a.Countries.map((function(e){return{Country:e.Country,CountryCode:e.CountryCode,Date:e.Date,TotalConfirmed:e.TotalConfirmed,TotalDeaths:e.TotalDeaths,TotalRecovered:e.TotalRecovered,Slug:e.Slug}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),be=Object(d.a)((function(e){return{container:{display:"flex",justifyContent:"center",width:"60%",margin:"auto","@media (max-width: 768px)":{margin:"2% 0 !important",width:"100%"}}}})),me=function(e){var t=e.data,a=t.confirmed,c=t.deaths,s=t.recovered,o=e.country,i=Object(n.useState)([]),l=Object(C.a)(i,2),d=l[0],j=l[1],u=be();Object(n.useEffect)((function(){(function(){var e=Object(f.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=j,e.next=3,je();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var h=d.length?Object(r.jsx)(U.Line,{data:{labels:d.map((function(e){var t=e.date;return B()(t).add(1,"days").format("YYYY-MM-DD")})),datasets:[{data:d.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:d.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0},{data:d.map((function(e){return e.recovered})),label:"Recovered",borderColor:"green",backgroundColor:"rgba(0, 255, 0, 0.5)",fill:!0}]}}):null,b=a?Object(r.jsx)(U.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0,0,255,0.5)","rgba(0,255,0,0.5)","rgba(255,0,0,0.5)"],data:[a.value,s.value,c.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current State in ".concat(o)}}}):null;return Object(r.jsx)("div",{className:u.container,children:o?b:h})},pe=Object(d.a)((function(e){return{formControl:{width:"100%",textAlign:"center",marginBottom:"30px !important"},select:{backgroundColor:"#1a2430",color:"white",width:"30%",margin:"auto",textAlign:"center",paddingLeft:20,"@media (max-width: 768px)":{width:"100%"}},option:{backgroundColor:"#1a2430 !important",color:"white",paddingLeft:20}}})),xe=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(C.a)(a,2),s=c[0],o=c[1],i=pe();return Object(n.useEffect)((function(){(function(){var e=Object(f.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,ue();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]),Object(r.jsx)(K.a,{className:i.formControl,children:Object(r.jsxs)(Q.a,{className:i.select,defaultValue:"",onChange:function(e){return t(e.target.value)},children:[Object(r.jsx)("option",{className:i.option,value:"",children:"Not Global"}),s.map((function(e,t){return Object(r.jsx)("option",{className:i.option,value:e,children:e},t)}))]})})};var Oe=function(){var e=Object(n.useState)([]),t=Object(C.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(f.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,he();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),a.sort((function(e,t){return t.TotalConfirmed-e.TotalConfirmed})),Object(r.jsx)("div",{})},ge=function(e){Object(N.a)(a,e);var t=Object(k.a)(a);function a(){var e;Object(v.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(f.a)(g.a.mark((function t(a){var r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,de(a);case 2:r=t.sent,e.setState({data:r,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(y.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h1",{children:"Covid"}),Object(r.jsx)(ie,{data:t}),Object(r.jsx)(xe,{handleCountryChange:this.handleCountryChange}),Object(r.jsx)(me,{data:t,country:a}),Object(r.jsx)(Oe,{})]})})}}]),a}(n.Component),fe=a(336),ve=Object(d.a)({root:{maxWidth:"50%","@media (max-width: 768px)":{maxWidth:"90%"},color:"white",backgroundColor:"#1a2430",textAlign:"center",marginLeft:"auto",marginRight:"auto",marginTop:100,padding:20},typography:{marginBottom:13,textAlign:"left"},p:{margin:2}});var ye=function(){var e=ve();return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)(j.a,{className:e.root,children:[Object(r.jsx)(b.a,{title:"About",subheader:"Earthquakes / Covid / And many more!"}),Object(r.jsx)(m.a,{}),Object(r.jsx)(u.a,{children:Object(r.jsxs)(h.a,{variant:"body2",component:"span",className:e.typography,children:[Object(r.jsx)("h3",{children:"Application Info"}),Object(r.jsx)("p",{children:"Version 0.0.1"}),Object(r.jsx)("p",{className:e.p,children:"This application is open source at"}),Object(r.jsx)("p",{children:Object(r.jsx)(fe.a,{href:"https://github.com/BraedonPod/dashboard",children:"https://github.com/BraedonPod/dashboard"})}),Object(r.jsx)("h3",{children:"API"}),Object(r.jsxs)("p",{className:e.p,children:[Object(r.jsx)(fe.a,{href:"https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php",children:"Earthquake USGS"})," - Earthquake API"]}),Object(r.jsxs)("p",{className:e.p,children:[Object(r.jsx)(fe.a,{href:"https://covid19.mathdro.id/api",children:"mathdro"})," - Covid API Total/Per Country"]}),Object(r.jsxs)("p",{className:e.p,children:[Object(r.jsx)(fe.a,{href:"https://api.covidtracking.com/v1/us/daily.json",children:"CovidTracking"})," - Covid API Daily US Cases"]}),Object(r.jsx)("h3",{children:"Libraries & Resources"}),Object(r.jsxs)("p",{className:e.p,children:[Object(r.jsx)(fe.a,{href:"#",children:"React.js"})," - Frontend Framework"]}),Object(r.jsxs)("p",{className:e.p,children:[Object(r.jsx)(fe.a,{href:"#",children:"React-Countup"})," - Counting Animation"]}),Object(r.jsxs)("p",{className:e.p,children:[Object(r.jsx)(fe.a,{href:"#",children:"React-Chartjs-2"})," - Charts"]}),Object(r.jsxs)("p",{className:e.p,children:[Object(r.jsx)(fe.a,{href:"#",children:"React-Router-Dom"})," - App Navigation"]}),Object(r.jsxs)("p",{className:e.p,children:[Object(r.jsx)(fe.a,{href:"#",children:"Axios"})," - Get Requests"]}),Object(r.jsxs)("p",{className:e.p,children:[Object(r.jsx)(fe.a,{href:"#",children:"Material-ui"})," - Design"]}),Object(r.jsxs)("p",{className:e.p,children:[Object(r.jsx)(fe.a,{href:"#",children:"Leaflet"})," - Map"]}),Object(r.jsxs)("p",{className:e.p,children:[Object(r.jsx)(fe.a,{href:"#",children:"Moment"})," - Date/Time format"]})]})})]})})})},Ne=a(344),ke=a(338),Ce=a(143),we=a.n(Ce),Se=Object(d.a)({root:{maxWidth:"50%","@media (max-width: 768px)":{maxWidth:"90%"},color:"white",backgroundColor:"#1a2430",textAlign:"center",marginLeft:"auto",marginRight:"auto",marginTop:100,padding:20,"& .MuiOutlinedInput-root":{color:"white",marginBottom:20,"& fieldset":{borderColor:"white"},"&.Mui-focused fieldset":{borderColor:"lightblue"}},"& .MuiFormLabel-root":{color:"rgba(255,255,255,0.5)"}},form:{display:"grid"},button:{backgroundColor:"#0d1219",color:"white","&:hover":{backgroundColor:"#234e8a"}}});var De=function(){var e=Se();return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)(j.a,{className:e.root,children:[Object(r.jsx)(b.a,{title:"Contact"}),Object(r.jsx)(m.a,{}),Object(r.jsx)(u.a,{children:Object(r.jsxs)("form",{noValidate:!0,autoComplete:"off",className:e.form,children:[Object(r.jsx)(Ne.a,{id:"outlined-basic",label:"Name",variant:"outlined"}),Object(r.jsx)(Ne.a,{id:"outlined-basic",label:"Email",variant:"outlined"}),Object(r.jsx)(Ne.a,{id:"outlined-basic",label:"Message",variant:"outlined"}),Object(r.jsx)(ke.a,{className:e.button,variant:"contained",endIcon:Object(r.jsx)(we.a,{}),children:"Send"})]})})]})})})};var Me=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("h1",{children:"TESTING"})})},Ae=a(9),Be=a(103),Le=a(342),qe=a(343),Te=a(150),Pe=a.n(Te),Ie=a(346),Ee=a(337),Fe=a(339),Re=a(341),Ye=a(340),_e=a(144),ze=a.n(_e),Ve=a(145),We=a.n(Ve),Ge=a(146),He=a.n(Ge),Ue=a(147),Je=a.n(Ue),Ze=a(148),Ke=a.n(Ze),Qe=a(149),Xe=a.n(Qe),$e=Object(d.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},appBar:{backgroundColor:"#1a2430"},button:{color:"white"},title:{flexGrow:1},text:{color:"white"},pos:{color:"white",fontSize:10,fontFamily:"monospace",marginBottom:20},list:{width:250},fullList:{width:"auto"},divider:{backgroundColor:"rgba(255, 255, 255, 0.2)"},listItem:{display:"block",textAlign:"center"},navitems:{color:"rgb(169, 169, 169)",fontFamily:"monospace",fontSize:16},link:{textDecoration:"none"},listLink:{"&:hover":{backgroundColor:"#0d1219",paddingLeft:40}},active:{"& li":{backgroundColor:"#0d1219",paddingLeft:40}}}}));var et=function(){var e=$e(),t=c.a.useState({left:!1}),a=Object(C.a)(t,2),n=a[0],s=a[1],o=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&s(Object(Be.a)(Object(Be.a)({},n),{},Object(Ae.a)({},e,t)))}},l=function(t){return Object(r.jsxs)("div",{className:e.list,role:"presentation",onClick:o(t,!1),onKeyDown:o(t,!1),children:[Object(r.jsx)(Ee.a,{children:Object(r.jsxs)(Fe.a,{className:e.listItem,children:[Object(r.jsx)(Ye.a,{primary:"Dashboard",className:e.text}),Object(r.jsx)(Ye.a,{className:e.pos,children:Object(r.jsx)("small",{children:"Navigation"})})]})}),Object(r.jsx)(m.a,{className:e.divider}),Object(r.jsxs)(Ee.a,{children:[Object(r.jsx)(i.b,{exact:!0,to:"/",activeClassName:e.active,className:e.link,children:Object(r.jsxs)(Fe.a,{className:e.listLink,children:[Object(r.jsx)(Re.a,{className:e.navitems,children:Object(r.jsx)(ze.a,{})}),Object(r.jsx)(Ye.a,{primary:"Home",className:e.navitems})]})}),Object(r.jsx)(i.b,{to:"/earthquake",activeClassName:e.active,className:e.link,children:Object(r.jsxs)(Fe.a,{className:e.listLink,children:[Object(r.jsx)(Re.a,{className:e.navitems,children:Object(r.jsx)(We.a,{})}),Object(r.jsx)(Ye.a,{primary:"Earthquake",className:e.navitems})]})}),Object(r.jsx)(i.b,{to:"/covid",activeClassName:e.active,className:e.link,children:Object(r.jsxs)(Fe.a,{className:e.listLink,children:[Object(r.jsx)(Re.a,{className:e.navitems,children:Object(r.jsx)(He.a,{})}),Object(r.jsx)(Ye.a,{primary:"Covid",className:e.navitems})]})}),Object(r.jsx)(i.b,{to:"/about",activeClassName:e.active,className:e.link,children:Object(r.jsxs)(Fe.a,{className:e.listLink,children:[Object(r.jsx)(Re.a,{className:e.navitems,children:Object(r.jsx)(Je.a,{})}),Object(r.jsx)(Ye.a,{primary:"About",className:e.navitems})]})}),Object(r.jsx)(i.b,{to:"/contact",activeClassName:e.active,className:e.link,children:Object(r.jsxs)(Fe.a,{className:e.listLink,children:[Object(r.jsx)(Re.a,{className:e.navitems,children:Object(r.jsx)(Ke.a,{})}),Object(r.jsx)(Ye.a,{primary:"contact",className:e.navitems})]})}),Object(r.jsx)(m.a,{}),Object(r.jsx)(i.b,{to:"/test",activeClassName:e.active,className:e.link,children:Object(r.jsxs)(Fe.a,{className:e.listLink,children:[Object(r.jsx)(Re.a,{className:e.navitems,children:Object(r.jsx)(Xe.a,{})}),Object(r.jsx)(Ye.a,{primary:"Test",className:e.navitems})]})})]})]})};return Object(r.jsx)("div",{className:e.root,children:Object(r.jsx)(Le.a,{position:"static",className:e.appBar,children:Object(r.jsxs)(qe.a,{children:[["left"].map((function(t){return Object(r.jsxs)(c.a.Fragment,{children:[Object(r.jsx)(ke.a,{onClick:o(t,!0),children:Object(r.jsx)(Pe.a,{className:e.button})}),Object(r.jsx)(Ie.a,{anchor:t,open:n[t],onClose:o(t,!1),children:l(t)})]},t)})),Object(r.jsx)(h.a,{variant:"h6",className:e.title,children:"Dashboard"})]})})})};o.a.render(Object(r.jsxs)(i.a,{children:[Object(r.jsx)(et,{}),Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{exact:!0,path:"/",children:Object(r.jsx)(x,{})}),Object(r.jsx)(l.a,{path:"/earthquake",children:Object(r.jsx)(se,{})}),Object(r.jsx)(l.a,{path:"/covid",children:Object(r.jsx)(ge,{})}),Object(r.jsx)(l.a,{path:"/about",children:Object(r.jsx)(ye,{})}),Object(r.jsx)(l.a,{path:"/contact",children:Object(r.jsx)(De,{})}),Object(r.jsx)(l.a,{path:"/test",children:Object(r.jsx)(Me,{})})]})]}),document.getElementById("root"))}},[[287,1,2]]]);
//# sourceMappingURL=main.3991012c.chunk.js.map