import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
    selector: 'ui-switch',
    template: `
        <span class="switch" [class.checked]="checked" [class.disabled]="disabled">
            <small></small>
        </span>
    `,
    styles: [`
        .switch {
            background: #fff;
            border: 1px solid #dfdfdf;
            position: relative;
            display: inline-block;
            box-sizing: content-box;
            overflow: visible;
            width: 52px;
            height: 30px;
            padding: 0;
            margin: 0;
            border-radius: 20px;
            cursor: pointer;
            box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;
            transition: 0.3s ease-out all;
            -webkit-transition: 0.3s ease-out all;
            top: -1px;
        }
        
        .switch small {
            background: #fff;
            border-radius: 100%;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
            width: 30px;
            height: 30px;
            position: absolute;
            top: 0;
            left: 0;
            transition: 0.3s ease-out all;
            -webkit-transition: 0.3s ease-out all;
        }
        
        .switch.checked {
            background: rgb(100, 189, 99);
            border-color: rgb(100, 189, 99);
        }
        
        .switch.checked small {
            left: 22px;
        }
        
        .switch.disabled {
            opacity: .50;
            cursor: not-allowed;
        }
    `]
})
export class UiSwitchComponent {
    @Input() checked: boolean = false;
    @Input() disabled: boolean = false;
    @Output() change = new EventEmitter<boolean>();

    @HostListener('click')
    onToggle() {
        if (this.disabled) return;
        this.checked = !this.checked;
        this.change.emit(this.checked);
    }
}