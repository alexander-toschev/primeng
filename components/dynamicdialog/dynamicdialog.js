var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, NgModule, ComponentFactoryResolver, ViewChild, ChangeDetectorRef, Renderer2, NgZone, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DynamicDialogContent } from './dynamicdialogcontent';
import { DynamicDialogConfig } from './dynamicdialog-config';
import { CommonModule } from '@angular/common';
import { DomHandler } from '../dom/domhandler';
import { DynamicDialogRef } from './dynamicdialog-ref';
var DynamicDialogComponent = /** @class */ (function () {
    function DynamicDialogComponent(componentFactoryResolver, cd, renderer, config, dialogRef, zone) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.cd = cd;
        this.renderer = renderer;
        this.config = config;
        this.dialogRef = dialogRef;
        this.zone = zone;
        this.visible = true;
    }
    DynamicDialogComponent.prototype.ngAfterViewInit = function () {
        this.loadChildComponent(this.childComponentType);
        this.cd.detectChanges();
    };
    DynamicDialogComponent.prototype.onOverlayClicked = function (evt) {
        this.dialogRef.close();
    };
    DynamicDialogComponent.prototype.onDialogClicked = function (evt) {
        evt.stopPropagation();
    };
    DynamicDialogComponent.prototype.loadChildComponent = function (componentType) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        var viewContainerRef = this.insertionPoint.viewContainerRef;
        viewContainerRef.clear();
        this.componentRef = viewContainerRef.createComponent(componentFactory);
    };
    DynamicDialogComponent.prototype.moveOnTop = function () {
        if (this.config.autoZIndex !== false) {
            var zIndex = this.config.baseZIndex || 0 + (++DomHandler.zindex);
            this.container.style.zIndex = String(zIndex);
            this.maskViewChild.nativeElement.style.zIndex = String(zIndex - 1);
        }
    };
    DynamicDialogComponent.prototype.onAnimationStart = function (event) {
        switch (event.toState) {
            case 'visible':
                this.container = event.element;
                this.moveOnTop();
                this.bindGlobalListeners();
                DomHandler.addClass(document.body, 'ui-overflow-hidden');
                break;
            case 'void':
                this.onContainerDestroy();
                break;
        }
    };
    DynamicDialogComponent.prototype.onAnimationEnd = function (event) {
        if (event.toState === 'void') {
            this.dialogRef.close();
        }
    };
    DynamicDialogComponent.prototype.onContainerDestroy = function () {
        DomHandler.removeClass(document.body, 'ui-overflow-hidden');
        this.unbindGlobalListeners();
        this.container = null;
    };
    DynamicDialogComponent.prototype.close = function () {
        this.visible = false;
    };
    DynamicDialogComponent.prototype.onMaskClick = function () {
        if (this.config.dismissableMask) {
            this.close();
        }
    };
    DynamicDialogComponent.prototype.bindGlobalListeners = function () {
        if (this.config.closeOnEscape !== false && this.config.closable !== false) {
            this.bindDocumentEscapeListener();
        }
    };
    DynamicDialogComponent.prototype.unbindGlobalListeners = function () {
        this.unbindDocumentEscapeListener();
    };
    DynamicDialogComponent.prototype.bindDocumentEscapeListener = function () {
        var _this = this;
        this.documentEscapeListener = this.renderer.listen('document', 'keydown', function (event) {
            if (event.which == 27) {
                if (parseInt(_this.container.style.zIndex) == DomHandler.zindex) {
                    _this.close();
                }
            }
        });
    };
    DynamicDialogComponent.prototype.unbindDocumentEscapeListener = function () {
        if (this.documentEscapeListener) {
            this.documentEscapeListener();
            this.documentEscapeListener = null;
        }
    };
    DynamicDialogComponent.prototype.ngOnDestroy = function () {
        this.onContainerDestroy();
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    };
    __decorate([
        ViewChild(DynamicDialogContent),
        __metadata("design:type", DynamicDialogContent)
    ], DynamicDialogComponent.prototype, "insertionPoint", void 0);
    __decorate([
        ViewChild('mask'),
        __metadata("design:type", ElementRef)
    ], DynamicDialogComponent.prototype, "maskViewChild", void 0);
    DynamicDialogComponent = __decorate([
        Component({
            selector: 'p-dynamicDialog',
            template: "\n\t\t<div #mask class=\"ui-widget-overlay ui-dialog-mask ui-dialog-mask-scrollblocker\" *ngIf=\"visible\" (click)=\"onMaskClick()\"></div>\n\t\t<div [ngClass]=\"{'ui-dialog ui-dynamicdialog ui-widget ui-widget-content ui-corner-all ui-shadow':true, 'ui-dialog-rtl': config.rtl}\" [ngStyle]=\"config.style\" [class]=\"config.styleClass\"\n\t\t\t[@animation]=\"{value: 'visible', params: {transitionParams: config.transitionOptions || '150ms cubic-bezier(0, 0, 0.2, 1)'}}\" \n\t\t\t(@animation.start)=\"onAnimationStart($event)\" (@animation.done)=\"onAnimationEnd($event)\" role=\"dialog\" *ngIf=\"visible\"\n\t\t\t[style.width]=\"config.width\" [style.height]=\"config.height\">\n            <div class=\"ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top\" *ngIf=\"config.showHeader === false ? false: true\">\n                <span class=\"ui-dialog-title\">{{config.header}}</span>\n                <a [ngClass]=\"'ui-dialog-titlebar-icon ui-dialog-titlebar-close ui-corner-all'\" tabindex=\"0\" role=\"button\" (click)=\"close()\" (keydown.enter)=\"close()\" *ngIf=\"config.closable === false ? false : true\">\n                    <span class=\"pi pi-times\"></span>\n                </a>\n            </div>\n            <div class=\"ui-dialog-content ui-widget-content\" [ngStyle]=\"config.contentStyle\">\n\t\t\t\t<ng-template pDynamicDialogContent></ng-template>\n\t\t\t</div>\n\t\t\t<div class=\"ui-dialog-footer ui-widget-content\" *ngIf=\"config.footer\">\n\t\t\t\t{{config.footer}}\n            </div>\n\t\t</div>\n\t",
            animations: [
                trigger('animation', [
                    state('void', style({
                        transform: 'translateX(-50%) translateY(-50%) scale(0.7)',
                        opacity: 0
                    })),
                    state('visible', style({
                        transform: 'translateX(-50%) translateY(-50%) scale(1)',
                        opacity: 1
                    })),
                    transition('* => *', animate('{{transitionParams}}'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [ComponentFactoryResolver, ChangeDetectorRef, Renderer2,
            DynamicDialogConfig, DynamicDialogRef, NgZone])
    ], DynamicDialogComponent);
    return DynamicDialogComponent;
}());
export { DynamicDialogComponent };
var DynamicDialogModule = /** @class */ (function () {
    function DynamicDialogModule() {
    }
    DynamicDialogModule = __decorate([
        NgModule({
            imports: [CommonModule],
            declarations: [DynamicDialogComponent, DynamicDialogContent],
            entryComponents: [DynamicDialogComponent]
        })
    ], DynamicDialogModule);
    return DynamicDialogModule;
}());
export { DynamicDialogModule };
//# sourceMappingURL=dynamicdialog.js.map