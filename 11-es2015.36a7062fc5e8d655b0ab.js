(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"1xOk":function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var i=a("1rLY"),o=(a("tCLk"),a("Ub9n"));a("owBi");let d=(()=>{class t{}return t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({factory:function(e){return new(e||t)},imports:[[i.j,i.e],i.e]}),t})()},"5+U5":function(t,e,a){"use strict";a.r(e),a.d(e,"DashboardModule",(function(){return $}));var i=a("frK+"),o=a("NUqc"),d=a("Yvnh"),s=a.n(d),n=a("ZWVR"),b=a.n(n),r=a("fBc7"),l=a.n(r),c=a("CRri"),u=a.n(c),v=a("Ub9n"),p=a("k+iJ"),h=a("dPOq"),S=a("y0Cw"),m=a("VZx1"),g=a("tYJx"),R=a("4M9/"),y=a("yFoz"),f=a("ffY4"),C=a("Cj2L"),w=a("Yvf7"),K=a("NcHL");const N=["fullCalendar"];function x(t,e){1&t&&(v.Sb(0,"tr"),v.Sb(1,"th",82),v.Kc(2,"ID "),v.Nb(3,"p-sortIcon",83),v.Rb(),v.Sb(4,"th",84),v.Kc(5,"Category "),v.Nb(6,"p-sortIcon",85),v.Rb(),v.Sb(7,"th",86),v.Kc(8,"Price "),v.Nb(9,"p-sortIcon",87),v.Rb(),v.Sb(10,"th",88),v.Kc(11,"Status "),v.Nb(12,"p-sortIcon",89),v.Rb(),v.Nb(13,"th"),v.Rb())}function k(t,e){if(1&t&&(v.Sb(0,"tr"),v.Sb(1,"td"),v.Kc(2),v.Rb(),v.Sb(3,"td"),v.Kc(4),v.Rb(),v.Sb(5,"td"),v.Kc(6),v.fc(7,"currency"),v.Rb(),v.Sb(8,"td"),v.Sb(9,"span"),v.Kc(10),v.Rb(),v.Rb(),v.Sb(11,"td",90),v.Nb(12,"button",91),v.Rb(),v.Rb()),2&t){const t=e.$implicit;v.zb(2),v.Lc(t.id),v.zb(2),v.Lc(t.category),v.zb(2),v.Lc(v.hc(7,6,t.price,"USD")),v.zb(3),v.Bb("product-badge status-"+t.inventoryStatus.toLowerCase()),v.zb(1),v.Lc(t.inventoryStatus)}}const D=function(){return{"min-width":"8rem"}};let A=(()=>{class t{constructor(t,e,a,i,o){this.primengConfig=t,this.apiService=e,this.productss=a,this.breadcrumbService=i,this.position=o,this.value6=60,this.dateToday=new Date,this.teams=new Array,this.years=new Array,this.grossAmount=0,this.totalExpense=0,this.totalBalance=0,this.breadcrumbService.setItems([{label:"Dashboard",routerLink:["/"]}]),this.productss.getProducts().then(t=>{this.products=t})}gotoDate(t){this.fullCalendar.getCalendar().gotoDate(t)}generateYears(){this.year=this.dateToday.getFullYear();const t=[];let e=this.dateToday.getFullYear(),a=e-3;for(;e>=a;)t.push(e),e--;this.years=t}getByYear(t){var e;this.year=null==t?void 0:t.value,this.loadDashboardStartGraphicsPeriods(null===(e=this.company)||void 0===e?void 0:e.id)}loadDashboardStartGraphicsPeriods(t){this.totalExpense=0,this.totalBalance=0,this.grossAmount=0,this.apiService.getById(`${i.a.DASHBOARD_START}/graphics-periods/${t}`,{year:this.year}).subscribe(t=>{var e,a,i,d,s,n,b,r,l,c;this.basicData={labels:o.a.monthNames,datasets:[{label:"Despesa",backgroundColor:"#d2002f",data:[0,0,0,0,0,0,0,0,0,0,0,0]},{label:"L\xedquido",backgroundColor:"#63b7ac",data:[0,0,0,0,0,0,0,0,0,0,0,0]}]},this.basicDataJustExpense={labels:o.a.monthNames,datasets:[{label:"Despesa",backgroundColor:"#d2002f",data:[0,0,0,0,0,0,0,0,0,0,0,0]}]},this.basicDataJustOperations={labels:o.a.monthNames,datasets:[{label:"L\xedquido",backgroundColor:"#63b7ac",data:[0,0,0,0,0,0,0,0,0,0,0,0]}]};const u=(t,e)=>t+e;(null===(e=null==t?void 0:t.expenses)||void 0===e?void 0:e.length)&&(this.totalExpense=null===(i=null===(a=null==t?void 0:t.expenses)||void 0===a?void 0:a.map(t=>t.amount))||void 0===i?void 0:i.reduce(u)),(null===(d=null==t?void 0:t.operations)||void 0===d?void 0:d.length)&&(this.totalBalance=null===(n=null===(s=null==t?void 0:t.operations)||void 0===s?void 0:s.map(t=>t.amount))||void 0===n?void 0:n.reduce(u),this.grossAmount=null===(r=null===(b=null==t?void 0:t.operations)||void 0===b?void 0:b.map(t=>t.grossAmount))||void 0===r?void 0:r.reduce(u));for(let o=0;o<(null===(l=null==t?void 0:t.expenses)||void 0===l?void 0:l.length);o++){const e=null==t?void 0:t.expenses[o],a=(null==e?void 0:e.month)-1;this.basicData.datasets[0].data[a]=null==e?void 0:e.amount,this.basicDataJustExpense.datasets[0].data[a]=null==e?void 0:e.amount}for(let o=0;o<(null===(c=null==t?void 0:t.operations)||void 0===c?void 0:c.length);o++){const e=null==t?void 0:t.operations[o],a=(null==e?void 0:e.month)-1;this.basicData.datasets[1].data[(null==e?void 0:e.month)-1]=null==e?void 0:e.amount,this.basicDataJustOperations.datasets[0].data[a]=null==e?void 0:e.amount}})}loadDashboardStart(t){this.apiService.getById(`${i.a.DASHBOARD_START}/${t}`).subscribe(t=>{var e,a,i,o,d,s,n,b,r,l,c,u,v,p,h,S,m,g,R,y,f,C,w,K,N,x;try{if(this.data=t,this.revenueChart={labels:["Despesa: ","L\xedquido: ","Economizado: ","Margem: "],datasets:[{data:[null===(e=this.data)||void 0===e?void 0:e.expensePercentage.toFixed(2),null===(a=this.data)||void 0===a?void 0:a.balancePercentage.toFixed(2),null===(i=this.data)||void 0===i?void 0:i.discountPercentage.toFixed(2),null===(o=this.data)||void 0===o?void 0:o.marginNegotiatedPercentage.toFixed(2)],backgroundColor:["#7986CB","#4DB6AC","#79e21e","#f7e500"]}]},this.revenueChart.labels[0]=`${this.revenueChart.labels[0]} ${this.calculateValueByPercent(100*(null===(d=this.data)||void 0===d?void 0:d.expenseTotalAmount)/(null===(s=this.data)||void 0===s?void 0:s.totalAmount),null===(n=this.data)||void 0===n?void 0:n.totalAmount)}`,this.revenueChart.labels[1]=`${this.revenueChart.labels[1]} ${this.calculateValueByPercent(100*(null===(b=this.data)||void 0===b?void 0:b.balance)/(null===(r=this.data)||void 0===r?void 0:r.totalAmount),null===(l=this.data)||void 0===l?void 0:l.totalAmount)}`,this.revenueChart.labels[2]=`${this.revenueChart.labels[2]} ${this.calculateValueByPercent(100*(null===(c=this.data)||void 0===c?void 0:c.discountTotalAmount)/(null===(u=this.data)||void 0===u?void 0:u.totalAmount),null===(v=this.data)||void 0===v?void 0:v.totalAmount)}`,this.revenueChart.labels[3]=`${this.revenueChart.labels[3]} ${this.calculateValueByPercent(100*(null===(p=this.data)||void 0===p?void 0:p.marginNegotiated)/(null===(h=this.data)||void 0===h?void 0:h.totalAmount),null===(S=this.data)||void 0===S?void 0:S.totalAmount)}`,this.revenueChart2={labels:[],datasets:[{data:[],backgroundColor:[]}]},this.revenueChart3={labels:[],datasets:[{data:[],backgroundColor:[]}]},this.options2={title:{display:!1,text:"",fontSize:16},tooltips:{callbacks:{title:function(t,e){return e.labels[t[0].index]},label:function(t,e){return`  ${e.datasets[0].data[t.index]}%`}}},legend:{position:"bottom",hover:!1}},(null===(m=this.data)||void 0===m?void 0:m.expensesGroup.length)>0){const t=(null===(R=null===(g=this.data)||void 0===g?void 0:g.expensesGroup)||void 0===R?void 0:R.map(t=>+(null==t?void 0:t.description))).reduce((t,e)=>t+e);null===(f=null===(y=this.data)||void 0===y?void 0:y.expensesGroup)||void 0===f||f.filter(e=>{var a;let i=100*+(null==e?void 0:e.description)/t;null===(a=this.revenueChart2.labels)||void 0===a||a.push(`${null==e?void 0:e.title}: ${this.calculateValueByPercent(i,this.data.expenseTotalAmount)}`),this.revenueChart2.datasets[0].data.push(i.toFixed(2)),this.revenueChart2.datasets[0].backgroundColor.push(this.getRandomColor())})}if((null===(C=this.data)||void 0===C?void 0:C.discountExpenses.length)>0){const t=(null===(K=null===(w=this.data)||void 0===w?void 0:w.discountExpenses)||void 0===K?void 0:K.map(t=>+(null==t?void 0:t.description))).reduce((t,e)=>t+e);null===(x=null===(N=this.data)||void 0===N?void 0:N.discountExpenses)||void 0===x||x.filter(e=>{var a;let i=100*+(null==e?void 0:e.description)/t;null===(a=this.revenueChart3.labels)||void 0===a||a.push(`${null==e?void 0:e.title}: ${this.calculateValueByPercent(i,this.data.discountTotalAmount)}`),this.revenueChart3.datasets[0].data.push(i.toFixed(2)),this.revenueChart3.datasets[0].backgroundColor.push(this.getRandomColor())})}}catch(k){}})}getRandomColor(){for(var t="#",e=0;e<6;e++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t}loadteams(){this.apiService.get(i.a.TEAM+"/all",{}).subscribe(t=>{var e,a;this.teams=t,this.company=this.teams.find(t=>{var e;return(null==t?void 0:t.id)==(null===(e=this.apiService.myStorage.get())||void 0===e?void 0:e.teamId)}),this.loadDashboardStart(null===(e=this.company)||void 0===e?void 0:e.id),this.loadDashboardStartGraphicsPeriods(null===(a=this.company)||void 0===a?void 0:a.id)})}calculateValueByPercent(t,e){var a;return null===(a=t*e/100)||void 0===a?void 0:a.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}handleDateClick(t){console.log("teste")}ngOnInit(){this.apiService.get(i.a.EVENT+"/filters?active=true&page=0&size=999",{}).subscribe(t=>{const e=[];console.log(t),t.elements.forEach(t=>{console.log(t),e.push({id:t.id,title:`${t.typeName}, ${t.title}`,start:t.alertDay})}),this.events=e}),this.options={plugins:[s.a,b.a,l.a],defaultDate:(new Date).toISOString(),locale:u.a,header:{left:"prev,next,today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay"},dayMaxEvents:!0,editable:!1,dateClick:t=>{console.log(t)},eventClick:function(t){var e;console.log(null===(e=t.event)||void 0===e?void 0:e._def),t.jsEvent.preventDefault(),t.event.url&&window.open(t.event.url)}},this.primengConfig.setTranslation(o.a)}selectCompany(){var t,e;this.loadDashboardStart(null===(t=this.company)||void 0===t?void 0:t.id),this.loadDashboardStartGraphicsPeriods(null===(e=this.company)||void 0===e?void 0:e.id)}ngAfterViewInit(){}ngOnDestroy(){}}return t.\u0275fac=function(e){return new(e||t)(v.Lb(p.k),v.Lb(h.a),v.Lb(S.a),v.Lb(m.a),v.Lb(g.a))},t.\u0275cmp=v.Fb({type:t,selectors:[["app-dashboard"]],viewQuery:function(t,e){var a;1&t&&v.Oc(N,!0),2&t&&v.xc(a=v.bc())&&(e.fullCalendar=a.first)},decls:289,vars:11,consts:[[1,"layout-dashboard"],[1,"p-grid"],[1,"p-col-12","p-md-6","p-xl-3"],[1,"card","no-gutter","widget-overview-box","widget-overview-box-1"],[1,"overview-icon"],[1,"pi","pi-shopping-cart"],[1,"overview-title"],[1,"p-grid","overview-detail"],[1,"p-col-6"],[1,"overview-number"],[1,"overview-subtext"],[1,"card","no-gutter","widget-overview-box","widget-overview-box-2"],[1,"pi","pi-dollar"],[1,"card","no-gutter","widget-overview-box","widget-overview-box-3"],[1,"pi","pi-users"],[1,"card","no-gutter","widget-overview-box","widget-overview-box-4"],[1,"pi","pi-comment"],[1,"p-col-12","p-xl-6"],[1,"card","no-gutter","orders"],[1,"card-header"],[3,"popup","model"],["menu",""],["pButton","","type","button","id","orders-button","icon","pi pi-search",1,"p-button-text","p-button-secondary",3,"click"],[1,"p-col-12"],["id","order-tabs-container",1,"p-grid","order-tabs"],["data-label","New Orders","data-index","0","data-stroke","#BBDEFB","data-fill","rgba(100, 181, 246, 0.2)",1,"order-tab","order-tab-new","p-col-6","p-md-3"],[1,"pi","pi-plus-circle"],[1,"order-label"],[1,"stat-detail-icon","icon-arrow-right-circle"],["src","assets/demo/images/dashboard/graph-new.svg","alt","diamond-ng"],["data-label","Completed Orders","data-index","1","data-stroke","#C5CAE9","data-fill","rgba(121, 134, 203, 0.2)",1,"order-tab","order-tab-completed","p-col-6","p-md-3"],[1,"pi","pi-check-circle"],["src","assets/demo/images/dashboard/graph-completed.svg","alt","diamond-ng"],["data-label","Refunded Orders","data-index","2","data-stroke","#B2DFDB","data-fill","rgba(224, 242, 241, 0.5)",1,"order-tab","order-tab-refunded","p-col-6","p-md-3"],[1,"pi","pi-refresh"],["src","assets/demo/images/dashboard/graph-refunded.svg","alt","diamond-ng"],["data-label","Cancelled Orders","data-index","3","data-stroke","#B2EBF2","data-fill","rgba(224, 247, 250, 0.5)",1,"order-tab","order-tab-cancelled","p-col-6","p-md-3"],[1,"pi","pi-times-circle"],["src","assets/demo/images/dashboard/graph-cancelled.svg","alt","diamond-ng"],[1,"overview-chart"],["type","line","id","order-chart",3,"data","options"],["chart",""],[1,"card"],["optionLabel","name","styleClass","dashbard-demo-dropdown",3,"options","ngStyle"],[3,"value","paginator","rows"],["pTemplate","header"],["pTemplate","body"],[1,"p-col-12","p-lg-4"],[1,"card","widget-tasks"],[1,"task","task-1"],[1,"task-name"],[1,"task-progress"],[1,"task","task-2"],[1,"task","task-3"],[1,"task","task-4"],[1,"task","task-5"],[1,"widget-image-list"],["src","assets/demo/images/product/bamboo-watch.jpg","alt","diamond-layout"],[1,"listitem-value"],["src","assets/demo/images/product/blue-band.jpg","alt","diamond-layout"],["src","assets/demo/images/product/game-controller.jpg","alt","diamond-layout"],["src","assets/demo/images/product/lime-band.jpg","alt","diamond-layout"],["src","assets/demo/images/product/gold-phone-case.jpg","alt","diamond-layout"],["src","assets/demo/images/product/green-t-shirt.jpg","alt","diamond-layout"],["src","assets/demo/images/product/purple-t-shirt.jpg","alt","diamond-layout"],[1,"p-col-12","p-lg-8"],[1,"card","revenue"],[1,"revenue-chart-container"],["type","pie","id","revenue-chart",3,"data"],[1,"widget-person-list"],[1,"person-item"],["src","assets/demo/images/avatar/amyelsner.png","alt","diamond-layout"],[1,"person-info"],[1,"person-name"],[1,"person-subtext"],[1,"person-actions"],["pButton","","type","button","icon","pi pi-envelope",1,"p-button-rounded","p-button-success"],["pButton","","type","button","icon","pi pi-cog",1,"p-button-rounded","p-button-warning"],["src","assets/demo/images/avatar/annafali.png","alt","diamond-layout"],["src","assets/demo/images/avatar/bernardodominic.png","alt","diamond-layout"],["src","assets/demo/images/avatar/ivanmagalhaes.png","alt","diamond-layout"],["src","assets/demo/images/avatar/xuxuefeng.png","alt","diamond-layout"],["pSortableColumn","id"],["field","id"],["pSortableColumn","category"],["field","category"],["pSortableColumn","price"],["field","price"],["pSortableColumn","inventoryStatus"],["field","inventoryStatus"],[2,"text-align","center"],["pButton","","type","button","icon","pi pi-search"]],template:function(t,e){if(1&t){const t=v.Ub();v.Sb(0,"div",0),v.Sb(1,"div",1),v.Sb(2,"div",2),v.Sb(3,"div",3),v.Sb(4,"span",4),v.Nb(5,"i",5),v.Rb(),v.Sb(6,"span",6),v.Kc(7,"Orders"),v.Rb(),v.Sb(8,"div",7),v.Sb(9,"div",8),v.Sb(10,"div",9),v.Kc(11,"640"),v.Rb(),v.Sb(12,"div",10),v.Kc(13,"Pending"),v.Rb(),v.Rb(),v.Sb(14,"div",8),v.Sb(15,"div",9),v.Kc(16,"1420"),v.Rb(),v.Sb(17,"div",10),v.Kc(18,"Completed"),v.Rb(),v.Rb(),v.Rb(),v.Rb(),v.Rb(),v.Sb(19,"div",2),v.Sb(20,"div",11),v.Sb(21,"span",4),v.Nb(22,"i",12),v.Rb(),v.Sb(23,"span",6),v.Kc(24,"Revenue"),v.Rb(),v.Sb(25,"div",7),v.Sb(26,"div",8),v.Sb(27,"div",9),v.Kc(28,"$2,100"),v.Rb(),v.Sb(29,"div",10),v.Kc(30,"Expenses"),v.Rb(),v.Rb(),v.Sb(31,"div",8),v.Sb(32,"div",9),v.Kc(33,"$9,640"),v.Rb(),v.Sb(34,"div",10),v.Kc(35,"Income"),v.Rb(),v.Rb(),v.Rb(),v.Rb(),v.Rb(),v.Sb(36,"div",2),v.Sb(37,"div",13),v.Sb(38,"span",4),v.Nb(39,"i",14),v.Rb(),v.Sb(40,"span",6),v.Kc(41,"Customers"),v.Rb(),v.Sb(42,"div",7),v.Sb(43,"div",8),v.Sb(44,"div",9),v.Kc(45,"8272"),v.Rb(),v.Sb(46,"div",10),v.Kc(47,"Active"),v.Rb(),v.Rb(),v.Sb(48,"div",8),v.Sb(49,"div",9),v.Kc(50,"25402"),v.Rb(),v.Sb(51,"div",10),v.Kc(52,"Registered"),v.Rb(),v.Rb(),v.Rb(),v.Rb(),v.Rb(),v.Sb(53,"div",2),v.Sb(54,"div",15),v.Sb(55,"span",4),v.Nb(56,"i",16),v.Rb(),v.Sb(57,"span",6),v.Kc(58,"Comments"),v.Rb(),v.Sb(59,"div",7),v.Sb(60,"div",8),v.Sb(61,"div",9),v.Kc(62,"12"),v.Rb(),v.Sb(63,"div",10),v.Kc(64,"New"),v.Rb(),v.Rb(),v.Sb(65,"div",8),v.Sb(66,"div",9),v.Kc(67,"85"),v.Rb(),v.Sb(68,"div",10),v.Kc(69,"Responded"),v.Rb(),v.Rb(),v.Rb(),v.Rb(),v.Rb(),v.Sb(70,"div",17),v.Sb(71,"div",18),v.Sb(72,"div",19),v.Sb(73,"h4"),v.Kc(74,"Orders"),v.Rb(),v.Nb(75,"p-menu",20,21),v.Sb(77,"button",22),v.ac("click",(function(e){return v.zc(t),v.yc(76).toggle(e)})),v.Rb(),v.Rb(),v.Sb(78,"div",1),v.Sb(79,"div",23),v.Sb(80,"div",24),v.Sb(81,"div",25),v.Nb(82,"i",26),v.Sb(83,"span",27),v.Kc(84,"New"),v.Rb(),v.Nb(85,"i",28),v.Nb(86,"img",29),v.Rb(),v.Sb(87,"div",30),v.Nb(88,"i",31),v.Sb(89,"span",27),v.Kc(90,"Completed"),v.Rb(),v.Nb(91,"i",28),v.Nb(92,"img",32),v.Rb(),v.Sb(93,"div",33),v.Nb(94,"i",34),v.Sb(95,"span",27),v.Kc(96,"Refunded"),v.Rb(),v.Nb(97,"i",28),v.Nb(98,"img",35),v.Rb(),v.Sb(99,"div",36),v.Nb(100,"i",37),v.Sb(101,"span",27),v.Kc(102,"Cancelled"),v.Rb(),v.Nb(103,"i",28),v.Nb(104,"img",38),v.Rb(),v.Rb(),v.Rb(),v.Sb(105,"div",23),v.Sb(106,"div",39),v.Nb(107,"p-chart",40,41),v.Rb(),v.Rb(),v.Rb(),v.Rb(),v.Rb(),v.Sb(109,"div",17),v.Sb(110,"div",42),v.Sb(111,"div",19),v.Sb(112,"h4"),v.Kc(113,"Recent Sales"),v.Rb(),v.Nb(114,"p-dropdown",43),v.Rb(),v.Sb(115,"p"),v.Kc(116,"Your sales activity over time."),v.Rb(),v.Sb(117,"p-table",44),v.Ic(118,x,14,0,"ng-template",45),v.Ic(119,k,13,9,"ng-template",46),v.Rb(),v.Rb(),v.Rb(),v.Sb(120,"div",47),v.Sb(121,"div",48),v.Sb(122,"h4"),v.Kc(123,"Tasks"),v.Rb(),v.Sb(124,"p"),v.Kc(125,"Overview of your pending tasks."),v.Rb(),v.Sb(126,"div"),v.Sb(127,"div",49),v.Sb(128,"div",50),v.Sb(129,"span"),v.Kc(130,"12 Orders"),v.Rb(),v.Kc(131," to fulfill"),v.Rb(),v.Sb(132,"div",51),v.Nb(133,"div"),v.Rb(),v.Rb(),v.Sb(134,"div",52),v.Sb(135,"div",50),v.Sb(136,"span"),v.Kc(137,"40+ Payments"),v.Rb(),v.Kc(138," to withdraw"),v.Rb(),v.Sb(139,"div",51),v.Nb(140,"div"),v.Rb(),v.Rb(),v.Sb(141,"div",53),v.Sb(142,"div",50),v.Sb(143,"span"),v.Kc(144,"4 Reports"),v.Rb(),v.Kc(145," to revise"),v.Rb(),v.Sb(146,"div",51),v.Nb(147,"div"),v.Rb(),v.Rb(),v.Sb(148,"div",54),v.Sb(149,"div",50),v.Sb(150,"span"),v.Kc(151,"6 Questions"),v.Rb(),v.Kc(152," to respond"),v.Rb(),v.Sb(153,"div",51),v.Nb(154,"div"),v.Rb(),v.Rb(),v.Sb(155,"div",55),v.Sb(156,"div",50),v.Sb(157,"span"),v.Kc(158,"2 Chargebacks"),v.Rb(),v.Kc(159," to review"),v.Rb(),v.Sb(160,"div",51),v.Nb(161,"div"),v.Rb(),v.Rb(),v.Rb(),v.Rb(),v.Sb(162,"div",42),v.Sb(163,"h4"),v.Kc(164,"Best Sellers"),v.Rb(),v.Sb(165,"p"),v.Kc(166,"Most popular products from your collection."),v.Rb(),v.Sb(167,"ul",56),v.Sb(168,"li"),v.Sb(169,"span"),v.Kc(170,"Product"),v.Rb(),v.Sb(171,"span"),v.Kc(172,"Sales"),v.Rb(),v.Rb(),v.Sb(173,"li"),v.Sb(174,"span"),v.Nb(175,"img",57),v.Sb(176,"span"),v.Kc(177,"Bamboo Watch"),v.Rb(),v.Rb(),v.Sb(178,"span",58),v.Kc(179,"82"),v.Rb(),v.Rb(),v.Sb(180,"li"),v.Sb(181,"span"),v.Nb(182,"img",59),v.Sb(183,"span"),v.Kc(184,"Blue Band"),v.Rb(),v.Rb(),v.Sb(185,"span",58),v.Kc(186,"75"),v.Rb(),v.Rb(),v.Sb(187,"li"),v.Sb(188,"span"),v.Nb(189,"img",60),v.Sb(190,"span"),v.Kc(191,"Game Controller"),v.Rb(),v.Rb(),v.Sb(192,"span",58),v.Kc(193,"64"),v.Rb(),v.Rb(),v.Sb(194,"li"),v.Sb(195,"span"),v.Nb(196,"img",61),v.Sb(197,"span"),v.Kc(198,"Lime Band"),v.Rb(),v.Rb(),v.Sb(199,"span",58),v.Kc(200,"62"),v.Rb(),v.Rb(),v.Sb(201,"li"),v.Sb(202,"span"),v.Nb(203,"img",62),v.Sb(204,"span"),v.Kc(205,"Phone Case"),v.Rb(),v.Rb(),v.Sb(206,"span",58),v.Kc(207,"55"),v.Rb(),v.Rb(),v.Sb(208,"li"),v.Sb(209,"span"),v.Nb(210,"img",63),v.Sb(211,"span"),v.Kc(212,"Green T-Shirt"),v.Rb(),v.Rb(),v.Sb(213,"span",58),v.Kc(214,"48"),v.Rb(),v.Rb(),v.Sb(215,"li"),v.Sb(216,"span"),v.Nb(217,"img",64),v.Sb(218,"span"),v.Kc(219,"Purple T-Shirt"),v.Rb(),v.Rb(),v.Sb(220,"span",58),v.Kc(221,"32"),v.Rb(),v.Rb(),v.Rb(),v.Rb(),v.Rb(),v.Sb(222,"div",65),v.Sb(223,"div",66),v.Sb(224,"h4"),v.Kc(225,"Revenue Stream"),v.Rb(),v.Sb(226,"p"),v.Kc(227,"Comparison of your revenue sources."),v.Rb(),v.Sb(228,"div",67),v.Nb(229,"p-chart",68),v.Rb(),v.Rb(),v.Sb(230,"div",42),v.Sb(231,"h4"),v.Kc(232,"Team Members"),v.Rb(),v.Sb(233,"ul",69),v.Sb(234,"li"),v.Sb(235,"div",70),v.Nb(236,"img",71),v.Sb(237,"div",72),v.Sb(238,"div",73),v.Kc(239,"Amy Elsner"),v.Rb(),v.Sb(240,"div",74),v.Kc(241,"Accounting"),v.Rb(),v.Rb(),v.Rb(),v.Sb(242,"div",75),v.Nb(243,"button",76),v.Nb(244,"button",77),v.Rb(),v.Rb(),v.Sb(245,"li"),v.Sb(246,"div",70),v.Nb(247,"img",78),v.Sb(248,"div",72),v.Sb(249,"div",73),v.Kc(250,"Anna Fali"),v.Rb(),v.Sb(251,"div",74),v.Kc(252,"Procurement"),v.Rb(),v.Rb(),v.Rb(),v.Sb(253,"div",75),v.Nb(254,"button",76),v.Nb(255,"button",77),v.Rb(),v.Rb(),v.Sb(256,"li"),v.Sb(257,"div",70),v.Nb(258,"img",79),v.Sb(259,"div",72),v.Sb(260,"div",73),v.Kc(261,"Bernardo Dominic"),v.Rb(),v.Sb(262,"div",74),v.Kc(263,"Finance"),v.Rb(),v.Rb(),v.Rb(),v.Sb(264,"div",75),v.Nb(265,"button",76),v.Nb(266,"button",77),v.Rb(),v.Rb(),v.Sb(267,"li"),v.Sb(268,"div",70),v.Nb(269,"img",80),v.Sb(270,"div",72),v.Sb(271,"div",73),v.Kc(272,"Ivan Magalhaes"),v.Rb(),v.Sb(273,"div",74),v.Kc(274,"Sales"),v.Rb(),v.Rb(),v.Rb(),v.Sb(275,"div",75),v.Nb(276,"button",76),v.Nb(277,"button",77),v.Rb(),v.Rb(),v.Sb(278,"li"),v.Sb(279,"div",70),v.Nb(280,"img",81),v.Sb(281,"div",72),v.Sb(282,"div",73),v.Kc(283,"Xuxue Feng"),v.Rb(),v.Sb(284,"div",74),v.Kc(285,"Management"),v.Rb(),v.Rb(),v.Rb(),v.Sb(286,"div",75),v.Nb(287,"button",76),v.Nb(288,"button",77),v.Rb(),v.Rb(),v.Rb(),v.Rb(),v.Rb(),v.Rb(),v.Rb()}2&t&&(v.zb(75),v.lc("popup",!0)("model",e.items),v.zb(32),v.lc("data",e.ordersChart)("options",e.ordersChartOptions),v.zb(7),v.lc("options",e.orderWeek)("ngStyle",v.oc(10,D)),v.zb(3),v.lc("value",e.products)("paginator",!0)("rows",5),v.zb(112),v.lc("data",e.revenueChart))},directives:[R.a,y.b,f.b,C.a,w.w,K.r,p.l,K.q,K.p],pipes:[w.d],styles:[".overview-number[_ngcontent-%COMP%]{font-size:16px}.widget-overview-box.widget-overview-box-4[_ngcontent-%COMP%]   .overview-icon[_ngcontent-%COMP%]{background:#e14d4d;color:#fff}.widget-overview-box.widget-overview-box-4[_ngcontent-%COMP%]   .overview-title[_ngcontent-%COMP%]{color:#e14d4d}.widget-overview-box.widget-overview-box-4[_ngcontent-%COMP%]{border-left-color:#e14d4d}"]}),t})();var B=a("Fk62");const P=[{path:"",component:A}];let O=(()=>{class t{}return t.\u0275mod=v.Jb({type:t}),t.\u0275inj=v.Ib({factory:function(e){return new(e||t)},imports:[[B.g.forChild(P)],B.g]}),t})();var L=a("8VHZ"),M=a("1xOk"),T=a("g6ej"),E=a("LLb3");let $=(()=>{class t{}return t.\u0275mod=v.Jb({type:t}),t.\u0275inj=v.Ib({factory:function(e){return new(e||t)},imports:[[L.k,w.c,O,f.a,C.b,R.b,K.u,M.a,y.c,T.b,E.b]]}),t})()},NUqc:function(t,e,a){"use strict";e.a={startsWith:"Come\xe7a com",contains:"Cont\xe9m",notContains:"N\xe3o Cont\xe9m",endsWith:"Termina com",equals:"\xc9 igual",notEquals:"Diferente",lt:"Menor que",lte:"Menor que ou igual a",gt:"Maior que",gte:"Maior que ou igual",is:"\xc9",isNot:"N\xe3o \xe9",before:"Antes",after:"Depois",clear:"Limpar",apply:"Aplicar",matchAll:"Combinar Tudo",matchAny:"Corresponder a qualquer",addRule:"Adicionar Regra",removeRule:"Remover Regra",accept:"Sim",reject:"N\xe3o",today:"Hoje",monthNames:["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],dayNames:["domingo","segunda","ter\xe7a","quarta","quinta","sexta","s\xe1bado"],dayNamesMin:["D","S","T","Q","Q","S","S"]}}}]);