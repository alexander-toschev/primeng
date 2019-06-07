/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "./fileupload";
import * as i2 from "@angular/common";
import * as i3 from "../common/shared";
import * as i4 from "../button/button";
import * as i5 from "../progressbar/progressbar";
import * as i6 from "../messages/messages";
import * as i7 from "../button/button.ngfactory";
import * as i8 from "../progressbar/progressbar.ngfactory";
import * as i9 from "../messages/messages.ngfactory";
import * as i10 from "../common/messageservice";
import * as i11 from "@angular/platform-browser";
import * as i12 from "@angular/common/http";
var FileUploadModuleNgFactory = i0.ɵcmf(i1.FileUploadModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID, [2, i2.ɵangular_packages_common_common_a]]), i0.ɵmpd(1073742336, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(1073742336, i3.SharedModule, i3.SharedModule, []), i0.ɵmpd(1073742336, i4.ButtonModule, i4.ButtonModule, []), i0.ɵmpd(1073742336, i5.ProgressBarModule, i5.ProgressBarModule, []), i0.ɵmpd(1073742336, i6.MessagesModule, i6.MessagesModule, []), i0.ɵmpd(1073742336, i1.FileUploadModule, i1.FileUploadModule, [])]); });
export { FileUploadModuleNgFactory as FileUploadModuleNgFactory };
var styles_FileUpload = [];
var RenderType_FileUpload = i0.ɵcrt({ encapsulation: 2, styles: styles_FileUpload, data: {} });
export { RenderType_FileUpload as RenderType_FileUpload };
function View_FileUpload_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "p-button", [["icon", "pi pi-upload"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.upload() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i7.View_Button_0, i7.RenderType_Button)), i0.ɵdid(1, 49152, null, 0, i4.Button, [], { type: [0, "type"], icon: [1, "icon"], label: [2, "label"], disabled: [3, "disabled"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "button"; var currVal_1 = "pi pi-upload"; var currVal_2 = _co.uploadLabel; var currVal_3 = !_co.hasFiles(); _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3); }, null); }
function View_FileUpload_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "p-button", [["icon", "pi pi-times"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.clear() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i7.View_Button_0, i7.RenderType_Button)), i0.ɵdid(1, 49152, null, 0, i4.Button, [], { type: [0, "type"], icon: [1, "icon"], label: [2, "label"], disabled: [3, "disabled"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "button"; var currVal_1 = "pi pi-times"; var currVal_2 = _co.cancelLabel; var currVal_3 = (!_co.hasFiles() || _co.uploading); _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3); }, null); }
function View_FileUpload_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_FileUpload_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "p-progressBar", [], null, null, null, i8.View_ProgressBar_0, i8.RenderType_ProgressBar)), i0.ɵdid(1, 49152, null, 0, i5.ProgressBar, [], { value: [0, "value"], showValue: [1, "showValue"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.progress; var currVal_1 = false; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_FileUpload_9(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "width", 0]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.parent.context.$implicit.objectURL; var currVal_1 = _co.previewWidth; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_FileUpload_8(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 10, "div", [["class", "ui-fileupload-row"]], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_FileUpload_9)), i0.ɵdid(3, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(4, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i0.ɵted(5, null, ["", ""])), (_l()(), i0.ɵeld(6, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), i0.ɵted(7, null, ["", ""])), (_l()(), i0.ɵeld(8, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), i0.ɵeld(9, 0, null, null, 1, "button", [["icon", "pi pi-times"], ["pButton", ""], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.remove($event, _v.context.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(10, 4341760, null, 0, i4.ButtonDirective, [i0.ElementRef], { icon: [0, "icon"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.isImage(_v.context.$implicit); _ck(_v, 3, 0, currVal_0); var currVal_4 = "pi pi-times"; _ck(_v, 10, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _v.context.$implicit.name; _ck(_v, 5, 0, currVal_1); var currVal_2 = _co.formatSize(_v.context.$implicit.size); _ck(_v, 7, 0, currVal_2); var currVal_3 = _co.uploading; _ck(_v, 9, 0, currVal_3); }); }
function View_FileUpload_7(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_FileUpload_8)), i0.ɵdid(2, 278528, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.files; _ck(_v, 2, 0, currVal_0); }, null); }
function View_FileUpload_11(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_FileUpload_10(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_FileUpload_11)), i0.ɵdid(2, 278528, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"], ngForTemplate: [1, "ngForTemplate"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.files; var currVal_1 = _co.fileTemplate; _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_FileUpload_6(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "div", [["class", "ui-fileupload-files"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_FileUpload_7)), i0.ɵdid(2, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_FileUpload_10)), i0.ɵdid(4, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.fileTemplate; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.fileTemplate; _ck(_v, 4, 0, currVal_1); }, null); }
function View_FileUpload_12(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_FileUpload_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 25, "div", [], null, null, null, null, null)), i0.ɵdid(1, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵdid(2, 278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), (_l()(), i0.ɵeld(3, 0, null, null, 11, "div", [["class", "ui-fileupload-buttonbar ui-widget-header ui-corner-top"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 4, "span", [["class", "ui-fileupload-choose"], ["icon", "pi pi-plus"], ["pButton", ""]], null, null, null, null, null)), i0.ɵdid(5, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(6, { "ui-state-focus": 0, "ui-state-disabled": 1 }), i0.ɵdid(7, 4341760, null, 0, i4.ButtonDirective, [i0.ElementRef], { label: [0, "label"], icon: [1, "icon"] }, null), (_l()(), i0.ɵeld(8, 0, [[1, 0], ["advancedfileinput", 1]], null, 0, "input", [["type", "file"]], [[8, "multiple", 0], [8, "accept", 0], [8, "disabled", 0]], [[null, "change"], [null, "focus"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.onFileSelect($event) !== false);
        ad = (pd_0 && ad);
    } if (("focus" === en)) {
        var pd_1 = (_co.onFocus() !== false);
        ad = (pd_1 && ad);
    } if (("blur" === en)) {
        var pd_2 = (_co.onBlur() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_FileUpload_2)), i0.ɵdid(10, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_FileUpload_3)), i0.ɵdid(12, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_FileUpload_4)), i0.ɵdid(14, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null), (_l()(), i0.ɵeld(15, 0, [[3, 0], ["content", 1]], null, 10, "div", [], null, [[null, "dragenter"], [null, "dragleave"], [null, "drop"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("dragenter" === en)) {
        var pd_0 = (_co.onDragEnter($event) !== false);
        ad = (pd_0 && ad);
    } if (("dragleave" === en)) {
        var pd_1 = (_co.onDragLeave($event) !== false);
        ad = (pd_1 && ad);
    } if (("drop" === en)) {
        var pd_2 = (_co.onDrop($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), i0.ɵdid(16, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngClass: [0, "ngClass"] }, null), i0.ɵpod(17, { "ui-fileupload-content ui-widget-content ui-corner-bottom": 0 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_FileUpload_5)), i0.ɵdid(19, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(20, 0, null, null, 1, "p-messages", [], null, null, null, i9.View_Messages_0, i9.RenderType_Messages)), i0.ɵdid(21, 245760, null, 0, i6.Messages, [[2, i10.MessageService]], { value: [0, "value"], enableService: [1, "enableService"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_FileUpload_6)), i0.ɵdid(23, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_FileUpload_12)), i0.ɵdid(25, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.styleClass; var currVal_1 = "ui-fileupload ui-widget"; _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _co.style; _ck(_v, 2, 0, currVal_2); var currVal_3 = "ui-fileupload-choose"; var currVal_4 = _ck(_v, 6, 0, _co.focus, _co.disabled); _ck(_v, 5, 0, currVal_3, currVal_4); var currVal_5 = _co.chooseLabel; var currVal_6 = "pi pi-plus"; _ck(_v, 7, 0, currVal_5, currVal_6); var currVal_10 = (!_co.auto && _co.showUploadButton); _ck(_v, 10, 0, currVal_10); var currVal_11 = (!_co.auto && _co.showCancelButton); _ck(_v, 12, 0, currVal_11); var currVal_12 = _co.toolbarTemplate; _ck(_v, 14, 0, currVal_12); var currVal_13 = _ck(_v, 17, 0, true); _ck(_v, 16, 0, currVal_13); var currVal_14 = _co.hasFiles(); _ck(_v, 19, 0, currVal_14); var currVal_15 = _co.msgs; var currVal_16 = false; _ck(_v, 21, 0, currVal_15, currVal_16); var currVal_17 = _co.hasFiles(); _ck(_v, 23, 0, currVal_17); var currVal_18 = _co.contentTemplate; _ck(_v, 25, 0, currVal_18); }, function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.multiple; var currVal_8 = _co.accept; var currVal_9 = _co.disabled; _ck(_v, 8, 0, currVal_7, currVal_8, currVal_9); }); }
function View_FileUpload_14(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, [[2, 0], ["basicfileinput", 1]], null, 0, "input", [["type", "file"]], [[8, "accept", 0], [8, "multiple", 0], [8, "disabled", 0]], [[null, "change"], [null, "focus"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.onFileSelect($event) !== false);
        ad = (pd_0 && ad);
    } if (("focus" === en)) {
        var pd_1 = (_co.onFocus() !== false);
        ad = (pd_1 && ad);
    } if (("blur" === en)) {
        var pd_2 = (_co.onBlur() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.accept; var currVal_1 = _co.multiple; var currVal_2 = _co.disabled; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_FileUpload_13(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 10, "span", [], null, [[null, "mouseup"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mouseup" === en)) {
        var pd_0 = (_co.onSimpleUploaderClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(2, { "ui-button ui-fileupload-choose ui-widget ui-state-default ui-corner-all ui-button-text-icon-left": 0, "ui-fileupload-choose-selected": 1, "ui-state-focus": 2, "ui-state-disabled": 3 }), i0.ɵdid(3, 278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), (_l()(), i0.ɵeld(4, 0, null, null, 2, "span", [["class", "ui-button-icon-left pi"]], null, null, null, null, null)), i0.ɵdid(5, 278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), i0.ɵpod(6, { "pi-plus": 0, "pi-upload": 1 }), (_l()(), i0.ɵeld(7, 0, null, null, 1, "span", [["class", "ui-button-text ui-clickable"]], null, null, null, null, null)), (_l()(), i0.ɵted(8, null, ["", ""])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_FileUpload_14)), i0.ɵdid(10, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.styleClass; var currVal_1 = _ck(_v, 2, 0, true, _co.hasFiles(), _co.focus, _co.disabled); _ck(_v, 1, 0, currVal_0, currVal_1); var currVal_2 = _co.style; _ck(_v, 3, 0, currVal_2); var currVal_3 = "ui-button-icon-left pi"; var currVal_4 = _ck(_v, 6, 0, (!_co.hasFiles() || _co.auto), (_co.hasFiles() && !_co.auto)); _ck(_v, 5, 0, currVal_3, currVal_4); var currVal_6 = !_co.hasFiles(); _ck(_v, 10, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_5 = (_co.auto ? _co.chooseLabel : (_co.hasFiles() ? _co.files[0].name : _co.chooseLabel)); _ck(_v, 8, 0, currVal_5); }); }
export function View_FileUpload_0(_l) { return i0.ɵvid(0, [i0.ɵqud(671088640, 1, { advancedFileInput: 0 }), i0.ɵqud(671088640, 2, { basicFileInput: 0 }), i0.ɵqud(671088640, 3, { content: 0 }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_FileUpload_1)), i0.ɵdid(4, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_FileUpload_13)), i0.ɵdid(6, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.mode === "advanced"); _ck(_v, 4, 0, currVal_0); var currVal_1 = (_co.mode === "basic"); _ck(_v, 6, 0, currVal_1); }, null); }
export function View_FileUpload_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "p-fileUpload", [], null, null, null, View_FileUpload_0, RenderType_FileUpload)), i0.ɵdid(1, 5423104, null, 1, i1.FileUpload, [i0.ElementRef, i11.DomSanitizer, i0.NgZone, i12.HttpClient], null, null), i0.ɵqud(603979776, 1, { templates: 1 })], null, null); }
var FileUploadNgFactory = i0.ɵccf("p-fileUpload", i1.FileUpload, View_FileUpload_Host_0, { name: "name", url: "url", method: "method", multiple: "multiple", accept: "accept", disabled: "disabled", auto: "auto", withCredentials: "withCredentials", maxFileSize: "maxFileSize", invalidFileSizeMessageSummary: "invalidFileSizeMessageSummary", invalidFileSizeMessageDetail: "invalidFileSizeMessageDetail", invalidFileTypeMessageSummary: "invalidFileTypeMessageSummary", invalidFileTypeMessageDetail: "invalidFileTypeMessageDetail", style: "style", styleClass: "styleClass", previewWidth: "previewWidth", chooseLabel: "chooseLabel", uploadLabel: "uploadLabel", cancelLabel: "cancelLabel", showUploadButton: "showUploadButton", showCancelButton: "showCancelButton", mode: "mode", customUpload: "customUpload", files: "files" }, { onBeforeUpload: "onBeforeUpload", onBeforeSend: "onBeforeSend", onUpload: "onUpload", onError: "onError", onClear: "onClear", onRemove: "onRemove", onSelect: "onSelect", onProgress: "onProgress", uploadHandler: "uploadHandler" }, []);
export { FileUploadNgFactory as FileUploadNgFactory };
//# sourceMappingURL=fileupload.ngfactory.js.map