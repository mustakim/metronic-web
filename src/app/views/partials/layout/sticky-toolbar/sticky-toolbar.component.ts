// Angular
import { Component } from '@angular/core';
// Metronic
import { OffcanvasOptions } from '../../../../core/_base/metronic';

@Component({
	selector: 'kt-sticky-toolbar',
	templateUrl: './sticky-toolbar.component.html',
	styleUrls: ['./sticky-toolbar.component.scss']
})
export class StickyToolbarComponent {
	// Public properties
	demoPanelOptions: OffcanvasOptions = {
		overlay: true,
		baseClass: 'kt-demo-panel',
		closeBy: 'kt_demo_panel_close',
		toggleBy: 'kt_demo_panel_toggle'
	};
}
