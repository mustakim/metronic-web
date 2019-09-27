"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
// Angular
var core_1 = require("@angular/core");
// Charts
var chart_js_1 = require("chart.js");
var Widget14Component = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param layoutConfigService: LayoutConfigService
     */
    function Widget14Component(layoutConfigService) {
        this.layoutConfigService = layoutConfigService;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    Widget14Component.prototype.ngOnInit = function () {
        if (!this.data) {
            this.data = {
                labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6', 'Label 7', 'Label 8', 'Label 9', 'Label 10', 'Label 11', 'Label 12', 'Label 13', 'Label 14', 'Label 15', 'Label 16'],
                datasets: [
                    {
                        // label: 'dataset 1',
                        backgroundColor: this.layoutConfigService.getConfig('colors.state.success'),
                        data: [
                            15, 20, 25, 30, 25, 20, 15, 20, 25, 30, 25, 20, 15, 10, 15, 20
                        ]
                    }, {
                        // label: 'dataset 2',
                        backgroundColor: '#f3f3fb',
                        data: [
                            15, 20, 25, 30, 25, 20, 15, 20, 25, 30, 25, 20, 15, 10, 15, 20
                        ]
                    }
                ]
            };
        }
        this.initChartJS();
    };
    /** Init chart */
    Widget14Component.prototype.initChartJS = function () {
        // For more information about the chartjs, visit this link
        // https://www.chartjs.org/docs/latest/getting-started/usage.html
        var chart = new chart_js_1.Chart(this.chart.nativeElement, {
            type: 'bar',
            data: this.data,
            options: {
                title: {
                    display: false
                },
                tooltips: {
                    intersect: false,
                    mode: 'nearest',
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10
                },
                legend: {
                    display: false
                },
                responsive: true,
                maintainAspectRatio: false,
                barRadius: 4,
                scales: {
                    xAxes: [{
                            display: false,
                            gridLines: false,
                            stacked: true
                        }],
                    yAxes: [{
                            display: false,
                            stacked: true,
                            gridLines: false
                        }]
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }
            }
        });
    };
    __decorate([
        core_1.Input()
    ], Widget14Component.prototype, "title");
    __decorate([
        core_1.Input()
    ], Widget14Component.prototype, "desc");
    __decorate([
        core_1.Input()
    ], Widget14Component.prototype, "data");
    __decorate([
        core_1.ViewChild('chart')
    ], Widget14Component.prototype, "chart");
    Widget14Component = __decorate([
        core_1.Component({
            selector: 'kt-widget14',
            templateUrl: './widget14.component.html',
            styleUrls: ['./widget14.component.scss']
        })
    ], Widget14Component);
    return Widget14Component;
}());
exports.Widget14Component = Widget14Component;
