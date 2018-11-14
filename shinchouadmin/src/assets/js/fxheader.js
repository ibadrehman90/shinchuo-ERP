
/*!
 FixedHeader 3.1.3
 Â©2009-2017 SpryMedia Ltd - datatables.net/license
*/
(function(d){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(g){return d(g,window,document)}):"object"===typeof exports?module.exports=function(g,h){g||(g=window);if(!h||!h.fn.dataTable)h=require("datatables.net")(g,h).$;return d(h,g,g.document)}:d(jQuery,window,document)})(function(d,g,h,k){var j=d.fn.dataTable,l=0,i=function(b,a){if(!(this instanceof i))throw"FixedHeader must be initialised with the 'new' keyword.";!0===a&&(a={});b=new j.Api(b);this.c=d.extend(!0,
    {},i.defaults,a);this.s={dt:b,position:{theadTop:0,tbodyTop:0,tfootTop:0,tfootBottom:0,width:0,left:0,tfootHeight:0,theadHeight:0,windowHeight:d(g).height(),visible:!0},headerMode:null,footerMode:null,autoWidth:b.settings()[0].oFeatures.bAutoWidth,namespace:".dtfc"+l++,scrollLeft:{header:-1,footer:-1},enable:!0};this.dom={floatingHeader:null,thead:d(b.table().header()),tbody:d(b.table().body()),tfoot:d(b.table().footer()),header:{host:null,floating:null,placeholder:null},footer:{host:null,floating:null,
    placeholder:null}};this.dom.header.host=this.dom.thead.parent();this.dom.footer.host=this.dom.tfoot.parent();var e=b.settings()[0];if(e._fixedHeader)throw"FixedHeader already initialised on table "+e.nTable.id;e._fixedHeader=this;this._constructor()};d.extend(i.prototype,{enable:function(b){this.s.enable=b;this.c.header&&this._modeChange("in-place","header",!0);this.c.footer&&this.dom.tfoot.length&&this._modeChange("in-place","footer",!0);this.update()},headerOffset:function(b){b!==k&&(this.c.headerOffset=
    b,this.update());return this.c.headerOffset},footerOffset:function(b){b!==k&&(this.c.footerOffset=b,this.update());return this.c.footerOffset},update:function(){this._positions();this._scroll(!0)},_constructor:function(){var b=this,a=this.s.dt;d(g).on("scroll"+this.s.namespace,function(){b._scroll()}).on("resize"+this.s.namespace,function(){b.s.position.windowHeight=d(g).height();b.update()});var e=d(".fh-fixedHeader");!this.c.headerOffset&&e.length&&(this.c.headerOffset=e.outerHeight());e=d(".fh-fixedFooter");
    !this.c.footerOffset&&e.length&&(this.c.footerOffset=e.outerHeight());a.on("column-reorder.dt.dtfc column-visibility.dt.dtfc draw.dt.dtfc column-sizing.dt.dtfc",function(){b.update()});a.on("destroy.dtfc",function(){a.off(".dtfc");d(g).off(b.s.namespace)});this._positions();this._scroll()},_clone:function(b,a){var e=this.s.dt,c=this.dom[b],f="header"===b?this.dom.thead:this.dom.tfoot;!a&&c.floating?c.floating.removeClass("fixedHeader-floating fixedHeader-locked"):(c.floating&&(c.placeholder.remove(),
    this._unsize(b),c.floating.children().detach(),c.floating.remove()),c.floating=d(e.table().node().cloneNode(!1)).css("table-layout","fixed").removeAttr("id").append(f).appendTo("body"),c.placeholder=f.clone(!1),c.placeholder.find("*[id]").removeAttr("id"),c.host.prepend(c.placeholder),this._matchWidths(c.placeholder,c.floating))},_matchWidths:function(b,a){var e=function(a){return d(a,b).map(function(){return d(this).width()}).toArray()},c=function(b,c){d(b,a).each(function(a){d(this).css({width:c[a],
    minWidth:c[a]})})},f=e("th"),e=e("td");c("th",f);c("td",e)},_unsize:function(b){var a=this.dom[b].floating;a&&("footer"===b||"header"===b&&!this.s.autoWidth)?d("th, td",a).css({width:"",minWidth:""}):a&&"header"===b&&d("th, td",a).css("min-width","")},_horizontal:function(b,a){var e=this.dom[b],c=this.s.position,d=this.s.scrollLeft;e.floating&&d[b]!==a&&(e.floating.css("left",c.left-a),d[b]=a)},_modeChange:function(b,a,e){var c=this.dom[a],f=this.s.position,g=d.contains(this.dom["footer"===a?"tfoot":
    "thead"][0],h.activeElement)?h.activeElement:null;if("in-place"===b){if(c.placeholder&&(c.placeholder.remove(),c.placeholder=null),this._unsize(a),"header"===a?c.host.prepend(this.dom.thead):c.host.append(this.dom.tfoot),c.floating)c.floating.remove(),c.floating=null}else"in"===b?(this._clone(a,e),c.floating.addClass("fixedHeader-floating").css("header"===a?"top":"bottom",this.c[a+"Offset"]).css("left",f.left+"px").css("width",f.width+"px"),"footer"===a&&c.floating.css("top","")):"below"===b?(this._clone(a,
    e),c.floating.addClass("fixedHeader-locked").css("top",f.tfootTop-f.theadHeight).css("left",f.left+"px").css("width",f.width+"px")):"above"===b&&(this._clone(a,e),c.floating.addClass("fixedHeader-locked").css("top",f.tbodyTop).css("left",f.left+"px").css("width",f.width+"px"));g&&g!==h.activeElement&&g.focus();this.s.scrollLeft.header=-1;this.s.scrollLeft.footer=-1;this.s[a+"Mode"]=b},_positions:function(){var b=this.s.dt.table(),a=this.s.position,e=this.dom,b=d(b.node()),c=b.children("thead"),f=
    b.children("tfoot"),e=e.tbody;a.visible=b.is(":visible");a.width=b.outerWidth();a.left=b.offset().left;a.theadTop=c.offset().top;a.tbodyTop=e.offset().top;a.theadHeight=a.tbodyTop-a.theadTop;f.length?(a.tfootTop=f.offset().top,a.tfootBottom=a.tfootTop+f.outerHeight(),a.tfootHeight=a.tfootBottom-a.tfootTop):(a.tfootTop=a.tbodyTop+e.outerHeight(),a.tfootBottom=a.tfootTop,a.tfootHeight=a.tfootTop)},_scroll:function(b){var a=d(h).scrollTop(),e=d(h).scrollLeft(),c=this.s.position,f;if(this.s.enable&&(this.c.header&&
    (f=!c.visible||a<=c.theadTop-this.c.headerOffset?"in-place":a<=c.tfootTop-c.theadHeight-this.c.headerOffset?"in":"below",(b||f!==this.s.headerMode)&&this._modeChange(f,"header",b),this._horizontal("header",e)),this.c.footer&&this.dom.tfoot.length))a=!c.visible||a+c.windowHeight>=c.tfootBottom+this.c.footerOffset?"in-place":c.windowHeight+a>c.tbodyTop+c.tfootHeight+this.c.footerOffset?"in":"above",(b||a!==this.s.footerMode)&&this._modeChange(a,"footer",b),this._horizontal("footer",e)}});i.version=
    "3.1.3";i.defaults={header:!0,footer:!1,headerOffset:0,footerOffset:0};d.fn.dataTable.FixedHeader=i;d.fn.DataTable.FixedHeader=i;d(h).on("init.dt.dtfh",function(b,a){if("dt"===b.namespace){var e=a.oInit.fixedHeader,c=j.defaults.fixedHeader;if((e||c)&&!a._fixedHeader)c=d.extend({},c,e),!1!==e&&new i(a,c)}});j.Api.register("fixedHeader()",function(){});j.Api.register("fixedHeader.adjust()",function(){return this.iterator("table",function(b){(b=b._fixedHeader)&&b.update()})});j.Api.register("fixedHeader.enable()",
    function(b){return this.iterator("table",function(a){a=a._fixedHeader;b=b!==k?b:!0;a&&b!==a.s.enable&&a.enable(b)})});j.Api.register("fixedHeader.disable()",function(){return this.iterator("table",function(b){(b=b._fixedHeader)&&b.s.enable&&b.enable(!1)})});d.each(["header","footer"],function(b,a){j.Api.register("fixedHeader."+a+"Offset()",function(b){var c=this.context;return b===k?c.length&&c[0]._fixedHeader?c[0]._fixedHeader[a+"Offset"]():k:this.iterator("table",function(c){if(c=c._fixedHeader)c[a+
    "Offset"](b)})})});return i});
    
    //add select data table
    /*!
     Select for DataTables 1.2.5
     2015-2018 SpryMedia Ltd - datatables.net/license/mit
    */
    (function(e){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(j){return e(j,window,document)}):"object"===typeof exports?module.exports=function(j,m){j||(j=window);if(!m||!m.fn.dataTable)m=require("datatables.net")(j,m).$;return e(m,j,j.document)}:e(jQuery,window,document)})(function(e,j,m,h){function v(a,c,b){var d;d=function(b,c){if(b>c)var d=c,c=b,b=d;var f=!1;return a.columns(":visible").indexes().filter(function(a){a===b&&(f=!0);return a===c?(f=!1,!0):f})};var f=
    function(b,c){var d=a.rows({search:"applied"}).indexes();if(d.indexOf(b)>d.indexOf(c))var f=c,c=b,b=f;var e=!1;return d.filter(function(a){a===b&&(e=!0);return a===c?(e=!1,!0):e})};!a.cells({selected:!0}).any()&&!b?(d=d(0,c.column),b=f(0,c.row)):(d=d(b.column,c.column),b=f(b.row,c.row));b=a.cells(b,d).flatten();a.cells(c,{selected:!0}).any()?a.cells(b).deselect():a.cells(b).select()}function r(a){var c=a.settings()[0]._select.selector;e(a.table().container()).off("mousedown.dtSelect",c).off("mouseup.dtSelect",
    c).off("click.dtSelect",c);e("body").off("click.dtSelect"+a.table().node().id)}function x(a){var c=e(a.table().container()),b=a.settings()[0],d=b._select.selector;c.on("mousedown.dtSelect",d,function(b){if(b.shiftKey||b.metaKey||b.ctrlKey)c.css("-moz-user-select","none").one("selectstart.dtSelect",d,function(){return!1})}).on("mouseup.dtSelect",d,function(){c.css("-moz-user-select","")}).on("click.dtSelect",d,function(b){var c=a.select.items();if(j.getSelection){var d=j.getSelection();if((!d.anchorNode||
    e(d.anchorNode).closest("table")[0]===a.table().node())&&""!==e.trim(d.toString()))return}d=a.settings()[0];if(e(b.target).closest("div.dataTables_wrapper")[0]==a.table().container()){var k=a.cell(e(b.target).closest("td, th"));if(k.any()){var g=e.Event("user-select.dt");i(a,g,[c,k,b]);g.isDefaultPrevented()||(g=k.index(),"row"===c?(c=g.row,s(b,a,d,"row",c)):"column"===c?(c=k.index().column,s(b,a,d,"column",c)):"cell"===c&&(c=k.index(),s(b,a,d,"cell",c)),d._select_lastCell=g)}}});e("body").on("click.dtSelect"+
    a.table().node().id,function(c){b._select.blurable&&!e(c.target).parents().filter(a.table().container()).length&&(0!==e(c.target).parents("html").length&&!e(c.target).parents("div.DTE").length)&&p(b,!0)})}function i(a,c,b,d){if(!d||a.flatten().length)"string"===typeof c&&(c+=".dt"),b.unshift(a),e(a.table().node()).trigger(c,b)}function y(a){var c=a.settings()[0];if(c._select.info&&c.aanFeatures.i&&"api"!==a.select.style()){var b=a.rows({selected:!0}).flatten().length,d=a.columns({selected:!0}).flatten().length,
    f=a.cells({selected:!0}).flatten().length,l=function(b,c,d){b.append(e('<span class="select-item"/>').append(a.i18n("select."+c+"s",{_:"%d "+c+"s selected","0":"",1:"1 "+c+" selected"},d)))};e.each(c.aanFeatures.i,function(c,a){var a=e(a),g=e('<span class="select-info"/>');l(g,"row",b);l(g,"column",d);l(g,"cell",f);var h=a.children("span.select-info");h.length&&h.remove();""!==g.text()&&a.append(g)})}}function z(a,c,b,d){var f=a[c+"s"]({search:"applied"}).indexes(),d=e.inArray(d,f),l=e.inArray(b,
    f);if(!a[c+"s"]({selected:!0}).any()&&-1===d)f.splice(e.inArray(b,f)+1,f.length);else{if(d>l)var g=l,l=d,d=g;f.splice(l+1,f.length);f.splice(0,d)}a[c](b,{selected:!0}).any()?(f.splice(e.inArray(b,f),1),a[c+"s"](f).deselect()):a[c+"s"](f).select()}function p(a,c){if(c||"single"===a._select.style){var b=new g.Api(a);b.rows({selected:!0}).deselect();b.columns({selected:!0}).deselect();b.cells({selected:!0}).deselect()}}function s(a,c,b,d,f){var e=c.select.style(),g=c[d](f,{selected:!0}).any();"os"===
    e?a.ctrlKey||a.metaKey?c[d](f).select(!g):a.shiftKey?"cell"===d?v(c,f,b._select_lastCell||null):z(c,d,f,b._select_lastCell?b._select_lastCell[d]:null):(a=c[d+"s"]({selected:!0}),g&&1===a.flatten().length?c[d](f).deselect():(a.deselect(),c[d](f).select())):"multi+shift"==e?a.shiftKey?"cell"===d?v(c,f,b._select_lastCell||null):z(c,d,f,b._select_lastCell?b._select_lastCell[d]:null):c[d](f).select(!g):c[d](f).select(!g)}function q(a,c){return function(b){return b.i18n("buttons."+a,c)}}function t(a){a=
    a._eventNamespace;return"draw.dt.DT"+a+" select.dt.DT"+a+" deselect.dt.DT"+a}var g=e.fn.dataTable;g.select={};g.select.version="1.2.5";g.select.init=function(a){var c=a.settings()[0],b=c.oInit.select,d=g.defaults.select,b=b===h?d:b,d="row",f="api",l=!1,w=!0,k="td, th",j="selected",i=!1;c._select={};if(!0===b)f="os",i=!0;else if("string"===typeof b)f=b,i=!0;else if(e.isPlainObject(b)&&(b.blurable!==h&&(l=b.blurable),b.info!==h&&(w=b.info),b.items!==h&&(d=b.items),b.style!==h&&(f=b.style,i=!0),b.selector!==
    h&&(k=b.selector),b.className!==h))j=b.className;a.select.selector(k);a.select.items(d);a.select.style(f);a.select.blurable(l);a.select.info(w);c._select.className=j;e.fn.dataTable.ext.order["select-checkbox"]=function(b,c){return this.api().column(c,{order:"index"}).nodes().map(function(c){return"row"===b._select.items?e(c).parent().hasClass(b._select.className):"cell"===b._select.items?e(c).hasClass(b._select.className):!1})};!i&&e(a.table().node()).hasClass("selectable")&&a.select.style("os")};
    e.each([{type:"row",prop:"aoData"},{type:"column",prop:"aoColumns"}],function(a,c){g.ext.selector[c.type].push(function(b,a,f){var a=a.selected,e,g=[];if(!0!==a&&!1!==a)return f;for(var k=0,h=f.length;k<h;k++)e=b[c.prop][f[k]],(!0===a&&!0===e._select_selected||!1===a&&!e._select_selected)&&g.push(f[k]);return g})});g.ext.selector.cell.push(function(a,c,b){var c=c.selected,d,f=[];if(c===h)return b;for(var e=0,g=b.length;e<g;e++)d=a.aoData[b[e].row],(!0===c&&d._selected_cells&&!0===d._selected_cells[b[e].column]||
    !1===c&&(!d._selected_cells||!d._selected_cells[b[e].column]))&&f.push(b[e]);return f});var n=g.Api.register,o=g.Api.registerPlural;n("select()",function(){return this.iterator("table",function(a){g.select.init(new g.Api(a))})});n("select.blurable()",function(a){return a===h?this.context[0]._select.blurable:this.iterator("table",function(c){c._select.blurable=a})});n("select.info()",function(a){return y===h?this.context[0]._select.info:this.iterator("table",function(c){c._select.info=a})});n("select.items()",
    function(a){return a===h?this.context[0]._select.items:this.iterator("table",function(c){c._select.items=a;i(new g.Api(c),"selectItems",[a])})});n("select.style()",function(a){return a===h?this.context[0]._select.style:this.iterator("table",function(c){c._select.style=a;if(!c._select_init){var b=new g.Api(c);c.aoRowCreatedCallback.push({fn:function(b,a,d){a=c.aoData[d];a._select_selected&&e(b).addClass(c._select.className);b=0;for(d=c.aoColumns.length;b<d;b++)(c.aoColumns[b]._select_selected||a._selected_cells&&
    a._selected_cells[b])&&e(a.anCells[b]).addClass(c._select.className)},sName:"select-deferRender"});b.on("preXhr.dt.dtSelect",function(){var c=b.rows({selected:!0}).ids(!0).filter(function(b){return b!==h}),a=b.cells({selected:!0}).eq(0).map(function(a){var c=b.row(a.row).id(!0);return c?{row:c,column:a.column}:h}).filter(function(b){return b!==h});b.one("draw.dt.dtSelect",function(){b.rows(c).select();a.any()&&a.each(function(a){b.cells(a.row,a.column).select()})})});b.on("draw.dtSelect.dt select.dtSelect.dt deselect.dtSelect.dt info.dt",
    function(){y(b)});b.on("destroy.dtSelect",function(){r(b);b.off(".dtSelect")})}var d=new g.Api(c);r(d);"api"!==a&&x(d);i(new g.Api(c),"selectStyle",[a])})});n("select.selector()",function(a){return a===h?this.context[0]._select.selector:this.iterator("table",function(c){r(new g.Api(c));c._select.selector=a;"api"!==c._select.style&&x(new g.Api(c))})});o("rows().select()","row().select()",function(a){var c=this;if(!1===a)return this.deselect();this.iterator("row",function(b,a){p(b);b.aoData[a]._select_selected=
    !0;e(b.aoData[a].nTr).addClass(b._select.className)});this.iterator("table",function(b,a){i(c,"select",["row",c[a]],!0)});return this});o("columns().select()","column().select()",function(a){var c=this;if(!1===a)return this.deselect();this.iterator("column",function(b,a){p(b);b.aoColumns[a]._select_selected=!0;var c=(new g.Api(b)).column(a);e(c.header()).addClass(b._select.className);e(c.footer()).addClass(b._select.className);c.nodes().to$().addClass(b._select.className)});this.iterator("table",
    function(b,a){i(c,"select",["column",c[a]],!0)});return this});o("cells().select()","cell().select()",function(a){var c=this;if(!1===a)return this.deselect();this.iterator("cell",function(b,a,c){p(b);a=b.aoData[a];a._selected_cells===h&&(a._selected_cells=[]);a._selected_cells[c]=!0;a.anCells&&e(a.anCells[c]).addClass(b._select.className)});this.iterator("table",function(a,d){i(c,"select",["cell",c[d]],!0)});return this});o("rows().deselect()","row().deselect()",function(){var a=this;this.iterator("row",
    function(a,b){a.aoData[b]._select_selected=!1;e(a.aoData[b].nTr).removeClass(a._select.className)});this.iterator("table",function(c,b){i(a,"deselect",["row",a[b]],!0)});return this});o("columns().deselect()","column().deselect()",function(){var a=this;this.iterator("column",function(a,b){a.aoColumns[b]._select_selected=!1;var d=new g.Api(a),f=d.column(b);e(f.header()).removeClass(a._select.className);e(f.footer()).removeClass(a._select.className);d.cells(null,b).indexes().each(function(b){var d=
    a.aoData[b.row],f=d._selected_cells;d.anCells&&(!f||!f[b.column])&&e(d.anCells[b.column]).removeClass(a._select.className)})});this.iterator("table",function(c,b){i(a,"deselect",["column",a[b]],!0)});return this});o("cells().deselect()","cell().deselect()",function(){var a=this;this.iterator("cell",function(a,b,d){b=a.aoData[b];b._selected_cells[d]=!1;b.anCells&&!a.aoColumns[d]._select_selected&&e(b.anCells[d]).removeClass(a._select.className)});this.iterator("table",function(c,b){i(a,"deselect",
    ["cell",a[b]],!0)});return this});var u=0;e.extend(g.ext.buttons,{selected:{text:q("selected","Selected"),className:"buttons-selected",limitTo:["rows","columns","cells"],init:function(a,c,b){var d=this;b._eventNamespace=".select"+u++;a.on(t(b),function(){d.enable(-1!==e.inArray("rows",b.limitTo)&&a.rows({selected:!0}).any()||-1!==e.inArray("columns",b.limitTo)&&a.columns({selected:!0}).any()||-1!==e.inArray("cells",b.limitTo)&&a.cells({selected:!0}).any()?!0:!1)});this.disable()},destroy:function(a,
    c,b){a.off(b._eventNamespace)}},selectedSingle:{text:q("selectedSingle","Selected single"),className:"buttons-selected-single",init:function(a,c,b){var d=this;b._eventNamespace=".select"+u++;a.on(t(b),function(){var b=a.rows({selected:!0}).flatten().length+a.columns({selected:!0}).flatten().length+a.cells({selected:!0}).flatten().length;d.enable(1===b)});this.disable()},destroy:function(a,c,b){a.off(b._eventNamespace)}},selectAll:{text:q("selectAll","Select all"),className:"buttons-select-all",action:function(){this[this.select.items()+
    "s"]().select()}},selectNone:{text:q("selectNone","Deselect all"),className:"buttons-select-none",action:function(){p(this.settings()[0],!0)},init:function(a,c,b){var d=this;b._eventNamespace=".select"+u++;a.on(t(b),function(){var b=a.rows({selected:!0}).flatten().length+a.columns({selected:!0}).flatten().length+a.cells({selected:!0}).flatten().length;d.enable(0<b)});this.disable()},destroy:function(a,c,b){a.off(b._eventNamespace)}}});e.each(["Row","Column","Cell"],function(a,c){var b=c.toLowerCase();
    g.ext.buttons["select"+c+"s"]={text:q("select"+c+"s","Select "+b+"s"),className:"buttons-select-"+b+"s",action:function(){this.select.items(b)},init:function(a){var c=this;a.on("selectItems.dt.DT",function(a,d,e){c.active(e===b)})}}});e(m).on("preInit.dt.dtSelect",function(a,c){"dt"===a.namespace&&g.select.init(new g.Api(c))});return g.select});
    
    
    
    'use strict';
    $(document).ready(function () {
        TableAdvanced.init();
        $(".dataTables_scrollHeadInner .table").addClass("table-responsive");
        $(".dataTables_wrapper .dt-buttons .btn").addClass('btn-secondary').removeClass('btn-default');
        $(".datatable_page #menu-toggle").on('click', function () {
            var height = $("#content").height();
            $("body, #wrap, html, #left").css("min-height", height + 0 + "px");
    
        });
    });
    var TableAdvanced = function () {
        // ===============table 1====================
    //    var initTable1 = function () {
    //        var table = $('#sample_6');
    //        /* Table tools samples: https://www.datatables.net/release-datatables/extras/TableTools/ */
    //        /* Set tabletools buttons and button container */
    //        table.DataTable({
    //            dom: 'Bflr<"table-responsive"t>ip'           
    //        });
    //        var tableWrapper = $('#sample_6_wrapper'); // datatable creates the table wrapper by adding with id {your_table_id}_wrapper
    //        tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown
    //    }
            var initTable6 = function () {
            var table = $('#sample_1');
            /* Table tools samples: https://www.datatables.net/release-datatables/extras/TableTools/ */
            /* Set tabletools buttons and button container */
            table.DataTable({
                dom: 'Bflr<"table-responsive"t>ip',
                buttons: [/*{
                        extend: 'copy',
                        exportOptions: {
                            columns: "thead th:not(.noExport)"
                        }
                    },*/{
                        extend: 'print',
                        exportOptions: {
                            columns: "thead th:not(.noExport)"
                        }
                    }, {
                        extend: 'csv',
                        title: 'Client List',
                        exportOptions: {
                            columns: "thead th:not(.noExport)"
                        }
                    }
    //                'copy', 'csv', 'print'
                ]
            });
            var tableWrapper = $('#sample_1_wrapper'); // datatable creates the table wrapper by adding with id {your_table_id}_wrapper
            tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown
        }
        // ===============table 1===============
        // ====================table 4===============
    //    var initTable4 = function () {
    //        var table = $('#sample_4');
    //
    //        /* Formatting function for row expanded details */
    //        function fnFormatDetails(oTable, nTr) {
    //            var aData = oTable.fnGetData(nTr);
    //            var sOut = '<table>';
    //            sOut += '<tr><td>Name:</td><td>' + aData[1] + '</td></tr>';
    //            sOut += '<tr><td>Age:</td><td>' + aData[2] + '</td></tr>';
    //            sOut += '<tr><td>Location:</td><td>' + aData[3] + '</td></tr>';
    //            sOut += '<tr><td>Contact:</td><td>' + aData[4] + '</td></tr>';
    //            sOut += '<tr><td>Email:</td><td>' + aData[5] + '</td></tr>';
    //            sOut += '<tr><td>Others:</td><td>Could provide a link here</td></tr>';
    //            sOut += '</table>';
    //            return sOut;
    //        }
    //        /*
    //         * Insert a 'details' column to the table
    //         */
    //        var nCloneTh = document.createElement('th');
    //        nCloneTh.className = "table-checkbox";
    //
    //        var nCloneTd = document.createElement('td');
    //        nCloneTd.innerHTML = '<span class="row-details row-details-close"></span>';
    //
    //        table.find('thead tr').each(function () {
    //            this.insertBefore(nCloneTh, this.childNodes[0]);
    //        });
    //
    //        table.find('tbody tr').each(function () {
    //            this.insertBefore(nCloneTd.cloneNode(true), this.childNodes[0]);
    //        });
    //
    //        var oTable = table.dataTable({
    //            "dom": "<'row'<'col-md-6 col-xs-12'l><'col-md-6 col-xs-12'f>r><'table-responsive't><'row'<'col-md-5 col-xs-12'i><'col-md-7 col-xs-12'p>>", // datatable layout without  horizobtal scroll
    //            "columnDefs": [{
    //                    "orderable": false,
    //                    "targets": [0]
    //                }],
    //            "order": [
    //                [1, 'asc']
    //            ],
    //            "lengthMenu": [
    //                [5, 15, 20, -1],
    //                [5, 15, 20, "All"] // change per page values here
    //            ],
    //            // set the initial value
    //            "pageLength": 5
    //        });
    //
    //        var tableWrapper = $('#sample_4_wrapper'); // datatable creates the table wrapper by adding with id {your_table_jd}_wrapper
    //        var tableColumnToggler = $('#sample_4_column_toggler');
    //
    //        /* modify datatable control inputs */
    //        tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown
    //
    //        /* Add event listener for opening and closing details
    //         * Note that the indicator for showing which row is open is not controlled by DataTables,
    //         * rather it is done here
    //         */
    //        table.on('click', ' tbody td .row-details', function () {
    //            var nTr = $(this).parents('tr')[0];
    //            if (oTable.fnIsOpen(nTr)) {
    //                /* This row is already open - close it */
    //                $(this).addClass("row-details-close").removeClass("row-details-open");
    //                oTable.fnClose(nTr);
    //            } else {
    //                /* Open this row */
    //                $(this).addClass("row-details-open").removeClass("row-details-close");
    //                oTable.fnOpen(nTr, fnFormatDetails(oTable, nTr), 'details');
    //            }
    //            return false;
    //        });
    //
    //        /* handle show/hide columns*/
    //        $('input[type="checkbox"]', tableColumnToggler).change(function () {
    //            /* Get the DataTables object again - this is not a recreation, just a get of the object */
    //            var iCol = parseInt($(this).attr("data-column"));
    //            var bVis = oTable.fnSettings().aoColumns[iCol].bVisible;
    //            oTable.fnSetColumnVis(iCol, (bVis ? false : true));
    //            return false;
    //        });
    //    }
        // =======================table4==================
        // ==================table5===================
    //    var initTable5 = function () {
    //
    //        var table = $('#sample_5');
    //
    //        /* Fixed header extension: http://datatables.net/extensions/scroller/ */
    //
    //        var oTable = table.dataTable({
    //            "dom": "<'row'<'col-md-6 col-xs-12'l><'col-md-6 col-xs-12'f>r>t<'row'<'col-md-5 col-xs-12'i><'col-md-7 col-xs-12'p>>", // datatable layout without  horizobtal scroll
    //            "scrollY": "200",
    //            "deferRender": true,
    //            "paging": false,
    //            "order": [
    //                [0, 'asc']
    //            ],
    //            "lengthMenu": [
    //                [5, 15, 20, -1],
    //                [5, 15, 20, "All"] // change per page values here
    //            ],
    //            "pageLength": 15 // set the initial value
    //        });
    //
    //
    //        var tableWrapper = $('#sample_5_wrapper'); // datatable creates the table wrapper by adding with id {your_table_jd}_wrapper
    //        tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown
    //    }
        // ===================table 5========================
        // ==================table 6=======================
        var initTable1 = function () {
            var table = $('#example1');
            /* Fixed header extension: http://datatables.net/extensions/keytable/ */
            var oTable = table.dataTable({
                "dom": "<'row'<'col-md-6 col-xs-12'l><'col-md-6 col-xs-12'f>r><'table-responsive't><'row'<'col-md-5 col-xs-12'i><'col-md-7 col-xs-12'p>>",
                buttons: [
                    'copy', 'csv', 'print'
                ],
                'bFilter':false,
                'bInfo': true,
                'lengthChange': false,
                'aoColumnDefs': [{
                        'bSortable': false,
                        'aTargets': ['nosort']                    
                    }],
                "order": [
                    [0, 'asc']
                ],
                "fixedHeader": {
                    header: true,
                    footer: true
                },
                "pageLength": 25 // set the initial value,
            });
            var oTableColReorder = new $.fn.dataTable.ColReorder(oTable);
            var tableWrapper = $('#sample_6_wrapper'); // datatable creates the table wrapper by adding with id {your_table_jd}_wrapper
            tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown
        }
        
        // =====================table 9=======================
         var initTable9 = function () {
            var table = $('#sample_9');
                var oTable = table.dataTable({
                    "dom": "<'row'<'col-md-6 col-xs-12'l><'col-md-6 col-xs-12'f>r><'table-responsive't><'row'<'col-md-5 col-xs-12'i><'col-md-7 col-xs-12'p>>",
                    buttons: [
                        'copy', 'csv', 'print'
                    ],
                    'aoColumnDefs': [{
                            'bSortable': false,
                            'aTargets': ['nosort'],
                            fnRender: function (o, v) {   // o, v contains the object and value for the column
                                return '<input type="checkbox" id="someCheckbox" name="someCheckbox" />';
                            }
                        }],
                    "order": [
                        [1, 'asc']
                    ],
                    "fixedHeader": {
                        header: true,
                        footer: true
                    },
                    "select": {
                        "style": 'multi',
    //                "style":    'os',
    //                "selector": 'td:first-child'
                    },
                    "pageLength": 100 // set the initial value,
                });
                var oTableColReorder = new $.fn.dataTable.ColReorder(oTable);
                var tableWrapper = $('#sample_9_wrapper'); // datatable creates the table wrapper by adding with id {your_table_jd}_wrapper
                tableWrapper.find('.dataTables_length select').select2(); // initialize select2 dropdown 
        }
        // =====================table 6======================
        return {
            //main function to initiate the module
            init: function () {
                if (!jQuery().dataTable) {
                    return;
                }
                initTable1();
    //            initTable4();
    //            initTable5();
                initTable6();
    //            initTable9();
            }
        };
    }();
    
    $(document).ready(function () {
    //    setTableBody();
    //    $(window).resize(setTableBody);
        var clientWidth= $('.dataTables_wrapper').innerWidth();
        var scrollWidth= $('.fixedHeader-floating').innerWidth();
        var maxScrollLeft = scrollWidth - clientWidth;
    //    console.log(maxScrollLeft);
        $(".table-responsive").scroll(function ()    { 
            if(this.scrollLeft <= 3){
                $(".fixedHeader-floating").offset({ left: 13.5 });
            }else if(this.scrollLeft >= maxScrollLeft){
    //            console.log(this.scrollLeft);
    //            console.log(maxScrollLeft);
                $(".fixedHeader-floating").offset({ left: -1*this.scrollLeft+13});
            }else{
                $(".fixedHeader-floating").offset({ left: -1*this.scrollLeft });
            }
        });
    });
    //
    //function setTableBody()
    //{
    //    $(".table-body").height($(".inner-container").height() - $(".fixedHeader-floating").height());
    //}