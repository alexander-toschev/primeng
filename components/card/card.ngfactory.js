/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "./card";
import * as i2 from "@angular/common";
import * as i3 from "../common/shared";
var CardModuleNgFactory = i0.ɵcmf(i1.CardModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(1073742336, i3.SharedModule, i3.SharedModule, []), i0.ɵmpd(1073742336, i1.CardModule, i1.CardModule, [])]); });
export { CardModuleNgFactory as CardModuleNgFactory };
var styles_Card = [];
var RenderType_Card = i0.ɵcrt({ encapsulation: 2, styles: styles_Card, data: {} });
export { RenderType_Card as RenderType_Card };
function View_Card_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "ui-card-header"]], null, null, null, null, null)), i0.ɵncd(null, 0)], null, null); }
function View_Card_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "ui-card-title"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.header; _ck(_v, 1, 0, currVal_0); }); }
function View_Card_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "ui-card-subtitle"]], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.subheader; _ck(_v, 1, 0, currVal_0); }); }
function View_Card_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "ui-card-footer"]], null, null, null, null, null)), i0.ɵncd(null, 2)], null, null); }
export function View_Card_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 13, "div", [], null, null, null, null, null)), i0.ɵdid(1, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵdid(2, 278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Card_1)), i0.ɵdid(4, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(5, 0, null, null, 8, "div", [["class", "ui-card-body"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Card_2)), i0.ɵdid(7, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Card_3)), i0.ɵdid(9, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(10, 0, null, null, 1, "div", [["class", "ui-card-content"]], null, null, null, null, null)), i0.ɵncd(null, 1), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Card_4)), i0.ɵdid(13, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.styleClass; var currVal_1 = "ui-card ui-widget ui-widget-content ui-corner-all"; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _co.style; _ck(_v, 2, 0, currVal_2); var currVal_3 = _co.headerFacet; _ck(_v, 4, 0, currVal_3); var currVal_4 = _co.header; _ck(_v, 7, 0, currVal_4); var currVal_5 = _co.subheader; _ck(_v, 9, 0, currVal_5); var currVal_6 = _co.footerFacet; _ck(_v, 13, 0, currVal_6); }, null); }
export function View_Card_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "p-card", [], null, null, null, View_Card_0, RenderType_Card)), i0.ɵdid(1, 49152, null, 2, i1.Card, [i0.ElementRef], null, null), i0.ɵqud(335544320, 1, { headerFacet: 0 }), i0.ɵqud(335544320, 2, { footerFacet: 0 })], null, null); }
var CardNgFactory = i0.ɵccf("p-card", i1.Card, View_Card_Host_0, { header: "header", subheader: "subheader", style: "style", styleClass: "styleClass" }, {}, ["p-header", "*", "p-footer"]);
export { CardNgFactory as CardNgFactory };
//# sourceMappingURL=card.ngfactory.js.map