import { Component, OnInit } from '@angular/core';

import { UiSwitchComponent } from '../src/ui-switch.component';

@Component({
    selector: 'app',
    template: require('./app.html'),
    directives: [UiSwitchComponent]
})
export class AppComponent implements OnInit {
    enable: boolean = false;

    constructor() {

    }

    ngOnInit() {

    }
}