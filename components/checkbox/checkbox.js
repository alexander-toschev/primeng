var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Component, Input, Output, EventEmitter, forwardRef, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
export var CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return Checkbox; }),
    multi: true
};
var Checkbox = /** @class */ (function () {
    function Checkbox(cd) {
        this.cd = cd;
        this.checkboxIcon = 'pi pi-check';
        this.onChange = new EventEmitter();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
        this.focused = false;
        this.checked = false;
    }
    Checkbox.prototype.onClick = function (event, checkbox, focus) {
        event.preventDefault();
        if (this.disabled) {
            return;
        }
        this.checked = !this.checked;
        this.updateModel();
        if (focus) {
            checkbox.focus();
        }
    };
    Checkbox.prototype.updateModel = function () {
        if (!this.binary) {
            if (this.checked)
                this.addValue();
            else
                this.removeValue();
            this.onModelChange(this.model);
            if (this.formControl) {
                this.formControl.setValue(this.model);
            }
        }
        else {
            this.onModelChange(this.checked);
        }
        this.onChange.emit(this.checked);
    };
    Checkbox.prototype.handleChange = function (event) {
        this.checked = event.target.checked;
        this.updateModel();
    };
    Checkbox.prototype.isChecked = function () {
        if (this.binary)
            return this.model;
        else
            return this.model && this.model.indexOf(this.value) > -1;
    };
    Checkbox.prototype.removeValue = function () {
        var _this = this;
        this.model = this.model.filter(function (val) { return val !== _this.value; });
    };
    Checkbox.prototype.addValue = function () {
        if (this.model)
            this.model = this.model.concat([this.value]);
        else
            this.model = [this.value];
    };
    Checkbox.prototype.onFocus = function (event) {
        this.focused = true;
    };
    Checkbox.prototype.onBlur = function (event) {
        this.focused = false;
        this.onModelTouched();
    };
    Checkbox.prototype.writeValue = function (model) {
        this.model = model;
        this.checked = this.isChecked();
        this.cd.markForCheck();
    };
    Checkbox.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    Checkbox.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    Checkbox.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], Checkbox.prototype, "value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], Checkbox.prototype, "name", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], Checkbox.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], Checkbox.prototype, "binary", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], Checkbox.prototype, "label", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], Checkbox.prototype, "tabindex", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], Checkbox.prototype, "inputId", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], Checkbox.prototype, "style", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], Checkbox.prototype, "styleClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], Checkbox.prototype, "labelStyleClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", FormControl)
    ], Checkbox.prototype, "formControl", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], Checkbox.prototype, "checkboxIcon", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], Checkbox.prototype, "onChange", void 0);
    Checkbox = __decorate([
        Component({
            selector: 'p-checkbox',
            template: "\n        <div [ngStyle]=\"style\" [ngClass]=\"'ui-chkbox ui-widget'\" [class]=\"styleClass\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #cb type=\"checkbox\" [attr.id]=\"inputId\" [name]=\"name\" [value]=\"value\" [checked]=\"checked\" (focus)=\"onFocus($event)\" (blur)=\"onBlur($event)\"\n                [ngClass]=\"{'ui-state-focus':focused}\" (change)=\"handleChange($event)\" [disabled]=\"disabled\" [attr.tabindex]=\"tabindex\">\n            </div>\n            <div class=\"ui-chkbox-box ui-widget ui-corner-all ui-state-default\" (click)=\"onClick($event,cb,true)\"\n                        [ngClass]=\"{'ui-state-active':checked,'ui-state-disabled':disabled,'ui-state-focus':focused}\">\n                <span class=\"ui-chkbox-icon ui-clickable\" [ngClass]=\"checked ? checkboxIcon : null\"></span>\n            </div>\n        </div>\n        <label (click)=\"onClick($event,cb,true)\" [class]=\"labelStyleClass\"\n                [ngClass]=\"{'ui-chkbox-label': true, 'ui-label-active':checked, 'ui-label-disabled':disabled, 'ui-label-focus':focused}\"\n                *ngIf=\"label\" [attr.for]=\"inputId\">{{label}}</label>\n    ",
            providers: [CHECKBOX_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], Checkbox);
    return Checkbox;
}());
export { Checkbox };
var CheckboxModule = /** @class */ (function () {
    function CheckboxModule() {
    }
    CheckboxModule = __decorate([
        NgModule({
            imports: [CommonModule],
            exports: [Checkbox],
            declarations: [Checkbox]
        })
    ], CheckboxModule);
    return CheckboxModule;
}());
export { CheckboxModule };
//# sourceMappingURL=checkbox.js.map