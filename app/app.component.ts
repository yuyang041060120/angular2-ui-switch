import { Component, OnInit } from '@angular/core';

import { UiSwitchComponent } from '../src/ui-switch.component';

@Component({
    selector: 'app',
    templateUrl: 'app/app.html',
    styles:[`
        .container{
            width: 960px;
            margin: 0 auto;
        }
    `],
    directives: [UiSwitchComponent]
})
export class AppComponent implements OnInit {
    enable: boolean = false;

    constructor() {

    }

    ngOnInit() {

    }
}