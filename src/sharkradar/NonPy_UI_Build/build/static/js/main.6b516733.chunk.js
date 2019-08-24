(window.webpackJsonpdashboard=window.webpackJsonpdashboard||[]).push([[0],{207:function(e,a,t){e.exports=t(393)},393:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),s=t.n(l),o=t(19),c=t.n(o),i={colorPrimary:"#eb7070",colorSecondary:"#222831",colorTertiary:"#393e46",colorBackground:"#eeeeee",colorGreen:"green"},m=t(6),d=t(82),p=c()(function(e){return{body:{background:e.colorTertiary,position:"relative",top:"0px",left:"0px",width:"100%"},headerRow:{display:"flex",justifyContent:"space-between",padding:"20px"},brandName:{color:e.colorPrimary,fontSize:"24px",fontWeight:"bold"},documentation:{color:e.colorPrimary,fontSize:"24px",fontWeight:"bold",border:"solid",borderColor:e.colorPrimary,borderWidth:"1px",borderRadius:"2px",padding:"5px","& a":{color:e.colorPrimary}}}})(function(e){e.children;var a=e.classes;Object(m.a)(e,["children","classes"]);return r.a.createElement("div",{className:a.body},r.a.createElement("div",{className:a.headerRow},r.a.createElement("span",{className:a.brandName},"Sharkradar ",r.a.createElement("small",null,r.a.createElement("em",null,"[Service Registry and Discovery]"))," Dashboard "),r.a.createElement("span",{className:a.documentation},r.a.createElement("a",{href:"https://bmonikraj.github.io/sharkradar"},"Documentation ",r.a.createElement(d.b,null)))))}),u=c()(function(e){return{body:{background:e.colorTertiary,position:"fixed",bottom:"0px",left:"0px",width:"100%"},contentMessage:{color:e.colorPrimary,fontSize:"16px",fontWeight:"bold",textAlign:"center"},contentVersion:{color:e.colorPrimary,fontSize:"14px",fontWeight:"normal",textAlign:"center"},hyperlink:{color:e.colorPrimary}}})(function(e){e.children;var a=e.classes;Object(m.a)(e,["children","classes"]);return r.a.createElement("div",{className:a.body},r.a.createElement("p",{className:a.contentMessage},r.a.createElement("em",null,'"Sharkradar"')," is an Open Source project hosted on ",r.a.createElement("a",{className:a.hyperlink,href:"https://bmonikraj.github.com/sharkradar"},"Github ",r.a.createElement(d.a,null))," ",r.a.createElement("span",{className:a.contentVersion},"[Current Version : v1.1.3]")))}),h=t(46),E=(t(135),t(40)),w=t(18),b=t(48),f=t(49),v=t(21),g=t(52),y=t(174),N=t.n(y),x=t(118),k=t(117),S=t.n(k),_=t(175),j=function(e){function a(e){var t;return Object(E.a)(this,a),(t=Object(b.a)(this,Object(f.a)(a).call(this,e))).handleChange=function(){t.setState({switch:!t.state.switch})},t.state={switch:!0,timestamp:(new Date).toUTCString(),data:[],downloadData:[]},t.updateTimeStamp=t.updateTimeStamp.bind(Object(v.a)(t)),t.downloadFullData=t.downloadFullData.bind(Object(v.a)(t)),t}return Object(g.a)(a,e),Object(w.a)(a,[{key:"updateTimeStamp",value:function(){if(this.state.switch){var e=this,a=(new Date).toUTCString();this.setState({timestamp:a});S.a.get(this.props.dataURL+"/50").then(function(a){e.setState({data:a.data})}).catch(function(e){console.log(e),alert("Error while fetching data 1")})}}},{key:"downloadFullData",value:function(){var e=this,a=prompt("How many latest records you want to fetch ? ","250");null!=a&&S.a.get(this.props.dataURL+"/"+a).then(function(a){e.setState({downloadData:a.data})}).catch(function(e){alert("Error while fetching data")})}},{key:"componentDidMount",value:function(){setInterval(this.updateTimeStamp,5e3)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:this.props.classes.body},r.a.createElement("div",{className:this.props.classes.statusRow},r.a.createElement("div",{className:this.props.classes.timeStamp},"Data as of ",r.a.createElement("span",{className:this.props.classes.boldtext}," ",this.state.timestamp," ")),r.a.createElement("div",{className:this.props.classes.download},r.a.createElement("div",{className:this.props.classes.downloadIcon},this.props.downloadFullData&&r.a.createElement(x.a,{onClick:this.downloadFullData})),r.a.createElement("div",{className:this.props.classes.downloadIcon},this.props.downloadFullData&&r.a.createElement(_.CSVLink,{filename:"sharkaradar-"+this.state.timestamp+"-data.csv",data:this.state.downloadData,separator:","},r.a.createElement(x.b,null))),"."),r.a.createElement("div",{className:this.props.classes.switch},"Fetch data from Server every ",r.a.createElement("span",{className:this.props.classes.boldtext},"5 seconds")," : ",r.a.createElement(N.a,{onChange:this.handleChange,checked:this.state.switch}))),r.a.createElement("div",{className:this.props.classes.data},r.a.cloneElement(this.props.children,{rowdata:this.state.data}))))}}]),a}(r.a.Component),R=c()(function(e){return{body:{background:e.colorBackground,padding:"2px"},statusRow:{display:"flex",justifyContent:"space-between",marginBottom:"20px",marginTop:"10px"},download:{display:"flex",justifyContent:"space-between"},downloadIcon:{paddingLeft:"5px",paddingRight:"5px",cursor:"pointer",color:e.colorPrimary,"& a":{color:e.colorPrimary}},timeStamp:{color:e.colorTertiary},switch:{color:e.colorTertiary,marginTop:"-15px"},boldtext:{fontWeight:"bold"},data:{}}})(j),O=t(10),P=t(33),T=t(435),C=function(e){function a(e){var t;return Object(E.a)(this,a),(t=Object(b.a)(this,Object(f.a)(a).call(this,e))).state={rowdata:t.props.rowdata},t}return Object(g.a)(a,e),Object(w.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(T.a,null,r.a.createElement(P.a,{rows:this.state.rowdata,columns:[{name:"service_name",title:"Name"},{name:"ip",title:"IP Address"},{name:"port",title:"Port"},{name:"timestamp",title:"Timestamp"},{name:"status",title:"Status"},{name:"retry_id",title:"Retry ID"}]},r.a.createElement(O.i,{defaultCurrentPage:0,pageSize:5}),r.a.createElement(O.g,null),r.a.createElement(O.c,{defaultFilters:[]}),r.a.createElement(O.f,null),r.a.createElement(P.c,null),r.a.createElement(P.d,{defaultColumnWidths:[{columnName:"service_name",width:200},{columnName:"ip",width:200},{columnName:"port",width:200},{columnName:"status",width:200},{columnName:"timestamp",width:200},{columnName:"retry_id",width:200}]}),r.a.createElement(P.f,null),r.a.createElement(P.b,null),r.a.createElement(P.e,null)))))}},{key:"componentWillReceiveProps",value:function(e){this.props.rowdata!==e.rowdata&&this.setState({rowdata:e.rowdata})}}]),a}(r.a.Component),D=c()(function(e){return{}})(C),W=function(e){function a(e){var t;return Object(E.a)(this,a),(t=Object(b.a)(this,Object(f.a)(a).call(this,e))).state={rowdata:t.props.rowdata},t}return Object(g.a)(a,e),Object(w.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(T.a,null,r.a.createElement(P.a,{rows:this.state.rowdata,columns:[{name:"service_name",title:"Name"},{name:"ip",title:"IP Address"},{name:"port",title:"Port"},{name:"mem_usage",title:"Mem Usage (%)"},{name:"cpu_usage",title:"CPU Usage (%)"},{name:"nw_tput_bw_ratio",title:"N/W TP B/W Ratio (%)"},{name:"req_active_ratio",title:"Active Request Ratio (%)"},{name:"success_rate",title:"Success Rate (%)"},{name:"timestamp",title:"Timestamp"},{name:"health_interval",title:"Health Interval (s)"}]},r.a.createElement(O.i,{defaultCurrentPage:0,pageSize:5}),r.a.createElement(O.g,null),r.a.createElement(O.c,{defaultFilters:[]}),r.a.createElement(O.f,null),r.a.createElement(P.c,null),r.a.createElement(P.d,{defaultColumnWidths:[{columnName:"service_name",width:100},{columnName:"ip",width:100},{columnName:"port",width:100},{columnName:"mem_usage",width:100},{columnName:"cpu_usage",width:100},{columnName:"nw_tput_bw_ratio",width:100},{columnName:"req_active_ratio",width:100},{columnName:"success_rate",width:100},{columnName:"timestamp",width:100},{columnName:"health_interval",width:100}]}),r.a.createElement(P.f,null),r.a.createElement(P.b,null),r.a.createElement(P.e,null)))))}},{key:"componentWillReceiveProps",value:function(e){this.props.rowdata!==e.rowdata&&this.setState({rowdata:e.rowdata})}}]),a}(r.a.Component),F=c()(function(e){return{}})(W),U=t(436),B=(t(280),function(e){function a(e){var t;return Object(E.a)(this,a),(t=Object(b.a)(this,Object(f.a)(a).call(this,e))).state={rowdata:t.props.rowdata},t}return Object(g.a)(a,e),Object(w.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:this.props.classes.body},r.a.createElement(U.a.Group,null,this.state.rowdata.map(function(a,t){return r.a.createElement(U.a,null,r.a.createElement(U.a.Content,{extra:!0,className:e.props.classes.header},a.service_name),r.a.createElement(U.a.Content,{extra:!0,className:e.props.classes.hostaddr},a.ip+":"+a.port),r.a.createElement(U.a.Content,{extra:!0},r.a.createElement("div",{className:e.props.classes.row},r.a.createElement("div",{className:e.props.classes.column},r.a.createElement("p",{className:e.props.classes.dataRow},r.a.createElement("span",{className:e.props.classes.dataKey},"Mem Usage (%) -")," ",r.a.createElement("span",{className:e.props.classes.dataValue},a.mem_usage)),r.a.createElement("p",{className:e.props.classes.dataRow},r.a.createElement("span",{className:e.props.classes.dataKey},"CPU Usage (%) -")," ",r.a.createElement("span",{className:e.props.classes.dataValue},a.cpu_usage)),r.a.createElement("p",{className:e.props.classes.dataRow},r.a.createElement("span",{className:e.props.classes.dataKey},"NW TP BW ratio (%) -")," ",r.a.createElement("span",{className:e.props.classes.dataValue},a.nw_tput_bw_ratio))),r.a.createElement("div",{className:e.props.classes.column},r.a.createElement("p",{className:e.props.classes.dataRow},r.a.createElement("span",{className:e.props.classes.dataKey},"Active Request Ratio (%) -")," ",r.a.createElement("span",{className:e.props.classes.dataValue},a.req_active_ratio)),r.a.createElement("p",{className:e.props.classes.dataRow},r.a.createElement("span",{className:e.props.classes.dataKey},"Success Rate (%) -")," ",r.a.createElement("span",{className:e.props.classes.dataValue},a.success_rate)),r.a.createElement("p",{className:e.props.classes.dataRow},r.a.createElement("span",{className:e.props.classes.dataKey},"Health Interval (s) -")," ",r.a.createElement("span",{className:e.props.classes.dataValue},a.health_interval))))))}))))}},{key:"componentWillReceiveProps",value:function(e){this.props.rowdata!==e.rowdata&&this.setState({rowdata:e.rowdata})}}]),a}(r.a.Component)),V=c()(function(e){return{body:{paddingBottom:"30px"},row:{display:"flex"},column:{flex:"50%"},hostaddr:{color:e.colorPrimary+"!important",fontWeight:"bold"},header:{color:e.colorGreen+"!important",fontWeight:"bold",fontSize:"18px!important"},dataKey:{fontStyle:"italic!important",color:e.colorTertiary+"!important"},dataValue:{fontWeight:"bold!important",color:e.colorPrimary+"!important"},dataRow:{paddingBottom:"1px",paddinTop:"1px",fontSize:"10px!important"}}})(B),I=c()(function(e){return{body:{background:e.colorBackground,margin:"5px"},tabTitle:{color:e.colorSecondary,textTransform:"uppercase",fontStyle:"oblique"}}})(function(e){e.children;var a=e.classes;Object(m.a)(e,["children","classes"]);return r.a.createElement("div",{className:a.body},r.a.createElement(h.d,null,r.a.createElement(h.b,null,r.a.createElement(h.a,null,r.a.createElement("span",{className:a.tabTitle},"Real Time Monitor")),r.a.createElement(h.a,null,r.a.createElement("span",{className:a.tabTitle},"Service Monitor Logs")),r.a.createElement(h.a,null,r.a.createElement("span",{className:a.tabTitle},"Discovery Monitor Logs"))),r.a.createElement(h.c,null,r.a.createElement(R,{children:r.a.createElement(V,null),downloadFullData:!1,dataURL:"/monitor-real-time/current"})),r.a.createElement(h.c,null,r.a.createElement(R,{children:r.a.createElement(F,null),downloadFullData:!0,dataURL:"/monitor-real-time/service"})),r.a.createElement(h.c,null,r.a.createElement(R,{children:r.a.createElement(D,null),downloadFullData:!0,dataURL:"/monitor-real-time/discovery"}))))}),L=c()(function(e){return{background:{background:e.colorBackground}}})(function(e){e.children;var a=e.classes;Object(m.a)(e,["children","classes"]);return r.a.createElement("div",{className:a.background},r.a.createElement(p,null),r.a.createElement(I,null),r.a.createElement(u,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(function(){return r.a.createElement(o.ThemeProvider,{theme:i},r.a.createElement(L,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[207,1,2]]]);
//# sourceMappingURL=main.6b516733.chunk.js.map