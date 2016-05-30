import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
    selector: 'ui-switch',
    template: `
        <span class="switch" 
        [class.checked]="checked" 
        [class.disabled]="disabled"
        [class.switch-large]="size === 'large'"
        [class.switch-medium]="size === 'medium'"
        [class.switch-small]="size === 'small'"
        [style.background-color]="checked ? color : defaultBgColor"
        [style.border-color]="checked ? color : defaultBoColor"
        >
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
            padding: 0;
            margin: 0;            
            cursor: pointer;
            box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;
            transition: 0.3s ease-out all;
            -webkit-transition: 0.3s ease-out all;
        }        
                
        small {
            background: #fff;
            border-radius: 100%;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);          
            position: absolute;
            top: 0;
            left: 0;
            transition: 0.3s ease-out all;
            -webkit-transition: 0.3s ease-out all;
        }
        
        .switch-large {
            width: 66px;
            height: 40px;
            border-radius: 40px;
        }

        .switch-large small {
            width: 40px;
            height: 40px;
        }
        
        .switch-medium {
            width: 50px;
            height: 30px;
            border-radius: 30px;
        }
        
        .switch-medium small {
            width: 30px;
            height: 30px;
        }
        
        .switch-small {
            width: 33px;
            height: 20px;
            border-radius: 20px;
        }
        
        .switch-small small {
            width: 20px;
            height: 20px;
        }
        
        .checked {
            background: rgb(100, 189, 99);
            border-color: rgb(100, 189, 99);
        }
        
        .switch-large.checked small {
            left: 26px;
        }
        
        .switch-medium.checked small {
            left: 20px;
        }
        
        .switch-small.checked small {
            left: 13px;
        }
        
        .disabled {
            opacity: .50;
            cursor: not-allowed;
        }
    `]
})
export class UiSwitchComponent {
    @Input() checked: boolean = false;
    @Input() disabled: boolean = false;
    @Input() size: string = 'medium';
    @Output() change = new EventEmitter<boolean>();
    @Input() color: string = 'rgb(100, 189, 99)';
    defaultBgColor: string = '#fff';
    defaultBoColor: string = '#dfdfdf';
    
    @HostListener('click')
    onToggle() {
        if (this.disabled) return;
        this.checked = !this.checked;
        this.change.emit(this.checked);
    }
}