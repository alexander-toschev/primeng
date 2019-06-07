/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "./datalist";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "../common/shared";
import * as i5 from "@angular/cdk/bidi";
import * as i6 from "@angular/cdk/platform";
import * as i7 from "@angular/cdk/scrolling";
import * as i8 from "../dropdown/dropdown";
import * as i9 from "../paginator/paginator";
import * as i10 from "../paginator/paginator.ngfactory";
var DataListModuleNgFactory = i0.ɵcmf(i1.DataListModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵangular_packages_common_common_a]]), i0.ɵmpd(4608, i3.ɵangular_packages_forms_forms_j, i3.ɵangular_packages_forms_forms_j, []), i0.ɵmpd(1073742336, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(1073742336, i4.SharedModule, i4.SharedModule, []), i0.ɵmpd(1073742336, i5.BidiModule, i5.BidiModule, []), i0.ɵmpd(1073742336, i6.PlatformModule, i6.PlatformModule, []), i0.ɵmpd(1073742336, i7.ScrollingModule, i7.ScrollingModule, []), i0.ɵmpd(1073742336, i8.DropdownModule, i8.DropdownModule, []), i0.ɵmpd(1073742336, i3.ɵangular_packages_forms_forms_bc, i3.ɵangular_packages_forms_forms_bc, []), i0.ɵmpd(1073742336, i3.FormsModule, i3.FormsModule, []), i0.ɵmpd(1073742336, i9.PaginatorModule, i9.PaginatorModule, []), i0.ɵmpd(1073742336, i1.DataListModule, i1.DataListModule, [])]); });
export { DataListModuleNgFactory as DataListModuleNgFactory };
var styles_DataList = [];
var RenderType_DataList = i0.ɵcrt({ encapsulation: 2, styles: styles_DataList, data: {} });
export { RenderType_DataList as RenderType_DataList };
function View_DataList_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "ui-datalist-header ui-widget-header ui-corner-top"]], null, null, null, null, null)), i0.ɵncd(null, 0)], null, null); }
function View_DataList_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "p-paginator", [["styleClass", "ui-paginator-top"]], null, [[null, "onPageChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onPageChange" === en)) {
        var pd_0 = (_co.paginate($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i10.View_Paginator_0, i10.RenderType_Paginator)), i0.ɵdid(1, 114688, null, 0, i9.Paginator, [i0.ChangeDetectorRef], { pageLinkSize: [0, "pageLinkSize"], styleClass: [1, "styleClass"], alwaysShow: [2, "alwaysShow"], dropdownAppendTo: [3, "dropdownAppendTo"], totalRecords: [4, "totalRecords"], first: [5, "first"], rows: [6, "rows"], rowsPerPageOptions: [7, "rowsPerPageOptions"] }, { onPageChange: "onPageChange" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.pageLinks; var currVal_1 = "ui-paginator-top"; var currVal_2 = _co.alwaysShowPaginator; var currVal_3 = _co.paginatorDropdownAppendTo; var currVal_4 = _co.totalRecords; var currVal_5 = _co.first; var currVal_6 = _co.rows; var currVal_7 = _co.rowsPerPageOptions; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }, null); }
function View_DataList_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "ui-datalist-emptymessage"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.emptyMessage; _ck(_v, 1, 0, currVal_0); }); }
function View_DataList_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_DataList_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_DataList_5)), i0.ɵdid(2, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(3, { $implicit: 0, index: 1 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 3, 0, _v.context.$implicit, (_v.context.index + _co.first)); var currVal_1 = _co.itemTemplate; _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_DataList_6(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "p-paginator", [["styleClass", "ui-paginator-bottom"]], null, [[null, "onPageChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onPageChange" === en)) {
        var pd_0 = (_co.paginate($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i10.View_Paginator_0, i10.RenderType_Paginator)), i0.ɵdid(1, 114688, null, 0, i9.Paginator, [i0.ChangeDetectorRef], { pageLinkSize: [0, "pageLinkSize"], styleClass: [1, "styleClass"], alwaysShow: [2, "alwaysShow"], dropdownAppendTo: [3, "dropdownAppendTo"], totalRecords: [4, "totalRecords"], first: [5, "first"], rows: [6, "rows"], rowsPerPageOptions: [7, "rowsPerPageOptions"] }, { onPageChange: "onPageChange" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.pageLinks; var currVal_1 = "ui-paginator-bottom"; var currVal_2 = _co.alwaysShowPaginator; var currVal_3 = _co.paginatorDropdownAppendTo; var currVal_4 = _co.totalRecords; var currVal_5 = _co.first; var currVal_6 = _co.rows; var currVal_7 = _co.rowsPerPageOptions; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); }, null); }
function View_DataList_7(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "ui-datalist-footer ui-widget-header ui-corner-bottom"]], null, null, null, null, null)), i0.ɵncd(null, 1)], null, null); }
export function View_DataList_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 19, "div", [], null, null, null, null, null)), i0.ɵdid(1, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "ui-datalist ui-widget": 0, "ui-datalist-scrollable": 1 }), i0.ɵdid(3, 278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DataList_1)), i0.ɵdid(5, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DataList_2)), i0.ɵdid(7, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(8, 0, null, null, 7, "div", [["class", "ui-datalist-content ui-widget-content"]], null, null, null, null, null)), i0.ɵdid(9, 278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i0.ɵpod(10, { "max-height": 0 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DataList_3)), i0.ɵdid(12, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(13, 0, null, null, 2, "ul", [["class", "ui-datalist-data"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DataList_4)), i0.ɵdid(15, 278528, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"], ngForTrackBy: [1, "ngForTrackBy"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DataList_6)), i0.ɵdid(17, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_DataList_7)), i0.ɵdid(19, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.styleClass; var currVal_1 = _ck(_v, 2, 0, true, _co.scrollable); _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _co.style; _ck(_v, 3, 0, currVal_2); var currVal_3 = _co.header; _ck(_v, 5, 0, currVal_3); var currVal_4 = (_co.paginator && ((_co.paginatorPosition === "top") || (_co.paginatorPosition == "both"))); _ck(_v, 7, 0, currVal_4); var currVal_5 = _ck(_v, 10, 0, _co.scrollHeight); _ck(_v, 9, 0, currVal_5); var currVal_6 = _co.isEmpty(); _ck(_v, 12, 0, currVal_6); var currVal_7 = _co.dataToRender; var currVal_8 = _co.trackBy; _ck(_v, 15, 0, currVal_7, currVal_8); var currVal_9 = (_co.paginator && ((_co.paginatorPosition === "bottom") || (_co.paginatorPosition == "both"))); _ck(_v, 17, 0, currVal_9); var currVal_10 = _co.footer; _ck(_v, 19, 0, currVal_10); }, null); }
export function View_DataList_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "p-dataList", [], null, null, null, View_DataList_0, RenderType_DataList)), i0.ɵdid(1, 5554176, null, 3, i1.DataList, [i0.ElementRef, i0.IterableDiffers], null, null), i0.ɵqud(335544320, 1, { header: 0 }), i0.ɵqud(335544320, 2, { footer: 0 }), i0.ɵqud(603979776, 3, { templates: 1 })], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var DataListNgFactory = i0.ɵccf("p-dataList", i1.DataList, View_DataList_Host_0, { paginator: "paginator", rows: "rows", totalRecords: "totalRecords", pageLinks: "pageLinks", rowsPerPageOptions: "rowsPerPageOptions", lazy: "lazy", style: "style", styleClass: "styleClass", paginatorPosition: "paginatorPosition", emptyMessage: "emptyMessage", alwaysShowPaginator: "alwaysShowPaginator", trackBy: "trackBy", immutable: "immutable", scrollable: "scrollable", scrollHeight: "scrollHeight", paginatorDropdownAppendTo: "paginatorDropdownAppendTo", value: "value" }, { onLazyLoad: "onLazyLoad", onPage: "onPage" }, ["p-header", "p-footer"]);
export { DataListNgFactory as DataListNgFactory };
//# sourceMappingURL=datalist.ngfactory.js.map