"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var accordion = {
    beforeCodeTitle: 'Accordion',
    htmlCode: "\n<div class=\"kt-section\">\n  <h3 class=\"kt-section__heading\">Self closing</h3>\n  <div class=\"kt-section__content\">\n    <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\n      <ngb-panel>\n        <ng-template ngbPanelTitle>\n\t      <span class=\"card-header--title\">Simple</span>\n        </ng-template>\n        <ng-template ngbPanelContent>\n\t\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n\t\t  aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n\t\t  sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n\t\t  craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat\n          craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n\t    </ng-template>\n      </ngb-panel>\n      <ngb-panel>\n        <ng-template ngbPanelTitle>\n          <span class=\"card-header--title\">&#9733;\n\t\t    <b>Fancy</b> title &#9733;\n          </span>\n        </ng-template>\n        <ng-template ngbPanelContent>\n\t\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n\t\t  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua\n\t\t  put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore\n\t\t  wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,\n          raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n        </ng-template>\n      </ngb-panel>\n      <ngb-panel [disabled]=\"true\">\n        <ng-template ngbPanelTitle>\n          <span class=\"card-header--title\">Disabled</span>\n        </ng-template>\n        <ng-template ngbPanelContent>\n\t\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.\n          3 wolf moon officia aute,\n\t\t  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf\n          moon tempor, sunt aliqua put a bird\n\t\t  on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n          craft beer labore wes anderson cred nesciunt\n\t\t  sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,\n          raw denim aesthetic synth nesciunt you\n          probably haven't heard of them accusamus labore sustainable VHS.\n        </ng-template>\n\t  </ngb-panel>\n    </ngb-accordion>\n   </div>\n</div>\n",
    tsCode: "\nimport { Component } from '@angular/core';\n\n@Component({\n  selector: 'ngbd-accordion-basic',\n  templateUrl: './accordion-basic.html'\n})\nexport class NgbdAccordionBasic {}",
    viewCode: "",
    isCodeVisible: false,
    isExampleExpanded: true
};
var oneOpenPanelAtAHome = {
    beforeCodeTitle: 'One open panel at a time',
    htmlCode: "\n<ngb-accordion [closeOthers]=\"true\" activeIds=\"static-1\">\n  <ngb-panel id=\"static-1\">\n    <ng-template ngbPanelTitle>\n      <span class=\"card-header--title\">Simple</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n\t  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua\n\t  put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore\n\t  wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,\n      raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel id=\"static-2\">\n  <ng-template ngbPanelTitle>\n     <span>&#9733;\n\t\t<b>Fancy</b> title &#9733;\n    </span>\n  </ng-template>\n  <ng-template ngbPanelContent>\n\tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non\n\tcupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird\n\ton it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred\n\tnesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim\n    aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n  </ng-template>\n  </ngb-panel>\n  <ngb-panel id=\"static-3\" [disabled]=\"true\">\n    <ng-template ngbPanelTitle>\n      <span class=\"card-header--title\">Disabled</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non\n\t  cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird\n\t  on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson\n\t  cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic\n      synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </ng-template>\n   </ngb-panel>\n</ngb-accordion>",
    tsCode: "\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'ngbd-accordion-static',\n\ttemplateUrl: './accordion-static.html',\n    styles: [`\n        .card-header--title {\n        display:block;\n    }\n    `],\n})\nexport class NgbdAccordionStatic {\n}",
    viewCode: "",
    isCodeVisible: false
};
var togglePanels = {
    beforeCodeTitle: 'Toggle panels',
    htmlCode: "\n<ngb-accordion #acc11=\"ngbAccordion\">\n  <ngb-panel id=\"toggle-11\">\n    <ng-template ngbPanelTitle>\n      <span class=\"card-header--title\">First panel</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n\t  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua\n\t  put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer\n\t  labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft\n      beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel id=\"toggle-22\">\n    <ng-template ngbPanelTitle>\n      <span class=\"card-header--title\">Second</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n\t  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua\n\t  put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer\n\t  labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft\n      beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n</ngb-accordion>\n<div class=\"kt-separator kt-separator--dashed\"></div>\n<button class=\"btn btn-primary\" (click)=\"acc11.toggle('toggle-11')\">Toggle first</button>\n<button class=\"btn btn-info\" (click)=\"acc11.toggle('toggle-22')\">Toggle second</button>\n\t  ",
    tsCode: "\nimport {Component} from '@angular/core';\n\n@Component({\n  selector: 'ngbd-accordion-toggle',\n  templateUrl: './accordion-toggle.html'\n})\nexport class NgbdAccordionToggle { }\n",
    viewCode: "",
    isCodeVisible: false
};
var preventPanelToggle = {
    beforeCodeTitle: 'Prevent panel toggle',
    htmlCode: "\n<ngb-accordion (panelChange)=\"beforeChange($event)\">\n  <ngb-panel id=\"preventchange-1\">\n    <ng-template ngbPanelTitle>\n      <span class=\"card-header--title\">Simple</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n\t  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua\n\t put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer\n\t labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer\n     farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel id=\"preventchange-2\">\n    <ng-template ngbPanelTitle>\n      <span class=\"card-header--title\">I can't be toggled...</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n\t  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua\n\t put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore\n\t wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,\n     raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel id=\"preventchange-3\">\n    <ng-template ngbPanelTitle>\n      <span class=\"card-header--title\">I can be opened, but not closed...\"</span>\n    </ng-template>\n    <ng-template ngbPanelContent>\n\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,\n\t  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua\n\t  put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore\n\t  wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,\n      raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n    </ng-template>\n  </ngb-panel>\n</ngb-accordion>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-accordion-preventchange',\n    templateUrl: './accordion-preventchange.html',\n})\nexport class NgbdAccordionPreventchange {\n    public beforeChange($event: NgbPanelChangeEvent) {\n\n        if ($event.panelId === 'preventchange-2') {\n            $event.preventDefault();\n        }\n\n        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {\n            $event.preventDefault();\n        }\n    };\n}",
    viewCode: "",
    isCodeVisible: false
};
var globalConfigurationOfAccordions = {
    beforeCodeTitle: 'Global configuration of accordions',
    htmlCode: "\n<div class=\"kt-section\">\n  <span class=\"kt-section__sub\">\n    This accordion uses customized default values.\n  </span>\n  <div class=\"kt-section__content\">\n    <ngb-accordion #acc33=\"ngbAccordion\" activeIds=\"config-panel-one\">\n      <ngb-panel id=\"config-panel-one\">\n        <ng-template ngbPanelTitle>\n          <span class=\"card-header--title\">One</span>\n        </ng-template>\n        <ng-template ngbPanelContent>\n\t\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\n\t\t  aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\n\t\t  sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\n\t\t  craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat\n          craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n        </ng-template>\n      </ngb-panel>\n      <ngb-panel>\n        <ng-template ngbPanelTitle>\n          <span class=\"card-header--title\">Two</span>\n        </ng-template>\n        <ng-template ngbPanelContent>\n\t\t  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non\n\t\t  cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird\n\t\t  on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred\n\t\t  nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic\n          synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n        </ng-template>\n      </ngb-panel>\n    </ngb-accordion>\n   </div>\n</div>",
    tsCode: "\nimport {Component} from '@angular/core';\nimport {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';\n\n@Component({\n    selector: 'ngbd-accordion-config',\n        templateUrl: './accordion-config.html',\n        providers: [NgbAccordionConfig] // add the NgbAccordionConfig to the component providers\n    })\n\nexport class NgbdAccordionConfig {\n    constructor(config: NgbAccordionConfig) {\n        // customize default values of accordions used by this component tree\n        config.closeOthers = true;\n\t    config.type = 'info';\n    }\n}",
    viewCode: "",
    isCodeVisible: false
};
var AccordionComponent = /** @class */ (function () {
    function AccordionComponent(config) {
        // customize default values of accordions used by this component tree
        // config.closeOthers = true;
        //  config.type = 'info';
    }
    AccordionComponent.prototype.ngOnInit = function () {
        this.exampleAccordion = accordion;
        this.exampleOneOpenPanelAtAHome = oneOpenPanelAtAHome;
        this.exampleTogglePanels = togglePanels;
        this.examplePreventPanelToggle = preventPanelToggle;
        this.exampleGlobalConfigurationOfAccordions = globalConfigurationOfAccordions;
    };
    // api methods
    // ng-methods
    AccordionComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === 'preventchange-2') {
            $event.preventDefault();
        }
        if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    AccordionComponent = __decorate([
        core_1.Component({
            selector: 'kt-accordion',
            templateUrl: './accordion.component.html',
            styles: ["\n\t\t.card-header--title {\n\t\t\tdisplay:block;\n\t\t}\n\t"],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            providers: [ng_bootstrap_1.NgbAccordionConfig] // add the NgbAccordionConfig to the component providers
        })
    ], AccordionComponent);
    return AccordionComponent;
}());
exports.AccordionComponent = AccordionComponent;
