!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{yPrK:function(t,o,i){"use strict";i.r(o),i.d(o,"SettingsPageModule",(function(){return J}));var r,a,c,b=i("ofXK"),l=i("3Pt+"),u=i("TEn/"),s=i("tyNb"),d=i("fXoL"),f=i("e8h1"),h=i("V1Vp"),p=[{path:"",component:(r=function(){function t(e,o,i){n(this,t),this.storage=e,this.cashService=o,this.ref=i,this.currency=""}var o,i,r;return o=t,(i=[{key:"ngOnInit",value:function(){var n=this;this.storage.get("selected-currency").then((function(e){n.currency=e}))}},{key:"updateCurrency",value:function(){this.cashService.updateCurrency(this.currency)}},{key:"clearData",value:function(){confirm("Are you sure you want to delete all data?")&&this.cashService.clearData()}}])&&e(o.prototype,i),r&&e(o,r),t}(),r.\u0275fac=function(n){return new(n||r)(d.Hb(f.b),d.Hb(h.b),d.Hb(d.h))},r.\u0275cmp=d.Bb({type:r,selectors:[["app-settings"]],decls:45,vars:2,consts:[["slot","start"],["padding",""],[3,"ngModel","ngModelChange"],["slot","start","value","eur"],["slot","start","value","usd"],["slot","start","value","gbp"],["slot","start","value","MAD"],["slot","start","value",""],["placeholder","Symbol",3,"ngModel","ngModelChange"],["fill","outline","shape","round","expand","full",3,"click"],["fill","outline","shape","round","expand","full","color","danger",3,"click"]],template:function(n,e){1&n&&(d.Kb(0,"ion-header"),d.Kb(1,"ion-toolbar"),d.Kb(2,"ion-buttons",0),d.Ib(3,"ion-menu-button"),d.Jb(),d.Kb(4,"ion-title"),d.ic(5,"Settings"),d.Jb(),d.Jb(),d.Jb(),d.Kb(6,"ion-content",1),d.Kb(7,"ion-card"),d.Kb(8,"ion-card-header"),d.Kb(9,"ion-card-title"),d.ic(10," Currency "),d.Jb(),d.Jb(),d.Kb(11,"ion-card-content"),d.Kb(12,"ion-list"),d.Kb(13,"ion-radio-group",2),d.Sb("ngModelChange",(function(n){return e.currency=n})),d.Kb(14,"ion-item"),d.Kb(15,"ion-label"),d.ic(16,"Euro"),d.Jb(),d.Ib(17,"ion-radio",3),d.Jb(),d.Kb(18,"ion-item"),d.Kb(19,"ion-label"),d.ic(20,"Dollar"),d.Jb(),d.Ib(21,"ion-radio",4),d.Jb(),d.Kb(22,"ion-item"),d.Kb(23,"ion-label"),d.ic(24,"Pound"),d.Jb(),d.Ib(25,"ion-radio",5),d.Jb(),d.Kb(26,"ion-item"),d.Kb(27,"ion-label"),d.ic(28,"Dirham marocain"),d.Jb(),d.Ib(29,"ion-radio",6),d.Jb(),d.Kb(30,"ion-item"),d.Kb(31,"ion-label"),d.ic(32,"Other"),d.Jb(),d.Ib(33,"ion-radio",7),d.Kb(34,"ion-input",8),d.Sb("ngModelChange",(function(n){return e.currency=n})),d.Jb(),d.Jb(),d.Jb(),d.Jb(),d.Kb(35,"ion-button",9),d.Sb("click",(function(){return e.updateCurrency()})),d.ic(36," Update "),d.Jb(),d.Jb(),d.Jb(),d.Kb(37,"ion-card"),d.Kb(38,"ion-card-header"),d.Kb(39,"ion-card-title"),d.ic(40," Clear Data "),d.Jb(),d.Jb(),d.Kb(41,"ion-card-content"),d.ic(42," Remove all data? "),d.Kb(43,"ion-button",10),d.Sb("click",(function(){return e.clearData()})),d.ic(44,"Clear Data"),d.Jb(),d.Jb(),d.Jb(),d.Jb()),2&n&&(d.xb(13),d.ac("ngModel",e.currency),d.xb(21),d.ac("ngModel",e.currency))},directives:[u.o,u.M,u.c,u.z,u.L,u.j,u.d,u.f,u.h,u.e,u.w,u.D,u.V,l.d,l.e,u.r,u.v,u.C,u.T,u.q,u.W,u.b],styles:[""]}),r)}],y=((c=function e(){n(this,e)}).\u0275mod=d.Fb({type:c}),c.\u0275inj=d.Eb({factory:function(n){return new(n||c)},imports:[[s.i.forChild(p)],s.i]}),c),J=((a=function e(){n(this,e)}).\u0275mod=d.Fb({type:a}),a.\u0275inj=d.Eb({factory:function(n){return new(n||a)},imports:[[b.b,l.a,u.N,y]]}),a)}}])}();